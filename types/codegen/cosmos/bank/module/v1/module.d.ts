import * as _m0 from "protobufjs/minimal";
/** Module is the config object of the bank module. */
export interface Module {
    /**
     * blocked_module_accounts_override configures exceptional module accounts which should be blocked from receiving
     * funds. If left empty it defaults to the list of account names supplied in the auth module configuration as
     * module_account_permissions
     */
    blockedModuleAccountsOverride: string[];
    /** authority defines the custom module authority. If not set, defaults to the governance module. */
    authority: string;
    /**
     * restrictions_order specifies the order of send restrictions and should be
     * a list of module names which provide a send restriction instance. If no
     * order is provided, then restrictions will be applied in alphabetical order
     * of module names.
     */
    restrictionsOrder: string[];
}
/** Module is the config object of the bank module. */
export interface ModuleSDKType {
    blocked_module_accounts_override: string[];
    authority: string;
    restrictions_order: string[];
}
export declare const Module: {
    encode(message: Module, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Module;
    fromJSON(object: any): Module;
    toJSON(message: Module): unknown;
    fromPartial(object: Partial<Module>): Module;
};
