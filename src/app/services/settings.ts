import { Injectable, signal } from '@angular/core';

export interface AppSettings {
  musicVolume: number;
  sfxVolume: number;
  smilingFacesEnabled: boolean;
  childLockPin: string | null;
  difficulty: 'easy' | 'medium' | 'hard';
  difficultyChild1: 'easy' | 'medium' | 'hard';
  difficultyChild2: 'easy' | 'medium' | 'hard';
  difficultyChild3: 'easy' | 'medium' | 'hard';
}

const STORAGE_KEY = 'bms_settings_v1';
const DEFAULTS: AppSettings = {
  musicVolume: 0.7,
  sfxVolume: 0.8,
  smilingFacesEnabled: true,
  childLockPin: null,
  difficulty: 'medium',
  difficultyChild1: 'medium',
  difficultyChild2: 'medium',
  difficultyChild3: 'medium',
};

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private _settings = signal<AppSettings>(this.load());
  readonly settings = this._settings.asReadonly();

  setMusicVolume(v: number) { this.patch({ musicVolume: v }); }
  setSfxVolume(v: number) { this.patch({ sfxVolume: v }); }
  toggleSmilingFaces() { this.patch({ smilingFacesEnabled: !this._settings().smilingFacesEnabled }); }
  setPin(pin: string) { this.patch({ childLockPin: pin }); }
  clearPin() { this.patch({ childLockPin: null }); }
  setDifficulty(d: AppSettings['difficulty']) { this.patch({ difficulty: d }); }
  setDifficultyChild1(d: AppSettings['difficulty']) { this.patch({ difficultyChild1: d }); }
  setDifficultyChild2(d: AppSettings['difficulty']) { this.patch({ difficultyChild2: d }); }
  setDifficultyChild3(d: AppSettings['difficulty']) { this.patch({ difficultyChild3: d }); }

  private patch(partial: Partial<AppSettings>) {
    const next = { ...this._settings(), ...partial };
    this._settings.set(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
  }

  private load(): AppSettings {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULTS };
      return { ...DEFAULTS, ...JSON.parse(raw) };
    } catch {
      return { ...DEFAULTS };
    }
  }
}
