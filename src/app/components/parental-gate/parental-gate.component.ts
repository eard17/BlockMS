import { Component, output, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton } from '@ionic/angular/standalone';

const WORDS = ['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho',
  'nueve','diez','once','doce','trece','catorce','quince'];

interface Challenge { questionText: string; correctAnswer: number; options: number[]; }

@Component({
  selector: 'app-parental-gate',
  standalone: true,
  imports: [CommonModule, IonButton],
  templateUrl: './parental-gate.component.html',
  styleUrls: ['./parental-gate.component.scss'],
})
export class ParentalGateComponent implements OnInit {
  readonly unlocked = output<void>();
  readonly dismissed = output<void>();

  readonly challenge = signal<Challenge | null>(null);
  readonly feedback = signal<'idle' | 'wrong'>('idle');

  ngOnInit() { this.generate(); }

  select(answer: number) {
    const c = this.challenge();
    if (!c) return;
    if (answer === c.correctAnswer) { this.unlocked.emit(); return; }
    this.feedback.set('wrong');
    setTimeout(() => { this.feedback.set('idle'); this.generate(); }, 800);
  }

  private generate() {
    const ops = [
      { label: 'más', fn: (a: number, b: number) => a + b },
      { label: 'menos', fn: (a: number, b: number) => a - b },
    ];
    let a: number, b: number, result: number, op: typeof ops[0];
    do {
      op = ops[Math.floor(Math.random() * ops.length)];
      a = Math.floor(Math.random() * 8) + 2;
      b = Math.floor(Math.random() * 6) + 1;
      result = op.fn(a, b);
    } while (result < 1 || result > 15 || result === a || result === b);

    const text = `${WORDS[a] ?? a} ${op.label} ${WORDS[b] ?? b}`;
    this.challenge.set({ questionText: text, correctAnswer: result, options: this.buildOptions(result) });
  }

  private buildOptions(correct: number): number[] {
    const set = new Set([correct]);
    const deltas = [-3,-2,-1,1,2,3].sort(() => Math.random() - .5);
    for (const d of deltas) {
      if (set.size >= 4) break;
      const v = correct + d;
      if (v >= 1 && v <= 15) set.add(v);
    }
    for (let i = 1; set.size < 4 && i <= 15; i++) set.add(i);
    return [...set].sort(() => Math.random() - .5);
  }
}
