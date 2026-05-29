import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons,
  IonBackButton, IonButton } from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle,
    IonButtons, IonBackButton, IonButton],
})
export class AuthPageComponent {
  readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  async signIn()  { await this.auth.signInWithGoogle(); }
  async signOut() { await this.auth.signOut(); this.router.navigate(['/home']); }
}
