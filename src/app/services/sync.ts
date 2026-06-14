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

  getDailySeed(): string {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `BMS-DAILY-${y}-${m}-${day}`;
  }

  async hasPlayedDailyChallenge(seed: string): Promise<boolean> {
    const db = this.auth.getClient();
    const userId = this.auth.user()?.id;
    if (!db || !userId) return false;
    try {
      const { data } = await db
        .from('daily_challenge_scores')
        .select('id')
        .eq('user_id', userId)
        .eq('seed', seed);
      return !!(data && data.length > 0);
    } catch {
      return false;
    }
  }

  async submitDailyChallengeScore(score: number, seed: string): Promise<boolean> {
    const db = this.auth.getClient();
    const userId = this.auth.user()?.id;
    if (!db || !userId) return false;
    const username = this.auth.displayName() || 'Anón';
    try {
      const { error } = await db
        .from('daily_challenge_scores')
        .insert({
          user_id: userId,
          username,
          score,
          seed
        });
      return !error;
    } catch {
      return false;
    }
  }

  async fetchDailyLeaderboard(seed: string): Promise<RankingEntry[]> {
    const db = this.auth.getClient();
    if (!db) return [];
    try {
      const { data } = await db
        .from('daily_challenge_scores')
        .select('username, score')
        .eq('seed', seed)
        .order('score', { ascending: false })
        .limit(50);
      return (data ?? []) as RankingEntry[];
    } catch {
      return [];
    }
  }

  async fetchWeeklyLeagueLeaderboard(): Promise<any[]> {
    const db = this.auth.getClient();
    if (!db) return [];
    try {
      const { data } = await db
        .from('weekly_leagues')
        .select('*')
        .order('league_points', { ascending: false })
        .limit(50);
      return data ?? [];
    } catch {
      return [];
    }
  }

  async fetchMyLeagueProfile(): Promise<any | null> {
    const db = this.auth.getClient();
    const userId = this.auth.user()?.id;
    if (!db || !userId) return null;
    try {
      const { data, error } = await db
        .from('weekly_leagues')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();
      if (error) return null;
      return data;
    } catch {
      return null;
    }
  }

  async addLeaguePoints(points: number): Promise<boolean> {
    const db = this.auth.getClient();
    const userId = this.auth.user()?.id;
    if (!db || !userId) return false;
    const username = this.auth.displayName() || 'Anón';
    try {
      const profile = await this.fetchMyLeagueProfile();
      if (profile) {
        const nextPoints = Math.max(0, profile.league_points + points);
        const { error } = await db
          .from('weekly_leagues')
          .update({
            league_points: nextPoints,
            updated_at: new Date().toISOString()
          })
          .eq('user_id', userId);
        return !error;
      } else {
        const { error } = await db
          .from('weekly_leagues')
          .insert({
            user_id: userId,
            username,
            league_points: Math.max(0, points),
            league_tier: 'bronze'
          });
        return !error;
      }
    } catch {
      return false;
    }
  }

  async fetchUserProfile(): Promise<any | null> {
    const db = this.auth.getClient();
    const userId = this.auth.user()?.id;
    if (!db || !userId) return null;
    try {
      const { data, error } = await db
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();
      if (error) return null;
      return data;
    } catch {
      return null;
    }
  }

  async syncUserProfile(profileData: {
    xp: number;
    level: number;
    selectedTitle: string;
    unlockedTitles: string[];
    unlockedAchievements: string[];
    blocksPlacedCount: number;
    duelsCompletedCount: number;
    maxComboAchieved: number;
    stars: number;
    unlockedSkins: string[];
    adsRemoved: boolean;
  }): Promise<boolean> {
    const db = this.auth.getClient();
    const userId = this.auth.user()?.id;
    if (!db || !userId) return false;
    const username = this.auth.displayName() || 'Anón';
    try {
      const existing = await this.fetchUserProfile();
      const payload = {
        user_id: userId,
        username,
        xp: profileData.xp,
        level: profileData.level,
        selected_title: profileData.selectedTitle,
        unlocked_titles: profileData.unlockedTitles,
        unlocked_achievements: profileData.unlockedAchievements,
        blocks_placed: profileData.blocksPlacedCount,
        duels_completed: profileData.duelsCompletedCount,
        max_combo: profileData.maxComboAchieved,
        stars: profileData.stars,
        unlocked_skins: profileData.unlockedSkins,
        ads_removed: profileData.adsRemoved,
        updated_at: new Date().toISOString()
      };

      if (existing) {
        const { error } = await db
          .from('user_profiles')
          .update(payload)
          .eq('user_id', userId);
        return !error;
      } else {
        const { error } = await db
          .from('user_profiles')
          .insert(payload);
        return !error;
      }
    } catch {
      return false;
    }
  }
}
