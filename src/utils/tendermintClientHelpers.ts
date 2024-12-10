import { JsonRpcRequest } from "@cosmjs/json-rpc";
import { Int53 } from "@cosmjs/math";
import { fromBase64 } from "@cosmjs/encoding";

const numbersWithoutZero = "123456789";

/** generates a random numeric character  */
function randomNumericChar(): string {
  return numbersWithoutZero[
    Math.floor(Math.random() * numbersWithoutZero.length)
  ];
}

/**
 * An (absolutely not cryptographically secure) random integer > 0.
 */
function randomId(): number {
  return parseInt(
    Array.from({ length: 12 })
      .map(() => randomNumericChar())
      .join(""),
    10
  );
}

/** Creates a JSON-RPC request with random ID */
// eslint-disable-next-line @typescript-eslint/ban-types
export const createJsonRpcRequest = (
  method: string,
  params?: {}
): JsonRpcRequest => {
  const paramsCopy = params ? { ...params } : {};
  return {
    jsonrpc: "2.0",
    id: randomId(),
    method: method,
    params: paramsCopy,
  };
};

// may will run the transform if value is defined, otherwise returns undefined
export function may<T, U>(
  transform: (val: T) => U,
  value: T | null | undefined
): U | undefined {
  return value === undefined || value === null ? undefined : transform(value);
}

interface HeightParam {
  readonly height?: number;
}
interface RpcHeightParam {
  readonly height?: string;
}
export const encodeHeightParam = (param: HeightParam): RpcHeightParam => {
  return {
    height: may(smallIntToApi, param.height),
  };
};

/**
 * Takes an integer in the safe integer range and returns
 * a string representation to be used in the Tendermint RPC API.
 */
export function smallIntToApi(num: number): string {
  return new Int53(num).toString();
}

/**
 * Takes an integer value from the Tendermint RPC API and
 * returns it as number.
 *
 * Only works within the safe integer range.
 */
export function apiToSmallInt(input: string | number): number {
  const asInt =
    typeof input === "number" ? new Int53(input) : Int53.fromString(input);
  return asInt.toNumber();
}

export interface BlockResultsResponse {
  readonly height: number;
  readonly results: readonly TxData[];
  // remove below as not needed for blocksync-core
  // readonly validatorUpdates: readonly ValidatorUpdate[];
  // readonly consensusUpdates?: ConsensusParams;
  readonly beginBlockEvents: readonly RpcEvent[];
  readonly endBlockEvents: readonly RpcEvent[];
  readonly finalizeBlockEvents: readonly RpcEvent[];
}

export const decodeBlockResults = (
  data,
  includeResults: boolean = false
): BlockResultsResponse => {
  return {
    height: apiToSmallInt(data.height),
    results: includeResults ? (data.txs_results || []).map(decodeTxData) : [],
    // remove below as not needed for blocksync-core
    // validatorUpdates: (data.validator_updates || []).map(decodeValidatorUpdate),
    // consensusUpdates: may(decodeConsensusParams, data.consensus_param_updates),
    beginBlockEvents: decodeEvents(data.begin_block_events || []),
    endBlockEvents: decodeEvents(data.end_block_events || []),
    // Add finalize_block_events as cosmos v0.50 has this
    finalizeBlockEvents: decodeEvents(data.finalize_block_events || []),
  };
};

export function decodeEvent(event: RpcEvent): RpcEvent {
  return {
    type: event.type,
    attributes: event.attributes ? decodeAttributes(event.attributes) : [],
  };
}

/**
 * EventAttribute from Tendermint. In 0.35 the type of key and value was changed
 * from bytes to string, such that no base64 encoding is used anymore.
 */
interface RpcEventAttribute {
  readonly key: string;
  readonly value?: string;
}

interface RpcEvent {
  readonly type: string;
  /** Can be omitted (see https://github.com/cosmos/cosmjs/pull/1198) */
  readonly attributes?: readonly RpcEventAttribute[];
}

function decodeEvents(events: readonly RpcEvent[]): readonly RpcEvent[] {
  return events.map(decodeEvent);
}

function decodeAttributes(
  attributes: readonly RpcEventAttribute[]
): RpcEventAttribute[] {
  return attributes.map(decodeEventAttribute);
}

function decodeEventAttribute(attribute: RpcEventAttribute): RpcEventAttribute {
  return {
    key: attribute.key,
    value: attribute.value ?? "",
  };
}

interface RpcTxData {
  readonly codespace?: string;
  readonly code?: number;
  readonly log?: string;
  /** base64 encoded */
  readonly data?: string;
  readonly events?: readonly RpcEvent[];
  readonly gas_wanted?: string;
  readonly gas_used?: string;
}

export interface TxData {
  readonly code: number;
  readonly codespace?: string;
  readonly log?: string;
  readonly data?: Uint8Array;
  readonly events: readonly RpcEvent[];
  readonly gasWanted: bigint;
  readonly gasUsed: bigint;
}

function decodeTxData(data: RpcTxData): TxData {
  return {
    code: apiToSmallInt(data.code ?? 0),
    codespace: data.codespace,
    log: data.log,
    data: may(fromBase64, data.data),
    events: data.events ? decodeEvents(data.events) : [],
    gasWanted: apiToBigInt(data.gas_wanted ?? "0"),
    gasUsed: apiToBigInt(data.gas_used ?? "0"),
  };
}

/**
 * Takes an integer value from the Tendermint RPC API and
 * returns it as BigInt.
 *
 * This supports the full uint64 and int64 ranges.
 */
export function apiToBigInt(input: string): bigint {
  if (!input.match(/^-?[0-9]+$/)) {
    throw new Error("Invalid string format");
  }
  return BigInt(input);
}
