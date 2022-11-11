import {
  encodeSecp256k1Pubkey,
  makeSignDoc as makeSignDocAmino,
  pubkeyType,
  StdFee,
} from "@cosmjs/amino";
import { fromBase64, toBase64 } from "@cosmjs/encoding";
import { Int53, Uint53 } from "@cosmjs/math";
import {
  EncodeObject,
  isOfflineDirectSigner,
  makeAuthInfoBytes,
  makeSignDoc,
  OfflineSigner,
  Registry,
  TxBodyEncodeObject,
} from "@cosmjs/proto-signing";
import {
  AminoConverters,
  AminoTypes,
  DeliverTxResponse,
  SignerData,
  SigningStargateClientOptions,
  StargateClient,
  defaultRegistryTypes,
  GasPrice,
  calculateFee,
} from "@cosmjs/stargate";
import {
  createAuthzAminoConverters,
  MsgDelegateEncodeObject,
  MsgSendEncodeObject,
  MsgUndelegateEncodeObject,
  MsgWithdrawDelegatorRewardEncodeObject,
  createBankAminoConverters,
  createDistributionAminoConverters,
  createFreegrantAminoConverters,
  createGovAminoConverters,
  createIbcAminoConverters,
  createStakingAminoConverters,
  createVestingAminoConverters,
} from "@cosmjs/stargate/build/modules";
import { HttpEndpoint, Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { assert, assertDefined } from "@cosmjs/utils";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { MsgWithdrawDelegatorReward } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import {
  MsgDelegate,
  MsgUndelegate,
} from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";

import { encodePubkey } from "./customPubkey";
import { accountFromAny } from "./EdAccountHandler";
import { ixo } from "../codegen";

function createDefaultRegistry(): Registry {
  return new Registry(defaultRegistryTypes);
}

function createDefaultTypes(prefix: string): AminoConverters {
  return {
    ...createAuthzAminoConverters(),
    ...createBankAminoConverters(),
    ...createDistributionAminoConverters(),
    ...createGovAminoConverters(),
    ...createStakingAminoConverters(prefix),
    ...createIbcAminoConverters(),
    ...createFreegrantAminoConverters(),
    ...createVestingAminoConverters(),
  };
}

export class SigningStargateClient extends StargateClient {
  public readonly registry: Registry;
  public readonly broadcastTimeoutMs: number | undefined;
  public readonly broadcastPollIntervalMs: number | undefined;

  private readonly signer: OfflineSigner;
  private readonly aminoTypes: AminoTypes;
  private readonly gasPrice: GasPrice | undefined;
  private readonly ignoreGetSequence: boolean;

  public static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {},
    ignoreGetSequence?: boolean
  ): Promise<SigningStargateClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new SigningStargateClient(
      tmClient,
      signer,
      options,
      ignoreGetSequence
    );
  }

  /**
   * Creates a client in offline mode.
   *
   * This should only be used in niche cases where you know exactly what you're doing,
   * e.g. when building an offline signing application.
   *
   * When you try to use online functionality with such a signer, an
   * exception will be raised.
   */
  public static async offline(
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {},
    ignoreGetSequence?: boolean
  ): Promise<SigningStargateClient> {
    return new SigningStargateClient(
      undefined,
      signer,
      options,
      ignoreGetSequence
    );
  }

  protected constructor(
    tmClient: Tendermint34Client | undefined,
    signer: OfflineSigner,
    options: SigningStargateClientOptions,
    ignoreGetSequence: boolean = false
  ) {
    super(tmClient, options);
    // TODO: do we really want to set a default here? Ideally we could get it from the signer such that users only have to set it once.
    const prefix = options.prefix ?? "cosmos";
    const {
      registry = createDefaultRegistry(),
      aminoTypes = new AminoTypes(createDefaultTypes(prefix)),
    } = options;
    this.registry = registry;
    this.aminoTypes = aminoTypes;
    this.signer = signer;
    this.broadcastTimeoutMs = options.broadcastTimeoutMs;
    this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
    this.gasPrice = options.gasPrice;
    this.ignoreGetSequence = ignoreGetSequence;
  }

  public async simulate(
    signerAddress: string,
    messages: readonly EncodeObject[],
    memo: string | undefined
  ): Promise<number> {
    const anyMsgs = messages.map((m) => this.registry.encodeAsAny(m));
    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress
    );
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodeSecp256k1Pubkey(accountFromSigner.pubkey);
    const { sequence } = this.ignoreGetSequence
      ? { sequence: 0 }
      : await this.getSequence(signerAddress);
    const { gasInfo } = await this.forceGetQueryClient().tx.simulate(
      anyMsgs,
      memo,
      pubkey,
      sequence
    );
    assertDefined(gasInfo);
    return Uint53.fromString(gasInfo.gasUsed.toString()).toNumber();
  }

  public async sendTokens(
    senderAddress: string,
    recipientAddress: string,
    amount: readonly Coin[],
    fee: StdFee | "auto" | number,
    memo = ""
  ): Promise<DeliverTxResponse> {
    const sendMsg: MsgSendEncodeObject = {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: {
        fromAddress: senderAddress,
        toAddress: recipientAddress,
        amount: [...amount],
      },
    };
    return this.signAndBroadcast(senderAddress, [sendMsg], fee, memo);
  }

  public async delegateTokens(
    delegatorAddress: string,
    validatorAddress: string,
    amount: Coin,
    fee: StdFee | "auto" | number,
    memo = ""
  ): Promise<DeliverTxResponse> {
    const delegateMsg: MsgDelegateEncodeObject = {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
      value: MsgDelegate.fromPartial({
        delegatorAddress: delegatorAddress,
        validatorAddress: validatorAddress,
        amount: amount,
      }),
    };
    return this.signAndBroadcast(delegatorAddress, [delegateMsg], fee, memo);
  }

  public async undelegateTokens(
    delegatorAddress: string,
    validatorAddress: string,
    amount: Coin,
    fee: StdFee | "auto" | number,
    memo = ""
  ): Promise<DeliverTxResponse> {
    const undelegateMsg: MsgUndelegateEncodeObject = {
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
      value: MsgUndelegate.fromPartial({
        delegatorAddress: delegatorAddress,
        validatorAddress: validatorAddress,
        amount: amount,
      }),
    };
    return this.signAndBroadcast(delegatorAddress, [undelegateMsg], fee, memo);
  }

  public async withdrawRewards(
    delegatorAddress: string,
    validatorAddress: string,
    fee: StdFee | "auto" | number,
    memo = ""
  ): Promise<DeliverTxResponse> {
    const withdrawMsg: MsgWithdrawDelegatorRewardEncodeObject = {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value: MsgWithdrawDelegatorReward.fromPartial({
        delegatorAddress: delegatorAddress,
        validatorAddress: validatorAddress,
      }),
    };
    return this.signAndBroadcast(delegatorAddress, [withdrawMsg], fee, memo);
  }

  public async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee | "auto" | number,
    memo = ""
  ): Promise<DeliverTxResponse> {
    let usedFee: StdFee;
    if (fee == "auto" || typeof fee === "number") {
      assertDefined(
        this.gasPrice,
        "Gas price must be set in the client options when auto gas is used."
      );
      const gasEstimation = await this.simulate(signerAddress, messages, memo);
      const multiplier = typeof fee === "number" ? fee : 1.3;
      usedFee = calculateFee(
        Math.round(gasEstimation * multiplier),
        this.gasPrice
      );
    } else {
      usedFee = fee;
    }
    const txRaw = await this.sign(signerAddress, messages, usedFee, memo);
    const txBytes = TxRaw.encode(txRaw).finish();
    return this.broadcastTx(
      txBytes,
      this.broadcastTimeoutMs,
      this.broadcastPollIntervalMs
    );
  }

  /**
   * Gets account number and sequence from the API, creates a sign doc,
   * creates a single signature and assembles the signed transaction.
   *
   * The sign mode (SIGN_MODE_DIRECT or SIGN_MODE_LEGACY_AMINO_JSON) is determined by this client's signer.
   *
   * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
   * from the chain. This is needed when signing for a multisig account, but it also allows for offline signing
   * (See the SigningStargateClient.offline constructor).
   */
  public async sign(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    explicitSignerData?: SignerData
  ): Promise<TxRaw> {
    let signerData: SignerData;
    if (explicitSignerData) {
      signerData = explicitSignerData;
    } else {
      const { accountNumber, sequence } = this.ignoreGetSequence
        ? { sequence: 0, accountNumber: 0 }
        : await this.getSequence(signerAddress);
      const chainId = await this.getChainId();
      signerData = {
        accountNumber: accountNumber,
        sequence: sequence,
        chainId: chainId,
      };
    }

    return isOfflineDirectSigner(this.signer)
      ? this.signDirect(signerAddress, messages, fee, memo, signerData)
      : this.signAmino(signerAddress, messages, fee, memo, signerData);
  }

  private async signAmino(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData
  ): Promise<TxRaw> {
    assert(!isOfflineDirectSigner(this.signer));
    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress
    );
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodePubkey({
      type:
        accountFromSigner.algo === "secp256k1"
          ? pubkeyType.secp256k1
          : pubkeyType.ed25519,
      value: toBase64(accountFromSigner.pubkey),
    });
    const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    const msgs = messages.map((msg) => this.aminoTypes.toAmino(msg));
    const signDoc = makeSignDocAmino(
      msgs,
      fee,
      chainId,
      memo,
      accountNumber,
      sequence
    );
    const { signature, signed } = await this.signer.signAmino(
      signerAddress,
      signDoc
    );
    const signedTxBody = {
      messages: messages,
      memo: signed.memo,
    };
    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: signedTxBody,
    };
    const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedAuthInfoBytes = makeAuthInfoBytes(
      [{ pubkey, sequence: signedSequence }],
      signed.fee.amount,
      signedGasLimit,
      signMode
    );
    return TxRaw.fromPartial({
      bodyBytes: signedTxBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }

  private async signDirect(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData
  ): Promise<TxRaw> {
    assert(isOfflineDirectSigner(this.signer));
    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress
    );
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodePubkey({
      type:
        accountFromSigner.algo === "secp256k1"
          ? pubkeyType.secp256k1
          : pubkeyType.ed25519,
      value: toBase64(accountFromSigner.pubkey),
    });
    const txBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: messages,
        memo: memo,
      },
    };
    const txBodyBytes = this.registry.encode(txBodyEncodeObject);
    const gasLimit = Int53.fromString(fee.gas).toNumber();
    const authInfoBytes = makeAuthInfoBytes(
      [{ pubkey, sequence }],
      fee.amount,
      gasLimit
    );
    const signDoc = makeSignDoc(
      txBodyBytes,
      authInfoBytes,
      chainId,
      accountNumber
    );
    const { signature, signed } = await this.signer.signDirect(
      signerAddress,
      signDoc
    );
    return TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }
}

