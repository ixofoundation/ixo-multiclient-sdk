import { IidDocument, IidDocumentSDKType, IidMetadata, IidMetadataSDKType } from "./iid";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the did module's genesis state. */
export interface GenesisState {
    iidDocs: IidDocument[];
    iidMeta: IidMetadata[];
}
/** GenesisState defines the did module's genesis state. */
export interface GenesisStateSDKType {
    iid_docs: IidDocumentSDKType[];
    iid_meta: IidMetadataSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
