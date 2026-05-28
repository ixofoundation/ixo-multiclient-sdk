import { GasPrice } from "@cosmjs/stargate";
import { OfflineSigner } from "@cosmjs/proto-signing";

import { fee, getFee, RPC_URL, WalletUsers } from "../helpers/constants";
import {
  createClient,
  getUser,
  cosmos,
  queryClient,
  ixo,
} from "../helpers/common";
import { createSigningClient } from "../../src";

// broadcastOrSynthesiseFailure runs signAndBroadcast and returns its
// DeliverTxResponse on success. When the chain rejects the tx at CheckTx
// (ValidateBasic failures, mempool gating), cosmjs throws — which would
// derail testMsg(succeed=false) before checkSuccessMsg can interpret it.
// We catch that throw and return a synthetic DeliverTxResponse with a
// non-zero code so checkSuccessMsg sees a uniform "tx failed" shape
// regardless of whether the rejection happened at CheckTx or DeliverTx.
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

// createUncachedClient builds a signing client that bypasses the SDK's
// local sequence cache by omitting localStoreFunctions. Every tx queries
// the chain for its current sequence, which is correct but ~1 RPC slower.
//
// We use this everywhere in this module because the negative-test flow
// runs many failing txs in sequence (validation rejections still advance
// sequence on chain). The default cache uses a "<7s ago + chain not
// ahead" heuristic that increments local +1 between calls; that drifts
// when chain advances on rejected txs and produces "account sequence
// mismatch" errors. Bypassing the cache eliminates the drift entirely.
export const createUncachedClient = async (signer: OfflineSigner) => {
  return createSigningClient(
    RPC_URL,
    signer,
    false,
    { gasPrice: GasPrice.fromString("0.025uixo") }
    // intentionally no localStoreFunctions
  );
};

// ---------------------------------------------------------------------------
// v7 multi-pool liquidstake module helpers
// ---------------------------------------------------------------------------
//
// The v7 chain upgrade reshapes liquidstake from a single global pool into a
// multi-pool layout where each pool has its own LST denom, validator set,
// admin, fees, paused flag, and proxy account. Helpers here are organised
// in three groups:
//
//   1. Governance proposals      – module-wide / pool-creation / kill switch
//   2. Pool admin operations     – per-pool config tweaks (admin or gov)
//   3. End-user operations       – stake / unstake / burn
//
// Every helper takes an explicit `signer` (default WalletUsers.tester) so a
// flow can mix and match wallets without juggling client instances.
// ---------------------------------------------------------------------------

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

/**
 * MsgSubmitProposalUpdateModuleParams — gov-only update of the GLOBAL module
 * parameters (min stake amount and the global module-paused kill switch).
 *
 * The proposer / depositor is the signer. The proposal carries a single
 * inner MsgUpdateModuleParams whose authority is the gov module account.
 */
