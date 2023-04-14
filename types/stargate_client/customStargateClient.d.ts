import { Account, AuthExtension, BankExtension, Coin, IndexedTx, SearchTxQuery, SequenceResponse, StakingExtension, TxExtension, SearchTxFilter, DeliverTxResponse, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { AccountParser } from "./edAccountHandler";
export interface StargateClientOptions {
    readonly accountParser?: AccountParser;
}
export declare class StargateClient {
    private readonly tmClient;
    private readonly queryClient;
    private chainId;
    private readonly accountParser;
    constructor(tmClient: Tendermint34Client, options?: StargateClientOptions);
    static connect(endpoint: string, options?: StargateClientOptions): Promise<StargateClient>;
    protected getTmClient(): Tendermint34Client | undefined;
    protected forceGetTmClient(): Tendermint34Client;
    protected getQueryClient(): QueryClient & AuthExtension & BankExtension & StakingExtension & TxExtension;
    protected forceGetQueryClient(): QueryClient & AuthExtension & BankExtension & StakingExtension & TxExtension;
    getChainId(): Promise<string>;
    getHeight(): Promise<number>;
    getAccount(searchAddress: string): Promise<Account | null>;
    getSequence(address: string): Promise<SequenceResponse>;
    getBlock(height?: number): Promise<{
        id: string;
        header: {
            version: {
                block: string;
                app: string;
            };
            height: number;
            chainId: string;
            time: string;
        };
        txs: readonly Uint8Array[];
    }>;
    getBalance(address: string, searchDenom: string): Promise<Coin>;
    /**
     * Queries all balances for all denoms that belong to this address.
     *
     * Uses the grpc queries (which iterates over the store internally), and we cannot get
     * proofs from such a method.
     */
    getAllBalances(address: string): Promise<readonly Coin[]>;
    getTx(id: string): Promise<IndexedTx | null>;
    searchTx(query: SearchTxQuery, filter?: SearchTxFilter): Promise<readonly IndexedTx[]>;
    disconnect(): void;
    /**
     * Broadcasts a signed transaction to the network and monitors its inclusion in a block.
     *
     * If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure),
     * an error is thrown.
     *
     * If the transaction is not included in a block before the provided timeout, this errors with a `TimeoutError`.
     *
     * If the transaction is included in a block, a `DeliverTxResponse` is returned. The caller then
     * usually needs to check for execution success or failure.
     */
    broadcastTx(tx: Uint8Array, timeoutMs?: number, pollIntervalMs?: number): Promise<DeliverTxResponse>;
    private txsQuery;
}
