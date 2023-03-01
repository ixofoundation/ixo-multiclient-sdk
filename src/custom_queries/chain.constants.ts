// Manually defined preferred rpc and rest endpoints for chains
export const preferredEndpoints = {
  agoric: {
    rpc: ["https://main.rpc.agoric.net"],
    rest: ["https://main.api.agoric.net"],
  },
  akash: {
    rpc: ["https://rpc-akash.keplr.app"],
    rest: ["https://lcd-akash.keplr.app"],
  },
  assetmantle: {
    rpc: ["https://rpc.assetmantle.one"],
    rest: ["https://rest.assetmantle.one"],
  },
  bandchain: {
    rpc: ["https://rpc.laozi3.bandchain.org"],
    rest: ["https://laozi1.bandchain.org/api"],
  },
  bitcanna: {
    rpc: ["https://rpc.bitcanna.io"],
    rest: ["https://lcd.bitcanna.io"],
  },
  bitsong: {
    rpc: ["https://rpc.explorebitsong.com"],
    rest: ["https://lcd.explorebitsong.com"],
  },
  bostrom: {
    rpc: ["https://rpc.bostrom.cybernode.ai"],
    rest: ["https://lcd.bostrom.cybernode.ai"],
  },
  carbon: {
    rpc: ["https://tm-api.carbon.network"],
    rest: ["https://api.carbon.network"],
  },
  cerberus: {
    rpc: ["https://rpc.cerberus.zone:26657"],
    rest: ["https://api.cerberus.zone:1317"],
  },
  cheqd: {
    rpc: ["https://rpc.cheqd.net"],
    rest: ["https://api.cheqd.net"],
  },
  chihuahua: {
    rpc: ["https://rpc.chihuahua.wtf"],
    rest: ["https://api.chihuahua.wtf"],
  },
  comdex: {
    rpc: ["https://rpc.comdex.one"],
    rest: ["https://rest.comdex.one"],
  },
  cosmoshub: {
    rpc: [
      "https://rpc-cosmoshub.blockapsis.com",
      "https://rpc-cosmoshub.keplr.app",
      "https://rpc.sentry-01.theta-testnet.polypore.xyz", // testnet
    ],
    rest: ["https://lcd-cosmoshub.keplr.app"],
  },
  crescent: {
    rpc: ["https://mainnet.crescent.network:26657"],
    rest: ["https://mainnet.crescent.network:1317"],
  },
  cryptoorgchain: {
    rpc: ["https://rpc-crypto-org.keplr.app"],
    rest: ["https://lcd-crypto-org.keplr.app"],
  },
  cudos: {
    rpc: ["https://rpc.cudos.org"],
    rest: ["https://rest.cudos.org"],
  },
  decentr: {
    rpc: ["https://poseidon.mainnet.decentr.xyz"],
    rest: ["https://rest.mainnet.decentr.xyz"],
  },
  desmos: {
    rpc: ["https://rpc.mainnet.desmos.network"],
    rest: ["https://api.mainnet.desmos.network"],
  },
  dig: {
    rpc: ["https://rpc-1-dig.notional.ventures"],
    rest: ["https://api-1-dig.notional.ventures"],
  },
  echelon: {
    rpc: ["https://rpc-echelon.whispernode.com"],
    rest: ["https://lcd-echelon.whispernode.com"],
  },
  emoney: {
    rpc: ["https://rpc-emoney.keplr.app"],
    rest: ["https://lcd-emoney.keplr.app"],
  },
  evmos: {
    rpc: ["https://rpc-evmos.keplr.app"],
    rest: ["https://lcd-evmos.keplr.app"],
  },
  fetchhub: {
    rpc: ["https://rpc-fetchhub.fetch.ai:443"],
    rest: ["https://rest-fetchhub.fetch.ai"],
  },
  galaxy: {
    rpc: ["https://rpc.galaxychain.zone"],
    rest: ["https://rest.galaxychain.zone"],
  },
  genesisl1: {
    rpc: ["https://26657.genesisl1.org"],
    rest: ["https://api.genesisl1.org"],
  },
  gravitybridge: {
    rpc: ["https://gravitychain.io:26657"],
    rest: ["https://gravitychain.io:1317"],
  },
  impacthub: {
    rpc: [
      "https://ixo-rpc.ibs.team",
      "https://rpc-ixo-ia.cosmosia.notional.ventures/",
      // "https://impacthub-rpc.lavenderfive.com/", // removed due to rate-limiter
    ],
    rest: [
      "https://api-ixo-ia.cosmosia.notional.ventures/",
      // "https://impacthub-api.lavenderfive.com/", // removed due to rate-limiter
    ],
  },
  injective: {
    rpc: ["https://public.api.injective.network"],
    rest: ["https://public.lcd.injective.network"],
  },
  irisnet: {
    rpc: ["https://rpc-iris.keplr.app"],
    rest: ["https://lcd-iris.keplr.app"],
  },
  jackal: {
    rpc: ["https://rpc.jackalprotocol.com"],
    rest: ["https://api.jackalprotocol.com"],
  },
  juno: {
    rpc: [
      "https://rpc-juno.itastakers.com",
      "https://rpc-juno.keplr.app",
      "https://rpc.uni.junonetwork.io", // testnet
    ],
    rest: ["https://lcd-juno.keplr.app"],
  },
  kava: {
    rpc: ["https://rpc-kava.keplr.app"],
    rest: ["https://lcd-kava.keplr.app"],
  },
  kichain: {
    rpc: ["https://rpc-mainnet.blockchain.ki"],
    rest: ["https://api-mainnet.blockchain.ki"],
  },
  konstellation: {
    rpc: ["https://node1.konstellation.tech:26657"],
    rest: ["https://node1.konstellation.tech:1318"],
  },
  kujira: {
    rpc: ["https://rpc.kaiyo.kujira.setten.io"],
    rest: ["https://lcd.kaiyo.kujira.setten.io"],
  },
  lambda: {
    rpc: ["https://rpc.lambda.im"],
    rest: ["https://rest.lambda.im"],
  },
  likecoin: {
    rpc: ["https://mainnet-node.like.co/rpc"],
    rest: ["https://mainnet-node.like.co"],
  },
  lumenx: {
    rpc: ["https://rpc.helios-1.lumenex.io"],
    rest: ["https://api.helios-1.lumenex.io"],
  },
  lumnetwork: {
    rpc: ["https://node0.mainnet.lum.network/rpc"],
    rest: ["https://node0.mainnet.lum.network/rest"],
  },
  meme: {
    rpc: ["https://rpc-meme-1.meme.sx:443"],
    rest: ["https://api-meme-1.meme.sx:443"],
  },
  microtick: {
    rpc: ["https://rpc-microtick.keplr.app"],
    rest: ["https://lcd-microtick.keplr.app"],
  },
  odin: {
    rpc: ["https://node.odin-freya-website.odinprotocol.io/mainnet/a"],
    rest: ["https://node.odin-freya-website.odinprotocol.io/mainnet/a/api"],
  },
  oraichain: {
    rpc: ["https://rpc.orai.io"],
    rest: ["https://lcd.orai.io"],
  },
  osmosis: {
    rpc: ["https://rpc.osmosis.zone", "https://rpc-osmosis.keplr.app"],
    rest: ["https://lcd-osmosis.keplr.app"],
  },
  persistence: {
    rpc: ["https://rpc-persistence.keplr.app"],
    rest: ["https://lcd-persistence.keplr.app"],
  },
  provenance: {
    rpc: ["https://rpc.provenance.io"],
    rest: ["https://api.provenance.io"],
  },
  rebus: {
    rpc: ["https://api.mainnet.rebus.money:26657"],
    rest: ["https://api.mainnet.rebus.money:1317"],
  },
  regen: {
    rpc: ["https://rpc-regen.keplr.app"],
    rest: ["https://lcd-regen.keplr.app"],
  },
  rizon: {
    rpc: ["https://rpcapi.rizon.world"],
    rest: ["https://restapi.rizon.world"],
  },
  secretnetwork: {
    rpc: ["https://rpc-secret.keplr.app"],
    rest: ["https://lcd-secret.keplr.app"],
  },
  sentinel: {
    rpc: ["https://rpc-sentinel.keplr.app"],
    rest: ["https://lcd-sentinel.keplr.app"],
  },
  sifchain: {
    rpc: ["https://rpc.sifchain.finance"],
    rest: ["https://api-int.sifchain.finance"],
  },
  sommelier: {
    rpc: ["https://rpc-sommelier.keplr.app"],
    rest: ["https://lcd-sommelier.keplr.app"],
  },
  stargaze: {
    rpc: ["https://rpc.stargaze-apis.com"],
    rest: ["https://rest.stargaze-apis.com"],
  },
  starname: {
    rpc: ["https://rpc-iov.keplr.app"],
    rest: ["https://lcd-iov.keplr.app"],
  },
  stride: {
    rpc: ["https://stride-rpc.polkachu.com"],
    rest: ["https://stride-api.polkachu.com"],
  },
  teritori: {
    rpc: ["https://rpc.mainnet.teritori.com"],
    rest: ["https://rest.mainnet.teritori.com"],
  },
  terra: {
    rpc: ["https://rpc-columbus.keplr.app"],
    rest: ["https://lcd-columbus.keplr.app"],
  },
  terra2: {
    rpc: ["https://rpc.terrav2.ccvalidators.com"],
    rest: ["https://phoenix-lcd.terra.dev"],
  },
  tgrade: {
    rpc: ["https://rpc.mainnet-1.tgrade.confio.run"],
    rest: ["https://api.mainnet-1.tgrade.confio.run"],
  },
  umee: {
    rpc: ["https://rpc-umee.keplr.app"],
    rest: ["https://lcd-umee.keplr.app"],
  },
  unification: {
    rpc: ["https://rpc.unification.chainmasters.ninja"],
    rest: ["https://rest.unification.chainmasters.ninja"],
  },
  vidulum: {
    rpc: ["https://mainnet-rpc.vidulum.app"],
    rest: ["https://mainnet-lcd.vidulum.app"],
  },
};

