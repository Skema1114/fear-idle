export interface ClickUpgrade {
  name: string;
  cost: number;
  clickMultiplier: number;
  amount: number;
  image?: string;
  description: string;
  unlockClicks?: number;
  unlockAfter?: string;
}
