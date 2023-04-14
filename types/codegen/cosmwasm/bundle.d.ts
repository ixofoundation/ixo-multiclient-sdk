import * as _94 from "./wasm/v1/authz";
import * as _95 from "./wasm/v1/genesis";
import * as _96 from "./wasm/v1/ibc";
import * as _97 from "./wasm/v1/proposal";
import * as _98 from "./wasm/v1/query";
import * as _99 from "./wasm/v1/tx";
import * as _100 from "./wasm/v1/types";
import * as _218 from "./wasm/v1/query.rpc.Query";
import * as _219 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _219.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _98.QueryContractInfoRequest): Promise<_98.QueryContractInfoResponse>;
                contractHistory(request: _98.QueryContractHistoryRequest): Promise<_98.QueryContractHistoryResponse>;
                contractsByCode(request: _98.QueryContractsByCodeRequest): Promise<_98.QueryContractsByCodeResponse>;
                allContractState(request: _98.QueryAllContractStateRequest): Promise<_98.QueryAllContractStateResponse>;
                rawContractState(request: _98.QueryRawContractStateRequest): Promise<_98.QueryRawContractStateResponse>;
                smartContractState(request: _98.QuerySmartContractStateRequest): Promise<_98.QuerySmartContractStateResponse>;
                code(request: _98.QueryCodeRequest): Promise<_98.QueryCodeResponse>;
                codes(request?: _98.QueryCodesRequest): Promise<_98.QueryCodesResponse>;
                pinnedCodes(request?: _98.QueryPinnedCodesRequest): Promise<_98.QueryPinnedCodesResponse>;
                params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                contractsByCreator(request: _98.QueryContractsByCreatorRequest): Promise<_98.QueryContractsByCreatorResponse>;
            };
            accessTypeFromJSON(object: any): _100.AccessType;
            accessTypeToJSON(object: _100.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _100.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _100.ContractCodeHistoryOperationType): string;
            AccessType: typeof _100.AccessType;
            AccessTypeSDKType: typeof _100.AccessType;
            ContractCodeHistoryOperationType: typeof _100.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _100.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _100.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.AccessTypeParam;
                fromJSON(object: any): _100.AccessTypeParam;
                toJSON(message: _100.AccessTypeParam): unknown;
                fromPartial(object: Partial<_100.AccessTypeParam>): _100.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _100.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.AccessConfig;
                fromJSON(object: any): _100.AccessConfig;
                toJSON(message: _100.AccessConfig): unknown;
                fromPartial(object: Partial<_100.AccessConfig>): _100.AccessConfig;
            };
            Params: {
                encode(message: _100.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Params;
                fromJSON(object: any): _100.Params;
                toJSON(message: _100.Params): unknown;
                fromPartial(object: Partial<_100.Params>): _100.Params;
            };
            CodeInfo: {
                encode(message: _100.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.CodeInfo;
                fromJSON(object: any): _100.CodeInfo;
                toJSON(message: _100.CodeInfo): unknown;
                fromPartial(object: Partial<_100.CodeInfo>): _100.CodeInfo;
            };
            ContractInfo: {
                encode(message: _100.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.ContractInfo;
                fromJSON(object: any): _100.ContractInfo;
                toJSON(message: _100.ContractInfo): unknown;
                fromPartial(object: Partial<_100.ContractInfo>): _100.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _100.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.ContractCodeHistoryEntry;
                fromJSON(object: any): _100.ContractCodeHistoryEntry;
                toJSON(message: _100.ContractCodeHistoryEntry): unknown;
                fromPartial(object: Partial<_100.ContractCodeHistoryEntry>): _100.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _100.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.AbsoluteTxPosition;
                fromJSON(object: any): _100.AbsoluteTxPosition;
                toJSON(message: _100.AbsoluteTxPosition): unknown;
                fromPartial(object: Partial<_100.AbsoluteTxPosition>): _100.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _100.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Model;
                fromJSON(object: any): _100.Model;
                toJSON(message: _100.Model): unknown;
                fromPartial(object: Partial<_100.Model>): _100.Model;
            };
            MsgStoreCode: {
                encode(message: _99.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgStoreCode;
                fromJSON(object: any): _99.MsgStoreCode;
                toJSON(message: _99.MsgStoreCode): unknown;
                fromPartial(object: Partial<_99.MsgStoreCode>): _99.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _99.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgStoreCodeResponse;
                fromJSON(object: any): _99.MsgStoreCodeResponse;
                toJSON(message: _99.MsgStoreCodeResponse): unknown;
                fromPartial(object: Partial<_99.MsgStoreCodeResponse>): _99.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _99.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgInstantiateContract;
                fromJSON(object: any): _99.MsgInstantiateContract;
                toJSON(message: _99.MsgInstantiateContract): unknown;
                fromPartial(object: Partial<_99.MsgInstantiateContract>): _99.MsgInstantiateContract;
            };
            MsgInstantiateContract2: {
                encode(message: _99.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgInstantiateContract2;
                fromJSON(object: any): _99.MsgInstantiateContract2;
                toJSON(message: _99.MsgInstantiateContract2): unknown;
                fromPartial(object: Partial<_99.MsgInstantiateContract2>): _99.MsgInstantiateContract2;
            };
            MsgInstantiateContractResponse: {
                encode(message: _99.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgInstantiateContractResponse;
                fromJSON(object: any): _99.MsgInstantiateContractResponse;
                toJSON(message: _99.MsgInstantiateContractResponse): unknown;
                fromPartial(object: Partial<_99.MsgInstantiateContractResponse>): _99.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2Response: {
                encode(message: _99.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgInstantiateContract2Response;
                fromJSON(object: any): _99.MsgInstantiateContract2Response;
                toJSON(message: _99.MsgInstantiateContract2Response): unknown;
                fromPartial(object: Partial<_99.MsgInstantiateContract2Response>): _99.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _99.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgExecuteContract;
                fromJSON(object: any): _99.MsgExecuteContract;
                toJSON(message: _99.MsgExecuteContract): unknown;
                fromPartial(object: Partial<_99.MsgExecuteContract>): _99.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _99.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgExecuteContractResponse;
                fromJSON(object: any): _99.MsgExecuteContractResponse;
                toJSON(message: _99.MsgExecuteContractResponse): unknown;
                fromPartial(object: Partial<_99.MsgExecuteContractResponse>): _99.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _99.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgMigrateContract;
                fromJSON(object: any): _99.MsgMigrateContract;
                toJSON(message: _99.MsgMigrateContract): unknown;
                fromPartial(object: Partial<_99.MsgMigrateContract>): _99.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _99.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgMigrateContractResponse;
                fromJSON(object: any): _99.MsgMigrateContractResponse;
                toJSON(message: _99.MsgMigrateContractResponse): unknown;
                fromPartial(object: Partial<_99.MsgMigrateContractResponse>): _99.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _99.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgUpdateAdmin;
                fromJSON(object: any): _99.MsgUpdateAdmin;
                toJSON(message: _99.MsgUpdateAdmin): unknown;
                fromPartial(object: Partial<_99.MsgUpdateAdmin>): _99.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _99.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgUpdateAdminResponse;
                fromJSON(_: any): _99.MsgUpdateAdminResponse;
                toJSON(_: _99.MsgUpdateAdminResponse): unknown;
                fromPartial(_: Partial<_99.MsgUpdateAdminResponse>): _99.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _99.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgClearAdmin;
                fromJSON(object: any): _99.MsgClearAdmin;
                toJSON(message: _99.MsgClearAdmin): unknown;
                fromPartial(object: Partial<_99.MsgClearAdmin>): _99.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _99.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgClearAdminResponse;
                fromJSON(_: any): _99.MsgClearAdminResponse;
                toJSON(_: _99.MsgClearAdminResponse): unknown;
                fromPartial(_: Partial<_99.MsgClearAdminResponse>): _99.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _98.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryContractInfoRequest;
                fromJSON(object: any): _98.QueryContractInfoRequest;
                toJSON(message: _98.QueryContractInfoRequest): unknown;
                fromPartial(object: Partial<_98.QueryContractInfoRequest>): _98.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _98.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryContractInfoResponse;
                fromJSON(object: any): _98.QueryContractInfoResponse;
                toJSON(message: _98.QueryContractInfoResponse): unknown;
                fromPartial(object: Partial<_98.QueryContractInfoResponse>): _98.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _98.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryContractHistoryRequest;
                fromJSON(object: any): _98.QueryContractHistoryRequest;
                toJSON(message: _98.QueryContractHistoryRequest): unknown;
                fromPartial(object: Partial<_98.QueryContractHistoryRequest>): _98.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _98.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryContractHistoryResponse;
                fromJSON(object: any): _98.QueryContractHistoryResponse;
                toJSON(message: _98.QueryContractHistoryResponse): unknown;
                fromPartial(object: Partial<_98.QueryContractHistoryResponse>): _98.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _98.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryContractsByCodeRequest;
                fromJSON(object: any): _98.QueryContractsByCodeRequest;
                toJSON(message: _98.QueryContractsByCodeRequest): unknown;
                fromPartial(object: Partial<_98.QueryContractsByCodeRequest>): _98.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _98.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryContractsByCodeResponse;
                fromJSON(object: any): _98.QueryContractsByCodeResponse;
                toJSON(message: _98.QueryContractsByCodeResponse): unknown;
                fromPartial(object: Partial<_98.QueryContractsByCodeResponse>): _98.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _98.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryAllContractStateRequest;
                fromJSON(object: any): _98.QueryAllContractStateRequest;
                toJSON(message: _98.QueryAllContractStateRequest): unknown;
                fromPartial(object: Partial<_98.QueryAllContractStateRequest>): _98.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _98.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryAllContractStateResponse;
                fromJSON(object: any): _98.QueryAllContractStateResponse;
                toJSON(message: _98.QueryAllContractStateResponse): unknown;
                fromPartial(object: Partial<_98.QueryAllContractStateResponse>): _98.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _98.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryRawContractStateRequest;
                fromJSON(object: any): _98.QueryRawContractStateRequest;
                toJSON(message: _98.QueryRawContractStateRequest): unknown;
                fromPartial(object: Partial<_98.QueryRawContractStateRequest>): _98.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _98.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryRawContractStateResponse;
                fromJSON(object: any): _98.QueryRawContractStateResponse;
                toJSON(message: _98.QueryRawContractStateResponse): unknown;
                fromPartial(object: Partial<_98.QueryRawContractStateResponse>): _98.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _98.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QuerySmartContractStateRequest;
                fromJSON(object: any): _98.QuerySmartContractStateRequest;
                toJSON(message: _98.QuerySmartContractStateRequest): unknown;
                fromPartial(object: Partial<_98.QuerySmartContractStateRequest>): _98.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _98.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QuerySmartContractStateResponse;
                fromJSON(object: any): _98.QuerySmartContractStateResponse;
                toJSON(message: _98.QuerySmartContractStateResponse): unknown;
                fromPartial(object: Partial<_98.QuerySmartContractStateResponse>): _98.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _98.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryCodeRequest;
                fromJSON(object: any): _98.QueryCodeRequest;
                toJSON(message: _98.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_98.QueryCodeRequest>): _98.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _98.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.CodeInfoResponse;
                fromJSON(object: any): _98.CodeInfoResponse;
                toJSON(message: _98.CodeInfoResponse): unknown;
                fromPartial(object: Partial<_98.CodeInfoResponse>): _98.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _98.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryCodeResponse;
                fromJSON(object: any): _98.QueryCodeResponse;
                toJSON(message: _98.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_98.QueryCodeResponse>): _98.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _98.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryCodesRequest;
                fromJSON(object: any): _98.QueryCodesRequest;
                toJSON(message: _98.QueryCodesRequest): unknown;
                fromPartial(object: Partial<_98.QueryCodesRequest>): _98.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _98.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryCodesResponse;
                fromJSON(object: any): _98.QueryCodesResponse;
                toJSON(message: _98.QueryCodesResponse): unknown;
                fromPartial(object: Partial<_98.QueryCodesResponse>): _98.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _98.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryPinnedCodesRequest;
                fromJSON(object: any): _98.QueryPinnedCodesRequest;
                toJSON(message: _98.QueryPinnedCodesRequest): unknown;
                fromPartial(object: Partial<_98.QueryPinnedCodesRequest>): _98.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _98.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryPinnedCodesResponse;
                fromJSON(object: any): _98.QueryPinnedCodesResponse;
                toJSON(message: _98.QueryPinnedCodesResponse): unknown;
                fromPartial(object: Partial<_98.QueryPinnedCodesResponse>): _98.QueryPinnedCodesResponse;
            };
            QueryParamsRequest: {
                encode(_: _98.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryParamsRequest;
                fromJSON(_: any): _98.QueryParamsRequest;
                toJSON(_: _98.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_98.QueryParamsRequest>): _98.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _98.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryParamsResponse;
                fromJSON(object: any): _98.QueryParamsResponse;
                toJSON(message: _98.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_98.QueryParamsResponse>): _98.QueryParamsResponse;
            };
            QueryContractsByCreatorRequest: {
                encode(message: _98.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryContractsByCreatorRequest;
                fromJSON(object: any): _98.QueryContractsByCreatorRequest;
                toJSON(message: _98.QueryContractsByCreatorRequest): unknown;
                fromPartial(object: Partial<_98.QueryContractsByCreatorRequest>): _98.QueryContractsByCreatorRequest;
            };
            QueryContractsByCreatorResponse: {
                encode(message: _98.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryContractsByCreatorResponse;
                fromJSON(object: any): _98.QueryContractsByCreatorResponse;
                toJSON(message: _98.QueryContractsByCreatorResponse): unknown;
                fromPartial(object: Partial<_98.QueryContractsByCreatorResponse>): _98.QueryContractsByCreatorResponse;
            };
            StoreCodeProposal: {
                encode(message: _97.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.StoreCodeProposal;
                fromJSON(object: any): _97.StoreCodeProposal;
                toJSON(message: _97.StoreCodeProposal): unknown;
                fromPartial(object: Partial<_97.StoreCodeProposal>): _97.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _97.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.InstantiateContractProposal;
                fromJSON(object: any): _97.InstantiateContractProposal;
                toJSON(message: _97.InstantiateContractProposal): unknown;
                fromPartial(object: Partial<_97.InstantiateContractProposal>): _97.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _97.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MigrateContractProposal;
                fromJSON(object: any): _97.MigrateContractProposal;
                toJSON(message: _97.MigrateContractProposal): unknown;
                fromPartial(object: Partial<_97.MigrateContractProposal>): _97.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _97.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SudoContractProposal;
                fromJSON(object: any): _97.SudoContractProposal;
                toJSON(message: _97.SudoContractProposal): unknown;
                fromPartial(object: Partial<_97.SudoContractProposal>): _97.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _97.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ExecuteContractProposal;
                fromJSON(object: any): _97.ExecuteContractProposal;
                toJSON(message: _97.ExecuteContractProposal): unknown;
                fromPartial(object: Partial<_97.ExecuteContractProposal>): _97.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _97.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.UpdateAdminProposal;
                fromJSON(object: any): _97.UpdateAdminProposal;
                toJSON(message: _97.UpdateAdminProposal): unknown;
                fromPartial(object: Partial<_97.UpdateAdminProposal>): _97.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _97.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ClearAdminProposal;
                fromJSON(object: any): _97.ClearAdminProposal;
                toJSON(message: _97.ClearAdminProposal): unknown;
                fromPartial(object: Partial<_97.ClearAdminProposal>): _97.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _97.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.PinCodesProposal;
                fromJSON(object: any): _97.PinCodesProposal;
                toJSON(message: _97.PinCodesProposal): unknown;
                fromPartial(object: Partial<_97.PinCodesProposal>): _97.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _97.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.UnpinCodesProposal;
                fromJSON(object: any): _97.UnpinCodesProposal;
                toJSON(message: _97.UnpinCodesProposal): unknown;
                fromPartial(object: Partial<_97.UnpinCodesProposal>): _97.UnpinCodesProposal;
            };
            AccessConfigUpdate: {
                encode(message: _97.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.AccessConfigUpdate;
                fromJSON(object: any): _97.AccessConfigUpdate;
                toJSON(message: _97.AccessConfigUpdate): unknown;
                fromPartial(object: Partial<_97.AccessConfigUpdate>): _97.AccessConfigUpdate;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _97.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.UpdateInstantiateConfigProposal;
                fromJSON(object: any): _97.UpdateInstantiateConfigProposal;
                toJSON(message: _97.UpdateInstantiateConfigProposal): unknown;
                fromPartial(object: Partial<_97.UpdateInstantiateConfigProposal>): _97.UpdateInstantiateConfigProposal;
            };
            StoreAndInstantiateContractProposal: {
                encode(message: _97.StoreAndInstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.StoreAndInstantiateContractProposal;
                fromJSON(object: any): _97.StoreAndInstantiateContractProposal;
                toJSON(message: _97.StoreAndInstantiateContractProposal): unknown;
                fromPartial(object: Partial<_97.StoreAndInstantiateContractProposal>): _97.StoreAndInstantiateContractProposal;
            };
            MsgIBCSend: {
                encode(message: _96.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgIBCSend;
                fromJSON(object: any): _96.MsgIBCSend;
                toJSON(message: _96.MsgIBCSend): unknown;
                fromPartial(object: Partial<_96.MsgIBCSend>): _96.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _96.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgIBCCloseChannel;
                fromJSON(object: any): _96.MsgIBCCloseChannel;
                toJSON(message: _96.MsgIBCCloseChannel): unknown;
                fromPartial(object: Partial<_96.MsgIBCCloseChannel>): _96.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _95.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.GenesisState;
                fromJSON(object: any): _95.GenesisState;
                toJSON(message: _95.GenesisState): unknown;
                fromPartial(object: Partial<_95.GenesisState>): _95.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _95.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.GenesisState_GenMsgs;
                fromJSON(object: any): _95.GenesisState_GenMsgs;
                toJSON(message: _95.GenesisState_GenMsgs): unknown;
                fromPartial(object: Partial<_95.GenesisState_GenMsgs>): _95.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _95.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Code;
                fromJSON(object: any): _95.Code;
                toJSON(message: _95.Code): unknown;
                fromPartial(object: Partial<_95.Code>): _95.Code;
            };
            Contract: {
                encode(message: _95.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Contract;
                fromJSON(object: any): _95.Contract;
                toJSON(message: _95.Contract): unknown;
                fromPartial(object: Partial<_95.Contract>): _95.Contract;
            };
            Sequence: {
                encode(message: _95.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Sequence;
                fromJSON(object: any): _95.Sequence;
                toJSON(message: _95.Sequence): unknown;
                fromPartial(object: Partial<_95.Sequence>): _95.Sequence;
            };
            ContractExecutionAuthorization: {
                encode(message: _94.ContractExecutionAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ContractExecutionAuthorization;
                fromJSON(object: any): _94.ContractExecutionAuthorization;
                toJSON(message: _94.ContractExecutionAuthorization): unknown;
                fromPartial(object: Partial<_94.ContractExecutionAuthorization>): _94.ContractExecutionAuthorization;
            };
            ContractMigrationAuthorization: {
                encode(message: _94.ContractMigrationAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ContractMigrationAuthorization;
                fromJSON(object: any): _94.ContractMigrationAuthorization;
                toJSON(message: _94.ContractMigrationAuthorization): unknown;
                fromPartial(object: Partial<_94.ContractMigrationAuthorization>): _94.ContractMigrationAuthorization;
            };
            ContractGrant: {
                encode(message: _94.ContractGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ContractGrant;
                fromJSON(object: any): _94.ContractGrant;
                toJSON(message: _94.ContractGrant): unknown;
                fromPartial(object: Partial<_94.ContractGrant>): _94.ContractGrant;
            };
            MaxCallsLimit: {
                encode(message: _94.MaxCallsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MaxCallsLimit;
                fromJSON(object: any): _94.MaxCallsLimit;
                toJSON(message: _94.MaxCallsLimit): unknown;
                fromPartial(object: Partial<_94.MaxCallsLimit>): _94.MaxCallsLimit;
            };
            MaxFundsLimit: {
                encode(message: _94.MaxFundsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MaxFundsLimit;
                fromJSON(object: any): _94.MaxFundsLimit;
                toJSON(message: _94.MaxFundsLimit): unknown;
                fromPartial(object: Partial<_94.MaxFundsLimit>): _94.MaxFundsLimit;
            };
            CombinedLimit: {
                encode(message: _94.CombinedLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.CombinedLimit;
                fromJSON(object: any): _94.CombinedLimit;
                toJSON(message: _94.CombinedLimit): unknown;
                fromPartial(object: Partial<_94.CombinedLimit>): _94.CombinedLimit;
            };
            AllowAllMessagesFilter: {
                encode(_: _94.AllowAllMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.AllowAllMessagesFilter;
                fromJSON(_: any): _94.AllowAllMessagesFilter;
                toJSON(_: _94.AllowAllMessagesFilter): unknown;
                fromPartial(_: Partial<_94.AllowAllMessagesFilter>): _94.AllowAllMessagesFilter;
            };
            AcceptedMessageKeysFilter: {
                encode(message: _94.AcceptedMessageKeysFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.AcceptedMessageKeysFilter;
                fromJSON(object: any): _94.AcceptedMessageKeysFilter;
                toJSON(message: _94.AcceptedMessageKeysFilter): unknown;
                fromPartial(object: Partial<_94.AcceptedMessageKeysFilter>): _94.AcceptedMessageKeysFilter;
            };
            AcceptedMessagesFilter: {
                encode(message: _94.AcceptedMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.AcceptedMessagesFilter;
                fromJSON(object: any): _94.AcceptedMessagesFilter;
                toJSON(message: _94.AcceptedMessagesFilter): unknown;
                fromPartial(object: Partial<_94.AcceptedMessagesFilter>): _94.AcceptedMessagesFilter;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
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
                    v1: _219.MsgClientImpl;
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
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
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
                        contractInfo(request: _98.QueryContractInfoRequest): Promise<_98.QueryContractInfoResponse>;
                        contractHistory(request: _98.QueryContractHistoryRequest): Promise<_98.QueryContractHistoryResponse>;
                        contractsByCode(request: _98.QueryContractsByCodeRequest): Promise<_98.QueryContractsByCodeResponse>;
                        allContractState(request: _98.QueryAllContractStateRequest): Promise<_98.QueryAllContractStateResponse>;
                        rawContractState(request: _98.QueryRawContractStateRequest): Promise<_98.QueryRawContractStateResponse>;
                        smartContractState(request: _98.QuerySmartContractStateRequest): Promise<_98.QuerySmartContractStateResponse>;
                        code(request: _98.QueryCodeRequest): Promise<_98.QueryCodeResponse>;
                        codes(request?: _98.QueryCodesRequest): Promise<_98.QueryCodesResponse>;
                        pinnedCodes(request?: _98.QueryPinnedCodesRequest): Promise<_98.QueryPinnedCodesResponse>;
                        params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                        contractsByCreator(request: _98.QueryContractsByCreatorRequest): Promise<_98.QueryContractsByCreatorResponse>;
                    };
                };
            };
        }>;
    };
}
