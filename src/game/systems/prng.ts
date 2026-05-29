export class Prng {
  private seed: number;

  constructor(seedStr: string) { this.seed = Prng.stringToSeed(seedStr); }

  next(): number {
    this.seed = (9301 * this.seed + 49297) % 233280;
    return this.seed / 233280;
  }

  nextInt(min: number, max: number): number {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }

  pick<T>(arr: T[]): T {
    if (arr.length === 0) throw new Error('Prng.pick: empty array');
    return arr[this.nextInt(0, arr.length - 1)];
  }

  static stringToSeed(s: string): number {
    let h = 0;
    for (let i = 0; i < s.length; i++) h += s.charCodeAt(i);
    return Math.abs(h) % 233280;
  }
}
