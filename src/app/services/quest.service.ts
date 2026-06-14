import { Injectable, inject, signal } from '@angular/core';
import { SaveProgressService } from './save-progress';

export interface QuestDef {
  id: string;
  type: 'break' | 'combo' | 'place';
  target: number;
  label: string;
  rewardXp: number;
  rewardStars: number;
}

export interface QuestProgress {
  id: string;
  progress: number;
  completed: boolean;
  claimed: boolean;
}

export interface QuestState {
  date: string;
  quests: QuestProgress[];
}

const STORAGE_KEY = 'bms_quests_v1';

const QUEST_POOL: QuestDef[] = [
  { id: 'break_50', type: 'break', target: 50, label: 'Rompe 50 celdas en una partida', rewardXp: 50, rewardStars: 5 },
  { id: 'break_100', type: 'break', target: 100, label: 'Rompe 100 celdas en una partida', rewardXp: 100, rewardStars: 10 },
  { id: 'break_200', type: 'break', target: 200, label: 'Rompe 200 celdas en una partida', rewardXp: 150, rewardStars: 15 },
  { id: 'combo_3', type: 'combo', target: 3, label: 'Consigue un combo de x3', rewardXp: 50, rewardStars: 5 },
  { id: 'combo_4', type: 'combo', target: 4, label: 'Consigue un combo de x4', rewardXp: 100, rewardStars: 10 },
  { id: 'combo_5', type: 'combo', target: 5, label: 'Consigue un combo de x5', rewardXp: 150, rewardStars: 15 },
  { id: 'place_20', type: 'place', target: 20, label: 'Coloca 20 bloques hoy', rewardXp: 50, rewardStars: 5 },
  { id: 'place_50', type: 'place', target: 50, label: 'Coloca 50 bloques hoy', rewardXp: 100, rewardStars: 10 },
  { id: 'place_100', type: 'place', target: 100, label: 'Coloca 100 bloques hoy', rewardXp: 150, rewardStars: 15 },
];

@Injectable({ providedIn: 'root' })
export class QuestService {
  private saveService = inject(SaveProgressService);
  private _state = signal<QuestState>(this.loadOrInitialize());

  readonly state = this._state.asReadonly();

  getQuestDefinition(id: string): QuestDef | undefined {
    return QUEST_POOL.find(q => q.id === id);
  }

  updateProgress(type: 'break' | 'combo' | 'place', value: number) {
    this.checkDateReset();
    const current = this._state();
    const updatedQuests = current.quests.map(q => {
      const def = this.getQuestDefinition(q.id);
      if (!def || def.type !== type || q.completed) return q;

      let nextProgress = q.progress;
      if (type === 'place') {
        nextProgress += value;
      } else {
        // break or combo are per-game maximums/values
        nextProgress = Math.max(q.progress, value);
      }

      const completed = nextProgress >= def.target;
      return {
        ...q,
        progress: nextProgress,
        completed
      };
    });

    const nextState = { ...current, quests: updatedQuests };
    this._state.set(nextState);
    this.save(nextState);
  }

  claimReward(questId: string): boolean {
    this.checkDateReset();
    const current = this._state();
    const qIdx = current.quests.findIndex(q => q.id === questId);
    if (qIdx === -1) return false;
    const q = current.quests[qIdx]!;
    if (!q.completed || q.claimed) return false;

    const def = this.getQuestDefinition(questId);
    if (!def) return false;

    // Award XP and Stars
    this.saveService.addXp(def.rewardXp);
    this.saveService.addStars(def.rewardStars);

    const updatedQuests = [...current.quests];
    updatedQuests[qIdx] = { ...q, claimed: true };

    const nextState = { ...current, quests: updatedQuests };
    this._state.set(nextState);
    this.save(nextState);
    return true;
  }

  private getDateStr(): string {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  private checkDateReset() {
    const today = this.getDateStr();
    if (this._state().date !== today) {
      const fresh = this.initializeForDate(today);
      this._state.set(fresh);
      this.save(fresh);
    }
  }

  private loadOrInitialize(): QuestState {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as QuestState;
        const today = this.getDateStr();
        if (parsed.date === today) {
          return parsed;
        }
      }
    } catch { /* ignore */ }

    return this.initializeForDate(this.getDateStr());
  }

  private initializeForDate(dateStr: string): QuestState {
    const indices = this.getDailyIndices(dateStr, QUEST_POOL.length);
    const quests = indices.map(idx => ({
      id: QUEST_POOL[idx]!.id,
      progress: 0,
      completed: false,
      claimed: false,
    }));

    return { date: dateStr, quests };
  }

  private getDailyIndices(dateStr: string, max: number): number[] {
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
    }
    const idx1 = Math.abs(hash) % max;
    const idx2 = Math.abs(hash * 31 + 17) % max;
    const idx3 = Math.abs(hash * 13 + 7) % max;
    
    const set = new Set<number>([idx1]);
    let offset = 1;
    while (set.size < 3) {
      set.add((idx2 + offset) % max);
      offset++;
      if (set.size < 3) {
        set.add((idx3 + offset) % max);
        offset++;
      }
    }
    return Array.from(set);
  }

  private save(state: QuestState) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch { /* ignore */ }
  }
}