export const createSigningClient = async (
  rpcEndpoint: string,
  offlineWallet: OfflineSigner,
  ignoreGetSequence?: boolean
): Promise<SigningStargateClient> => {
  return await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    offlineWallet,
    {
      // registry: new Registry([...defaultRegistryTypes, ...ixoProtoRegistry]),
      registry: createRegistry(),
      accountParser: accountFromAny,
    },
    ignoreGetSequence
  );
};

export const createRegistry = (): Registry => {
  const myRegistry = new Registry(defaultRegistryTypes);
  // Iid module
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgCreateIidDocument",
    ixo.iid.v1beta1.MsgCreateIidDocument
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgUpdateIidDocument",
    ixo.iid.v1beta1.MsgUpdateIidDocument
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgUpdateIidMeta",
    ixo.iid.v1beta1.MsgUpdateIidMeta
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddIidContext",
    ixo.iid.v1beta1.MsgAddIidContext
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteIidContext",
    ixo.iid.v1beta1.MsgDeleteIidContext
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddVerification",
    ixo.iid.v1beta1.MsgAddVerification
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgSetVerificationRelationships",
    ixo.iid.v1beta1.MsgSetVerificationRelationships
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgRevokeVerification",
    ixo.iid.v1beta1.MsgRevokeVerification
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddAccordedRight",
    ixo.iid.v1beta1.MsgAddAccordedRight
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteAccordedRight",
    ixo.iid.v1beta1.MsgDeleteAccordedRight
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddController",
    ixo.iid.v1beta1.MsgAddController
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteController",
    ixo.iid.v1beta1.MsgDeleteController
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddLinkedEntity",
    ixo.iid.v1beta1.MsgAddLinkedEntity
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteLinkedEntity",
    ixo.iid.v1beta1.MsgDeleteLinkedEntity
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddLinkedResource",
    ixo.iid.v1beta1.MsgAddLinkedResource
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteLinkedResource",
    ixo.iid.v1beta1.MsgDeleteLinkedResource
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddService",
    ixo.iid.v1beta1.MsgAddService
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteService",
    ixo.iid.v1beta1.MsgDeleteService
  );
  // Entity module
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgCreateEntity",
    ixo.entity.v1beta1.MsgCreateEntity
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgCreateEntity",
    ixo.entity.v1beta1.MsgCreateEntity
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgCreateEntity",
    ixo.entity.v1beta1.MsgCreateEntity
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgTransferEntity",
    ixo.entity.v1beta1.MsgTransferEntity
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgUpdateEntity",
    ixo.entity.v1beta1.MsgUpdateEntity
  );
  // Payments module
  myRegistry.register(
    "/ixo.payments.v1.MsgCreatePaymentTemplate",
    ixo.payments.v1.MsgCreatePaymentTemplate
  );
  myRegistry.register(
    "/ixo.payments.v1.MsgCreatePaymentContract",
    ixo.payments.v1.MsgCreatePaymentContract
  );
  myRegistry.register(
    "/ixo.payments.v1.MsgSetPaymentContractAuthorisation",
    ixo.payments.v1.MsgSetPaymentContractAuthorisation
  );
  myRegistry.register(
    "/ixo.payments.v1.MsgCreateSubscription",
    ixo.payments.v1.MsgCreateSubscription
  );
  myRegistry.register(
    "/ixo.payments.v1.MsgGrantDiscount",
    ixo.payments.v1.MsgGrantDiscount
  );
  myRegistry.register(
    "/ixo.payments.v1.MsgRevokeDiscount",
    ixo.payments.v1.MsgRevokeDiscount
  );
  myRegistry.register(
    "/ixo.payments.v1.MsgEffectPayment",
    ixo.payments.v1.MsgEffectPayment
  );
  // Project module
  myRegistry.register(
    "/ixo.project.v1.MsgCreateProject",
    ixo.project.v1.MsgCreateProject
  );
  myRegistry.register(
    "/ixo.project.v1.MsgUpdateProjectStatus",
    ixo.project.v1.MsgUpdateProjectStatus
  );
  myRegistry.register(
    "/ixo.project.v1.MsgCreateAgent",
    ixo.project.v1.MsgCreateAgent
  );
  myRegistry.register(
    "/ixo.project.v1.MsgUpdateAgent",
    ixo.project.v1.MsgUpdateAgent
  );
  myRegistry.register(
    "/ixo.project.v1.MsgCreateClaim",
    ixo.project.v1.MsgCreateClaim
  );
  myRegistry.register(
    "/ixo.project.v1.MsgCreateEvaluation",
    ixo.project.v1.MsgCreateEvaluation
  );
  myRegistry.register(
    "/ixo.project.v1.MsgWithdrawFunds",
    ixo.project.v1.MsgWithdrawFunds
  );
  myRegistry.register(
    "/ixo.project.v1.MsgUpdateProjectDoc",
    ixo.project.v1.MsgUpdateProjectDoc
  );
  // Bond module
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgCreateBond",
    ixo.bonds.v1beta1.MsgCreateBond
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgEditBond",
    ixo.bonds.v1beta1.MsgEditBond
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgSetNextAlpha",
    ixo.bonds.v1beta1.MsgSetNextAlpha
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgUpdateBondState",
    ixo.bonds.v1beta1.MsgUpdateBondState
  );
  myRegistry.register("/ixo.bonds.v1beta1.MsgBuy", ixo.bonds.v1beta1.MsgBuy);
  myRegistry.register("/ixo.bonds.v1beta1.MsgSell", ixo.bonds.v1beta1.MsgSell);
  myRegistry.register("/ixo.bonds.v1beta1.MsgSwap", ixo.bonds.v1beta1.MsgSwap);
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgMakeOutcomePayment",
    ixo.bonds.v1beta1.MsgMakeOutcomePayment
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgWithdrawShare",
    ixo.bonds.v1beta1.MsgWithdrawShare
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgWithdrawReserve",
    ixo.bonds.v1beta1.MsgWithdrawReserve
  );

  return myRegistry;
};
