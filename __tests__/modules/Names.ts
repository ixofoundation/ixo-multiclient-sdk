import { GasPrice } from "@cosmjs/stargate";
import { OfflineSigner } from "@cosmjs/proto-signing";

import { fee, getFee, RPC_URL, WalletUsers } from "../helpers/constants";
import {
  createClient,
  getUser,
  cosmos,
  ixo,
  queryClient,
} from "../helpers/common";
import { createSigningClient } from "../../src";
import { NameStatus } from "../../src/codegen/ixo/names/v1beta1/names";

export { NameStatus };

// ---------------------------------------------------------------------------
// Names module helpers (chain-level name service, IXO-1123)
// ---------------------------------------------------------------------------
//
// Naming maps human-readable handles to DIDs, scoped by governance-managed
// namespaces. Three categories of caller:
//
//   1. Governance authority   – CreateNamespace / UpdateNamespace
//   2. Registrars             – RegisterNameByRegistrar / UpdateNameByRegistrar
//                               and namespace-override transfers / status
//                               changes
//   3. End users              – self-register, transfer, status-change of
//                               their own names
//
// Each helper takes an explicit `signer` (default WalletUsers.tester) so a
// flow can mix-and-match wallets without juggling client instances.
// ---------------------------------------------------------------------------

// broadcastOrSynthesiseFailure mirrors the pattern from LiquidStake.ts: the
// negative-test flow runs many failing txs in sequence, and CheckTx-rejected
// txs throw out of cosmjs. We turn that throw into a synthetic non-zero-code
// DeliverTxResponse so testMsg(succeed=false) sees a consistent shape
// regardless of whether the failure happened at CheckTx or DeliverTx.
const broadcastOrSynthesiseFailure = async (
  client: Awaited<ReturnType<typeof createSigningClient>>,
  signerAddress: string,
  messages: any[],
  txFee: any
) => {
  try {
    return await client.signAndBroadcast(signerAddress, messages, txFee);
  } catch (e) {
    return {
      code: 1,
      transactionHash: "",
      height: 0,
      txIndex: 0,
      events: [],
      gasWanted: BigInt(0),
      gasUsed: BigInt(0),
      msgResponses: [],
      rawLog: (e as Error).message ?? String(e),
    } as any;
  }
};

// Same as in LiquidStake.ts: bypass the SDK's local sequence cache so a long
// sequence of negative tests doesn't drift the local sequence counter when
// the chain advances on rejected txs.
export const createUncachedClient = async (signer: OfflineSigner) => {
  return createSigningClient(
    RPC_URL,
    signer,
    false,
    { gasPrice: GasPrice.fromString("0.025uixo") }
    // intentionally no localStoreFunctions
  );
};

const govModuleAddress = async (): Promise<string> => {
  const govModAccRes = await queryClient.cosmos.auth.v1beta1.moduleAccountByName({
    name: "gov",
  });
  if (!govModAccRes?.account?.value)
    throw new Error("gov module account not found");
  const client = await createClient();
  const decoded = client.registry.decode(govModAccRes.account)?.baseAccount?.address;
  if (!decoded) throw new Error("could not decode gov module account address");
  return decoded;
};

// ---------------------------------------------------------------------------
// 1. Governance proposals
// ---------------------------------------------------------------------------

export type NamespaceConfig = {
  name: string;
  description?: string;
  registrarAccounts?: string[];
  allowSelfRegister?: boolean;
  allowRegistrarOverride?: boolean;
  minLength?: number;
  maxLength?: number;
  regex?: string;
  allowExpiry?: boolean;
};

const buildNamespace = (cfg: NamespaceConfig) =>
  ixo.names.v1beta1.Namespace.fromPartial({
    name: cfg.name,
    description: cfg.description ?? "",
    registrarAccounts: cfg.registrarAccounts ?? [],
    allowSelfRegister: cfg.allowSelfRegister ?? false,
    allowRegistrarOverride: cfg.allowRegistrarOverride ?? false,
    minLength: cfg.minLength ?? 1,
    maxLength: cfg.maxLength ?? 32,
    regex: cfg.regex ?? "",
    allowExpiry: cfg.allowExpiry ?? false,
  });

