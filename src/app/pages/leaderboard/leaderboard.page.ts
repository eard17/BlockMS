import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { NavController, IonContent, IonHeader, IonToolbar, IonTitle,
  IonButtons, IonIcon, IonButton } from '@ionic/angular/standalone';
import { SyncService, RankingEntry } from '../../services/sync';

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
  private readonly nav = inject(NavController);

  readonly entries = signal<RankingEntry[]>([]);
  readonly loading = signal(true);
  readonly selectedMode = signal<string>('classic');

  readonly modes = [
    { key: 'classic',  label: 'Clásico' },
    { key: 'child-1',  label: 'Exploradores' },
    { key: 'child-2',  label: 'Constructores' },
    { key: 'child-3',  label: 'Familiar' },
  ];

  constructor() { addIcons({ arrowBackOutline }); }

  ngOnInit() { this.load(); }

  goBack() { this.nav.back(); }

  async load() {
    this.loading.set(true);
    this.entries.set(await this.sync.fetchChallengeRanking(`global-${this.selectedMode()}`));
    this.loading.set(false);
  }

  selectMode(mode: string) { this.selectedMode.set(mode); this.load(); }
}
