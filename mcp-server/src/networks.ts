/**
 * IXO network presets. Values verified against the Cosmos chain-registry
 * (impacthub / impacthubtestnet / impacthubdevnet).
 */

export type NetworkName = "mainnet" | "testnet" | "devnet";

export interface NetworkPreset {
  chainId: string;
  rpcUrl: string;
  denom: string;
  prefix: string;
  /** Default gas price used to compute fees, e.g. "0.025uixo". */
  gasPrice: string;
  explorer?: string;
}

export const NETWORKS: Record<NetworkName, NetworkPreset> = {
  mainnet: {
    chainId: "ixo-5",
    rpcUrl: "https://impacthub.ixo.world/rpc/",
    denom: "uixo",
    prefix: "ixo",
    gasPrice: "0.025uixo",
    explorer: "https://blockscan.ixo.world",
  },
  testnet: {
    chainId: "pandora-8",
    rpcUrl: "https://rpc.testnet.ixo.earth/",
    denom: "uixo",
    prefix: "ixo",
    gasPrice: "0.025uixo",
    explorer: "https://blockscan-pandora.ixo.earth",
  },
  devnet: {
    chainId: "devnet-1",
    rpcUrl: "https://devnet.ixo.earth/rpc/",
    denom: "uixo",
    prefix: "ixo",
    gasPrice: "0.025uixo",
  },
};

export function isNetworkName(value: string): value is NetworkName {
  return value === "mainnet" || value === "testnet" || value === "devnet";
}
