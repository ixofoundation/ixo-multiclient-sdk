import axios from "axios";

import {
  preferredEndpoints,
  localTestnetRegistry,
  localDevnetRegistry,
  registryChainNamesToKeplrChainNames,
  keplrChainNamesToRegistryChainNames,
} from "./chain.constants";
import { RegistryChainInfo, KeplrChainInfo, ChainNetwork } from "./chain.types";
import { prepareKeplrChainInfoTokenAssets } from "./currency";

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
    const chainInfo = localTestnetRegistry[chainName];
    if (!chainInfo)
      throw new Error("Cannot find testnet chain info for " + chainName);
    return chainInfo as RegistryChainInfo;
  }
};

const fetchDevnetRegistryChainInfo = (chainName: string): RegistryChainInfo => {
  const chainInfo = localDevnetRegistry[chainName];
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
  switch (chainNetwork) {
    case "mainnet":
      return await fetchMainnetRegistryChainInfo(chainName);
    case "testnet":
      return await fetchTestnetRegistryChainInfo(chainName);
    case "devnet":
      return fetchDevnetRegistryChainInfo(chainName);
    default:
      throw new Error(
        `Cannot find chain info for network type ${chainNetwork}`
      );
  }
};

/** Fetch an active RPC endpoint from the provided chain info
 * @param chainInfo RegistryChainInfo
 */
export const getActiveRpcFromRegistryChainInfo = async (
  chainInfo: RegistryChainInfo
): Promise<string> => {
  try {
    const rpcs = chainInfo.apis?.rpc?.map((rpc) => rpc.address) ?? [];
    if (!rpcs.length)
      throw new Error(
        `No RPC endpoints found in ${chainInfo.pretty_name} chain info`
      );
    const chainName = chainInfo.chain_name.replace(/testnet|devnet/i, "");
    const sortedRpcs = rpcs.sort((rpc1: string, rpc2: string) => {
      if ((preferredEndpoints[chainName]?.rpc ?? []).includes(rpc1)) return -1;
      if ((preferredEndpoints[chainName]?.rpc ?? []).includes(rpc2)) return 1;
      return 0;
    });
    for (let rpc of sortedRpcs) {
      try {
        const res = await axios.get(rpc);
        if (res.status === 200) return rpc;
      } catch (error) {
        continue;
      }
    }
    throw new Error(
      `No RPC endpoints available for ${chainInfo.pretty_name} at the moment`
    );
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
    const rpcEndpoint = await getActiveRpcFromRegistryChainInfo(chainInfo);
    return rpcEndpoint;
  } catch (error) {
    throw error;
  }
};

// const preferredEndpointsContainRest = (
//   chainName: string,
//   rest: string
// ): boolean =>
//   (preferredEndpoints[chainName]?.rest || []).some((preferredRest: string) =>
//     rest.includes(preferredRest)
//   );

// /** Fetch an active REST endpoint from the provided chain info
//  * @param chainInfo RegistryChainInfo
//  */
// export const getActiveRestFromRegistryChainInfo = async (
//   chainInfo: RegistryChainInfo
// ): Promise<string> => {
//   try {
//     let chainRests = chainInfo.apis?.rest?.map((rest) => rest.address);
//     if (!chainRests?.length)
//       throw new Error("No RPC endpoints found in provided chain info");
//     const chainName = chainInfo.chain_name.replace(/testnet/i, "");
//     chainRests = chainRests.sort((rest1: string, rest2: string) => {
//       if (preferredEndpointsContainRest(chainName, rest1)) return -1;
//       if (preferredEndpointsContainRest(chainName, rest2)) return 1;
//       return 0;
//     });
//     for (let rest of chainRests) {
//       try {
//         const res = await axios.get(rest);
//         if (res.status === 200 || res.status === 501) return rest;
//       } catch (error) {
//         if (error.status === 501) return rest;
//         continue;
//       }
//     }
//     throw new Error("No Rest endpoints available at the moment");
//   } catch (error) {
//     throw error;
//   }
// };

// /** Fetch an active REST endpoint for the provided chain name and chain network
//  * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
//  * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
//  */
// export const getActiveRestFromChainName = async (
//   chainName: string,
//   chainNetwork: ChainNetwork = "mainnet"
// ): Promise<string> => {
//   try {
//     const chainInfo = await getRegistryChainInfo(chainName, chainNetwork);
//     const restEndpoint = await getActiveRestFromRegistryChainInfo(chainInfo);
//     return restEndpoint;
//   } catch (error) {
//     throw error;
//   }
// };

const fetchKeplrChainInfo = async (chainName: string) => {
  const keplrChainName =
    registryChainNamesToKeplrChainNames[chainName] ?? chainName;
  const url = `https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/cosmos/${keplrChainName}.json`;
  const response = await axios.get(url);
  return response.data as KeplrChainInfo;
};

/** Fetch the keplr chain info for the provided registry chain info
 * @param chainInfo RegistryChainInfo
 */
export const getKeplrChainInfoFromRegistryChainInfo = async (
  chainInfo: RegistryChainInfo
): Promise<KeplrChainInfo> => {
  const chainName = chainInfo.chain_name?.replace(/testnet|devnet/i, "") ?? "";
  let keplrChainInfo = await fetchKeplrChainInfo(chainName);
  if (!keplrChainInfo?.chainId)
    throw new Error(`Unable to fetch keplr chain info for ${chainName}`);
  keplrChainInfo = prepareKeplrChainInfoTokenAssets(keplrChainInfo);
  const rpc = await getActiveRpcFromRegistryChainInfo(chainInfo);
  return {
    ...keplrChainInfo,
    chainId: chainInfo.chain_id,
    chainName: chainInfo.pretty_name,
    rpc,
  };
};

/** Fetch the keplr chain info for the provided chain name and network type
 * @param chainName string - defined in cosmos chain registry [github.com/cosmos/chain-registry]
 * @param chainNetwork 'mainnet' | 'testnet' | 'devnet' - defaults to mainnet
 */
export const getKeplrChainInfo = async (
  chainName: string,
  chainNetwork: ChainNetwork = "mainnet"
): Promise<KeplrChainInfo> => {
  const keplrChainInfoResult = await fetchKeplrChainInfo(chainName);
  if (!keplrChainInfoResult?.chainId)
    throw new Error(`Unable to fetch keplr chain info for ${chainName}`);
  const keplrChainInfo = prepareKeplrChainInfoTokenAssets(keplrChainInfoResult);
  let registryChainInfo: RegistryChainInfo;
  try {
    const registryChainName =
      keplrChainNamesToRegistryChainNames[chainName] ?? chainName;
    registryChainInfo = await getRegistryChainInfo(
      registryChainName,
      chainNetwork
    );
  } catch (error) {
    throw error;
  }
  if (!registryChainInfo) {
    if (chainNetwork === "mainnet") return keplrChainInfo;
    throw new Error(
      `Unable to fetch keplr chain info for ${chainName} ${chainNetwork}`
    );
  }
  const rpc = await getActiveRpcFromRegistryChainInfo(registryChainInfo);
  return {
    ...keplrChainInfo,
    chainId: registryChainInfo.chain_id,
    chainName: registryChainInfo.pretty_name,
    rpc: rpc,
  };
};
