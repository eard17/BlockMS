import { Injectable } from '@angular/core';

const PREFIX = 'BMS';

export interface DecodedChallenge {
  seed: string;
  targetScore: number;
  creatorName: string;
}

@Injectable({ providedIn: 'root' })
export class ChallengeCodecService {
  encodeChallenge(seed: string, targetScore: number, creatorName: string): string {
    const s = seed.toLowerCase();
    const t = targetScore.toString(36).toLowerCase();
    const n = btoa(encodeURIComponent(creatorName));
    return [PREFIX, s, t, n].join('-');
  }

  decodeChallenge(code: string): DecodedChallenge {
    const parts = code.split('-');
    if (parts.length < 4 || parts[0] !== PREFIX)
      throw new Error(`Código de reto inválido: "${code}"`);
    const [, seed, scoreB36, nameB64] = parts;
    return {
      seed,
      targetScore: parseInt(scoreB36, 36),
      creatorName: decodeURIComponent(atob(nameB64)),
    };
  }
}
