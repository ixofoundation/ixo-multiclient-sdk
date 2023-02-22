import { TokenData, TokenDataSDKType } from "./token";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface MsgCreateToken {
  /** address of minter */
  minter: string;
  /** class is the token protocol entity DID (validated) */

  class: string;
  /** name is the token name, which must be unique (namespace) */

  name: string;
  /** description is any arbitrary description */

  description: string;
  /** image is the image url for the token */

  image: string;
  /** type is the token type (eg ixo1155) */

  tokenType: string;
  /**
   * cap is the maximum number of tokens with this name that can be minted, 0 is
   * unlimited
   */

  cap: string;
}
export interface MsgCreateTokenSDKType {
  /** address of minter */
  minter: string;
  /** class is the token protocol entity DID (validated) */

  class: string;
  /** name is the token name, which must be unique (namespace) */

  name: string;
  /** description is any arbitrary description */

  description: string;
  /** image is the image url for the token */

  image: string;
  /** type is the token type (eg ixo1155) */

  token_type: string;
  /**
   * cap is the maximum number of tokens with this name that can be minted, 0 is
   * unlimited
   */

  cap: string;
}
export interface MsgCreateTokenResponse {}
export interface MsgCreateTokenResponseSDKType {}
export interface MsgMintToken {
  /** address of minter */
  minter: string;
  contractAddress: string;
  /** address of owner to mint for */

  owner: string;
  mintBatch: MintBatch[];
}
export interface MsgMintTokenSDKType {
  /** address of minter */
  minter: string;
  contract_address: string;
  /** address of owner to mint for */

  owner: string;
  mint_batch: MintBatchSDKType[];
}
export interface MintBatch {
  /**
   * name is the token name, which must be unique (namespace), will be verified
   * against Token name provided on msgCreateToken
   */
  name: string;
  /** index is the unique identifier hexstring that identifies the token */

  index: string;
  /** amount is the number of tokens to mint */

  amount: string;
  /** did of collection (eg Supamoto Malawi) */

  collection: string;
  /**
   * tokenData is the linkedResources added to tokenMetadata when queried eg
   * (credential link ***.ipfs)
   */

  tokenData: TokenData[];
}
export interface MintBatchSDKType {
  /**
   * name is the token name, which must be unique (namespace), will be verified
   * against Token name provided on msgCreateToken
   */
  name: string;
  /** index is the unique identifier hexstring that identifies the token */

  index: string;
  /** amount is the number of tokens to mint */

  amount: string;
  /** did of collection (eg Supamoto Malawi) */

  collection: string;
  /**
   * tokenData is the linkedResources added to tokenMetadata when queried eg
   * (credential link ***.ipfs)
   */

  token_data: TokenDataSDKType[];
}
export interface MsgMintTokenResponse {}
export interface MsgMintTokenResponseSDKType {}
export interface MsgTransferToken {
  /** address of owner */
  owner: string;
  /** address of receiver */

  recipient: string;
  /** all tokens must be in same smart contract */

  tokens: TokenBatch[];
}
export interface MsgTransferTokenSDKType {
  /** address of owner */
  owner: string;
  /** address of receiver */

  recipient: string;
  /** all tokens must be in same smart contract */

  tokens: TokenBatchSDKType[];
}
export interface MsgTransferTokenResponse {}
export interface MsgTransferTokenResponseSDKType {}
export interface TokenBatch {
  /** id that identifies the token */
  id: string;
  /** amount is the number of tokens to transfer */

  amount: string;
}
export interface TokenBatchSDKType {
  /** id that identifies the token */
  id: string;
  /** amount is the number of tokens to transfer */

  amount: string;
}
export interface MsgRetireToken {
  /** address of owner */
  owner: string;
  /** tokens to retire, all tokens must be in same smart contract */

  tokens: TokenBatch[];
  /**
   * jurisdiction is the jurisdiction of the token owner. A jurisdiction has
   * the format: <country-code>[-<sub-national-code>[ <postal-code>]]
   * The country-code must be 2 alphabetic characters, the sub-national-code
   * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
   * alphanumeric characters. Only the country-code is required, while the
   * sub-national-code and postal-code are optional and can be added for
   * increased precision. See the valid format for this below.
   */

  jurisdiction: string;
  /**
   * reason is any arbitrary string that specifies the reason for retiring
   * tokens.
   */

  reason: string;
}
export interface MsgRetireTokenSDKType {
  /** address of owner */
  owner: string;
  /** tokens to retire, all tokens must be in same smart contract */

