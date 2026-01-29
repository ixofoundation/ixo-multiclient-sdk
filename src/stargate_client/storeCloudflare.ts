/**
 * Cloudflare Durable Object for atomic sequence management.
 *
 * This module provides a Durable Object class that coordinates blockchain
 * transaction sequence numbers across multiple Cloudflare Workers or Workflows.
 *
 * ## The Problem
 *
 * When multiple workers send transactions concurrently from the same blockchain
 * account, they compete for sequence numbers:
 *
 * 1. Worker A reads sequence 100 from chain
 * 2. Worker B reads sequence 100 from chain (same time)
 * 3. Worker A broadcasts with sequence 100 - succeeds
 * 4. Worker B broadcasts with sequence 100 - fails (chain expects 101)
 *
 * ## The Solution
 *
 * Use a Durable Object to atomically allocate sequence numbers:
 *
 * 1. All workers request their sequence from a single DO instance
 * 2. DO serializes requests and allocates consecutive sequences
 * 3. DO adds a stagger delay (300ms default) so chain can process transactions in order
 * 4. Workers broadcast with their allocated sequence
 *
 * ## Usage
 *
 * 1. Re-export the class from your worker (required by Cloudflare):
 *
 * ```typescript
 * // Use the /cloudflare subpath to avoid loading crypto at module load time
 * export { SequenceManagerDO } from '@ixo/impactxclient-sdk/cloudflare';
 * ```
 *
 * 2. Configure wrangler.jsonc:
 *
 * ```jsonc
 * {
 *   "durable_objects": {
 *     "bindings": [{
 *       "name": "SEQUENCE_MANAGER",
 *       "class_name": "SequenceManagerDO"
 *     }]
 *   },
 *   "migrations": [{
 *     "tag": "v1",
 *     "new_classes": ["SequenceManagerDO"]
 *   }]
 * }
 * ```
 *
 * 3. Use with createDOStoreFunctions:
 *
 * ```typescript
 * import { createSigningClient, createDOStoreFunctions } from '@ixo/impactxclient-sdk';
 *
 * const doId = env.SEQUENCE_MANAGER.idFromName('global');
 * const doStub = env.SEQUENCE_MANAGER.get(doId);
 * const storageFunctions = createDOStoreFunctions(doStub);
 *
 * const client = await createSigningClient(rpc, wallet, false, options, storageFunctions);
 * await client.signAndBroadcast(address, msgs, 'auto', memo);
 * ```
 *
 * ## Configuration
 *
 * Set `IXO_CLIENT_SEQUENCE_MIN_DELAY_MS` in your wrangler.jsonc vars to configure
 * the stagger delay (default: 300ms):
 *
 * ```jsonc
 * {
 *   "vars": {
 *     "IXO_CLIENT_SEQUENCE_MIN_DELAY_MS": "500"
 *   }
 * }
 * ```
 */

import type { LocalStoreFunctions } from "./storeTypes";

// ============================================================================
// Internal type definitions
// ============================================================================

// Cloudflare DO types (compatible with @cloudflare/workers-types)
interface DurableObjectState {
  storage: DurableObjectStorage;
  blockConcurrencyWhile<T>(callback: () => Promise<T>): void;
}

interface DurableObjectStorage {
  get<T>(key: string): Promise<T | undefined>;
  put<T>(key: string, value: T): Promise<void>;
}

// Sequence data stored per chain and account
type SequenceData = {
  [chainId: string]: {
    [accountNumber: number]: {
      sequence: number;
      updated: string;
    };
  };
};

// Request/response types for the DO endpoints
type SignerDataResult = {
  accountNumber: number;
  sequence: number;
  chainId: string;
};

type GetSignerDataParams = {
  chainId: string;
  accountNumber: number;
  chainSequence: number;
};

// ============================================================================
// SequenceManagerDO
// ============================================================================

