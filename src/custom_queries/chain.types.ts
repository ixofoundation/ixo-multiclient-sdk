import { TokenAsset } from "./currency.types";

export type ChainNetwork = "mainnet" | "testnet" | "devnet";

export type ApiEndpoint = {
  address: string;
  provider: string;
};

export type ChainExplorer = {
  kind: string;
  url: string;
  tx_page?: string;
  account_page?: string;
};

export type RegistryChainInfo = {
  $schema?: string;
  chain_name: string;
  status: string;
  website?: string;
  network_type: string;
  pretty_name: string;
  chain_id: string;
  bech32_prefix: string;
  daemon_name?: string;
  node_home?: string;
  key_algos?: string[];
  slip44: number;
  fees?: {
    fee_tokens?: {
      denom: string;
      fixed_min_gas_price?: number;
      low_gas_price?: number;
      average_gas_price?: number;
      high_gas_price?: number;
    }[];
  };
  staking?: {
    staking_tokens?: {
      denom: string;
    }[];
    lock_duration?: {
      time: string;
    };
  };
  codebase: {
    git_repo: string;
    recommended_version: string;
    compatible_versions?: string[];
    binaries?: {
      "linux/amd64": string;
      "darwin/amd64"?: string;
      "linux/arm64"?: string;
      "windows/amd64"?: string;
      "darwin/arm64"?: string;
    };
    cosmos_sdk_version?: string;
    tendermint_version?: string;
    cosmwasm_version?: string;
    cosmwasm_enabled?: boolean;
    ibc_go_version?: string;
    ics_enabled?: string[];
    genesis: {
      name?: string;
      genesis_url: string;
    };
    versions?: {
      name: string;
      tag: string;
      height: number;
      next_version_name?: string;
    }[];
  };
  logo_URIs?: {
    png?: string;
    svg?: string;
  };
  peers: {
    seeds?: {
      id: string;
      address: string;
      provider?: string;
    }[];
    persistent_peers?: {
      id: string;
      address: string;
      provider?: string;
    }[];
  };
  apis: {
    rpc?: ApiEndpoint[];
    rest?: ApiEndpoint[];
    grpc?: ApiEndpoint[];
    "grpc-web"?: ApiEndpoint[];
  };
  explorers?: ChainExplorer[];
  update_link?: string;
  keywords?: string[];
};

export type KeplrChainExplorer = {
  name: string;
  txUrl: string;
};

export type KeplrChainInfo = {
  rpc: string;
  rest: string;
  chainId: string;
  chainName: string;
  stakeCurrency: TokenAsset;
  walletUrl?: string;
  walletUrlForStaking?: string;
  bip44: {
    coinType: number;
  };
  alternativeBIP44s?: {
    coinType: number;
  }[];
  bech32Config: {
    bech32PrefixAccAddr: string;
    bech32PrefixAccPub: string;
    bech32PrefixValAddr: string;
    bech32PrefixValPub: string;
    bech32PrefixConsAddr: string;
    bech32PrefixConsPub: string;
  };
  currencies?: TokenAsset[];
  feeCurrencies?: TokenAsset[];
  coinType?: number;
  chainSymbolImageUrl?: string;
  features?: string[];
  txExplorer?: KeplrChainExplorer;
};
