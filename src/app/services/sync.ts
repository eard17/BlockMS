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

  async createDuel(
    seed: string,
    boardDimension: number,
    pieceSet: string,
    difficulty: string,
    score: number
  ): Promise<string | null> {
    const db = this.auth.getClient();
    const userId = this.auth.user()?.id;
    if (!db || !userId) return null;
    const username = this.auth.displayName() || 'Anón';
    try {
      const { data, error } = await db
        .from('duels')
        .insert({
          creator_id: userId,
          creator_username: username,
          seed,
          board_dimension: boardDimension,
          piece_set: pieceSet,
          difficulty,
          creator_score: score,
          status: 'pending'
        })
        .select('id')
        .single();
      if (error) throw error;
      return data?.id || null;
    } catch {
      return null;
    }
  }

  async submitDuelResult(duelId: string, score: number): Promise<boolean> {
    const db = this.auth.getClient();
    const userId = this.auth.user()?.id;
    if (!db || !userId) return false;
    const username = this.auth.displayName() || 'Anón';
    try {
      const { error } = await db
        .from('duels')
        .update({
          opponent_id: userId,
          opponent_username: username,
          opponent_score: score,
          status: 'completed'
        })
        .eq('id', duelId);
      return !error;
    } catch {
      return false;
    }
  }

  async fetchDuelDetails(duelId: string): Promise<any | null> {
    const db = this.auth.getClient();
    if (!db) return null;
    try {
      const { data, error } = await db
        .from('duels')
        .select('*')
        .eq('id', duelId)
        .single();
      if (error) return null;
      return data;
    } catch {
      return null;
    }
  }

  async fetchMyActiveDuels(): Promise<any[]> {
    const db = this.auth.getClient();
    const userId = this.auth.user()?.id;
    if (!db || !userId) return [];
    try {
      const { data } = await db
        .from('duels')
        .select('*')
        .or(`creator_id.eq.${userId},opponent_id.eq.${userId}`)
        .order('created_at', { ascending: false });
      return data ?? [];
    } catch {
      return [];
    }
  }
}
