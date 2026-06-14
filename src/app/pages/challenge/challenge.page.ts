import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline, trophyOutline, shareSocialOutline, playOutline } from 'ionicons/icons';
import { NavController, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons,
  IonIcon, IonButton, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonList, IonItem, IonLabel, IonNote, IonBadge, IonSpinner } from '@ionic/angular/standalone';
import { ChallengeCodecService } from '../../services/challenge-codec';
import { SyncService, RankingEntry } from '../../services/sync';
import { SaveProgressService } from '../../services/save-progress';
import { GameStateService } from '../../services/game-state';
import { AuthService } from '../../services/auth';

const CODE_RE = /^BMS-[a-z0-9]+-[a-z0-9]+-[a-zA-Z0-9+/]+=*$/;
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge.page.html',
  styleUrls: ['./challenge.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons,
    IonIcon, IonButton, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonList, IonItem, IonLabel, IonNote, IonBadge, IonSpinner],
})
export class ChallengePageComponent implements OnInit {
  private readonly codec = inject(ChallengeCodecService);
  private readonly sync = inject(SyncService);
  readonly save = inject(SaveProgressService);
  readonly gameState = inject(GameStateService);
  readonly auth = inject(AuthService);
  private readonly nav = inject(NavController);
  private readonly route = inject(ActivatedRoute);

  readonly codeInput = signal('');
  readonly validationErr = signal<string | null>(null);
  readonly decoded = signal<{ seed: string; targetScore: number; creatorName: string } | null>(null);
  readonly ranking = signal<RankingEntry[]>([]);
  readonly rankingLoading = signal(false);
  readonly creatorName = signal('');
  readonly generatedCode = signal<string | null>(null);
  readonly copied = signal(false);

  readonly activeDuel = signal<any | null>(null);
  readonly myDuels = signal<any[]>([]);
  readonly duelGenerationLoading = signal(false);
  readonly hasPlayedDaily = signal(false);

  readonly canGenerate = computed(() => this.save.progress().highScores['classic'] > 0);

  constructor() { addIcons({ arrowBackOutline, trophyOutline, shareSocialOutline, playOutline }); }

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      const duelId = params['id'] || params['duelId'];
      if (duelId) {
        this.rankingLoading.set(true);
        const duel = await this.sync.fetchDuelDetails(duelId);
        if (duel) {
          this.activeDuel.set(duel);
          this.decoded.set({
            seed: duel.seed,
            targetScore: duel.creator_score,
            creatorName: duel.creator_username
          });
          this.validationErr.set(null);
        } else {
          this.validationErr.set('No se pudo encontrar el duelo especificado.');
        }
        this.rankingLoading.set(false);
      }
    });

    this.loadMyDuels();
    this.checkDailyChallengeStatus();
  }

  async loadMyDuels() {
    if (this.auth.isAuthenticated()) {
      const duels = await this.sync.fetchMyActiveDuels();
      this.myDuels.set(duels);
    }
  }

  async checkDailyChallengeStatus() {
    if (this.auth.isAuthenticated()) {
      const seed = this.sync.getDailySeed();
      const played = await this.sync.hasPlayedDailyChallenge(seed);
      this.hasPlayedDaily.set(played);
    }
  }

  playDailyChallenge() {
    this.nav.navigateForward('/game', {
      state: {
        isDailyChallenge: true
      }
    });
  }

  goBack() { this.nav.back(); }

  onCodeInput(v: string) { this.codeInput.set(v); this.decoded.set(null); this.validationErr.set(null); }

  async onValidateCode() {
    const code = this.codeInput().trim();
    if (UUID_RE.test(code)) {
      this.rankingLoading.set(true);
      const duel = await this.sync.fetchDuelDetails(code);
      if (duel) {
        this.activeDuel.set(duel);
        this.decoded.set({
          seed: duel.seed,
          targetScore: duel.creator_score,
          creatorName: duel.creator_username
        });
        this.validationErr.set(null);
      } else {
        this.validationErr.set('No se encontró ningún Duelo en la nube con ese ID.');
      }
      this.rankingLoading.set(false);
      return;
    }

    if (!CODE_RE.test(code)) { this.validationErr.set('ID de Duelo (UUID) o código de Reto BMS no válido.'); return; }
    try {
      const d = this.codec.decodeChallenge(code);
      const score = Math.max(0, Math.min(1_000_000, d.targetScore));
      if (!isFinite(score)) { this.validationErr.set('El código contiene una puntuación inválida.'); return; }
      const name = d.creatorName.replace(/[<>&"']/g, '').substring(0, 8);
      this.activeDuel.set(null);
      this.decoded.set({ ...d, targetScore: score, creatorName: name });
      this.validationErr.set(null);
    } catch { this.validationErr.set('No se pudo leer el código. Verifica que esté completo.'); }
  }

  onPlayChallenge() {
    const d = this.decoded();
    if (!d) return;
    const duel = this.activeDuel();
    this.nav.navigateForward('/game', {
      state: {
        challengeSeed: d.seed,
        targetScore: d.targetScore,
        duelId: duel ? duel.id : null
      }
    });
  }

  async onLoadRanking() {
    const code = this.codeInput().trim();
    if (!code) return;
    this.rankingLoading.set(true);
    this.ranking.set(await this.sync.fetchChallengeRanking(code));
    this.rankingLoading.set(false);
  }

  onCreatorNameInput(v: string) {
    this.creatorName.set(v.replace(/[<>&"']/g, '').substring(0, 8));
    this.generatedCode.set(null);
  }

  async onGenerateDuel() {
    if (!this.auth.isAuthenticated()) {
      this.validationErr.set('Debes iniciar sesión para poder crear duelos online.');
      return;
    }
    this.duelGenerationLoading.set(true);
    const seed = this.gameState.sessionSeed();
    const score = this.save.progress().highScores['classic'];
    const boardDimension = 8;
    const pieceSet = 'classic';
    const difficulty = 'medium';

    const duelId = await this.sync.createDuel(seed, boardDimension, pieceSet, difficulty, score);
    if (duelId) {
      const shareUrl = `${window.location.origin}/challenge?id=${duelId}`;
      this.generatedCode.set(shareUrl);
      this.copied.set(false);
      await this.loadMyDuels();
    } else {
      this.validationErr.set('Error al registrar el duelo en la nube de Supabase.');
    }
    this.duelGenerationLoading.set(false);
  }

  onGenerateCode() {
    const name = this.creatorName().trim() || 'Anón';
    const seed = this.gameState.sessionSeed();
    const score = this.save.progress().highScores['classic'];
    this.generatedCode.set(this.codec.encodeChallenge(seed, score, name));
    this.copied.set(false);
  }

  async onCopy() {
    const code = this.generatedCode();
    if (!code) return;
    await navigator.clipboard.writeText(code);
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }

  goToLogin() {
    this.nav.navigateForward('/auth');
  }

  async playDuelFromList(duel: any) {
    this.activeDuel.set(duel);
    this.nav.navigateForward('/game', {
      state: {
        challengeSeed: duel.seed,
        targetScore: duel.creator_score,
        duelId: duel.id
      }
    });
  }
}
