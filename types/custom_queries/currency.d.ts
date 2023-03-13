import { KeplrChainInfo } from "./chain.types";
import { IbcTokenAsset, TokenAsset, TokenAssetInfo } from "./currency.types";
import { QueryClient } from "../queries";
export declare const prepareKeplrChainInfoTokenAssets: (chainInfo: KeplrChainInfo) => KeplrChainInfo;
export declare const findTokenFromDenom: (denom: string) => TokenAsset | undefined;
export declare const findIbcTokenFromHash: (queryClient: QueryClient, ibcHash: string) => Promise<IbcTokenAsset | undefined>;
export declare const findIbcTokensFromHashes: (queryClient: QueryClient, ibcHashes: string[]) => Promise<Array<IbcTokenAsset | undefined>>;
export declare const findTokenInfoFromDenom: (denom: string) => Promise<TokenAssetInfo | undefined>;
export declare const findTokensInfoFromDenoms: (denoms: string[]) => Promise<Array<TokenAssetInfo | undefined>>;
