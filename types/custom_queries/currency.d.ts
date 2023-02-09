import { KeplrChainInfo } from "./chain.types";
import { TokenAsset } from "./currency.types";
export declare const prepareKeplrChainInfoTokenAssets: (chainInfo: KeplrChainInfo) => KeplrChainInfo;
export declare const findTokenFromDenom: (denom: string) => TokenAsset | undefined;
/**
 * LOCAL USE ONLY
 * Fetch a list of currencies as defined in keplr chain registry:
 * https://github.com/chainapsis/keplr-chain-registry/tree/main/cosmos
 */
