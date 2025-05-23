//@ts-nocheck
import { ResponseCommit, ResponseCommitSDKType, RequestFinalizeBlock, RequestFinalizeBlockSDKType, ResponseFinalizeBlock, ResponseFinalizeBlockSDKType } from "../../../tendermint/abci/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
  /** the store key for the KVStore this pair originates from */
  storeKey: string;
  /** true indicates a delete operation, false indicates a set operation */
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairSDKType {
  store_key: string;
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadata {
  responseCommit?: ResponseCommit;
  requestFinalizeBlock?: RequestFinalizeBlock;
  /** TODO: should we renumber this? */
  responseFinalizeBlock?: ResponseFinalizeBlock;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadataSDKType {
  response_commit?: ResponseCommitSDKType;
  request_finalize_block?: RequestFinalizeBlockSDKType;
  response_finalize_block?: ResponseFinalizeBlockSDKType;
}
function createBaseStoreKVPair(): StoreKVPair {
  return {
    storeKey: "",
    delete: false,
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const StoreKVPair = {
  encode(message: StoreKVPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storeKey !== "") {
      writer.uint32(10).string(message.storeKey);
    }
    if (message.delete === true) {
      writer.uint32(16).bool(message.delete);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StoreKVPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeKey = reader.string();
          break;
        case 2:
          message.delete = reader.bool();
          break;
        case 3:
          message.key = reader.bytes();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreKVPair {
    return {
      storeKey: isSet(object.storeKey) ? String(object.storeKey) : "",
      delete: isSet(object.delete) ? Boolean(object.delete) : false,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON(message: StoreKVPair): unknown {
    const obj: any = {};
    message.storeKey !== undefined && (obj.storeKey = message.storeKey);
    message.delete !== undefined && (obj.delete = message.delete);
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<StoreKVPair>): StoreKVPair {
    const message = createBaseStoreKVPair();
    message.storeKey = object.storeKey ?? "";
    message.delete = object.delete ?? false;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};
function createBaseBlockMetadata(): BlockMetadata {
  return {
    responseCommit: undefined,
    requestFinalizeBlock: undefined,
    responseFinalizeBlock: undefined
  };
}
export const BlockMetadata = {
  encode(message: BlockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.responseCommit !== undefined) {
      ResponseCommit.encode(message.responseCommit, writer.uint32(50).fork()).ldelim();
    }
    if (message.requestFinalizeBlock !== undefined) {
      RequestFinalizeBlock.encode(message.requestFinalizeBlock, writer.uint32(58).fork()).ldelim();
    }
    if (message.responseFinalizeBlock !== undefined) {
      ResponseFinalizeBlock.encode(message.responseFinalizeBlock, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.responseCommit = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 7:
          message.requestFinalizeBlock = RequestFinalizeBlock.decode(reader, reader.uint32());
          break;
        case 8:
          message.responseFinalizeBlock = ResponseFinalizeBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockMetadata {
    return {
      responseCommit: isSet(object.responseCommit) ? ResponseCommit.fromJSON(object.responseCommit) : undefined,
      requestFinalizeBlock: isSet(object.requestFinalizeBlock) ? RequestFinalizeBlock.fromJSON(object.requestFinalizeBlock) : undefined,
      responseFinalizeBlock: isSet(object.responseFinalizeBlock) ? ResponseFinalizeBlock.fromJSON(object.responseFinalizeBlock) : undefined
    };
  },
  toJSON(message: BlockMetadata): unknown {
    const obj: any = {};
    message.responseCommit !== undefined && (obj.responseCommit = message.responseCommit ? ResponseCommit.toJSON(message.responseCommit) : undefined);
    message.requestFinalizeBlock !== undefined && (obj.requestFinalizeBlock = message.requestFinalizeBlock ? RequestFinalizeBlock.toJSON(message.requestFinalizeBlock) : undefined);
    message.responseFinalizeBlock !== undefined && (obj.responseFinalizeBlock = message.responseFinalizeBlock ? ResponseFinalizeBlock.toJSON(message.responseFinalizeBlock) : undefined);
    return obj;
  },
  fromPartial(object: Partial<BlockMetadata>): BlockMetadata {
    const message = createBaseBlockMetadata();
    message.responseCommit = object.responseCommit !== undefined && object.responseCommit !== null ? ResponseCommit.fromPartial(object.responseCommit) : undefined;
    message.requestFinalizeBlock = object.requestFinalizeBlock !== undefined && object.requestFinalizeBlock !== null ? RequestFinalizeBlock.fromPartial(object.requestFinalizeBlock) : undefined;
    message.responseFinalizeBlock = object.responseFinalizeBlock !== undefined && object.responseFinalizeBlock !== null ? ResponseFinalizeBlock.fromPartial(object.responseFinalizeBlock) : undefined;
    return message;
  }
};