import { KeplrChainInfo } from "./chain.types";
import { IbcTokenAsset, TokenAsset } from "./currency.types";
import { QueryClient } from "../queries";
export declare const prepareKeplrChainInfoTokenAssets: (chainInfo: KeplrChainInfo) => KeplrChainInfo;
export declare const findTokenFromDenom: (denom: string) => TokenAsset | undefined;
export declare const findIbcTokenFromHash: (queryClient: QueryClient, ibcHash: string) => Promise<IbcTokenAsset | undefined>;
export declare const findIbcTokensFromHashes: (queryClient: QueryClient, ibcHashes: string[]) => Promise<Array<IbcTokenAsset | undefined>>;
/**
 * LOCAL USE ONLY
 * Fetch a list of currencies as defined in keplr chain registry:
 * https://github.com/chainapsis/keplr-chain-registry/tree/main/cosmos
 */
