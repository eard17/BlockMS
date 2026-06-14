import { Injectable, inject } from '@angular/core';
import { SaveProgressService } from './save-progress';
import { AuthService } from './auth';
import { SyncService } from './sync';

@Injectable({ providedIn: 'root' })
export class BillingService {
  private save = inject(SaveProgressService);
  private auth = inject(AuthService);
  private sync = inject(SyncService);

  async purchaseRemoveAds(): Promise<boolean> {
    // Simulate billing process latency
    await new Promise(resolve => setTimeout(resolve, 1500));

    this.save.removeAds();
    
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
        adsRemoved: true,
      });
    }

    return true;
  }
}
