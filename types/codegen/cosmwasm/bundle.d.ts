import * as _132 from "./wasm/v1/authz";
import * as _133 from "./wasm/v1/genesis";
import * as _134 from "./wasm/v1/ibc";
import * as _135 from "./wasm/v1/proposal_legacy";
import * as _136 from "./wasm/v1/query";
import * as _137 from "./wasm/v1/tx";
import * as _138 from "./wasm/v1/types";
import * as _294 from "./wasm/v1/query.rpc.Query";
import * as _295 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _295.MsgClientImpl;
            QueryClientImpl: typeof _294.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _136.QueryContractInfoRequest): Promise<_136.QueryContractInfoResponse>;
                contractHistory(request: _136.QueryContractHistoryRequest): Promise<_136.QueryContractHistoryResponse>;
                contractsByCode(request: _136.QueryContractsByCodeRequest): Promise<_136.QueryContractsByCodeResponse>;
                allContractState(request: _136.QueryAllContractStateRequest): Promise<_136.QueryAllContractStateResponse>;
                rawContractState(request: _136.QueryRawContractStateRequest): Promise<_136.QueryRawContractStateResponse>;
                smartContractState(request: _136.QuerySmartContractStateRequest): Promise<_136.QuerySmartContractStateResponse>;
                code(request: _136.QueryCodeRequest): Promise<_136.QueryCodeResponse>;
                codes(request?: _136.QueryCodesRequest): Promise<_136.QueryCodesResponse>;
                pinnedCodes(request?: _136.QueryPinnedCodesRequest): Promise<_136.QueryPinnedCodesResponse>;
                params(request?: _136.QueryParamsRequest): Promise<_136.QueryParamsResponse>;
                contractsByCreator(request: _136.QueryContractsByCreatorRequest): Promise<_136.QueryContractsByCreatorResponse>;
            };
            accessTypeFromJSON(object: any): _138.AccessType;
            accessTypeToJSON(object: _138.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _138.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _138.ContractCodeHistoryOperationType): string;
            AccessType: typeof _138.AccessType;
            AccessTypeSDKType: typeof _138.AccessType;
            ContractCodeHistoryOperationType: typeof _138.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _138.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _138.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.AccessTypeParam;
                fromJSON(object: any): _138.AccessTypeParam;
                toJSON(message: _138.AccessTypeParam): unknown;
                fromPartial(object: Partial<_138.AccessTypeParam>): _138.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _138.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.AccessConfig;
                fromJSON(object: any): _138.AccessConfig;
                toJSON(message: _138.AccessConfig): unknown;
                fromPartial(object: Partial<_138.AccessConfig>): _138.AccessConfig;
            };
            Params: {
                encode(message: _138.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Params;
                fromJSON(object: any): _138.Params;
                toJSON(message: _138.Params): unknown;
                fromPartial(object: Partial<_138.Params>): _138.Params;
            };
            CodeInfo: {
                encode(message: _138.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.CodeInfo;
                fromJSON(object: any): _138.CodeInfo;
                toJSON(message: _138.CodeInfo): unknown;
                fromPartial(object: Partial<_138.CodeInfo>): _138.CodeInfo;
            };
            ContractInfo: {
                encode(message: _138.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ContractInfo;
                fromJSON(object: any): _138.ContractInfo;
                toJSON(message: _138.ContractInfo): unknown;
                fromPartial(object: Partial<_138.ContractInfo>): _138.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _138.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ContractCodeHistoryEntry;
                fromJSON(object: any): _138.ContractCodeHistoryEntry;
                toJSON(message: _138.ContractCodeHistoryEntry): unknown;
                fromPartial(object: Partial<_138.ContractCodeHistoryEntry>): _138.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _138.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.AbsoluteTxPosition;
                fromJSON(object: any): _138.AbsoluteTxPosition;
                toJSON(message: _138.AbsoluteTxPosition): unknown;
                fromPartial(object: Partial<_138.AbsoluteTxPosition>): _138.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _138.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Model;
                fromJSON(object: any): _138.Model;
                toJSON(message: _138.Model): unknown;
                fromPartial(object: Partial<_138.Model>): _138.Model;
            };
            MsgStoreCode: {
                encode(message: _137.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgStoreCode;
                fromJSON(object: any): _137.MsgStoreCode;
                toJSON(message: _137.MsgStoreCode): unknown;
                fromPartial(object: Partial<_137.MsgStoreCode>): _137.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _137.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgStoreCodeResponse;
                fromJSON(object: any): _137.MsgStoreCodeResponse;
                toJSON(message: _137.MsgStoreCodeResponse): unknown;
                fromPartial(object: Partial<_137.MsgStoreCodeResponse>): _137.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _137.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgInstantiateContract;
                fromJSON(object: any): _137.MsgInstantiateContract;
                toJSON(message: _137.MsgInstantiateContract): unknown;
                fromPartial(object: Partial<_137.MsgInstantiateContract>): _137.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _137.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgInstantiateContractResponse;
                fromJSON(object: any): _137.MsgInstantiateContractResponse;
                toJSON(message: _137.MsgInstantiateContractResponse): unknown;
                fromPartial(object: Partial<_137.MsgInstantiateContractResponse>): _137.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2: {
                encode(message: _137.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgInstantiateContract2;
                fromJSON(object: any): _137.MsgInstantiateContract2;
                toJSON(message: _137.MsgInstantiateContract2): unknown;
                fromPartial(object: Partial<_137.MsgInstantiateContract2>): _137.MsgInstantiateContract2;
            };
            MsgInstantiateContract2Response: {
                encode(message: _137.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgInstantiateContract2Response;
                fromJSON(object: any): _137.MsgInstantiateContract2Response;
                toJSON(message: _137.MsgInstantiateContract2Response): unknown;
                fromPartial(object: Partial<_137.MsgInstantiateContract2Response>): _137.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _137.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgExecuteContract;
                fromJSON(object: any): _137.MsgExecuteContract;
                toJSON(message: _137.MsgExecuteContract): unknown;
                fromPartial(object: Partial<_137.MsgExecuteContract>): _137.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _137.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgExecuteContractResponse;
                fromJSON(object: any): _137.MsgExecuteContractResponse;
                toJSON(message: _137.MsgExecuteContractResponse): unknown;
                fromPartial(object: Partial<_137.MsgExecuteContractResponse>): _137.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _137.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgMigrateContract;
                fromJSON(object: any): _137.MsgMigrateContract;
                toJSON(message: _137.MsgMigrateContract): unknown;
                fromPartial(object: Partial<_137.MsgMigrateContract>): _137.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _137.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgMigrateContractResponse;
                fromJSON(object: any): _137.MsgMigrateContractResponse;
                toJSON(message: _137.MsgMigrateContractResponse): unknown;
                fromPartial(object: Partial<_137.MsgMigrateContractResponse>): _137.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _137.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUpdateAdmin;
                fromJSON(object: any): _137.MsgUpdateAdmin;
                toJSON(message: _137.MsgUpdateAdmin): unknown;
                fromPartial(object: Partial<_137.MsgUpdateAdmin>): _137.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _137.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUpdateAdminResponse;
                fromJSON(_: any): _137.MsgUpdateAdminResponse;
                toJSON(_: _137.MsgUpdateAdminResponse): unknown;
                fromPartial(_: Partial<_137.MsgUpdateAdminResponse>): _137.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _137.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgClearAdmin;
                fromJSON(object: any): _137.MsgClearAdmin;
                toJSON(message: _137.MsgClearAdmin): unknown;
                fromPartial(object: Partial<_137.MsgClearAdmin>): _137.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _137.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgClearAdminResponse;
                fromJSON(_: any): _137.MsgClearAdminResponse;
                toJSON(_: _137.MsgClearAdminResponse): unknown;
                fromPartial(_: Partial<_137.MsgClearAdminResponse>): _137.MsgClearAdminResponse;
            };
            MsgUpdateInstantiateConfig: {
                encode(message: _137.MsgUpdateInstantiateConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUpdateInstantiateConfig;
                fromJSON(object: any): _137.MsgUpdateInstantiateConfig;
                toJSON(message: _137.MsgUpdateInstantiateConfig): unknown;
                fromPartial(object: Partial<_137.MsgUpdateInstantiateConfig>): _137.MsgUpdateInstantiateConfig;
            };
            MsgUpdateInstantiateConfigResponse: {
                encode(_: _137.MsgUpdateInstantiateConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUpdateInstantiateConfigResponse;
                fromJSON(_: any): _137.MsgUpdateInstantiateConfigResponse;
                toJSON(_: _137.MsgUpdateInstantiateConfigResponse): unknown;
                fromPartial(_: Partial<_137.MsgUpdateInstantiateConfigResponse>): _137.MsgUpdateInstantiateConfigResponse;
            };
            MsgUpdateParams: {
                encode(message: _137.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUpdateParams;
                fromJSON(object: any): _137.MsgUpdateParams;
                toJSON(message: _137.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_137.MsgUpdateParams>): _137.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _137.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUpdateParamsResponse;
                fromJSON(_: any): _137.MsgUpdateParamsResponse;
                toJSON(_: _137.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_137.MsgUpdateParamsResponse>): _137.MsgUpdateParamsResponse;
            };
            MsgSudoContract: {
                encode(message: _137.MsgSudoContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgSudoContract;
                fromJSON(object: any): _137.MsgSudoContract;
                toJSON(message: _137.MsgSudoContract): unknown;
                fromPartial(object: Partial<_137.MsgSudoContract>): _137.MsgSudoContract;
            };
            MsgSudoContractResponse: {
                encode(message: _137.MsgSudoContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgSudoContractResponse;
                fromJSON(object: any): _137.MsgSudoContractResponse;
                toJSON(message: _137.MsgSudoContractResponse): unknown;
                fromPartial(object: Partial<_137.MsgSudoContractResponse>): _137.MsgSudoContractResponse;
            };
            MsgPinCodes: {
                encode(message: _137.MsgPinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgPinCodes;
                fromJSON(object: any): _137.MsgPinCodes;
                toJSON(message: _137.MsgPinCodes): unknown;
                fromPartial(object: Partial<_137.MsgPinCodes>): _137.MsgPinCodes;
            };
            MsgPinCodesResponse: {
                encode(_: _137.MsgPinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgPinCodesResponse;
                fromJSON(_: any): _137.MsgPinCodesResponse;
                toJSON(_: _137.MsgPinCodesResponse): unknown;
                fromPartial(_: Partial<_137.MsgPinCodesResponse>): _137.MsgPinCodesResponse;
            };
            MsgUnpinCodes: {
                encode(message: _137.MsgUnpinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUnpinCodes;
                fromJSON(object: any): _137.MsgUnpinCodes;
                toJSON(message: _137.MsgUnpinCodes): unknown;
                fromPartial(object: Partial<_137.MsgUnpinCodes>): _137.MsgUnpinCodes;
            };
            MsgUnpinCodesResponse: {
                encode(_: _137.MsgUnpinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUnpinCodesResponse;
                fromJSON(_: any): _137.MsgUnpinCodesResponse;
                toJSON(_: _137.MsgUnpinCodesResponse): unknown;
                fromPartial(_: Partial<_137.MsgUnpinCodesResponse>): _137.MsgUnpinCodesResponse;
            };
            MsgStoreAndInstantiateContract: {
                encode(message: _137.MsgStoreAndInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgStoreAndInstantiateContract;
                fromJSON(object: any): _137.MsgStoreAndInstantiateContract;
                toJSON(message: _137.MsgStoreAndInstantiateContract): unknown;
                fromPartial(object: Partial<_137.MsgStoreAndInstantiateContract>): _137.MsgStoreAndInstantiateContract;
            };
            MsgStoreAndInstantiateContractResponse: {
                encode(message: _137.MsgStoreAndInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgStoreAndInstantiateContractResponse;
                fromJSON(object: any): _137.MsgStoreAndInstantiateContractResponse;
                toJSON(message: _137.MsgStoreAndInstantiateContractResponse): unknown;
                fromPartial(object: Partial<_137.MsgStoreAndInstantiateContractResponse>): _137.MsgStoreAndInstantiateContractResponse;
            };
            MsgAddCodeUploadParamsAddresses: {
                encode(message: _137.MsgAddCodeUploadParamsAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgAddCodeUploadParamsAddresses;
                fromJSON(object: any): _137.MsgAddCodeUploadParamsAddresses;
                toJSON(message: _137.MsgAddCodeUploadParamsAddresses): unknown;
                fromPartial(object: Partial<_137.MsgAddCodeUploadParamsAddresses>): _137.MsgAddCodeUploadParamsAddresses;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                encode(_: _137.MsgAddCodeUploadParamsAddressesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgAddCodeUploadParamsAddressesResponse;
                fromJSON(_: any): _137.MsgAddCodeUploadParamsAddressesResponse;
                toJSON(_: _137.MsgAddCodeUploadParamsAddressesResponse): unknown;
                fromPartial(_: Partial<_137.MsgAddCodeUploadParamsAddressesResponse>): _137.MsgAddCodeUploadParamsAddressesResponse;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                encode(message: _137.MsgRemoveCodeUploadParamsAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgRemoveCodeUploadParamsAddresses;
                fromJSON(object: any): _137.MsgRemoveCodeUploadParamsAddresses;
                toJSON(message: _137.MsgRemoveCodeUploadParamsAddresses): unknown;
                fromPartial(object: Partial<_137.MsgRemoveCodeUploadParamsAddresses>): _137.MsgRemoveCodeUploadParamsAddresses;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                encode(_: _137.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgRemoveCodeUploadParamsAddressesResponse;
                fromJSON(_: any): _137.MsgRemoveCodeUploadParamsAddressesResponse;
                toJSON(_: _137.MsgRemoveCodeUploadParamsAddressesResponse): unknown;
                fromPartial(_: Partial<_137.MsgRemoveCodeUploadParamsAddressesResponse>): _137.MsgRemoveCodeUploadParamsAddressesResponse;
            };
            MsgStoreAndMigrateContract: {
                encode(message: _137.MsgStoreAndMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgStoreAndMigrateContract;
                fromJSON(object: any): _137.MsgStoreAndMigrateContract;
                toJSON(message: _137.MsgStoreAndMigrateContract): unknown;
                fromPartial(object: Partial<_137.MsgStoreAndMigrateContract>): _137.MsgStoreAndMigrateContract;
            };
            MsgStoreAndMigrateContractResponse: {
                encode(message: _137.MsgStoreAndMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgStoreAndMigrateContractResponse;
                fromJSON(object: any): _137.MsgStoreAndMigrateContractResponse;
                toJSON(message: _137.MsgStoreAndMigrateContractResponse): unknown;
                fromPartial(object: Partial<_137.MsgStoreAndMigrateContractResponse>): _137.MsgStoreAndMigrateContractResponse;
            };
            MsgUpdateContractLabel: {
                encode(message: _137.MsgUpdateContractLabel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUpdateContractLabel;
                fromJSON(object: any): _137.MsgUpdateContractLabel;
                toJSON(message: _137.MsgUpdateContractLabel): unknown;
                fromPartial(object: Partial<_137.MsgUpdateContractLabel>): _137.MsgUpdateContractLabel;
            };
            MsgUpdateContractLabelResponse: {
                encode(_: _137.MsgUpdateContractLabelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUpdateContractLabelResponse;
                fromJSON(_: any): _137.MsgUpdateContractLabelResponse;
                toJSON(_: _137.MsgUpdateContractLabelResponse): unknown;
                fromPartial(_: Partial<_137.MsgUpdateContractLabelResponse>): _137.MsgUpdateContractLabelResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _136.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryContractInfoRequest;
                fromJSON(object: any): _136.QueryContractInfoRequest;
                toJSON(message: _136.QueryContractInfoRequest): unknown;
                fromPartial(object: Partial<_136.QueryContractInfoRequest>): _136.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _136.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryContractInfoResponse;
                fromJSON(object: any): _136.QueryContractInfoResponse;
                toJSON(message: _136.QueryContractInfoResponse): unknown;
                fromPartial(object: Partial<_136.QueryContractInfoResponse>): _136.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _136.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryContractHistoryRequest;
                fromJSON(object: any): _136.QueryContractHistoryRequest;
                toJSON(message: _136.QueryContractHistoryRequest): unknown;
                fromPartial(object: Partial<_136.QueryContractHistoryRequest>): _136.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _136.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryContractHistoryResponse;
                fromJSON(object: any): _136.QueryContractHistoryResponse;
                toJSON(message: _136.QueryContractHistoryResponse): unknown;
                fromPartial(object: Partial<_136.QueryContractHistoryResponse>): _136.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _136.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryContractsByCodeRequest;
                fromJSON(object: any): _136.QueryContractsByCodeRequest;
                toJSON(message: _136.QueryContractsByCodeRequest): unknown;
                fromPartial(object: Partial<_136.QueryContractsByCodeRequest>): _136.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _136.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryContractsByCodeResponse;
                fromJSON(object: any): _136.QueryContractsByCodeResponse;
                toJSON(message: _136.QueryContractsByCodeResponse): unknown;
                fromPartial(object: Partial<_136.QueryContractsByCodeResponse>): _136.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _136.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryAllContractStateRequest;
                fromJSON(object: any): _136.QueryAllContractStateRequest;
                toJSON(message: _136.QueryAllContractStateRequest): unknown;
                fromPartial(object: Partial<_136.QueryAllContractStateRequest>): _136.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _136.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryAllContractStateResponse;
                fromJSON(object: any): _136.QueryAllContractStateResponse;
                toJSON(message: _136.QueryAllContractStateResponse): unknown;
                fromPartial(object: Partial<_136.QueryAllContractStateResponse>): _136.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _136.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryRawContractStateRequest;
                fromJSON(object: any): _136.QueryRawContractStateRequest;
                toJSON(message: _136.QueryRawContractStateRequest): unknown;
                fromPartial(object: Partial<_136.QueryRawContractStateRequest>): _136.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _136.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryRawContractStateResponse;
                fromJSON(object: any): _136.QueryRawContractStateResponse;
                toJSON(message: _136.QueryRawContractStateResponse): unknown;
                fromPartial(object: Partial<_136.QueryRawContractStateResponse>): _136.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _136.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QuerySmartContractStateRequest;
                fromJSON(object: any): _136.QuerySmartContractStateRequest;
                toJSON(message: _136.QuerySmartContractStateRequest): unknown;
                fromPartial(object: Partial<_136.QuerySmartContractStateRequest>): _136.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _136.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QuerySmartContractStateResponse;
                fromJSON(object: any): _136.QuerySmartContractStateResponse;
                toJSON(message: _136.QuerySmartContractStateResponse): unknown;
                fromPartial(object: Partial<_136.QuerySmartContractStateResponse>): _136.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _136.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryCodeRequest;
                fromJSON(object: any): _136.QueryCodeRequest;
                toJSON(message: _136.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_136.QueryCodeRequest>): _136.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _136.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.CodeInfoResponse;
                fromJSON(object: any): _136.CodeInfoResponse;
                toJSON(message: _136.CodeInfoResponse): unknown;
                fromPartial(object: Partial<_136.CodeInfoResponse>): _136.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _136.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryCodeResponse;
                fromJSON(object: any): _136.QueryCodeResponse;
                toJSON(message: _136.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_136.QueryCodeResponse>): _136.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _136.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryCodesRequest;
                fromJSON(object: any): _136.QueryCodesRequest;
                toJSON(message: _136.QueryCodesRequest): unknown;
                fromPartial(object: Partial<_136.QueryCodesRequest>): _136.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _136.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryCodesResponse;
                fromJSON(object: any): _136.QueryCodesResponse;
                toJSON(message: _136.QueryCodesResponse): unknown;
                fromPartial(object: Partial<_136.QueryCodesResponse>): _136.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _136.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryPinnedCodesRequest;
                fromJSON(object: any): _136.QueryPinnedCodesRequest;
                toJSON(message: _136.QueryPinnedCodesRequest): unknown;
                fromPartial(object: Partial<_136.QueryPinnedCodesRequest>): _136.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _136.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryPinnedCodesResponse;
                fromJSON(object: any): _136.QueryPinnedCodesResponse;
                toJSON(message: _136.QueryPinnedCodesResponse): unknown;
                fromPartial(object: Partial<_136.QueryPinnedCodesResponse>): _136.QueryPinnedCodesResponse;
            };
            QueryParamsRequest: {
                encode(_: _136.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryParamsRequest;
                fromJSON(_: any): _136.QueryParamsRequest;
                toJSON(_: _136.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_136.QueryParamsRequest>): _136.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _136.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryParamsResponse;
                fromJSON(object: any): _136.QueryParamsResponse;
                toJSON(message: _136.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_136.QueryParamsResponse>): _136.QueryParamsResponse;
            };
            QueryContractsByCreatorRequest: {
                encode(message: _136.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryContractsByCreatorRequest;
                fromJSON(object: any): _136.QueryContractsByCreatorRequest;
                toJSON(message: _136.QueryContractsByCreatorRequest): unknown;
                fromPartial(object: Partial<_136.QueryContractsByCreatorRequest>): _136.QueryContractsByCreatorRequest;
            };
            QueryContractsByCreatorResponse: {
                encode(message: _136.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryContractsByCreatorResponse;
                fromJSON(object: any): _136.QueryContractsByCreatorResponse;
                toJSON(message: _136.QueryContractsByCreatorResponse): unknown;
                fromPartial(object: Partial<_136.QueryContractsByCreatorResponse>): _136.QueryContractsByCreatorResponse;
            };
            StoreCodeProposal: {
                encode(message: _135.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.StoreCodeProposal;
                fromJSON(object: any): _135.StoreCodeProposal;
                toJSON(message: _135.StoreCodeProposal): unknown;
                fromPartial(object: Partial<_135.StoreCodeProposal>): _135.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _135.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.InstantiateContractProposal;
                fromJSON(object: any): _135.InstantiateContractProposal;
                toJSON(message: _135.InstantiateContractProposal): unknown;
                fromPartial(object: Partial<_135.InstantiateContractProposal>): _135.InstantiateContractProposal;
            };
            InstantiateContract2Proposal: {
                encode(message: _135.InstantiateContract2Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.InstantiateContract2Proposal;
                fromJSON(object: any): _135.InstantiateContract2Proposal;
                toJSON(message: _135.InstantiateContract2Proposal): unknown;
                fromPartial(object: Partial<_135.InstantiateContract2Proposal>): _135.InstantiateContract2Proposal;
            };
            MigrateContractProposal: {
                encode(message: _135.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MigrateContractProposal;
                fromJSON(object: any): _135.MigrateContractProposal;
                toJSON(message: _135.MigrateContractProposal): unknown;
                fromPartial(object: Partial<_135.MigrateContractProposal>): _135.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _135.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SudoContractProposal;
                fromJSON(object: any): _135.SudoContractProposal;
                toJSON(message: _135.SudoContractProposal): unknown;
                fromPartial(object: Partial<_135.SudoContractProposal>): _135.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _135.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ExecuteContractProposal;
                fromJSON(object: any): _135.ExecuteContractProposal;
                toJSON(message: _135.ExecuteContractProposal): unknown;
                fromPartial(object: Partial<_135.ExecuteContractProposal>): _135.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _135.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.UpdateAdminProposal;
                fromJSON(object: any): _135.UpdateAdminProposal;
                toJSON(message: _135.UpdateAdminProposal): unknown;
                fromPartial(object: Partial<_135.UpdateAdminProposal>): _135.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _135.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ClearAdminProposal;
                fromJSON(object: any): _135.ClearAdminProposal;
                toJSON(message: _135.ClearAdminProposal): unknown;
                fromPartial(object: Partial<_135.ClearAdminProposal>): _135.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _135.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.PinCodesProposal;
                fromJSON(object: any): _135.PinCodesProposal;
                toJSON(message: _135.PinCodesProposal): unknown;
                fromPartial(object: Partial<_135.PinCodesProposal>): _135.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _135.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.UnpinCodesProposal;
                fromJSON(object: any): _135.UnpinCodesProposal;
                toJSON(message: _135.UnpinCodesProposal): unknown;
                fromPartial(object: Partial<_135.UnpinCodesProposal>): _135.UnpinCodesProposal;
            };
            AccessConfigUpdate: {
                encode(message: _135.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.AccessConfigUpdate;
                fromJSON(object: any): _135.AccessConfigUpdate;
                toJSON(message: _135.AccessConfigUpdate): unknown;
                fromPartial(object: Partial<_135.AccessConfigUpdate>): _135.AccessConfigUpdate;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _135.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.UpdateInstantiateConfigProposal;
                fromJSON(object: any): _135.UpdateInstantiateConfigProposal;
                toJSON(message: _135.UpdateInstantiateConfigProposal): unknown;
                fromPartial(object: Partial<_135.UpdateInstantiateConfigProposal>): _135.UpdateInstantiateConfigProposal;
            };
            StoreAndInstantiateContractProposal: {
                encode(message: _135.StoreAndInstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.StoreAndInstantiateContractProposal;
                fromJSON(object: any): _135.StoreAndInstantiateContractProposal;
                toJSON(message: _135.StoreAndInstantiateContractProposal): unknown;
                fromPartial(object: Partial<_135.StoreAndInstantiateContractProposal>): _135.StoreAndInstantiateContractProposal;
            };
            MsgIBCSend: {
                encode(message: _134.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgIBCSend;
                fromJSON(object: any): _134.MsgIBCSend;
                toJSON(message: _134.MsgIBCSend): unknown;
                fromPartial(object: Partial<_134.MsgIBCSend>): _134.MsgIBCSend;
            };
            MsgIBCSendResponse: {
                encode(message: _134.MsgIBCSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgIBCSendResponse;
                fromJSON(object: any): _134.MsgIBCSendResponse;
                toJSON(message: _134.MsgIBCSendResponse): unknown;
                fromPartial(object: Partial<_134.MsgIBCSendResponse>): _134.MsgIBCSendResponse;
            };
            MsgIBCCloseChannel: {
                encode(message: _134.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgIBCCloseChannel;
                fromJSON(object: any): _134.MsgIBCCloseChannel;
                toJSON(message: _134.MsgIBCCloseChannel): unknown;
                fromPartial(object: Partial<_134.MsgIBCCloseChannel>): _134.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _133.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.GenesisState;
                fromJSON(object: any): _133.GenesisState;
                toJSON(message: _133.GenesisState): unknown;
                fromPartial(object: Partial<_133.GenesisState>): _133.GenesisState;
            };
            Code: {
                encode(message: _133.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Code;
                fromJSON(object: any): _133.Code;
                toJSON(message: _133.Code): unknown;
                fromPartial(object: Partial<_133.Code>): _133.Code;
            };
            Contract: {
                encode(message: _133.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Contract;
                fromJSON(object: any): _133.Contract;
                toJSON(message: _133.Contract): unknown;
                fromPartial(object: Partial<_133.Contract>): _133.Contract;
            };
            Sequence: {
                encode(message: _133.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Sequence;
                fromJSON(object: any): _133.Sequence;
                toJSON(message: _133.Sequence): unknown;
                fromPartial(object: Partial<_133.Sequence>): _133.Sequence;
            };
            StoreCodeAuthorization: {
                encode(message: _132.StoreCodeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.StoreCodeAuthorization;
                fromJSON(object: any): _132.StoreCodeAuthorization;
                toJSON(message: _132.StoreCodeAuthorization): unknown;
                fromPartial(object: Partial<_132.StoreCodeAuthorization>): _132.StoreCodeAuthorization;
            };
            ContractExecutionAuthorization: {
                encode(message: _132.ContractExecutionAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ContractExecutionAuthorization;
                fromJSON(object: any): _132.ContractExecutionAuthorization;
                toJSON(message: _132.ContractExecutionAuthorization): unknown;
                fromPartial(object: Partial<_132.ContractExecutionAuthorization>): _132.ContractExecutionAuthorization;
            };
            ContractMigrationAuthorization: {
                encode(message: _132.ContractMigrationAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ContractMigrationAuthorization;
                fromJSON(object: any): _132.ContractMigrationAuthorization;
                toJSON(message: _132.ContractMigrationAuthorization): unknown;
                fromPartial(object: Partial<_132.ContractMigrationAuthorization>): _132.ContractMigrationAuthorization;
            };
            CodeGrant: {
                encode(message: _132.CodeGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.CodeGrant;
                fromJSON(object: any): _132.CodeGrant;
                toJSON(message: _132.CodeGrant): unknown;
                fromPartial(object: Partial<_132.CodeGrant>): _132.CodeGrant;
            };
            ContractGrant: {
                encode(message: _132.ContractGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ContractGrant;
                fromJSON(object: any): _132.ContractGrant;
                toJSON(message: _132.ContractGrant): unknown;
                fromPartial(object: Partial<_132.ContractGrant>): _132.ContractGrant;
            };
            MaxCallsLimit: {
                encode(message: _132.MaxCallsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MaxCallsLimit;
                fromJSON(object: any): _132.MaxCallsLimit;
                toJSON(message: _132.MaxCallsLimit): unknown;
                fromPartial(object: Partial<_132.MaxCallsLimit>): _132.MaxCallsLimit;
            };
            MaxFundsLimit: {
                encode(message: _132.MaxFundsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MaxFundsLimit;
                fromJSON(object: any): _132.MaxFundsLimit;
                toJSON(message: _132.MaxFundsLimit): unknown;
                fromPartial(object: Partial<_132.MaxFundsLimit>): _132.MaxFundsLimit;
            };
            CombinedLimit: {
                encode(message: _132.CombinedLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.CombinedLimit;
                fromJSON(object: any): _132.CombinedLimit;
                toJSON(message: _132.CombinedLimit): unknown;
                fromPartial(object: Partial<_132.CombinedLimit>): _132.CombinedLimit;
            };
            AllowAllMessagesFilter: {
                encode(_: _132.AllowAllMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.AllowAllMessagesFilter;
                fromJSON(_: any): _132.AllowAllMessagesFilter;
                toJSON(_: _132.AllowAllMessagesFilter): unknown;
                fromPartial(_: Partial<_132.AllowAllMessagesFilter>): _132.AllowAllMessagesFilter;
            };
            AcceptedMessageKeysFilter: {
                encode(message: _132.AcceptedMessageKeysFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.AcceptedMessageKeysFilter;
                fromJSON(object: any): _132.AcceptedMessageKeysFilter;
                toJSON(message: _132.AcceptedMessageKeysFilter): unknown;
                fromPartial(object: Partial<_132.AcceptedMessageKeysFilter>): _132.AcceptedMessageKeysFilter;
            };
            AcceptedMessagesFilter: {
                encode(message: _132.AcceptedMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.AcceptedMessagesFilter;
                fromJSON(object: any): _132.AcceptedMessagesFilter;
                toJSON(message: _132.AcceptedMessagesFilter): unknown;
                fromPartial(object: Partial<_132.AcceptedMessagesFilter>): _132.AcceptedMessagesFilter;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                circuit: {
                    v1: import("../cosmos/circuit/v1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _295.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomMetadataByQueryString(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataByQueryStringRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataByQueryStringResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        denomOwnersByQuery(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersByQueryRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersByQueryResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                            status(request?: import("../cosmos/base/node/v1beta1/query").StatusRequest): Promise<import("../cosmos/base/node/v1beta1/query").StatusResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                circuit: {
                    v1: {
                        account(request: import("../cosmos/circuit/v1/query").QueryAccountRequest): Promise<import("../cosmos/circuit/v1/query").AccountResponse>;
                        accounts(request?: import("../cosmos/circuit/v1/query").QueryAccountsRequest): Promise<import("../cosmos/circuit/v1/query").AccountsResponse>;
                        disabledList(request?: import("../cosmos/circuit/v1/query").QueryDisabledListRequest): Promise<import("../cosmos/circuit/v1/query").DisabledListResponse>;
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        constitution(request?: import("../cosmos/gov/v1/query").QueryConstitutionRequest): Promise<import("../cosmos/gov/v1/query").QueryConstitutionResponse>;
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _136.QueryContractInfoRequest): Promise<_136.QueryContractInfoResponse>;
                        contractHistory(request: _136.QueryContractHistoryRequest): Promise<_136.QueryContractHistoryResponse>;
                        contractsByCode(request: _136.QueryContractsByCodeRequest): Promise<_136.QueryContractsByCodeResponse>;
                        allContractState(request: _136.QueryAllContractStateRequest): Promise<_136.QueryAllContractStateResponse>;
                        rawContractState(request: _136.QueryRawContractStateRequest): Promise<_136.QueryRawContractStateResponse>;
                        smartContractState(request: _136.QuerySmartContractStateRequest): Promise<_136.QuerySmartContractStateResponse>;
                        code(request: _136.QueryCodeRequest): Promise<_136.QueryCodeResponse>;
                        codes(request?: _136.QueryCodesRequest): Promise<_136.QueryCodesResponse>;
                        pinnedCodes(request?: _136.QueryPinnedCodesRequest): Promise<_136.QueryPinnedCodesResponse>;
                        params(request?: _136.QueryParamsRequest): Promise<_136.QueryParamsResponse>;
                        contractsByCreator(request: _136.QueryContractsByCreatorRequest): Promise<_136.QueryContractsByCreatorResponse>;
                    };
                };
            };
        }>;
    };
}
