import { ChainInfo, ChainNetwork } from "./chain.types";
/** Fetch the chain info via the chain name and chain network
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 */
export declare const getChainInfoFromChainName: (chainName: string, chainNetwork?: ChainNetwork) => Promise<ChainInfo>;
/** Fetch an active RPC endpoint from the provided chain info
 * @param chainInfo ChainInfo
 */
export declare const getActiveRpcFromChainInfo: (chainInfo: ChainInfo) => string;
/** Fetch an active RPC endpoint for the provided chain name and chain network
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 */
export declare const getActiveRpcFromChainName: (chainName: string, chainNetwork?: ChainNetwork) => Promise<string>;