/**
 * Durable Object for atomic blockchain transaction sequence management.
 *
 * This DO ensures that concurrent workers/workflows get unique, consecutive
 * sequence numbers for blockchain transactions. It implements:
 *
 * - **Atomic increment**: Each request gets a unique sequence number
 * - **Stagger delay**: Ensures chain has time to process transactions in order
 * - **Persistence**: Sequence state survives DO restarts
 * - **Smart sync**: Resets to chain sequence if stale (>7s) or chain is ahead
 *
 * ## How it works
 *
 * When a worker calls the DO:
 * 1. Request enters the mutex queue (serializes concurrent requests)
 * 2. If needed, waits for stagger delay since last allocation
 * 3. Compares chain sequence with stored sequence
 * 4. Returns the appropriate sequence and increments for next caller
 * 5. Persists state to durable storage
 *
 * ## Endpoints
 *
 * - `POST /getSignerData` - Get next sequence number (main endpoint)
 * - `POST /reset` - Reset all sequence data
 * - `GET /status` - Get current state (for debugging)
 *
 * ## Configuration
 *
 * Set `IXO_CLIENT_SEQUENCE_MIN_DELAY_MS` env var to configure stagger delay (default: 300ms).
 *
 * @example
 * ```typescript
 * // In your worker, re-export the class:
 * export { SequenceManagerDO } from '@ixo/impactxclient-sdk';
 *
 * // Then use it via createDOStoreFunctions:
 * const doStub = env.SEQUENCE_MANAGER.get(env.SEQUENCE_MANAGER.idFromName('global'));
 * const storageFunctions = createDOStoreFunctions(doStub);
 * const client = await createSigningClient(rpc, wallet, false, opts, storageFunctions);
 * ```
 */
export class SequenceManagerDO {
  private state: DurableObjectState;
  private data: SequenceData = {};
  private mutex: Promise<void> = Promise.resolve();
  private lastAllocationTime: number = 0;

  /**
   * Minimum delay between sequence allocations in milliseconds.
   * Configurable via IXO_CLIENT_SEQUENCE_MIN_DELAY_MS env var (default: 300ms).
   *
   * Why is this needed?
   * When Worker A gets sequence N and broadcasts, the chain needs time to
   * add it to the mempool before Worker B tries to simulate with sequence N+1.
   * If Worker B's simulation happens too soon, the chain rejects it.
   */
  private minAllocationDelayMs: number;

  /** Default stagger delay if not configured via env */
  private static readonly DEFAULT_MIN_DELAY_MS = 300;

  constructor(state: DurableObjectState, env: Record<string, unknown>) {
    this.state = state;

    // Read configurable delay from env, with default fallback
    const envDelay = env?.IXO_CLIENT_SEQUENCE_MIN_DELAY_MS;
    this.minAllocationDelayMs =
      typeof envDelay === "string"
        ? parseInt(envDelay, 10)
        : typeof envDelay === "number"
          ? envDelay
          : SequenceManagerDO.DEFAULT_MIN_DELAY_MS;

    // Load persisted data before handling any requests
    this.state.blockConcurrencyWhile(async () => {
      const stored =
        await this.state.storage.get<SequenceData>("sequence-data");
      if (stored) {
        this.data = stored;
      }
    });
  }

