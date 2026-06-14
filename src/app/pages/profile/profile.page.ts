import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { SaveProgressService } from '../../services/save-progress';
import { AuthService } from '../../services/auth';
import { SyncService } from '../../services/sync';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon]
})
export class ProfilePageComponent implements OnInit {
  readonly save = inject(SaveProgressService);
  readonly auth = inject(AuthService);
  readonly sync = inject(SyncService);
  readonly router = inject(Router);
  readonly Math = Math;

  achievements = [
    {
      id: 'blocks_1000',
      title: 'Colocador de Bloques Bronce',
      desc: 'Coloca 1,000 bloques en total',
      tier: 'bronze',
      target: 1000,
      getCurrent: () => this.save.progress().blocksPlacedCount ?? 0
    },
    {
      id: 'blocks_5000',
      title: 'Constructor de Bloques Plata',
      desc: 'Coloca 5,000 bloques en total',
      tier: 'silver',
      target: 5000,
      getCurrent: () => this.save.progress().blocksPlacedCount ?? 0
    },
    {
      id: 'blocks_10000',
      title: 'Gran Constructor de Bloques Oro',
      desc: 'Coloca 10,000 bloques en total',
      tier: 'gold',
      target: 10000,
      getCurrent: () => this.save.progress().blocksPlacedCount ?? 0
    },
    {
      id: 'duels_5',
      title: 'Duelista Bronce',
      desc: 'Completa 5 duelos',
      tier: 'bronze',
      target: 5,
      getCurrent: () => this.save.progress().duelsCompletedCount ?? 0
    },
    {
      id: 'duels_15',
      title: 'Duelista Plata',
      desc: 'Completa 15 duelos',
      tier: 'silver',
      target: 15,
      getCurrent: () => this.save.progress().duelsCompletedCount ?? 0
    },
    {
      id: 'duels_30',
      title: 'Gran Duelista Oro',
      desc: 'Completa 30 duelos',
      tier: 'gold',
      target: 30,
      getCurrent: () => this.save.progress().duelsCompletedCount ?? 0
    },
    {
      id: 'combo_3',
      title: 'Combo Bronce',
      desc: 'Consigue un combo de x3',
      tier: 'bronze',
      target: 3,
      getCurrent: () => this.save.progress().maxComboAchieved ?? 0
    },
    {
      id: 'combo_5',
      title: 'Combo Plata',
      desc: 'Consigue un combo de x5',
      tier: 'silver',
      target: 5,
      getCurrent: () => this.save.progress().maxComboAchieved ?? 0
    },
    {
      id: 'combo_7',
      title: 'Gran Maestro Combo Oro',
      desc: 'Consigue un combo de x7',
      tier: 'gold',
      target: 7,
      getCurrent: () => this.save.progress().maxComboAchieved ?? 0
    }
  ];

  async ngOnInit() {
    // If authenticated, attempt to fetch profile and update local state
    if (this.auth.isAuthenticated()) {
      const cloudProfile = await this.sync.fetchUserProfile();
      if (cloudProfile) {
        // Merge cloud profile into local storage
        const current = this.save.progress();
        this.save.save({
          ...current,
          xp: Math.max(current.xp ?? 0, cloudProfile.xp ?? 0),
          level: Math.max(current.level ?? 1, cloudProfile.level ?? 1),
          selectedTitle: cloudProfile.selected_title ?? current.selectedTitle,
          unlockedTitles: Array.from(new Set([...(current.unlockedTitles ?? ['Novato']), ...(cloudProfile.unlocked_titles ?? [])])),
          unlockedAchievements: Array.from(new Set([...(current.unlockedAchievements ?? []), ...(cloudProfile.unlocked_achievements ?? [])])),
          blocksPlacedCount: Math.max(current.blocksPlacedCount ?? 0, cloudProfile.blocks_placed ?? 0),
          duelsCompletedCount: Math.max(current.duelsCompletedCount ?? 0, cloudProfile.duels_completed ?? 0),
          maxComboAchieved: Math.max(current.maxComboAchieved ?? 0, cloudProfile.max_combo ?? 0),
        });
      }
    }
  }

  get lvlInfo() {
    return this.save.getLevelInfo();
  }

  equipTitle(title: string) {
    this.save.setSelectedTitle(title);
    if (this.auth.isAuthenticated()) {
      const progress = this.save.progress();
      this.sync.syncUserProfile({
        xp: progress.xp,
        level: progress.level,
        selectedTitle: progress.selectedTitle,
        unlockedTitles: progress.unlockedTitles,
        unlockedAchievements: progress.unlockedAchievements,
        blocksPlacedCount: progress.blocksPlacedCount,
        duelsCompletedCount: progress.duelsCompletedCount,
        maxComboAchieved: progress.maxComboAchieved,
      });
    }
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
