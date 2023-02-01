import { RegistryChainInfo, KeplrChainInfo, ChainNetwork } from "./chain.types";
/** Fetch the chain info via the chain name and chain network
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 */
export declare const getChainInfoFromChainName: (chainName: string, chainNetwork?: ChainNetwork) => Promise<RegistryChainInfo>;
/** Fetch an active RPC endpoint from the provided chain info
 * @param chainInfo RegistryChainInfo
 */
export declare const getActiveRpcFromChainInfo: (chainInfo: RegistryChainInfo) => string;
/** Fetch an active RPC endpoint for the provided chain name and chain network
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 */
export declare const getActiveRpcFromChainName: (chainName: string, chainNetwork?: ChainNetwork) => Promise<string>;
/** Fetch an active REST endpoint from the provided chain info
 * @param chainInfo RegistryChainInfo
 */
export declare const getActiveRestFromChainInfo: (chainInfo: RegistryChainInfo) => string;
/** Fetch an active REST endpoint for the provided chain name and chain network
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 */
export declare const getActiveRestFromChainName: (chainName: string, chainNetwork?: ChainNetwork) => Promise<string>;
/** Fetch the keplr chain info for the provided registry chain info
 * @param chainInfo RegistryChainInfo
 */
export declare const getKeplrChainInfo: (chainInfo: RegistryChainInfo) => KeplrChainInfo;
