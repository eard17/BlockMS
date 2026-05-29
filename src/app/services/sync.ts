import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth';
import { GameMode } from './game-state';

export interface RankingEntry { username: string; score: number; }

@Injectable({ providedIn: 'root' })
export class SyncService {
  private auth = inject(AuthService);

  async submitScore(score: number, mode: GameMode, elapsedSeconds: number) {
    const db = this.auth.getClient();
    const userId = this.auth.user()?.id;
    if (!db || !userId) return;
    try {
      await db.from('scores').insert({ user_id: userId, score, mode, elapsed_seconds: elapsedSeconds });
    } catch { /* non-blocking */ }
  }

  async fetchChallengeRanking(code: string): Promise<RankingEntry[]> {
    const db = this.auth.getClient();
    if (!db) return [];
    try {
      const { data } = await db
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
