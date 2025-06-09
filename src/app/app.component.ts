import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface Upgrade {
  name: string;
  cost: number;
  dps: number;
  amount: number;
  unlocked: boolean;
  image?: string;
}

interface Trophy {
  title: string;
  description: string;
  earned: boolean;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  essence = signal(0);
  totalEssence = signal(0);

  upgradesList = signal<Upgrade[]>([
    {
      name: 'Cultista Solitário',
      cost: 10,
      dps: 0.1,
      amount: 0,
      unlocked: true,
      image: 'https://cdn-icons-png.flaticon.com/128/3898/3898041.png',
    },
    {
      name: 'Relíquia Maldita',
      cost: 100,
      dps: 1,
      amount: 0,
      unlocked: false,
      image: 'https://cdn-icons-png.flaticon.com/128/3477/3477264.png',
    },
    {
      name: 'Ritual Sangrento',
      cost: 500,
      dps: 5,
      amount: 0,
      unlocked: false,
      image: 'https://cdn-icons-png.flaticon.com/128/3265/3265733.png',
    },
  ]);

  trophiesList = signal<Trophy[]>([
    {
      title: 'Primeira Essência',
      description: 'Você coletou sua primeira essência!',
      earned: false,
      icon: '✨',
    },
    {
      title: 'Caminho Sombrio',
      description: 'Alcance 100 essências.',
      earned: false,
      icon: '🌑',
    },
    {
      title: 'Mestre das Sombras',
      description: 'Alcance 1.000 essências.',
      earned: false,
      icon: '👁️',
    },
  ]);

  purchaseModes = [1, 10, 100, 1000];
  currentPurchaseMode = 1;

  trophyModal = signal(false);
  lastUnlockedTrophy = signal<Trophy | null>(null);

  essencePerSecond = computed(() =>
    this.upgradesList().reduce((acc, up) => acc + up.dps * up.amount, 0)
  );

  constructor() {
    // Ganho automático de essência
    setInterval(() => {
      const gain = this.essencePerSecond();
      if (gain > 0) {
        this.essence.update((v) => v + gain);
        this.totalEssence.update((v) => v + gain);
      }
    }, 1000);

    // Atualiza desbloqueio de upgrades e troféus automaticamente
    effect(() => {
      const total = this.totalEssence();
      this.upgradesList.update((list) =>
        list.map((up) => ({
          ...up,
          unlocked: total >= up.cost / 2 || up.unlocked,
        }))
      );

      if (total >= 1) this.unlockTrophy('Primeira Essência');
      if (total >= 100) this.unlockTrophy('Caminho Sombrio');
      if (total >= 1000) this.unlockTrophy('Mestre das Sombras');
    });
  }

  darkEssence() {
    return Math.floor(this.essence());
  }

  totalEssenceValue() {
    return Math.floor(this.totalEssence());
  }

  earnEssence(amount: number) {
    this.essence.update((v) => v + amount);
    this.totalEssence.update((v) => v + amount);
  }

  canAffordUpgrade(index: number, multiplier: number) {
    const up = this.upgradesList()[index];
    return this.essence() >= up.cost * multiplier;
  }

  buyUpgrade(index: number, multiplier: number) {
    const upgrades = [...this.upgradesList()];
    const up = upgrades[index];
    const totalCost = up.cost * multiplier;

    if (this.essence() < totalCost) return;

    up.amount += multiplier;
    // Crescimento exponencial do custo para o próximo upgrade
    up.cost = Math.round(up.cost * Math.pow(1.15, multiplier));

    this.essence.update((v) => v - totalCost);
    this.upgradesList.set(upgrades);
  }

  upgrades() {
    return this.upgradesList();
  }

  trophies() {
    return this.trophiesList();
  }

  unlockTrophy(title: string) {
    const trophies = [...this.trophiesList()];
    const trophy = trophies.find((t) => t.title === title);

    if (trophy && !trophy.earned) {
      trophy.earned = true;
      this.trophiesList.set(trophies);
      this.lastUnlockedTrophy.set(trophy);
      this.trophyModal.set(true);

      // Toca som ao ganhar troféu
      const audio = new Audio(
        'https://assets.mixkit.co/sfx/preview/mixkit-fairy-win-sound-2011.mp3'
      );
      audio.play();
    }
  }

  showTrophyModal() {
    return this.trophyModal();
  }

  unlockedTrophy() {
    return this.lastUnlockedTrophy();
  }

  closeModal() {
    this.trophyModal.set(false);
    this.lastUnlockedTrophy.set(null);
  }
}
