import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons,
  IonBackButton, IonButton } from '@ionic/angular/standalone';
import { SyncService, RankingEntry } from '../../services/sync';
import { GameStateService } from '../../services/game-state';

@Component({
  selector: 'app-leaderboard-page',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle,
    IonButtons, IonBackButton, IonButton],
})
export class LeaderboardPageComponent implements OnInit {
  private readonly sync = inject(SyncService);
  readonly gameState = inject(GameStateService);

  readonly entries = signal<RankingEntry[]>([]);
  readonly loading = signal(true);
  readonly selectedMode = signal<string>('classic');

  readonly modes = [
    { key: 'classic', label: 'Clásico' },
    { key: 'child-1', label: 'Exploradores' },
    { key: 'child-2', label: 'Constructores' },
    { key: 'child-3', label: 'Familiar' },
  ];

  ngOnInit() { this.load(); }

  async load() {
    this.loading.set(true);
    const data = await this.sync.fetchChallengeRanking(`global-${this.selectedMode()}`);
    this.entries.set(data);
    this.loading.set(false);
  }

  selectMode(mode: string) { this.selectedMode.set(mode); this.load(); }
}