export const localTestnetRegistry = {
  impacthub: {
    chain_name: "impacthub",
    status: "live",
    network_type: "testnet",
    website: "https://www.ixo.world/",
    pretty_name: "ixo Testnet",
    chain_id: "pandora-7",
    bech32_prefix: "ixo",
    key_algos: ["secp256k1", "ed25519"],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: "uixo",
          fixed_min_gas_price: 0.025,
        },
      ],
    },
    codebase: {
      git_repo: "https://github.com/ixofoundation/ixo-blockchain",
      recommended_version: "v0.19.2",
      compatible_versions: ["v0.19.2"],
      genesis: {
        genesis_url:
          "https://raw.githubusercontent.com/ixofoundation/genesis/980961a8e344dd39bd092493e58b4421aa1c0014/ixo-4/genesis.json",
      },
    },
    peers: {
      seeds: [],
      persistent_peers: [],
    },
    apis: {
      rpc: [
        {
          address: "https://testnet.ixo.earth/rpc/",
          provider: "ixo earth",
        },
      ],
      rest: [
        {
          address: "https://testnet.ixo.earth/rest/",
          provider: "ixo earth",
        },
      ],
      grpc: [],
    },
    explorers: [
      {
        kind: "bigdipper",
        url: "https://blockscan-pandora.ixo.earth",
        tx_page: "https://blockscan-pandora.ixo.earth/transactions/${txHash}",
        account_page:
          "https://blockscan-pandora.ixo.earth/account/${accountAddress}",
      },
    ],
  },
};

export const localDevnetRegistry = {
  impacthub: {
    chain_name: "impacthub",
    status: "live",
    network_type: "devnet",
    website: "https://www.ixo.world/",
    pretty_name: "ixo Devnet",
    chain_id: "devnet-1",
    bech32_prefix: "ixo",
    key_algos: ["secp256k1", "ed25519"],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: "uixo",
          fixed_min_gas_price: 0.025,
        },
      ],
    },
    codebase: {
      git_repo: "https://github.com/ixofoundation/ixo-blockchain",
      recommended_version: "v0.19.2",
      compatible_versions: ["v0.19.2"],
      genesis: {
        genesis_url:
          "https://raw.githubusercontent.com/ixofoundation/genesis/980961a8e344dd39bd092493e58b4421aa1c0014/ixo-4/genesis.json",
      },
    },
    peers: {
      seeds: [],
      persistent_peers: [],
    },
    apis: {
      rpc: [
        {
          address: "https://devnet.ixo.earth/rpc/",
          provider: "ixo earth",
        },
      ],
      rest: [
        {
          address: "https://devnet.ixo.earth/rest/",
          provider: "ixo earth",
        },
      ],
      grpc: [],
    },
    explorers: [
      {
        kind: "bigdipper",
        url: "https://devnet-blockscan.ixo.earth",
        tx_page: "https://devnet-blockscan.ixo.earth/transactions/${txHash}",
        account_page:
          "https://devnet-blockscan.ixo.earth/account/${accountAddress}",
      },
    ],
  },
};

/**
 * Registry chain names defined in Cosmos chain registry:
 * https://github.com/cosmos/chain-registry/blob/master/${chainName}/chain.json
 * Keplr chain names defined in Keplr (chainapsis) chain registry:
 * KEPLR: https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/cosmos/${chainName}.json
 */
export const registryChainNamesToKeplrChainNames = {
  agoric: "agoric",
  akash: "akashnet",
  axelar: "axelar-dojo",
  bitcanna: "bitcanna",
  bostrom: "bostrom",
  carbon: "carbon",
  chihuahua: "chihuahua",
  comdex: "comdex",
  cosmoshub: "cosmoshub",
  crescent: "crescent",
  cryptoorgchain: "crypto-org-chain-mainnet",
  desmos: "desmos-mainnet",
  emoney: "emoney",
  evmos: "evmos_9001",
  firmachain: "colosseum",
  gravitybridge: "gravity-bridge",
  impacthub: "ixo",
  injective: "injective",
  irisnet: "irishub",
  jackal: "jackal",
  juno: "juno",
  kava: "kava_2222",
  likecoin: "likecoin-mainnet",
  lumnetwork: "lum-network",
  mars: "mars",
  medasdigital: "medasdigital",
  meme: "meme",
  nyx: "nyx",
  omniflixhub: "omniflixhub",
  osmosis: "osmosis",
  persistence: "core",
  provenance: "pio-mainnet",
  quicksilver: "quicksilver",
  regen: "regen",
  secretnetwork: "secret",
  sentinel: "sentinelhub",
  shentu: "shentu-2.2",
  sifchain: "sifchain",
  sommelier: "sommelier",
  stafihub: "stafihub",
  stargaze: "stargaze",
  starname: "iov-mainnet-ibc",
  stride: "stride",
  terra: "columbus",
  terra2: "phoenix",
  tgrade: "tgrade-mainnet",
  umee: "umee",
  unification: "FUND-MainNet",
};

export const registryChainNames = Object.keys(
  registryChainNamesToKeplrChainNames
);
export const keplrChainNames = Object.values(
  registryChainNamesToKeplrChainNames
);

export const keplrChainNamesToRegistryChainNames = registryChainNames.reduce(
  (r, k) => ({ ...r, [registryChainNamesToKeplrChainNames[k]]: k }),
  {}
);

