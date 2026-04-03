import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  isDevMode,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClickUpgrade } from '../interfaces/ClickUpgrade';
import { PrestigeUpgrade } from '../interfaces/PrestigeUpgrade';
import { Toast } from '../interfaces/Toast';
import { Trophy } from '../interfaces/Trophy';
import { Upgrade } from '../interfaces/Upgrade';
import {
  TrophyCheckState,
  TrophyService,
} from '../services/trophy.service';
import { UpgradeService } from '../services/upgrade.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  selectedUpgrade: Upgrade | ClickUpgrade | PrestigeUpgrade | null = null;
  selectedUpgradeType: 'auto' | 'click' | 'prestige' | null = null;

  showStatsModal: boolean = false;

  showAlertModal: boolean = false;
  alertModalMessage: string = '';

  showConfirmModal: boolean = false;
  confirmModalMessage: string = '';
  private confirmCallback: (() => void) | null = null;

  prestigeEssence = signal(0);
  prestigeLevel = signal(0);

  readonly baseClickValue = signal(1);
  comboCount = signal(0);
  highestCombo = signal(0);
  totalManualClicks = signal(0);
  totalPlaytime = signal(0);
  private comboResetTimeout: any;

  activeToasts = signal<Toast[]>([]);
  private nextToastId = 0;
  private tickCounter = 0;
  clickFloaters = signal<{ id: number; value: string; x: number; y: number }[]>(
    []
  );
  private nextFloaterId = 0;

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
          1 + up.multiplierValue,
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
    const totalClicksMade = this.totalManualClicks();
    const clickList = this.clickUpgradesList();

    return clickList.filter((up) => {
      if (up.amount > 0) return true;
      if (!up.unlockClicks && !up.unlockAfter) return true;
      const clicksOk = up.unlockClicks
        ? totalClicksMade >= up.unlockClicks
        : false;
      const prevOk = up.unlockAfter
        ? (clickList.find((u) => u.name === up.unlockAfter)?.amount ?? 0) > 0
        : false;
      return clicksOk || prevOk;
    });
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

  private logError(...args: any[]): void {
    if (isDevMode()) {
      console.error(...args);
    }
  }

  private logWarn(...args: any[]): void {
    if (isDevMode()) {
      console.warn(...args);
    }
  }

  showAlert(message: string): void {
    this.alertModalMessage = message;
    this.showAlertModal = true;
  }

  closeAlert(): void {
    this.showAlertModal = false;
    this.alertModalMessage = '';
  }

  showConfirm(message: string, callback: () => void): void {
    this.confirmModalMessage = message;
    this.confirmCallback = callback;
    this.showConfirmModal = true;
  }

  confirmAction(): void {
    this.showConfirmModal = false;
    if (this.confirmCallback) {
      this.confirmCallback();
      this.confirmCallback = null;
    }
  }

  cancelConfirm(): void {
    this.showConfirmModal = false;
    this.confirmCallback = null;
  }

  resetGame(): void {
    this.showConfirm(
      'Tem certeza que deseja resetar TODO o jogo? Todo o progresso será perdido permanentemente!',
      () => {
        localStorage.removeItem('fearIdleGame');
        window.location.reload();
      }
    );
  }

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

  private encodeToBase64(str: string): string {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(str);
    let binary = '';
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return btoa(binary);
  }

  private decodeFromBase64(base64: string): string {
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }

  private computeChecksum(data: string): string {
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
      const char = data.charCodeAt(i);
      hash = ((hash << 5) - hash + char) | 0;
    }
    return (hash >>> 0).toString(36);
  }

  private serializeWithChecksum(jsonStr: string): string {
    const checksum = this.computeChecksum(jsonStr);
    const payload = JSON.stringify({ d: jsonStr, c: checksum });
    return this.encodeToBase64(payload);
  }

  private deserializeWithChecksum(encoded: string): string {
    const decoded = this.decodeFromBase64(encoded);

    try {
      const wrapper = JSON.parse(decoded);
      if (wrapper.d && wrapper.c) {
        const expectedChecksum = this.computeChecksum(wrapper.d);
        if (wrapper.c !== expectedChecksum) {
          throw new Error('Save corrompido: checksum inválido.');
        }
        return wrapper.d;
      }
    } catch (e: any) {
      if (e.message?.includes('checksum')) throw e;
    }

    return decoded;
  }

  private startGameLoop(): void {
    this.gameInterval = setInterval(() => {
      const gain = this.essencePerSecond() / 10;
      if (gain > 0) {
        this.essence.update((v) => v + gain);
        this.totalEssence.update((v) => v + gain);
      }

      this.tickCounter++;

      if (this.tickCounter % 10 === 0) {
        this.totalPlaytime.update((v) => v + 1);
        this.checkTrophyProgress(
          this.totalEssence(),
          this.totalManualClicks(),
          this.highestCombo(),
          this.prestigeLevel(),
          this.prestigeEssence(),
          this.globalMultiplier()
        );
      }

      if (this.tickCounter % 3000 === 0) {
        this.saveGame();
      }
    }, 100);
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
    }, 3000);

    const gain =
      this.clickValue() * this.comboMultiplier() * this.globalMultiplier();
    this.essence.update((v) => v + gain);
    this.totalEssence.update((v) => v + gain);

    this.spawnClickFloater(gain);

    this.checkTrophyProgress(
      this.totalEssence(),
      this.totalManualClicks(),
      this.highestCombo(),
      this.prestigeLevel(),
      this.prestigeEssence(),
      this.globalMultiplier()
    );
  }

  private spawnClickFloater(value: number): void {
    if (this.clickFloaters().length >= 15) return;
    const id = this.nextFloaterId++;
    const x = 40 + Math.random() * 20;
    const y = 10 + Math.random() * 15;
    const floater = {
      id,
      value: '+' + this.formatNumber(value, true),
      x,
      y,
    };
    this.clickFloaters.update((f) => [...f, floater]);
    setTimeout(() => {
      this.clickFloaters.update((f) => f.filter((fl) => fl.id !== id));
    }, 1200);
  }

  private serializeGameState(): string {
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
    return this.serializeWithChecksum(JSON.stringify(gameState));
  }

  private applyGameState(gameState: any): void {
    this.essence.set(gameState.essence || 0);
    this.totalEssence.set(gameState.totalEssence || 0);
    this.comboCount.set(0);
    this.highestCombo.set(gameState.highestCombo ?? 0);
    this.totalManualClicks.set(gameState.totalManualClicks ?? 0);
    this.prestigeEssence.set(gameState.prestigeEssence ?? 0);
    this.prestigeLevel.set(gameState.prestigeLevel ?? 0);
    this.totalPlaytime.set(gameState.totalPlaytime ?? 0);

    this.upgradesList.set(
      this.mergeList(this.upgradesList(), gameState.upgradesList || [], 'name', true)
    );
    this.clickUpgradesList.set(
      this.mergeList(this.clickUpgradesList(), gameState.clickUpgradesList || [], 'name', true)
    );
    this.prestigeUpgradesList.set(
      this.mergeList(this.prestigeUpgradesList(), gameState.prestigeUpgradesList || [], 'name', true)
    );
    this.trophiesList.set(
      this.mergeList(this.trophiesList(), gameState.trophiesList || [], 'title', false)
    );
  }

  private mergeList<T extends Record<string, any>>(
    defaults: T[],
    saved: T[],
    key: string,
    includeCost: boolean
  ): T[] {
    return defaults.map((def) => {
      const s = saved.find((item) => item[key] === def[key]);
      if (!s) return def;
      const merged: any = { ...def, amount: s['amount'] ?? def['amount'] };
      if (includeCost && s['cost'] !== undefined) merged['cost'] = s['cost'];
      if (s['earned'] !== undefined) merged['earned'] = s['earned'];
      if (s['description']) merged['description'] = s['description'];
      return merged as T;
    });
  }

  private saveGame(): void {
    try {
      localStorage.setItem('fearIdleGame', this.serializeGameState());
    } catch (e) {
      this.logError('Erro ao salvar o jogo no localStorage:', e);
    }
  }

  saveGameManually(): void {
    this.saveGame();
    this.showAlert('Jogo salvo manualmente!');
  }

  exportSave(): void {
    try {
      const saveDataString = this.serializeGameState();

      this.exportedSaveText = saveDataString;
      this.showExportTextModal = true;

      navigator.clipboard
        .writeText(saveDataString)
        .then(() => {})
        .catch((err) => {
          this.logWarn(
            'Falha ao copiar automaticamente para a área de transferência:',
            err
          );
        });
    } catch (e: any) {
      this.logError('Erro ao gerar save:', e);
      this.showAlert(
        'Erro ao gerar save. Tente novamente ou recarregue a página.'
      );
    }
  }

  copyExportedSaveText(): void {
    navigator.clipboard
      .writeText(this.exportedSaveText)
      .then(() => {
        this.showAlert('Código do save copiado!');
      })
      .catch((err) => {
        this.logError('Erro ao copiar o texto do save:', err);
        this.showAlert(
          'Não foi possível copiar automaticamente. Selecione o texto e copie manualmente.'
        );
      });
  }

  loadGame(): void {
    try {
      const savedState = localStorage.getItem('fearIdleGame');
      if (savedState) {
        let decodedData: string;
        try {
          decodedData = this.deserializeWithChecksum(savedState);
        } catch (e: any) {
          this.logError('Erro de decodificação no loadGame (Base64/UTF-8):', e);
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

        this.applyGameState(gameState);
      }
    } catch (e: any) {
      this.logError('Erro ao carregar o jogo do localStorage:', e);
      const corruptedSave = localStorage.getItem('fearIdleGame');
      if (corruptedSave) {
        localStorage.setItem('fearIdleGame_backup', corruptedSave);
      }
      localStorage.removeItem('fearIdleGame');
      this.showAlert(
        'Erro ao carregar o save. Um backup foi salvo como "fearIdleGame_backup". Use "Novo Jogo" para recomeçar.'
      );
    }
  }

  private isSafeNumber(value: unknown): value is number {
    return typeof value === 'number' && isFinite(value) && value >= 0;
  }

  importSave(): void {
    if (!this.importedSaveData) {
      this.showAlert('Por favor, cole os dados do save no campo de texto.');
      return;
    }

    try {
      const decodedData = this.deserializeWithChecksum(this.importedSaveData);
      const gameState = JSON.parse(decodedData);

      if (
        !this.isSafeNumber(gameState.essence) ||
        !this.isSafeNumber(gameState.totalEssence) ||
        !Array.isArray(gameState.upgradesList) ||
        !Array.isArray(gameState.trophiesList)
      ) {
        throw new Error(
          'Dados de save inválidos: formato principal incorreto.'
        );
      }

      if (
        !this.isSafeNumber(gameState.highestCombo) ||
        !this.isSafeNumber(gameState.totalManualClicks) ||
        !this.isSafeNumber(gameState.prestigeEssence) ||
        !this.isSafeNumber(gameState.prestigeLevel) ||
        !Array.isArray(gameState.clickUpgradesList) ||
        !Array.isArray(gameState.prestigeUpgradesList) ||
        !this.isSafeNumber(gameState.totalPlaytime)
      ) {
        throw new Error(
          'Dados de save inválidos: propriedades de clique/combo/prestígio/tempo de jogo ausentes ou corrompidas.'
        );
      }

      for (const up of gameState.upgradesList) {
        if (
          typeof up.name !== 'string' ||
          !this.isSafeNumber(up.cost) ||
          !this.isSafeNumber(up.dps) ||
          !this.isSafeNumber(up.amount) ||
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
          !this.isSafeNumber(up.cost) ||
          !this.isSafeNumber(up.clickMultiplier) ||
          !this.isSafeNumber(up.amount) ||
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
          !this.isSafeNumber(up.cost) ||
          !this.isSafeNumber(up.multiplierValue) ||
          typeof up.type !== 'string' ||
          !this.isSafeNumber(up.amount) ||
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

      this.applyGameState(gameState);

      this.showImportModal = false;
      this.importedSaveData = '';
      this.showAlert('Save importado com sucesso!');
    } catch (e: any) {
      this.logError('Erro ao importar save:', e);
      this.showAlert(
        'Erro ao importar save. Verifique se os dados são válidos.'
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
    const prestigeThreshold = 10_000_000;
    if (this.totalEssence() < prestigeThreshold) return 0;

    const gain = Math.floor(
      Math.cbrt(this.totalEssence() / prestigeThreshold)
    );
    return gain;
  }

  prestigeGame(): void {
    const gain = this.calculatePrestigeGain();
    if (gain < 1) {
      this.showAlert(
        'Você ainda não acumulou Essência suficiente para prestigiar.'
      );
      return;
    }

    this.showConfirm(
      `Prestigiar? Upgrades e essência serão resetados. Você ganhará ${this.formatNumber(
        gain,
        false
      )} Essência Ancestral.`,
      () => {
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

        this.showAlert(
          `Legado Despertado! +${this.formatNumber(
            gain,
            false
          )} Essência Ancestral.`
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
    );
  }

  canAffordPrestigeUpgrade(upgradeName: string): boolean {
    const up = this.prestigeUpgradesList().find((u) => u.name === upgradeName);
    if (!up) return false;
    return this.prestigeEssence() >= up.cost;
  }

  buyPrestigeUpgrade(upgradeName: string): void {
    this.prestigeUpgradesList.update((currentPrestigeUpgrades) => {
      const idx = currentPrestigeUpgrades.findIndex(
        (u) => u.name === upgradeName
      );
      if (idx === -1) return currentPrestigeUpgrades;

      const up = currentPrestigeUpgrades[idx];

      if (this.prestigeEssence() < up.cost) {
        return currentPrestigeUpgrades;
      }

      this.prestigeEssence.update((v) => v - up.cost);

      const upgradesCopy = [...currentPrestigeUpgrades];
      upgradesCopy[idx] = {
        ...up,
        amount: up.amount + 1,
        cost: Math.round(up.cost * 2),
      };

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
      let totalCost = 0;
      let tempCost = upgrade.cost;
      for (let i = 0; i < (currentMode as number); i++) {
        totalCost += tempCost;
        tempCost = Math.round(tempCost * 1.15);
      }
      return totalCost;
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
      let totalCost = 0;
      let tempCost = upgrade.cost;
      for (let i = 0; i < (currentMode as number); i++) {
        totalCost += tempCost;
        tempCost = Math.round(tempCost * 1.15);
      }
      return totalCost;
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

    if (Math.abs(num) >= 1e36) return num.toExponential(2);
    let i;
    for (i = si.length - 1; i > 0; i--) {
      if (Math.abs(num) >= si[i].value) {
        break;
      }
    }

    const scaledNum = num / si[i].value;
    let precision: number;
    if (scaledNum < 10) precision = 2;
    else if (scaledNum < 100) precision = 1;
    else precision = 0;

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

    let totalCost = 0;
    let tempCost = upgradeCost;
    for (let i = 0; i < (multiplier as number); i++) {
      totalCost += tempCost;
      tempCost = Math.round(tempCost * 1.15);
    }
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
    const conditions = this.trophyService.getTrophyConditions();
    const state: TrophyCheckState = {
      totalEssence: currentTotalEssence,
      totalManualClicks: currentTotalManualClicks,
      highestCombo: currentHighestCombo,
      prestigeLevel: currentPrestigeLevel,
      globalMultiplier: currentGlobalMultiplier,
      upgrades: this.upgradesList().map((u) => ({
        name: u.name,
        amount: u.amount,
      })),
      clickUpgrades: this.clickUpgradesList().map((u) => ({
        name: u.name,
        amount: u.amount,
      })),
      prestigeUpgrades: this.prestigeUpgradesList().map((u) => ({
        name: u.name,
        amount: u.amount,
        type: u.type,
      })),
      allTrophies: this.trophiesList().map((t) => ({
        title: t.title,
        earned: t.earned,
      })),
    };

    this.trophiesList().forEach((trophy) => {
      if (!trophy.earned) {
        const check = conditions.get(trophy.title);
        if (check && check(state)) {
          this.unlockTrophy(trophy.title);
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

        newToast.timeoutId = setTimeout(() => {
          this.activeToasts.update((toasts) =>
            toasts.filter((t) => t.id !== newToast.id)
          );
        }, 10000);

        const audio = new Audio(
          'https://assets.mixkit.co/sfx/preview/mixkit-fairy-win-sound-2011.mp3'
        );
        audio.play().catch(() => {});
        return updatedTrophies;
      }
      return currentTrophies;
    });
  }

  trackByToastId(index: number, toast: Toast): number {
    return toast.id;
  }
}