/**
 * MsgSubmitProposalCreateNamespace — gov-only creation of a namespace. Wraps
 * MsgCreateNamespace inside a v1 MsgSubmitProposal whose authority is the gov
 * module account.
 */
export const MsgSubmitProposalCreateNamespace = async (
  cfg: NamespaceConfig,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createUncachedClient(getUser(signer) as any);
  const myAddress = (await getUser(signer).getAccounts())[0].address;
  const govModAcc = await govModuleAddress();

  const message = {
    typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
    value: cosmos.gov.v1.MsgSubmitProposal.fromPartial({
      initialDeposit: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: "10000000",
          denom: "uixo",
        }),
      ],
      proposer: myAddress,
      title: `Create Names Namespace ${cfg.name}`,
      summary: `Create namespace ${cfg.name} via governance`,
      expedited: false,
      messages: [
        {
          typeUrl: "/ixo.names.v1beta1.MsgCreateNamespace",
          value: ixo.names.v1beta1.MsgCreateNamespace.encode(
            ixo.names.v1beta1.MsgCreateNamespace.fromPartial({
              authority: govModAcc,
              namespace: buildNamespace(cfg),
            })
          ).finish(),
        },
      ],
    }),
  };

  return await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
};

/**
 * MsgSubmitProposalUpdateNamespace — gov-only replacement of an existing
 * namespace's full configuration. The namespace.name selects the target.
 */
export const MsgSubmitProposalUpdateNamespace = async (
  cfg: NamespaceConfig,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createUncachedClient(getUser(signer) as any);
  const myAddress = (await getUser(signer).getAccounts())[0].address;
  const govModAcc = await govModuleAddress();

  const message = {
    typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
    value: cosmos.gov.v1.MsgSubmitProposal.fromPartial({
      initialDeposit: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: "10000000",
          denom: "uixo",
        }),
      ],
      proposer: myAddress,
      title: `Update Names Namespace ${cfg.name}`,
      summary: `Update namespace ${cfg.name} via governance`,
      expedited: false,
      messages: [
        {
          typeUrl: "/ixo.names.v1beta1.MsgUpdateNamespace",
          value: ixo.names.v1beta1.MsgUpdateNamespace.encode(
            ixo.names.v1beta1.MsgUpdateNamespace.fromPartial({
              authority: govModAcc,
              namespace: buildNamespace(cfg),
            })
          ).finish(),
        },
      ],
    }),
  };

  return await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
};

// ---------------------------------------------------------------------------
// 2. User and registrar messages
// ---------------------------------------------------------------------------

/**
 * MsgRegisterName — user self-register. Signer must control owner_did and the
 * namespace must allow self-registration.
 */
export const MsgRegisterName = async (
  args: {
    namespace: string;
    name: string;
    ownerDid?: string; // defaults to signer's DID
  },
  signer: WalletUsers = WalletUsers.tester
) => {
  const user = getUser(signer);
  const client = await createUncachedClient(user as any);
  const myAddress = (await user.getAccounts())[0].address;
  const ownerDid = args.ownerDid ?? user.did;

  const message = {
    typeUrl: "/ixo.names.v1beta1.MsgRegisterName",
    value: ixo.names.v1beta1.MsgRegisterName.fromPartial({
      signer: myAddress,
      namespace: args.namespace,
      name: args.name,
      ownerDid,
    }),
  };

  let simGas: number | undefined;
  try {
    simGas = await client.simulate(myAddress, [message], undefined);
  } catch (_) {
    // simulate fails on validation error; fall back to fixed fee so the
    // negative-test path still produces a tx response.
    simGas = undefined;
  }
  return await broadcastOrSynthesiseFailure(
    client,
    myAddress,
    [message],
    simGas ? getFee(1, simGas) : fee
  );
};

/**
 * MsgRegisterNameByRegistrar — registrar-on-behalf register. Signer must be in
 * namespace.registrar_accounts.
 */