  /**
   * Mutex pattern for serializing async operations.
   * Ensures only one request modifies state at a time.
   */
  private async withMutex<T>(fn: () => T | Promise<T>): Promise<T> {
    let release: () => void;
    const acquired = new Promise<void>((resolve) => {
      release = resolve;
    });
    const previousMutex = this.mutex;
    this.mutex = acquired;
    await previousMutex;
    try {
      return await fn();
    } finally {
      release!();
    }
  }

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // POST /getSignerData - Main endpoint: get next sequence atomically
    if (url.pathname === "/getSignerData" && request.method === "POST") {
      try {
        const params = (await request.json()) as GetSignerDataParams;
        const result = await this.withMutex(async () => {
          // Enforce stagger delay so chain can process previous tx
          const now = Date.now();
          const timeSinceLast = now - this.lastAllocationTime;
          if (timeSinceLast < this.minAllocationDelayMs) {
            const delay = this.minAllocationDelayMs - timeSinceLast;
            await new Promise((resolve) => setTimeout(resolve, delay));
          }

          const seq = this.allocateSequence(params);
          this.lastAllocationTime = Date.now();

          // Persist async (OK since in-memory state is already updated)
          this.persistData().catch(console.error);
          return seq;
        });

        return new Response(JSON.stringify(result), {
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: String(error) }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    // POST /reset - Clear all sequence data
    if (url.pathname === "/reset" && request.method === "POST") {
      this.data = {};
      this.lastAllocationTime = 0;
      await this.state.storage.put("sequence-data", this.data);
      return new Response(JSON.stringify({ message: "Sequence data reset" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // GET /status - Debug endpoint
    if (url.pathname === "/status") {
      return new Response(
        JSON.stringify({
          data: this.data,
          minDelayMs: this.minAllocationDelayMs,
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response("Not found", { status: 404 });
  }

  /**
   * Core sequence allocation logic.
   *
   * Algorithm (same as store.ts getSignerData):
   * 1. If no stored data, use chain sequence
   * 2. If data is stale (>7s), use chain sequence (tx may have failed)
   * 3. If chain is ahead, use chain sequence (external tx occurred)
   * 4. Otherwise, use stored sequence (rapid consecutive txs)
   * 5. Increment and store for next caller
   */
  private allocateSequence(params: GetSignerDataParams): SignerDataResult {
    const { chainId, accountNumber, chainSequence } = params;
    const now = new Date();

    // Initialize if needed
    if (!this.data[chainId]) this.data[chainId] = {};
    if (!this.data[chainId]![accountNumber]) {
      this.data[chainId]![accountNumber] = {
        sequence: chainSequence,
        updated: now.toISOString(),
      };
    }

    const accountData = this.data[chainId]![accountNumber]!;
    const timeDiff = now.getTime() - new Date(accountData.updated).getTime();

    // Decide which sequence to use
    const useSequence =
      timeDiff > 7000 || timeDiff === 0 || chainSequence > accountData.sequence
        ? chainSequence
        : accountData.sequence;

    // Update for next caller
    this.data[chainId]![accountNumber] = {
      sequence: useSequence + 1,
      updated: now.toISOString(),
    };

    return { accountNumber, sequence: useSequence, chainId };
  }

  private async persistData(): Promise<void> {
    await this.state.storage.put("sequence-data", this.data);
  }
}


/**
 * Type for objects that can be used as a Durable Object stub.
 * Any object with a fetch method that returns a Response works.
 */
export type DOStub = {
  fetch: (request: Request) => Promise<Response>;
};

/**
 * Creates LocalStoreFunctions that use a Durable Object for atomic sequence coordination.
 * The DO must implement a POST /getSignerData endpoint that accepts
 * { chainId, accountNumber, chainSequence } and returns { accountNumber, sequence, chainId }.
 *
 * @param doStub - A Durable Object stub (or any object with a compatible fetch method)
 * @returns LocalStoreFunctions with getAndIncrementSequence implemented
 *
 * @example
 * ```typescript
 * const doId = env.SEQUENCE_MANAGER.idFromName('global');
 * const doStub = env.SEQUENCE_MANAGER.get(doId);
 * const storageFunctions = createDOStoreFunctions(doStub);
 * const client = await createSigningClient(rpc, wallet, false, options, storageFunctions);
 * ```
 */
export function createDOStoreFunctions(doStub: DOStub): LocalStoreFunctions {
  return {
    // These are not used when getAndIncrementSequence is provided,
    // but we provide no-op implementations for interface completeness
    getLocalData: async () => ({}),
    setLocalData: async () => { },

    getAndIncrementSequence: async (params) => {
      const response = await doStub.fetch(
        new Request("http://do/getSignerData", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(params),
        })
      );

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`DO getSignerData failed: ${error}`);
      }

      return response.json();
    },
  };
}