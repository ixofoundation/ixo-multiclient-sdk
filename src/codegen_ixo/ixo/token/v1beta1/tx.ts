import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgCreateToken defines a message for creating a project. */

export interface MsgCreateToken {
  /** An Token Type as defined by the implementer */
  ownerDid: string;
  /** The ownersdid address used to sign this transaction. */

  ownerAddress: string;
}
/** MsgCreateToken defines a message for creating a project. */

export interface MsgCreateTokenSDKType {
  /** An Token Type as defined by the implementer */
  ownerDid: string;
  /** The ownersdid address used to sign this transaction. */

  ownerAddress: string;
}
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

function createBaseMsgCreateToken(): MsgCreateToken {
  return {
    ownerDid: "",
    ownerAddress: ""
  };
}

export const MsgCreateToken = {
  encode(message: MsgCreateToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerDid !== "") {
      writer.uint32(10).string(message.ownerDid);
    }

    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
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
          message.ownerDid = reader.string();
          break;

        case 2:
          message.ownerAddress = reader.string();
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
      ownerDid: isSet(object.ownerDid) ? String(object.ownerDid) : "",
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : ""
    };
  },

  toJSON(message: MsgCreateToken): unknown {
    const obj: any = {};
    message.ownerDid !== undefined && (obj.ownerDid = message.ownerDid);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    return obj;
  },

  fromPartial(object: Partial<MsgCreateToken>): MsgCreateToken {
    const message = createBaseMsgCreateToken();
    message.ownerDid = object.ownerDid ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
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