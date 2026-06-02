import { Component, inject, output, computed, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, lockClosed, lockOpenOutline } from 'ionicons/icons';
import { GameStateService } from '../../services/game-state';
import { ChildModeService } from '../../services/child-mode';

@Component({
  selector: 'app-score-bar',
  standalone: true,
  imports: [CommonModule, IonIcon],
  templateUrl: './score-bar.component.html',
  styleUrls: ['./score-bar.component.scss'],
})
export class ScoreBarComponent implements OnDestroy {
  readonly gameState = inject(GameStateService);
  readonly childMode = inject(ChildModeService);
  readonly backClicked = output<void>();

  readonly isScreenLocked = signal(false);
  readonly showUnlockConfirm = signal(false);
  private unlockTimer: any = null;

  readonly timerPct = computed(() => {
    const dur = this.childMode.sessionDurationMs();
    return dur === 0 ? 0 : Math.round(this.childMode.timeRemainingMs() / dur * 100);
  });

  readonly timerClass = computed(() => {
    const p = this.timerPct();
    return p > 50 ? 'high' : p > 25 ? 'mid' : 'low';
  });

  constructor() {
    addIcons({ arrowBackOutline, lockClosed, lockOpenOutline });
  }

  toggleLock() {
    if (!this.isScreenLocked()) {
      this.isScreenLocked.set(true);
      this.showUnlockConfirm.set(false);
    } else {
      if (!this.showUnlockConfirm()) {
        this.showUnlockConfirm.set(true);
        if (this.unlockTimer) {
          clearTimeout(this.unlockTimer);
        }
        this.unlockTimer = setTimeout(() => {
          this.showUnlockConfirm.set(false);
        }, 3000);
      } else {
        if (this.unlockTimer) {
          clearTimeout(this.unlockTimer);
          this.unlockTimer = null;
        }
        this.isScreenLocked.set(false);
        this.showUnlockConfirm.set(false);
      }
    }
  }

  ngOnDestroy() {
    if (this.unlockTimer) {
      clearTimeout(this.unlockTimer);
    }
  }
}

