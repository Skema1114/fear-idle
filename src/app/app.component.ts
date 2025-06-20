import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ClickUpgrade } from '../interfaces/ClickUpgrade';
import { PrestigeUpgrade } from '../interfaces/PrestigeUpgrade';
import { Toast } from '../interfaces/Toast';
import { Trophy } from '../interfaces/Trophy';
import { Upgrade } from '../interfaces/Upgrade';
import { TrophyService } from '../services/trophy.service';
import { UpgradeService } from '../services/upgrade.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  private upgradeService = inject(UpgradeService);
  private trophyService = inject(TrophyService);

  essence = signal(0);
  totalEssence = signal(0);

  upgradesList = signal<Upgrade[]>(this.upgradeService.getIdleUpgradesList());
  clickUpgradesList = signal<ClickUpgrade[]>(
    this.upgradeService.getClickUpgradesList()
  );
  prestigeUpgradesList = signal<PrestigeUpgrade[]>(
    this.upgradeService.getPrestigeUpgradesList()
  );
  trophiesList = signal<Trophy[]>(this.trophyService.getTrophiesList());

  numericPurchaseModes: number[] = [1, 10, 100, 1000];
  purchaseModes: (number | string)[] = [...this.numericPurchaseModes, 'max'];

  currentPurchaseMode: number | string = 1;

  showImportModal: boolean = false;
  importedSaveData: string = '';

  showExportTextModal: boolean = false;
  exportedSaveText: string = '';

  showTrophyDetailsModal: boolean = false;
  selectedTrophy: Trophy | null = null;

  showUpgradeDetailsModal: boolean = false;
  selectedUpgrade: Upgrade | ClickUpgrade | PrestigeUpgrade | any | null = null;
  selectedUpgradeType: 'auto' | 'click' | 'prestige' | null = null;

  showStatsModal: boolean = false;

  prestigeEssence = signal(0);
  prestigeLevel = signal(0);

  baseClickValue = signal(1);
  comboCount = signal(0);
  highestCombo = signal(0);
  totalManualClicks = signal(0);
  totalPlaytime = signal(0);
  private comboResetTimeout: any;

  activeToasts = signal<Toast[]>([]);
  private nextToastId = 0;

  globalMultiplier = computed(() => {
    let multiplier = 1;
    this.prestigeUpgradesList().forEach((up) => {
      if (up.type === 'global') {
        multiplier *= Math.pow(up.multiplierValue, up.amount);
      }
    });
    multiplier *= 1 + this.prestigeLevel() * 0.1;

    return multiplier;
  });

  clickValue = computed(() => {
    let base = this.baseClickValue();
    let clickUpgradeMultiplier = 1;
    this.clickUpgradesList().forEach((up) => {
      clickUpgradeMultiplier *= Math.pow(1 + up.clickMultiplier, up.amount);
    });
    let globalClickPrestigeMultiplier = 1;
    this.prestigeUpgradesList().forEach((up) => {
      if (up.type === 'click') {
        globalClickPrestigeMultiplier *= Math.pow(
          up.multiplierValue,
          up.amount
        );
      }
    });

    return base * clickUpgradeMultiplier * globalClickPrestigeMultiplier;
  });

  dpsValue = computed(() => {
    let baseDps = this.upgradesList().reduce(
      (acc, up) => acc + up.dps * up.amount,
      0
    );
    let globalDpsPrestigeMultiplier = 1;
    this.prestigeUpgradesList().forEach((up) => {
      if (up.type === 'dps') {
        globalDpsPrestigeMultiplier *= Math.pow(up.multiplierValue, up.amount);
      }
    });
    return baseDps * globalDpsPrestigeMultiplier;
  });

  essencePerSecond = computed(() => this.dpsValue() * this.globalMultiplier());

  comboMultiplier = computed(() => {
    return 1 + this.comboCount() * 0.02;
  });

  unlockedPrestigeUpgrades = computed(() => {
    const currentPrestigeEssence = this.prestigeEssence();
    return this.prestigeUpgradesList()
      .map((up) => ({
        ...up,
        unlocked: currentPrestigeEssence >= up.cost || up.amount > 0,
      }))
      .filter((up) => up.unlocked);
  });

  unlockedClickUpgrades = computed(() => {
    const total = this.totalEssence();
    const totalClicksMade = this.totalManualClicks();

    return this.clickUpgradesList()
      .map((up) => {
        let unlocked = up.amount > 0;
        if (!unlocked) {
          if (up.name === 'Toque Sutil') unlocked = true;
          else if (up.name === 'Foco Macabro')
            unlocked =
              totalClicksMade >= 50 ||
              this.clickUpgradesList().find((u) => u.name === 'Toque Sutil')
                ?.amount! > 0;
          else if (up.name === 'Ritmo Insano')
            unlocked =
              totalClicksMade >= 200 ||
              this.clickUpgradesList().find((u) => u.name === 'Foco Macabro')
                ?.amount! > 0;
          else if (up.name === 'Canto Hipnótico')
            unlocked =
              totalClicksMade >= 1000 ||
              this.clickUpgradesList().find((u) => u.name === 'Ritmo Insano')
                ?.amount! > 0;
          else if (up.name === 'Conexão Psíquica')
            unlocked =
              totalClicksMade >= 5000 ||
              this.clickUpgradesList().find((u) => u.name === 'Canto Hipnótico')
                ?.amount! > 0;
          else if (up.name === 'Pulso Sombrio')
            unlocked =
              totalClicksMade >= 15000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Conexão Psíquica'
              )?.amount! > 0;
          else if (up.name === 'Memória Amaldiçoada')
            unlocked =
              totalClicksMade >= 50000 ||
              this.clickUpgradesList().find((u) => u.name === 'Pulso Sombrio')
                ?.amount! > 0;
          else if (up.name === 'Ecos do Vazio')
            unlocked =
              totalClicksMade >= 200000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Memória Amaldiçoada'
              )?.amount! > 0;
          else if (up.name === 'Fúria Canalizada')
            unlocked =
              totalClicksMade >= 1000000 ||
              this.clickUpgradesList().find((u) => u.name === 'Ecos do Vazio')
                ?.amount! > 0;
          else if (up.name === 'Devaneio Perpétuo')
            unlocked =
              totalClicksMade >= 5000000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Fúria Canalizada'
              )?.amount! > 0;
          else if (up.name === 'Convergência Dimensional')
            unlocked =
              totalClicksMade >= 20000000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Devaneio Perpétuo'
              )?.amount! > 0;
          else if (up.name === 'Vortex de Essência')
            unlocked =
              totalClicksMade >= 100000000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Convergência Dimensional'
              )?.amount! > 0;
          else if (up.name === 'Canto Cósmico')
            unlocked =
              totalClicksMade >= 500000000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Vortex de Essência'
              )?.amount! > 0;
          else if (up.name === 'Pulsar da Realidade')
            unlocked =
              totalClicksMade >= 2000000000 ||
              this.clickUpgradesList().find((u) => u.name === 'Canto Cósmico')
                ?.amount! > 0;
          else if (up.name === 'Fragmento do Caos')
            unlocked =
              totalClicksMade >= 10000000000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Pulsar da Realidade'
              )?.amount! > 0;
          else if (up.name === 'Mão Eterna')
            unlocked =
              totalClicksMade >= 30000000000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Fragmento do Caos'
              )?.amount! > 0;
          else if (up.name === 'Eco do Além')
            unlocked =
              totalClicksMade >= 150000000000 ||
              this.clickUpgradesList().find((u) => u.name === 'Mão Eterna')
                ?.amount! > 0;
          else if (up.name === 'Batida Estelar')
            unlocked =
              totalClicksMade >= 700000000000 ||
              this.clickUpgradesList().find((u) => u.name === 'Eco do Além')
                ?.amount! > 0;
          else if (up.name === 'Ritmo Cósmico')
            unlocked =
              totalClicksMade >= 3000000000000 ||
              this.clickUpgradesList().find((u) => u.name === 'Batida Estelar')
                ?.amount! > 0;
          else if (up.name === 'Voz do Vazio')
            unlocked =
              totalClicksMade >= 12000000000000 ||
              this.clickUpgradesList().find((u) => u.name === 'Ritmo Cósmico')
                ?.amount! > 0;
          else if (up.name === 'Pulso da Não-Existência')
            unlocked =
              totalClicksMade >= 50000000000000 ||
              this.clickUpgradesList().find((u) => u.name === 'Voz do Vazio')
                ?.amount! > 0;
          else if (up.name === 'Consciência Amaldiçoada')
            unlocked =
              totalClicksMade >= 200000000000000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Pulso da Não-Existência'
              )?.amount! > 0;
          else if (up.name === 'Ecos do Além-Concebível')
            unlocked =
              totalClicksMade >= 800000000000000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Consciência Amaldiçoada'
              )?.amount! > 0;
          else if (up.name === 'Sussurros do Crepúsculo')
            unlocked =
              totalClicksMade >= 3000000000000000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Ecos do Além-Concebível'
              )?.amount! > 0;
        }
        return { ...up, unlocked };
      })
      .filter((up) => up.unlocked);
  });

  upgrades = computed(() => {
    const total = this.totalEssence();
    return this.upgradesList()
      .map((up) => ({
        ...up,
        unlocked: total >= up.cost / 2 || up.amount > 0,
      }))
      .filter((up) => up.unlocked);
  });

  unlockedUpgrades = computed(() => {
    return this.upgrades().filter((up) => up.unlocked);
  });

  totalAutoUpgradesBought = computed(() => {
    return this.upgradesList().reduce((sum, up) => sum + up.amount, 0);
  });

  totalClickUpgradesBought = computed(() => {
    return this.clickUpgradesList().reduce((sum, up) => sum + up.amount, 0);
  });

  totalPrestigeUpgradesBought = computed(() => {
    return this.prestigeUpgradesList().reduce((sum, up) => sum + up.amount, 0);
  });

  unlockedTrophiesCount = computed(() => {
    return this.trophiesList().filter((t) => t.earned).length;
  });

  private gameInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.loadGame();
    this.startGameLoop();
  }

  ngOnDestroy(): void {
    clearInterval(this.gameInterval);
    if (this.comboResetTimeout) {
      clearTimeout(this.comboResetTimeout);
    }
    this.activeToasts().forEach((toast) => {
      if (toast.timeoutId) clearTimeout(toast.timeoutId);
    });
    this.saveGame();
  }

  private startGameLoop(): void {
    this.gameInterval = setInterval(() => {
      const gain = this.essencePerSecond();
      if (gain > 0) {
        this.essence.update((v) => v + gain);
        this.totalEssence.update((v) => v + gain);
      }
      this.totalPlaytime.update((v) => v + 1);
      this.checkTrophyProgress(
        this.totalEssence(),
        this.totalManualClicks(),
        this.highestCombo(),
        this.prestigeLevel(),
        this.prestigeEssence(),
        this.globalMultiplier()
      );
      this.saveGame();
    }, 300000);
  }

  public darkEssence(): number {
    return Math.floor(this.essence());
  }

  manualClick(): void {
    this.totalManualClicks.update((v) => v + 1);
    this.comboCount.update((v) => v + 1);

    if (this.comboCount() > this.highestCombo()) {
      this.highestCombo.set(this.comboCount());
    }

    if (this.comboResetTimeout) {
      clearTimeout(this.comboResetTimeout);
    }

    this.comboResetTimeout = setTimeout(() => {
      this.comboCount.set(0);
      console.log('Combo resetado!');
    }, 2000);

    const gain = this.clickValue() * this.comboMultiplier();
    this.essence.update((v) => v + gain);
    this.totalEssence.update((v) => v + gain);

    this.checkTrophyProgress(
      this.totalEssence(),
      this.totalManualClicks(),
      this.highestCombo(),
      this.prestigeLevel(),
      this.prestigeEssence(),
      this.globalMultiplier()
    );
  }

  private saveGame(): void {
    const gameState = {
      essence: this.essence(),
      totalEssence: this.totalEssence(),
      upgradesList: this.upgradesList(),
      trophiesList: this.trophiesList(),
      clickUpgradesList: this.clickUpgradesList(),
      highestCombo: this.highestCombo(),
      totalManualClicks: this.totalManualClicks(),
      prestigeEssence: this.prestigeEssence(),
      prestigeLevel: this.prestigeLevel(),
      prestigeUpgradesList: this.prestigeUpgradesList(),
      totalPlaytime: this.totalPlaytime(),
    };
    try {
      const jsonString = JSON.stringify(gameState);
      const utf8Encoded = unescape(encodeURIComponent(jsonString));
      const saveDataString = btoa(utf8Encoded);

      localStorage.setItem('fearIdleGame', saveDataString);
      console.log('Jogo salvo no localStorage.');
    } catch (e) {
      console.error('Erro ao salvar o jogo no localStorage:', e);
    }
  }

  saveGameManually(): void {
    this.saveGame();
    alert('Jogo salvo manualmente!');
  }

  exportSave(): void {
    const gameState = {
      essence: this.essence(),
      totalEssence: this.totalEssence(),
      upgradesList: this.upgradesList(),
      trophiesList: this.trophiesList(),
      clickUpgradesList: this.clickUpgradesList(),
      highestCombo: this.highestCombo(),
      totalManualClicks: this.totalManualClicks(),
      prestigeEssence: this.prestigeEssence(),
      prestigeLevel: this.prestigeLevel(),
      prestigeUpgradesList: this.prestigeUpgradesList(),
      totalPlaytime: this.totalPlaytime(),
    };
    try {
      const jsonString = JSON.stringify(gameState);
      const utf8Encoded = unescape(encodeURIComponent(jsonString));
      const saveDataString = btoa(utf8Encoded);

      this.exportedSaveText = saveDataString;
      this.showExportTextModal = true;

      navigator.clipboard
        .writeText(saveDataString)
        .then(() => {})
        .catch((err) => {
          console.warn(
            'Falha ao copiar automaticamente para a área de transferência:',
            err
          );
        });
    } catch (e: any) {
      console.error('Erro ao gerar save:', e);
      alert(
        'Erro ao gerar save. Verifique o console para detalhes. Detalhes: ' +
          (e.message || 'Erro desconhecido.')
      );
    }
  }

  copyExportedSaveText(): void {
    navigator.clipboard
      .writeText(this.exportedSaveText)
      .then(() => {
        alert('Código do save copiado para a área de transferência!');
      })
      .catch((err) => {
        console.error('Erro ao copiar o texto do save:', err);
        alert(
          'Não foi possível copiar automaticamente. Por favor, selecione o texto no campo e copie-o manualmente.'
        );
      });
  }

  loadGame(): void {
    try {
      const savedState = localStorage.getItem('fearIdleGame');
      if (savedState) {
        let decodedData: string;
        try {
          const decodedBase64 = atob(savedState);
          decodedData = decodeURIComponent(escape(decodedBase64));
        } catch (e: any) {
          console.error('Erro de decodificação no loadGame (Base64/UTF-8):', e);
          throw new Error('Save corrompido ou de formato antigo/inválido.');
        }

        const gameState = JSON.parse(decodedData);

        if (
          typeof gameState.essence !== 'number' ||
          typeof gameState.totalEssence !== 'number' ||
          !Array.isArray(gameState.upgradesList) ||
          !Array.isArray(gameState.trophiesList)
        ) {
          throw new Error(
            'Dados de save inválidos: formato principal incorreto.'
          );
        }

        if (
          typeof gameState.highestCombo !== 'number' ||
          typeof gameState.totalManualClicks !== 'number' ||
          !Array.isArray(gameState.clickUpgradesList) ||
          typeof gameState.prestigeEssence !== 'number' ||
          typeof gameState.prestigeLevel !== 'number' ||
          !Array.isArray(gameState.prestigeUpgradesList) ||
          typeof gameState.totalPlaytime !== 'number'
        ) {
          console.warn(
            'Dados de clique/combo/prestígio/tempo de jogo do save não encontrados ou corrompidos. Usando valores padrão.'
          );
          this.highestCombo.set(0);
          this.totalManualClicks.set(0);
          this.prestigeEssence.set(0);
          this.prestigeLevel.set(0);
          this.totalPlaytime.set(0);
        } else {
          this.highestCombo.set(gameState.highestCombo);
          this.totalManualClicks.set(gameState.totalManualClicks);
          this.prestigeEssence.set(gameState.prestigeEssence);
          this.prestigeLevel.set(gameState.prestigeLevel);
          this.totalPlaytime.set(gameState.totalPlaytime);
        }
        this.comboCount.set(0);

        this.essence.set(gameState.essence || 0);
        this.totalEssence.set(gameState.totalEssence || 0);

        const loadedUpgrades: Upgrade[] = gameState.upgradesList || [];
        const currentUpgrades: Upgrade[] = this.upgradesList();

        const mergedUpgrades = currentUpgrades.map((defaultUpgrade) => {
          const savedUpgrade = loadedUpgrades.find(
            (lu) => lu.name === defaultUpgrade.name
          );
          return savedUpgrade
            ? {
                ...defaultUpgrade,
                amount: savedUpgrade.amount,
                cost: savedUpgrade.cost,
                description:
                  savedUpgrade.description || defaultUpgrade.description,
              }
            : defaultUpgrade;
        });
        this.upgradesList.set(mergedUpgrades);

        const loadedClickUpgrades: ClickUpgrade[] =
          gameState.clickUpgradesList || [];
        const currentClickUpgrades: ClickUpgrade[] = this.clickUpgradesList();

        const mergedClickUpgrades = currentClickUpgrades.map(
          (defaultUpgrade) => {
            const savedUpgrade = loadedClickUpgrades.find(
              (lu) => lu.name === defaultUpgrade.name
            );
            return savedUpgrade
              ? {
                  ...defaultUpgrade,
                  amount: savedUpgrade.amount,
                  cost: savedUpgrade.cost,
                  description:
                    savedUpgrade.description || defaultUpgrade.description,
                }
              : defaultUpgrade;
          }
        );
        this.clickUpgradesList.set(mergedClickUpgrades);

        const loadedPrestigeUpgrades: PrestigeUpgrade[] =
          gameState.prestigeUpgradesList || [];
        const currentPrestigeUpgrades: PrestigeUpgrade[] =
          this.prestigeUpgradesList();

        const mergedPrestigeUpgrades = currentPrestigeUpgrades.map(
          (defaultUpgrade) => {
            const savedUpgrade = loadedPrestigeUpgrades.find(
              (lu) => lu.name === defaultUpgrade.name
            );
            return savedUpgrade
              ? {
                  ...defaultUpgrade,
                  amount: savedUpgrade.amount,
                  description:
                    savedUpgrade.description || defaultUpgrade.description,
                }
              : defaultUpgrade;
          }
        );
        this.prestigeUpgradesList.set(mergedPrestigeUpgrades);

        const loadedTrophies: Trophy[] = gameState.trophiesList || [];
        const currentTrophies: Trophy[] = this.trophiesList();

        const mergedTrophies = currentTrophies.map((defaultTrophy) => {
          const savedTrophy = loadedTrophies.find(
            (lt) => lt.title === defaultTrophy.title
          );
          return savedTrophy
            ? {
                ...defaultTrophy,
                earned: savedTrophy.earned,
                description:
                  savedTrophy.description || defaultTrophy.description,
              }
            : defaultTrophy;
        });
        this.trophiesList.set(mergedTrophies);
      }
    } catch (e: any) {
      console.error('Erro ao carregar o jogo do localStorage:', e);
      alert(
        'Erro ao carregar o jogo salvo. O save pode estar corrompido ou ser de um formato antigo. Por favor, tente limpar o localStorage do navegador (F12 > Application > Local Storage > Botão direito no domínio > Clear) e recarregar a página. Detalhes: ' +
          (e.message || 'Erro desconhecido.')
      );
      localStorage.removeItem('fearIdleGame');
    }
  }

  importSave(): void {
    if (!this.importedSaveData) {
      alert('Por favor, cole os dados do save no campo de texto.');
      return;
    }

    try {
      const decodedBase64 = atob(this.importedSaveData);
      const decodedData = decodeURIComponent(escape(decodedBase64));
      const gameState = JSON.parse(decodedData);

      if (
        typeof gameState.essence !== 'number' ||
        typeof gameState.totalEssence !== 'number' ||
        !Array.isArray(gameState.upgradesList) ||
        !Array.isArray(gameState.trophiesList)
      ) {
        throw new Error(
          'Dados de save inválidos: formato principal incorreto.'
        );
      }

      if (
        typeof gameState.highestCombo !== 'number' ||
        typeof gameState.totalManualClicks !== 'number' ||
        typeof gameState.prestigeEssence !== 'number' ||
        typeof gameState.prestigeLevel !== 'number' ||
        !Array.isArray(gameState.clickUpgradesList) ||
        !Array.isArray(gameState.prestigeUpgradesList) ||
        typeof gameState.totalPlaytime !== 'number'
      ) {
        throw new Error(
          'Dados de save inválidos: propriedades de clique/combo/prestígio/tempo de jogo ausentes ou corrompidas.'
        );
      }

      for (const up of gameState.upgradesList) {
        if (
          typeof up.name !== 'string' ||
          typeof up.cost !== 'number' ||
          typeof up.dps !== 'number' ||
          typeof up.amount !== 'number' ||
          typeof up.description !== 'string'
        ) {
          throw new Error(
            'Dados de save inválidos: upgrade automático com formato incorreto ou descrição ausente.'
          );
        }
      }

      for (const up of gameState.clickUpgradesList) {
        if (
          typeof up.name !== 'string' ||
          typeof up.cost !== 'number' ||
          typeof up.clickMultiplier !== 'number' ||
          typeof up.amount !== 'number' ||
          typeof up.description !== 'string'
        ) {
          throw new Error(
            'Dados de save inválidos: upgrade de clique com formato incorreto ou descrição ausente.'
          );
        }
      }
      for (const up of gameState.prestigeUpgradesList) {
        if (
          typeof up.name !== 'string' ||
          typeof up.cost !== 'number' ||
          typeof up.multiplierValue !== 'number' ||
          typeof up.type !== 'string' ||
          typeof up.amount !== 'number' ||
          typeof up.description !== 'string'
        ) {
          throw new Error(
            'Dados de save inválidos: upgrade de prestígio com formato incorreto ou descrição ausente.'
          );
        }
      }

      for (const tr of gameState.trophiesList) {
        if (
          typeof tr.title !== 'string' ||
          typeof tr.description !== 'string' ||
          typeof tr.earned !== 'boolean' ||
          typeof tr.icon !== 'string'
        ) {
          throw new Error(
            'Dados de save inválidos: troféu com formato incorreto.'
          );
        }
      }

      this.essence.set(gameState.essence);
      this.totalEssence.set(gameState.totalEssence);
      this.comboCount.set(0);
      this.highestCombo.set(gameState.highestCombo);
      this.totalManualClicks.set(gameState.totalManualClicks);
      this.prestigeEssence.set(gameState.prestigeEssence);
      this.prestigeLevel.set(gameState.prestigeLevel);
      this.totalPlaytime.set(gameState.totalPlaytime);

      const loadedUpgrades: Upgrade[] = gameState.upgradesList;
      const currentUpgrades: Upgrade[] = this.upgradesList();

      const mergedUpgrades = currentUpgrades.map((defaultUpgrade) => {
        const savedUpgrade = loadedUpgrades.find(
          (lu) => lu.name === defaultUpgrade.name
        );
        return savedUpgrade
          ? {
              ...defaultUpgrade,
              amount: savedUpgrade.amount,
              cost: savedUpgrade.cost,
              description:
                savedUpgrade.description || defaultUpgrade.description,
            }
          : defaultUpgrade;
      });
      this.upgradesList.set(mergedUpgrades);

      const loadedClickUpgrades: ClickUpgrade[] = gameState.clickUpgradesList;
      const currentClickUpgrades: ClickUpgrade[] = this.clickUpgradesList();

      const mergedClickUpgrades = currentClickUpgrades.map((defaultUpgrade) => {
        const savedUpgrade = loadedClickUpgrades.find(
          (lu) => lu.name === defaultUpgrade.name
        );
        return savedUpgrade
          ? {
              ...defaultUpgrade,
              amount: savedUpgrade.amount,
              cost: savedUpgrade.cost,
              description:
                savedUpgrade.description || defaultUpgrade.description,
            }
          : defaultUpgrade;
      });
      this.clickUpgradesList.set(mergedClickUpgrades);

      const loadedPrestigeUpgrades: PrestigeUpgrade[] =
        gameState.prestigeUpgradesList;
      const currentPrestigeUpgrades: PrestigeUpgrade[] =
        this.prestigeUpgradesList();

      const mergedPrestigeUpgrades = currentPrestigeUpgrades.map(
        (defaultUpgrade) => {
          const savedUpgrade = loadedPrestigeUpgrades.find(
            (lu) => lu.name === defaultUpgrade.name
          );
          return savedUpgrade
            ? {
                ...defaultUpgrade,
                amount: savedUpgrade.amount,
                description:
                  savedUpgrade.description || defaultUpgrade.description,
              }
            : defaultUpgrade;
        }
      );
      this.prestigeUpgradesList.set(mergedPrestigeUpgrades);

      const loadedTrophies: Trophy[] = gameState.trophiesList;
      const currentTrophies: Trophy[] = this.trophiesList();

      const mergedTrophies = currentTrophies.map((defaultTrophy) => {
        const savedTrophy = loadedTrophies.find(
          (lt) => lt.title === defaultTrophy.title
        );
        return savedTrophy
          ? {
              ...defaultTrophy,
              earned: savedTrophy.earned,
              description: savedTrophy.description || defaultTrophy.description,
            }
          : defaultTrophy;
      });
      this.trophiesList.set(mergedTrophies);

      this.showImportModal = false;
      this.importedSaveData = '';
      alert('Save importado com sucesso! O jogo foi atualizado.');
    } catch (e: any) {
      console.error('Erro ao importar save:', e);
      alert(
        'Erro ao importar save. Verifique se os dados são válidos ou estão corrompidos. Detalhes: ' +
          (e.message || 'Erro desconhecido.')
      );
    }
  }

  public formatPlaytime(totalSeconds: number): string {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  viewStats(): void {
    this.showStatsModal = true;
  }

  closeStatsModal(): void {
    this.showStatsModal = false;
  }

  calculatePrestigeGain(): number {
    const prestigeThreshold = 1_000_000_000_000;
    if (this.totalEssence() < prestigeThreshold) return 0;

    const gain = Math.floor(Math.cbrt(this.totalEssence() / prestigeThreshold));
    return gain;
  }

  prestigeGame(): void {
    const gain = this.calculatePrestigeGain();
    if (gain < 1) {
      alert(
        'Você ainda não acumulou Essência Total suficiente para prestigiar. Continue invocando o medo!'
      );
      return;
    }

    if (
      !confirm(
        `Você realmente deseja prestigiar? Seus upgrades e essência serão resetados, mas seus troféus e upgrades de Legado permanecerão. Você ganhará ${this.formatNumber(
          gain,
          false
        )} Essência Ancestral!`
      )
    ) {
      return;
    }

    this.prestigeEssence.update((v) => v + gain);
    this.prestigeLevel.update((v) => v + 1);

    this.essence.set(0);
    this.totalEssence.set(0);

    this.upgradesList.update((list) =>
      list.map((up) => ({ ...up, amount: 0 }))
    );
    this.clickUpgradesList.update((list) =>
      list.map((up) => ({ ...up, amount: 0 }))
    );

    this.comboCount.set(0);
    this.totalManualClicks.set(0);

    alert(
      `Legado Despertado! Você ganhou ${this.formatNumber(
        gain,
        false
      )} Essência Ancestral. Seu poder permanente aumentou!`
    );
    this.saveGame();

    this.checkTrophyProgress(
      this.totalEssence(),
      this.totalManualClicks(),
      this.highestCombo(),
      this.prestigeLevel(),
      this.prestigeEssence(),
      this.globalMultiplier()
    );
  }

  canAffordPrestigeUpgrade(index: number): boolean {
    const up = this.prestigeUpgradesList()[index];
    return this.prestigeEssence() >= up.cost;
  }

  buyPrestigeUpgrade(index: number): void {
    this.prestigeUpgradesList.update((currentPrestigeUpgrades) => {
      const upgradesCopy = [...currentPrestigeUpgrades];
      const up = upgradesCopy[index];

      if (!up || this.prestigeEssence() < up.cost) {
        alert('Essência Ancestral insuficiente!');
        return currentPrestigeUpgrades;
      }

      this.prestigeEssence.update((v) => v - up.cost);
      up.amount += 1;
      up.cost = Math.round(up.cost * 2);

      alert(
        `Upgrade de Legado '${up.name}' comprado! Seu poder permanente aumentou.`
      );
      this.saveGame();

      this.checkTrophyProgress(
        this.totalEssence(),
        this.totalManualClicks(),
        this.highestCombo(),
        this.prestigeLevel(),
        this.prestigeEssence(),
        this.globalMultiplier()
      );

      return upgradesCopy;
    });
  }

  getUpgradeCostForCurrentMode(upgrade: Upgrade): number {
    const currentMode = this.currentPurchaseMode;
    if (currentMode === 'max') {
      const maxPurchase = this.calculateMaxPurchase(
        upgrade.cost,
        this.essence()
      );
      if (maxPurchase === 0) return upgrade.cost;
      let totalCost = 0;
      let tempCost = upgrade.cost;
      for (let i = 0; i < maxPurchase; i++) {
        totalCost += tempCost;
        tempCost = Math.round(tempCost * 1.15);
      }
      return totalCost;
    } else {
      return upgrade.cost * (currentMode as number);
    }
  }

  getClickUpgradeCostForCurrentMode(upgrade: ClickUpgrade): number {
    const currentMode = this.currentPurchaseMode;
    if (currentMode === 'max') {
      const maxPurchase = this.calculateMaxPurchase(
        upgrade.cost,
        this.essence()
      );
      if (maxPurchase === 0) return upgrade.cost;
      let totalCost = 0;
      let tempCost = upgrade.cost;
      for (let i = 0; i < maxPurchase; i++) {
        totalCost += tempCost;
        tempCost = Math.round(tempCost * 1.15);
      }
      return totalCost;
    } else {
      return upgrade.cost * (currentMode as number);
    }
  }

  private calculateMaxPurchase(
    initialCost: number,
    currentEssence: number
  ): number {
    let purchaseCount = 0;
    let tempCost = initialCost;

    if (tempCost <= 0) return 0;

    while (currentEssence >= tempCost && purchaseCount < 1000000) {
      currentEssence -= tempCost;
      purchaseCount++;
      tempCost = Math.round(tempCost * 1.15);
      if (tempCost <= 0) break;
    }
    return purchaseCount;
  }

  public formatNumber(num: number, isDps: boolean = false): string {
    if (num === 0) return '0';
    if (Math.abs(num) < 1 && isDps) return num.toFixed(2);
    if (Math.abs(num) < 1000 && !isDps) return num.toFixed(0);

    if (Math.abs(num) >= 1e13) return num.toExponential(2);

    const si = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'K' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'B' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'Qa' },
      { value: 1e18, symbol: 'Qi' },
      { value: 1e21, symbol: 'Sx' },
      { value: 1e24, symbol: 'Sp' },
      { value: 1e27, symbol: 'Oc' },
      { value: 1e30, symbol: 'No' },
      { value: 1e33, symbol: 'De' },
    ];
    let i;
    for (i = si.length - 1; i > 0; i--) {
      if (Math.abs(num) >= si[i].value) {
        break;
      }
    }

    let precision = 2;
    const scaledNum = num / si[i].value;
    if (isDps) {
      if (scaledNum < 10) precision = 2;
      else if (scaledNum < 100) precision = 1;
      else precision = 0;
    } else {
      if (scaledNum < 10) precision = 2;
      else if (scaledNum < 100) precision = 1;
      else precision = 0;
    }

    return scaledNum.toFixed(precision).replace(/\.0+$/, '') + si[i].symbol;
  }

  canAffordUpgrade(
    index: number,
    multiplier: number | string,
    type: 'auto' | 'click'
  ): boolean {
    let upgradeCost: number;
    let currentUpgrade: Upgrade | ClickUpgrade | undefined;

    if (type === 'auto') {
      currentUpgrade = this.unlockedUpgrades()[index];
    } else {
      currentUpgrade = this.unlockedClickUpgrades()[index];
    }

    if (!currentUpgrade) return false;

    upgradeCost = currentUpgrade.cost;

    if (multiplier === 'max') {
      return this.calculateMaxPurchase(upgradeCost, this.essence()) > 0;
    }

    const totalCost = upgradeCost * (multiplier as number);
    return this.essence() >= totalCost;
  }

  buyUpgrade(
    index: number,
    multiplier: number | string,
    type: 'auto' | 'click'
  ): void {
    if (type === 'auto') {
      this.upgradesList.update((currentUpgrades) => {
        const upgradesCopy = [...currentUpgrades];
        const clickedUpgradeFromUnlockedList = this.unlockedUpgrades()[index];

        if (!clickedUpgradeFromUnlockedList) return currentUpgrades;

        const up = upgradesCopy.find(
          (u) => u.name === clickedUpgradeFromUnlockedList.name
        );
        if (!up) return currentUpgrades;

        let actualMultiplier = multiplier as number;
        if (multiplier === 'max') {
          actualMultiplier = this.calculateMaxPurchase(up.cost, this.essence());
          if (actualMultiplier === 0) return currentUpgrades;
        }

        let currentCostOfUpgrade = up.cost;
        let totalCostExact = 0;
        for (let i = 0; i < actualMultiplier; i++) {
          totalCostExact += currentCostOfUpgrade;
          currentCostOfUpgrade = Math.round(currentCostOfUpgrade * 1.15);
        }

        if (this.essence() < totalCostExact) return currentUpgrades;

        up.amount += actualMultiplier;
        up.cost = currentCostOfUpgrade;
        this.essence.update((v) => v - totalCostExact);
        return upgradesCopy;
      });
    } else {
      this.clickUpgradesList.update((currentClickUpgrades) => {
        const clickUpgradesCopy = [...currentClickUpgrades];
        const clickedUpgradeFromUnlockedList =
          this.unlockedClickUpgrades()[index];

        if (!clickedUpgradeFromUnlockedList) return clickUpgradesCopy;

        const up = clickUpgradesCopy.find(
          (u) => u.name === clickedUpgradeFromUnlockedList.name
        );
        if (!up) return clickUpgradesCopy;

        let actualMultiplier = multiplier as number;
        if (multiplier === 'max') {
          actualMultiplier = this.calculateMaxPurchase(up.cost, this.essence());
          if (actualMultiplier === 0) return clickUpgradesCopy;
        }

        let currentCostOfUpgrade = up.cost;
        let totalCostExact = 0;
        for (let i = 0; i < actualMultiplier; i++) {
          totalCostExact += currentCostOfUpgrade;
          currentCostOfUpgrade = Math.round(currentCostOfUpgrade * 1.15);
        }

        if (this.essence() < totalCostExact) return clickUpgradesCopy;

        up.amount += actualMultiplier;
        up.cost = currentCostOfUpgrade;
        this.essence.update((v) => v - totalCostExact);
        return clickUpgradesCopy;
      });
    }
  }

  trackByTrophyTitle(index: number, trophy: Trophy): string {
    return trophy.title;
  }

  trackByUpgradeName(index: number, upgrade: Upgrade): string {
    return upgrade.name;
  }

  trackByClickUpgradeName(index: number, upgrade: ClickUpgrade): string {
    return upgrade.name;
  }

  trackByPrestigeUpgradeName(index: number, upgrade: PrestigeUpgrade): string {
    return upgrade.name;
  }

  trophies() {
    return this.trophiesList();
  }

  viewTrophyDetails(trophy: Trophy): void {
    this.selectedTrophy = trophy;
    this.showTrophyDetailsModal = true;
  }

  closeTrophyDetailsModal(): void {
    this.showTrophyDetailsModal = false;
    this.selectedTrophy = null;
  }

  viewUpgradeDetails(
    upgrade: Upgrade | ClickUpgrade | PrestigeUpgrade,
    type: 'auto' | 'click' | 'prestige'
  ): void {
    this.selectedUpgrade = upgrade;
    this.selectedUpgradeType = type;
    this.showUpgradeDetailsModal = true;
  }

  closeUpgradeDetailsModal(): void {
    this.showUpgradeDetailsModal = false;
    this.selectedUpgrade = null;
    this.selectedUpgradeType = null;
  }

  private checkTrophyProgress(
    currentTotalEssence: number,
    currentTotalManualClicks: number,
    currentHighestCombo: number,
    currentPrestigeLevel: number,
    currentPrestigeEssence: number,
    currentGlobalMultiplier: number
  ) {
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
          case 'Conhecimento Proibido':
            if (currentTotalEssence >= 100000) this.unlockTrophy(trophy.title);
            break;
          case 'Marca do Selo':
            if (currentTotalEssence >= 500000) this.unlockTrophy(trophy.title);
            break;
          case 'Fonte da Agonia':
            if (currentTotalEssence >= 2500000) this.unlockTrophy(trophy.title);
            break;
          case 'Rito Completo':
            if (currentTotalEssence >= 10000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Harmonia Dissonante':
            if (currentTotalEssence >= 50000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Profundezas Insanas':
            if (currentTotalEssence >= 250000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Guardião do Limiar':
            if (currentTotalEssence >= 1000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Véu Rasgado':
            if (currentTotalEssence >= 5000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Cólera Cósmica':
            if (currentTotalEssence >= 25000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Limiar Dimensional':
            if (currentTotalEssence >= 100000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'O Sonho Interrompido':
            if (currentTotalEssence >= 500000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Visão do Caos':
            if (currentTotalEssence >= 2000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'A Voz do Horror':
            if (currentTotalEssence >= 8000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'O Despertar Final':
            if (currentTotalEssence >= 30000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Mestre do Vazio':
            if (currentTotalEssence >= 100000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Conquistador da Realidade':
            if (currentTotalEssence >= 500000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'A Ascensão':
            if (currentTotalEssence >= 1000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'União Cósmica':
            if (currentTotalEssence >= 5000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Além dos Sonhos':
            if (currentTotalEssence >= 25000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Deus Exterior':
            if (currentTotalEssence >= 100000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'O Vácuo Insondável':
            if (currentTotalEssence >= 500000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Criador de Universos':
            if (currentTotalEssence >= 1000000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'A Essência Primordial':
            if (currentTotalEssence >= 10000000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Além de Toda Compreensão':
            if (currentTotalEssence >= 100000000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'O Absoluto':
            if (currentTotalEssence >= 1000000000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Infinito e Além':
            if (currentTotalEssence >= 10000000000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'A Última Transcedência':
            if (currentTotalEssence >= 100000000000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Rei do Multiverso':
            if (currentTotalEssence >= 1000000000000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'A Conclusão Inevitável':
            if (currentTotalEssence >= 10000000000000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Além da Realidade':
            if (currentTotalEssence >= 100000000000000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'O Vazio Profundo':
            if (currentTotalEssence >= 1000000000000000000000000000)
              this.unlockTrophy(trophy.title);
            break;

          case 'Primeiro Sussurro':
            if (currentTotalManualClicks >= 1) this.unlockTrophy(trophy.title);
            break;
          case 'Toque Persistente':
            if (currentTotalManualClicks >= 100)
              this.unlockTrophy(trophy.title);
            break;
          case 'Dedo Veloz':
            if (currentTotalManualClicks >= 1000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Ritmo Implacável':
            if (currentTotalManualClicks >= 10000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Pulsar da Essência':
            if (currentTotalManualClicks >= 100000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Canalizador Incansável':
            if (currentTotalManualClicks >= 1000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Batedor Cósmico':
            if (currentTotalManualClicks >= 10000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Mão da Loucura':
            if (currentTotalManualClicks >= 100000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Pulsar do Vazio':
            if (currentTotalManualClicks >= 1000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Dedo Dimensional':
            if (currentTotalManualClicks >= 10000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Mestre do Ritmo Cósmico':
            if (currentTotalManualClicks >= 100000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Voz da Criação':
            if (currentTotalManualClicks >= 1000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'O Último Toque':
            if (currentTotalManualClicks >= 10000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Conexão Absoluta':
            if (currentTotalManualClicks >= 100000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'O Toque do Caos':
            if (currentTotalManualClicks >= 1000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'A Dança dos Universos':
            if (currentTotalManualClicks >= 10000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Vontade Inominável':
            if (currentTotalManualClicks >= 100000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'A Punho do Multiverso':
            if (currentTotalManualClicks >= 1000000000000000000)
              this.unlockTrophy(trophy.title);
            break;

          case 'Combo Iniciante (2x)':
            if (currentHighestCombo >= 2) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Místico (5x)':
            if (currentHighestCombo >= 5) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Febril (10x)':
            if (currentHighestCombo >= 10) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Intenso (15x)':
            if (currentHighestCombo >= 15) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Transcendental (20x)':
            if (currentHighestCombo >= 20) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Perfeito (30x)':
            if (currentHighestCombo >= 30) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Infinito (50x)':
            if (currentHighestCombo >= 50) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Além (75x)':
            if (currentHighestCombo >= 75) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Cósmico (100x)':
            if (currentHighestCombo >= 100) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Celestial (150x)':
            if (currentHighestCombo >= 150) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Divino (200x)':
            if (currentHighestCombo >= 200) this.unlockTrophy(trophy.title);
            break;
          case 'O Último Combo (300x)':
            if (currentHighestCombo >= 300) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Lenda (500x)':
            if (currentHighestCombo >= 500) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Mítico (1000x)':
            if (currentHighestCombo >= 1000) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Abissal (2000x)':
            if (currentHighestCombo >= 2000) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Inconcebível (5000x)':
            if (currentHighestCombo >= 5000) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Primordial (10000x)':
            if (currentHighestCombo >= 10000) this.unlockTrophy(trophy.title);
            break;
          case 'Combo do Vazio (25000x)':
            if (currentHighestCombo >= 25000) this.unlockTrophy(trophy.title);
            break;
          case 'Combo da Anarquia (50000x)':
            if (currentHighestCombo >= 50000) this.unlockTrophy(trophy.title);
            break;
          case 'O Ritmo Final (100000x)':
            if (currentHighestCombo >= 100000) this.unlockTrophy(trophy.title);
            break;

          case 'Primeira Manifestação':
            if (this.upgradesList().some((up) => up.amount > 0))
              this.unlockTrophy(trophy.title);
            break;
          case 'Despertar de Símbolos':
            if (this.upgradesList().filter((up) => up.amount > 0).length >= 5)
              this.unlockTrophy(trophy.title);
            break;
          case 'Mestre dos Rituais':
            const tier2Auto = [
              'Ritual Profano',
              'Tomos Proibidos',
              'Selo Espectral',
              'Lágrimas da Medusa',
              'Fragmento Estelar',
            ];
            if (
              tier2Auto.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >
                  0
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Invocador de Horrores':
            const tier3Auto = [
              'Coro Macabro',
              'Abismo da Loucura',
              'Sentinela Dimensional',
              'Véu Interplanar',
              'Tempestade Cósmica',
            ];
            if (
              tier3Auto.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >
                  0
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Forjador de Portais':
            const tier4Auto = [
              'Portal para o Além',
              'O Sonhador em R´lyeh',
              'Olho de Azathoth',
              'Toque de Nyarlathotep',
              'Despertar da Antiga Ameaça',
            ];
            if (
              tier4Auto.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >
                  0
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Conjurador Primordial':
            const tier5Auto = [
              'Mente Colossal',
              'Espiral de Desespero',
              'Chama Eterna',
              'O Vazio Pulsante',
              'Realidade Fragmentada',
            ];
            if (
              tier5Auto.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >
                  0
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Conjurador Além':
            const tier6Auto = [
              'Eco do Caos Primordial',
              'Tecelão de Universos',
              'Vontade Cósmica Indomável',
              'O Ponto de Singularidade',
              'A Não-Existência',
            ];
            if (
              tier6Auto.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >
                  0
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Arsenal do Terror':
            if (this.upgradesList().filter((up) => up.amount > 0).length >= 10)
              this.unlockTrophy(trophy.title);
            break;
          case 'Força Oculta':
            if (this.upgradesList().filter((up) => up.amount > 0).length >= 15)
              this.unlockTrophy(trophy.title);
            break;
          case 'Legado do Medo':
            const allAutoUpgradesT1 = [
              'Vela Sussurrante',
              'Lamento dos Condenados',
              'Pacto Sanguíneo',
              'Eco dos Pesadelos',
              'Ídolo Quebrado',
            ];
            if (
              allAutoUpgradesT1.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >
                  0
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Domínio das Sombras':
            const tier1Auto100 = [
              'Vela Sussurrante',
              'Lamento dos Condenados',
              'Pacto Sanguíneo',
              'Eco dos Pesadelos',
              'Ídolo Quebrado',
            ];
            if (
              tier1Auto100.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >=
                  100
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Poder de Azathoth':
            const tier2Auto100 = [
              'Ritual Profano',
              'Tomos Proibidos',
              'Selo Espectral',
              'Lágrimas da Medusa',
              'Fragmento Estelar',
            ];
            if (
              tier2Auto100.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >=
                  100
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Essência da Existência':
            const tier3Auto100 = [
              'Coro Macabro',
              'Abismo da Loucura',
              'Sentinela Dimensional',
              'Véu Interplanar',
              'Tempestade Cósmica',
            ];
            if (
              tier3Auto100.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >=
                  100
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Senhor dos Portais':
            const tier4Auto100 = [
              'Portal para o Além',
              'O Sonhador em R´lyeh',
              'Olho de Azathoth',
              'Toque de Nyarlathotep',
              'Despertar da Antiga Ameaça',
            ];
            if (
              tier4Auto100.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >=
                  100
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Titã da Realidade':
            const tier5Auto100 = [
              'Mente Colossal',
              'Espiral de Desespero',
              'Chama Eterna',
              'O Vazio Pulsante',
              'Realidade Fragmentada',
            ];
            if (
              tier5Auto100.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >=
                  100
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Arquimago do Vazio':
            const tier6Auto100 = [
              'Eco do Caos Primordial',
              'Tecelão de Universos',
              'Vontade Cósmica Indomável',
              'O Ponto de Singularidade',
              'A Não-Existência',
            ];
            if (
              tier6Auto100.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >=
                  100
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Monarca das Trevas':
            if (this.upgradesList().every((up) => up.amount >= 100))
              this.unlockTrophy(trophy.title);
            break;
          case 'Poder Infinito':
            if (this.upgradesList().every((up) => up.amount >= 500))
              this.unlockTrophy(trophy.title);
            break;
          case 'Realidade Dominada':
            if (this.upgradesList().every((up) => up.amount >= 1000))
              this.unlockTrophy(trophy.title);
            break;
          case 'Conjurador Final':
            if (this.upgradesList().every((up) => up.amount >= 2000))
              this.unlockTrophy(trophy.title);
            break;
          case 'Senhor do Medo':
            if (this.upgradesList().every((up) => up.amount >= 5000))
              this.unlockTrophy(trophy.title);
            break;
          case 'Criador do Terror':
            if (this.upgradesList().every((up) => up.amount >= 10000))
              this.unlockTrophy(trophy.title);
            break;

          case 'Primeira Canalização':
            if (this.clickUpgradesList().some((up) => up.amount > 0))
              this.unlockTrophy(trophy.title);
            break;
          case 'Maestria da Canalização':
            if (
              this.clickUpgradesList().filter((up) => up.amount > 0).length >= 3
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Ritmo Absoluto':
            const clickTier2 = [
              'Pulso Sombrio',
              'Memória Amaldiçoada',
              'Ecos do Vazio',
              'Fúria Canalizada',
              'Devaneio Perpétuo',
            ];
            if (
              clickTier2.every(
                (name) =>
                  this.clickUpgradesList().find((up) => up.name === name)
                    ?.amount! > 0
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Canto das Trevas':
            const clickTier3 = [
              'Convergência Dimensional',
              'Vortex de Essência',
              'Canto Cósmico',
              'Pulsar da Realidade',
              'Fragmento do Caos',
            ];
            if (
              clickTier3.every(
                (name) =>
                  this.clickUpgradesList().find((up) => up.name === name)
                    ?.amount! > 0
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Canalizador Supremo':
            const clickTier4 = [
              'Mão Eterna',
              'Eco do Além',
              'Batida Estelar',
              'Ritmo Cósmico',
              'Voz do Vazio',
            ];
            if (
              clickTier4.every(
                (name) =>
                  this.clickUpgradesList().find((up) => up.name === name)
                    ?.amount! > 0
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Conexão Eterna':
            if (
              this.clickUpgradesList().filter((up) => up.amount > 0).length >= 5
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Mente Sombria':
            if (
              this.clickUpgradesList().filter((up) => up.amount > 0).length >=
              10
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Devorador de Pensamentos':
            const clickTier1_100 = [
              'Toque Sutil',
              'Foco Macabro',
              'Ritmo Insano',
              'Canto Hipnótico',
              'Conexão Psíquica',
            ];
            if (
              clickTier1_100.every(
                (name) =>
                  this.clickUpgradesList().find((up) => up.name === name)
                    ?.amount! >= 100
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Voz do Vácuo':
            const clickTier2_100 = [
              'Pulso Sombrio',
              'Memória Amaldiçoada',
              'Ecos do Vazio',
              'Fúria Canalizada',
              'Devaneio Perpétuo',
            ];
            if (
              clickTier2_100.every(
                (name) =>
                  this.clickUpgradesList().find((up) => up.name === name)
                    ?.amount! >= 100
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Pulsação Primordial':
            const clickTier3_100 = [
              'Convergência Dimensional',
              'Vortex de Essência',
              'Canto Cósmico',
              'Pulsar da Realidade',
              'Fragmento do Caos',
            ];
            if (
              clickTier3_100.every(
                (name) =>
                  this.clickUpgradesList().find((up) => up.name === name)
                    ?.amount! >= 100
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Mãos da Criação':
            const clickTier4_100 = [
              'Mão Eterna',
              'Eco do Além',
              'Batida Estelar',
              'Ritmo Cósmico',
              'Voz do Vazio',
            ];
            if (
              clickTier4_100.every(
                (name) =>
                  this.clickUpgradesList().find((up) => up.name === name)
                    ?.amount! >= 100
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Toque Final':
            const clickTier5 = [
              'Pulso da Não-Existência',
              'Consciência Amaldiçoada',
              'Ecos do Além-Concebível',
              'Sussurros do Crepúsculo',
            ];
            if (
              clickTier5.every(
                (name) =>
                  this.clickUpgradesList().find((up) => up.name === name)
                    ?.amount! >= 100
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Ritmo da Existência':
            if (this.clickUpgradesList().every((up) => up.amount >= 500))
              this.unlockTrophy(trophy.title);
            break;
          case 'Pulso do Multiverso':
            if (this.clickUpgradesList().every((up) => up.amount >= 1000))
              this.unlockTrophy(trophy.title);
            break;
          case 'Toque Divino':
            if (this.clickUpgradesList().every((up) => up.amount >= 2000))
              this.unlockTrophy(trophy.title);
            break;
          case 'Mão Onipotente':
            if (this.clickUpgradesList().every((up) => up.amount >= 5000))
              this.unlockTrophy(trophy.title);
            break;
          case 'Sinfonia do Horror':
            if (this.clickUpgradesList().every((up) => up.amount >= 10000))
              this.unlockTrophy(trophy.title);
            break;

          case 'Equilíbrio Sombrio':
            const allAutoPresent = this.upgradesList().every(
              (up) => up.amount > 0
            );
            const allClickPresent = this.clickUpgradesList().every(
              (up) => up.amount > 0
            );
            if (allAutoPresent && allClickPresent)
              this.unlockTrophy(trophy.title);
            break;
          case 'Poder Onisciente':
            const allAuto100Units = this.upgradesList().every(
              (up) => up.amount >= 100
            );
            const allClick100Units = this.clickUpgradesList().every(
              (up) => up.amount >= 100
            );
            if (allAuto100Units && allClick100Units)
              this.unlockTrophy(trophy.title);
            break;
          case 'Verdade Final':
            const allOtherTrophiesEarned = this.trophiesList()
              .filter((t) => t.title !== 'Verdade Final')
              .every((t) => t.earned);
            if (allOtherTrophiesEarned) this.unlockTrophy(trophy.title);
            break;
          case 'Equilíbrio Absoluto':
            const allAuto500Units = this.upgradesList().every(
              (up) => up.amount >= 500
            );
            const allClick500Units = this.clickUpgradesList().every(
              (up) => up.amount >= 500
            );
            if (allAuto500Units && allClick500Units)
              this.unlockTrophy(trophy.title);
            break;
          case 'Ascensão Gêmea':
            const allAuto1000Units = this.upgradesList().every(
              (up) => up.amount >= 1000
            );
            const allClick1000Units = this.clickUpgradesList().every(
              (up) => up.amount >= 1000
            );
            if (allAuto1000Units && allClick1000Units)
              this.unlockTrophy(trophy.title);
            break;
          case 'Sinfonia do Vazio':
            const allAuto2000Units = this.upgradesList().every(
              (up) => up.amount >= 2000
            );
            const allClick2000Units = this.clickUpgradesList().every(
              (up) => up.amount >= 2000
            );
            if (allAuto2000Units && allClick2000Units)
              this.unlockTrophy(trophy.title);
            break;
          case 'Monarca da Existência':
            const allAuto5000Units = this.upgradesList().every(
              (up) => up.amount >= 5000
            );
            const allClick5000Units = this.clickUpgradesList().every(
              (up) => up.amount >= 5000
            );
            if (allAuto5000Units && allClick5000Units)
              this.unlockTrophy(trophy.title);
            break;
          case 'Poder Dual':
            const allAuto10000Units = this.upgradesList().every(
              (up) => up.amount >= 10000
            );
            const allClick10000Units = this.clickUpgradesList().every(
              (up) => up.amount >= 10000
            );
            if (allAuto10000Units && allClick10000Units)
              this.unlockTrophy(trophy.title);
            break;

          case 'Primeiro Legado':
            if (currentPrestigeLevel >= 1) this.unlockTrophy(trophy.title);
            break;
          case 'Legado Consolidado':
            if (currentPrestigeLevel >= 5) this.unlockTrophy(trophy.title);
            break;
          case 'Mestre do Legado':
            if (currentPrestigeLevel >= 10) this.unlockTrophy(trophy.title);
            break;
          case 'Herdeiro do Vazio':
            if (currentPrestigeLevel >= 25) this.unlockTrophy(trophy.title);
            break;
          case 'Lorde da Transcedência':
            if (currentPrestigeLevel >= 50) this.unlockTrophy(trophy.title);
            break;
          case 'Poder Ancestral':
            if (this.prestigeUpgradesList().some((up) => up.amount > 0))
              this.unlockTrophy(trophy.title);
            break;
          case 'Força Eterna':
            if (
              this.prestigeUpgradesList().filter((up) => up.amount > 0)
                .length >= 5
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Multiplicador Divino':
            if (currentGlobalMultiplier >= 100) this.unlockTrophy(trophy.title);
            break;
          case 'Ascensão do Vazio':
            if (currentGlobalMultiplier >= 1000)
              this.unlockTrophy(trophy.title);
            break;
          case 'A Essência Absoluta':
            if (currentGlobalMultiplier >= 1000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Legado Completo':
            if (this.prestigeUpgradesList().every((up) => up.amount > 0))
              this.unlockTrophy(trophy.title);
            break;
          case 'O Verdadeiro Absoluto':
            if (currentGlobalMultiplier >= 1000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Rei do Legado':
            if (currentPrestigeLevel >= 100) this.unlockTrophy(trophy.title);
            break;
          case 'Fenda na Realidade':
            if (currentPrestigeLevel >= 250) this.unlockTrophy(trophy.title);
            break;
          case 'O Ciclo Infinito':
            if (currentPrestigeLevel >= 500) this.unlockTrophy(trophy.title);
            break;
          case 'Avatar do Vazio':
            if (currentPrestigeLevel >= 1000) this.unlockTrophy(trophy.title);
            break;
          case 'O Vazio Imortal':
            if (currentPrestigeLevel >= 2500) this.unlockTrophy(trophy.title);
            break;
          case 'Fonte da Essência Ancestral':
            if (
              this.prestigeUpgradesList().filter((up) => up.amount > 0)
                .length >= 100
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Sabedoria Eterna':
            if (
              this.prestigeUpgradesList().filter((up) => up.amount > 0)
                .length >= 500
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'O Conhecimento Proibido':
            if (
              this.prestigeUpgradesList().filter((up) => up.amount > 0)
                .length >= 1000
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Legado do Vazio':
            if (this.prestigeUpgradesList().every((up) => up.amount >= 2500))
              this.unlockTrophy(trophy.title);
            break;
          case 'Trono do Conhecimento':
            if (this.prestigeUpgradesList().every((up) => up.amount >= 5000))
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

        const newToast: Toast = {
          id: this.nextToastId++,
          message: `🏆 ${trophy.title}`,
          icon: trophy.icon,
        };
        this.activeToasts.update((toasts) => [...toasts, newToast]);

        this.activeToasts.update((toasts) => {
          let currentBottom = 20;
          const toastHeight = 70;
          return toasts.map((t, index) => {
            t.bottom = currentBottom;
            currentBottom += toastHeight;
            return t;
          });
        });

        newToast.timeoutId = setTimeout(() => {
          this.activeToasts.update((toasts) =>
            toasts.filter((t) => t.id !== newToast.id)
          );
        }, 10000);

        const audio = new Audio(
          'https://assets.mixkit.co/sfx/preview/mixkit-fairy-win-sound-2011.mp3'
        );
        audio.play();
        return updatedTrophies;
      }
      return currentTrophies;
    });
  }

  trackByToastId(index: number, toast: Toast): number {
    return toast.id;
  }
}
