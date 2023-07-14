import { CoinCodexCoinResponse, CoinCodexHistoryResponse } from "./currency.types";
export declare const fetchTokenInfo: (denom: string, baseUrl: string) => Promise<CoinCodexCoinResponse | undefined>;
export declare const fetchTokenHistory: (denom: string, startDate: string, endDate: string, samples: number, baseUrl: string) => Promise<CoinCodexHistoryResponse | undefined>;
