import axios from "axios";

import { CoinCodexCoinResponse, CoinCodexHistoryResponse } from "./currency.types";

export const fetchTokenInfo = async (
  denom: string,
  baseUrl: string
): Promise<CoinCodexCoinResponse | undefined> => {
  try {
    const url = `${baseUrl}/api/coincodex/get_coin/${denom}`;
    const response = await axios.get(url);
    if (response) return response.data as CoinCodexCoinResponse;
    return undefined;
  } catch (error) {
    return undefined;
  }
};

export const fetchTokenHistory = async (
  denom: string,
  startDate: string,
  endDate: string,
  samples: number,
  baseUrl: string
): Promise<CoinCodexHistoryResponse | undefined> => {
  try {
    const url = `${baseUrl}/api/coincodex/get_coin_history/${denom}/${startDate}/${endDate}/${samples}`;
    const response = await axios.get(url);
    if (response) return response.data as CoinCodexHistoryResponse;
    return undefined;
  } catch (error) {
    return undefined;
  }
};