  tokens: TokenBatchSDKType[];
  /**
   * jurisdiction is the jurisdiction of the token owner. A jurisdiction has
   * the format: <country-code>[-<sub-national-code>[ <postal-code>]]
   * The country-code must be 2 alphabetic characters, the sub-national-code
   * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
   * alphanumeric characters. Only the country-code is required, while the
   * sub-national-code and postal-code are optional and can be added for
   * increased precision. See the valid format for this below.
   */

  jurisdiction: string;
  /**
   * reason is any arbitrary string that specifies the reason for retiring
   * tokens.
   */

  reason: string;
}
export interface MsgRetireTokenResponse {}
export interface MsgRetireTokenResponseSDKType {}
export interface MsgCancelToken {
  /** address of owner */
  owner: string;
  /** tokens to retire, all tokens must be in same smart contract */

  tokens: TokenBatch[];
  /**
   * reason is any arbitrary string that specifies the reason for retiring
   * tokens.
   */

  reason: string;
}
export interface MsgCancelTokenSDKType {
  /** address of owner */
  owner: string;
  /** tokens to retire, all tokens must be in same smart contract */

  tokens: TokenBatchSDKType[];
  /**
   * reason is any arbitrary string that specifies the reason for retiring
   * tokens.
   */

  reason: string;
}
export interface MsgCancelTokenResponse {}
export interface MsgCancelTokenResponseSDKType {}
export interface MsgPauseToken {
  /** address of minter */
  minter: string;
  contractAddress: string;
  /** pause or unpause Token Minting allowance */

  paused: boolean;
}
export interface MsgPauseTokenSDKType {
  /** address of minter */
  minter: string;
  contract_address: string;
  /** pause or unpause Token Minting allowance */

  paused: boolean;
}
export interface MsgPauseTokenResponse {}
export interface MsgPauseTokenResponseSDKType {}
export interface MsgStopToken {
  /** address of minter */
  minter: string;
  contractAddress: string;
}
export interface MsgStopTokenSDKType {
  /** address of minter */
  minter: string;
  contract_address: string;
}
export interface MsgStopTokenResponse {}
export interface MsgStopTokenResponseSDKType {}

function createBaseMsgCreateToken(): MsgCreateToken {
  return {
    minter: "",
    class: "",
    name: "",
    description: "",
    image: "",
    tokenType: "",
    cap: ""
  };
}

export const MsgCreateToken = {
  encode(message: MsgCreateToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }

    if (message.class !== "") {
      writer.uint32(18).string(message.class);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }

    if (message.image !== "") {
      writer.uint32(42).string(message.image);
    }

    if (message.tokenType !== "") {
      writer.uint32(50).string(message.tokenType);
    }

    if (message.cap !== "") {
      writer.uint32(58).string(message.cap);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minter = reader.string();
          break;

        case 2:
          message.class = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.description = reader.string();
          break;

        case 5:
          message.image = reader.string();
          break;

        case 6:
          message.tokenType = reader.string();
          break;

        case 7:
          message.cap = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateToken {
    return {
      minter: isSet(object.minter) ? String(object.minter) : "",
      class: isSet(object.class) ? String(object.class) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      image: isSet(object.image) ? String(object.image) : "",
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : "",
      cap: isSet(object.cap) ? String(object.cap) : ""
    };
  },

  toJSON(message: MsgCreateToken): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter);
    message.class !== undefined && (obj.class = message.class);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.image !== undefined && (obj.image = message.image);
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    message.cap !== undefined && (obj.cap = message.cap);
    return obj;
  },

  fromPartial(object: Partial<MsgCreateToken>): MsgCreateToken {
    const message = createBaseMsgCreateToken();
    message.minter = object.minter ?? "";
    message.class = object.class ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.image = object.image ?? "";
    message.tokenType = object.tokenType ?? "";
    message.cap = object.cap ?? "";
    return message;
  }

};

function createBaseMsgCreateTokenResponse(): MsgCreateTokenResponse {
  return {};
}

