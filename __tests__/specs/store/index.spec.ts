/**
 * Offline tests for getSignerData and the accountNumber bigint->number
 * boundary introduced by cosmjs 0.39 (SequenceResponse.accountNumber is now
 * bigint; the SDK's SignerData and client-side JSON storage keep number).
 *
 * No network: the signing client is mocked to behave like cosmjs 0.39.
 */
import { getSignerData } from "../../../src/stargate_client/store";
import { accountNumberToNumber } from "../../../src/stargate_client/storeTypes";
import type { LocalStoreFunctions } from "../../../src/stargate_client/storeTypes";

const CHAIN_ID = "ixo-5";
const ACCOUNT_NUMBER = 123n; // cosmjs 0.39 returns bigint
const ADDRESS = "ixo1zjytfuj3t0w3tt4tt8548hgny2xt5mgjdptyl3";

const mockSigningClient = (sequence: number) =>
  ({
    getChainId: async () => CHAIN_ID,
    getSequence: async () => ({
      accountNumber: ACCOUNT_NUMBER,
      sequence,
    }),
  } as any);

const mockWallet = {
  getAccounts: async () => [{ address: ADDRESS }],
} as any;

const memoryStorage = (initial: Record<string, any> = {}) => {
  const store: Record<string, any> = { ...initial };
  const functions: LocalStoreFunctions = {
    getLocalData: async (key) => store[key],
    setLocalData: async (key, data) => {
      // real client storage is JSON-based; round-trip like localStorage would.
      // This throws if anything in `data` is a bigint.
      store[key] = JSON.parse(JSON.stringify(data));
    },
  };
  return { store, functions };
};

describe("getSignerData with cosmjs 0.39 bigint accountNumber", () => {
  it("returns a JSON-serializable SignerData with number accountNumber", async () => {
    const { functions } = memoryStorage();
    const result = await getSignerData(mockSigningClient(7), mockWallet, functions);

    expect(result).toEqual({
      accountNumber: 123,
      sequence: 7,
      chainId: CHAIN_ID,
    });
    expect(typeof result.accountNumber).toBe("number");
    // clients JSON-serialize SignerData (localStorage, Durable Object fetch)
    expect(() => JSON.stringify(result)).not.toThrow();
  });

  it("stores under the same key as data written by the pre-upgrade SDK", async () => {
    const { store, functions } = memoryStorage();
    await getSignerData(mockSigningClient(7), mockWallet, functions);

    // pre-upgrade SDK used number 123 as index -> object key "123"
    expect(Object.keys(store["ixo-signer-data"][CHAIN_ID])).toEqual(["123"]);
  });

  it("reads legacy data written by the old (number-based) SDK and increments in the 7s window", async () => {
    // exactly what the old SDK persisted: number keys/values, recent timestamp
    // (2s ago: inside the 7s window but not timeDiff===0, which means "first time")
    const legacy = {
      "ixo-signer-data": {
        [CHAIN_ID]: {
          "123": {
            sequence: 42,
            updated: new Date(Date.now() - 2000).toISOString(),
          },
        },
      },
    };
    const { store, functions } = memoryStorage(legacy);

    // chain still reports 42 (tx in flight) and last local update is recent
    // -> rapid-fire branch increments local sequence
    const result = await getSignerData(mockSigningClient(42), mockWallet, functions);

    expect(result.sequence).toBe(43);
    expect(result.accountNumber).toBe(123);
    expect(store["ixo-signer-data"][CHAIN_ID]["123"].sequence).toBe(43);
  });

  it("uses the remote sequence when local data is stale (>7s)", async () => {
    const stale = {
      "ixo-signer-data": {
        [CHAIN_ID]: {
          "123": {
            sequence: 42,
            updated: new Date(Date.now() - 8000).toISOString(),
          },
        },
      },
    };
    const { functions } = memoryStorage(stale);

    const result = await getSignerData(mockSigningClient(40), mockWallet, functions);
    expect(result.sequence).toBe(40);
  });

  it("uses the remote sequence when it is ahead of the local one", async () => {
    const behind = {
      "ixo-signer-data": {
        [CHAIN_ID]: {
          "123": {
            sequence: 42,
            updated: new Date(Date.now() - 2000).toISOString(),
          },
        },
      },
    };
    const { functions } = memoryStorage(behind);

    const result = await getSignerData(mockSigningClient(50), mockWallet, functions);
    expect(result.sequence).toBe(50);
  });

  it("passes plain numbers to getAndIncrementSequence (Durable Object path)", async () => {
    let received: any;
    const functions: LocalStoreFunctions = {
      getLocalData: async () => undefined,
      setLocalData: async () => undefined,
      getAndIncrementSequence: async (params) => {
        received = params;
        // the Cloudflare store does JSON.stringify(params) for the DO fetch;
        // this throws if accountNumber is a bigint
        expect(() => JSON.stringify(params)).not.toThrow();
        return {
          accountNumber: params.accountNumber,
          sequence: params.chainSequence,
          chainId: params.chainId,
        };
      },
    };

    const result = await getSignerData(mockSigningClient(9), mockWallet, functions);

    expect(received).toEqual({
      chainId: CHAIN_ID,
      accountNumber: 123,
      chainSequence: 9,
    });
    expect(typeof received.accountNumber).toBe("number");
    expect(result.sequence).toBe(9);
  });
});

describe("accountNumberToNumber", () => {
  it("converts bigint and number inputs", () => {
    expect(accountNumberToNumber(123n)).toBe(123);
    expect(accountNumberToNumber(123)).toBe(123);
    expect(accountNumberToNumber(0n)).toBe(0);
    expect(accountNumberToNumber(BigInt(Number.MAX_SAFE_INTEGER))).toBe(
      Number.MAX_SAFE_INTEGER
    );
  });

  it("throws instead of silently losing precision beyond 2^53-1", () => {
    expect(() =>
      accountNumberToNumber(BigInt(Number.MAX_SAFE_INTEGER) + 1n)
    ).toThrow(/cannot be safely represented/);
  });
});
