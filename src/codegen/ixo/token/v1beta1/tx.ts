import * as _m0 from "protobufjs/minimal";
import { isSet, Long, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** MsgCreateProjectResponse defines the Msg/CreateProject response type. */

export interface MsgCreateTokenResponse {}
/** MsgCreateProjectResponse defines the Msg/CreateProject response type. */

export interface MsgCreateTokenResponseSDKType {}
export interface MsgTransferToken {
  tokenDid: string;
  /** The ownersdid used to sign this transaction. */

  ownerDid: string;
  /** The ownersdid used to sign this transaction. */

  ownerAddress: string;
  recipientDid: string;
}
export interface MsgTransferTokenSDKType {
  tokenDid: string;
  /** The ownersdid used to sign this transaction. */

  ownerDid: string;
  /** The ownersdid used to sign this transaction. */

  ownerAddress: string;
  recipientDid: string;
}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateTokenStatus response type. */

export interface MsgTransferTokenResponse {}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateTokenStatus response type. */

export interface MsgTransferTokenResponseSDKType {}
export interface SetupCw20 {
  symbol: string;
  decimals: number;
  cap: Long;
}
export interface SetupCw20SDKType {
  symbol: string;
  decimals: number;
  cap: Long;
}
export interface SetupCw721 {
  symbol: string;
}
export interface SetupCw721SDKType {
  symbol: string;
}
export interface SetupCw1155 {}
export interface SetupCw1155SDKType {}
export interface MsgSetupMinter {
  minterDid: string;
  minterAddress: string;
  name: string;
  description: string;
  cw20?: SetupCw20;
  cw721?: SetupCw721;
  cw1155?: SetupCw1155;
}
export interface MsgSetupMinterSDKType {
  minterDid: string;
  minterAddress: string;
  name: string;
  description: string;
  cw20?: SetupCw20SDKType;
  cw721?: SetupCw721SDKType;
  cw1155?: SetupCw1155SDKType;
}
export interface MsgSetupMinterResponse {}
export interface MsgSetupMinterResponseSDKType {}
export interface MintCw20 {
  amount: Long;
}
export interface MintCw20SDKType {
  amount: Long;
}
export interface MintCw721 {
  /** An IID that identifies the asset that this token represents */
  id: string;
  /** A URI pointing to a resource with media type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive. */

  image?: string;
  /** Uri */

  uri?: string;
  /** "Arbitrary properties. Values may be strings, numbers, object or arrays."]; */

  properties: Uint8Array;
}
export interface MintCw721SDKType {
  /** An IID that identifies the asset that this token represents */
  id: string;
  /** A URI pointing to a resource with media type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive. */

  image?: string;
  /** Uri */

  uri?: string;
  /** "Arbitrary properties. Values may be strings, numbers, object or arrays."]; */

  properties: Uint8Array;
}
export interface MintCw1155 {
  /** An IID that identifies the asset that this token represents */
  id: string;
  /** A URI pointing to a resource with media type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive. */

  image?: string;
  /** Uri */

  uri?: string;
  value: Long;
}
export interface MintCw1155SDKType {
  /** An IID that identifies the asset that this token represents */
  id: string;
  /** A URI pointing to a resource with media type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive. */

  image?: string;
  /** Uri */

  uri?: string;
  value: Long;
}
export interface MsgMint {
  minterDid: string;
  minterAddress: string;
  contractAddress: string;
  ownerDid: string;
  cw20?: MintCw20;
  cw721?: MintCw721;
  cw1155?: MintCw1155;
}
export interface MsgMintSDKType {
  minterDid: string;
  minterAddress: string;
  contractAddress: string;
  ownerDid: string;
  cw20?: MintCw20SDKType;
  cw721?: MintCw721SDKType;
  cw1155?: MintCw1155SDKType;
}
export interface MsgMintResponse {}
export interface MsgMintResponseSDKType {}

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

function createBaseSetupCw20(): SetupCw20 {
  return {
    symbol: "",
    decimals: 0,
    cap: Long.UZERO
  };
}

export const SetupCw20 = {
  encode(message: SetupCw20, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    if (message.decimals !== 0) {
      writer.uint32(16).uint32(message.decimals);
    }

    if (!message.cap.isZero()) {
      writer.uint32(24).uint64(message.cap);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetupCw20 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetupCw20();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        case 2:
          message.decimals = reader.uint32();
          break;

        case 3:
          message.cap = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SetupCw20 {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      cap: isSet(object.cap) ? Long.fromValue(object.cap) : Long.UZERO
    };
  },

  toJSON(message: SetupCw20): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimals !== undefined && (obj.decimals = Math.round(message.decimals));
    message.cap !== undefined && (obj.cap = (message.cap || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<SetupCw20>): SetupCw20 {
    const message = createBaseSetupCw20();
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals ?? 0;
    message.cap = object.cap !== undefined && object.cap !== null ? Long.fromValue(object.cap) : Long.UZERO;
    return message;
  }

};

function createBaseSetupCw721(): SetupCw721 {
  return {
    symbol: ""
  };
}

export const SetupCw721 = {
  encode(message: SetupCw721, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetupCw721 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetupCw721();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SetupCw721 {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },

  toJSON(message: SetupCw721): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  fromPartial(object: Partial<SetupCw721>): SetupCw721 {
    const message = createBaseSetupCw721();
    message.symbol = object.symbol ?? "";
    return message;
  }

};

function createBaseSetupCw1155(): SetupCw1155 {
  return {};
}

export const SetupCw1155 = {
  encode(_: SetupCw1155, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetupCw1155 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetupCw1155();

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

  fromJSON(_: any): SetupCw1155 {
    return {};
  },

  toJSON(_: SetupCw1155): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<SetupCw1155>): SetupCw1155 {
    const message = createBaseSetupCw1155();
    return message;
  }

};

function createBaseMsgSetupMinter(): MsgSetupMinter {
  return {
    minterDid: "",
    minterAddress: "",
    name: "",
    description: "",
    cw20: undefined,
    cw721: undefined,
    cw1155: undefined
  };
}

export const MsgSetupMinter = {
  encode(message: MsgSetupMinter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minterDid !== "") {
      writer.uint32(10).string(message.minterDid);
    }

    if (message.minterAddress !== "") {
      writer.uint32(18).string(message.minterAddress);
    }

    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }

    if (message.cw20 !== undefined) {
      SetupCw20.encode(message.cw20, writer.uint32(50).fork()).ldelim();
    }

    if (message.cw721 !== undefined) {
      SetupCw721.encode(message.cw721, writer.uint32(58).fork()).ldelim();
    }

    if (message.cw1155 !== undefined) {
      SetupCw1155.encode(message.cw1155, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetupMinter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetupMinter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minterDid = reader.string();
          break;

        case 2:
          message.minterAddress = reader.string();
          break;

        case 4:
          message.name = reader.string();
          break;

        case 5:
          message.description = reader.string();
          break;

        case 6:
          message.cw20 = SetupCw20.decode(reader, reader.uint32());
          break;

        case 7:
          message.cw721 = SetupCw721.decode(reader, reader.uint32());
          break;

        case 8:
          message.cw1155 = SetupCw1155.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSetupMinter {
    return {
      minterDid: isSet(object.minterDid) ? String(object.minterDid) : "",
      minterAddress: isSet(object.minterAddress) ? String(object.minterAddress) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      cw20: isSet(object.cw20) ? SetupCw20.fromJSON(object.cw20) : undefined,
      cw721: isSet(object.cw721) ? SetupCw721.fromJSON(object.cw721) : undefined,
      cw1155: isSet(object.cw1155) ? SetupCw1155.fromJSON(object.cw1155) : undefined
    };
  },

  toJSON(message: MsgSetupMinter): unknown {
    const obj: any = {};
    message.minterDid !== undefined && (obj.minterDid = message.minterDid);
    message.minterAddress !== undefined && (obj.minterAddress = message.minterAddress);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.cw20 !== undefined && (obj.cw20 = message.cw20 ? SetupCw20.toJSON(message.cw20) : undefined);
    message.cw721 !== undefined && (obj.cw721 = message.cw721 ? SetupCw721.toJSON(message.cw721) : undefined);
    message.cw1155 !== undefined && (obj.cw1155 = message.cw1155 ? SetupCw1155.toJSON(message.cw1155) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgSetupMinter>): MsgSetupMinter {
    const message = createBaseMsgSetupMinter();
    message.minterDid = object.minterDid ?? "";
    message.minterAddress = object.minterAddress ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.cw20 = object.cw20 !== undefined && object.cw20 !== null ? SetupCw20.fromPartial(object.cw20) : undefined;
    message.cw721 = object.cw721 !== undefined && object.cw721 !== null ? SetupCw721.fromPartial(object.cw721) : undefined;
    message.cw1155 = object.cw1155 !== undefined && object.cw1155 !== null ? SetupCw1155.fromPartial(object.cw1155) : undefined;
    return message;
  }

};

function createBaseMsgSetupMinterResponse(): MsgSetupMinterResponse {
  return {};
}

export const MsgSetupMinterResponse = {
  encode(_: MsgSetupMinterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetupMinterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetupMinterResponse();

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

  fromJSON(_: any): MsgSetupMinterResponse {
    return {};
  },

  toJSON(_: MsgSetupMinterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgSetupMinterResponse>): MsgSetupMinterResponse {
    const message = createBaseMsgSetupMinterResponse();
    return message;
  }

};

function createBaseMintCw20(): MintCw20 {
  return {
    amount: Long.UZERO
  };
}

export const MintCw20 = {
  encode(message: MintCw20, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintCw20 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintCw20();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MintCw20 {
    return {
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },

  toJSON(message: MintCw20): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MintCw20>): MintCw20 {
    const message = createBaseMintCw20();
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }

};

function createBaseMintCw721(): MintCw721 {
  return {
    id: "",
    image: undefined,
    uri: undefined,
    properties: new Uint8Array()
  };
}

export const MintCw721 = {
  encode(message: MintCw721, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.image !== undefined) {
      writer.uint32(18).string(message.image);
    }

    if (message.uri !== undefined) {
      writer.uint32(26).string(message.uri);
    }

    if (message.properties.length !== 0) {
      writer.uint32(34).bytes(message.properties);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintCw721 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintCw721();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.image = reader.string();
          break;

        case 3:
          message.uri = reader.string();
          break;

        case 4:
          message.properties = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MintCw721 {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      image: isSet(object.image) ? String(object.image) : undefined,
      uri: isSet(object.uri) ? String(object.uri) : undefined,
      properties: isSet(object.properties) ? bytesFromBase64(object.properties) : new Uint8Array()
    };
  },

  toJSON(message: MintCw721): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.image !== undefined && (obj.image = message.image);
    message.uri !== undefined && (obj.uri = message.uri);
    message.properties !== undefined && (obj.properties = base64FromBytes(message.properties !== undefined ? message.properties : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MintCw721>): MintCw721 {
    const message = createBaseMintCw721();
    message.id = object.id ?? "";
    message.image = object.image ?? undefined;
    message.uri = object.uri ?? undefined;
    message.properties = object.properties ?? new Uint8Array();
    return message;
  }

};

function createBaseMintCw1155(): MintCw1155 {
  return {
    id: "",
    image: undefined,
    uri: undefined,
    value: Long.UZERO
  };
}

export const MintCw1155 = {
  encode(message: MintCw1155, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.image !== undefined) {
      writer.uint32(18).string(message.image);
    }

    if (message.uri !== undefined) {
      writer.uint32(26).string(message.uri);
    }

    if (!message.value.isZero()) {
      writer.uint32(32).uint64(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintCw1155 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintCw1155();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.image = reader.string();
          break;

        case 3:
          message.uri = reader.string();
          break;

        case 4:
          message.value = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MintCw1155 {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      image: isSet(object.image) ? String(object.image) : undefined,
      uri: isSet(object.uri) ? String(object.uri) : undefined,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO
    };
  },

  toJSON(message: MintCw1155): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.image !== undefined && (obj.image = message.image);
    message.uri !== undefined && (obj.uri = message.uri);
    message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MintCw1155>): MintCw1155 {
    const message = createBaseMintCw1155();
    message.id = object.id ?? "";
    message.image = object.image ?? undefined;
    message.uri = object.uri ?? undefined;
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  }

};

function createBaseMsgMint(): MsgMint {
  return {
    minterDid: "",
    minterAddress: "",
    contractAddress: "",
    ownerDid: "",
    cw20: undefined,
    cw721: undefined,
    cw1155: undefined
  };
}

export const MsgMint = {
  encode(message: MsgMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (message.cw20 !== undefined) {
      MintCw20.encode(message.cw20, writer.uint32(42).fork()).ldelim();
    }

    if (message.cw721 !== undefined) {
      MintCw721.encode(message.cw721, writer.uint32(50).fork()).ldelim();
    }

    if (message.cw1155 !== undefined) {
      MintCw1155.encode(message.cw1155, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();

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
          message.cw20 = MintCw20.decode(reader, reader.uint32());
          break;

        case 6:
          message.cw721 = MintCw721.decode(reader, reader.uint32());
          break;

        case 7:
          message.cw1155 = MintCw1155.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMint {
    return {
      minterDid: isSet(object.minterDid) ? String(object.minterDid) : "",
      minterAddress: isSet(object.minterAddress) ? String(object.minterAddress) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      ownerDid: isSet(object.ownerDid) ? String(object.ownerDid) : "",
      cw20: isSet(object.cw20) ? MintCw20.fromJSON(object.cw20) : undefined,
      cw721: isSet(object.cw721) ? MintCw721.fromJSON(object.cw721) : undefined,
      cw1155: isSet(object.cw1155) ? MintCw1155.fromJSON(object.cw1155) : undefined
    };
  },

  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.minterDid !== undefined && (obj.minterDid = message.minterDid);
    message.minterAddress !== undefined && (obj.minterAddress = message.minterAddress);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.ownerDid !== undefined && (obj.ownerDid = message.ownerDid);
    message.cw20 !== undefined && (obj.cw20 = message.cw20 ? MintCw20.toJSON(message.cw20) : undefined);
    message.cw721 !== undefined && (obj.cw721 = message.cw721 ? MintCw721.toJSON(message.cw721) : undefined);
    message.cw1155 !== undefined && (obj.cw1155 = message.cw1155 ? MintCw1155.toJSON(message.cw1155) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgMint>): MsgMint {
    const message = createBaseMsgMint();
    message.minterDid = object.minterDid ?? "";
    message.minterAddress = object.minterAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.ownerDid = object.ownerDid ?? "";
    message.cw20 = object.cw20 !== undefined && object.cw20 !== null ? MintCw20.fromPartial(object.cw20) : undefined;
    message.cw721 = object.cw721 !== undefined && object.cw721 !== null ? MintCw721.fromPartial(object.cw721) : undefined;
    message.cw1155 = object.cw1155 !== undefined && object.cw1155 !== null ? MintCw1155.fromPartial(object.cw1155) : undefined;
    return message;
  }

};

function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}

export const MsgMintResponse = {
  encode(_: MsgMintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();

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

  fromJSON(_: any): MsgMintResponse {
    return {};
  },

  toJSON(_: MsgMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgMintResponse>): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  }

};