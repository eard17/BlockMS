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
  readonly router = inject(Router);
  private readonly alertCtrl = inject(AlertController);
  private readonly sync = inject(SyncService);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private phaserGame: any = null;
  private challengeSeed: string | null = null;
  private duelId: string | null = null;

  readonly showGate = signal(false);
  readonly showUnlockChoice = signal(false);
  readonly isGameOver = signal(false);
  readonly isNewRecord = signal(false);
  readonly isReadOnly = signal(false);

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
    if (state?.challengeSeed) {
      this.challengeSeed = state.challengeSeed;
      this.duelId = state.duelId ?? null;
      this.gameState.setMode('challenge');
      this.gameState.setTargetScore(state.targetScore ?? 0);
    } else {
      this.gameState.resetSession();
      this.duelId = null;
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

    this.phaserGame.events.on('bms:tray-empty', () => this.childMode.onTrayEmptyWhilePending());
    this.phaserGame.events.on('bms:game-over', () => {
      const score = this.gameState.score();
      const mode = this.gameState.mode();
      const elapsed = this.gameState.elapsedTime();
      const isNew = score > (this.save.progress().highScores[mode] ?? 0);
      this.save.updateHighScore(mode, score);
      this.save.recordGameEnd(elapsed);
      this.isNewRecord.set(isNew);
      this.isGameOver.set(true);
      this.sync.submitScore(score, mode, elapsed);
      if (this.duelId) {
        this.sync.submitDuelResult(this.duelId, score);
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
