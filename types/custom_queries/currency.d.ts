import { QueryClient } from "../queries";
import { IbcTokenAsset, TokenAsset, TokenAssetHistory, TokenAssetInfo } from "./currency.types";
export declare const findTokenFromDenom: (denom: string) => TokenAsset | undefined;
export declare const findIbcTokenFromHash: (queryClient: QueryClient, ibcHash: string) => Promise<IbcTokenAsset | undefined>;
export declare const findIbcTokensFromHashes: (queryClient: QueryClient, ibcHashes: string[]) => Promise<Array<IbcTokenAsset | undefined>>;
/**
 * LOCAL USE ONLY
 * Fetch a list of currencies as defined in keplr chain registry:
 * https://github.com/chainapsis/keplr-chain-registry/tree/main/cosmos
 */
export declare const findTokenInfoFromDenom: (denom: string, cacheResult?: boolean, baseUrl?: string) => Promise<TokenAssetInfo | undefined>;
export declare const findTokensInfoFromDenoms: (denoms: string[]) => Promise<Array<TokenAssetInfo | undefined>>;
export declare const findTokenHistoryFromDenom: (denom: string, startDate: string, endDate: string, samples?: number, cacheResult?: boolean, baseUrl?: string) => Promise<TokenAssetHistory | undefined>;
export declare const findTokensHistoryFromDenoms: (denoms: string[], startDate: string, endDate: string, samples?: number, cacheResult?: boolean) => Promise<Array<TokenAssetHistory | undefined>>;
