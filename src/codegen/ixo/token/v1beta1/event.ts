import { TokenBatch, TokenBatchSDKType } from "./tx";
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
  /** the owner account of the change */

  owner: string;
}
/** TokenUpdatedEvent is an event triggered on a Token update */

export interface TokenUpdatedEventSDKType {
  /** contract_address of token updated */
  contract_address: string;
  /** the owner account of the change */

  owner: string;
}
/** TokenMintedEvent is an event triggered on a Token mint execution */

export interface TokenMintedEvent {
  /** the contract address of token contract being initialized */
  contractAddress: string;
  /** the token minter */

  minter: string;
  /** the new tokens owner */

  owner: string;
  batches: TokenBatch[];
}
/** TokenMintedEvent is an event triggered on a Token mint execution */

export interface TokenMintedEventSDKType {
  /** the contract address of token contract being initialized */
  contract_address: string;
  /** the token minter */

  minter: string;
  /** the new tokens owner */

  owner: string;
  batches: TokenBatchSDKType[];
}
/** TokenTransferedEvent is an event triggered on a Token transfer execution */

export interface TokenTransferredEvent {
  /** the old token owner */
  owner: string;
  /** the new tokens owner */

  recipient: string;
  tokens: TokenBatch[];
}
/** TokenTransferedEvent is an event triggered on a Token transfer execution */

export interface TokenTransferredEventSDKType {
  /** the old token owner */
  owner: string;
  /** the new tokens owner */

  recipient: string;
  tokens: TokenBatchSDKType[];
}
/** TokenCancelledEvent is an event triggered on a Token cancel execution */

export interface TokenCancelledEvent {
  /** the token owner */
  owner: string;
  tokens: TokenBatch[];
}
/** TokenCancelledEvent is an event triggered on a Token cancel execution */

export interface TokenCancelledEventSDKType {
  /** the token owner */
  owner: string;
  tokens: TokenBatchSDKType[];
}
/** TokenRetiredEvent is an event triggered on a Token retire execution */

export interface TokenRetiredEvent {
  /** the token owner */
  owner: string;
  tokens: TokenBatch[];
}
/** TokenRetiredEvent is an event triggered on a Token retire execution */

export interface TokenRetiredEventSDKType {
  /** the token owner */
  owner: string;
  tokens: TokenBatchSDKType[];
}
/** TokenPausedEvent is an event triggered on a Token pause/unpause execution */

export interface TokenPausedEvent {
  /** the minter address */
  minter: string;
  contractAddress: string;
  paused: boolean;
}
/** TokenPausedEvent is an event triggered on a Token pause/unpause execution */

export interface TokenPausedEventSDKType {
  /** the minter address */
  minter: string;
  contract_address: string;
  paused: boolean;
}
/** TokenStoppedEvent is an event triggered on a Token stopped execution */

export interface TokenStoppedEvent {
  /** the minter address */
  minter: string;
  contractAddress: string;
  stopped: boolean;
}
/** TokenStoppedEvent is an event triggered on a Token stopped execution */

export interface TokenStoppedEventSDKType {
  /** the minter address */
  minter: string;
  contract_address: string;
  stopped: boolean;
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
    owner: ""
  };
}

