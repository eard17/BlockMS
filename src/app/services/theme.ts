import { Injectable, signal, computed, effect } from '@angular/core';

export type ThemePreference = 'system' | 'dark' | 'light';

const STORAGE_KEY = 'bms_theme';
const DARK_CLASS  = 'ion-palette-dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly mq = window.matchMedia('(prefers-color-scheme: dark)');

  private _preference = signal<ThemePreference>(
    (localStorage.getItem(STORAGE_KEY) as ThemePreference | null) ?? 'system',
  );

  readonly preference = this._preference.asReadonly();

  readonly isDark = computed(() => {
    const p = this._preference();
    if (p === 'dark')   return true;
    if (p === 'light')  return false;
    return this.mq.matches;
  });

  constructor() {
    // Apply immediately on init
    effect(() => this.applyToDOM(this.isDark()));

    // React to OS-level changes when preference is 'system'
    this.mq.addEventListener('change', () => {
      if (this._preference() === 'system')
        this.applyToDOM(this.mq.matches);
    });
  }

  set(preference: ThemePreference) {
    this._preference.set(preference);
    localStorage.setItem(STORAGE_KEY, preference);
  }

  private applyToDOM(dark: boolean) {
    document.documentElement.classList.toggle(DARK_CLASS, dark);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }
}
