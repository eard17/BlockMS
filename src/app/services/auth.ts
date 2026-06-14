import { Injectable, signal, computed } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private supabase: SupabaseClient | null = null;

  private _user = signal<User | null>(null);

  readonly isAuthenticated = computed(() => this._user() !== null);
  readonly displayName = computed(() => this._user()?.user_metadata?.['full_name'] ?? this._user()?.email ?? '');
  readonly avatarUrl = computed(() => (this._user()?.user_metadata?.['avatar_url'] as string) ?? null);
  readonly user = this._user.asReadonly();

  constructor() {
    const isValidUrl = environment.supabaseUrl?.startsWith('https://');
    if (isValidUrl && environment.supabaseKey) {
      this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey, {
        auth: {
          lock: async (name, acquireTimeout, fn) => fn(),
        }
      });
      this.supabase.auth.getSession().then(({ data }) => {
        this._user.set(data.session?.user ?? null);
      });
      this.supabase.auth.onAuthStateChange((_, session) => {
        this._user.set(session?.user ?? null);
      });
    }
  }

  getClient(): SupabaseClient | null { return this.supabase; }

  async signInWithGoogle() {
    await this.supabase?.auth.signInWithOAuth({ provider: 'google' });
  }

  async signOut() {
    await this.supabase?.auth.signOut();
    this._user.set(null);
  }
}
