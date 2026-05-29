import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth';
import { GameMode } from './game-state';

export interface RankingEntry { username: string; score: number; }

@Injectable({ providedIn: 'root' })
export class SyncService {
  private auth = inject(AuthService);

  async submitScore(score: number, mode: GameMode, elapsedSeconds: number) {
    const userId = this.auth.user()?.id;
    if (!userId) return;
    try {
      await this.auth.getClient()
        .from('scores')
        .insert({ user_id: userId, score, mode, elapsed_seconds: elapsedSeconds });
    } catch { /* non-blocking */ }
  }

  async fetchChallengeRanking(code: string): Promise<RankingEntry[]> {
    try {
      const { data } = await this.auth.getClient()
        .from('challenge_scores')
        .select('username, score')
        .eq('challenge_code', code)
        .order('score', { ascending: false })
        .limit(20);
      return (data ?? []) as RankingEntry[];
    } catch {
      return [];
    }
  }
}