export const mainnetChainExplorers = {
  acrechain: [
    {
      kind: "blockscout",
      url: "https://acrescout.mindheartsoul.org",
      tx_page: "https://acrescout.mindheartsoul.org/tx/${txHash}",
    },
    {
      kind: "blockscout",
      url: "https://acrescan.com",
      tx_page: "https://acrescan.com/tx/${txHash}",
    },
    {
      kind: "blockscout",
      url: "https://acreblockexplorer.jet-node.com",
      tx_page: "https://acreblockexplorer.jet-node.com/tx/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://explorer.nodestake.top/acre",
      tx_page: "https://explorer.nodestake.top/acre/tx/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://cosmosrun.info/acre-mainnet",
      tx_page: "https://cosmosrun.info/acre-mainnet/tx/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://exp.nodeist.net/m-acrechain/",
      tx_page: "https://exp.nodeist.net/m-acrechain/tx/${txHash}",
    },
  ],
  agoric: [
    {
      kind: "bigdipper",
      url: "https://agoric.bigdipper.live/",
      tx_page: "https://agoric.bigdipper.live/transactions/${txHash}",
      account_page: "https://agoric.bigdipper.live/accounts/${accountAddress}",
    },
    {
      kind: "explorers.guru",
      url: "https://agoric.explorers.guru",
      tx_page: "https://agoric.explorers.guru/transaction/${txHash}",
      account_page: "https://agoric.explorers.guru/account/${accountAddress}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/agoric/",
      tx_page: "https://atomscan.com/agoric/transactions/${txHash}",
      account_page: "https://atomscan.com/agoric/accounts/${accountAddress}",
    },
  ],
  aioz: [
    {
      kind: "aioz",
      url: "https://explorer.aioz.network",
      tx_page: "https://explorer.aioz.network/tx/${txHash}",
    },
  ],
  akash: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/akash",
      tx_page: "https://ezstaking.tools/akash/txs/${txHash}",
      account_page: "https://ezstaking.tools/akash/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/akash",
      tx_page: "https://www.mintscan.io/akash/txs/${txHash}",
      account_page: "https://www.mintscan.io/akash/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/akash-network",
      tx_page: "https://ping.pub/akash-network/tx/${txHash}",
    },
    {
      kind: "bigdipper",
      url: "https://akash.bigdipper.live/",
      tx_page: "https://akash.bigdipper.live/transactions/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/akash",
      tx_page: "https://atomscan.com/akash/transactions/${txHash}",
    },
    {
      kind: "cloudmos",
      url: "https://cloudmos.io/blocks",
      tx_page: "https://cloudmos.io/transactions/${txHash}",
    },
  ],
  arkh: [
    {
      kind: "ping.pub",
      url: "https://testnet.ping.pub/arkh",
      tx_page: "https://testnet.ping.pub/arkh/tx/${txHash}",
    },
  ],
  assetmantle: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/assetmantle",
      tx_page: "https://ezstaking.tools/assetmantle/txs/${txHash}",
      account_page:
        "https://ezstaking.tools/assetmantle/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/asset-mantle",
      tx_page: "https://www.mintscan.io/asset-mantle/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/asset-mantle/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://explorer.postcapitalist.io/AssetMantle",
      tx_page: "https://explorer.postcapitalist.io/AssetMantle/tx/${txHash}",
    },
    {
      kind: "other",
      url: "https://explorer.assetmantle.one",
      tx_page: "https://explorer.assetmantle.one/transactions/${txHash}",
    },
    {
      kind: "explorers.guru",
      url: "https://assetmantle.explorers.guru",
      tx_page: "https://assetmantle.explorers.guru/transaction/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/assetmantle",
      tx_page: "https://atomscan.com/assetmantle/transactions/${txHash}",
    },
  ],
  axelar: [
    {
      kind: "axelarscan",
      url: "https://axelarscan.io",
      tx_page: "https://axelarscan.io/tx/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/axelar",
      tx_page: "https://www.mintscan.io/axelar/txs/${txHash}",
      account_page: "https://www.mintscan.io/axelar/account/${accountAddress}",
    },
    {
      kind: "explorers.guru",
      url: "https://axelar.explorers.guru",
      tx_page: "https://axelar.explorers.guru/transaction/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/axelar",
      tx_page: "https://atomscan.com/axelar/transactions/${txHash}",
    },
  ],
  bandchain: [
    {
      kind: "cosmoscan",
      url: "https://cosmoscan.io",
      tx_page: "https://cosmoscan.io/tx/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/band",
      tx_page: "https://www.mintscan.io/band/txs${txHash}",
      account_page: "https://www.mintscan.io/band/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/band-protocol",
      tx_page: "https://ping.pub/band-protocol/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/band-protocol",
      tx_page: "https://atomscan.com/band-protocol/transactions/${txHash}",
    },
  ],
  beezee: [
    {
      kind: "ping.pub",
      url: "https://explorers.vidulum.app/beezee",
      tx_page: "https://explorers.vidulum.app/beezee/tx/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://explorer.erialos.me/beezee",
      tx_page: "https://explorer.erialos.me/beezee/tx/${txHash}",
    },
  ],
  bitcanna: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/bitcanna",
      tx_page: "https://ezstaking.tools/bitcanna/txs/${txHash}",
      account_page:
        "https://ezstaking.tools/bitcanna/account/${accountAddress}",
    },
    {
      kind: "forbole",
      url: "https://cosmos-explorer.bitcanna.io",
      tx_page: "https://cosmos-explorer.bitcanna.io/transactions/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/bitcanna",
      tx_page: "https://ping.pub/bitcanna/tx/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/bitcanna/",
      tx_page: "https://www.mintscan.io/bitcanna/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/bitcanna/account/${accountAddress}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/bitcanna",
      tx_page: "https://atomscan.com/bitcanna/transactions/${txHash}",
    },
  ],
  bitsong: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/bitsong",
      tx_page: "https://ezstaking.tools/bitsong/txs/${txHash}",
      account_page: "https://ezstaking.tools/bitsong/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/bitsong",
      tx_page: "https://ping.pub/bitsong/tx/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/bitsong",
      tx_page: "https://www.mintscan.io/bitsong/txs/${txHash}",
      account_page: "https://www.mintscan.io/bitsong/account/${accountAddress}",
    },
    {
      kind: "bigdipper",
      url: "https://explorebitsong.com",
      tx_page: "https://explorebitsong.com/transactions/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/bitsong",
      tx_page: "https://atomscan.com/bitsong/transactions/${txHash}",
    },
  ],
  bluzelle: [
    {
      kind: "ping.pub",
      url: "https://ping.explorer.net.bluzelle.com/bluzelle",
      tx_page: "https://ping.explorer.net.bluzelle.com/bluzelle/tx/${txHash}",
      account_page:
        "https://ping.explorer.net.bluzelle.com/bluzelle/account/${accountAddress}",
    },
    {
      kind: "big dipper",
      url: "https://bd.explorer.net.bluzelle.com",
      tx_page: "https://bd.explorer.net.bluzelle.com/transactions/${txHash}",
      account_page:
        "https://bd.explorer.net.bluzelle.com/accounts/${accountAddress}",
    },
  ],
  bostrom: [
    {
      kind: "cyb",
      url: "https://cyb.ai/",
      tx_page: "https://cyb.ai/network/bostrom/tx/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/bostrom",
      tx_page: "https://ping.pub/bostrom/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/bostrom",
      tx_page: "https://atomscan.com/bostrom/transactions/${txHash}",
    },
  ],
  canto: [
    {
      kind: "bigdipper",
      url: "https://cosmos.explorer.canto.io",
      tx_page: "https://cosmos.explorer.canto.io/transactions/${txHash}",
    },
    {
      kind: "blockscout",
      url: "https://evm.explorer.canto.io/",
      tx_page: "https://evm.explorer.canto.io/tx/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://cosmos-explorers.neobase.one/canto",
      tx_page: "https://cosmos-explorers.neobase.one/canto/tx/${txHash}",
    },
  ],
  carbon: [
    {
      kind: "carbonscan",
      url: "https://scan.carbon.network",
      tx_page: "https://scan.carbon.network/transaction/${txHash}?net=main",
    },
  ],
  cerberus: [
    {
      kind: "skynetexplorers",
      url: "https://skynetexplorers.com/cerberus",
      tx_page: "https://skynetexplorers.com/cerberus/tx/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/cerberus",
      tx_page: "https://ping.pub/cerberus/tx/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/cerberus",
      tx_page: "https://www.mintscan.io/cerberus/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/cerberus/account/${accountAddress}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/cerberus",
      tx_page: "https://atomscan.com/cerberus/transactions/${txHash}",
    },
    {
      kind: "TC Network",
      url: "https://explorer.tcnetwork.io/cerberus",
      tx_page: "https://explorer.tcnetwork.io/cerberus/transaction/${txHash}",
    },
  ],
  chain4energy: [
    {
      kind: "explorer",
      url: "https://explorer.ppnv.space/c4e",
      tx_page: "https://explorer.ppnv.space/c4e/transactions/${txHash}",
    },
    {
      kind: "explorer",
      url: "https://explorer.c4e.io/",
      tx_page: "https://explorer.c4e.io/transactions/${txHash}",
    },
    {
      kind: "NodeStake Explorer",
      url: "https://explorer.nodestake.top/chain4energy",
      tx_page:
        "https://explorer.nodestake.top/chain4energy/transactions/${txHash}",
    },
    {
      kind: "lesnik | UTSA Explorer",
      url: "https://exp.utsa.tech/c4e",
      tx_page: "https://exp.utsa.tech/c4e/tx/${txHash}",
    },
    {
      kind: "Nodeist Explorer",
      url: "https://exp.nodeist.net/m-c4e",
      tx_page: "https://exp.nodeist.net/m-c4e/transactions/${txHash}",
    },
    {
      kind: "BccNodes Explorer",
      url: "https://explorer.bccnodes.com/chain4energy",
      tx_page:
        "https://explorer.bccnodes.com/chain4energy/transactions/${txHash}",
    },
  ],
  cheqd: [
    {
      kind: "bigdipper",
      url: "https://explorer.cheqd.io/",
      tx_page: "https://explorer.cheqd.io/transactions/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/cheqd",
      tx_page: "https://ping.pub/cheqd/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/cheqd",
      tx_page: "https://atomscan.com/cheqd/transactions/${txHash}",
      account_page: "https://atomscan.com/cheqd/accounts/${accountAddress}",
    },
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/cheqd",
      tx_page: "https://ezstaking.tools/cheqd/txs/${txHash}",
      account_page: "https://ezstaking.tools/cheqd/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://look.chillvalidation.com/cheqd",
      tx_page: "https://look.chillvalidation.com/cheqd/tx/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.wildsage.io/cheqd",
      tx_page: "https://ping.wildsage.io/cheqd/tx/${txHash}",
    },
  ],
  chihuahua: [
    {
      kind: "ping.pub",
      url: "https://ping.pub/chihuahua",
      tx_page: "https://ping.pub/chihuahua/tx/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://mintscan.io/chihuahua",
      tx_page: "https://mintscan.io/chihuahua/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/chihuahua/account/${accountAddress}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/chihuahua",
      tx_page: "https://atomscan.com/chihuahua/transactions/${txHash}",
    },
  ],
  chimba: [
    {
      kind: "bigdipper",
      url: "https://explorer.chimba.ooo/",
      tx_page: "https://explorer.chimba.ooo/transactions/${txHash}",
    },
  ],
  chronicnetwork: [
    {
      kind: "skynetexplorers",
      url: "https://www.skynetexplorers.com/chronic-token",
      tx_page: "",
    },
    {
      kind: "Zenscan.io",
      url: "https://www.chronic.zenscan.io",
      tx_page: "",
    },
  ],
  comdex: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/comdex",
      tx_page: "https://ezstaking.tools/comdex/txs/${txHash}",
      account_page: "https://ezstaking.tools/comdex/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/comdex",
      tx_page: "https://www.mintscan.io/comdex/txs/${txHash}",
      account_page: "https://www.mintscan.io/comdex/account/${accountAddress}",
    },
    {
      kind: "aneka",
      url: "https://comdex.aneka.io/",
      tx_page: "https://comdex.aneka.io/txs/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/comdex",
      tx_page: "https://ping.pub/comdex/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/comdex",
      tx_page: "https://atomscan.com/comdex/transactions/${txHash}",
    },
  ],
  commercionetwork: [
    {
      kind: "almerico",
      url: "https://mainnet.commercio.network",
      tx_page:
        "https://mainnet.commercio.network/transactions/detail/${txHash}",
    },
  ],
  cosmoshub: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/cosmoshub",
      tx_page: "https://ezstaking.tools/cosmoshub/txs/${txHash}",
      account_page:
        "https://ezstaking.tools/cosmoshub/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/cosmos",
      tx_page: "https://www.mintscan.io/cosmos/txs/${txHash}",
      account_page: "https://www.mintscan.io/cosmos/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/cosmos",
      tx_page: "https://ping.pub/cosmos/tx/${txHash}",
    },
    {
      kind: "bigdipper",
      url: "https://cosmos.bigdipper.live/",
      tx_page: "https://cosmos.bigdipper.live/transactions/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com",
      tx_page: "https://atomscan.com/transactions/${txHash}",
    },
    {
      kind: "unichain",
      url: "https://unicha.in/cosmos",
      tx_page: "https://unicha.in/cosmos/transaction/${txHash}",
    },
  ],
  crescent: [
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/crescent",
      tx_page: "https://www.mintscan.io/crescent/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/crescent/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/crescent",
      tx_page: "https://ping.pub/crescent/tx/${txHash}",
    },
    {
      kind: "explorers.guru",
      url: "https://crescent.explorers.guru",
      tx_page: "https://crescent.explorers.guru/transaction/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/crescent",
      tx_page: "https://atomscan.com/crescent/transactions/${txHash}",
    },
  ],
  cronos: [
    {
      kind: "cronoscan",
      url: "https://cronoscan.com",
      tx_page: "https://cronoscan.com/tx/${txHash}",
    },
    {
      kind: "crypto.org",
      url: "https://cronos.org/explorer",
      tx_page: "https://cronos.org/explorer/tx/${txHash}",
    },
  ],
  cryptoorgchain: [
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/crypto-org",
      tx_page: "https://www.mintscan.io/crypto-org/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/crypto-org/account/${accountAddress}",
    },
    {
      kind: "crypto.org",
      url: "https://crypto.org/explorer",
      tx_page: "https://crypto.org/explorer/tx/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/crypto-com-chain",
      tx_page: "https://ping.pub/crypto-com-chain/tx/${txHash}",
    },
    {
      kind: "yummy-explorer",
      url: "https://explorer.yummy.capital",
      tx_page: "https://explorer.yummy.capital/txs/${txHash}",
    },
  ],
  cudos: [
    {
      kind: "bigdipper",
      url: "https://explorer.cudos.org/",
      tx_page: "https://explorer.cudos.org/transactions/${txHash}",
      account_page: "https://explorer.cudos.org/accounts/${accountAddress}",
    },
    {
      kind: "cudos-dashboard",
      url: "https://dashboard.cudos.org/",
      tx_page: "https://explorer.cudos.org/transactions/${txHash}",
      account_page: "https://explorer.cudos.org/accounts/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/cudos",
      tx_page: "https://www.mintscan.io/cudos/txs/${txHash}",
      account_page: "https://www.mintscan.io/cudos/account/${accountAddress}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/cudos",
      tx_page: "https://atomscan.com/cudos/transactions/${txHash}",
    },
  ],
  decentr: [
    {
      kind: "decentr.net",
      url: "https://explorer.decentr.net",
      tx_page:
        "https://explorer.decentr.net/transactions/${txHash}?networkId=mainnet",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/decentr/",
      tx_page: "https://ping.pub/decentr/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/decentr",
      tx_page: "https://atomscan.com/decentr/transactions/${txHash}",
    },
  ],
  desmos: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/desmos",
      tx_page: "https://ezstaking.tools/desmos/txs/${txHash}",
      account_page: "https://ezstaking.tools/desmos/account/${accountAddress}",
    },
    {
      kind: "bigdipper",
      url: "https://explorer.desmos.network",
      tx_page: "https://explorer.desmos.network/transactions/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/desmos",
      tx_page: "https://www.mintscan.io/desmos/txs/${txHash}",
      account_page: "https://www.mintscan.io/desmos/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/desmos",
      tx_page: "https://ping.pub/desmos/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/desmos",
      tx_page: "https://atomscan.com/desmos/transactions/${txHash}",
    },
    {
      kind: "TC Network",
      url: "https://explorer.tcnetwork.io/desmos",
      tx_page: "https://explorer.tcnetwork.io/desmos/transaction/${txHash}",
    },
  ],
  dig: [
    {
      kind: "ping.pub",
      url: "https://ping.pub/dig",
      tx_page: "https://ping.pub/dig/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/dig",
      tx_page: "https://atomscan.com/dig/transactions/${txHash}",
    },
    {
      kind: "TC Network",
      url: "https://explorer.tcnetwork.io/dig",
      tx_page: "https://explorer.tcnetwork.io/dig/transaction/${txHash}",
    },
  ],
  dyson: [
    {
      kind: "dysonprotocol",
      url: "https://explorer.dys.dysonprotocol.com/dyson/",
      tx_page: "https://explorer.dys.dysonprotocol.com/dyson/tx/${txHash}",
    },
    {
      kind: "lol",
      url: "https://explorer.dys.dyson.lol",
      tx_page: "https://explorer.dys.dyson.lol/dyson/tx/${txHash}",
    },
  ],
  echelon: [
    {
      kind: "echelon",
      url: "https://app.ech.network/explorer",
      tx_page: "https://app.ech.network/explorer/tx/${txHash}",
    },
    {
      kind: "blockscout",
      url: "https://scout.ech.network",
      tx_page: "https://scout.ech.network/tx/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/echelon",
      tx_page: "https://ping.pub/echelon/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/echelon",
      tx_page: "https://atomscan.com/echelon/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/echelon",
      tx_page: "https://atomscan.com/echelon/transactions/${txHash}",
    },
  ],
  emoney: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/emoney",
      tx_page: "https://ezstaking.tools/emoney/txs/${txHash}",
      account_page: "https://ezstaking.tools/emoney/account/${accountAddress}",
    },
    {
      kind: "bigdipper",
      url: "https://emoney.bigdipper.live/",
      tx_page: "https://emoney.bigdipper.live/transactions/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/emoney",
      tx_page: "https://www.mintscan.io/emoney/txs/${txHash}",
      account_page: "https://www.mintscan.io/emoney/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/e-money",
      tx_page: "https://ping.pub/e-money/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/emoney",
      tx_page: "https://atomscan.com/emoney/transactions/${txHash}",
    },
  ],
  evmos: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/evmos",
      tx_page: "https://ezstaking.tools/evmos/txs/${txHash}",
      account_page: "https://ezstaking.tools/evmos/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/evmos",
      tx_page: "https://www.mintscan.io/evmos/txs/${txHash}",
      account_page: "https://www.mintscan.io/evmos/account/${accountAddress}",
    },
    {
      kind: "bigdipper",
      url: "https://evmos.bigdipper.live",
      tx_page: "https://evmos.bigdipper.live/transactions/${txHash}",
    },
    {
      kind: "blockscout",
      url: "https://evm.evmos.org",
      tx_page: "https://evm.evmos.org/tx/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/evmos",
      tx_page: "https://ping.pub/evmos/tx/${txHash}",
    },
    {
      kind: "explorers.guru",
      url: "https://evmos.explorers.guru",
      tx_page: "https://evmos.explorers.guru/transaction/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/evmos",
      tx_page: "https://atomscan.com/evmos/transactions/${txHash}",
    },
    {
      kind: "tcnetwork",
      url: "https://evmos.tcnetwork.io",
      tx_page: "https://evmos.tcnetwork.io/transaction/${txHash}",
    },
  ],
  fetchhub: [
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/fetchai",
      tx_page: "https://www.mintscan.io/fetchai/txs/${txHash}",
      account_page: "https://www.mintscan.io/fetchai/account/${accountAddress}",
    },
    {
      kind: "bigdipper",
      url: "https://explore-fetchhub.fetch.ai",
      tx_page: "https://explore-fetchhub.fetch.ai/transactions/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/fetchhub",
      tx_page: "https://ping.pub/fetchhub/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/fetchai",
      tx_page: "https://atomscan.com/fetchai/transactions/${txHash}",
    },
    {
      kind: "bigdipper",
      url: "https://fetch-explorer.teasel.org",
      tx_page: "https://fetch-explorer.teasel.org/transactions/${txHash}",
    },
  ],
  firmachain: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/firmachain",
      tx_page: "https://ezstaking.tools/firmachain/txs/${txHash}",
      account_page:
        "https://ezstaking.tools/firmachain/account/${accountAddress}",
    },
    {
      kind: "bigdipper",
      url: "https://explorer.firmachain.dev",
      tx_page: "https://explorer.firmachain.dev/transactions/${txHash}",
    },
    {
      kind: "explorer.ChainTools",
      url: "https://explorer.chaintools.tech/firmachain",
      tx_page: "https://explorer.chaintools.tech/firmachain/tx/${txHash}",
    },
  ],
  galaxy: [
    {
      kind: "ping.pub",
      url: "https://explorer.postcapitalist.io/Galaxy",
      tx_page: "https://explorer.postcapitalist.io/Galaxy/tx/${txHash}",
    },
  ],
  genesisl1: [
    {
      kind: "ping.pub",
      url: "https://ping.pub/genesisL1",
      tx_page: "https://ping.pub/genesisL1/tx/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://exp.utsa.tech/genesis",
      tx_page: "https://exp.utsa.tech/genesis/tx/${txHash}",
    },
    {
      kind: "ATOMScan",
      url: "https://atomscan.com/genesisl1",
      tx_page: "https://atomscan.com/genesisl1/transactions/${txHash}",
    },
  ],
  gravitybridge: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/gravitybridge",
      tx_page: "https://ezstaking.tools/gravitybridge/txs/${txHash}",
      account_page:
        "https://ezstaking.tools/gravitybridge/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/gravity-bridge",
      tx_page: "https://www.mintscan.io/gravity-bridge/${txHash}",
      account_page:
        "https://www.mintscan.io/gravity-bridge/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/gravity-bridge",
      tx_page: "https://ping.pub/gravity-bridge/tx/${txHash}",
    },
    {
      kind: "explorers.guru",
      url: "https://gravity.explorers.guru",
      tx_page: "https://gravity.explorers.guru/transaction/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/gravity-bridge",
      tx_page: "https://atomscan.com/gravity-bridge/transactions/${txHash}",
    },
    {
      kind: "TC Network",
      url: "https://explorer.tcnetwork.io/gravitybridge",
      tx_page:
        "https://explorer.tcnetwork.io/gravitybridge/transaction/${txHash}",
    },
  ],
  idep: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/idep",
      tx_page: "https://ezstaking.tools/idep/txs/${txHash}",
      account_page: "https://ezstaking.tools/idep/account/${accountAddress}",
    },
    {
      kind: "chadscan",
      url: "https://chadscan.com",
      tx_page: "https://chadscan.com/transactions/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/idep",
      tx_page: "https://atomscan.com/idep/transactions/${txHash}",
    },
    {
      kind: "TC Network",
      url: "https://explorer.tcnetwork.io/idep",
      tx_page: "https://explorer.tcnetwork.io/idep/transaction/${txHash}",
    },
  ],
  impacthub: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/ixo",
      tx_page: "https://ezstaking.tools/ixo/txs/${txHash}",
      account_page: "https://ezstaking.tools/ixo/account/${accountAddress}",
    },
    {
      kind: "bigdipper",
      url: "https://blockscan.ixo.world",
      tx_page: "https://blockscan.ixo.world/transactions/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/ixo",
      tx_page: "https://ping.pub/ixo/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/ixo",
      tx_page: "https://atomscan.com/ixo/transactions/${txHash}",
    },
    {
      kind: "Mintscan",
      url: "https://www.mintscan.io/ixo",
      tx_page: "https://www.mintscan.io/ixo/txs/${txHash}",
    },
  ],
  imversed: [
    {
      kind: "blockscout",
      url: "https://txe.imversed.network/",
      tx_page: "https://txe.imversed.network/tx/${txHash}",
    },
  ],
  injective: [
    {
      kind: "injectiveprotocol",
      url: "https://explorer.injective.network/",
      tx_page: "https://explorer.injective.network/transaction/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/injective",
      tx_page: "https://ping.pub/injective/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/injective",
      tx_page: "https://atomscan.com/injective/transactions/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/injective",
      tx_page: "https://www.mintscan.io/injective/${txHash}",
      account_page:
        "https://www.mintscan.io/injective/account/${accountAddress}",
    },
  ],
  irisnet: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/irisnet",
      tx_page: "https://ezstaking.tools/irisnet/txs/${txHash}",
      account_page: "https://ezstaking.tools/irisnet/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/iris",
      tx_page: "https://www.mintscan.io/iris/txs/${txHash}",
      account_page: "https://www.mintscan.io/iris/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/iris-network",
      tx_page: "https://ping.pub/iris-network/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/iris-network",
      tx_page: "https://atomscan.com/iris-network/transactions/${txHash}",
    },
  ],
  jackal: [
    {
      kind: "ping.pub",
      url: "https://ping.pub/jackal",
      tx_page: "https://ping.pub/jackal/tx/${txHash}",
    },
    {
      kind: "NodeStake",
      url: "https://explorer.nodestake.top/jackal",
      tx_page: "https://explorer.nodestake.top/jackal/tx/${txHash}",
    },
    {
      kind: "lesnik | UTSA",
      url: "https://exp.utsa.tech/jackal",
      tx_page: "https://exp.utsa.tech/jackal/tx/${txHash}",
    },
    {
      kind: "Nodeist Explorer",
      url: "https://exp.nodeist.net/jackal",
      tx_page: "https://exp.nodeist.net/jackal/tx/${txHash}",
    },
  ],
  juno: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/juno",
      tx_page: "https://ezstaking.tools/juno/txs/${txHash}",
      account_page: "https://ezstaking.tools/juno/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/juno",
      tx_page: "https://ping.pub/juno/tx/${txHash}",
    },
    {
      kind: "explorers.guru",
      url: "https://juno.explorers.guru",
      tx_page: "https://juno.explorers.guru/transaction/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/juno",
      tx_page: "https://www.mintscan.io/juno/txs/${txHash}",
      account_page: "https://www.mintscan.io/juno/account/${accountAddress}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/juno",
      tx_page: "https://atomscan.com/juno/transactions/${txHash}",
    },
  ],
  kava: [
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/kava",
      tx_page: "https://www.mintscan.io/kava/txs/${txHash}",
      account_page: "https://www.mintscan.io/kava/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/kava",
      tx_page: "https://ping.pub/kava/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/kava",
      tx_page: "https://atomscan.com/kava/transactions/${txHash}",
    },
  ],
  kichain: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/kichain",
      tx_page: "https://ezstaking.tools/kichain/txs/${txHash}",
      account_page: "https://ezstaking.tools/kichain/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/ki-chain",
      tx_page: "https://www.mintscan.io/ki-chain/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/ki-chain/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/kichain",
      tx_page: "https://ping.pub/kichain/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/ki-chain",
      tx_page: "https://atomscan.com/ki-chain/transactions/${txHash}",
    },
  ],
  konstellation: [
    {
      kind: "konstellation",
      url: "https://explorer.konstellation.tech/",
      tx_page: "https://explorer.konstellation.tech/tx/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/konstellation",
      tx_page: "https://www.mintscan.io/konstellation/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/konstellation/account/${accountAddress}",
    },
  ],
  kujira: [
    {
      kind: "kujira",
      url: "https://finder.kujira.app",
      tx_page: "https://finder.kujira.app/kaiyo-1/tx/${txHash}",
    },
    {
      kind: "explorers.guru",
      url: "https://kujira.explorers.guru",
      tx_page: "https://kujira.explorers.guru/transaction/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/kujira",
      tx_page: "https://atomscan.com/kujira/transactions/${txHash}",
    },
    {
      kind: "Nodeist Explorer",
      url: "https://exp.nodeist.net/M-Kujira",
      tx_page: "https://exp.nodeist.net/M-Kujira/transactions/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/kujira",
      tx_page: "https://www.mintscan.io/kujira/txs/${txHash}",
      account_page: "https://www.mintscan.io/kujira/account/${accountAddress}",
    },
  ],
  lambda: [
    {
      kind: "blockscout",
      url: "https://explorer.lambda.im/",
      tx_page: "https://explorer.lambda.im/tx/${txHash}",
    },
    {
      kind: "NodeStake",
      url: "https://explorer.nodestake.top/lambda",
      tx_page: "https://explorer.nodestake.top/lambda/txs/${txHash}",
    },
  ],
  likecoin: [
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/likecoin",
      tx_page: "https://www.mintscan.io/likecoin/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/likecoin/account/${accountAddress}",
    },
    {
      kind: "bigdipper",
      url: "https://likecoin.bigdipper.live/",
      tx_page: "https://likecoin.bigdipper.live/transactions/${txHash}",
    },
    {
      kind: "lunie-ng",
      url: "https://stake.like.co/",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/likecoin",
      tx_page: "https://ping.pub/likecoin/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/likecoin",
      tx_page: "https://atomscan.com/likecoin/transactions/${txHash}",
    },
  ],
  loyal: [
    {
      kind: "Loyal explorer",
      url: "https://pingpub.joinloyal.io/loyal",
      tx_page: "https://pingpub.joinloyal.io/loyal/tx/${txHash}",
    },
    {
      kind: "Nodeist Explorer",
      url: "https://exp.nodeist.net/m-loyal",
      tx_page: "https://exp.nodeist.net/m-loyal/tx/${txHash}",
    },
    {
      kind: "TC Network",
      url: "https://explorer.tcnetwork.io/loyal",
      tx_page: "https://explorer.tcnetwork.io/loyal/transaction/${txHash}",
    },
  ],
  lumenx: [
    {
      kind: "ping.pub",
      url: "https://explorer.chaintools.tech/lumenx",
      tx_page: "https://explorer.chaintools.tech/lumenx/tx/${txHash}",
    },
  ],
  lumnetwork: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/lumnetwork",
      tx_page: "https://ezstaking.tools/lumnetwork/txs/${txHash}",
      account_page:
        "https://ezstaking.tools/lumnetwork/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/lum",
      tx_page: "https://www.mintscan.io/lum/txs/${txHash}",
      account_page: "https://www.mintscan.io/lum/account/${accountAddress}",
    },
    {
      kind: "lum-network",
      url: "https://explorer.lum.network",
      tx_page: "https://explorer.lum.network/txs/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/lum-network",
      tx_page: "https://ping.pub/lum-network/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/lum-network",
      tx_page: "https://atomscan.com/lum-network/transactions/${txHash}",
    },
  ],
  mars: [
    {
      kind: "BigDipper",
      url: "https://explorer.marsprotocol.io",
      tx_page: "https://explorer.marsprotocol.io/transactions/${txHash}",
      account_page:
        "https://explorer.marsprotocol.io/accounts/${accountAddress}",
    },
    {
      kind: "NodeStake Explorer",
      url: "https://explorer.nodestake.top/mars",
      tx_page: "https://explorer.nodestake.top/mars/transactions/${txHash}",
      account_page:
        "https://explorer.nodestake.top/mars/account/${accountAddress}",
    },
    {
      kind: "Nodeist Explorer",
      url: "https://exp.nodeist.net/m-mars",
      tx_page: "https://exp.nodeist.net/m-mars/tx/${txHash}",
      account_page: "https://exp.nodeist.net/m-mars/account/${accountAddress}",
    },
    {
      kind: "Nodes.Guru",
      url: "https://mars.explorers.guru/",
      tx_page: "https://mars.explorers.guru/transaction/${txHash}",
      account_page: "https://mars.explorers.guru/account/${accountAddress}",
    },
    {
      kind: "MintScan",
      url: "https://www.mintscan.io/mars-protocol",
      tx_page: "https://www.mintscan.io/mars-protocol/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/mars-protocol/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/mars",
      tx_page: "https://ping.pub/mars/tx/${txHash}",
      account_page: "https://ping.pub/mars/account/${accountAddress}",
    },
  ],
  medasdigital: [
    {
      kind: "Mintscan",
      url: "https://www.mintscan.io/medasdigital",
      tx_page: "https://www.mintscan.io/medasdigital/txs/${txHash}",
    },
  ],
  meme: [
    {
      kind: "ping.pub",
      url: "https://ping.pub/meme",
      tx_page: "https://ping.pub/meme/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/meme",
      tx_page: "https://atomscan.com/meme/transactions/${txHash}",
      account_page: "https://atomscan.com/meme/accounts/${accountAddress}",
    },
    {
      kind: "MEME Explorer",
      url: "https://explorer.meme.sx/meme",
      tx_page: "https://explorer.meme.sx/meme/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/meme",
      tx_page: "https://atomscan.com/meme/transactions/${txHash}",
    },
    {
      kind: "Brochain",
      url: "https://explorer.brocha.in/meme",
      tx_page: "https://explorer.brocha.in/meme/tx/${txHash}",
    },
  ],
  microtick: [
    {
      kind: "ping.pub",
      url: "https://ping.pub/microtick",
      tx_page: "https://ping.pub/microtick/tx/${txHash}",
    },
  ],
  migaloo: [
    {
      kind: "Silk Nodes",
      url: "https://explorer.silknodes.io/whitewhale",
      tx_page: "https://explorer.silknodes.io/whitewhale/tx/${txhash}",
      account_page:
        "https://explorer.silknodes.io/whitewhale/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/migaloo",
      tx_page: "https://ping.pub/migaloo/tx/${txHash}",
    },
  ],
  mises: [
    {
      kind: "Mises-GW Explorer",
      url: "https://gw.mises.site",
      tx_page: "https://gw.mises.site/tx/${txHash}",
    },
    {
      kind: "Jambulmerah ping.pub based",
      url: "https://explorer.jambulmerah.dev/mises",
      tx_page: "https://explorer.jambulmerah.dev/mises/tx/${txHash}",
    },
  ],
  nyx: [
    {
      kind: "Nodes Guru explorer",
      url: "https://nym.explorers.guru/",
      tx_page: "https://nym.explorers.guru/transaction/${txHash}",
      account_page: "https://nym.explorers.guru/account/${accountAddress}",
    },
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/nyx",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/nyx",
      tx_page: "https://www.mintscan.io/nyx/txs/${txHash}",
      account_page: "https://www.mintscan.io/nyx/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/nyx",
      tx_page: "https://ping.pub/nyx/tx/${txHash}",
    },
  ],
  octa: [
    {
      kind: "Octa explorer",
      url: "http://explorer.octa-coin.com/",
      tx_page: "http://explorer.octa-coin.com/txs/${txHash}",
    },
  ],
  odin: [
    {
      kind: "odin web",
      url: "https://mainnet.odinprotocol.io/",
      tx_page: "https://mainnet.odinprotocol.io/transactions/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/odin",
      tx_page: "https://ping.pub/odin/tx/${txHash}",
    },
  ],
  okexchain: [
    {
      kind: "OKLink",
      url: "https://www.oklink.com/en/okc",
      tx_page: "https://www.oklink.com/en/okc/tx/${txHash}",
      account_page: "https://www.oklink.com/en/okc/address/${accountAddress}",
    },
  ],
  omniflixhub: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/omniflixhub",
      tx_page: "https://ezstaking.tools/omniflixhub/txs/${txHash}",
      account_page:
        "https://ezstaking.tools/omniflixhub/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/omniflix",
      tx_page: "https://www.mintscan.io/omniflix/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/omniflix/account/${accountAddress}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/omniflixhub",
      tx_page: "https://atomscan.com/omniflixhub/transactions/${txHash}",
    },
  ],
  onomy: [
    {
      kind: "Big Dipper",
      url: "https://explorer.onomy.io",
      tx_page: "https://explorer.onomy.io/transactions/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/onomy-protocol",
      tx_page: "https://www.mintscan.io/onomy-protocol/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/onomy-protocol/account/${accountAddress}",
    },
  ],
  oraichain: [
    {
      kind: "oraiscan",
      url: "https://scan.orai.io",
      tx_page: "https://scan.orai.io/txs/${txHash}",
    },
  ],
  osmosis: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/osmosis",
      tx_page: "https://ezstaking.tools/osmosis/txs/${txHash}",
      account_page: "https://ezstaking.tools/osmosis/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/osmosis",
      tx_page: "https://www.mintscan.io/osmosis/txs/${txHash}",
      account_page: "https://www.mintscan.io/osmosis/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/osmosis",
      tx_page: "https://ping.pub/osmosis/tx/${txHash}",
    },
    {
      kind: "explorers.guru",
      url: "https://osmosis.explorers.guru",
      tx_page: "https://osmosis.explorers.guru/transaction/${txHash}",
      account_page: "https://osmosis.explorers.guru/account/${accountAddress}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/osmosis",
      tx_page: "https://atomscan.com/osmosis/transactions/${txHash}",
    },
  ],
  panacea: [
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/medibloc",
      tx_page: "https://www.mintscan.io/medibloc/txs/${txHash}",
    },
    {
      kind: "bigdipper",
      url: "https://explorer.gopanacea.org",
      tx_page: "https://explorer.gopanacea.org/transactions/${txHash}",
    },
  ],
  passage: [
    {
      kind: "aneka",
      url: "https://passage.aneka.io",
      tx_page: "https://passage.aneka.io/txs/${txHash}",
      account_page: "https://passage.aneka.io/accounts/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/passage",
      tx_page: "https://www.mintscan.io/passage/txs/${txHash}",
      account_page: "https://www.mintscan.io/passage/account/${accountAddress}",
    },
  ],
  persistence: [
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/persistence",
      tx_page: "https://www.mintscan.io/persistence/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/persistence/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/persistence",
      tx_page: "https://ping.pub/persistence/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/persistence",
      tx_page: "https://atomscan.com/persistence/transactions/${txHash}",
    },
  ],
  planq: [
    {
      kind: "bigdipper",
      url: "https://explorer.planq.network",
      tx_page: "https://explorer.planq.network/transactions/${txHash}",
    },
    {
      kind: "blockscout",
      url: "https://evm.planq.network",
      tx_page: "https://evm.planq.network/tx/${txHash}",
    },
    {
      kind: "NodeStake Explorer",
      url: "https://explorer.nodestake.top/planq",
      tx_page: "https://explorer.nodestake.top/planq/tx/${txHash}",
    },
    {
      kind: "TC Network",
      url: "https://explorer.tcnetwork.io/planq",
      tx_page: "https://explorer.tcnetwork.io/planq/transaction/${txHash}",
    },
    {
      kind: "Enodex",
      url: "https://explorer.enodex.lol/planq",
      tx_page: "https://explorer.enodex.lol/planq/tx/${txHash}",
    },
  ],
  point: [
    {
      kind: "blockscout",
      url: "https://explorer.pointnetwork.io/",
      tx_page: "https://explorer.pointnetwork.io/tx/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://cosmos.pointnetwork.io/",
      tx_page: "https://cosmos.pointnetwork.io/point/tx/${txHash}",
    },
  ],
  provenance: [
    {
      kind: "provenance",
      url: "https://explorer.provenance.io",
      tx_page: "https://explorer.provenance.io/tx/${txHash}",
    },
    {
      kind: "bigdipper",
      url: "https://bigdipper.provenance.io",
      tx_page: "https://bigdipper.provenance.io/transactions/${txHash}",
    },
    {
      kind: "hubble",
      url: "https://hubble.figment.io/provenance/chains/pio-mainnet-1",
      tx_page:
        "https://hubble.figment.io/provenance/chains/pio-mainnet-1/${block}/transactions/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/provenance",
      tx_page: "https://ping.pub/provenance/tx/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/provenance",
      tx_page: "https://www.mintscan.io/provenance/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/provenance/account/${accountAddress}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/provenance",
      tx_page: "https://atomscan.com/provenance/transactions/${txHash}",
    },
  ],
  quicksilver: [
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/quicksilver",
      tx_page: "https://www.mintscan.io/quicksilver/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/quicksilver/account/${accountAddress}",
    },
    {
      kind: "UTSA explorer",
      url: "https://exp.utsa.tech/quicksilver",
      tx_page: "https://exp.utsa.tech/quicksilver/tx/${txHash}",
    },
    {
      kind: "Nodeist Explorer",
      url: "https://exp.nodeist.net/M-Quicksilver",
      tx_page: "https://exp.nodeist.net/M-Quicksilver/transactions/${txHash}",
    },
    {
      kind: "bigdipper",
      url: "https://bigdipper.live/quicksilver",
      tx_page: "https://bigdipper.live/quicksilvertransactions/${txHash}",
      account_page:
        "https://bigdipper.live/quicksilveraccounts/${accountAddress}",
    },
  ],
  rebus: [
    {
      kind: "explorers.guru",
      url: "https://rebus.explorers.guru",
      tx_page: "https://rebus.explorers.guru/transaction/${txHash}",
    },
    {
      kind: "NodeStake",
      url: "https://explorer.nodestake.top/rebus",
      tx_page: "https://explorer.nodestake.top/rebus/tx/${txHash}",
    },
    {
      kind: "Nodeist Explorer",
      url: "https://exp.nodeist.net/M-Rebus",
      tx_page: "https://exp.nodeist.net/M-Rebus/tx/${txHash}",
    },
    {
      kind: "Brochain",
      url: "https://explorer.brocha.in/rebus",
      tx_page: "https://explorer.brocha.in/rebus/tx/${txHash}",
    },
    {
      kind: "tcnetwork",
      url: "https://rebus.tcnetwork.io",
      tx_page: "https://rebus.tcnetwork.io/transaction/${txHash}",
    },
  ],
  regen: [
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/regen",
      tx_page: "https://www.mintscan.io/regen/txs/${txHash}",
      account_page: "https://www.mintscan.io/regen/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/regen",
      tx_page: "https://ping.pub/regen/tx/${txHash}",
    },
    {
      kind: "bigdipper",
      url: "https://regen.bigdipper.live/",
      tx_page: "https://regen.bigdipper.live/transactions/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/regen-network",
      tx_page: "https://atomscan.com/regen-network/transactions/${txHash}",
    },
  ],
  rizon: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/rizon",
      tx_page: "https://ezstaking.tools/rizon/txs/${txHash}",
      account_page: "https://ezstaking.tools/rizon/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/rizon",
      tx_page: "https://www.mintscan.io/rizon/txs/${txHash}",
      account_page: "https://www.mintscan.io/rizon/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/rizon",
      tx_page: "https://ping.pub/rizon/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/rizon",
      tx_page: "https://atomscan.com/rizon/transactions/${txHash}",
    },
  ],
  secretnetwork: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/secretnetwork",
      tx_page: "https://ezstaking.tools/secretnetwork/txs/${txHash}",
      account_page:
        "https://ezstaking.tools/secretnetwork/account/${accountAddress}",
    },
    {
      kind: "secret nodes",
      url: "https://secretnodes.com/secret/chains/secret-4",
      tx_page:
        "https://secretnodes.com/secret/chains/secret-4/transactions/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/secret",
      tx_page: "https://ping.pub/secret/tx/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/secret",
      tx_page: "https://www.mintscan.io/secret/txs/${txHash}",
      account_page: "https://www.mintscan.io/secret/account/${accountAddress}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/secret-network",
      tx_page: "https://atomscan.com/secret-network/transactions/${txHash}",
    },
  ],
  sentinel: [
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/sentinel",
      tx_page: "https://www.mintscan.io/sentinel/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/sentinel/account/${accountAddress}",
    },
  ],
  shareledger: [
    {
      kind: "big dipper",
      url: "https://explorer.shareri.ng",
      tx_page: "https://explorer.shareri.ng/transactions/${txHash}",
      account_page: "https://explorer.shareri.ng/accounts/${accountAddress}",
    },
  ],
  shentu: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/shentu",
      tx_page: "https://ezstaking.tools/shentu/txs/${txHash}",
      account_page: "https://ezstaking.tools/shentu/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/shentu",
      tx_page: "https://www.mintscan.io/shentu/txs/${txHash}",
      account_page: "https://www.mintscan.io/shentu/account/${accountAddress}",
    },
    {
      kind: "Shentu Explorer",
      url: "https://explorer.shentu.technology/?net=shentu-2.2",
      tx_page:
        "https://explorer.shentu.technology/transactions/${txHash}?net=shentu-2.2",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/shentu",
      tx_page: "https://ping.pub/shentu/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/certik",
      tx_page: "https://atomscan.com/certik/transactions/${txHash}",
    },
  ],
  sifchain: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/sifchain",
      tx_page: "https://ezstaking.tools/sifchain/txs/${txHash}",
      account_page:
        "https://ezstaking.tools/sifchain/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/sifchain",
      tx_page: "https://ping.pub/sifchain/tx/${txHash}",
    },
    {
      kind: "explorers.guru",
      url: "https://sifchain.explorers.guru",
      tx_page: "https://sifchain.explorers.guru/transaction/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/sifchain",
      tx_page: "https://www.mintscan.io/sifchain/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/sifchain/account/${accountAddress}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/sifchain",
      tx_page: "https://atomscan.com/sifchain/transactions/${txHash}",
    },
  ],
  sommelier: [
    {
      kind: "sommscan",
      url: "https://sommscan.io",
      tx_page: "https://sommscan.io",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/sommelier",
      tx_page: "https://www.mintscan.io/sommelier/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/sommelier/account/${accountAddress}",
    },
  ],
  stafihub: [
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/stafi",
      tx_page: "https://www.mintscan.io/stafi/txs/${txHash}",
    },
    {
      kind: "ping-pub",
      url: "https://ping.pub/stafihub",
      tx_page: "https://ping.pub/stafihub/tx/${txHash}",
    },
  ],
  stargaze: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/stargaze",
      tx_page: "https://ezstaking.tools/stargaze/txs/${txHash}",
      account_page:
        "https://ezstaking.tools/stargaze/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/stargaze/",
      tx_page: "https://www.mintscan.io/stargaze/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/stargaze/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/stargaze",
      tx_page: "https://ping.pub/stargaze/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/stargaze",
      tx_page: "https://atomscan.com/stargaze/transactions/${txHash}",
    },
  ],
  starname: [
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/starname",
      tx_page: "https://www.mintscan.io/starname/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/starname/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/starname",
      tx_page: "https://ping.pub/starname/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/starname",
      tx_page: "https://atomscan.com/starname/transactions/${txHash}",
    },
  ],
  stride: [
    {
      kind: "Apollo",
      url: "https://apollo.chandrastation.com/stride",
      tx_page: "https://apollo.chandrastation.com/stride/tx/${txHash}",
      account_page:
        "https://apollo.chandrastation.com/stride/account/${accountAddress}",
    },
    {
      kind: "Stride Ping Pub",
      url: "https://explorer.stride.zone/stride",
      tx_page: "https://explorer.stride.zone/stride/tx/${txHash}",
      account_page:
        "https://explorer.stride.zone/stride/account/${accountAddress}",
    },
    {
      kind: "Nodeist Explorer",
      url: "https://exp.nodeist.net/Stride",
      tx_page: "https://exp.nodeist.net/Stride/tx/${txHash}",
      account_page: "https://exp.nodeist.net/Stride/account/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/stride",
      tx_page: "https://www.mintscan.io/stride/txs/${txHash}",
      account_page: "https://www.mintscan.io/stride/account/${accountAddress}",
    },
  ],
  teritori: [
    {
      kind: "EZStaking Tools",
      url: "https://ezstaking.tools/teritori",
      tx_page: "https://ezstaking.tools/teritori/txs/${txHash}",
      account_page:
        "https://ezstaking.tools/teritori/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://explorer.teritori.com/teritori",
      tx_page: "https://explorer.teritori.com/teritori/tx/${txHash}",
    },
    {
      kind: "guru",
      url: "https://teritori.explorers.guru/",
      tx_page: "https://teritori.explorers.guru/transaction/${txHash}",
    },
    {
      kind: "Nodeist",
      url: "https://exp.nodeist.net",
      tx_page: "https://exp.nodeist.net/M-Teritori/tx/${txHash}",
    },
    {
      kind: "Brochain",
      url: "https://explorer.brocha.in/teritori",
      tx_page: "https://explorer.brocha.in/teritori/tx/${txHash}",
    },
    {
      kind: "lesnik | UTSA",
      url: "https://exp.utsa.tech/teritori",
      tx_page: "https://exp.utsa.tech/teritori/tx/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/teritori",
      tx_page: "https://www.mintscan.io/teritori/txs/${txHash}",
      account_page:
        "https://www.mintscan.io/teritori/account/${accountAddress}",
    },
    {
      kind: "TC Network",
      url: "https://explorer.tcnetwork.io/teritori",
      tx_page: "https://explorer.tcnetwork.io/teritori/transaction/${txHash}",
    },
  ],
  terra: [
    {
      kind: "ping.pub",
      url: "https://ping.pub/terra-luna",
      tx_page: "https://ping.pub/terra-luna/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/terra",
      tx_page: "https://atomscan.com/terra/transactions/${txHash}",
    },
  ],
  terra2: [
    {
      kind: "finder",
      url: "http://finder.terra.money/",
      tx_page: "https://finder.terra.money/mainnet/tx/${txHash}",
    },
  ],
  tgrade: [
    {
      kind: "aneka",
      url: "https://tgrade.aneka.io",
      tx_page: "https://tgrade.aneka.io/txs/${txHash}",
      account_page: "https://tgrade.aneka.io/accounts/${accountAddress}",
    },
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/tgrade",
      tx_page: "https://www.mintscan.io/tgrade/txs/${txHash}",
      account_page: "https://www.mintscan.io/tgrade/account/${accountAddress}",
    },
  ],
  thorchain: [
    {
      kind: "THORChain explorer",
      url: "https://thorchain.net",
      tx_page: "https://thorchain.net/#/txs/${txHash}",
    },
    {
      kind: "viewblock",
      url: "https://viewblock.io/thorchain",
      tx_page: "https://viewblock.io/thorchain/tx/${txHash}",
    },
  ],
  umee: [
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/umee/",
      tx_page: "https://www.mintscan.io/umee/txs/${txHash}",
      account_page: "https://www.mintscan.io/umee/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/umee",
      tx_page: "https://ping.pub/umee/tx/${txHash}",
    },
    {
      kind: "explorers.guru",
      url: "https://umee.explorers.guru",
      tx_page: "https://umee.explorers.guru/transaction/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/umee",
      tx_page: "https://atomscan.com/umee/transactions/${txHash}",
    },
  ],
  unification: [
    {
      kind: "bigdipper",
      url: "https://explorer.unification.io/",
      tx_page: "https://explorer.unification.io/transactions/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://explorer.unification.chainmasters.ninja/unification",
      tx_page:
        "https://explorer.unification.chainmasters.ninja/unification/tx/${txHash}",
    },
  ],
  vidulum: [
    {
      kind: "ping.pub",
      url: "https://explorers.vidulum.app/vidulum",
      tx_page: "https://explorers.vidulum.app/vidulum/tx/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://ping.pub/vidulum",
      tx_page: "https://ping.pub/vidulum/tx/${txHash}",
    },
    {
      kind: "atomscan",
      url: "https://atomscan.com/vidulum",
      tx_page: "https://atomscan.com/vidulum/transactions/${txHash}",
    },
  ],
};

