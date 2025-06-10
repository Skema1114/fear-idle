export interface PrestigeUpgrade {
  name: string;
  cost: number;
  multiplierValue: number;
  type: 'dps' | 'click' | 'global';
  amount: number;
  image?: string;
  description: string;
}
