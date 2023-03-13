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

export type TokenAssetInfo = {
  symbol: string;
  coinName: string;
  shortname: string;
  slug: string;
  displaySymbol: string;
  todayOpen: number;
  lastPriceUsd: number;
  priceChangePercent: {
    "1H": string;
    "1D": string;
    "7D": string;
    "30D": string;
    "90D": string;
  };
  lastUpdate: Date;
  social: Social;
};

export type CoincodexResponse = {
  symbol?: string;
  coin_name?: string;
  shortname?: string;
  slug?: string;
  display_symbol?: string;
  display?: string;
  release_date?: unknown;
  ico_price?: unknown;
  today_open?: number;
  market_cap_rank?: unknown;
  volume_rank?: number;
  description?: string;
  price_high_24_usd?: number;
  price_low_24_usd?: number;
  start?: unknown;
  end?: unknown;
  is_promoted?: unknown;
  message?: string;
  website?: string;
  whitepaper?: string;
  total_supply?: unknown;
  supply?: unknown;
  platform?: string;
  how_to_buy_url?: unknown;
  last_price_usd?: number;
  price_change_1H_percent?: string;
  price_change_1D_percent?: string;
  price_change_7D_percent?: string;
  price_change_30D_percent?: string;
  price_change_90D_percent?: string;
  price_change_180D_percent?: string;
  price_change_365D_percent?: string;
  price_change_3Y_percent?: string;
  price_change_5Y_percent?: string;
  price_change_ALL_percent?: string;
  price_change_YTD_percent?: string;
  volume_24_usd?: number;
  trading_since?: Date;
  stages_start?: unknown;
  stages_end?: unknown;
  include_supply?: string;
  use_volume?: string;
  ath_usd?: string;
  ath_date?: Date;
  not_trading_since?: unknown;
  last_update?: Date;
  cycle_low_usd?: number;
  cycle_high_usd?: number;
  cycle_low_date?: Date;
  cycle_high_date?: Date;
  image_id?: string;
  cover_image_id?: string;
  image_t?: number;
  total_total_supply?: unknown;
  initial_data?: unknown;
  ath_data?: unknown;
  atl_data?: unknown;
  social?: Social;
  socials?: SocialDetail[];
};

export type Social = {
  [social: string]: string;
};

export type SocialDetail = {
  name?: string;
  id?: string;
  coincodex_coin_symbol?: string;
  coincodex_socials_id?: string;
  value?: string;
  label?: string;
  order_by?: string;
};
