export interface PrestigeUpgrade {
  name: string;
  cost: number; // Custo em Essência Ancestral
  multiplierValue: number; // Multiplicador que este upgrade concede (ex: 1.05 para +5%, 2.0 para 2x)
  type: 'dps' | 'click' | 'global'; // Tipo de multiplicador que afeta: DPS, Clique ou Global
  amount: number; // Quantidade deste upgrade comprado
  image?: string;
}
