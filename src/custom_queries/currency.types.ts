export type TokenAsset = {
  coinDenom: string;
  coinMinimalDenom: string;
  coinDecimals: number;
  coinGeckoId?: string;
  coinImageUrl?: string;
  isStakeCurrency?: boolean;
  isFeeCurrency?: boolean;
  gasPriceStep?: {
    low: number;
    average: number;
    high: number;
  };
};
