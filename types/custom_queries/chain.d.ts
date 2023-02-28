import { RegistryChainInfo, KeplrChainInfo, ChainNetwork, ChainExplorer, KeplrChainExplorer } from "./chain.types";
/** Fetch the chain info via the chain name and chain network
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 */
export declare const getRegistryChainInfo: (chainName: string, chainNetwork?: ChainNetwork) => Promise<RegistryChainInfo>;
/** Fetch an active RPC endpoint from the provided chain info
 * @param chainInfo RegistryChainInfo
 */
export declare const getActiveRpcFromRegistryChainInfo: (chainInfo: RegistryChainInfo) => Promise<string>;
/** Fetch an active RPC endpoint for the provided chain name and chain network
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 */
export declare const getActiveRpcFromChainName: (chainName: string, chainNetwork?: ChainNetwork) => Promise<string>;
/** Fetch the tx explorer info for the provided chain name and network type (and provided explorers)
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 * @param chainExplorers ChainExplorer[] - defaults to undefined and uses sdk cache
 */
export declare const getChainExplorer: (chainName: string, chainNetwork: ChainNetwork, chainExplorers?: ChainExplorer[]) => KeplrChainExplorer | undefined;
/** Fetch the tx explorer info for the provided chain name and network type (via cosmos chain registry)
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 */
export declare const getChainExplorerAsync: (chainName: string, chainNetwork: ChainNetwork) => Promise<KeplrChainExplorer | undefined>;
/** Fetch the keplr chain info for the provided registry chain info
 * @param chainInfo RegistryChainInfo
 */
export declare const getKeplrChainInfoFromRegistryChainInfo: (chainInfo: RegistryChainInfo) => Promise<KeplrChainInfo>;
/** Fetch the keplr chain info for the provided chain name and network type
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 */
export declare const getKeplrChainInfo: (chainName: string, chainNetwork?: ChainNetwork) => Promise<KeplrChainInfo>;
