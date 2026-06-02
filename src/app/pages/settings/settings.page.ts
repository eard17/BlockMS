import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { AlertController, NavController, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons,
  IonIcon, IonList, IonListHeader, IonLabel, IonItem, IonRange, IonToggle,
  IonButton, IonInput, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { SettingsService } from '../../services/settings';
import { SaveProgressService } from '../../services/save-progress';
import { SKINS_CATALOG } from '../../services/skins-catalog';
import { ThemeService, ThemePreference } from '../../services/theme';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonIcon,
    IonList, IonListHeader, IonLabel, IonItem, IonRange, IonToggle, IonButton, IonInput,
    IonSelect, IonSelectOption],
})
export class SettingsPageComponent {
  readonly settings = inject(SettingsService);
  readonly save = inject(SaveProgressService);
  readonly theme = inject(ThemeService);
  private readonly alertCtrl = inject(AlertController);
  private readonly router = inject(Router);
  private readonly nav = inject(NavController);

  readonly themeOptions: { value: ThemePreference; label: string; icon: string }[] = [
    { value: 'system', label: 'Sistema (automático)', icon: '🖥️' },
    { value: 'dark',   label: 'Oscuro',               icon: '🌙' },
    { value: 'light',  label: 'Claro',                icon: '☀️' },
  ];

  constructor() { addIcons({ arrowBackOutline }); }
  goBack() { this.nav.back(); }
  setTheme(p: ThemePreference) { this.theme.set(p); }

  readonly skinsCatalog = SKINS_CATALOG;
  readonly showPinForm = signal(false);
  readonly pinInput = signal('');
  readonly pinError = signal<string | null>(null);

  readonly hasPin = computed(() => this.settings.settings().childLockPin !== null);
  readonly activeSkinId = computed(() => this.save.progress().activeSkin);
  readonly unlockedSkins = computed(() => this.save.progress().unlockedSkins);
  readonly availableStars = computed(() => this.save.progress().completedStarsCount);

  onMusicVolumeChange(e: CustomEvent)   { this.settings.setMusicVolume(e.detail.value); }
  onSfxVolumeChange(e: CustomEvent)     { this.settings.setSfxVolume(e.detail.value); }
  onToggleSmilingFaces()                { this.settings.toggleSmilingFaces(); }
  onDifficultyChange(e: CustomEvent)    { this.settings.setDifficulty(e.detail.value); }
  onDifficultyChild1Change(e: CustomEvent) { this.settings.setDifficultyChild1(e.detail.value); }
  onDifficultyChild2Change(e: CustomEvent) { this.settings.setDifficultyChild2(e.detail.value); }
  onDifficultyChild3Change(e: CustomEvent) { this.settings.setDifficultyChild3(e.detail.value); }

  onShowPinForm()  { this.pinInput.set(''); this.pinError.set(null); this.showPinForm.set(true); }
  onCancelPin()    { this.showPinForm.set(false); this.pinInput.set(''); this.pinError.set(null); }
  onClearPin()     { this.settings.clearPin(); }
  onSavePin() {
    const pin = this.pinInput().trim();
    if (/^\d{4}$/.test(pin)) {
      this.settings.setPin(pin); this.showPinForm.set(false); this.pinInput.set(''); this.pinError.set(null);
    } else {
      this.pinError.set('El PIN debe ser exactamente 4 dígitos numéricos.');
    }
  }

  onUnlockSkin(id: string, cost: number) { this.save.unlockSkin(id, cost); }
  onActivateSkin(id: string)             { this.save.setActiveSkin(id); }

  async onResetRecord() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Restablecer todos los récords? Esta acción no se puede deshacer.',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Restablecer', role: 'destructive', handler: () => this.save.resetHighScores() },
      ],
    });
    await alert.present();
  }
}
