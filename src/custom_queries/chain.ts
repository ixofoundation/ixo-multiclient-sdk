import axios from "axios";

import {
  preferredEndpoints,
  testnetRegistry,
  devnetRegistry,
  keplrChainInfos,
} from "./chain.constants";
import {
  RegistryChainInfo,
  KeplrChainInfo,
  ChainNetwork,
  ApiEndpoint,
} from "./chain.types";

const fetchMainnetRegistryChainInfo = async (
  chainName: string
): Promise<RegistryChainInfo> => {
  const url = `https://proxy.atomscan.com/directory/${chainName}/chain.json`;
  const response = await axios.get(url);
  return response.data as RegistryChainInfo;
};

const fetchTestnetRegistryChainInfo = async (
  chainName: string
): Promise<RegistryChainInfo> => {
  try {
    const url = `https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/${chainName}testnet/chain.json`;
    const response = await axios.get(url);
    return response.data as RegistryChainInfo;
  } catch (error) {
    const chainInfo = testnetRegistry[chainName];
    if (!chainInfo)
      throw new Error("Cannot find testnet chain info for " + chainName);
    return chainInfo as RegistryChainInfo;
  }
};

const fetchDevnetRegistryChainInfo = (chainName: string): RegistryChainInfo => {
  const chainInfo = devnetRegistry[chainName];
  if (!chainInfo)
    throw new Error("Cannot find devnet chain info for " + chainName);
  return chainInfo as RegistryChainInfo;
};

/** Fetch the chain info via the chain name and chain network
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 */
export const getRegistryChainInfo = async (
  chainName: string,
  chainNetwork: ChainNetwork = "mainnet"
): Promise<RegistryChainInfo> => {
  try {
    if (chainNetwork === "mainnet") {
      const chainInfo = await fetchMainnetRegistryChainInfo(chainName);
      return chainInfo;
    }
    if (chainNetwork === "testnet") {
      const chainInfo = await fetchTestnetRegistryChainInfo(chainName);
      return chainInfo;
    }
    if (chainNetwork === "devnet") {
      const chainInfo = fetchDevnetRegistryChainInfo(chainName);
      return chainInfo;
    }
    throw new Error("Cannot find chain info for network type " + chainNetwork);
  } catch (error) {
    throw error;
  }
};

/** Fetch an active RPC endpoint from the provided chain info
 * @param chainInfo RegistryChainInfo
 */
export const getActiveRpcFromRegistryChainInfo = (
  chainInfo: RegistryChainInfo
): string => {
  try {
    const chainRpcs = chainInfo.apis?.rpc;
    // ensure chainInfo contains RPC endpoints
    if (!chainRpcs?.length)
      throw new Error("No RPC endpoints found in provided chain info");
    // check RPC endpoints against preferred endpoints
    const chainName = chainInfo.chain_name.replace(/testnet/i, "");
    const preferredRpcEndpoints = preferredEndpoints[chainName]?.rpc;
    if (preferredRpcEndpoints?.length) {
      const rpcEndpoints = chainRpcs.filter((rpc: ApiEndpoint) =>
        preferredRpcEndpoints.some((preferredRpc: string) =>
          rpc.address.includes(preferredRpc)
        )
      );
      if (rpcEndpoints.length) return rpcEndpoints[0].address;
    }
    // check if RPC endpoints contain 'keplr.app' endpoint
    const keplrEndpoints = chainRpcs.filter((rpc: ApiEndpoint) =>
      /keplr.app/i.test(rpc.address)
    );
    if (keplrEndpoints.length) return keplrEndpoints[0].address;
    // return first found rpc endpoint
    return chainRpcs[0].address;
  } catch (error) {
    throw error;
  }
};

/** Fetch an active RPC endpoint for the provided chain name and chain network
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 */
export const getActiveRpcFromChainName = async (
  chainName: string,
  chainNetwork: ChainNetwork = "mainnet"
): Promise<string> => {
  try {
    const chainInfo = await getRegistryChainInfo(chainName, chainNetwork);
    const rpcEndpoint = getActiveRpcFromRegistryChainInfo(chainInfo);
    return rpcEndpoint;
  } catch (error) {
    throw error;
  }
};

/** Fetch an active REST endpoint from the provided chain info
 * @param chainInfo RegistryChainInfo
 */
export const getActiveRestFromRegistryChainInfo = (
  chainInfo: RegistryChainInfo
): string => {
  try {
    const chainRest = chainInfo.apis?.rest;
    // ensure chainInfo contains REST endpoints
    if (!chainRest?.length)
      throw new Error("No REST endpoints found in provided chain info");
    // check REST endpoints against preferred endpoints
    const chainName = chainInfo.chain_name.replace(/testnet/i, "");
    const preferredRestEndpoints = preferredEndpoints[chainName]?.rpc;
    if (preferredRestEndpoints?.length) {
      const restEndpoints = chainRest.filter((rest: ApiEndpoint) =>
        preferredRestEndpoints.some((preferredRest: string) =>
          rest.address.includes(preferredRest)
        )
      );
      if (restEndpoints.length) return restEndpoints[0].address;
    }
    // check if REST endpoints contain 'keplr.app' endpoint
    const keplrEndpoints = chainRest.filter((rest: ApiEndpoint) =>
      /keplr.app/i.test(rest.address)
    );
    if (keplrEndpoints.length) return keplrEndpoints[0].address;
    // return first found REST endpoint
    return chainRest[0].address;
  } catch (error) {
    throw error;
  }
};

/** Fetch an active REST endpoint for the provided chain name and chain network
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 */
export const getActiveRestFromChainName = async (
  chainName: string,
  chainNetwork: ChainNetwork = "mainnet"
): Promise<string> => {
  try {
    const chainInfo = await getRegistryChainInfo(chainName, chainNetwork);
    const restEndpoint = getActiveRestFromRegistryChainInfo(chainInfo);
    return restEndpoint;
  } catch (error) {
    throw error;
  }
};

/** Fetch the keplr chain info for the provided registry chain info
 * @param chainInfo RegistryChainInfo
 */
export const getKeplrChainInfoFromRegistryChainInfo = (
  chainInfo: RegistryChainInfo
): KeplrChainInfo => {
  const {
    chain_id: chainId,
    chain_name: chainName,
    network_type: chainNetwork,
    pretty_name: chainPrettyName,
  } = chainInfo;
  const keplrChainInfo =
    keplrChainInfos[chainName.replace(/testnet|devnet/i, "")];
  if (!keplrChainInfo?.chainId) return null;
  if (chainNetwork === "mainnet") return keplrChainInfo;
  return {
    ...keplrChainInfo,
    chainId,
    chainName: chainPrettyName,
    rpc: getActiveRpcFromRegistryChainInfo(chainInfo),
    rest: getActiveRestFromRegistryChainInfo(chainInfo),
  };
};

/** Fetch the keplr chain info for the provided chain name and network type
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 */
export const getKeplrChainInfoFromChainName = async (
  chainName: string,
  chainNetwork: ChainNetwork = "mainnet"
): Promise<KeplrChainInfo> => {
  try {
    const chainInfo = await getRegistryChainInfo(chainName, chainNetwork);
    const keplrChainInfo = getKeplrChainInfoFromRegistryChainInfo(chainInfo);
    return keplrChainInfo;
  } catch (error) {
    throw error;
  }
};
