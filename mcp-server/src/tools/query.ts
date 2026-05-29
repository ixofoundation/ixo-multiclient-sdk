import { fromUtf8, toUtf8 } from "@cosmjs/encoding";
import { z } from "zod";
import { getQueryClient, getStargateClient } from "../clients";
import { describeCoins, errorResult, textResult } from "../utils/format";
import { defineTool } from "../utils/tool";

export const queryTools = [
  defineTool({
    name: "ixo_network_info",
    description:
      "Get the IXO network the server is connected to: network name, chain id, RPC endpoint, native denom, gas price, and the current block height.",
    inputSchema: {},
    handler: async (_args, { config }) => {
      const stargate = await getStargateClient(config.rpcUrl);
      const [height, chainId] = await Promise.all([
        stargate.getHeight(),
        stargate.getChainId(),
      ]);
      return textResult({
        network: config.network,
        chainId,
        configuredChainId: config.chainId,
        rpcUrl: config.rpcUrl,
        denom: config.denom,
        gasPrice: config.gasPrice,
        explorer: config.explorer,
        height,
      });
    },
  }),

  defineTool({
    name: "ixo_get_account",
    description:
      "Get on-chain account info for an ixo address: account number, sequence (nonce) and public key. Returns a not-found note if the account has never received funds.",
    inputSchema: { address: z.string().describe("Bech32 ixo address (ixo1...)") },
    handler: async ({ address }, { config }) => {
      const stargate = await getStargateClient(config.rpcUrl);
      const account = await stargate.getAccount(address);
      if (!account) {
        return textResult({
          address,
          found: false,
          note: "Account not found on chain (no transactions / never funded).",
        });
      }
      return textResult({
        address: account.address,
        accountNumber: account.accountNumber,
        sequence: account.sequence,
        pubkey: account.pubkey,
      });
    },
  }),

  defineTool({
    name: "ixo_get_balances",
    description:
      "Get token balances for an ixo address. Optionally restrict to a single denom. uixo amounts are annotated with their IXO display value.",
    inputSchema: {
      address: z.string().describe("Bech32 ixo address (ixo1...)"),
      denom: z.string().optional().describe("Optional denom filter, e.g. 'uixo'"),
    },
    handler: async ({ address, denom }, { config }) => {
      const stargate = await getStargateClient(config.rpcUrl);
      if (denom) {
        const coin = await stargate.getBalance(address, denom);
        return textResult({ address, balances: describeCoins([coin]) });
      }
      const balances = await stargate.getAllBalances(address);
      return textResult({ address, balances: describeCoins(balances) });
    },
  }),

  defineTool({
    name: "ixo_list_validators",
    description:
      "List staking validators, filtered by bonding status (default BOND_STATUS_BONDED).",
    inputSchema: {
      status: z
        .enum([
          "BOND_STATUS_BONDED",
          "BOND_STATUS_UNBONDING",
          "BOND_STATUS_UNBONDED",
        ])
        .optional(),
    },
    handler: async ({ status }, { config }) => {
      const qc = await getQueryClient(config.rpcUrl);
      const res = await qc.cosmos.staking.v1beta1.validators({
        status: status ?? "BOND_STATUS_BONDED",
      } as any);
      const validators = res.validators.map((v) => ({
        operatorAddress: v.operatorAddress,
        moniker: v.description?.moniker,
        status: v.status,
        jailed: v.jailed,
        tokens: v.tokens,
        commission: v.commission?.commissionRates?.rate,
      }));
      return textResult({ count: validators.length, validators });
    },
  }),

  defineTool({
    name: "ixo_get_delegations",
    description: "Get all staking delegations for a delegator address.",
    inputSchema: { delegatorAddress: z.string().describe("Bech32 ixo address") },
    handler: async ({ delegatorAddress }, { config }) => {
      const qc = await getQueryClient(config.rpcUrl);
      const res = await qc.cosmos.staking.v1beta1.delegatorDelegations({
        delegatorAddr: delegatorAddress,
      } as any);
      return textResult(res.delegationResponses);
    },
  }),

  defineTool({
    name: "ixo_get_rewards",
    description: "Get outstanding staking rewards for a delegator address.",
    inputSchema: { delegatorAddress: z.string().describe("Bech32 ixo address") },
    handler: async ({ delegatorAddress }, { config }) => {
      const qc = await getQueryClient(config.rpcUrl);
      const res = await qc.cosmos.distribution.v1beta1.delegationTotalRewards({
        delegatorAddress,
      });
      return textResult({ total: res.total, rewards: res.rewards });
    },
  }),

  defineTool({
    name: "ixo_list_proposals",
    description:
      "List governance proposals. Optionally filter by status (0=all, 1=deposit period, 2=voting period, 3=passed, 4=rejected, 5=failed).",
    inputSchema: {
      status: z
        .number()
        .int()
        .min(0)
        .max(5)
        .optional()
        .describe("ProposalStatus enum (0 = all)"),
    },
    handler: async ({ status }, { config }) => {
      const qc = await getQueryClient(config.rpcUrl);
      const res = await qc.cosmos.gov.v1.proposals({
        proposalStatus: (status ?? 0) as any,
        voter: "",
        depositor: "",
      } as any);
      const proposals = res.proposals.map((p) => ({
        id: p.id,
        title: (p as any).title,
        status: p.status,
        submitTime: p.submitTime,
        votingEndTime: p.votingEndTime,
      }));
      return textResult({ count: proposals.length, proposals });
    },
  }),

  defineTool({
    name: "ixo_get_proposal",
    description: "Get a single governance proposal by id.",
    inputSchema: { proposalId: z.union([z.string(), z.number()]) },
    handler: async ({ proposalId }, { config }) => {
      const qc = await getQueryClient(config.rpcUrl);
      const res = await qc.cosmos.gov.v1.proposal({
        proposalId: BigInt(proposalId),
      } as any);
      return textResult(res.proposal);
    },
  }),

  defineTool({
    name: "ixo_get_iid_document",
    description:
      "Get an IID (Interchain Identifier / DID) document by its did, e.g. 'did:ixo:entity:...' or 'did:ixo:<address-suffix>'.",
    inputSchema: { id: z.string().describe("The did / iid identifier") },
    handler: async ({ id }, { config }) => {
      const qc = await getQueryClient(config.rpcUrl);
      const res = await qc.ixo.iid.v1beta1.iidDocument({ id });
      return textResult(res.iidDocument);
    },
  }),

  defineTool({
    name: "ixo_query_entity",
    description: "Get an IXO entity (NFT-backed digital twin) by its entity did.",
    inputSchema: { id: z.string().describe("The entity did") },
    handler: async ({ id }, { config }) => {
      const qc = await getQueryClient(config.rpcUrl);
      const res = await qc.ixo.entity.v1beta1.entity({ id });
      return textResult(res);
    },
  }),

  defineTool({
    name: "ixo_query_claims_collection",
    description: "Get a claims collection by its id.",
    inputSchema: { id: z.string().describe("The claims collection id") },
    handler: async ({ id }, { config }) => {
      const qc = await getQueryClient(config.rpcUrl);
      const res = await qc.ixo.claims.v1beta1.collection({ id });
      return textResult(res.collection);
    },
  }),

  defineTool({
    name: "ixo_query_token",
    description: "Get token metadata by its id (IXO token module, e.g. carbon/impact tokens).",
    inputSchema: { id: z.string().describe("The token id") },
    handler: async ({ id }, { config }) => {
      const qc = await getQueryClient(config.rpcUrl);
      const res = await qc.ixo.token.v1beta1.tokenMetadata({ id });
      return textResult(res);
    },
  }),

  defineTool({
    name: "ixo_query_bond",
    description: "Get a bonding-curve bond by its bond did.",
    inputSchema: { bondDid: z.string().describe("The bond did") },
    handler: async ({ bondDid }, { config }) => {
      const qc = await getQueryClient(config.rpcUrl);
      const res = await qc.ixo.bonds.v1beta1.bond({ bondDid });
      return textResult(res.bond);
    },
  }),

  defineTool({
    name: "ixo_wasm_query_contract",
    description:
      "Query a CosmWasm smart contract's state (smart query). Provide the contract address and a JSON query message.",
    inputSchema: {
      address: z.string().describe("Contract bech32 address"),
      query: z.record(z.string(), z.any()).describe("JSON query message passed to the contract"),
    },
    handler: async ({ address, query }, { config }) => {
      const qc = await getQueryClient(config.rpcUrl);
      const res = await qc.cosmwasm.wasm.v1.smartContractState({
        address,
        queryData: toUtf8(JSON.stringify(query)),
      });
      let data: unknown;
      try {
        data = JSON.parse(fromUtf8(res.data));
      } catch {
        data = res.data;
      }
      return textResult({ address, data });
    },
  }),

  defineTool({
    name: "ixo_get_tx",
    description: "Look up a transaction by hash and report its result (code, height, gas, raw log).",
    inputSchema: { hash: z.string().describe("Transaction hash (hex, uppercase)") },
    handler: async ({ hash }, { config }) => {
      const stargate = await getStargateClient(config.rpcUrl);
      const tx = await stargate.getTx(hash);
      if (!tx) return errorResult(`Transaction ${hash} not found.`);
      return textResult({
        hash: tx.hash,
        height: tx.height,
        code: tx.code,
        success: tx.code === 0,
        gasUsed: tx.gasUsed,
        gasWanted: tx.gasWanted,
        rawLog: tx.rawLog,
        explorer: config.explorer
          ? `${config.explorer}/transactions/${tx.hash}`
          : undefined,
      });
    },
  }),
];
