import { CommonModule } from '@angular/common';
import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

// Interfaces (mantenha como estão)
interface Upgrade {
  name: string;
  cost: number;
  dps: number;
  amount: number;
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
export class AppComponent implements OnInit, OnDestroy {
  essence = signal(0);
  totalEssence = signal(0);

  upgradesList = signal<Upgrade[]>([
    {
      name: 'Cultista Solitário',
      cost: 10,
      dps: 0.1,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/3898/3898041.png',
    },
    {
      name: 'Relíquia Maldita',
      cost: 100,
      dps: 1,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/3477/3477264.png',
    },
    {
      name: 'Ritual Sangrento',
      cost: 500,
      dps: 5,
      amount: 0, // Adicionei 'amount: 0' para consistência, se não tiver já
      image: 'https://cdn-icons-png.flaticon.com/128/3265/3265733.png',
    },
    {
      name: 'Entidade Ancestral',
      cost: 2500,
      dps: 20,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/3481/3481077.png',
    },
  ]);

  trophiesList = signal<Trophy[]>([
    {
      title: 'Primeira Brasa',
      description: 'Você coletou sua primeira essência!',
      earned: false,
      icon: '🕯️',
    },
    {
      title: 'Eco Inicial',
      description: 'Alcance 100 essências totais.',
      earned: false,
      icon: '🔊',
    },
    {
      title: 'Voto de Sangue',
      description: 'Alcance 1.000 essências totais.',
      earned: false,
      icon: '🩸',
    },
    {
      title: 'Sussurros na Escuridão',
      description: 'Alcance 10.000 essências totais.',
      earned: false,
      icon: '👻',
    },
    {
      title: 'Ídolo Restaurado',
      description: 'Alcance 50.000 essências totais.',
      earned: false,
      icon: '🗿',
    },
    {
      title: 'Rito Completo',
      description: 'Alcance 250.000 essências totais.',
      earned: false,
      icon: '🔮',
    },
    {
      title: 'Harmonia Dissonante',
      description: 'Alcance 1.000.000 essências totais.',
      earned: false,
      icon: '🎶',
    },
    {
      title: 'Profundezas Insanas',
      description: 'Alcance 5.000.000 essências totais.',
      earned: false,
      icon: '🌀',
    },
    {
      title: 'Limiar Dimensional',
      description: 'Alcance 25.000.000 essências totais.',
      earned: false,
      icon: '🌌',
    },
    {
      title: 'O Despertar',
      description:
        'Alcance 100.000.000 essências totais. A Ameaça Ancestral se ergue!',
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

  // Este 'computed' retorna os upgrades com a flag 'unlocked'
  // (mantenha como estava, pois 'canAffordUpgrade' e a lógica de compra ainda o usam)
  upgrades = computed(() => {
    const total = this.totalEssence();
    return this.upgradesList().map((up) => ({
      ...up,
      unlocked: total >= up.cost / 2 || up.amount > 0,
    }));
  });

  // NOVO: Este 'computed' vai filtrar os upgrades que estão realmente desbloqueados
  // para exibição no HTML.
  unlockedUpgrades = computed(() => {
    return this.upgrades().filter((up) => up.unlocked);
  });

  private gameInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.loadGame();
    this.startGameLoop();
  }

  ngOnDestroy(): void {
    clearInterval(this.gameInterval);
    this.saveGame();
  }

  private startGameLoop(): void {
    this.gameInterval = setInterval(() => {
      const gain = this.essencePerSecond();
      if (gain > 0) {
        this.earnEssence(gain);
      }
      this.saveGame();
    }, 1000);
  }

  // --- Funções de Save/Load ---
  private saveGame(): void {
    const gameState = {
      essence: this.essence(),
      totalEssence: this.totalEssence(),
      upgradesList: this.upgradesList(), // Salva a lista base
      trophiesList: this.trophiesList(),
    };
    try {
      localStorage.setItem('fearIdleGame', JSON.stringify(gameState));
    } catch (e) {
      console.error('Erro ao salvar o jogo no localStorage:', e);
    }
  }

  private loadGame(): void {
    try {
      const savedState = localStorage.getItem('fearIdleGame');
      if (savedState) {
        const gameState = JSON.parse(savedState);

        this.essence.set(gameState.essence || 0);
        this.totalEssence.set(gameState.totalEssence || 0);

        const loadedUpgrades: Upgrade[] = gameState.upgradesList || [];
        const currentUpgrades: Upgrade[] = this.upgradesList();

        const mergedUpgrades = currentUpgrades.map((defaultUpgrade) => {
          const savedUpgrade = loadedUpgrades.find(
            (lu) => lu.name === defaultUpgrade.name
          );
          // Se encontrar, use os dados salvos, caso contrário, use os dados padrão do código.
          // É importante garantir que o 'amount' e 'cost' sejam do save se existirem.
          return savedUpgrade
            ? {
                ...defaultUpgrade,
                amount: savedUpgrade.amount,
                cost: savedUpgrade.cost,
              }
            : defaultUpgrade;
        });

        // Adiciona upgrades que podem ter sido adicionados ao save mas não estão mais no código (cenário raro, mas por segurança)
        loadedUpgrades.forEach((savedUpgrade) => {
          if (!mergedUpgrades.some((mu) => mu.name === savedUpgrade.name)) {
            mergedUpgrades.push(savedUpgrade);
          }
        });

        this.upgradesList.set(mergedUpgrades);

        const loadedTrophies: Trophy[] = gameState.trophiesList || [];
        const currentTrophies: Trophy[] = this.trophiesList();

        const mergedTrophies = currentTrophies.map((defaultTrophy) => {
          const savedTrophy = loadedTrophies.find(
            (lt) => lt.title === defaultTrophy.title
          );
          // Se encontrar, use os dados salvos para 'earned', caso contrário, use o padrão.
          return savedTrophy
            ? { ...defaultTrophy, earned: savedTrophy.earned }
            : defaultTrophy;
        });

        loadedTrophies.forEach((savedTrophy) => {
          if (!mergedTrophies.some((mt) => mt.title === savedTrophy.title)) {
            mergedTrophies.push(savedTrophy);
          }
        });

        this.trophiesList.set(mergedTrophies);
      }
    } catch (e) {
      console.error('Erro ao carregar o jogo do localStorage:', e);
    }
  }

  // --- Funções do Jogo ---

  darkEssence() {
    return Math.floor(this.essence());
  }

  earnEssence(amount: number) {
    this.essence.update((v) => v + amount);
    this.totalEssence.update((v) => v + amount);
    this.checkTrophyProgress(this.totalEssence());
  }

  canAffordUpgrade(index: number, multiplier: number) {
    // Para 'canAffordUpgrade', você precisa referenciar a lista completa de upgrades (computed 'upgrades')
    // para que o índice seja correto com base em todos os upgrades, mesmo os não desbloqueados.
    // Ou, se você só quer verificar a capacidade de compra dos upgrades *visíveis*,
    // você teria que passar o objeto 'up' diretamente ou ajustar a lógica de indexação.
    // Por enquanto, vou manter usando 'this.upgrades()' que contém todos, desbloqueados ou não.
    const up = this.upgrades()[index]; // Continua usando a lista completa para o índice
    return this.essence() >= up.cost * multiplier;
  }

  buyUpgrade(index: number, multiplier: number) {
    this.upgradesList.update((currentUpgrades) => {
      const upgradesCopy = [...currentUpgrades];
      // O problema aqui é que 'index' agora se refere à lista filtrada 'unlockedUpgrades()',
      // mas 'upgradesCopy' é a lista completa. Precisamos encontrar o upgrade pelo nome.
      const clickedUpgradeFromUnlockedList = this.unlockedUpgrades()[index];

      if (!clickedUpgradeFromUnlockedList) {
        return currentUpgrades; // Fallback seguro
      }

      const up = upgradesCopy.find(
        (u) => u.name === clickedUpgradeFromUnlockedList.name
      );

      if (!up) {
        return currentUpgrades; // Upgrade não encontrado na lista original
      }

      const totalCost = up.cost * multiplier;

      if (this.essence() < totalCost) {
        return currentUpgrades;
      }

      up.amount += multiplier;
      up.cost = Math.round(up.cost * Math.pow(1.15, multiplier));

      this.essence.update((v) => v - totalCost);
      return upgradesCopy;
    });
  }

  trophies() {
    return this.trophiesList();
  }

  private checkTrophyProgress(currentTotalEssence: number) {
    this.trophiesList().forEach((trophy) => {
      if (!trophy.earned) {
        switch (trophy.title) {
          case 'Primeira Brasa':
            if (currentTotalEssence >= 1) this.unlockTrophy(trophy.title);
            break;
          case 'Eco Inicial':
            if (currentTotalEssence >= 100) this.unlockTrophy(trophy.title);
            break;
          case 'Voto de Sangue':
            if (currentTotalEssence >= 1000) this.unlockTrophy(trophy.title);
            break;
          case 'Sussurros na Escuridão':
            if (currentTotalEssence >= 10000) this.unlockTrophy(trophy.title);
            break;
          case 'Ídolo Restaurado':
            if (currentTotalEssence >= 50000) this.unlockTrophy(trophy.title);
            break;
          case 'Rito Completo':
            if (currentTotalEssence >= 250000) this.unlockTrophy(trophy.title);
            break;
          case 'Harmonia Dissonante':
            if (currentTotalEssence >= 1000000) this.unlockTrophy(trophy.title);
            break;
          case 'Profundezas Insanas':
            if (currentTotalEssence >= 5000000) this.unlockTrophy(trophy.title);
            break;
          case 'Limiar Dimensional':
            if (currentTotalEssence >= 25000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'O Despertar':
            if (currentTotalEssence >= 100000000)
              this.unlockTrophy(trophy.title);
            break;
        }
      }
    });
  }

  unlockTrophy(title: string) {
    this.trophiesList.update((currentTrophies) => {
      const updatedTrophies = [...currentTrophies];
      const trophy = updatedTrophies.find((t) => t.title === title);

      if (trophy && !trophy.earned) {
        trophy.earned = true;
        this.lastUnlockedTrophy.set(trophy);
        this.trophyModal.set(true);

        const audio = new Audio(
          'https://assets.mixkit.co/sfx/preview/mixkit-fairy-win-sound-2011.mp3'
        );
        audio.play();
        return updatedTrophies;
      }
      return currentTrophies;
    });
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
