import { Long } from "../../../helpers";
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
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