export const TokenUpdatedEvent = {
  encode(message: TokenUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
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
          message.owner = reader.string();
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
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: TokenUpdatedEvent): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: Partial<TokenUpdatedEvent>): TokenUpdatedEvent {
    const message = createBaseTokenUpdatedEvent();
    message.contractAddress = object.contractAddress ?? "";
    message.owner = object.owner ?? "";
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
      TokenBatch.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.batches.push(TokenBatch.decode(reader, reader.uint32()));
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
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => TokenBatch.fromJSON(e)) : []
    };
  },

  toJSON(message: TokenMintedEvent): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.minter !== undefined && (obj.minter = message.minter);
    message.owner !== undefined && (obj.owner = message.owner);

    if (message.batches) {
      obj.batches = message.batches.map(e => e ? TokenBatch.toJSON(e) : undefined);
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
    message.batches = object.batches?.map(e => TokenBatch.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTokenTransferredEvent(): TokenTransferredEvent {
  return {
    owner: "",
    recipient: "",
    tokens: []
  };
}

export const TokenTransferredEvent = {
  encode(message: TokenTransferredEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }

    for (const v of message.tokens) {
      TokenBatch.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenTransferredEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenTransferredEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.recipient = reader.string();
          break;

        case 3:
          message.tokens.push(TokenBatch.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenTransferredEvent {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => TokenBatch.fromJSON(e)) : []
    };
  },

  toJSON(message: TokenTransferredEvent): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.recipient !== undefined && (obj.recipient = message.recipient);

    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? TokenBatch.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }

    return obj;
  },

  fromPartial(object: Partial<TokenTransferredEvent>): TokenTransferredEvent {
    const message = createBaseTokenTransferredEvent();
    message.owner = object.owner ?? "";
    message.recipient = object.recipient ?? "";
    message.tokens = object.tokens?.map(e => TokenBatch.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTokenCancelledEvent(): TokenCancelledEvent {
  return {
    owner: "",
    tokens: []
  };
}

export const TokenCancelledEvent = {
  encode(message: TokenCancelledEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    for (const v of message.tokens) {
      TokenBatch.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenCancelledEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenCancelledEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.tokens.push(TokenBatch.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenCancelledEvent {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => TokenBatch.fromJSON(e)) : []
    };
  },

  toJSON(message: TokenCancelledEvent): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);

    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? TokenBatch.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }

    return obj;
  },

  fromPartial(object: Partial<TokenCancelledEvent>): TokenCancelledEvent {
    const message = createBaseTokenCancelledEvent();
    message.owner = object.owner ?? "";
    message.tokens = object.tokens?.map(e => TokenBatch.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTokenRetiredEvent(): TokenRetiredEvent {
  return {
    owner: "",
    tokens: []
  };
}

export const TokenRetiredEvent = {
  encode(message: TokenRetiredEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    for (const v of message.tokens) {
      TokenBatch.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenRetiredEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenRetiredEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.tokens.push(TokenBatch.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenRetiredEvent {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => TokenBatch.fromJSON(e)) : []
    };
  },

  toJSON(message: TokenRetiredEvent): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);

    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? TokenBatch.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }

    return obj;
  },

  fromPartial(object: Partial<TokenRetiredEvent>): TokenRetiredEvent {
    const message = createBaseTokenRetiredEvent();
    message.owner = object.owner ?? "";
    message.tokens = object.tokens?.map(e => TokenBatch.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTokenPausedEvent(): TokenPausedEvent {
  return {
    minter: "",
    contractAddress: "",
    paused: false
  };
}

export const TokenPausedEvent = {
  encode(message: TokenPausedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }

    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }

    if (message.paused === true) {
      writer.uint32(24).bool(message.paused);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPausedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPausedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minter = reader.string();
          break;

        case 2:
          message.contractAddress = reader.string();
          break;

        case 3:
          message.paused = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenPausedEvent {
    return {
      minter: isSet(object.minter) ? String(object.minter) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      paused: isSet(object.paused) ? Boolean(object.paused) : false
    };
  },

  toJSON(message: TokenPausedEvent): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.paused !== undefined && (obj.paused = message.paused);
    return obj;
  },

  fromPartial(object: Partial<TokenPausedEvent>): TokenPausedEvent {
    const message = createBaseTokenPausedEvent();
    message.minter = object.minter ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.paused = object.paused ?? false;
    return message;
  }

};

function createBaseTokenStoppedEvent(): TokenStoppedEvent {
  return {
    minter: "",
    contractAddress: "",
    stopped: false
  };
}

export const TokenStoppedEvent = {
  encode(message: TokenStoppedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }

    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }

    if (message.stopped === true) {
      writer.uint32(24).bool(message.stopped);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenStoppedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenStoppedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minter = reader.string();
          break;

        case 2:
          message.contractAddress = reader.string();
          break;

        case 3:
          message.stopped = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenStoppedEvent {
    return {
      minter: isSet(object.minter) ? String(object.minter) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      stopped: isSet(object.stopped) ? Boolean(object.stopped) : false
    };
  },

  toJSON(message: TokenStoppedEvent): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.stopped !== undefined && (obj.stopped = message.stopped);
    return obj;
  },

  fromPartial(object: Partial<TokenStoppedEvent>): TokenStoppedEvent {
    const message = createBaseTokenStoppedEvent();
    message.minter = object.minter ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.stopped = object.stopped ?? false;
    return message;
  }

};