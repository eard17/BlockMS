import { Component, output } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sleep-overlay',
  standalone: true,
  imports: [IonButton],
  templateUrl: './sleep-overlay.component.html',
  styleUrls: ['./sleep-overlay.component.scss'],
})
export class SleepOverlayComponent {
  readonly openGate = output<void>();
}
