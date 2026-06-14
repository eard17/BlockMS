import { Injectable, signal } from '@angular/core';
import { GameMode } from './game-state';

export interface SerializedCell { filled: boolean; color: string; id: string | null; }

export interface SavedGameState {
  mode: string;
  grid: SerializedCell[][];
  tray: (number[][] | null)[];
  score: number;
  combo: number;
  elapsed: number;
  timestamp: number;
}

export interface SaveData {
  highScore: number;
  highScores: Record<string, number>;
  completedStarsCount: number;
  unlockedSkins: string[];
  activeSkin: string;
  savedGame?: SavedGameState;
  xp: number;
  level: number;
  selectedTitle: string;
  unlockedTitles: string[];
  unlockedAchievements: string[];
  blocksPlacedCount: number;
  duelsCompletedCount: number;
  maxComboAchieved: number;
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
  xp: 0,
  level: 1,
  selectedTitle: 'Novato',
  unlockedTitles: ['Novato'],
  unlockedAchievements: [],
  blocksPlacedCount: 0,
  duelsCompletedCount: 0,
  maxComboAchieved: 0,
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
    this.save({ ...current, completedStarsCount: (current.completedStarsCount ?? 0) + stars });
  }

  addStars(amount: number) {
    const current = this._progress();
    this.save({ ...current, completedStarsCount: (current.completedStarsCount ?? 0) + amount });
  }

  addXp(amount: number): { levelUp: boolean; newLevel: number } {
    const current = this._progress();
    const newXp = (current.xp ?? 0) + amount;
    
    let level = 1;
    let accumulated = 0;
    while (true) {
      const nextLevelCost = Math.floor(100 * Math.pow(level, 1.5));
      if (newXp >= accumulated + nextLevelCost) {
        accumulated += nextLevelCost;
        level++;
      } else {
        break;
      }
    }

    const oldLevel = current.level ?? 1;
    const levelUp = level > oldLevel;
    
    this.save({
      ...current,
      xp: newXp,
      level: level
    });
    
    return { levelUp, newLevel: level };
  }

  getLevelInfo() {
    const totalXp = this._progress().xp ?? 0;
    let level = 1;
    let accumulated = 0;
    while (true) {
      const nextLevelCost = Math.floor(100 * Math.pow(level, 1.5));
      if (totalXp >= accumulated + nextLevelCost) {
        accumulated += nextLevelCost;
        level++;
      } else {
        break;
      }
    }
    const nextLevelCost = Math.floor(100 * Math.pow(level, 1.5));
    const xpInLevel = totalXp - accumulated;
    return {
      level,
      xpInLevel,
      nextLevelCost,
      percent: Math.min(100, Math.floor((xpInLevel / nextLevelCost) * 100))
    };
  }

  recordBlocksPlaced(count: number) {
    const current = this._progress();
    const nextCount = (current.blocksPlacedCount ?? 0) + count;
    const achievements = [...(current.unlockedAchievements ?? [])];
    const titles = [...(current.unlockedTitles ?? ['Novato'])];
    
    if (nextCount >= 1000 && !achievements.includes('blocks_1000')) {
      achievements.push('blocks_1000');
    }
    if (nextCount >= 5000 && !achievements.includes('blocks_5000')) {
      achievements.push('blocks_5000');
      if (!titles.includes('Destructor')) titles.push('Destructor');
    }
    if (nextCount >= 10000 && !achievements.includes('blocks_10000')) {
      achievements.push('blocks_10000');
      if (!titles.includes('Gran Maestro')) titles.push('Gran Maestro');
    }
    
    this.save({
      ...current,
      blocksPlacedCount: nextCount,
      unlockedAchievements: achievements,
      unlockedTitles: titles
    });
  }

  recordDuelCompleted() {
    const current = this._progress();
    const nextCount = (current.duelsCompletedCount ?? 0) + 1;
    const achievements = [...(current.unlockedAchievements ?? [])];
    
    if (nextCount >= 5 && !achievements.includes('duels_5')) {
      achievements.push('duels_5');
    }
    if (nextCount >= 15 && !achievements.includes('duels_15')) {
      achievements.push('duels_15');
    }
    if (nextCount >= 30 && !achievements.includes('duels_30')) {
      achievements.push('duels_30');
    }
    
    this.save({
      ...current,
      duelsCompletedCount: nextCount,
      unlockedAchievements: achievements
    });
  }

  recordCombo(combo: number) {
    const current = this._progress();
    const nextMax = Math.max(current.maxComboAchieved ?? 0, combo);
    const achievements = [...(current.unlockedAchievements ?? [])];
    
    if (nextMax >= 3 && !achievements.includes('combo_3')) {
      achievements.push('combo_3');
    }
    if (nextMax >= 5 && !achievements.includes('combo_5')) {
      achievements.push('combo_5');
    }
    if (nextMax >= 7 && !achievements.includes('combo_7')) {
      achievements.push('combo_7');
    }
    
    this.save({
      ...current,
      maxComboAchieved: nextMax,
      unlockedAchievements: achievements
    });
  }

  setSelectedTitle(title: string) {
    const current = this._progress();
    if (current.unlockedTitles.includes(title)) {
      this.save({
        ...current,
        selectedTitle: title
      });
    }
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

  saveGameState(state: SavedGameState) {
    this.save({ ...this._progress(), savedGame: state });
  }

  clearGameState() {
    const d = { ...this._progress() };
    delete d.savedGame;
    this.save(d);
  }

  hasSavedGame(mode: string): boolean {
    return this._progress().savedGame?.mode === mode;
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
        unlockedTitles: parsed.unlockedTitles ?? ['Novato'],
        unlockedAchievements: parsed.unlockedAchievements ?? [],
        xp: parsed.xp ?? 0,
        level: parsed.level ?? 1,
        selectedTitle: parsed.selectedTitle ?? 'Novato',
        blocksPlacedCount: parsed.blocksPlacedCount ?? 0,
        duelsCompletedCount: parsed.duelsCompletedCount ?? 0,
        maxComboAchieved: parsed.maxComboAchieved ?? 0
      };
    } catch {
      return { ...DEFAULT_SAVE, highScores: { ...DEFAULT_HIGH_SCORES } };
    }
  }
}