export const MsgCreateTokenResponse = {
  encode(_: MsgCreateTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTokenResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCreateTokenResponse {
    return {};
  },

  toJSON(_: MsgCreateTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgCreateTokenResponse>): MsgCreateTokenResponse {
    const message = createBaseMsgCreateTokenResponse();
    return message;
  }

};

function createBaseMsgMintToken(): MsgMintToken {
  return {
    minter: "",
    contractAddress: "",
    owner: "",
    mintBatch: []
  };
}

export const MsgMintToken = {
  encode(message: MsgMintToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }

    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    for (const v of message.mintBatch) {
      MintBatch.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintToken();

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
          message.owner = reader.string();
          break;

        case 4:
          message.mintBatch.push(MintBatch.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMintToken {
    return {
      minter: isSet(object.minter) ? String(object.minter) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      mintBatch: Array.isArray(object?.mintBatch) ? object.mintBatch.map((e: any) => MintBatch.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgMintToken): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.owner !== undefined && (obj.owner = message.owner);

    if (message.mintBatch) {
      obj.mintBatch = message.mintBatch.map(e => e ? MintBatch.toJSON(e) : undefined);
    } else {
      obj.mintBatch = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgMintToken>): MsgMintToken {
    const message = createBaseMsgMintToken();
    message.minter = object.minter ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.owner = object.owner ?? "";
    message.mintBatch = object.mintBatch?.map(e => MintBatch.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMintBatch(): MintBatch {
  return {
    name: "",
    index: "",
    amount: "",
    collection: "",
    tokenData: []
  };
}

export const MintBatch = {
  encode(message: MintBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    if (message.collection !== "") {
      writer.uint32(34).string(message.collection);
    }

    for (const v of message.tokenData) {
      TokenData.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintBatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.index = reader.string();
          break;

        case 3:
          message.amount = reader.string();
          break;

        case 4:
          message.collection = reader.string();
          break;

        case 5:
          message.tokenData.push(TokenData.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MintBatch {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      index: isSet(object.index) ? String(object.index) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      collection: isSet(object.collection) ? String(object.collection) : "",
      tokenData: Array.isArray(object?.tokenData) ? object.tokenData.map((e: any) => TokenData.fromJSON(e)) : []
    };
  },

  toJSON(message: MintBatch): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.index !== undefined && (obj.index = message.index);
    message.amount !== undefined && (obj.amount = message.amount);
    message.collection !== undefined && (obj.collection = message.collection);

    if (message.tokenData) {
      obj.tokenData = message.tokenData.map(e => e ? TokenData.toJSON(e) : undefined);
    } else {
      obj.tokenData = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MintBatch>): MintBatch {
    const message = createBaseMintBatch();
    message.name = object.name ?? "";
    message.index = object.index ?? "";
    message.amount = object.amount ?? "";
    message.collection = object.collection ?? "";
    message.tokenData = object.tokenData?.map(e => TokenData.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgMintTokenResponse(): MsgMintTokenResponse {
  return {};
}

export const MsgMintTokenResponse = {
  encode(_: MsgMintTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintTokenResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgMintTokenResponse {
    return {};
  },

  toJSON(_: MsgMintTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgMintTokenResponse>): MsgMintTokenResponse {
    const message = createBaseMsgMintTokenResponse();
    return message;
  }

};

function createBaseMsgTransferToken(): MsgTransferToken {
  return {
    owner: "",
    recipient: "",
    tokens: []
  };
}

export const MsgTransferToken = {
  encode(message: MsgTransferToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferToken();

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

  fromJSON(object: any): MsgTransferToken {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => TokenBatch.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgTransferToken): unknown {
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

  fromPartial(object: Partial<MsgTransferToken>): MsgTransferToken {
    const message = createBaseMsgTransferToken();
    message.owner = object.owner ?? "";
    message.recipient = object.recipient ?? "";
    message.tokens = object.tokens?.map(e => TokenBatch.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgTransferTokenResponse(): MsgTransferTokenResponse {
  return {};
}

export const MsgTransferTokenResponse = {
  encode(_: MsgTransferTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgTransferTokenResponse {
    return {};
  },

  toJSON(_: MsgTransferTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgTransferTokenResponse>): MsgTransferTokenResponse {
    const message = createBaseMsgTransferTokenResponse();
    return message;
  }

};

function createBaseTokenBatch(): TokenBatch {
  return {
    id: "",
    amount: ""
  };
}

export const TokenBatch = {
  encode(message: TokenBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenBatch();

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

  fromJSON(object: any): TokenBatch {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: TokenBatch): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: Partial<TokenBatch>): TokenBatch {
    const message = createBaseTokenBatch();
    message.id = object.id ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgRetireToken(): MsgRetireToken {
  return {
    owner: "",
    tokens: [],
    jurisdiction: "",
    reason: ""
  };
}

export const MsgRetireToken = {
  encode(message: MsgRetireToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    for (const v of message.tokens) {
      TokenBatch.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.jurisdiction !== "") {
      writer.uint32(26).string(message.jurisdiction);
    }

    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetireToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetireToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.tokens.push(TokenBatch.decode(reader, reader.uint32()));
          break;

        case 3:
          message.jurisdiction = reader.string();
          break;

        case 4:
          message.reason = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRetireToken {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => TokenBatch.fromJSON(e)) : [],
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : "",
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },

  toJSON(message: MsgRetireToken): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);

    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? TokenBatch.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }

    message.jurisdiction !== undefined && (obj.jurisdiction = message.jurisdiction);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial(object: Partial<MsgRetireToken>): MsgRetireToken {
    const message = createBaseMsgRetireToken();
    message.owner = object.owner ?? "";
    message.tokens = object.tokens?.map(e => TokenBatch.fromPartial(e)) || [];
    message.jurisdiction = object.jurisdiction ?? "";
    message.reason = object.reason ?? "";
    return message;
  }

};

function createBaseMsgRetireTokenResponse(): MsgRetireTokenResponse {
  return {};
}

export const MsgRetireTokenResponse = {
  encode(_: MsgRetireTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetireTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetireTokenResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgRetireTokenResponse {
    return {};
  },

  toJSON(_: MsgRetireTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgRetireTokenResponse>): MsgRetireTokenResponse {
    const message = createBaseMsgRetireTokenResponse();
    return message;
  }

};

function createBaseMsgCancelToken(): MsgCancelToken {
  return {
    owner: "",
    tokens: [],
    reason: ""
  };
}

export const MsgCancelToken = {
  encode(message: MsgCancelToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    for (const v of message.tokens) {
      TokenBatch.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.tokens.push(TokenBatch.decode(reader, reader.uint32()));
          break;

        case 3:
          message.reason = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCancelToken {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => TokenBatch.fromJSON(e)) : [],
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },

  toJSON(message: MsgCancelToken): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);

    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? TokenBatch.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }

    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial(object: Partial<MsgCancelToken>): MsgCancelToken {
    const message = createBaseMsgCancelToken();
    message.owner = object.owner ?? "";
    message.tokens = object.tokens?.map(e => TokenBatch.fromPartial(e)) || [];
    message.reason = object.reason ?? "";
    return message;
  }

};

function createBaseMsgCancelTokenResponse(): MsgCancelTokenResponse {
  return {};
}

export const MsgCancelTokenResponse = {
  encode(_: MsgCancelTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelTokenResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCancelTokenResponse {
    return {};
  },

  toJSON(_: MsgCancelTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgCancelTokenResponse>): MsgCancelTokenResponse {
    const message = createBaseMsgCancelTokenResponse();
    return message;
  }

};

function createBaseMsgPauseToken(): MsgPauseToken {
  return {
    minter: "",
    contractAddress: "",
    paused: false
  };
}

export const MsgPauseToken = {
  encode(message: MsgPauseToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseToken();

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

  fromJSON(object: any): MsgPauseToken {
    return {
      minter: isSet(object.minter) ? String(object.minter) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      paused: isSet(object.paused) ? Boolean(object.paused) : false
    };
  },

  toJSON(message: MsgPauseToken): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.paused !== undefined && (obj.paused = message.paused);
    return obj;
  },

  fromPartial(object: Partial<MsgPauseToken>): MsgPauseToken {
    const message = createBaseMsgPauseToken();
    message.minter = object.minter ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.paused = object.paused ?? false;
    return message;
  }

};

function createBaseMsgPauseTokenResponse(): MsgPauseTokenResponse {
  return {};
}

export const MsgPauseTokenResponse = {
  encode(_: MsgPauseTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseTokenResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgPauseTokenResponse {
    return {};
  },

  toJSON(_: MsgPauseTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgPauseTokenResponse>): MsgPauseTokenResponse {
    const message = createBaseMsgPauseTokenResponse();
    return message;
  }

};

function createBaseMsgStopToken(): MsgStopToken {
  return {
    minter: "",
    contractAddress: ""
  };
}

export const MsgStopToken = {
  encode(message: MsgStopToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }

    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStopToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStopToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minter = reader.string();
          break;

        case 2:
          message.contractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgStopToken {
    return {
      minter: isSet(object.minter) ? String(object.minter) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },

  toJSON(message: MsgStopToken): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: Partial<MsgStopToken>): MsgStopToken {
    const message = createBaseMsgStopToken();
    message.minter = object.minter ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }

};

function createBaseMsgStopTokenResponse(): MsgStopTokenResponse {
  return {};
}

export const MsgStopTokenResponse = {
  encode(_: MsgStopTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStopTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStopTokenResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgStopTokenResponse {
    return {};
  },

  toJSON(_: MsgStopTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgStopTokenResponse>): MsgStopTokenResponse {
    const message = createBaseMsgStopTokenResponse();
    return message;
  }

};