import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** TokenCreatedEvent is an event triggered on a Token creation */

export interface TokenCreatedEvent {
  /** the contract address of token contract being initialized */
  contractAddress: string;
  /** the token minter */

  minter: string;
}
/** TokenCreatedEvent is an event triggered on a Token creation */

export interface TokenCreatedEventSDKType {
  /** the contract address of token contract being initialized */
  contract_address: string;
  /** the token minter */

  minter: string;
}
/** TokenUpdatedEvent is an event triggered on a Token update */

export interface TokenUpdatedEvent {
  /** contract_address of token updated */
  contractAddress: string;
  /** the signer account of the change */

  signer: string;
}
/** TokenUpdatedEvent is an event triggered on a Token update */

export interface TokenUpdatedEventSDKType {
  /** contract_address of token updated */
  contract_address: string;
  /** the signer account of the change */

  signer: string;
}
/** TokenMintedEvent is an event triggered on a Token mint execution */

export interface TokenMintedEvent {
  /** the contract address of token contract being initialized */
  contractAddress: string;
  /** the token minter */

  minter: string;
  /** the new tokens owner */

  owner: string;
  batches: TokenMintedBatch[];
}
/** TokenMintedEvent is an event triggered on a Token mint execution */

export interface TokenMintedEventSDKType {
  /** the contract address of token contract being initialized */
  contract_address: string;
  /** the token minter */

  minter: string;
  /** the new tokens owner */

  owner: string;
  batches: TokenMintedBatchSDKType[];
}
export interface TokenMintedBatch {
  /** id of token(s) minted */
  id: string;
  /** amount of tokens minted */

  amount: string;
}
export interface TokenMintedBatchSDKType {
  /** id of token(s) minted */
  id: string;
  /** amount of tokens minted */

  amount: string;
}

function createBaseTokenCreatedEvent(): TokenCreatedEvent {
  return {
    contractAddress: "",
    minter: ""
  };
}

export const TokenCreatedEvent = {
  encode(message: TokenCreatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.minter !== "") {
      writer.uint32(18).string(message.minter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenCreatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenCreatedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.minter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenCreatedEvent {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      minter: isSet(object.minter) ? String(object.minter) : ""
    };
  },

  toJSON(message: TokenCreatedEvent): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.minter !== undefined && (obj.minter = message.minter);
    return obj;
  },

  fromPartial(object: Partial<TokenCreatedEvent>): TokenCreatedEvent {
    const message = createBaseTokenCreatedEvent();
    message.contractAddress = object.contractAddress ?? "";
    message.minter = object.minter ?? "";
    return message;
  }

};

function createBaseTokenUpdatedEvent(): TokenUpdatedEvent {
  return {
    contractAddress: "",
    signer: ""
  };
}

export const TokenUpdatedEvent = {
  encode(message: TokenUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenUpdatedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenUpdatedEvent {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: TokenUpdatedEvent): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: Partial<TokenUpdatedEvent>): TokenUpdatedEvent {
    const message = createBaseTokenUpdatedEvent();
    message.contractAddress = object.contractAddress ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseTokenMintedEvent(): TokenMintedEvent {
  return {
    contractAddress: "",
    minter: "",
    owner: "",
    batches: []
  };
}

export const TokenMintedEvent = {
  encode(message: TokenMintedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.minter !== "") {
      writer.uint32(18).string(message.minter);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    for (const v of message.batches) {
      TokenMintedBatch.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenMintedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenMintedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.minter = reader.string();
          break;

        case 3:
          message.owner = reader.string();
          break;

        case 4:
          message.batches.push(TokenMintedBatch.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenMintedEvent {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      minter: isSet(object.minter) ? String(object.minter) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => TokenMintedBatch.fromJSON(e)) : []
    };
  },

  toJSON(message: TokenMintedEvent): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.minter !== undefined && (obj.minter = message.minter);
    message.owner !== undefined && (obj.owner = message.owner);

    if (message.batches) {
      obj.batches = message.batches.map(e => e ? TokenMintedBatch.toJSON(e) : undefined);
    } else {
      obj.batches = [];
    }

    return obj;
  },

  fromPartial(object: Partial<TokenMintedEvent>): TokenMintedEvent {
    const message = createBaseTokenMintedEvent();
    message.contractAddress = object.contractAddress ?? "";
    message.minter = object.minter ?? "";
    message.owner = object.owner ?? "";
    message.batches = object.batches?.map(e => TokenMintedBatch.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTokenMintedBatch(): TokenMintedBatch {
  return {
    id: "",
    amount: ""
  };
}

export const TokenMintedBatch = {
  encode(message: TokenMintedBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenMintedBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenMintedBatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenMintedBatch {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: TokenMintedBatch): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: Partial<TokenMintedBatch>): TokenMintedBatch {
    const message = createBaseTokenMintedBatch();
    message.id = object.id ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};