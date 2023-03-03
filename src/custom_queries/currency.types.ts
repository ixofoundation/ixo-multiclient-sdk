import { DenomTrace } from "../codegen/ibc/applications/transfer/v1/transfer";

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

export type Ibc = {
  hash: string;
} & DenomTrace;

export type IbcTokenAsset = {
  ibc: Ibc;
  token?: TokenAsset;
};
