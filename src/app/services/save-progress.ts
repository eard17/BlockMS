import { Injectable, signal } from '@angular/core';
import { GameMode } from './game-state';

export interface SaveData {
  highScore: number;
  highScores: Record<string, number>;
  completedStarsCount: number;
  unlockedSkins: string[];
  activeSkin: string;
}

const STORAGE_KEY = 'bms_save_v1';

const DEFAULT_HIGH_SCORES: Record<string, number> = {
  classic: 0, 'child-1': 0, 'child-2': 0, 'child-3': 0, challenge: 0,
};

const DEFAULT_SAVE: SaveData = {
  highScore: 0,
  highScores: { ...DEFAULT_HIGH_SCORES },
  completedStarsCount: 0,
  unlockedSkins: ['default'],
  activeSkin: 'default',
};

@Injectable({ providedIn: 'root' })
export class SaveProgressService {
  private _progress = signal<SaveData>(this.load());

  readonly progress = this._progress.asReadonly();

  updateHighScore(mode: GameMode, score: number) {
    const current = this._progress();
    const modeKey = mode as string;
    const modeScore = current.highScores[modeKey] ?? 0;
    if (score <= modeScore) return;
    const newHighScores = { ...current.highScores, [modeKey]: score };
    const globalHigh = Math.max(current.highScore, score);
    this.save({ ...current, highScore: globalHigh, highScores: newHighScores });
  }

  recordGameEnd(elapsedSeconds: number) {
    const current = this._progress();
    const stars = Math.min(3, Math.floor(elapsedSeconds / 60));
    if (stars <= 0) return;
    this.save({ ...current, completedStarsCount: current.completedStarsCount + stars });
  }

  unlockSkin(skinId: string, cost: number) {
    const current = this._progress();
    if (current.unlockedSkins.includes(skinId)) return;
    if (current.completedStarsCount < cost) return;
    this.save({
      ...current,
      unlockedSkins: [...current.unlockedSkins, skinId],
      completedStarsCount: current.completedStarsCount - cost,
    });
  }

  setActiveSkin(skinId: string) {
    this.save({ ...this._progress(), activeSkin: skinId });
  }

  resetHighScores() {
    this.save({ ...this._progress(), highScore: 0, highScores: { ...DEFAULT_HIGH_SCORES } });
  }

  save(data: SaveData) {
    this._progress.set(data);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch { /* ignore */ }
  }

  private load(): SaveData {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_SAVE, highScores: { ...DEFAULT_HIGH_SCORES } };
      const parsed = JSON.parse(raw) as Partial<SaveData>;
      return {
        ...DEFAULT_SAVE,
        ...parsed,
        highScores: { ...DEFAULT_HIGH_SCORES, ...(parsed.highScores ?? {}) },
      };
    } catch {
      return { ...DEFAULT_SAVE, highScores: { ...DEFAULT_HIGH_SCORES } };
    }
  }
}
