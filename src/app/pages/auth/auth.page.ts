import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { NavController, IonContent, IonHeader, IonToolbar, IonTitle,
  IonButtons, IonIcon, IonButton } from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle,
    IonButtons, IonIcon, IonButton],
})
export class AuthPageComponent {
  readonly auth = inject(AuthService);
  private readonly nav = inject(NavController);

  constructor() { addIcons({ arrowBackOutline }); }

  goBack()        { this.nav.back(); }
  async signIn()  { await this.auth.signInWithGoogle(); }
  async signOut() { await this.auth.signOut(); this.nav.navigateRoot('/home'); }
}
