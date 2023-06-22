import {
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
  AminoTypes,
  DeliverTxResponse,
  SignerData,
  GasPrice,
  calculateFee,
} from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { assert, assertDefined } from "@cosmjs/utils";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { encodePubkey } from "./customPubkey";
import { accountFromAny } from "./edAccountHandler";
import { StargateClient, StargateClientOptions } from "./customStargateClient";
import { createRegistry, defaultRegistryTypes } from "./customRegistries";
import { getSignerData, LocalStoreFunctions } from "./store";

export interface SigningStargateClientOptions extends StargateClientOptions {
  readonly registry?: Registry;
  readonly aminoTypes?: AminoTypes;
  readonly prefix?: string;
  readonly broadcastTimeoutMs?: number;
  readonly broadcastPollIntervalMs?: number;
  readonly gasPrice?: GasPrice;
}

function createDefaultRegistry(): Registry {
  return new Registry(defaultRegistryTypes);
}

export class SigningStargateClient extends StargateClient {
  public readonly registry: Registry;
  public readonly broadcastTimeoutMs: number | undefined;
  public readonly broadcastPollIntervalMs: number | undefined;

  private readonly signer: OfflineSigner;
  private readonly aminoTypes: AminoTypes;
  private readonly gasPrice: GasPrice | undefined;
  private readonly ignoreGetSequence: boolean;

  public localStoreFunctions: LocalStoreFunctions;
  public tendermintClient: Tendermint34Client;

  public static async connectWithSigner(
    endpoint: string,
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {},
    ignoreGetSequence?: boolean,
    localStoreFunctions?: LocalStoreFunctions
  ): Promise<SigningStargateClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new SigningStargateClient(
      tmClient,
      signer,
      options,
      ignoreGetSequence,
      localStoreFunctions
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
    ignoreGetSequence?: boolean,
    localStoreFunctions?: LocalStoreFunctions
  ): Promise<SigningStargateClient> {
    return new SigningStargateClient(
      undefined,
      signer,
      options,
      ignoreGetSequence,
      localStoreFunctions
    );
  }

  protected constructor(
    tmClient: Tendermint34Client | undefined,
    signer: OfflineSigner,
    options: SigningStargateClientOptions,
    ignoreGetSequence: boolean = false,
    localStoreFunctions?: LocalStoreFunctions
  ) {
    super(tmClient!, options);
    const prefix = options.prefix ?? "ixo";
    const {
      registry = createDefaultRegistry(),
      // aminoTypes = new AminoTypes(createDefaultTypes(prefix)),
      aminoTypes,
    } = options;
    this.tendermintClient = tmClient!;
    this.registry = registry;
    this.aminoTypes = aminoTypes!;
    this.signer = signer;
    this.broadcastTimeoutMs = options.broadcastTimeoutMs;
    this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
    this.gasPrice = options.gasPrice;
    this.ignoreGetSequence = ignoreGetSequence;
    this.localStoreFunctions = localStoreFunctions;
  }

  public async simulate(
    signerAddress: string,
    messages: readonly EncodeObject[],
    memo: string | undefined,
    txBodyBytes?: Uint8Array
  ): Promise<number> {
    const txBody = txBodyBytes ? this.registry.decodeTxBody(txBodyBytes) : null;
    const anyMsgs =
      txBody?.messages || messages.map((m) => this.registry.encodeAsAny(m));
    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress
    );
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = {
      type:
        accountFromSigner.algo === "secp256k1"
          ? pubkeyType.secp256k1
          : pubkeyType.ed25519,
      value: toBase64(accountFromSigner.pubkey),
    };

    const { sequence } = this.ignoreGetSequence
      ? { sequence: 0 }
      : await this.getSequence(signerAddress);

    const { gasInfo } = await this.forceGetQueryClient().tx.simulate(
      anyMsgs,
      txBody?.memo || memo,
      pubkey as any,
      sequence
    );

    assertDefined(gasInfo);
    return Uint53.fromString(gasInfo.gasUsed.toString()).toNumber();
  }

  public async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee | "auto" | number,
    memo = "",
    explicitSignerData?: SignerData,
    txBodyBytes?: Uint8Array
  ): Promise<DeliverTxResponse> {
    let usedFee: StdFee;
    if (fee == "auto" || typeof fee === "number") {
      assertDefined(
        this.gasPrice,
        "Gas price must be set in the client options when auto gas is used."
      );
      const gasEstimation = await this.simulate(
        signerAddress,
        messages,
        memo,
        txBodyBytes
      );
      const multiplier = typeof fee === "number" ? fee : 1.3;
      usedFee = calculateFee(
        Math.round(gasEstimation * multiplier),
        this.gasPrice
      );
    } else {
      usedFee = fee;
    }
    const txRaw = await this.sign(
      signerAddress,
      messages,
      usedFee,
      memo,
      explicitSignerData,
      txBodyBytes
    );
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
    explicitSignerData?: SignerData,
    txBodyBytes?: Uint8Array
  ): Promise<TxRaw> {
    let signerData: SignerData;
    if (explicitSignerData) {
      signerData = explicitSignerData;
    } else if (!this.ignoreGetSequence && this.localStoreFunctions) {
      // if dont skip sequence and want to use local sequence checker
      signerData = await getSignerData(
        this,
        this.signer,
        this.localStoreFunctions
      );
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
      ? this.signDirect(
          signerAddress,
          messages,
          fee,
          memo,
          signerData,
          txBodyBytes
        )
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
      signed.fee.granter,
      signed.fee.payer,
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
    { accountNumber, sequence, chainId }: SignerData,
    txBodyBytes?: Uint8Array
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
    const txBodyBytes1 =
      txBodyBytes || this.registry.encodeTxBody({ messages, memo });
    const gasLimit = Int53.fromString(fee.gas).toNumber();
    const authInfoBytes = makeAuthInfoBytes(
      [{ pubkey, sequence }],
      fee.amount,
      gasLimit,
      fee.granter,
      fee.payer
    );
    const signDoc = makeSignDoc(
      txBodyBytes1,
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

/**
 * Creates a new SigningStargateClient with the given signer.
 * @param rpcEndpoint - The RPC endpoint of the chain.
 * @param offlineWallet - The wallet to sign transactions.
 * @param ignoreGetSequence - If true, the client will not query the chain for the account sequence.
 * @param options - The client options.
 * @param localStoreFunctions - The local storage getter and setter to use save sequence locally.
 */
export const createSigningClient = async (
  rpcEndpoint: string,
  offlineWallet: OfflineSigner,
  ignoreGetSequence?: boolean,
  options?: SigningStargateClientOptions,
  localStoreFunctions?: LocalStoreFunctions
): Promise<SigningStargateClient> => {
  return await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    offlineWallet,
    {
      // registry: new Registry([...defaultRegistryTypes, ...ixoProtoRegistry]),
      registry: createRegistry(),
      accountParser: accountFromAny,
      ...options,
    },
    ignoreGetSequence,
    localStoreFunctions
  );
};
