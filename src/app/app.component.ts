import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  gold = signal(0);
  goldPerSecond = signal(1);

  constructor() {
    this.loadGame();

    setInterval(() => {
      this.gold.update((g) => g + this.goldPerSecond());
    }, 1000);

    // salvar a cada 10s
    setInterval(() => this.saveGame(), 10000);
  }

  earnGold(amount: number) {
    this.gold.update((g) => g + amount);
  }

  buyUpgrade() {
    const cost = 10 * this.goldPerSecond();
    if (this.gold() >= cost) {
      this.gold.update((g) => g - cost);
      this.goldPerSecond.update((v) => v + 1);
    }
  }

  saveGame() {
    const save = {
      gold: this.gold(),
      goldPerSecond: this.goldPerSecond(),
      lastPlayed: Date.now(),
    };
    localStorage.setItem('idleSave', JSON.stringify(save));
  }

  loadGame() {
    const data = localStorage.getItem('idleSave');
    if (data) {
      const save = JSON.parse(data);
      this.gold.set(save.gold);
      this.goldPerSecond.set(save.goldPerSecond);
      const delta = Math.floor((Date.now() - save.lastPlayed) / 1000);
      this.gold.update((g) => g + delta * this.goldPerSecond());
    }
  }
}
