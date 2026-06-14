import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, trophyOutline, star, alertCircleOutline } from 'ionicons/icons';
import { SaveProgressService } from '../../services/save-progress';
import { SKINS_CATALOG, Skin } from '../../services/skins-catalog';
import { BillingService } from '../../services/billing.service';
import { AdMobService } from '../../services/admob.service';
import { AuthService } from '../../services/auth';
import { SyncService } from '../../services/sync';

@Component({
  selector: 'app-store-page',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon]
})
export class StorePageComponent {
  readonly save = inject(SaveProgressService);
  readonly auth = inject(AuthService);
  readonly sync = inject(SyncService);
  private readonly billing = inject(BillingService);
  private readonly admob = inject(AdMobService);
  private readonly router = inject(Router);

  readonly skins = SKINS_CATALOG;
  readonly purchaseLoading = signal(false);
  readonly adLoading = signal(false);
  readonly errorMsg = signal<string | null>(null);

  previewCells = [
    { row: 0, col: 0, colorIdx: 0 },
    { row: 0, col: 1, colorIdx: 1 },
    { row: 1, col: 0, colorIdx: 2 },
    { row: 1, col: 1, colorIdx: 3 },
  ];

  constructor() {
    addIcons({ arrowBackOutline, trophyOutline, star, alertCircleOutline });
  }

  isSkinUnlocked(skinId: string): boolean {
    return this.save.progress().unlockedSkins.includes(skinId);
  }

  isActiveSkin(skinId: string): boolean {
    return this.save.progress().activeSkin === skinId;
  }

  async selectSkin(skinId: string) {
    if (this.isSkinUnlocked(skinId)) {
      this.save.setActiveSkin(skinId);
      this.syncProfileIfOnline();
    }
  }

  async buySkin(skin: Skin) {
    const currentStars = this.save.progress().completedStarsCount ?? 0;
    if (currentStars < skin.starCost) {
      this.errorMsg.set(`Estrellas insuficientes. Te faltan ${skin.starCost - currentStars} estrellas.`);
      setTimeout(() => this.errorMsg.set(null), 3000);
      return;
    }
    
    this.save.unlockSkin(skin.id, skin.starCost);
    this.syncProfileIfOnline();
  }

  async purchaseRemoveAds() {
    this.purchaseLoading.set(true);
    try {
      const ok = await this.billing.purchaseRemoveAds();
      if (ok) {
        // Success
      }
    } catch {
      // ignore
    }
    this.purchaseLoading.set(false);
  }

  async watchRewardedAd() {
    this.adLoading.set(true);
    try {
      await this.admob.showRewardedAd();
    } catch {
      // ignore
    }
    this.adLoading.set(false);
  }

  private async syncProfileIfOnline() {
    if (this.auth.isAuthenticated()) {
      const progress = this.save.progress();
      await this.sync.syncUserProfile({
        xp: progress.xp,
        level: progress.level,
        selectedTitle: progress.selectedTitle,
        unlockedTitles: progress.unlockedTitles,
        unlockedAchievements: progress.unlockedAchievements,
        blocksPlacedCount: progress.blocksPlacedCount,
        duelsCompletedCount: progress.duelsCompletedCount,
        maxComboAchieved: progress.maxComboAchieved,
        stars: progress.completedStarsCount,
        unlockedSkins: progress.unlockedSkins,
        adsRemoved: progress.adsRemoved,
      });
    }
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