export const MsgSubmitProposalUpdateModuleParams = async (
  params: {
    minLiquidStakeAmount?: string; // default "10000"
    modulePaused?: boolean; // default false
  } = {},
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
      title: "Update Liquid Staking ModuleParams",
      summary: "Update Liquid Staking module-wide params",
      expedited: false,
      messages: [
        {
          typeUrl: "/ixo.liquidstake.v1beta1.MsgUpdateModuleParams",
          value: ixo.liquidstake.v1beta1.MsgUpdateModuleParams.encode(
            ixo.liquidstake.v1beta1.MsgUpdateModuleParams.fromPartial({
              authority: govModAcc,
              moduleParams: ixo.liquidstake.v1beta1.ModuleParams.fromPartial({
                minLiquidStakeAmount: params.minLiquidStakeAmount ?? "10000",
                modulePaused: params.modulePaused ?? false,
              }),
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
 * MsgSubmitProposalCreatePool — gov-only creation of a new pool. Pool starts
 * empty (no validators, no receivers, zero fees, paused=false). After the
 * proposal passes, the pool admin must call MsgUpdateWhitelistedValidators
 * before any LiquidStake will succeed (active-weight-quorum check).
 */
export const MsgSubmitProposalCreatePool = async (
  pool: {
    poolId: string;
    liquidBondDenom: string;
    initialAdminAddress: string;
    initialFeeAccountAddress: string;
  },
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
      title: `Create Liquid Staking Pool ${pool.poolId}`,
      summary: `Register a new liquid staking pool minting ${pool.liquidBondDenom}`,
      expedited: false,
      messages: [
        {
          typeUrl: "/ixo.liquidstake.v1beta1.MsgCreatePool",
          value: ixo.liquidstake.v1beta1.MsgCreatePool.encode(
            ixo.liquidstake.v1beta1.MsgCreatePool.fromPartial({
              authority: govModAcc,
              poolId: pool.poolId,
              liquidBondDenom: pool.liquidBondDenom,
              initialAdminAddress: pool.initialAdminAddress,
              initialFeeAccountAddress: pool.initialFeeAccountAddress,
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
 * MsgSubmitProposalSetModulePaused — gov-only toggle of the GLOBAL kill
 * switch. When paused, EVERY pool halts regardless of its per-pool flag.
 */
export const MsgSubmitProposalSetModulePaused = async (
  isPaused: boolean,
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
      title: `Set Liquid Staking module paused = ${isPaused}`,
      summary: `Toggle global liquidstake kill switch to ${isPaused}`,
      expedited: false,
      messages: [
        {
          typeUrl: "/ixo.liquidstake.v1beta1.MsgSetModulePaused",
          value: ixo.liquidstake.v1beta1.MsgSetModulePaused.encode(
            ixo.liquidstake.v1beta1.MsgSetModulePaused.fromPartial({
              authority: govModAcc,
              isPaused,
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
// 2. Pool admin operations (caller must be the pool's whitelist_admin_address
//    OR the gov module address, except UpdateWeightedRewardsReceivers which
//    is admin-only on the chain side).
// ---------------------------------------------------------------------------

/**
 * MsgUpdatePool — patch a pool's mutable scalar/address fields (fee rates,
 * fee account, admin address). pool_id, liquid_bond_denom and proxy address
 * are immutable and not touched here.
 */
export const MsgUpdatePool = async (
  poolId: string,
  fields: {
    unstakeFeeRate?: string; // default "0"
    autocompoundFeeRate?: string; // default "0"
    feeAccountAddress: string;
    whitelistAdminAddress: string;
  },
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createUncachedClient(getUser(signer) as any);
  const myAddress = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.liquidstake.v1beta1.MsgUpdatePool",
    value: ixo.liquidstake.v1beta1.MsgUpdatePool.fromPartial({
      authority: myAddress,
      poolId,
      unstakeFeeRate: fields.unstakeFeeRate ?? "0",
      autocompoundFeeRate: fields.autocompoundFeeRate ?? "0",
      feeAccountAddress: fields.feeAccountAddress,
      whitelistAdminAddress: fields.whitelistAdminAddress,
    }),
  };

  return await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
};

/**
 * MsgUpdateWhitelistedValidators — replace a pool's validator whitelist.
 * Sum of TargetWeight values must equal 10000 exactly.
 *
 * Defaults to the single local-chain validator with full weight, which is
 * what most happy-path tests want.
 */
export const MsgUpdateWhitelistedValidators = async (
  poolId: string,
  validators: { validatorAddress: string; targetWeight: string }[] = [
    {
      validatorAddress: "ixovaloper1n8yrmeatsk74dw0zs95ess9sgzptd6thzncf20",
      targetWeight: "10000",
    },
  ],
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createUncachedClient(getUser(signer) as any);
  const myAddress = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.liquidstake.v1beta1.MsgUpdateWhitelistedValidators",
    value: ixo.liquidstake.v1beta1.MsgUpdateWhitelistedValidators.fromPartial({
      authority: myAddress,
      poolId,
      whitelistedValidators: validators,
    }),
  };

  return await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
};

/**
 * MsgUpdateWeightedRewardsReceivers — replace a pool's weighted-rewards
 * receivers list. Must be called by the pool's admin (governance is NOT a
 * valid signer here — matches pre-v7 behaviour).
 */
export const MsgUpdateWeightedRewardsReceivers = async (
  poolId: string,
  receivers: { address: string; weight: string }[],
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createUncachedClient(getUser(signer) as any);
  const myAddress = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.liquidstake.v1beta1.MsgUpdateWeightedRewardsReceivers",
    value:
      ixo.liquidstake.v1beta1.MsgUpdateWeightedRewardsReceivers.fromPartial({
        authority: myAddress,
        poolId,
        weightedRewardsReceivers: receivers.map((r) =>
          ixo.liquidstake.v1beta1.WeightedAddress.fromPartial(r)
        ),
      }),
  };

  return await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
};

/**
 * MsgSetPoolPaused — toggle a single pool's per-pool paused flag. The
 * global ModuleParams.module_paused flag overrides this and pauses every
 * pool regardless of its per-pool value.
 */
export const MsgSetPoolPaused = async (
  poolId: string,
  isPaused: boolean,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createUncachedClient(getUser(signer) as any);
  const myAddress = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.liquidstake.v1beta1.MsgSetPoolPaused",
    value: ixo.liquidstake.v1beta1.MsgSetPoolPaused.fromPartial({
      authority: myAddress,
      poolId,
      isPaused,
    }),
  };

  return await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
};

// ---------------------------------------------------------------------------
// 3. End-user operations
// ---------------------------------------------------------------------------

/**
 * MsgLiquidStake — deposit native bondDenom (uixo) into the pool's proxy
 * account; mints the pool's LST denom (1:1 first time, otherwise at the
 * current supply / netAmount ratio so existing holders aren't diluted).
 *
 * Caller MUST be the pool's whitelist_admin_address (this is enforced on
 * the chain side as in pre-v7).
 */
export const MsgLiquidStake = async (
  poolId: string,
  amount = "10000000000",
  signer: WalletUsers = WalletUsers.tester
) => {
  // ignoreGetSequence:true forces a fresh on-chain sequence query for
  // every tx instead of relying on the SDK's cache. Negative tests
  // broadcast many tx-rejecting messages in quick succession from the
  // same signer; the cache otherwise drifts (see SequenceManagerDO
  // buffer behaviour) and subsequent txs hit "account sequence mismatch".
  const client = await createUncachedClient(getUser(signer) as any);
  const myAddress = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.liquidstake.v1beta1.MsgLiquidStake",
    value: ixo.liquidstake.v1beta1.MsgLiquidStake.fromPartial({
      delegatorAddress: myAddress,
      poolId,
      amount: cosmos.base.v1beta1.Coin.fromPartial({
        amount,
        denom: "uixo",
      }),
    }),
  };

  // Negative-test friendliness: when the chain rejects at simulate time
  // (e.g. ValidatePoolID, admin check, min-amount check), client.simulate
  // throws. Fall back to the fixed fee so the tx still broadcasts and the
  // failure surfaces as a DeliverTxResponse with code != 0 — which is
  // exactly what testMsg(succeed=false) wants to assert against.
  let txFee;
  try {
    txFee = getFee(1, await client.simulate(myAddress, [message], undefined));
  } catch {
    txFee = fee;
  }
  return await broadcastOrSynthesiseFailure(client, myAddress, [message], txFee);
};

/**
 * MsgLiquidUnstake — burn the pool's LST denom and initiate unbonding from
 * the pool's whitelisted validators. amount.denom MUST equal the pool's
 * liquid_bond_denom; mismatched denoms are rejected with ErrPoolDenomMismatch.
 *
 * The supplied `denom` overrides the LST denom for negative tests. For
 * happy-path tests, omit it and the helper uses the pool's denom.
 */
export const MsgLiquidUnstake = async (
  poolId: string,
  amount = "10000000000",
  denom?: string,
  signer: WalletUsers = WalletUsers.tester
) => {
  // See MsgLiquidStake for why ignoreGetSequence:true is needed here.
  const client = await createUncachedClient(getUser(signer) as any);
  const myAddress = (await getUser(signer).getAccounts())[0].address;

  // If no denom override was supplied, look the pool up so we send the
  // correct LST denom. Tests that intentionally want a denom mismatch
  // pass denom explicitly.
  let resolvedDenom = denom;
  if (!resolvedDenom) {
    const res = await queryClient.ixo.liquidstake.v1beta1.pool({ poolId });
    if (!res.pool?.liquidBondDenom)
      throw new Error(`pool ${poolId} not found or has no liquid_bond_denom`);
    resolvedDenom = res.pool.liquidBondDenom;
  }

  const message = {
    typeUrl: "/ixo.liquidstake.v1beta1.MsgLiquidUnstake",
    value: ixo.liquidstake.v1beta1.MsgLiquidUnstake.fromPartial({
      delegatorAddress: myAddress,
      poolId,
      amount: cosmos.base.v1beta1.Coin.fromPartial({
        amount,
        denom: resolvedDenom,
      }),
    }),
  };

  // Same simulate-fallback + broadcast-failure synthesis as MsgLiquidStake.
  let txFee;
  try {
    txFee = getFee(1, await client.simulate(myAddress, [message], undefined));
  } catch {
    txFee = fee;
  }
  return await broadcastOrSynthesiseFailure(client, myAddress, [message], txFee);
};

/**
 * Bank-send a pool's LST tokens between users. Useful for verifying that
 * non-admin holders can transfer LST freely (since LiquidUnstake is the
 * only restricted operation, transfers are not).
 *
 * The denom defaults to "uzero" (the pre-v7 / migrated pool's denom) so
 * existing call sites need no change; multi-pool tests pass the pool's
 * actual denom explicitly.
 */
export const BankSendLiquidTrx = async (
  amount: number | string = Math.pow(10, 10),
  denom: string = "uzero",
  fromUser: WalletUsers = WalletUsers.tester,
  toUser: WalletUsers = WalletUsers.bob
) => {
  const client = await createClient(getUser(fromUser));
  const fromAddress = (await getUser(fromUser).getAccounts())[0].address;
  const toAddress = (await getUser(toUser).getAccounts())[0].address;

  const message = {
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    value: cosmos.bank.v1beta1.MsgSend.fromPartial({
      fromAddress,
      toAddress,
      amount: [
        cosmos.base.v1beta1.Coin.fromPartial({
          amount: amount.toString(),
          denom,
        }),
      ],
    }),
  };

  return await client.signAndBroadcast(
    fromAddress,
    [message],
    getFee(1, await client.simulate(fromAddress, [message], undefined))
  );
};

/**
 * Backwards-compat alias matching the pre-v7 helper name. New code should
 * use BankSendLiquidTrx so the denom is explicit.
 */
export const BankSendZeroTrx = (
  amount?: number | string,
  fromUser?: WalletUsers,
  toUser?: WalletUsers
) => BankSendLiquidTrx(amount, "uzero", fromUser, toUser);

/**
 * MsgBurn — module-level burn of native uixo. Unchanged from pre-v7.
 */
export const MsgBurn = async (
  amount = "1000000",
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createUncachedClient(getUser(signer) as any);
  const myAddress = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.liquidstake.v1beta1.MsgBurn",
    value: ixo.liquidstake.v1beta1.MsgBurn.fromPartial({
      burner: myAddress,
      amount: cosmos.base.v1beta1.Coin.fromPartial({
        amount,
        denom: "uixo",
      }),
    }),
  };

  return await client.signAndBroadcast(
    myAddress,
    [message],
    getFee(1, await client.simulate(myAddress, [message], undefined))
  );
};
