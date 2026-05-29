import { Injectable, signal, computed } from '@angular/core';

export type GameMode = 'classic' | 'challenge' | 'child-1' | 'child-2' | 'child-3';

@Injectable({ providedIn: 'root' })
export class GameStateService {
  private _score = signal(0);
  private _comboCount = signal(0);
  private _mode = signal<GameMode>('classic');
  private _elapsedTime = signal(0);
  private _sessionSeed = signal('');
  private _targetScore = signal(0);

  readonly score = this._score.asReadonly();
  readonly comboCount = this._comboCount.asReadonly();
  readonly mode = this._mode.asReadonly();
  readonly elapsedTime = this._elapsedTime.asReadonly();
  readonly sessionSeed = this._sessionSeed.asReadonly();
  readonly targetScore = this._targetScore.asReadonly();

  readonly displayScore = computed(() => this._score() * Math.max(1, this._comboCount()));

  addScore(pts: number) { this._score.update(s => s + pts); }
  incrementCombo() { this._comboCount.update(c => c + 1); }
  resetCombo() { this._comboCount.set(0); }
  setMode(m: GameMode) { this._mode.set(m); }
  setTargetScore(t: number) { this._targetScore.set(t); }
  updateElapsedTime(t: number) { this._elapsedTime.set(t); }

  resetSession(keepSeed = false) {
    this._score.set(0);
    this._comboCount.set(0);
    this._elapsedTime.set(0);
    if (!keepSeed) {
      this._sessionSeed.set(Math.random().toString(36).substring(2, 10));
      this._targetScore.set(0);
    }
  }
}
