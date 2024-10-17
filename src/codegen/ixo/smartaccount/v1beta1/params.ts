//@ts-nocheck
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * MaximumUnauthenticatedGas defines the maximum amount of gas that can be
   * used to authenticate a transaction in ante handler without having fee payer
   * authenticated.
   */
  maximumUnauthenticatedGas: Long;
  /**
   * IsSmartAccountActive defines the state of the authenticator.
   * If set to false, the authenticator module will not be used
   * and the classic cosmos sdk authentication will be used instead.
   */
  isSmartAccountActive: boolean;
  /**
   * CircuitBreakerControllers defines list of addresses that are allowed to
   * set is_smart_account_active without going through governance.
   */
  circuitBreakerControllers: string[];
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  maximum_unauthenticated_gas: Long;
  is_smart_account_active: boolean;
  circuit_breaker_controllers: string[];
}
function createBaseParams(): Params {
  return {
    maximumUnauthenticatedGas: Long.UZERO,
    isSmartAccountActive: false,
    circuitBreakerControllers: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maximumUnauthenticatedGas.isZero()) {
      writer.uint32(8).uint64(message.maximumUnauthenticatedGas);
    }
    if (message.isSmartAccountActive === true) {
      writer.uint32(16).bool(message.isSmartAccountActive);
    }
    for (const v of message.circuitBreakerControllers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maximumUnauthenticatedGas = (reader.uint64() as Long);
          break;
        case 2:
          message.isSmartAccountActive = reader.bool();
          break;
        case 3:
          message.circuitBreakerControllers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      maximumUnauthenticatedGas: isSet(object.maximumUnauthenticatedGas) ? Long.fromValue(object.maximumUnauthenticatedGas) : Long.UZERO,
      isSmartAccountActive: isSet(object.isSmartAccountActive) ? Boolean(object.isSmartAccountActive) : false,
      circuitBreakerControllers: Array.isArray(object?.circuitBreakerControllers) ? object.circuitBreakerControllers.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maximumUnauthenticatedGas !== undefined && (obj.maximumUnauthenticatedGas = (message.maximumUnauthenticatedGas || Long.UZERO).toString());
    message.isSmartAccountActive !== undefined && (obj.isSmartAccountActive = message.isSmartAccountActive);
    if (message.circuitBreakerControllers) {
      obj.circuitBreakerControllers = message.circuitBreakerControllers.map(e => e);
    } else {
      obj.circuitBreakerControllers = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.maximumUnauthenticatedGas = object.maximumUnauthenticatedGas !== undefined && object.maximumUnauthenticatedGas !== null ? Long.fromValue(object.maximumUnauthenticatedGas) : Long.UZERO;
    message.isSmartAccountActive = object.isSmartAccountActive ?? false;
    message.circuitBreakerControllers = object.circuitBreakerControllers?.map(e => e) || [];
    return message;
  }
};