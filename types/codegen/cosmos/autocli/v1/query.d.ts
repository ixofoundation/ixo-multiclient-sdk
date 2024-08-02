import { ModuleOptions, ModuleOptionsSDKType } from "./options";
import * as _m0 from "protobufjs/minimal";
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequest {
}
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequestSDKType {
}
export interface AppOptionsResponse_ModuleOptionsEntry {
    key: string;
    value?: ModuleOptions;
}
export interface AppOptionsResponse_ModuleOptionsEntrySDKType {
    key: string;
    value?: ModuleOptionsSDKType;
}
/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */
export interface AppOptionsResponse {
    /** module_options is a map of module name to autocli module options. */
    moduleOptions?: {
        [key: string]: ModuleOptions;
    };
}
/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */
export interface AppOptionsResponseSDKType {
    module_options?: {
        [key: string]: ModuleOptionsSDKType;
    };
}
export declare const AppOptionsRequest: {
    encode(_: AppOptionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsRequest;
    fromJSON(_: any): AppOptionsRequest;
    toJSON(_: AppOptionsRequest): unknown;
    fromPartial(_: Partial<AppOptionsRequest>): AppOptionsRequest;
};
export declare const AppOptionsResponse_ModuleOptionsEntry: {
    encode(message: AppOptionsResponse_ModuleOptionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsResponse_ModuleOptionsEntry;
    fromJSON(object: any): AppOptionsResponse_ModuleOptionsEntry;
    toJSON(message: AppOptionsResponse_ModuleOptionsEntry): unknown;
    fromPartial(object: Partial<AppOptionsResponse_ModuleOptionsEntry>): AppOptionsResponse_ModuleOptionsEntry;
};
export declare const AppOptionsResponse: {
    encode(message: AppOptionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsResponse;
    fromJSON(object: any): AppOptionsResponse;
    toJSON(message: AppOptionsResponse): unknown;
    fromPartial(object: Partial<AppOptionsResponse>): AppOptionsResponse;
};
