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
 * 3. DO adds a stagger delay (400ms default) so chain can process transactions in order
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
 * the stagger delay (default: 400ms):
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
interface DurableObjectState {
    storage: DurableObjectStorage;
    blockConcurrencyWhile<T>(callback: () => Promise<T>): void;
}
interface DurableObjectStorage {
    get<T>(key: string): Promise<T | undefined>;
    put<T>(key: string, value: T): Promise<void>;
}
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
 * Set `IXO_CLIENT_SEQUENCE_MIN_DELAY_MS` env var to configure stagger delay (default: 400ms).
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
export declare class SequenceManagerDO {
    private state;
    private data;
    private mutex;
    private lastAllocationTime;
    /**
     * Minimum delay between sequence allocations in milliseconds.
     * Configurable via IXO_CLIENT_SEQUENCE_MIN_DELAY_MS env var (default: 400ms).
     *
     * Why is this needed?
     * When Worker A gets sequence N and broadcasts, the chain needs time to
     * add it to the mempool before Worker B tries to simulate with sequence N+1.
     * If Worker B's simulation happens too soon, the chain rejects it.
     */
    private minAllocationDelayMs;
    /** Default stagger delay if not configured via env */
    private static readonly DEFAULT_MIN_DELAY_MS;
    constructor(state: DurableObjectState, env: Record<string, unknown>);
    /**
     * Mutex pattern for serializing async operations.
     * Ensures only one request modifies state at a time.
     */
    private withMutex;
    fetch(request: Request): Promise<Response>;
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
    private allocateSequence;
    private persistData;
}
/**
 * Type for objects that can be used as a Durable Object stub.
 * Any object with a fetch method that returns a Response works.
 */
export declare type DOStub = {
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
export declare function createDOStoreFunctions(doStub: DOStub): LocalStoreFunctions;
export {};
