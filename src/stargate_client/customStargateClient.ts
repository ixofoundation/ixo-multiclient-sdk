import {
  Account,
  accountFromAny,
  AuthExtension,
  BankExtension,
  Coin,
  IndexedTx,
  QueryClient,
  SearchTxQuery,
  SequenceResponse,
  setupAuthExtension,
  setupBankExtension,
  setupStakingExtension,
  setupTxExtension,
  StakingExtension,
  TxExtension,
  SearchTxFilter,
  isSearchByHeightQuery,
  isSearchBySentFromOrToQuery,
  isSearchByTagsQuery,
  DeliverTxResponse,
  TimeoutError,
} from "@cosmjs/stargate";
import { sleep } from "@cosmjs/utils";
import { Uint53 } from "@cosmjs/math";
import {
  Tendermint34Client,
  toRfc3339WithNanoseconds,
} from "@cosmjs/tendermint-rpc";
import { AccountParser } from "./edAccountHandler";
import { toHex } from "@cosmjs/encoding";

export interface StargateClientOptions {
  readonly accountParser?: AccountParser;
}

export class StargateClient {
  private readonly tmClient: Tendermint34Client | undefined;
  private readonly queryClient:
    | (QueryClient &
        AuthExtension &
        BankExtension &
        StakingExtension &
        TxExtension)
    | undefined;
  private chainId: string | undefined;
  private readonly accountParser: AccountParser;

