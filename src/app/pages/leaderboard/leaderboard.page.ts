import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { arrowBackOutline, trophyOutline, shieldHalfOutline } from 'ionicons/icons';
import { NavController, IonContent, IonHeader, IonToolbar, IonTitle,
  IonButtons, IonIcon, IonButton } from '@ionic/angular/standalone';
import { SyncService, RankingEntry } from '../../services/sync';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-leaderboard-page',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle,
    IonButtons, IonIcon, IonButton],
})
export class LeaderboardPageComponent implements OnInit {
  private readonly sync = inject(SyncService);
  readonly auth = inject(AuthService);
  private readonly nav = inject(NavController);

  readonly entries = signal<RankingEntry[]>([]);
  readonly weeklyEntries = signal<any[]>([]);
  readonly loading = signal(true);
  readonly selectedMode = signal<string>('classic');

  readonly modes = [
    { key: 'classic',  label: 'Clásico' },
    { key: 'child-1',  label: 'Exploradores' },
    { key: 'child-2',  label: 'Constructores' },
    { key: 'child-3',  label: 'Familiar' },
    { key: 'daily',    label: 'Desafío Diario' },
    { key: 'weekly',   label: 'Ligas LP' }
  ];

  constructor() { addIcons({ arrowBackOutline, trophyOutline, shieldHalfOutline }); }

  ngOnInit() { this.load(); }

  goBack() { this.nav.navigateRoot('/home'); }

  async load() {
    this.loading.set(true);
    const mode = this.selectedMode();
    if (mode === 'daily') {
      const seed = this.sync.getDailySeed();
      this.entries.set(await this.sync.fetchDailyLeaderboard(seed));
    } else if (mode === 'weekly') {
      this.weeklyEntries.set(await this.sync.fetchWeeklyLeagueLeaderboard());
    } else {
      this.entries.set(await this.sync.fetchChallengeRanking(`global-${mode}`));
    }
    this.loading.set(false);
  }

  selectMode(mode: string) { this.selectedMode.set(mode); this.load(); }
}
