import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePageComponent),
  },
  {
    path: 'game',
    loadComponent: () => import('./pages/game/game.page').then(m => m.GamePageComponent),
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.page').then(m => m.SettingsPageComponent),
  },
  {
    path: 'challenge',
    loadComponent: () => import('./pages/challenge/challenge.page').then(m => m.ChallengePageComponent),
  },
  {
    path: 'leaderboard',
    loadComponent: () => import('./pages/leaderboard/leaderboard.page').then(m => m.LeaderboardPageComponent),
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.page').then(m => m.AuthPageComponent),
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePageComponent),
  },
  {
    path: 'store',
    loadComponent: () => import('./pages/store/store.page').then(m => m.StorePageComponent),
  },
];
