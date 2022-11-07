import { ProjectDoc, ProjectDocSDKType, GenesisAccountMap, GenesisAccountMapSDKType, WithdrawalInfoDocs, WithdrawalInfoDocsSDKType, Claims, ClaimsSDKType, Params, ParamsSDKType } from "./project";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the project module's genesis state. */
export interface GenesisState {
    projectDocs: ProjectDoc[];
    accountMaps: GenesisAccountMap[];
    withdrawalsInfos: WithdrawalInfoDocs[];
    claims: Claims[];
    params?: Params;
}
/** GenesisState defines the project module's genesis state. */
export interface GenesisStateSDKType {
    project_docs: ProjectDocSDKType[];
    account_maps: GenesisAccountMapSDKType[];
    withdrawals_infos: WithdrawalInfoDocsSDKType[];
    claims: ClaimsSDKType[];
    params?: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
