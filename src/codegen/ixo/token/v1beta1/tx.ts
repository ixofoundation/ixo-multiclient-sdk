import { TokenData, TokenDataSDKType } from "./token";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface MsgCreateToken {
  minterDid: string;
  minterAddress: string;
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
  minter_did: string;
  minter_address: string;
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
  minterDid: string;
  minterAddress: string;
  contractAddress: string;
  ownerDid: string;
  mintBatch: MintBatch[];
}
export interface MsgMintTokenSDKType {
  minter_did: string;
  minter_address: string;
  contract_address: string;
  owner_did: string;
  mintBatch: MintBatchSDKType[];
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

  tokenData: TokenDataSDKType[];
}
export interface MsgMintTokenResponse {}
export interface MsgMintTokenResponseSDKType {}
export interface MsgTransferToken {
  tokenDid: string;
  /** The ownersdid used to sign this transaction. */

  ownerDid: string;
  /** The owners address used to sign this transaction. */

  ownerAddress: string;
  recipientDid: string;
}
export interface MsgTransferTokenSDKType {
  token_did: string;
  /** The ownersdid used to sign this transaction. */

  owner_did: string;
  /** The owners address used to sign this transaction. */

  owner_address: string;
  recipient_did: string;
}
export interface MsgTransferTokenResponse {}
export interface MsgTransferTokenResponseSDKType {}

function createBaseMsgCreateToken(): MsgCreateToken {
  return {
    minterDid: "",
    minterAddress: "",
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
    if (message.minterDid !== "") {
      writer.uint32(10).string(message.minterDid);
    }

    if (message.minterAddress !== "") {
      writer.uint32(18).string(message.minterAddress);
    }

    if (message.class !== "") {
      writer.uint32(26).string(message.class);
    }

    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }

    if (message.image !== "") {
      writer.uint32(50).string(message.image);
    }

    if (message.tokenType !== "") {
      writer.uint32(58).string(message.tokenType);
    }

    if (message.cap !== "") {
      writer.uint32(66).string(message.cap);
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
          message.minterDid = reader.string();
          break;

        case 2:
          message.minterAddress = reader.string();
          break;

        case 3:
          message.class = reader.string();
          break;

        case 4:
          message.name = reader.string();
          break;

        case 5:
          message.description = reader.string();
          break;

        case 6:
          message.image = reader.string();
          break;

        case 7:
          message.tokenType = reader.string();
          break;

        case 8:
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
      minterDid: isSet(object.minterDid) ? String(object.minterDid) : "",
      minterAddress: isSet(object.minterAddress) ? String(object.minterAddress) : "",
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
    message.minterDid !== undefined && (obj.minterDid = message.minterDid);
    message.minterAddress !== undefined && (obj.minterAddress = message.minterAddress);
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
    message.minterDid = object.minterDid ?? "";
    message.minterAddress = object.minterAddress ?? "";
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
    minterDid: "",
    minterAddress: "",
    contractAddress: "",
    ownerDid: "",
    mintBatch: []
  };
}

export const MsgMintToken = {
  encode(message: MsgMintToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minterDid !== "") {
      writer.uint32(10).string(message.minterDid);
    }

    if (message.minterAddress !== "") {
      writer.uint32(18).string(message.minterAddress);
    }

    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }

    if (message.ownerDid !== "") {
      writer.uint32(34).string(message.ownerDid);
    }

    for (const v of message.mintBatch) {
      MintBatch.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.minterDid = reader.string();
          break;

        case 2:
          message.minterAddress = reader.string();
          break;

        case 3:
          message.contractAddress = reader.string();
          break;

        case 4:
          message.ownerDid = reader.string();
          break;

        case 5:
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
      minterDid: isSet(object.minterDid) ? String(object.minterDid) : "",
      minterAddress: isSet(object.minterAddress) ? String(object.minterAddress) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      ownerDid: isSet(object.ownerDid) ? String(object.ownerDid) : "",
      mintBatch: Array.isArray(object?.mintBatch) ? object.mintBatch.map((e: any) => MintBatch.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgMintToken): unknown {
    const obj: any = {};
    message.minterDid !== undefined && (obj.minterDid = message.minterDid);
    message.minterAddress !== undefined && (obj.minterAddress = message.minterAddress);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.ownerDid !== undefined && (obj.ownerDid = message.ownerDid);

    if (message.mintBatch) {
      obj.mintBatch = message.mintBatch.map(e => e ? MintBatch.toJSON(e) : undefined);
    } else {
      obj.mintBatch = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgMintToken>): MsgMintToken {
    const message = createBaseMsgMintToken();
    message.minterDid = object.minterDid ?? "";
    message.minterAddress = object.minterAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.ownerDid = object.ownerDid ?? "";
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
    tokenDid: "",
    ownerDid: "",
    ownerAddress: "",
    recipientDid: ""
  };
}

export const MsgTransferToken = {
  encode(message: MsgTransferToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenDid !== "") {
      writer.uint32(10).string(message.tokenDid);
    }

    if (message.ownerDid !== "") {
      writer.uint32(18).string(message.ownerDid);
    }

    if (message.ownerAddress !== "") {
      writer.uint32(26).string(message.ownerAddress);
    }

    if (message.recipientDid !== "") {
      writer.uint32(34).string(message.recipientDid);
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
          message.tokenDid = reader.string();
          break;

        case 2:
          message.ownerDid = reader.string();
          break;

        case 3:
          message.ownerAddress = reader.string();
          break;

        case 4:
          message.recipientDid = reader.string();
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
      tokenDid: isSet(object.tokenDid) ? String(object.tokenDid) : "",
      ownerDid: isSet(object.ownerDid) ? String(object.ownerDid) : "",
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      recipientDid: isSet(object.recipientDid) ? String(object.recipientDid) : ""
    };
  },

  toJSON(message: MsgTransferToken): unknown {
    const obj: any = {};
    message.tokenDid !== undefined && (obj.tokenDid = message.tokenDid);
    message.ownerDid !== undefined && (obj.ownerDid = message.ownerDid);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.recipientDid !== undefined && (obj.recipientDid = message.recipientDid);
    return obj;
  },

  fromPartial(object: Partial<MsgTransferToken>): MsgTransferToken {
    const message = createBaseMsgTransferToken();
    message.tokenDid = object.tokenDid ?? "";
    message.ownerDid = object.ownerDid ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    message.recipientDid = object.recipientDid ?? "";
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