import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlertController, IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline, trophyOutline, personCircleOutline } from 'ionicons/icons';
import { GameStateService } from '../../services/game-state';
import { ChildModeService } from '../../services/child-mode';
import { SaveProgressService } from '../../services/save-progress';
import { AuthService } from '../../services/auth';

const DEFAULT_MINUTES: Record<number, number> = { 1: 5, 2: 10, 3: 15 };
const DURATION_OPTIONS = [5,10,15,20,25,30,35,40,45,50,55,60];

@Component({
  selector: 'app-home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon],
})
export class HomePageComponent {
  readonly save = inject(SaveProgressService);
  readonly auth = inject(AuthService);
  readonly childMode = inject(ChildModeService);
  readonly gameState = inject(GameStateService);
  private readonly router = inject(Router);
  private readonly alertCtrl = inject(AlertController);

  constructor() { addIcons({ settingsOutline, trophyOutline, personCircleOutline }); }

  playClassic() {
    this.childMode.stopSession();
    this.gameState.setMode('classic');
    this.router.navigate(['/game']);
  }

  async playChild(level: 1 | 2 | 3) {
    const defaultMin = DEFAULT_MINUTES[level];
    const alert = await this.alertCtrl.create({
      header: 'Duración de sesión',
      message: '¿Cuánto tiempo quieres jugar?',
      inputs: DURATION_OPTIONS.map(m => ({
        name: 'minutes', type: 'radio',
        label: m < 60 ? `${m} minutos` : '1 hora',
        value: m, checked: m === defaultMin,
      })),
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Jugar', handler: (mins: number) => {
          this.childMode.startSession(level, mins);
          this.gameState.setMode(`child-${level}` as any);
          this.router.navigate(['/game']);
        }},
      ],
    });
    await alert.present();
  }

  goToSettings()    { this.router.navigate(['/settings']); }
  goToChallenge()   { this.router.navigate(['/challenge']); }
  goToLeaderboard() { this.router.navigate(['/leaderboard']); }
  async goToAuth() {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/auth']);
    } else {
      await this.auth.signInWithGoogle();
    }
  }
}
