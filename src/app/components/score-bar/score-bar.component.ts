import { Component, inject, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { GameStateService } from '../../services/game-state';
import { ChildModeService } from '../../services/child-mode';

@Component({
  selector: 'app-score-bar',
  standalone: true,
  imports: [CommonModule, IonIcon],
  templateUrl: './score-bar.component.html',
  styleUrls: ['./score-bar.component.scss'],
})
export class ScoreBarComponent {
  readonly gameState = inject(GameStateService);
  readonly childMode = inject(ChildModeService);
  readonly backClicked = output<void>();

  readonly timerPct = computed(() => {
    const dur = this.childMode.sessionDurationMs();
    return dur === 0 ? 0 : Math.round(this.childMode.timeRemainingMs() / dur * 100);
  });

  readonly timerClass = computed(() => {
    const p = this.timerPct();
    return p > 50 ? 'high' : p > 25 ? 'mid' : 'low';
  });

  constructor() { addIcons({ arrowBackOutline }); }
}
