import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonButton, IonInput } from '@ionic/angular/standalone';
import { ChallengeCodecService } from '../../services/challenge-codec';
import { SyncService, RankingEntry } from '../../services/sync';
import { SaveProgressService } from '../../services/save-progress';
import { GameStateService } from '../../services/game-state';

const CODE_RE = /^BMS-[a-z0-9]+-[a-z0-9]+-[a-zA-Z0-9+/]+=*$/;

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge.page.html',
  styleUrls: ['./challenge.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons,
    IonBackButton, IonButton, IonInput],
})
export class ChallengePageComponent {
  private readonly codec = inject(ChallengeCodecService);
  private readonly sync = inject(SyncService);
  readonly save = inject(SaveProgressService);
  readonly gameState = inject(GameStateService);
  private readonly router = inject(Router);

  readonly codeInput = signal('');
  readonly validationErr = signal<string | null>(null);
  readonly decoded = signal<{ seed: string; targetScore: number; creatorName: string } | null>(null);
  readonly ranking = signal<RankingEntry[]>([]);
  readonly rankingLoading = signal(false);
  readonly creatorName = signal('');
  readonly generatedCode = signal<string | null>(null);
  readonly copied = signal(false);

  readonly canGenerate = computed(() => this.save.progress().highScores['classic'] > 0);

  onCodeInput(v: string) { this.codeInput.set(v); this.decoded.set(null); this.validationErr.set(null); }

  onValidateCode() {
    const code = this.codeInput().trim();
    if (!CODE_RE.test(code)) { this.validationErr.set('Código inválido. Asegúrate de copiarlo completo.'); return; }
    try {
      const d = this.codec.decodeChallenge(code);
      const score = Math.max(0, Math.min(1_000_000, d.targetScore));
      if (!isFinite(score)) { this.validationErr.set('El código contiene una puntuación inválida.'); return; }
      const name = d.creatorName.replace(/[<>&"']/g, '').substring(0, 8);
      this.decoded.set({ ...d, targetScore: score, creatorName: name });
      this.validationErr.set(null);
    } catch { this.validationErr.set('No se pudo leer el código. Verifica que esté completo.'); }
  }

  onPlayChallenge() {
    const d = this.decoded();
    if (!d) return;
    this.router.navigate(['/game'], { state: { challengeSeed: d.seed, targetScore: d.targetScore } });
  }

  async onLoadRanking() {
    const code = this.codeInput().trim();
    if (!code) return;
    this.rankingLoading.set(true);
    const entries = await this.sync.fetchChallengeRanking(code);
    this.ranking.set(entries);
    this.rankingLoading.set(false);
  }

  onCreatorNameInput(v: string) {
    this.creatorName.set(v.replace(/[<>&"']/g, '').substring(0, 8));
    this.generatedCode.set(null);
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
}