export const testnetChainExplorers = {
  axelar: [
    {
      kind: "axelarscan",
      url: "https://testnet.axelarscan.io",
      tx_page: "https://testnet.axelarscan.io/tx/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://testnet.mintscan.io/axelar-testnet",
      tx_page: "https://testnet.mintscan.io/axelar-testnet/txs/${txHash}",
      account_page:
        "https://testnet.mintscan.io/axelar-testnet/account/${accountAddress}",
    },
  ],
  cheqd: [
    {
      kind: "bigdipper",
      url: "https://testnet-explorer.cheqd.io/",
      tx_page: "https://testnet-explorer.cheqd.io/transactions/${txHash}",
    },
  ],
  cosmoshub: [
    {
      kind: "Big Dipper",
      url: "https://explorer.theta-testnet.polypore.xyz/",
      tx_page:
        "https://explorer.theta-testnet.polypore.xyz/transactions/${txHash}",
    },
  ],
  cudos: [
    {
      kind: "bigdipper-testnet",
      url: "https://explorer.testnet.cudos.org/",
      tx_page: "https://explorer.testnet.cudos.org/transactions/${txHash}",
      account_page:
        "https://explorer.testnet.cudos.org/accounts/${accountAddress}",
    },
  ],
  evmos: [
    {
      kind: "Mintscan",
      url: "https://testnet.mintscan.io/evmos-testnet",
      tx_page: "https://testnet.mintscan.io/evmos-testnet/txs/${txHash}",
    },
    {
      kind: "NodesGuru",
      url: "https://testnet.evmos.explorers.guru/",
      tx_page: "https://testnet.evmos.explorers.guru/transaction/${txHash}",
    },
  ],
  impacthub: [
    {
      kind: "bigdipper",
      url: "https://blockscan-pandora.ixo.earth",
      tx_page: "https://blockscan-pandora.ixo.earth/transactions/${txHash}",
      account_page:
        "https://blockscan-pandora.ixo.earth/account/${accountAddress}",
    },
  ],
  imversed: [
    {
      kind: "Big Dipper",
      url: "https://tex-s.imversed.com",
      tx_page: "https://tex-s.imversed.com/transactions/${txHash}",
    },
  ],
  jackal: [
    {
      kind: "ping.pub",
      url: "https://ping.pub/jackal",
      tx_page: "https://ping.pub/jackal/tx/${txHash}",
    },
  ],
  juno: [
    {
      kind: "EZStaking Tools",
      url: "https://testnet.ezstaking.tools/juno-testnet",
      tx_page: "https://testnet.ezstaking.tools/juno-testnet/txs/${txHash}",
      account_page:
        "https://testnet.ezstaking.tools/juno-testnet/account/${accountAddress}",
    },
    {
      kind: "Mintscan",
      url: "https://testnet.mintscan.io/juno-testnet",
      tx_page: "https://testnet.mintscan.io/juno-testnet/txs/${txHash}",
    },
    {
      kind: "NodesGuru",
      url: "https://testnet.juno.explorers.guru/",
      tx_page: "https://testnet.juno.explorers.guru/transaction/${txHash}",
    },
  ],
  kichain: [
    {
      kind: "kifoundation",
      url: "https://kichain-t-4.blockchain.ki/",
      tx_page: "https://kichain-t-4.blockchain.ki/transactions/${txHash}",
    },
  ],
  kujira: [
    {
      kind: "explorers.guru",
      url: "https://kujira.explorers.guru",
      tx_page: "https://kujira.explorers.guru/transaction/${txHash}",
    },
  ],
  mars: [
    {
      kind: "Mars Protocol",
      url: "https://testnet-explorer.marsprotocol.io",
      tx_page:
        "https://testnet-explorer.marsprotocol.io/transactions/${txHash}",
    },
    {
      kind: "Nodeist Explorer",
      url: "https://exp.nodeist.net/t-mars/",
      tx_page: "https://exp.nodeist.net/t-mars/transactions/${txHash}",
    },
  ],
  persistence: [
    {
      kind: "ping.pub",
      url: "https://testnet.ping.pub/test-core-1/",
      tx_page: "https://testnet.ping.pub/test-core-1/tx/${txHash}",
    },
    {
      kind: "mintscan",
      url: "https://testnet.mintscan.io/persistence-testnet",
      tx_page: "https://testnet.mintscan.io/persistence-testnet/txs/${txHash}",
      account_page:
        "https://testnet.mintscan.io/persistence-testnet/account/${accountAddress}",
    },
  ],
  quicksilver: [
    {
      kind: "explorers.guru",
      url: "https://testnet.quicksilver.explorers.guru",
      tx_page:
        "https://testnet.quicksilver.explorers.guru/transaction/${txHash}",
      account_page:
        "https://testnet.quicksilver.explorers.guru/account/${accountAddress}",
    },
  ],
  secretnetwork: [
    {
      kind: "secret nodes",
      url: "https://secretnodes.com/secret/chains/pulsar-2",
      tx_page:
        "https://secretnodes.com/secret/chains/pulsar-2/transactions/${txHash}",
    },
    {
      kind: "ping.pub",
      url: "https://testnet.ping.pub/secret",
      tx_page: "https://testnet.ping.pub/secret/tx/${txHash}",
    },
  ],
  stargaze: [
    {
      kind: "ping.pub",
      url: "https://testnet-explorer.publicawesome.dev/stargaze",
      tx_page:
        "https://testnet-explorer.publicawesome.dev/stargaze/tx/${txHash}",
    },
  ],
  stride: [
    {
      kind: "PingPub",
      url: "https://testnet.ping.pub/stride",
      tx_page: "https://testnet.ping.pub/stride/tx/${txHash}",
    },
  ],
};

export const devnetChainExplorers = {
  impacthub: [
    {
      kind: "bigdipper",
      url: "https://devnet-blockscan.ixo.earth",
      tx_page: "https://devnet-blockscan.ixo.earth/transactions/${txHash}",
      account_page:
        "https://devnet-blockscan.ixo.earth/account/${accountAddress}",
    },
  ],
};