export const MsgRegisterNameByRegistrar = async (
  args: {
    namespace: string;
    name: string;
    ownerDid: string;
    verified?: boolean;
    evidenceHash?: string;
    source?: string;
  },
  signer: WalletUsers = WalletUsers.tester
) => {
  const user = getUser(signer);
  const client = await createUncachedClient(user as any);
  const myAddress = (await user.getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.names.v1beta1.MsgRegisterNameByRegistrar",
    value: ixo.names.v1beta1.MsgRegisterNameByRegistrar.fromPartial({
      registrar: myAddress,
      namespace: args.namespace,
      name: args.name,
      ownerDid: args.ownerDid,
      verified: args.verified ?? false,
      evidenceHash: args.evidenceHash ?? "",
      source: args.source ?? "test",
    }),
  };

  let simGas: number | undefined;
  try {
    simGas = await client.simulate(myAddress, [message], undefined);
  } catch (_) {
    simGas = undefined;
  }
  return await broadcastOrSynthesiseFailure(
    client,
    myAddress,
    [message],
    simGas ? getFee(1, simGas) : fee
  );
};

/**
 * MsgUpdateNameByRegistrar — registrar updates verification metadata of an
 * existing record. Owner DID is unchanged.
 */
export const MsgUpdateNameByRegistrar = async (
  args: {
    namespace: string;
    normalizedName: string;
    verified?: boolean;
    evidenceHash?: string;
    source?: string;
  },
  signer: WalletUsers = WalletUsers.tester
) => {
  const user = getUser(signer);
  const client = await createUncachedClient(user as any);
  const myAddress = (await user.getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.names.v1beta1.MsgUpdateNameByRegistrar",
    value: ixo.names.v1beta1.MsgUpdateNameByRegistrar.fromPartial({
      registrar: myAddress,
      namespace: args.namespace,
      normalizedName: args.normalizedName,
      verified: args.verified ?? true,
      evidenceHash: args.evidenceHash ?? "",
      source: args.source ?? "test",
    }),
  };

  let simGas: number | undefined;
  try {
    simGas = await client.simulate(myAddress, [message], undefined);
  } catch (_) {
    simGas = undefined;
  }
  return await broadcastOrSynthesiseFailure(
    client,
    myAddress,
    [message],
    simGas ? getFee(1, simGas) : fee
  );
};

/**
 * MsgTransferName — change the owner_did of a name. Signer must control the
 * current owner DID, OR be a registrar when allow_registrar_override is on.
 */
export const MsgTransferName = async (
  args: {
    namespace: string;
    normalizedName: string;
    newOwnerDid: string;
  },
  signer: WalletUsers = WalletUsers.tester
) => {
  const user = getUser(signer);
  const client = await createUncachedClient(user as any);
  const myAddress = (await user.getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.names.v1beta1.MsgTransferName",
    value: ixo.names.v1beta1.MsgTransferName.fromPartial({
      signer: myAddress,
      namespace: args.namespace,
      normalizedName: args.normalizedName,
      newOwnerDid: args.newOwnerDid,
    }),
  };

  let simGas: number | undefined;
  try {
    simGas = await client.simulate(myAddress, [message], undefined);
  } catch (_) {
    simGas = undefined;
  }
  return await broadcastOrSynthesiseFailure(
    client,
    myAddress,
    [message],
    simGas ? getFee(1, simGas) : fee
  );
};

/**
 * MsgSetNameStatus — registrar (or gov authority) changes the lifecycle status
 * of a name. Tombstoned is terminal.
 */
export const MsgSetNameStatus = async (
  args: {
    namespace: string;
    normalizedName: string;
    status: NameStatus;
    reason?: string;
  },
  signer: WalletUsers = WalletUsers.tester
) => {
  const user = getUser(signer);
  const client = await createUncachedClient(user as any);
  const myAddress = (await user.getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.names.v1beta1.MsgSetNameStatus",
    value: ixo.names.v1beta1.MsgSetNameStatus.fromPartial({
      signer: myAddress,
      namespace: args.namespace,
      normalizedName: args.normalizedName,
      status: args.status,
      reason: args.reason ?? "",
    }),
  };

  let simGas: number | undefined;
  try {
    simGas = await client.simulate(myAddress, [message], undefined);
  } catch (_) {
    simGas = undefined;
  }
  return await broadcastOrSynthesiseFailure(
    client,
    myAddress,
    [message],
    simGas ? getFee(1, simGas) : fee
  );
};
