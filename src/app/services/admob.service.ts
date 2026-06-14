import { Injectable, inject } from '@angular/core';
import { SaveProgressService } from './save-progress';
import { AuthService } from './auth';
import { SyncService } from './sync';

@Injectable({ providedIn: 'root' })
export class AdMobService {
  private save = inject(SaveProgressService);
  private auth = inject(AuthService);
  private sync = inject(SyncService);

  private classicGamesPlayed = 0;

  recordClassicGamePlayed(): boolean {
    if (this.save.progress().adsRemoved) return false;
    this.classicGamesPlayed++;
    // Show interstitial ads every 3 games
    if (this.classicGamesPlayed % 3 === 0) {
      this.showInterstitialAd();
      return true;
    }
    return false;
  }

  async showInterstitialAd(): Promise<void> {
    console.log('[AdMob] Mostrando anuncio intersticial no intrusivo...');
    await new Promise(resolve => setTimeout(resolve, 800));
  }

  async showRewardedAd(): Promise<boolean> {
    // Simulated delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    this.save.addStars(150);
    this.syncProfileIfOnline();
    return true;
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
}
