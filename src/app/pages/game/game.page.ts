import { Component, inject, signal, computed, ViewChild, ElementRef,
  AfterViewInit, OnDestroy, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlertController, IonContent, IonButton } from '@ionic/angular/standalone';
import { GameStateService } from '../../services/game-state';
import { ChildModeService } from '../../services/child-mode';
import { SaveProgressService } from '../../services/save-progress';
import { SettingsService } from '../../services/settings';
import { SyncService } from '../../services/sync';
import { QuestService } from '../../services/quest.service';
import { AdMobService } from '../../services/admob.service';
import { ScoreBarComponent } from '../../components/score-bar/score-bar.component';
import { SleepOverlayComponent } from '../../components/sleep-overlay/sleep-overlay.component';
import { ParentalGateComponent } from '../../components/parental-gate/parental-gate.component';

@Component({
  selector: 'app-game-page',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonButton, ScoreBarComponent, SleepOverlayComponent, ParentalGateComponent],
})
export class GamePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('phaserContainer') phaserContainer!: ElementRef<HTMLDivElement>;

  readonly gameState = inject(GameStateService);
  readonly childMode = inject(ChildModeService);
  readonly save = inject(SaveProgressService);
  readonly settings = inject(SettingsService);
  readonly quests = inject(QuestService);
  readonly router = inject(Router);
  private readonly alertCtrl = inject(AlertController);
  private readonly sync = inject(SyncService);
  private readonly admob = inject(AdMobService);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private phaserGame: any = null;
  private challengeSeed: string | null = null;
  private duelId: string | null = null;
  private isDailyChallenge = false;

  readonly showGate = signal(false);
  readonly showUnlockChoice = signal(false);
  readonly isGameOver = signal(false);
  readonly isNewRecord = signal(false);
  readonly isReadOnly = signal(false);

  readonly xpEarned = signal(0);
  readonly leveledUp = signal(false);
  readonly newLevel = signal(1);

  readonly currentRecord = computed(() =>
    this.save.progress().highScores[this.gameState.mode()] ?? 0);

  constructor() {
    effect(() => {
      if (this.childMode.isSleepPending() && this.phaserGame)
        this.phaserGame.events.emit('bms:sleep-pending');
    });
    effect(() => {
      const s = this.settings.settings();
      if (this.phaserGame)
        this.phaserGame.events.emit('bms:settings-volume', { music: s.musicVolume, sfx: s.sfxVolume });
    });
  }

  async ngAfterViewInit() {
    const state = history.state;
    if (state?.isDailyChallenge) {
      this.isDailyChallenge = true;
      this.challengeSeed = this.sync.getDailySeed();
      this.gameState.setMode('challenge');
      this.gameState.setTargetScore(0);
      this.duelId = null;
    } else if (state?.challengeSeed) {
      this.challengeSeed = state.challengeSeed;
      this.duelId = state.duelId ?? null;
      this.isDailyChallenge = false;
      this.gameState.setMode('challenge');
      this.gameState.setTargetScore(state.targetScore ?? 0);
    } else {
      this.gameState.resetSession();
      this.duelId = null;
      this.isDailyChallenge = false;
    }
    await this.initPhaserGame();
  }

  ngOnDestroy() {
    this.save.updateHighScore(this.gameState.mode(), this.gameState.score());
    this.phaserGame?.destroy(true);
    this.phaserGame = null;
    this.childMode.stopSession();
  }

  private getActiveScene(): any {
    return this.phaserGame?.scene?.getScene('GameScene') ?? null;
  }

  private async initPhaserGame() {
    const { createPhaserGame } = await import('../../../game/index');
    const s    = this.settings.settings();
    const mode = this.gameState.mode();

    // Restore saved game if available for this mode
    const savedState = this.save.hasSavedGame(mode)
      ? this.save.progress().savedGame
      : undefined;

    if (savedState) {
      // Restore score and combo from saved state
      this.gameState.addScore(savedState.score);
      this.save.clearGameState();
    }

    let gameDifficulty: 'easy' | 'medium' | 'hard' = s.difficulty;
    if (mode === 'child-1') {
      gameDifficulty = s.difficultyChild1;
    } else if (mode === 'child-2') {
      gameDifficulty = s.difficultyChild2;
    } else if (mode === 'child-3') {
      gameDifficulty = s.difficultyChild3;
    }

    const config = {
      ...(this.childMode.isChildMode()
        ? { boardDimension: this.childMode.boardDimension(), pieceSet: this.childMode.pieceSet() }
        : {}),
      seed: this.challengeSeed ?? this.gameState.sessionSeed(),
      activeSkin: this.save.progress().activeSkin,
      smilingFacesEnabled: s.smilingFacesEnabled,
      musicVolume: s.musicVolume,
      sfxVolume: s.sfxVolume,
      difficulty: gameDifficulty,
      savedState,
    };
    this.phaserGame = createPhaserGame(this.phaserContainer.nativeElement, this.gameState, config);

    let blocksPlacedInGame = 0;
    let maxComboInGame = 0;
    let cellsClearedInGame = 0;

    this.phaserGame.events.on('bms:blocks-placed', (count: number) => {
      blocksPlacedInGame += count;
      this.save.recordBlocksPlaced(count);
      this.quests.updateProgress('place', count);
    });

    this.phaserGame.events.on('bms:combo', (combo: number) => {
      if (combo > maxComboInGame) {
        maxComboInGame = combo;
      }
      this.save.recordCombo(combo);
      this.quests.updateProgress('combo', combo);
    });

    this.phaserGame.events.on('bms:cleared-cells', (count: number) => {
      cellsClearedInGame += count;
      this.quests.updateProgress('break', cellsClearedInGame);
    });

    this.phaserGame.events.on('bms:tray-empty', () => this.childMode.onTrayEmptyWhilePending());
    this.phaserGame.events.on('bms:game-over', () => {
      const score = this.gameState.score();
      const mode = this.gameState.mode();
      const elapsed = this.gameState.elapsedTime();
      const isNew = score > (this.save.progress().highScores[mode] ?? 0);
      this.save.updateHighScore(mode, score);
      this.save.recordGameEnd(elapsed);
      this.isNewRecord.set(isNew);

      // Calculate XP
      let earned = 25; // base
      if (maxComboInGame >= 2 && maxComboInGame <= 3) {
        earned += 10;
      } else if (maxComboInGame >= 4 && maxComboInGame <= 5) {
        earned += 25;
      } else if (maxComboInGame >= 6) {
        earned += 50;
      }

      if (isNew) {
        earned += 100;
      }

      const isDuelWon = this.duelId && (score > this.gameState.targetScore());
      if (isDuelWon) {
        earned += 50;
      }

      if (this.duelId) {
        this.save.recordDuelCompleted();
      }

      const { levelUp, newLevel } = this.save.addXp(earned);
      this.xpEarned.set(earned);
      this.leveledUp.set(levelUp);
      this.newLevel.set(newLevel);

      // Sync updated profile to cloud
      const updatedProgress = this.save.progress();
      this.sync.syncUserProfile({
        xp: updatedProgress.xp,
        level: updatedProgress.level,
        selectedTitle: updatedProgress.selectedTitle,
        unlockedTitles: updatedProgress.unlockedTitles,
        unlockedAchievements: updatedProgress.unlockedAchievements,
        blocksPlacedCount: updatedProgress.blocksPlacedCount,
        duelsCompletedCount: updatedProgress.duelsCompletedCount,
        maxComboAchieved: updatedProgress.maxComboAchieved,
        stars: updatedProgress.completedStarsCount,
        unlockedSkins: updatedProgress.unlockedSkins,
        adsRemoved: updatedProgress.adsRemoved,
      });

      this.isGameOver.set(true);
      this.sync.submitScore(score, mode, elapsed);
      if (mode === 'classic') {
        this.admob.recordClassicGamePlayed();
      }
      if (this.isDailyChallenge) {
        const seed = this.sync.getDailySeed();
        this.sync.submitDailyChallengeScore(score, seed);
        this.sync.addLeaguePoints(50);
      }
      if (this.duelId) {
        this.sync.submitDuelResult(this.duelId, score);
        this.sync.addLeaguePoints(30);
      }
    });
  }

  onOpenGate()    { this.showGate.set(true); }
  onUnlocked()    { this.showGate.set(false); this.showUnlockChoice.set(true); }
  onGateDismissed() { this.showGate.set(false); }

  async onBackClick() {
    if (this.isGameOver()) { this.onReturnToMenu(); return; }
    if (this.childMode.isChildMode()) { this.showGate.set(true); return; }
    const alert = await this.alertCtrl.create({
      header: 'Salir del juego',
      message: '¿Qué deseas hacer?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: '💾 Guardar y salir',
          handler: () => {
            const scene = this.getActiveScene();
            if (scene?.serializeState) {
              this.save.saveGameState(scene.serializeState());
            }
            this.onReturnToMenu();
          },
        },
        // {
        //   text: 'Salir sin guardar',
        //   role: 'destructive',
        //   handler: () => this.onReturnToMenu(),
        // },
      ],
    });
    await alert.present();
  }

  onResumeGame() {
    this.showUnlockChoice.set(false);
    this.phaserGame?.events.emit('bms:resume');
  }

  onExtendSession() {
    this.showUnlockChoice.set(false);
    this.childMode.extendSession(15);
    this.phaserGame?.events.emit('bms:resume');
  }

  async onRestartGame() {
    this.isGameOver.set(false);
    this.isNewRecord.set(false);
    this.isReadOnly.set(false);
    this.challengeSeed = null;
    this.phaserGame?.destroy(true);
    this.phaserGame = null;
    this.gameState.resetSession();
    await this.initPhaserGame();
  }

  onViewFinalBoard() {
    this.isReadOnly.set(true);
    this.isGameOver.set(false);
    this.phaserGame?.events.emit('bms:readonly');
  }

  onReturnToMenu() {
    this.save.updateHighScore(this.gameState.mode(), this.gameState.score());
    this.childMode.unlock();
    this.router.navigate(['/home']);
  }
}
