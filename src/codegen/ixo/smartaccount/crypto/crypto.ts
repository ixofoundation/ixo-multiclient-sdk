//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** PubKey defines an authn public key */
export interface AuthnPubKey {
  /**
   * The key_id (or credential ID) is a unique identifier for a passkey.
   * This ID is provided by the authenticator when the passkey is created.
   * As it is not possible to retrieve the public key from the authenticator
   * after the passkey is created, if the user loses the public key - id
   * association, the key_id can be used to retrieve the public key.
   */
  keyId: string;
  /**
   * Store the COSE algorithm identifier. Since authn allows multiple different
   * public key credential algorithm, eg.
   * -7(ES256) - ECDSA with SHA-256 on the P-256 curve
   * -257(RS256) - RSASSA-PKCS1-v1_5 with SHA-256
   * we need to store the algorithm identifier to be able to verify the
   * signature according to the algorithm the public key is using.
   */
  coseAlgorithm: number;
  /** The public key bytes */
  key: Uint8Array;
  /**
   * The relaying party id is the id of the relaying party against which the
   * authn key pair is registered. We store it as binary of sha256 hash.
   */
  relayingPartyId: Uint8Array;
}
/** PubKey defines an authn public key */
export interface AuthnPubKeySDKType {
  key_id: string;
  cose_algorithm: number;
  key: Uint8Array;
  relaying_party_id: Uint8Array;
}
function createBaseAuthnPubKey(): AuthnPubKey {
  return {
    keyId: "",
    coseAlgorithm: 0,
    key: new Uint8Array(),
    relayingPartyId: new Uint8Array()
  };
}
export const AuthnPubKey = {
  encode(message: AuthnPubKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.coseAlgorithm !== 0) {
      writer.uint32(16).int32(message.coseAlgorithm);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    if (message.relayingPartyId.length !== 0) {
      writer.uint32(34).bytes(message.relayingPartyId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AuthnPubKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthnPubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.coseAlgorithm = reader.int32();
          break;
        case 3:
          message.key = reader.bytes();
          break;
        case 4:
          message.relayingPartyId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthnPubKey {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      coseAlgorithm: isSet(object.coseAlgorithm) ? Number(object.coseAlgorithm) : 0,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      relayingPartyId: isSet(object.relayingPartyId) ? bytesFromBase64(object.relayingPartyId) : new Uint8Array()
    };
  },
  toJSON(message: AuthnPubKey): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.coseAlgorithm !== undefined && (obj.coseAlgorithm = Math.round(message.coseAlgorithm));
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.relayingPartyId !== undefined && (obj.relayingPartyId = base64FromBytes(message.relayingPartyId !== undefined ? message.relayingPartyId : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<AuthnPubKey>): AuthnPubKey {
    const message = createBaseAuthnPubKey();
    message.keyId = object.keyId ?? "";
    message.coseAlgorithm = object.coseAlgorithm ?? 0;
    message.key = object.key ?? new Uint8Array();
    message.relayingPartyId = object.relayingPartyId ?? new Uint8Array();
    return message;
  }
};