  constructor(tmClient: Tendermint34Client, options?: StargateClientOptions) {
    if (tmClient) {
      this.tmClient = tmClient;
      this.queryClient = QueryClient.withExtensions(
        tmClient,
        setupAuthExtension,
        setupBankExtension,
        setupStakingExtension,
        setupTxExtension
      );
    }
    const { accountParser = accountFromAny } = options;
    this.accountParser = accountParser;
  }
  static async connect(endpoint: string, options: StargateClientOptions = {}) {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new StargateClient(tmClient, options);
  }
  protected getTmClient(): Tendermint34Client | undefined {
    return this.tmClient;
  }
  protected forceGetTmClient(): Tendermint34Client {
    if (!this.tmClient) {
      throw new Error(
        "Tendermint client not available. You cannot use online functionality in offline mode."
      );
    }
    return this.tmClient;
  }
  protected getQueryClient() {
    return this.queryClient;
  }
  protected forceGetQueryClient() {
    if (!this.queryClient) {
      throw new Error(
        "Query client not available. You cannot use online functionality in offline mode."
      );
    }
    return this.queryClient;
  }
  async getChainId(): Promise<string> {
    if (!this.chainId) {
      const response = await this.forceGetTmClient().status();
      const chainId = response.nodeInfo.network;
      if (!chainId) throw new Error("Chain ID must not be empty");
      this.chainId = chainId;
    }
    return this.chainId;
  }
  async getHeight(): Promise<number> {
    const status = await this.forceGetTmClient().status();
    return status.syncInfo.latestBlockHeight;
  }
  async getAccount(searchAddress: string): Promise<Account | null> {
    try {
      const account = await this.forceGetQueryClient().auth.account(
        searchAddress
      );
      return account ? this.accountParser(account) : null;
    } catch (error) {
      if (/rpc error: code = NotFound/i.test(error.toString())) {
        return null;
      }
      throw error;
    }
  }
  async getSequence(address: string): Promise<SequenceResponse> {
    const account = await this.getAccount(address);
    if (!account) {
      throw new Error(
        "Account does not exist on chain. Send some tokens there before trying to query sequence."
      );
    }
    return {
      accountNumber: account.accountNumber,
      sequence: account.sequence,
    };
  }
  async getBlock(height?: number) {
    const response = await this.forceGetTmClient().block(height);
    return {
      id: toHex(response.blockId.hash).toUpperCase(),
      header: {
        version: {
          block: new Uint53(response.block.header.version.block).toString(),
          app: new Uint53(response.block.header.version.app).toString(),
        },
        height: response.block.header.height,
        chainId: response.block.header.chainId,
        time: toRfc3339WithNanoseconds(response.block.header.time),
      },
      txs: response.block.txs,
    };
  }
  async getBalance(address: string, searchDenom: string): Promise<Coin> {
    return this.forceGetQueryClient().bank.balance(address, searchDenom);
  }
  /**
   * Queries all balances for all denoms that belong to this address.
   *
   * Uses the grpc queries (which iterates over the store internally), and we cannot get
   * proofs from such a method.
   */
  async getAllBalances(address: string): Promise<readonly Coin[]> {
    return this.forceGetQueryClient().bank.allBalances(address);
  }
  // async getBalanceStaked(address) {
  //   const allDelegations = [];
  //   let startAtKey = undefined;
  //   do {
  //     const { delegationResponses, pagination } =
  //       await this.forceGetQueryClient().staking.delegatorDelegations(
  //         address,
  //         startAtKey
  //       );
  //     const loadedDelegations = delegationResponses || [];
  //     allDelegations.push(...loadedDelegations);
  //     startAtKey =
  //       pagination === null || pagination === void 0
  //         ? void 0
  //         : pagination.nextKey;
  //   } while (startAtKey !== undefined && startAtKey.length !== 0);
  //   const sumValues = allDelegations.reduce((previousValue, currentValue) => {
  //     // Safe because field is set to non-nullable (https://github.com/cosmos/cosmos-sdk/blob/v0.45.3/proto/cosmos/staking/v1beta1/staking.proto#L295)
  //     (0, utils_1.assert)(currentValue.balance);
  //     return previousValue !== null
  //       ? (0, amino_1.addCoins)(previousValue, currentValue.balance)
  //       : currentValue.balance;
  //   }, null);
  //   return sumValues;
  // }
  async getDelegation(
    delegatorAddress: string,
    validatorAddress: string
  ): Promise<Coin | null> {
    var _a;
    let delegatedAmount;
    try {
      delegatedAmount =
        (_a = (
          await this.forceGetQueryClient().staking.delegation(
            delegatorAddress,
            validatorAddress
          )
        ).delegationResponse) === null || _a === void 0
          ? void 0
          : _a.balance;
    } catch (e) {
      if (e.toString().includes("key not found")) {
        // ignore, `delegatedAmount` remains undefined
      } else {
        throw e;
      }
    }
    return delegatedAmount || null;
  }
  async getTx(id: string): Promise<IndexedTx | null> {
    var _a;
    const results = await this.txsQuery(`tx.hash='${id}'`);
    return (_a = results[0]) !== null && _a !== void 0 ? _a : null;
  }
  async searchTx(
    query: SearchTxQuery,
    filter?: SearchTxFilter
  ): Promise<readonly IndexedTx[]> {
    const minHeight = filter.minHeight || 0;
    const maxHeight = filter.maxHeight || Number.MAX_SAFE_INTEGER;
    if (maxHeight < minHeight) return []; // optional optimization
    function withFilters(originalQuery) {
      return `${originalQuery} AND tx.height>=${minHeight} AND tx.height<=${maxHeight}`;
    }
    let txs;
    if (isSearchByHeightQuery(query)) {
      txs =
        query.height >= minHeight && query.height <= maxHeight
          ? await this.txsQuery(`tx.height=${query.height}`)
          : [];
    } else if (isSearchBySentFromOrToQuery(query)) {
      const sentQuery = withFilters(
        `message.module='bank' AND transfer.sender='${query.sentFromOrTo}'`
      );
      const receivedQuery = withFilters(
        `message.module='bank' AND transfer.recipient='${query.sentFromOrTo}'`
      );
      const [sent, received] = await Promise.all(
        [sentQuery, receivedQuery].map((rawQuery) => this.txsQuery(rawQuery))
      );
      const sentHashes = sent.map((t) => t.hash);
      txs = [...sent, ...received.filter((t) => !sentHashes.includes(t.hash))];
    } else if (isSearchByTagsQuery(query)) {
      const rawQuery = withFilters(
        query.tags.map((t) => `${t.key}='${t.value}'`).join(" AND ")
      );
      txs = await this.txsQuery(rawQuery);
    } else {
      throw new Error("Unknown query type");
    }
    const filtered = txs.filter(
      (tx) => tx.height >= minHeight && tx.height <= maxHeight
    );
    return filtered;
  }
  disconnect() {
    if (this.tmClient) this.tmClient.disconnect();
  }
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
  async broadcastTx(
    tx: Uint8Array,
    timeoutMs = 60000,
    pollIntervalMs = 3000
  ): Promise<DeliverTxResponse> {
    let timedOut = false;
    const txPollTimeout = setTimeout(() => {
      timedOut = true;
    }, timeoutMs);
    const pollForTx = async (txId: string) => {
      if (timedOut) {
        throw new TimeoutError(
          `Transaction with ID ${txId} was submitted but was not yet found on the chain. You might want to check later. There was a wait of ${
            timeoutMs / 1000
          } seconds.`,
          txId
        );
      }
      await sleep(pollIntervalMs);
      const result = await this.getTx(txId);
      return result
        ? {
            code: result.code,
            height: result.height,
            rawLog: result.rawLog,
            transactionHash: txId,
            gasUsed: result.gasUsed,
            gasWanted: result.gasWanted,
          }
        : pollForTx(txId);
    };
    const broadcasted = await this.forceGetTmClient().broadcastTxSync({ tx });
    if (broadcasted.code) {
      return Promise.reject(
        new Error(
          `Broadcasting transaction failed with code ${broadcasted.code} (codespace: ${broadcasted.codeSpace}). Log: ${broadcasted.log}`
        )
      );
    }
    const transactionId = toHex(broadcasted.hash).toUpperCase();
    return new Promise((resolve, reject) =>
      pollForTx(transactionId).then(
        (value) => {
          clearTimeout(txPollTimeout);
          resolve(value);
        },
        (error) => {
          clearTimeout(txPollTimeout);
          reject(error);
        }
      )
    );
  }
  private async txsQuery(query) {
    const results = await this.forceGetTmClient().txSearchAll({ query: query });
    return results.txs.map((tx) => {
      return {
        height: tx.height,
        hash: toHex(tx.hash).toUpperCase(),
        code: tx.result.code,
        rawLog: tx.result.log || "",
        tx: tx.tx,
        gasUsed: tx.result.gasUsed,
        gasWanted: tx.result.gasWanted,
      };
    });
  }
}
