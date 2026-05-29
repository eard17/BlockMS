import { Injectable, signal, computed } from '@angular/core';

export type ChildLevel = 1 | 2 | 3;

@Injectable({ providedIn: 'root' })
export class ChildModeService {
  private static readonly SESSION_MS: Record<ChildLevel, number> = { 1: 300_000, 2: 600_000, 3: 900_000 };
  private static readonly BOARD_DIM: Record<ChildLevel, number> = { 1: 5, 2: 6, 3: 8 };
  private static readonly PIECE_SETS: Record<ChildLevel, string> = { 1: 'simple', 2: 'classic', 3: 'classic' };
  private static readonly TICK_MS = 1000;

  private _level = signal<ChildLevel | null>(null);
  private _timeRemainingMs = signal(0);
  private _sessionDurationMs = signal(0);
  private _isSleepPending = signal(false);
  private _isSleeping = signal(false);
  private timerHandle: ReturnType<typeof setInterval> | null = null;

  readonly level = this._level.asReadonly();
  readonly timeRemainingMs = this._timeRemainingMs.asReadonly();
  readonly sessionDurationMs = this._sessionDurationMs.asReadonly();
  readonly isSleepPending = this._isSleepPending.asReadonly();
  readonly isSleeping = this._isSleeping.asReadonly();

  readonly isChildMode = computed(() => this._level() !== null);
  readonly boardDimension = computed(() => {
    const l = this._level();
    return l !== null ? ChildModeService.BOARD_DIM[l] : 8;
  });
  readonly pieceSet = computed(() => {
    const l = this._level();
    return l !== null ? ChildModeService.PIECE_SETS[l] : 'classic';
  });
  readonly timeDisplay = computed(() => {
    const ms = this._timeRemainingMs();
    const m = Math.floor(ms / 60_000);
    const s = Math.floor((ms % 60_000) / 1000);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  });

  startSession(level: ChildLevel, durationMinutes?: number) {
    let ms: number;
    if (durationMinutes !== undefined) {
      if (durationMinutes < 5 || durationMinutes > 60 || durationMinutes % 5 !== 0)
        throw new Error('Invalid duration setting');
      ms = durationMinutes * 60 * 1000;
    } else {
      ms = ChildModeService.SESSION_MS[level];
    }
    this.stopSession();
    this._level.set(level);
    this._sessionDurationMs.set(ms);
    this._timeRemainingMs.set(ms);
    this._isSleepPending.set(false);
    this._isSleeping.set(false);
    this.timerHandle = setInterval(() => this.tick(), ChildModeService.TICK_MS);
  }

  stopSession() {
    if (this.timerHandle !== null) { clearInterval(this.timerHandle); this.timerHandle = null; }
    this._isSleepPending.set(false);
    this._isSleeping.set(false);
  }

  extendSession(minutes: number) {
    this._timeRemainingMs.update(t => t + minutes * 60 * 1000);
    this._isSleepPending.set(false);
    this._isSleeping.set(false);
    if (this.timerHandle === null)
      this.timerHandle = setInterval(() => this.tick(), ChildModeService.TICK_MS);
  }

  unlock() {
    this._isSleeping.set(false);
    this._level.set(null);
    this.stopSession();
  }

  onTrayEmptyWhilePending() {
    if (this._isSleepPending()) { this._isSleepPending.set(false); this._isSleeping.set(true); }
  }

  private tick() {
    const remaining = this._timeRemainingMs() - ChildModeService.TICK_MS;
    if (remaining <= 0) {
      this._timeRemainingMs.set(0);
      this._isSleepPending.set(true);
      if (this.timerHandle !== null) { clearInterval(this.timerHandle); this.timerHandle = null; }
    } else {
      this._timeRemainingMs.set(remaining);
    }
  }
}
