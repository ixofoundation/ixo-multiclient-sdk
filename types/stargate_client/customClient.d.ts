import { StdFee } from "@cosmjs/amino";
import { EncodeObject, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, DeliverTxResponse, SignerData, GasPrice, StargateClient, StargateClientOptions } from "@cosmjs/stargate";
import { CometClient } from "@cosmjs/tendermint-rpc";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { LocalStoreFunctions } from "./store";
export interface SigningStargateClientOptions extends StargateClientOptions {
    readonly registry?: Registry;
    readonly aminoTypes?: AminoTypes;
    readonly prefix?: string;
    readonly broadcastTimeoutMs?: number;
    readonly broadcastPollIntervalMs?: number;
    readonly gasPrice?: GasPrice;
}
export declare class SigningStargateClient extends StargateClient {
    readonly registry: Registry;
    readonly broadcastTimeoutMs: number | undefined;
    readonly broadcastPollIntervalMs: number | undefined;
    private readonly signer;
    private readonly aminoTypes;
    private readonly gasPrice;
    private readonly ignoreGetSequence;
    private readonly defaultGasMultiplier;
    localStoreFunctions: LocalStoreFunctions;
    publicCometClient: CometClient;
    static connectWithSigner(endpoint: string, signer: OfflineSigner, options?: SigningStargateClientOptions, ignoreGetSequence?: boolean, localStoreFunctions?: LocalStoreFunctions): Promise<SigningStargateClient>;
    /**
     * Creates an instance from a manually created Comet client.
     * Use this to use `Comet38Client` or `Tendermint37Client` instead of `Tendermint34Client`.
     */
    static createWithSigner(cometClient: CometClient, signer: OfflineSigner, options?: SigningStargateClientOptions): Promise<SigningStargateClient>;
    /**
     * Creates a client in offline mode.
     *
     * This should only be used in niche cases where you know exactly what you're doing,
     * e.g. when building an offline signing application.
     *
     * When you try to use online functionality with such a signer, an
     * exception will be raised.
     */
    static offline(signer: OfflineSigner, options?: SigningStargateClientOptions, ignoreGetSequence?: boolean, localStoreFunctions?: LocalStoreFunctions): Promise<SigningStargateClient>;
    protected constructor(cometClient: CometClient | undefined, signer: OfflineSigner, options: SigningStargateClientOptions, ignoreGetSequence?: boolean, localStoreFunctions?: LocalStoreFunctions);
    simulate(signerAddress: string, messages: readonly EncodeObject[], memo: string | undefined, txBodyBytes?: Uint8Array, explicitSignerData?: SignerData): Promise<number>;
    signAndBroadcast(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee | "auto" | number, memo?: string, explicitSignerData?: SignerData, txBodyBytes?: Uint8Array, timeoutHeight?: bigint): Promise<DeliverTxResponse>;
    /**
     * This method is useful if you want to send a transaction in broadcast,
     * without waiting for it to be placed inside a block, because for example
     * I would like to receive the hash to later track the transaction with another tool.
     * @returns Returns the hash of the transaction
     */
    signAndBroadcastSync(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee | "auto" | number, memo?: string, explicitSignerData?: SignerData, txBodyBytes?: Uint8Array, timeoutHeight?: bigint): Promise<string>;
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
    sign(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee, memo: string, explicitSignerData?: SignerData, txBodyBytes?: Uint8Array, timeoutHeight?: bigint): Promise<TxRaw>;
    getUsedFee(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee | "auto" | number, memo?: string, txBodyBytes?: Uint8Array, explicitSignerData?: SignerData): Promise<StdFee>;
    private signAmino;
    private signDirect;
}
/**
 * Creates a new SigningStargateClient with the given signer.
 * @param rpcEndpoint - The RPC endpoint of the chain.
 * @param offlineWallet - The wallet to sign transactions.
 * @param ignoreGetSequence - If true, the client will not query the chain for the account sequence.
 * @param options - The client options.
 * @param localStoreFunctions - The local storage getter and setter to use save sequence locally.
 */
export declare const createSigningClient: (rpcEndpoint: string, offlineWallet: OfflineSigner, ignoreGetSequence?: boolean, options?: SigningStargateClientOptions, localStoreFunctions?: LocalStoreFunctions) => Promise<SigningStargateClient>;
