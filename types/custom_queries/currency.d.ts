import { QueryClient } from "../queries";
import { IbcTokenAsset, TokenAsset, TokenAssetHistory, TokenAssetInfo } from "./currency.types";
export declare const findTokenFromDenom: (denom: string) => TokenAsset | undefined;
export declare const findIbcTokenFromHash: (queryClient: QueryClient, ibcHash: string) => Promise<IbcTokenAsset | undefined>;
export declare const findIbcTokensFromHashes: (queryClient: QueryClient, ibcHashes: string[]) => Promise<Array<IbcTokenAsset | undefined>>;
export declare const findTokenInfoFromDenom: (denom: string, cacheResult?: boolean) => Promise<TokenAssetInfo | undefined>;
export declare const findTokensInfoFromDenoms: (denoms: string[]) => Promise<Array<TokenAssetInfo | undefined>>;
export declare const findTokenHistoryFromDenom: (denom: string, startDate: string, endDate: string, samples?: number, cacheResult?: boolean) => Promise<TokenAssetHistory | undefined>;
export declare const findTokensHistoryFromDenoms: (denoms: string[], startDate: string, endDate: string, samples?: number, cacheResult?: boolean) => Promise<Array<TokenAssetHistory | undefined>>;
