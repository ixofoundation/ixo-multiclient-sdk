import axios from "axios";

import { ChainInfo, ChainNetwork, Endpoint } from "./chain.types";
import {
  preferredEndpoints,
  testnetRegistry,
  devnetRegistry,
} from "./chain.constants";

const fetchMainnetChainInfo = async (chainName: string) => {
  const url = `https://proxy.atomscan.com/directory/${chainName}/chain.json`;
  const response = await axios.get(url);
  return response.data as ChainInfo;
};

const fetchTestnetChainInfo = async (chainName: string) => {
  try {
    const url = `https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/${chainName}testnet/chain.json`;
    const response = await axios.get(url);
    return response.data as ChainInfo;
  } catch (error) {
    const chainInfo = testnetRegistry[chainName];
    if (!chainInfo)
      throw new Error("Cannot find testnet chain info for " + chainName);
    return chainInfo as ChainInfo;
  }
};

const fetchDevnetChainInfo = (chainName: string) => {
  const chainInfo = devnetRegistry[chainName];
  if (!chainInfo)
    throw new Error("Cannot find devnet chain info for " + chainName);
  return chainInfo as ChainInfo;
};

/** Fetch the chain info via the chain name and chain network
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 */
export const getChainInfoFromChainName = async (
  chainName: string,
  chainNetwork: ChainNetwork = "mainnet"
): Promise<ChainInfo> => {
  try {
    if (chainNetwork === "mainnet") {
      const chainInfo = await fetchMainnetChainInfo(chainName);
      return chainInfo;
    }
    if (chainNetwork === "testnet") {
      const chainInfo = await fetchTestnetChainInfo(chainName);
      return chainInfo;
    }
    if (chainNetwork === "devnet") {
      const chainInfo = fetchDevnetChainInfo(chainName);
      return chainInfo;
    }
    throw new Error("Cannot find chain info for network type " + chainNetwork);
  } catch (error) {
    throw error;
  }
};

/** Fetch an active RPC endpoint from the provided chain info
 * @param chainInfo ChainInfo
 */
export const getActiveRpcFromChainInfo = (chainInfo: ChainInfo): string => {
  try {
    const chainRpcs = chainInfo.apis?.rpc;
    // ensure chainInfo contains RPC endpoints
    if (!chainRpcs?.length)
      throw new Error("No RPC endpoints found in provided chain info");
    // check RPC endpoints against preferred endpoints
    const chainName = chainInfo.chain_name.replace(/testnet/i, "");
    const preferredRpcEndpoints = preferredEndpoints[chainName]?.rpc;
    if (preferredRpcEndpoints?.length) {
      const rpcEndpoints = chainRpcs.filter((rpc: Endpoint) =>
        preferredRpcEndpoints.some((preferredRpc: string) =>
          rpc.address.includes(preferredRpc)
        )
      );
      if (rpcEndpoints.length) return rpcEndpoints[0].address;
    }
    // check if RPC endpoints contain 'keplr.app' endpoint
    const keplrEndpoints = chainRpcs.filter((rpc: Endpoint) =>
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
    const chainInfo = await getChainInfoFromChainName(chainName, chainNetwork);
    const rpcEndpoint = getActiveRpcFromChainInfo(chainInfo);
    return rpcEndpoint;
  } catch (error) {
    throw error;
  }
};
