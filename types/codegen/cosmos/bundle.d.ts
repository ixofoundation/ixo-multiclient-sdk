import * as _3 from "./app/runtime/v1alpha1/module";
import * as _4 from "./app/v1alpha1/config";
import * as _5 from "./app/v1alpha1/module";
import * as _6 from "./app/v1alpha1/query";
import * as _7 from "./auth/module/v1/module";
import * as _8 from "./auth/v1beta1/auth";
import * as _9 from "./auth/v1beta1/genesis";
import * as _10 from "./auth/v1beta1/query";
import * as _11 from "./auth/v1beta1/tx";
import * as _12 from "./authz/module/v1/module";
import * as _13 from "./authz/v1beta1/authz";
import * as _14 from "./authz/v1beta1/event";
import * as _15 from "./authz/v1beta1/genesis";
import * as _16 from "./authz/v1beta1/query";
import * as _17 from "./authz/v1beta1/tx";
import * as _18 from "./autocli/v1/options";
import * as _19 from "./autocli/v1/query";
import * as _20 from "./bank/module/v1/module";
import * as _21 from "./bank/v1beta1/authz";
import * as _22 from "./bank/v1beta1/bank";
import * as _23 from "./bank/v1beta1/genesis";
import * as _24 from "./bank/v1beta1/query";
import * as _25 from "./bank/v1beta1/tx";
import * as _26 from "./base/abci/v1beta1/abci";
import * as _27 from "./base/node/v1beta1/query";
import * as _28 from "./base/query/v1beta1/pagination";
import * as _29 from "./base/reflection/v1beta1/reflection";
import * as _30 from "./base/reflection/v2alpha1/reflection";
import * as _31 from "./base/tendermint/v1beta1/query";
import * as _32 from "./base/tendermint/v1beta1/types";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./circuit/module/v1/module";
import * as _35 from "./circuit/v1/query";
import * as _36 from "./circuit/v1/tx";
import * as _37 from "./circuit/v1/types";
import * as _38 from "./consensus/module/v1/module";
import * as _39 from "./consensus/v1/query";
import * as _40 from "./consensus/v1/tx";
import * as _41 from "./crisis/module/v1/module";
import * as _42 from "./crisis/v1beta1/genesis";
import * as _43 from "./crisis/v1beta1/tx";
import * as _44 from "./crypto/ed25519/keys";
import * as _45 from "./crypto/hd/v1/hd";
import * as _46 from "./crypto/keyring/v1/record";
import * as _47 from "./crypto/multisig/keys";
import * as _48 from "./crypto/secp256k1/keys";
import * as _49 from "./crypto/secp256r1/keys";
import * as _50 from "./distribution/module/v1/module";
import * as _51 from "./distribution/v1beta1/distribution";
import * as _52 from "./distribution/v1beta1/genesis";
import * as _53 from "./distribution/v1beta1/query";
import * as _54 from "./distribution/v1beta1/tx";
import * as _55 from "./evidence/module/v1/module";
import * as _56 from "./evidence/v1beta1/evidence";
import * as _57 from "./evidence/v1beta1/genesis";
import * as _58 from "./evidence/v1beta1/query";
import * as _59 from "./evidence/v1beta1/tx";
import * as _60 from "./feegrant/module/v1/module";
import * as _61 from "./feegrant/v1beta1/feegrant";
import * as _62 from "./feegrant/v1beta1/genesis";
import * as _63 from "./feegrant/v1beta1/query";
import * as _64 from "./feegrant/v1beta1/tx";
import * as _65 from "./genutil/module/v1/module";
import * as _66 from "./genutil/v1beta1/genesis";
import * as _67 from "./gov/module/v1/module";
import * as _68 from "./gov/v1/genesis";
import * as _69 from "./gov/v1/gov";
import * as _70 from "./gov/v1/query";
import * as _71 from "./gov/v1/tx";
import * as _72 from "./gov/v1beta1/genesis";
import * as _73 from "./gov/v1beta1/gov";
import * as _74 from "./gov/v1beta1/query";
import * as _75 from "./gov/v1beta1/tx";
import * as _76 from "./group/module/v1/module";
import * as _77 from "./group/v1/events";
import * as _78 from "./group/v1/genesis";
import * as _79 from "./group/v1/query";
import * as _80 from "./group/v1/tx";
import * as _81 from "./group/v1/types";
import * as _82 from "./ics23/v1/proofs";
import * as _83 from "./mint/module/v1/module";
import * as _84 from "./mint/v1beta1/genesis";
import * as _85 from "./mint/v1beta1/mint";
import * as _86 from "./mint/v1beta1/query";
import * as _87 from "./mint/v1beta1/tx";
import * as _90 from "./nft/module/v1/module";
import * as _91 from "./nft/v1beta1/event";
import * as _92 from "./nft/v1beta1/genesis";
import * as _93 from "./nft/v1beta1/nft";
import * as _94 from "./nft/v1beta1/query";
import * as _95 from "./nft/v1beta1/tx";
import * as _96 from "./orm/module/v1alpha1/module";
import * as _97 from "./orm/query/v1alpha1/query";
import * as _98 from "./orm/v1/orm";
import * as _99 from "./orm/v1alpha1/schema";
import * as _100 from "./params/module/v1/module";
import * as _101 from "./params/v1beta1/params";
import * as _102 from "./params/v1beta1/query";
import * as _104 from "./reflection/v1/reflection";
import * as _105 from "./slashing/module/v1/module";
import * as _106 from "./slashing/v1beta1/genesis";
import * as _107 from "./slashing/v1beta1/query";
import * as _108 from "./slashing/v1beta1/slashing";
import * as _109 from "./slashing/v1beta1/tx";
import * as _110 from "./staking/module/v1/module";
import * as _111 from "./staking/v1beta1/authz";
import * as _112 from "./staking/v1beta1/genesis";
import * as _113 from "./staking/v1beta1/query";
import * as _114 from "./staking/v1beta1/staking";
import * as _115 from "./staking/v1beta1/tx";
import * as _116 from "./store/internal/kv/v1beta1/kv";
import * as _117 from "./store/snapshots/v1/snapshot";
import * as _118 from "./store/streaming/abci/grpc";
import * as _119 from "./store/v1beta1/commit_info";
import * as _120 from "./store/v1beta1/listening";
import * as _121 from "./tx/config/v1/config";
import * as _122 from "./tx/signing/v1beta1/signing";
import * as _123 from "./tx/v1beta1/service";
import * as _124 from "./tx/v1beta1/tx";
import * as _125 from "./upgrade/module/v1/module";
import * as _126 from "./upgrade/v1beta1/query";
import * as _127 from "./upgrade/v1beta1/tx";
import * as _128 from "./upgrade/v1beta1/upgrade";
import * as _129 from "./vesting/module/v1/module";
import * as _130 from "./vesting/v1beta1/tx";
import * as _131 from "./vesting/v1beta1/vesting";
import * as _253 from "./app/v1alpha1/query.rpc.Query";
import * as _254 from "./auth/v1beta1/query.rpc.Query";
import * as _255 from "./authz/v1beta1/query.rpc.Query";
import * as _256 from "./autocli/v1/query.rpc.Query";
import * as _257 from "./bank/v1beta1/query.rpc.Query";
import * as _258 from "./base/node/v1beta1/query.rpc.Service";
import * as _259 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _260 from "./circuit/v1/query.rpc.Query";
import * as _261 from "./consensus/v1/query.rpc.Query";
import * as _262 from "./distribution/v1beta1/query.rpc.Query";
import * as _263 from "./evidence/v1beta1/query.rpc.Query";
import * as _264 from "./feegrant/v1beta1/query.rpc.Query";
import * as _265 from "./gov/v1/query.rpc.Query";
import * as _266 from "./gov/v1beta1/query.rpc.Query";
import * as _267 from "./group/v1/query.rpc.Query";
import * as _268 from "./mint/v1beta1/query.rpc.Query";
import * as _269 from "./nft/v1beta1/query.rpc.Query";
import * as _270 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _271 from "./params/v1beta1/query.rpc.Query";
import * as _272 from "./slashing/v1beta1/query.rpc.Query";
import * as _273 from "./staking/v1beta1/query.rpc.Query";
import * as _274 from "./tx/v1beta1/service.rpc.Service";
import * as _275 from "./upgrade/v1beta1/query.rpc.Query";
import * as _276 from "./auth/v1beta1/tx.rpc.msg";
import * as _277 from "./authz/v1beta1/tx.rpc.msg";
import * as _278 from "./bank/v1beta1/tx.rpc.msg";
import * as _279 from "./circuit/v1/tx.rpc.msg";
import * as _280 from "./consensus/v1/tx.rpc.msg";
import * as _281 from "./crisis/v1beta1/tx.rpc.msg";
import * as _282 from "./distribution/v1beta1/tx.rpc.msg";
import * as _283 from "./evidence/v1beta1/tx.rpc.msg";
import * as _284 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _285 from "./gov/v1/tx.rpc.msg";
import * as _286 from "./gov/v1beta1/tx.rpc.msg";
import * as _287 from "./group/v1/tx.rpc.msg";
import * as _288 from "./mint/v1beta1/tx.rpc.msg";
import * as _289 from "./nft/v1beta1/tx.rpc.msg";
import * as _290 from "./slashing/v1beta1/tx.rpc.msg";
import * as _291 from "./staking/v1beta1/tx.rpc.msg";
import * as _292 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _293 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    encode(message: _3.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Module;
                    fromJSON(object: any): _3.Module;
                    toJSON(message: _3.Module): unknown;
                    fromPartial(object: Partial<_3.Module>): _3.Module;
                };
                StoreKeyConfig: {
                    encode(message: _3.StoreKeyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.StoreKeyConfig;
                    fromJSON(object: any): _3.StoreKeyConfig;
                    toJSON(message: _3.StoreKeyConfig): unknown;
                    fromPartial(object: Partial<_3.StoreKeyConfig>): _3.StoreKeyConfig;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _253.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _6.QueryConfigRequest): Promise<_6.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _6.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryConfigRequest;
                fromJSON(_: any): _6.QueryConfigRequest;
                toJSON(_: _6.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_6.QueryConfigRequest>): _6.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _6.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryConfigResponse;
                fromJSON(object: any): _6.QueryConfigResponse;
                toJSON(message: _6.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_6.QueryConfigResponse>): _6.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _5.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ModuleDescriptor;
                fromJSON(object: any): _5.ModuleDescriptor;
                toJSON(message: _5.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_5.ModuleDescriptor>): _5.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _5.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.PackageReference;
                fromJSON(object: any): _5.PackageReference;
                toJSON(message: _5.PackageReference): unknown;
                fromPartial(object: Partial<_5.PackageReference>): _5.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _5.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MigrateFromInfo;
                fromJSON(object: any): _5.MigrateFromInfo;
                toJSON(message: _5.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_5.MigrateFromInfo>): _5.MigrateFromInfo;
            };
            Config: {
                encode(message: _4.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Config;
                fromJSON(object: any): _4.Config;
                toJSON(message: _4.Config): unknown;
                fromPartial(object: Partial<_4.Config>): _4.Config;
            };
            ModuleConfig: {
                encode(message: _4.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.ModuleConfig;
                fromJSON(object: any): _4.ModuleConfig;
                toJSON(message: _4.ModuleConfig): unknown;
                fromPartial(object: Partial<_4.ModuleConfig>): _4.ModuleConfig;
            };
            GolangBinding: {
                encode(message: _4.GolangBinding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GolangBinding;
                fromJSON(object: any): _4.GolangBinding;
                toJSON(message: _4.GolangBinding): unknown;
                fromPartial(object: Partial<_4.GolangBinding>): _4.GolangBinding;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _7.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Module;
                    fromJSON(object: any): _7.Module;
                    toJSON(message: _7.Module): unknown;
                    fromPartial(object: Partial<_7.Module>): _7.Module;
                };
                ModuleAccountPermission: {
                    encode(message: _7.ModuleAccountPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ModuleAccountPermission;
                    fromJSON(object: any): _7.ModuleAccountPermission;
                    toJSON(message: _7.ModuleAccountPermission): unknown;
                    fromPartial(object: Partial<_7.ModuleAccountPermission>): _7.ModuleAccountPermission;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _276.MsgClientImpl;
            QueryClientImpl: typeof _254.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _10.QueryAccountsRequest): Promise<_10.QueryAccountsResponse>;
                account(request: _10.QueryAccountRequest): Promise<_10.QueryAccountResponse>;
                accountAddressByID(request: _10.QueryAccountAddressByIDRequest): Promise<_10.QueryAccountAddressByIDResponse>;
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                moduleAccounts(request?: _10.QueryModuleAccountsRequest): Promise<_10.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _10.QueryModuleAccountByNameRequest): Promise<_10.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _10.Bech32PrefixRequest): Promise<_10.Bech32PrefixResponse>;
                addressBytesToString(request: _10.AddressBytesToStringRequest): Promise<_10.AddressBytesToStringResponse>;
                addressStringToBytes(request: _10.AddressStringToBytesRequest): Promise<_10.AddressStringToBytesResponse>;
                accountInfo(request: _10.QueryAccountInfoRequest): Promise<_10.QueryAccountInfoResponse>;
            };
            MsgUpdateParams: {
                encode(message: _11.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgUpdateParams;
                fromJSON(object: any): _11.MsgUpdateParams;
                toJSON(message: _11.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_11.MsgUpdateParams>): _11.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _11.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgUpdateParamsResponse;
                fromJSON(_: any): _11.MsgUpdateParamsResponse;
                toJSON(_: _11.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_11.MsgUpdateParamsResponse>): _11.MsgUpdateParamsResponse;
            };
            QueryAccountsRequest: {
                encode(message: _10.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAccountsRequest;
                fromJSON(object: any): _10.QueryAccountsRequest;
                toJSON(message: _10.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_10.QueryAccountsRequest>): _10.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _10.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAccountsResponse;
                fromJSON(object: any): _10.QueryAccountsResponse;
                toJSON(message: _10.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_10.QueryAccountsResponse>): _10.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _10.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAccountRequest;
                fromJSON(object: any): _10.QueryAccountRequest;
                toJSON(message: _10.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_10.QueryAccountRequest>): _10.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _10.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAccountResponse;
                fromJSON(object: any): _10.QueryAccountResponse;
                toJSON(message: _10.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_10.QueryAccountResponse>): _10.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _10.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryParamsRequest;
                fromJSON(_: any): _10.QueryParamsRequest;
                toJSON(_: _10.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_10.QueryParamsRequest>): _10.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _10.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryParamsResponse;
                fromJSON(object: any): _10.QueryParamsResponse;
                toJSON(message: _10.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_10.QueryParamsResponse>): _10.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _10.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryModuleAccountsRequest;
                fromJSON(_: any): _10.QueryModuleAccountsRequest;
                toJSON(_: _10.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_10.QueryModuleAccountsRequest>): _10.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _10.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryModuleAccountsResponse;
                fromJSON(object: any): _10.QueryModuleAccountsResponse;
                toJSON(message: _10.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_10.QueryModuleAccountsResponse>): _10.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _10.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryModuleAccountByNameRequest;
                fromJSON(object: any): _10.QueryModuleAccountByNameRequest;
                toJSON(message: _10.QueryModuleAccountByNameRequest): unknown;
                fromPartial(object: Partial<_10.QueryModuleAccountByNameRequest>): _10.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _10.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryModuleAccountByNameResponse;
                fromJSON(object: any): _10.QueryModuleAccountByNameResponse;
                toJSON(message: _10.QueryModuleAccountByNameResponse): unknown;
                fromPartial(object: Partial<_10.QueryModuleAccountByNameResponse>): _10.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _10.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Bech32PrefixRequest;
                fromJSON(_: any): _10.Bech32PrefixRequest;
                toJSON(_: _10.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_10.Bech32PrefixRequest>): _10.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _10.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Bech32PrefixResponse;
                fromJSON(object: any): _10.Bech32PrefixResponse;
                toJSON(message: _10.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_10.Bech32PrefixResponse>): _10.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _10.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.AddressBytesToStringRequest;
                fromJSON(object: any): _10.AddressBytesToStringRequest;
                toJSON(message: _10.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_10.AddressBytesToStringRequest>): _10.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _10.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.AddressBytesToStringResponse;
                fromJSON(object: any): _10.AddressBytesToStringResponse;
                toJSON(message: _10.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_10.AddressBytesToStringResponse>): _10.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _10.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.AddressStringToBytesRequest;
                fromJSON(object: any): _10.AddressStringToBytesRequest;
                toJSON(message: _10.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_10.AddressStringToBytesRequest>): _10.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _10.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.AddressStringToBytesResponse;
                fromJSON(object: any): _10.AddressStringToBytesResponse;
                toJSON(message: _10.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_10.AddressStringToBytesResponse>): _10.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _10.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAccountAddressByIDRequest;
                fromJSON(object: any): _10.QueryAccountAddressByIDRequest;
                toJSON(message: _10.QueryAccountAddressByIDRequest): unknown;
                fromPartial(object: Partial<_10.QueryAccountAddressByIDRequest>): _10.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _10.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAccountAddressByIDResponse;
                fromJSON(object: any): _10.QueryAccountAddressByIDResponse;
                toJSON(message: _10.QueryAccountAddressByIDResponse): unknown;
                fromPartial(object: Partial<_10.QueryAccountAddressByIDResponse>): _10.QueryAccountAddressByIDResponse;
            };
            QueryAccountInfoRequest: {
                encode(message: _10.QueryAccountInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAccountInfoRequest;
                fromJSON(object: any): _10.QueryAccountInfoRequest;
                toJSON(message: _10.QueryAccountInfoRequest): unknown;
                fromPartial(object: Partial<_10.QueryAccountInfoRequest>): _10.QueryAccountInfoRequest;
            };
            QueryAccountInfoResponse: {
                encode(message: _10.QueryAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAccountInfoResponse;
                fromJSON(object: any): _10.QueryAccountInfoResponse;
                toJSON(message: _10.QueryAccountInfoResponse): unknown;
                fromPartial(object: Partial<_10.QueryAccountInfoResponse>): _10.QueryAccountInfoResponse;
            };
            GenesisState: {
                encode(message: _9.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.GenesisState;
                fromJSON(object: any): _9.GenesisState;
                toJSON(message: _9.GenesisState): unknown;
                fromPartial(object: Partial<_9.GenesisState>): _9.GenesisState;
            };
            BaseAccount: {
                encode(message: _8.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.BaseAccount;
                fromJSON(object: any): _8.BaseAccount;
                toJSON(message: _8.BaseAccount): unknown;
                fromPartial(object: Partial<_8.BaseAccount>): _8.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _8.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.ModuleAccount;
                fromJSON(object: any): _8.ModuleAccount;
                toJSON(message: _8.ModuleAccount): unknown;
                fromPartial(object: Partial<_8.ModuleAccount>): _8.ModuleAccount;
            };
            ModuleCredential: {
                encode(message: _8.ModuleCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.ModuleCredential;
                fromJSON(object: any): _8.ModuleCredential;
                toJSON(message: _8.ModuleCredential): unknown;
                fromPartial(object: Partial<_8.ModuleCredential>): _8.ModuleCredential;
            };
            Params: {
                encode(message: _8.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Params;
                fromJSON(object: any): _8.Params;
                toJSON(message: _8.Params): unknown;
                fromPartial(object: Partial<_8.Params>): _8.Params;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _12.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Module;
                    fromJSON(_: any): _12.Module;
                    toJSON(_: _12.Module): unknown;
                    fromPartial(_: Partial<_12.Module>): _12.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _277.MsgClientImpl;
            QueryClientImpl: typeof _255.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _16.QueryGrantsRequest): Promise<_16.QueryGrantsResponse>;
                granterGrants(request: _16.QueryGranterGrantsRequest): Promise<_16.QueryGranterGrantsResponse>;
                granteeGrants(request: _16.QueryGranteeGrantsRequest): Promise<_16.QueryGranteeGrantsResponse>;
            };
            MsgGrant: {
                encode(message: _17.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgGrant;
                fromJSON(object: any): _17.MsgGrant;
                toJSON(message: _17.MsgGrant): unknown;
                fromPartial(object: Partial<_17.MsgGrant>): _17.MsgGrant;
            };
            MsgGrantResponse: {
                encode(_: _17.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgGrantResponse;
                fromJSON(_: any): _17.MsgGrantResponse;
                toJSON(_: _17.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_17.MsgGrantResponse>): _17.MsgGrantResponse;
            };
            MsgExec: {
                encode(message: _17.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgExec;
                fromJSON(object: any): _17.MsgExec;
                toJSON(message: _17.MsgExec): unknown;
                fromPartial(object: Partial<_17.MsgExec>): _17.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _17.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgExecResponse;
                fromJSON(object: any): _17.MsgExecResponse;
                toJSON(message: _17.MsgExecResponse): unknown;
                fromPartial(object: Partial<_17.MsgExecResponse>): _17.MsgExecResponse;
            };
            MsgRevoke: {
                encode(message: _17.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgRevoke;
                fromJSON(object: any): _17.MsgRevoke;
                toJSON(message: _17.MsgRevoke): unknown;
                fromPartial(object: Partial<_17.MsgRevoke>): _17.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _17.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgRevokeResponse;
                fromJSON(_: any): _17.MsgRevokeResponse;
                toJSON(_: _17.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_17.MsgRevokeResponse>): _17.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _16.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryGrantsRequest;
                fromJSON(object: any): _16.QueryGrantsRequest;
                toJSON(message: _16.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_16.QueryGrantsRequest>): _16.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _16.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryGrantsResponse;
                fromJSON(object: any): _16.QueryGrantsResponse;
                toJSON(message: _16.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_16.QueryGrantsResponse>): _16.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _16.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryGranterGrantsRequest;
                fromJSON(object: any): _16.QueryGranterGrantsRequest;
                toJSON(message: _16.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_16.QueryGranterGrantsRequest>): _16.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _16.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryGranterGrantsResponse;
                fromJSON(object: any): _16.QueryGranterGrantsResponse;
                toJSON(message: _16.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_16.QueryGranterGrantsResponse>): _16.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _16.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryGranteeGrantsRequest;
                fromJSON(object: any): _16.QueryGranteeGrantsRequest;
                toJSON(message: _16.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_16.QueryGranteeGrantsRequest>): _16.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _16.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryGranteeGrantsResponse;
                fromJSON(object: any): _16.QueryGranteeGrantsResponse;
                toJSON(message: _16.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_16.QueryGranteeGrantsResponse>): _16.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GenesisState;
                fromJSON(object: any): _15.GenesisState;
                toJSON(message: _15.GenesisState): unknown;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
            };
            EventGrant: {
                encode(message: _14.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.EventGrant;
                fromJSON(object: any): _14.EventGrant;
                toJSON(message: _14.EventGrant): unknown;
                fromPartial(object: Partial<_14.EventGrant>): _14.EventGrant;
            };
            EventRevoke: {
                encode(message: _14.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.EventRevoke;
                fromJSON(object: any): _14.EventRevoke;
                toJSON(message: _14.EventRevoke): unknown;
                fromPartial(object: Partial<_14.EventRevoke>): _14.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _13.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.GenericAuthorization;
                fromJSON(object: any): _13.GenericAuthorization;
                toJSON(message: _13.GenericAuthorization): unknown;
                fromPartial(object: Partial<_13.GenericAuthorization>): _13.GenericAuthorization;
            };
            Grant: {
                encode(message: _13.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Grant;
                fromJSON(object: any): _13.Grant;
                toJSON(message: _13.Grant): unknown;
                fromPartial(object: Partial<_13.Grant>): _13.Grant;
            };
            GrantAuthorization: {
                encode(message: _13.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.GrantAuthorization;
                fromJSON(object: any): _13.GrantAuthorization;
                toJSON(message: _13.GrantAuthorization): unknown;
                fromPartial(object: Partial<_13.GrantAuthorization>): _13.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _13.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.GrantQueueItem;
                fromJSON(object: any): _13.GrantQueueItem;
                toJSON(message: _13.GrantQueueItem): unknown;
                fromPartial(object: Partial<_13.GrantQueueItem>): _13.GrantQueueItem;
            };
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _256.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _19.AppOptionsRequest): Promise<_19.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                encode(_: _19.AppOptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.AppOptionsRequest;
                fromJSON(_: any): _19.AppOptionsRequest;
                toJSON(_: _19.AppOptionsRequest): unknown;
                fromPartial(_: Partial<_19.AppOptionsRequest>): _19.AppOptionsRequest;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _19.AppOptionsResponse_ModuleOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.AppOptionsResponse_ModuleOptionsEntry;
                fromJSON(object: any): _19.AppOptionsResponse_ModuleOptionsEntry;
                toJSON(message: _19.AppOptionsResponse_ModuleOptionsEntry): unknown;
                fromPartial(object: Partial<_19.AppOptionsResponse_ModuleOptionsEntry>): _19.AppOptionsResponse_ModuleOptionsEntry;
            };
            AppOptionsResponse: {
                encode(message: _19.AppOptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.AppOptionsResponse;
                fromJSON(object: any): _19.AppOptionsResponse;
                toJSON(message: _19.AppOptionsResponse): unknown;
                fromPartial(object: Partial<_19.AppOptionsResponse>): _19.AppOptionsResponse;
            };
            ModuleOptions: {
                encode(message: _18.ModuleOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ModuleOptions;
                fromJSON(object: any): _18.ModuleOptions;
                toJSON(message: _18.ModuleOptions): unknown;
                fromPartial(object: Partial<_18.ModuleOptions>): _18.ModuleOptions;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _18.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ServiceCommandDescriptor_SubCommandsEntry;
                fromJSON(object: any): _18.ServiceCommandDescriptor_SubCommandsEntry;
                toJSON(message: _18.ServiceCommandDescriptor_SubCommandsEntry): unknown;
                fromPartial(object: Partial<_18.ServiceCommandDescriptor_SubCommandsEntry>): _18.ServiceCommandDescriptor_SubCommandsEntry;
            };
            ServiceCommandDescriptor: {
                encode(message: _18.ServiceCommandDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ServiceCommandDescriptor;
                fromJSON(object: any): _18.ServiceCommandDescriptor;
                toJSON(message: _18.ServiceCommandDescriptor): unknown;
                fromPartial(object: Partial<_18.ServiceCommandDescriptor>): _18.ServiceCommandDescriptor;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _18.RpcCommandOptions_FlagOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RpcCommandOptions_FlagOptionsEntry;
                fromJSON(object: any): _18.RpcCommandOptions_FlagOptionsEntry;
                toJSON(message: _18.RpcCommandOptions_FlagOptionsEntry): unknown;
                fromPartial(object: Partial<_18.RpcCommandOptions_FlagOptionsEntry>): _18.RpcCommandOptions_FlagOptionsEntry;
            };
            RpcCommandOptions: {
                encode(message: _18.RpcCommandOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RpcCommandOptions;
                fromJSON(object: any): _18.RpcCommandOptions;
                toJSON(message: _18.RpcCommandOptions): unknown;
                fromPartial(object: Partial<_18.RpcCommandOptions>): _18.RpcCommandOptions;
            };
            FlagOptions: {
                encode(message: _18.FlagOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.FlagOptions;
                fromJSON(object: any): _18.FlagOptions;
                toJSON(message: _18.FlagOptions): unknown;
                fromPartial(object: Partial<_18.FlagOptions>): _18.FlagOptions;
            };
            PositionalArgDescriptor: {
                encode(message: _18.PositionalArgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.PositionalArgDescriptor;
                fromJSON(object: any): _18.PositionalArgDescriptor;
                toJSON(message: _18.PositionalArgDescriptor): unknown;
                fromPartial(object: Partial<_18.PositionalArgDescriptor>): _18.PositionalArgDescriptor;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _20.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Module;
                    fromJSON(object: any): _20.Module;
                    toJSON(message: _20.Module): unknown;
                    fromPartial(object: Partial<_20.Module>): _20.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _278.MsgClientImpl;
            QueryClientImpl: typeof _257.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _24.QueryBalanceRequest): Promise<_24.QueryBalanceResponse>;
                allBalances(request: _24.QueryAllBalancesRequest): Promise<_24.QueryAllBalancesResponse>;
                spendableBalances(request: _24.QuerySpendableBalancesRequest): Promise<_24.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _24.QuerySpendableBalanceByDenomRequest): Promise<_24.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _24.QueryTotalSupplyRequest): Promise<_24.QueryTotalSupplyResponse>;
                supplyOf(request: _24.QuerySupplyOfRequest): Promise<_24.QuerySupplyOfResponse>;
                params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                denomMetadata(request: _24.QueryDenomMetadataRequest): Promise<_24.QueryDenomMetadataResponse>;
                denomMetadataByQueryString(request: _24.QueryDenomMetadataByQueryStringRequest): Promise<_24.QueryDenomMetadataByQueryStringResponse>;
                denomsMetadata(request?: _24.QueryDenomsMetadataRequest): Promise<_24.QueryDenomsMetadataResponse>;
                denomOwners(request: _24.QueryDenomOwnersRequest): Promise<_24.QueryDenomOwnersResponse>;
                denomOwnersByQuery(request: _24.QueryDenomOwnersByQueryRequest): Promise<_24.QueryDenomOwnersByQueryResponse>;
                sendEnabled(request: _24.QuerySendEnabledRequest): Promise<_24.QuerySendEnabledResponse>;
            };
            MsgSend: {
                encode(message: _25.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSend;
                fromJSON(object: any): _25.MsgSend;
                toJSON(message: _25.MsgSend): unknown;
                fromPartial(object: Partial<_25.MsgSend>): _25.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _25.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSendResponse;
                fromJSON(_: any): _25.MsgSendResponse;
                toJSON(_: _25.MsgSendResponse): unknown;
                fromPartial(_: Partial<_25.MsgSendResponse>): _25.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _25.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgMultiSend;
                fromJSON(object: any): _25.MsgMultiSend;
                toJSON(message: _25.MsgMultiSend): unknown;
                fromPartial(object: Partial<_25.MsgMultiSend>): _25.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _25.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgMultiSendResponse;
                fromJSON(_: any): _25.MsgMultiSendResponse;
                toJSON(_: _25.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_25.MsgMultiSendResponse>): _25.MsgMultiSendResponse;
            };
            MsgUpdateParams: {
                encode(message: _25.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgUpdateParams;
                fromJSON(object: any): _25.MsgUpdateParams;
                toJSON(message: _25.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_25.MsgUpdateParams>): _25.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _25.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgUpdateParamsResponse;
                fromJSON(_: any): _25.MsgUpdateParamsResponse;
                toJSON(_: _25.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_25.MsgUpdateParamsResponse>): _25.MsgUpdateParamsResponse;
            };
            MsgSetSendEnabled: {
                encode(message: _25.MsgSetSendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSetSendEnabled;
                fromJSON(object: any): _25.MsgSetSendEnabled;
                toJSON(message: _25.MsgSetSendEnabled): unknown;
                fromPartial(object: Partial<_25.MsgSetSendEnabled>): _25.MsgSetSendEnabled;
            };
            MsgSetSendEnabledResponse: {
                encode(_: _25.MsgSetSendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSetSendEnabledResponse;
                fromJSON(_: any): _25.MsgSetSendEnabledResponse;
                toJSON(_: _25.MsgSetSendEnabledResponse): unknown;
                fromPartial(_: Partial<_25.MsgSetSendEnabledResponse>): _25.MsgSetSendEnabledResponse;
            };
            QueryBalanceRequest: {
                encode(message: _24.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryBalanceRequest;
                fromJSON(object: any): _24.QueryBalanceRequest;
                toJSON(message: _24.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_24.QueryBalanceRequest>): _24.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _24.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryBalanceResponse;
                fromJSON(object: any): _24.QueryBalanceResponse;
                toJSON(message: _24.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_24.QueryBalanceResponse>): _24.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _24.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryAllBalancesRequest;
                fromJSON(object: any): _24.QueryAllBalancesRequest;
                toJSON(message: _24.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_24.QueryAllBalancesRequest>): _24.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _24.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryAllBalancesResponse;
                fromJSON(object: any): _24.QueryAllBalancesResponse;
                toJSON(message: _24.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_24.QueryAllBalancesResponse>): _24.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _24.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QuerySpendableBalancesRequest;
                fromJSON(object: any): _24.QuerySpendableBalancesRequest;
                toJSON(message: _24.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_24.QuerySpendableBalancesRequest>): _24.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _24.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QuerySpendableBalancesResponse;
                fromJSON(object: any): _24.QuerySpendableBalancesResponse;
                toJSON(message: _24.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_24.QuerySpendableBalancesResponse>): _24.QuerySpendableBalancesResponse;
            };
            QuerySpendableBalanceByDenomRequest: {
                encode(message: _24.QuerySpendableBalanceByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QuerySpendableBalanceByDenomRequest;
                fromJSON(object: any): _24.QuerySpendableBalanceByDenomRequest;
                toJSON(message: _24.QuerySpendableBalanceByDenomRequest): unknown;
                fromPartial(object: Partial<_24.QuerySpendableBalanceByDenomRequest>): _24.QuerySpendableBalanceByDenomRequest;
            };
            QuerySpendableBalanceByDenomResponse: {
                encode(message: _24.QuerySpendableBalanceByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QuerySpendableBalanceByDenomResponse;
                fromJSON(object: any): _24.QuerySpendableBalanceByDenomResponse;
                toJSON(message: _24.QuerySpendableBalanceByDenomResponse): unknown;
                fromPartial(object: Partial<_24.QuerySpendableBalanceByDenomResponse>): _24.QuerySpendableBalanceByDenomResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _24.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryTotalSupplyRequest;
                fromJSON(object: any): _24.QueryTotalSupplyRequest;
                toJSON(message: _24.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_24.QueryTotalSupplyRequest>): _24.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _24.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryTotalSupplyResponse;
                fromJSON(object: any): _24.QueryTotalSupplyResponse;
                toJSON(message: _24.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_24.QueryTotalSupplyResponse>): _24.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _24.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QuerySupplyOfRequest;
                fromJSON(object: any): _24.QuerySupplyOfRequest;
                toJSON(message: _24.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_24.QuerySupplyOfRequest>): _24.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _24.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QuerySupplyOfResponse;
                fromJSON(object: any): _24.QuerySupplyOfResponse;
                toJSON(message: _24.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_24.QuerySupplyOfResponse>): _24.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _24.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsRequest;
                fromJSON(_: any): _24.QueryParamsRequest;
                toJSON(_: _24.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_24.QueryParamsRequest>): _24.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _24.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsResponse;
                fromJSON(object: any): _24.QueryParamsResponse;
                toJSON(message: _24.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_24.QueryParamsResponse>): _24.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _24.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomsMetadataRequest;
                fromJSON(object: any): _24.QueryDenomsMetadataRequest;
                toJSON(message: _24.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_24.QueryDenomsMetadataRequest>): _24.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _24.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomsMetadataResponse;
                fromJSON(object: any): _24.QueryDenomsMetadataResponse;
                toJSON(message: _24.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_24.QueryDenomsMetadataResponse>): _24.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _24.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomMetadataRequest;
                fromJSON(object: any): _24.QueryDenomMetadataRequest;
                toJSON(message: _24.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_24.QueryDenomMetadataRequest>): _24.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _24.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomMetadataResponse;
                fromJSON(object: any): _24.QueryDenomMetadataResponse;
                toJSON(message: _24.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_24.QueryDenomMetadataResponse>): _24.QueryDenomMetadataResponse;
            };
            QueryDenomMetadataByQueryStringRequest: {
                encode(message: _24.QueryDenomMetadataByQueryStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomMetadataByQueryStringRequest;
                fromJSON(object: any): _24.QueryDenomMetadataByQueryStringRequest;
                toJSON(message: _24.QueryDenomMetadataByQueryStringRequest): unknown;
                fromPartial(object: Partial<_24.QueryDenomMetadataByQueryStringRequest>): _24.QueryDenomMetadataByQueryStringRequest;
            };
            QueryDenomMetadataByQueryStringResponse: {
                encode(message: _24.QueryDenomMetadataByQueryStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomMetadataByQueryStringResponse;
                fromJSON(object: any): _24.QueryDenomMetadataByQueryStringResponse;
                toJSON(message: _24.QueryDenomMetadataByQueryStringResponse): unknown;
                fromPartial(object: Partial<_24.QueryDenomMetadataByQueryStringResponse>): _24.QueryDenomMetadataByQueryStringResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _24.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomOwnersRequest;
                fromJSON(object: any): _24.QueryDenomOwnersRequest;
                toJSON(message: _24.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_24.QueryDenomOwnersRequest>): _24.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _24.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.DenomOwner;
                fromJSON(object: any): _24.DenomOwner;
                toJSON(message: _24.DenomOwner): unknown;
                fromPartial(object: Partial<_24.DenomOwner>): _24.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _24.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomOwnersResponse;
                fromJSON(object: any): _24.QueryDenomOwnersResponse;
                toJSON(message: _24.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_24.QueryDenomOwnersResponse>): _24.QueryDenomOwnersResponse;
            };
            QueryDenomOwnersByQueryRequest: {
                encode(message: _24.QueryDenomOwnersByQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomOwnersByQueryRequest;
                fromJSON(object: any): _24.QueryDenomOwnersByQueryRequest;
                toJSON(message: _24.QueryDenomOwnersByQueryRequest): unknown;
                fromPartial(object: Partial<_24.QueryDenomOwnersByQueryRequest>): _24.QueryDenomOwnersByQueryRequest;
            };
            QueryDenomOwnersByQueryResponse: {
                encode(message: _24.QueryDenomOwnersByQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomOwnersByQueryResponse;
                fromJSON(object: any): _24.QueryDenomOwnersByQueryResponse;
                toJSON(message: _24.QueryDenomOwnersByQueryResponse): unknown;
                fromPartial(object: Partial<_24.QueryDenomOwnersByQueryResponse>): _24.QueryDenomOwnersByQueryResponse;
            };
            QuerySendEnabledRequest: {
                encode(message: _24.QuerySendEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QuerySendEnabledRequest;
                fromJSON(object: any): _24.QuerySendEnabledRequest;
                toJSON(message: _24.QuerySendEnabledRequest): unknown;
                fromPartial(object: Partial<_24.QuerySendEnabledRequest>): _24.QuerySendEnabledRequest;
            };
            QuerySendEnabledResponse: {
                encode(message: _24.QuerySendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QuerySendEnabledResponse;
                fromJSON(object: any): _24.QuerySendEnabledResponse;
                toJSON(message: _24.QuerySendEnabledResponse): unknown;
                fromPartial(object: Partial<_24.QuerySendEnabledResponse>): _24.QuerySendEnabledResponse;
            };
            GenesisState: {
                encode(message: _23.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GenesisState;
                fromJSON(object: any): _23.GenesisState;
                toJSON(message: _23.GenesisState): unknown;
                fromPartial(object: Partial<_23.GenesisState>): _23.GenesisState;
            };
            Balance: {
                encode(message: _23.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Balance;
                fromJSON(object: any): _23.Balance;
                toJSON(message: _23.Balance): unknown;
                fromPartial(object: Partial<_23.Balance>): _23.Balance;
            };
            Params: {
                encode(message: _22.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Params;
                fromJSON(object: any): _22.Params;
                toJSON(message: _22.Params): unknown;
                fromPartial(object: Partial<_22.Params>): _22.Params;
            };
            SendEnabled: {
                encode(message: _22.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SendEnabled;
                fromJSON(object: any): _22.SendEnabled;
                toJSON(message: _22.SendEnabled): unknown;
                fromPartial(object: Partial<_22.SendEnabled>): _22.SendEnabled;
            };
            Input: {
                encode(message: _22.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Input;
                fromJSON(object: any): _22.Input;
                toJSON(message: _22.Input): unknown;
                fromPartial(object: Partial<_22.Input>): _22.Input;
            };
            Output: {
                encode(message: _22.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Output;
                fromJSON(object: any): _22.Output;
                toJSON(message: _22.Output): unknown;
                fromPartial(object: Partial<_22.Output>): _22.Output;
            };
            Supply: {
                encode(message: _22.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Supply;
                fromJSON(object: any): _22.Supply;
                toJSON(message: _22.Supply): unknown;
                fromPartial(object: Partial<_22.Supply>): _22.Supply;
            };
            DenomUnit: {
                encode(message: _22.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DenomUnit;
                fromJSON(object: any): _22.DenomUnit;
                toJSON(message: _22.DenomUnit): unknown;
                fromPartial(object: Partial<_22.DenomUnit>): _22.DenomUnit;
            };
            Metadata: {
                encode(message: _22.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Metadata;
                fromJSON(object: any): _22.Metadata;
                toJSON(message: _22.Metadata): unknown;
                fromPartial(object: Partial<_22.Metadata>): _22.Metadata;
            };
            SendAuthorization: {
                encode(message: _21.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.SendAuthorization;
                fromJSON(object: any): _21.SendAuthorization;
                toJSON(message: _21.SendAuthorization): unknown;
                fromPartial(object: Partial<_21.SendAuthorization>): _21.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _26.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.TxResponse;
                    fromJSON(object: any): _26.TxResponse;
                    toJSON(message: _26.TxResponse): unknown;
                    fromPartial(object: Partial<_26.TxResponse>): _26.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _26.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ABCIMessageLog;
                    fromJSON(object: any): _26.ABCIMessageLog;
                    toJSON(message: _26.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_26.ABCIMessageLog>): _26.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _26.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.StringEvent;
                    fromJSON(object: any): _26.StringEvent;
                    toJSON(message: _26.StringEvent): unknown;
                    fromPartial(object: Partial<_26.StringEvent>): _26.StringEvent;
                };
                Attribute: {
                    encode(message: _26.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Attribute;
                    fromJSON(object: any): _26.Attribute;
                    toJSON(message: _26.Attribute): unknown;
                    fromPartial(object: Partial<_26.Attribute>): _26.Attribute;
                };
                GasInfo: {
                    encode(message: _26.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GasInfo;
                    fromJSON(object: any): _26.GasInfo;
                    toJSON(message: _26.GasInfo): unknown;
                    fromPartial(object: Partial<_26.GasInfo>): _26.GasInfo;
                };
                Result: {
                    encode(message: _26.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Result;
                    fromJSON(object: any): _26.Result;
                    toJSON(message: _26.Result): unknown;
                    fromPartial(object: Partial<_26.Result>): _26.Result;
                };
                SimulationResponse: {
                    encode(message: _26.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.SimulationResponse;
                    fromJSON(object: any): _26.SimulationResponse;
                    toJSON(message: _26.SimulationResponse): unknown;
                    fromPartial(object: Partial<_26.SimulationResponse>): _26.SimulationResponse;
                };
                MsgData: {
                    encode(message: _26.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgData;
                    fromJSON(object: any): _26.MsgData;
                    toJSON(message: _26.MsgData): unknown;
                    fromPartial(object: Partial<_26.MsgData>): _26.MsgData;
                };
                TxMsgData: {
                    encode(message: _26.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.TxMsgData;
                    fromJSON(object: any): _26.TxMsgData;
                    toJSON(message: _26.TxMsgData): unknown;
                    fromPartial(object: Partial<_26.TxMsgData>): _26.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _26.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.SearchTxsResult;
                    fromJSON(object: any): _26.SearchTxsResult;
                    toJSON(message: _26.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_26.SearchTxsResult>): _26.SearchTxsResult;
                };
                SearchBlocksResult: {
                    encode(message: _26.SearchBlocksResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.SearchBlocksResult;
                    fromJSON(object: any): _26.SearchBlocksResult;
                    toJSON(message: _26.SearchBlocksResult): unknown;
                    fromPartial(object: Partial<_26.SearchBlocksResult>): _26.SearchBlocksResult;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _258.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _27.ConfigRequest): Promise<_27.ConfigResponse>;
                    status(request?: _27.StatusRequest): Promise<_27.StatusResponse>;
                };
                ConfigRequest: {
                    encode(_: _27.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ConfigRequest;
                    fromJSON(_: any): _27.ConfigRequest;
                    toJSON(_: _27.ConfigRequest): unknown;
                    fromPartial(_: Partial<_27.ConfigRequest>): _27.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _27.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ConfigResponse;
                    fromJSON(object: any): _27.ConfigResponse;
                    toJSON(message: _27.ConfigResponse): unknown;
                    fromPartial(object: Partial<_27.ConfigResponse>): _27.ConfigResponse;
                };
                StatusRequest: {
                    encode(_: _27.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.StatusRequest;
                    fromJSON(_: any): _27.StatusRequest;
                    toJSON(_: _27.StatusRequest): unknown;
                    fromPartial(_: Partial<_27.StatusRequest>): _27.StatusRequest;
                };
                StatusResponse: {
                    encode(message: _27.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.StatusResponse;
                    fromJSON(object: any): _27.StatusResponse;
                    toJSON(message: _27.StatusResponse): unknown;
                    fromPartial(object: Partial<_27.StatusResponse>): _27.StatusResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _28.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.PageRequest;
                    fromJSON(object: any): _28.PageRequest;
                    toJSON(message: _28.PageRequest): unknown;
                    fromPartial(object: Partial<_28.PageRequest>): _28.PageRequest;
                };
                PageResponse: {
                    encode(message: _28.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.PageResponse;
                    fromJSON(object: any): _28.PageResponse;
                    toJSON(message: _28.PageResponse): unknown;
                    fromPartial(object: Partial<_28.PageResponse>): _28.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _29.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ListAllInterfacesRequest;
                    fromJSON(_: any): _29.ListAllInterfacesRequest;
                    toJSON(_: _29.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_29.ListAllInterfacesRequest>): _29.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _29.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ListAllInterfacesResponse;
                    fromJSON(object: any): _29.ListAllInterfacesResponse;
                    toJSON(message: _29.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_29.ListAllInterfacesResponse>): _29.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _29.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ListImplementationsRequest;
                    fromJSON(object: any): _29.ListImplementationsRequest;
                    toJSON(message: _29.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_29.ListImplementationsRequest>): _29.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _29.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ListImplementationsResponse;
                    fromJSON(object: any): _29.ListImplementationsResponse;
                    toJSON(message: _29.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_29.ListImplementationsResponse>): _29.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _30.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.AppDescriptor;
                    fromJSON(object: any): _30.AppDescriptor;
                    toJSON(message: _30.AppDescriptor): unknown;
                    fromPartial(object: Partial<_30.AppDescriptor>): _30.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _30.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.TxDescriptor;
                    fromJSON(object: any): _30.TxDescriptor;
                    toJSON(message: _30.TxDescriptor): unknown;
                    fromPartial(object: Partial<_30.TxDescriptor>): _30.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _30.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.AuthnDescriptor;
                    fromJSON(object: any): _30.AuthnDescriptor;
                    toJSON(message: _30.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_30.AuthnDescriptor>): _30.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _30.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.SigningModeDescriptor;
                    fromJSON(object: any): _30.SigningModeDescriptor;
                    toJSON(message: _30.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_30.SigningModeDescriptor>): _30.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _30.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.ChainDescriptor;
                    fromJSON(object: any): _30.ChainDescriptor;
                    toJSON(message: _30.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_30.ChainDescriptor>): _30.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _30.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.CodecDescriptor;
                    fromJSON(object: any): _30.CodecDescriptor;
                    toJSON(message: _30.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_30.CodecDescriptor>): _30.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _30.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.InterfaceDescriptor;
                    fromJSON(object: any): _30.InterfaceDescriptor;
                    toJSON(message: _30.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_30.InterfaceDescriptor>): _30.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _30.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _30.InterfaceImplementerDescriptor;
                    toJSON(message: _30.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_30.InterfaceImplementerDescriptor>): _30.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _30.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _30.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _30.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_30.InterfaceAcceptingMessageDescriptor>): _30.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _30.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.ConfigurationDescriptor;
                    fromJSON(object: any): _30.ConfigurationDescriptor;
                    toJSON(message: _30.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_30.ConfigurationDescriptor>): _30.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _30.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgDescriptor;
                    fromJSON(object: any): _30.MsgDescriptor;
                    toJSON(message: _30.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_30.MsgDescriptor>): _30.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _30.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _30.GetAuthnDescriptorRequest;
                    toJSON(_: _30.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_30.GetAuthnDescriptorRequest>): _30.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _30.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _30.GetAuthnDescriptorResponse;
                    toJSON(message: _30.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_30.GetAuthnDescriptorResponse>): _30.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _30.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetChainDescriptorRequest;
                    fromJSON(_: any): _30.GetChainDescriptorRequest;
                    toJSON(_: _30.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_30.GetChainDescriptorRequest>): _30.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _30.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetChainDescriptorResponse;
                    fromJSON(object: any): _30.GetChainDescriptorResponse;
                    toJSON(message: _30.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_30.GetChainDescriptorResponse>): _30.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _30.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetCodecDescriptorRequest;
                    fromJSON(_: any): _30.GetCodecDescriptorRequest;
                    toJSON(_: _30.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_30.GetCodecDescriptorRequest>): _30.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _30.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetCodecDescriptorResponse;
                    fromJSON(object: any): _30.GetCodecDescriptorResponse;
                    toJSON(message: _30.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_30.GetCodecDescriptorResponse>): _30.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _30.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _30.GetConfigurationDescriptorRequest;
                    toJSON(_: _30.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_30.GetConfigurationDescriptorRequest>): _30.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _30.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _30.GetConfigurationDescriptorResponse;
                    toJSON(message: _30.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_30.GetConfigurationDescriptorResponse>): _30.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _30.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _30.GetQueryServicesDescriptorRequest;
                    toJSON(_: _30.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_30.GetQueryServicesDescriptorRequest>): _30.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _30.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _30.GetQueryServicesDescriptorResponse;
                    toJSON(message: _30.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_30.GetQueryServicesDescriptorResponse>): _30.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _30.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetTxDescriptorRequest;
                    fromJSON(_: any): _30.GetTxDescriptorRequest;
                    toJSON(_: _30.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_30.GetTxDescriptorRequest>): _30.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _30.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetTxDescriptorResponse;
                    fromJSON(object: any): _30.GetTxDescriptorResponse;
                    toJSON(message: _30.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_30.GetTxDescriptorResponse>): _30.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _30.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryServicesDescriptor;
                    fromJSON(object: any): _30.QueryServicesDescriptor;
                    toJSON(message: _30.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_30.QueryServicesDescriptor>): _30.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _30.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryServiceDescriptor;
                    fromJSON(object: any): _30.QueryServiceDescriptor;
                    toJSON(message: _30.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_30.QueryServiceDescriptor>): _30.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _30.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryMethodDescriptor;
                    fromJSON(object: any): _30.QueryMethodDescriptor;
                    toJSON(message: _30.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_30.QueryMethodDescriptor>): _30.QueryMethodDescriptor;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _259.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _31.GetNodeInfoRequest): Promise<_31.GetNodeInfoResponse>;
                    getSyncing(request?: _31.GetSyncingRequest): Promise<_31.GetSyncingResponse>;
                    getLatestBlock(request?: _31.GetLatestBlockRequest): Promise<_31.GetLatestBlockResponse>;
                    getBlockByHeight(request: _31.GetBlockByHeightRequest): Promise<_31.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _31.GetLatestValidatorSetRequest): Promise<_31.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _31.GetValidatorSetByHeightRequest): Promise<_31.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _31.ABCIQueryRequest): Promise<_31.ABCIQueryResponse>;
                };
                Block: {
                    encode(message: _32.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Block;
                    fromJSON(object: any): _32.Block;
                    toJSON(message: _32.Block): unknown;
                    fromPartial(object: Partial<_32.Block>): _32.Block;
                };
                Header: {
                    encode(message: _32.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Header;
                    fromJSON(object: any): _32.Header;
                    toJSON(message: _32.Header): unknown;
                    fromPartial(object: Partial<_32.Header>): _32.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _31.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _31.GetValidatorSetByHeightRequest;
                    toJSON(message: _31.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_31.GetValidatorSetByHeightRequest>): _31.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _31.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _31.GetValidatorSetByHeightResponse;
                    toJSON(message: _31.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_31.GetValidatorSetByHeightResponse>): _31.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _31.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _31.GetLatestValidatorSetRequest;
                    toJSON(message: _31.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_31.GetLatestValidatorSetRequest>): _31.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _31.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _31.GetLatestValidatorSetResponse;
                    toJSON(message: _31.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_31.GetLatestValidatorSetResponse>): _31.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _31.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Validator;
                    fromJSON(object: any): _31.Validator;
                    toJSON(message: _31.Validator): unknown;
                    fromPartial(object: Partial<_31.Validator>): _31.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _31.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GetBlockByHeightRequest;
                    fromJSON(object: any): _31.GetBlockByHeightRequest;
                    toJSON(message: _31.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_31.GetBlockByHeightRequest>): _31.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _31.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GetBlockByHeightResponse;
                    fromJSON(object: any): _31.GetBlockByHeightResponse;
                    toJSON(message: _31.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_31.GetBlockByHeightResponse>): _31.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _31.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GetLatestBlockRequest;
                    fromJSON(_: any): _31.GetLatestBlockRequest;
                    toJSON(_: _31.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_31.GetLatestBlockRequest>): _31.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _31.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GetLatestBlockResponse;
                    fromJSON(object: any): _31.GetLatestBlockResponse;
                    toJSON(message: _31.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_31.GetLatestBlockResponse>): _31.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _31.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GetSyncingRequest;
                    fromJSON(_: any): _31.GetSyncingRequest;
                    toJSON(_: _31.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_31.GetSyncingRequest>): _31.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _31.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GetSyncingResponse;
                    fromJSON(object: any): _31.GetSyncingResponse;
                    toJSON(message: _31.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_31.GetSyncingResponse>): _31.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _31.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GetNodeInfoRequest;
                    fromJSON(_: any): _31.GetNodeInfoRequest;
                    toJSON(_: _31.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_31.GetNodeInfoRequest>): _31.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _31.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GetNodeInfoResponse;
                    fromJSON(object: any): _31.GetNodeInfoResponse;
                    toJSON(message: _31.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_31.GetNodeInfoResponse>): _31.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _31.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.VersionInfo;
                    fromJSON(object: any): _31.VersionInfo;
                    toJSON(message: _31.VersionInfo): unknown;
                    fromPartial(object: Partial<_31.VersionInfo>): _31.VersionInfo;
                };
                Module: {
                    encode(message: _31.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Module;
                    fromJSON(object: any): _31.Module;
                    toJSON(message: _31.Module): unknown;
                    fromPartial(object: Partial<_31.Module>): _31.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _31.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ABCIQueryRequest;
                    fromJSON(object: any): _31.ABCIQueryRequest;
                    toJSON(message: _31.ABCIQueryRequest): unknown;
                    fromPartial(object: Partial<_31.ABCIQueryRequest>): _31.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _31.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ABCIQueryResponse;
                    fromJSON(object: any): _31.ABCIQueryResponse;
                    toJSON(message: _31.ABCIQueryResponse): unknown;
                    fromPartial(object: Partial<_31.ABCIQueryResponse>): _31.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _31.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ProofOp;
                    fromJSON(object: any): _31.ProofOp;
                    toJSON(message: _31.ProofOp): unknown;
                    fromPartial(object: Partial<_31.ProofOp>): _31.ProofOp;
                };
                ProofOps: {
                    encode(message: _31.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ProofOps;
                    fromJSON(object: any): _31.ProofOps;
                    toJSON(message: _31.ProofOps): unknown;
                    fromPartial(object: Partial<_31.ProofOps>): _31.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _33.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Coin;
                fromJSON(object: any): _33.Coin;
                toJSON(message: _33.Coin): unknown;
                fromPartial(object: Partial<_33.Coin>): _33.Coin;
            };
            DecCoin: {
                encode(message: _33.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DecCoin;
                fromJSON(object: any): _33.DecCoin;
                toJSON(message: _33.DecCoin): unknown;
                fromPartial(object: Partial<_33.DecCoin>): _33.DecCoin;
            };
            IntProto: {
                encode(message: _33.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.IntProto;
                fromJSON(object: any): _33.IntProto;
                toJSON(message: _33.IntProto): unknown;
                fromPartial(object: Partial<_33.IntProto>): _33.IntProto;
            };
            DecProto: {
                encode(message: _33.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DecProto;
                fromJSON(object: any): _33.DecProto;
                toJSON(message: _33.DecProto): unknown;
                fromPartial(object: Partial<_33.DecProto>): _33.DecProto;
            };
        };
    }
    namespace circuit {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _34.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Module;
                    fromJSON(object: any): _34.Module;
                    toJSON(message: _34.Module): unknown;
                    fromPartial(object: Partial<_34.Module>): _34.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _279.MsgClientImpl;
            QueryClientImpl: typeof _260.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                account(request: _35.QueryAccountRequest): Promise<_35.AccountResponse>;
                accounts(request?: _35.QueryAccountsRequest): Promise<_35.AccountsResponse>;
                disabledList(request?: _35.QueryDisabledListRequest): Promise<_35.DisabledListResponse>;
            };
            permissions_LevelFromJSON(object: any): _37.Permissions_Level;
            permissions_LevelToJSON(object: _37.Permissions_Level): string;
            Permissions_Level: typeof _37.Permissions_Level;
            Permissions_LevelSDKType: typeof _37.Permissions_Level;
            Permissions: {
                encode(message: _37.Permissions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Permissions;
                fromJSON(object: any): _37.Permissions;
                toJSON(message: _37.Permissions): unknown;
                fromPartial(object: Partial<_37.Permissions>): _37.Permissions;
            };
            GenesisAccountPermissions: {
                encode(message: _37.GenesisAccountPermissions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GenesisAccountPermissions;
                fromJSON(object: any): _37.GenesisAccountPermissions;
                toJSON(message: _37.GenesisAccountPermissions): unknown;
                fromPartial(object: Partial<_37.GenesisAccountPermissions>): _37.GenesisAccountPermissions;
            };
            GenesisState: {
                encode(message: _37.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GenesisState;
                fromJSON(object: any): _37.GenesisState;
                toJSON(message: _37.GenesisState): unknown;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
            };
            MsgAuthorizeCircuitBreaker: {
                encode(message: _36.MsgAuthorizeCircuitBreaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgAuthorizeCircuitBreaker;
                fromJSON(object: any): _36.MsgAuthorizeCircuitBreaker;
                toJSON(message: _36.MsgAuthorizeCircuitBreaker): unknown;
                fromPartial(object: Partial<_36.MsgAuthorizeCircuitBreaker>): _36.MsgAuthorizeCircuitBreaker;
            };
            MsgAuthorizeCircuitBreakerResponse: {
                encode(message: _36.MsgAuthorizeCircuitBreakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgAuthorizeCircuitBreakerResponse;
                fromJSON(object: any): _36.MsgAuthorizeCircuitBreakerResponse;
                toJSON(message: _36.MsgAuthorizeCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_36.MsgAuthorizeCircuitBreakerResponse>): _36.MsgAuthorizeCircuitBreakerResponse;
            };
            MsgTripCircuitBreaker: {
                encode(message: _36.MsgTripCircuitBreaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgTripCircuitBreaker;
                fromJSON(object: any): _36.MsgTripCircuitBreaker;
                toJSON(message: _36.MsgTripCircuitBreaker): unknown;
                fromPartial(object: Partial<_36.MsgTripCircuitBreaker>): _36.MsgTripCircuitBreaker;
            };
            MsgTripCircuitBreakerResponse: {
                encode(message: _36.MsgTripCircuitBreakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgTripCircuitBreakerResponse;
                fromJSON(object: any): _36.MsgTripCircuitBreakerResponse;
                toJSON(message: _36.MsgTripCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_36.MsgTripCircuitBreakerResponse>): _36.MsgTripCircuitBreakerResponse;
            };
            MsgResetCircuitBreaker: {
                encode(message: _36.MsgResetCircuitBreaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgResetCircuitBreaker;
                fromJSON(object: any): _36.MsgResetCircuitBreaker;
                toJSON(message: _36.MsgResetCircuitBreaker): unknown;
                fromPartial(object: Partial<_36.MsgResetCircuitBreaker>): _36.MsgResetCircuitBreaker;
            };
            MsgResetCircuitBreakerResponse: {
                encode(message: _36.MsgResetCircuitBreakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgResetCircuitBreakerResponse;
                fromJSON(object: any): _36.MsgResetCircuitBreakerResponse;
                toJSON(message: _36.MsgResetCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_36.MsgResetCircuitBreakerResponse>): _36.MsgResetCircuitBreakerResponse;
            };
            QueryAccountRequest: {
                encode(message: _35.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryAccountRequest;
                fromJSON(object: any): _35.QueryAccountRequest;
                toJSON(message: _35.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_35.QueryAccountRequest>): _35.QueryAccountRequest;
            };
            AccountResponse: {
                encode(message: _35.AccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.AccountResponse;
                fromJSON(object: any): _35.AccountResponse;
                toJSON(message: _35.AccountResponse): unknown;
                fromPartial(object: Partial<_35.AccountResponse>): _35.AccountResponse;
            };
            QueryAccountsRequest: {
                encode(message: _35.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryAccountsRequest;
                fromJSON(object: any): _35.QueryAccountsRequest;
                toJSON(message: _35.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_35.QueryAccountsRequest>): _35.QueryAccountsRequest;
            };
            AccountsResponse: {
                encode(message: _35.AccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.AccountsResponse;
                fromJSON(object: any): _35.AccountsResponse;
                toJSON(message: _35.AccountsResponse): unknown;
                fromPartial(object: Partial<_35.AccountsResponse>): _35.AccountsResponse;
            };
            QueryDisabledListRequest: {
                encode(_: _35.QueryDisabledListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDisabledListRequest;
                fromJSON(_: any): _35.QueryDisabledListRequest;
                toJSON(_: _35.QueryDisabledListRequest): unknown;
                fromPartial(_: Partial<_35.QueryDisabledListRequest>): _35.QueryDisabledListRequest;
            };
            DisabledListResponse: {
                encode(message: _35.DisabledListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.DisabledListResponse;
                fromJSON(object: any): _35.DisabledListResponse;
                toJSON(message: _35.DisabledListResponse): unknown;
                fromPartial(object: Partial<_35.DisabledListResponse>): _35.DisabledListResponse;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _38.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Module;
                    fromJSON(object: any): _38.Module;
                    toJSON(message: _38.Module): unknown;
                    fromPartial(object: Partial<_38.Module>): _38.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _280.MsgClientImpl;
            QueryClientImpl: typeof _261.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
            };
            MsgUpdateParams: {
                encode(message: _40.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgUpdateParams;
                fromJSON(object: any): _40.MsgUpdateParams;
                toJSON(message: _40.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_40.MsgUpdateParams>): _40.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _40.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgUpdateParamsResponse;
                fromJSON(_: any): _40.MsgUpdateParamsResponse;
                toJSON(_: _40.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_40.MsgUpdateParamsResponse>): _40.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _39.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryParamsRequest;
                fromJSON(_: any): _39.QueryParamsRequest;
                toJSON(_: _39.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_39.QueryParamsRequest>): _39.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _39.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryParamsResponse;
                fromJSON(object: any): _39.QueryParamsResponse;
                toJSON(message: _39.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_39.QueryParamsResponse>): _39.QueryParamsResponse;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _41.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Module;
                    fromJSON(object: any): _41.Module;
                    toJSON(message: _41.Module): unknown;
                    fromPartial(object: Partial<_41.Module>): _41.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _281.MsgClientImpl;
            MsgVerifyInvariant: {
                encode(message: _43.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgVerifyInvariant;
                fromJSON(object: any): _43.MsgVerifyInvariant;
                toJSON(message: _43.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_43.MsgVerifyInvariant>): _43.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _43.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgVerifyInvariantResponse;
                fromJSON(_: any): _43.MsgVerifyInvariantResponse;
                toJSON(_: _43.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_43.MsgVerifyInvariantResponse>): _43.MsgVerifyInvariantResponse;
            };
            MsgUpdateParams: {
                encode(message: _43.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgUpdateParams;
                fromJSON(object: any): _43.MsgUpdateParams;
                toJSON(message: _43.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_43.MsgUpdateParams>): _43.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _43.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgUpdateParamsResponse;
                fromJSON(_: any): _43.MsgUpdateParamsResponse;
                toJSON(_: _43.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_43.MsgUpdateParamsResponse>): _43.MsgUpdateParamsResponse;
            };
            GenesisState: {
                encode(message: _42.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GenesisState;
                fromJSON(object: any): _42.GenesisState;
                toJSON(message: _42.GenesisState): unknown;
                fromPartial(object: Partial<_42.GenesisState>): _42.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _44.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.PubKey;
                fromJSON(object: any): _44.PubKey;
                toJSON(message: _44.PubKey): unknown;
                fromPartial(object: Partial<_44.PubKey>): _44.PubKey;
            };
            PrivKey: {
                encode(message: _44.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.PrivKey;
                fromJSON(object: any): _44.PrivKey;
                toJSON(message: _44.PrivKey): unknown;
                fromPartial(object: Partial<_44.PrivKey>): _44.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _45.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.BIP44Params;
                    fromJSON(object: any): _45.BIP44Params;
                    toJSON(message: _45.BIP44Params): unknown;
                    fromPartial(object: Partial<_45.BIP44Params>): _45.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _46.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Record;
                    fromJSON(object: any): _46.Record;
                    toJSON(message: _46.Record): unknown;
                    fromPartial(object: Partial<_46.Record>): _46.Record;
                };
                Record_Local: {
                    encode(message: _46.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Record_Local;
                    fromJSON(object: any): _46.Record_Local;
                    toJSON(message: _46.Record_Local): unknown;
                    fromPartial(object: Partial<_46.Record_Local>): _46.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _46.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Record_Ledger;
                    fromJSON(object: any): _46.Record_Ledger;
                    toJSON(message: _46.Record_Ledger): unknown;
                    fromPartial(object: Partial<_46.Record_Ledger>): _46.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _46.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Record_Multi;
                    fromJSON(_: any): _46.Record_Multi;
                    toJSON(_: _46.Record_Multi): unknown;
                    fromPartial(_: Partial<_46.Record_Multi>): _46.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _46.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Record_Offline;
                    fromJSON(_: any): _46.Record_Offline;
                    toJSON(_: _46.Record_Offline): unknown;
                    fromPartial(_: Partial<_46.Record_Offline>): _46.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _47.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.LegacyAminoPubKey;
                fromJSON(object: any): _47.LegacyAminoPubKey;
                toJSON(message: _47.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_47.LegacyAminoPubKey>): _47.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _48.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.PubKey;
                fromJSON(object: any): _48.PubKey;
                toJSON(message: _48.PubKey): unknown;
                fromPartial(object: Partial<_48.PubKey>): _48.PubKey;
            };
            PrivKey: {
                encode(message: _48.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.PrivKey;
                fromJSON(object: any): _48.PrivKey;
                toJSON(message: _48.PrivKey): unknown;
                fromPartial(object: Partial<_48.PrivKey>): _48.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _49.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.PubKey;
                fromJSON(object: any): _49.PubKey;
                toJSON(message: _49.PubKey): unknown;
                fromPartial(object: Partial<_49.PubKey>): _49.PubKey;
            };
            PrivKey: {
                encode(message: _49.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.PrivKey;
                fromJSON(object: any): _49.PrivKey;
                toJSON(message: _49.PrivKey): unknown;
                fromPartial(object: Partial<_49.PrivKey>): _49.PrivKey;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _50.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Module;
                    fromJSON(object: any): _50.Module;
                    toJSON(message: _50.Module): unknown;
                    fromPartial(object: Partial<_50.Module>): _50.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _282.MsgClientImpl;
            QueryClientImpl: typeof _262.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                validatorDistributionInfo(request: _53.QueryValidatorDistributionInfoRequest): Promise<_53.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _53.QueryValidatorOutstandingRewardsRequest): Promise<_53.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _53.QueryValidatorCommissionRequest): Promise<_53.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _53.QueryValidatorSlashesRequest): Promise<_53.QueryValidatorSlashesResponse>;
                delegationRewards(request: _53.QueryDelegationRewardsRequest): Promise<_53.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _53.QueryDelegationTotalRewardsRequest): Promise<_53.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _53.QueryDelegatorValidatorsRequest): Promise<_53.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _53.QueryDelegatorWithdrawAddressRequest): Promise<_53.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _53.QueryCommunityPoolRequest): Promise<_53.QueryCommunityPoolResponse>;
            };
            MsgSetWithdrawAddress: {
                encode(message: _54.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgSetWithdrawAddress;
                fromJSON(object: any): _54.MsgSetWithdrawAddress;
                toJSON(message: _54.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_54.MsgSetWithdrawAddress>): _54.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _54.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _54.MsgSetWithdrawAddressResponse;
                toJSON(_: _54.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_54.MsgSetWithdrawAddressResponse>): _54.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _54.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _54.MsgWithdrawDelegatorReward;
                toJSON(message: _54.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_54.MsgWithdrawDelegatorReward>): _54.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _54.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _54.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _54.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_54.MsgWithdrawDelegatorRewardResponse>): _54.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _54.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _54.MsgWithdrawValidatorCommission;
                toJSON(message: _54.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_54.MsgWithdrawValidatorCommission>): _54.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _54.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _54.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _54.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_54.MsgWithdrawValidatorCommissionResponse>): _54.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _54.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgFundCommunityPool;
                fromJSON(object: any): _54.MsgFundCommunityPool;
                toJSON(message: _54.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_54.MsgFundCommunityPool>): _54.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _54.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _54.MsgFundCommunityPoolResponse;
                toJSON(_: _54.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_54.MsgFundCommunityPoolResponse>): _54.MsgFundCommunityPoolResponse;
            };
            MsgUpdateParams: {
                encode(message: _54.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgUpdateParams;
                fromJSON(object: any): _54.MsgUpdateParams;
                toJSON(message: _54.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_54.MsgUpdateParams>): _54.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _54.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgUpdateParamsResponse;
                fromJSON(_: any): _54.MsgUpdateParamsResponse;
                toJSON(_: _54.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_54.MsgUpdateParamsResponse>): _54.MsgUpdateParamsResponse;
            };
            MsgCommunityPoolSpend: {
                encode(message: _54.MsgCommunityPoolSpend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgCommunityPoolSpend;
                fromJSON(object: any): _54.MsgCommunityPoolSpend;
                toJSON(message: _54.MsgCommunityPoolSpend): unknown;
                fromPartial(object: Partial<_54.MsgCommunityPoolSpend>): _54.MsgCommunityPoolSpend;
            };
            MsgCommunityPoolSpendResponse: {
                encode(_: _54.MsgCommunityPoolSpendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgCommunityPoolSpendResponse;
                fromJSON(_: any): _54.MsgCommunityPoolSpendResponse;
                toJSON(_: _54.MsgCommunityPoolSpendResponse): unknown;
                fromPartial(_: Partial<_54.MsgCommunityPoolSpendResponse>): _54.MsgCommunityPoolSpendResponse;
            };
            MsgDepositValidatorRewardsPool: {
                encode(message: _54.MsgDepositValidatorRewardsPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgDepositValidatorRewardsPool;
                fromJSON(object: any): _54.MsgDepositValidatorRewardsPool;
                toJSON(message: _54.MsgDepositValidatorRewardsPool): unknown;
                fromPartial(object: Partial<_54.MsgDepositValidatorRewardsPool>): _54.MsgDepositValidatorRewardsPool;
            };
            MsgDepositValidatorRewardsPoolResponse: {
                encode(_: _54.MsgDepositValidatorRewardsPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgDepositValidatorRewardsPoolResponse;
                fromJSON(_: any): _54.MsgDepositValidatorRewardsPoolResponse;
                toJSON(_: _54.MsgDepositValidatorRewardsPoolResponse): unknown;
                fromPartial(_: Partial<_54.MsgDepositValidatorRewardsPoolResponse>): _54.MsgDepositValidatorRewardsPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _53.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryParamsRequest;
                fromJSON(_: any): _53.QueryParamsRequest;
                toJSON(_: _53.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_53.QueryParamsRequest>): _53.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _53.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryParamsResponse;
                fromJSON(object: any): _53.QueryParamsResponse;
                toJSON(message: _53.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_53.QueryParamsResponse>): _53.QueryParamsResponse;
            };
            QueryValidatorDistributionInfoRequest: {
                encode(message: _53.QueryValidatorDistributionInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryValidatorDistributionInfoRequest;
                fromJSON(object: any): _53.QueryValidatorDistributionInfoRequest;
                toJSON(message: _53.QueryValidatorDistributionInfoRequest): unknown;
                fromPartial(object: Partial<_53.QueryValidatorDistributionInfoRequest>): _53.QueryValidatorDistributionInfoRequest;
            };
            QueryValidatorDistributionInfoResponse: {
                encode(message: _53.QueryValidatorDistributionInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryValidatorDistributionInfoResponse;
                fromJSON(object: any): _53.QueryValidatorDistributionInfoResponse;
                toJSON(message: _53.QueryValidatorDistributionInfoResponse): unknown;
                fromPartial(object: Partial<_53.QueryValidatorDistributionInfoResponse>): _53.QueryValidatorDistributionInfoResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _53.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _53.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _53.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_53.QueryValidatorOutstandingRewardsRequest>): _53.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _53.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _53.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _53.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_53.QueryValidatorOutstandingRewardsResponse>): _53.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _53.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryValidatorCommissionRequest;
                fromJSON(object: any): _53.QueryValidatorCommissionRequest;
                toJSON(message: _53.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_53.QueryValidatorCommissionRequest>): _53.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _53.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryValidatorCommissionResponse;
                fromJSON(object: any): _53.QueryValidatorCommissionResponse;
                toJSON(message: _53.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_53.QueryValidatorCommissionResponse>): _53.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _53.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryValidatorSlashesRequest;
                fromJSON(object: any): _53.QueryValidatorSlashesRequest;
                toJSON(message: _53.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_53.QueryValidatorSlashesRequest>): _53.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _53.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryValidatorSlashesResponse;
                fromJSON(object: any): _53.QueryValidatorSlashesResponse;
                toJSON(message: _53.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_53.QueryValidatorSlashesResponse>): _53.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _53.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDelegationRewardsRequest;
                fromJSON(object: any): _53.QueryDelegationRewardsRequest;
                toJSON(message: _53.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_53.QueryDelegationRewardsRequest>): _53.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _53.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDelegationRewardsResponse;
                fromJSON(object: any): _53.QueryDelegationRewardsResponse;
                toJSON(message: _53.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_53.QueryDelegationRewardsResponse>): _53.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _53.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _53.QueryDelegationTotalRewardsRequest;
                toJSON(message: _53.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_53.QueryDelegationTotalRewardsRequest>): _53.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _53.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _53.QueryDelegationTotalRewardsResponse;
                toJSON(message: _53.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_53.QueryDelegationTotalRewardsResponse>): _53.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _53.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _53.QueryDelegatorValidatorsRequest;
                toJSON(message: _53.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_53.QueryDelegatorValidatorsRequest>): _53.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _53.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _53.QueryDelegatorValidatorsResponse;
                toJSON(message: _53.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_53.QueryDelegatorValidatorsResponse>): _53.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _53.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _53.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _53.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_53.QueryDelegatorWithdrawAddressRequest>): _53.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _53.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _53.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _53.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_53.QueryDelegatorWithdrawAddressResponse>): _53.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _53.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryCommunityPoolRequest;
                fromJSON(_: any): _53.QueryCommunityPoolRequest;
                toJSON(_: _53.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_53.QueryCommunityPoolRequest>): _53.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _53.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryCommunityPoolResponse;
                fromJSON(object: any): _53.QueryCommunityPoolResponse;
                toJSON(message: _53.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_53.QueryCommunityPoolResponse>): _53.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _52.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.DelegatorWithdrawInfo;
                fromJSON(object: any): _52.DelegatorWithdrawInfo;
                toJSON(message: _52.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_52.DelegatorWithdrawInfo>): _52.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _52.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _52.ValidatorOutstandingRewardsRecord;
                toJSON(message: _52.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_52.ValidatorOutstandingRewardsRecord>): _52.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _52.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _52.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _52.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_52.ValidatorAccumulatedCommissionRecord>): _52.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _52.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _52.ValidatorHistoricalRewardsRecord;
                toJSON(message: _52.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_52.ValidatorHistoricalRewardsRecord>): _52.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _52.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _52.ValidatorCurrentRewardsRecord;
                toJSON(message: _52.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_52.ValidatorCurrentRewardsRecord>): _52.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _52.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.DelegatorStartingInfoRecord;
                fromJSON(object: any): _52.DelegatorStartingInfoRecord;
                toJSON(message: _52.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_52.DelegatorStartingInfoRecord>): _52.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _52.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.ValidatorSlashEventRecord;
                fromJSON(object: any): _52.ValidatorSlashEventRecord;
                toJSON(message: _52.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_52.ValidatorSlashEventRecord>): _52.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _52.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.GenesisState;
                fromJSON(object: any): _52.GenesisState;
                toJSON(message: _52.GenesisState): unknown;
                fromPartial(object: Partial<_52.GenesisState>): _52.GenesisState;
            };
            Params: {
                encode(message: _51.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Params;
                fromJSON(object: any): _51.Params;
                toJSON(message: _51.Params): unknown;
                fromPartial(object: Partial<_51.Params>): _51.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _51.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ValidatorHistoricalRewards;
                fromJSON(object: any): _51.ValidatorHistoricalRewards;
                toJSON(message: _51.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_51.ValidatorHistoricalRewards>): _51.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _51.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ValidatorCurrentRewards;
                fromJSON(object: any): _51.ValidatorCurrentRewards;
                toJSON(message: _51.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_51.ValidatorCurrentRewards>): _51.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _51.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ValidatorAccumulatedCommission;
                fromJSON(object: any): _51.ValidatorAccumulatedCommission;
                toJSON(message: _51.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_51.ValidatorAccumulatedCommission>): _51.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _51.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ValidatorOutstandingRewards;
                fromJSON(object: any): _51.ValidatorOutstandingRewards;
                toJSON(message: _51.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_51.ValidatorOutstandingRewards>): _51.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _51.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ValidatorSlashEvent;
                fromJSON(object: any): _51.ValidatorSlashEvent;
                toJSON(message: _51.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_51.ValidatorSlashEvent>): _51.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _51.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ValidatorSlashEvents;
                fromJSON(object: any): _51.ValidatorSlashEvents;
                toJSON(message: _51.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_51.ValidatorSlashEvents>): _51.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _51.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.FeePool;
                fromJSON(object: any): _51.FeePool;
                toJSON(message: _51.FeePool): unknown;
                fromPartial(object: Partial<_51.FeePool>): _51.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _51.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.CommunityPoolSpendProposal;
                fromJSON(object: any): _51.CommunityPoolSpendProposal;
                toJSON(message: _51.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_51.CommunityPoolSpendProposal>): _51.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _51.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.DelegatorStartingInfo;
                fromJSON(object: any): _51.DelegatorStartingInfo;
                toJSON(message: _51.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_51.DelegatorStartingInfo>): _51.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _51.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.DelegationDelegatorReward;
                fromJSON(object: any): _51.DelegationDelegatorReward;
                toJSON(message: _51.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_51.DelegationDelegatorReward>): _51.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _51.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _51.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _51.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_51.CommunityPoolSpendProposalWithDeposit>): _51.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _55.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Module;
                    fromJSON(_: any): _55.Module;
                    toJSON(_: _55.Module): unknown;
                    fromPartial(_: Partial<_55.Module>): _55.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _283.MsgClientImpl;
            QueryClientImpl: typeof _263.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _58.QueryEvidenceRequest): Promise<_58.QueryEvidenceResponse>;
                allEvidence(request?: _58.QueryAllEvidenceRequest): Promise<_58.QueryAllEvidenceResponse>;
            };
            MsgSubmitEvidence: {
                encode(message: _59.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgSubmitEvidence;
                fromJSON(object: any): _59.MsgSubmitEvidence;
                toJSON(message: _59.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_59.MsgSubmitEvidence>): _59.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _59.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _59.MsgSubmitEvidenceResponse;
                toJSON(message: _59.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_59.MsgSubmitEvidenceResponse>): _59.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _58.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryEvidenceRequest;
                fromJSON(object: any): _58.QueryEvidenceRequest;
                toJSON(message: _58.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_58.QueryEvidenceRequest>): _58.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _58.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryEvidenceResponse;
                fromJSON(object: any): _58.QueryEvidenceResponse;
                toJSON(message: _58.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_58.QueryEvidenceResponse>): _58.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _58.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryAllEvidenceRequest;
                fromJSON(object: any): _58.QueryAllEvidenceRequest;
                toJSON(message: _58.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_58.QueryAllEvidenceRequest>): _58.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _58.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryAllEvidenceResponse;
                fromJSON(object: any): _58.QueryAllEvidenceResponse;
                toJSON(message: _58.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_58.QueryAllEvidenceResponse>): _58.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _57.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.GenesisState;
                fromJSON(object: any): _57.GenesisState;
                toJSON(message: _57.GenesisState): unknown;
                fromPartial(object: Partial<_57.GenesisState>): _57.GenesisState;
            };
            Equivocation: {
                encode(message: _56.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Equivocation;
                fromJSON(object: any): _56.Equivocation;
                toJSON(message: _56.Equivocation): unknown;
                fromPartial(object: Partial<_56.Equivocation>): _56.Equivocation;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _60.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Module;
                    fromJSON(_: any): _60.Module;
                    toJSON(_: _60.Module): unknown;
                    fromPartial(_: Partial<_60.Module>): _60.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _284.MsgClientImpl;
            QueryClientImpl: typeof _264.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _63.QueryAllowanceRequest): Promise<_63.QueryAllowanceResponse>;
                allowances(request: _63.QueryAllowancesRequest): Promise<_63.QueryAllowancesResponse>;
                allowancesByGranter(request: _63.QueryAllowancesByGranterRequest): Promise<_63.QueryAllowancesByGranterResponse>;
            };
            MsgGrantAllowance: {
                encode(message: _64.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgGrantAllowance;
                fromJSON(object: any): _64.MsgGrantAllowance;
                toJSON(message: _64.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_64.MsgGrantAllowance>): _64.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _64.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgGrantAllowanceResponse;
                fromJSON(_: any): _64.MsgGrantAllowanceResponse;
                toJSON(_: _64.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_64.MsgGrantAllowanceResponse>): _64.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _64.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgRevokeAllowance;
                fromJSON(object: any): _64.MsgRevokeAllowance;
                toJSON(message: _64.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_64.MsgRevokeAllowance>): _64.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _64.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _64.MsgRevokeAllowanceResponse;
                toJSON(_: _64.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_64.MsgRevokeAllowanceResponse>): _64.MsgRevokeAllowanceResponse;
            };
            MsgPruneAllowances: {
                encode(message: _64.MsgPruneAllowances, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgPruneAllowances;
                fromJSON(object: any): _64.MsgPruneAllowances;
                toJSON(message: _64.MsgPruneAllowances): unknown;
                fromPartial(object: Partial<_64.MsgPruneAllowances>): _64.MsgPruneAllowances;
            };
            MsgPruneAllowancesResponse: {
                encode(_: _64.MsgPruneAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgPruneAllowancesResponse;
                fromJSON(_: any): _64.MsgPruneAllowancesResponse;
                toJSON(_: _64.MsgPruneAllowancesResponse): unknown;
                fromPartial(_: Partial<_64.MsgPruneAllowancesResponse>): _64.MsgPruneAllowancesResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _63.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryAllowanceRequest;
                fromJSON(object: any): _63.QueryAllowanceRequest;
                toJSON(message: _63.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_63.QueryAllowanceRequest>): _63.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _63.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryAllowanceResponse;
                fromJSON(object: any): _63.QueryAllowanceResponse;
                toJSON(message: _63.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_63.QueryAllowanceResponse>): _63.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _63.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryAllowancesRequest;
                fromJSON(object: any): _63.QueryAllowancesRequest;
                toJSON(message: _63.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_63.QueryAllowancesRequest>): _63.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _63.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryAllowancesResponse;
                fromJSON(object: any): _63.QueryAllowancesResponse;
                toJSON(message: _63.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_63.QueryAllowancesResponse>): _63.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _63.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _63.QueryAllowancesByGranterRequest;
                toJSON(message: _63.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_63.QueryAllowancesByGranterRequest>): _63.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _63.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _63.QueryAllowancesByGranterResponse;
                toJSON(message: _63.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_63.QueryAllowancesByGranterResponse>): _63.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _62.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GenesisState;
                fromJSON(object: any): _62.GenesisState;
                toJSON(message: _62.GenesisState): unknown;
                fromPartial(object: Partial<_62.GenesisState>): _62.GenesisState;
            };
            BasicAllowance: {
                encode(message: _61.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.BasicAllowance;
                fromJSON(object: any): _61.BasicAllowance;
                toJSON(message: _61.BasicAllowance): unknown;
                fromPartial(object: Partial<_61.BasicAllowance>): _61.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _61.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.PeriodicAllowance;
                fromJSON(object: any): _61.PeriodicAllowance;
                toJSON(message: _61.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_61.PeriodicAllowance>): _61.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _61.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.AllowedMsgAllowance;
                fromJSON(object: any): _61.AllowedMsgAllowance;
                toJSON(message: _61.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_61.AllowedMsgAllowance>): _61.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _61.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Grant;
                fromJSON(object: any): _61.Grant;
                toJSON(message: _61.Grant): unknown;
                fromPartial(object: Partial<_61.Grant>): _61.Grant;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _65.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Module;
                    fromJSON(_: any): _65.Module;
                    toJSON(_: _65.Module): unknown;
                    fromPartial(_: Partial<_65.Module>): _65.Module;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                encode(message: _66.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GenesisState;
                fromJSON(object: any): _66.GenesisState;
                toJSON(message: _66.GenesisState): unknown;
                fromPartial(object: Partial<_66.GenesisState>): _66.GenesisState;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _67.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Module;
                    fromJSON(object: any): _67.Module;
                    toJSON(message: _67.Module): unknown;
                    fromPartial(object: Partial<_67.Module>): _67.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _285.MsgClientImpl;
            QueryClientImpl: typeof _265.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                constitution(request?: _70.QueryConstitutionRequest): Promise<_70.QueryConstitutionResponse>;
                proposal(request: _70.QueryProposalRequest): Promise<_70.QueryProposalResponse>;
                proposals(request: _70.QueryProposalsRequest): Promise<_70.QueryProposalsResponse>;
                vote(request: _70.QueryVoteRequest): Promise<_70.QueryVoteResponse>;
                votes(request: _70.QueryVotesRequest): Promise<_70.QueryVotesResponse>;
                params(request: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                deposit(request: _70.QueryDepositRequest): Promise<_70.QueryDepositResponse>;
                deposits(request: _70.QueryDepositsRequest): Promise<_70.QueryDepositsResponse>;
                tallyResult(request: _70.QueryTallyResultRequest): Promise<_70.QueryTallyResultResponse>;
            };
            MsgSubmitProposal: {
                encode(message: _71.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgSubmitProposal;
                fromJSON(object: any): _71.MsgSubmitProposal;
                toJSON(message: _71.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_71.MsgSubmitProposal>): _71.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _71.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgSubmitProposalResponse;
                fromJSON(object: any): _71.MsgSubmitProposalResponse;
                toJSON(message: _71.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_71.MsgSubmitProposalResponse>): _71.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _71.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgExecLegacyContent;
                fromJSON(object: any): _71.MsgExecLegacyContent;
                toJSON(message: _71.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_71.MsgExecLegacyContent>): _71.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _71.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgExecLegacyContentResponse;
                fromJSON(_: any): _71.MsgExecLegacyContentResponse;
                toJSON(_: _71.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_71.MsgExecLegacyContentResponse>): _71.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _71.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgVote;
                fromJSON(object: any): _71.MsgVote;
                toJSON(message: _71.MsgVote): unknown;
                fromPartial(object: Partial<_71.MsgVote>): _71.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _71.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgVoteResponse;
                fromJSON(_: any): _71.MsgVoteResponse;
                toJSON(_: _71.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_71.MsgVoteResponse>): _71.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _71.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgVoteWeighted;
                fromJSON(object: any): _71.MsgVoteWeighted;
                toJSON(message: _71.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_71.MsgVoteWeighted>): _71.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _71.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgVoteWeightedResponse;
                fromJSON(_: any): _71.MsgVoteWeightedResponse;
                toJSON(_: _71.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_71.MsgVoteWeightedResponse>): _71.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _71.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgDeposit;
                fromJSON(object: any): _71.MsgDeposit;
                toJSON(message: _71.MsgDeposit): unknown;
                fromPartial(object: Partial<_71.MsgDeposit>): _71.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _71.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgDepositResponse;
                fromJSON(_: any): _71.MsgDepositResponse;
                toJSON(_: _71.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_71.MsgDepositResponse>): _71.MsgDepositResponse;
            };
            MsgUpdateParams: {
                encode(message: _71.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateParams;
                fromJSON(object: any): _71.MsgUpdateParams;
                toJSON(message: _71.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_71.MsgUpdateParams>): _71.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _71.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateParamsResponse;
                fromJSON(_: any): _71.MsgUpdateParamsResponse;
                toJSON(_: _71.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_71.MsgUpdateParamsResponse>): _71.MsgUpdateParamsResponse;
            };
            MsgCancelProposal: {
                encode(message: _71.MsgCancelProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgCancelProposal;
                fromJSON(object: any): _71.MsgCancelProposal;
                toJSON(message: _71.MsgCancelProposal): unknown;
                fromPartial(object: Partial<_71.MsgCancelProposal>): _71.MsgCancelProposal;
            };
            MsgCancelProposalResponse: {
                encode(message: _71.MsgCancelProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgCancelProposalResponse;
                fromJSON(object: any): _71.MsgCancelProposalResponse;
                toJSON(message: _71.MsgCancelProposalResponse): unknown;
                fromPartial(object: Partial<_71.MsgCancelProposalResponse>): _71.MsgCancelProposalResponse;
            };
            QueryConstitutionRequest: {
                encode(_: _70.QueryConstitutionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryConstitutionRequest;
                fromJSON(_: any): _70.QueryConstitutionRequest;
                toJSON(_: _70.QueryConstitutionRequest): unknown;
                fromPartial(_: Partial<_70.QueryConstitutionRequest>): _70.QueryConstitutionRequest;
            };
            QueryConstitutionResponse: {
                encode(message: _70.QueryConstitutionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryConstitutionResponse;
                fromJSON(object: any): _70.QueryConstitutionResponse;
                toJSON(message: _70.QueryConstitutionResponse): unknown;
                fromPartial(object: Partial<_70.QueryConstitutionResponse>): _70.QueryConstitutionResponse;
            };
            QueryProposalRequest: {
                encode(message: _70.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryProposalRequest;
                fromJSON(object: any): _70.QueryProposalRequest;
                toJSON(message: _70.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_70.QueryProposalRequest>): _70.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _70.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryProposalResponse;
                fromJSON(object: any): _70.QueryProposalResponse;
                toJSON(message: _70.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_70.QueryProposalResponse>): _70.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _70.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryProposalsRequest;
                fromJSON(object: any): _70.QueryProposalsRequest;
                toJSON(message: _70.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_70.QueryProposalsRequest>): _70.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _70.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryProposalsResponse;
                fromJSON(object: any): _70.QueryProposalsResponse;
                toJSON(message: _70.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_70.QueryProposalsResponse>): _70.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _70.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryVoteRequest;
                fromJSON(object: any): _70.QueryVoteRequest;
                toJSON(message: _70.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_70.QueryVoteRequest>): _70.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _70.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryVoteResponse;
                fromJSON(object: any): _70.QueryVoteResponse;
                toJSON(message: _70.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_70.QueryVoteResponse>): _70.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _70.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryVotesRequest;
                fromJSON(object: any): _70.QueryVotesRequest;
                toJSON(message: _70.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_70.QueryVotesRequest>): _70.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _70.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryVotesResponse;
                fromJSON(object: any): _70.QueryVotesResponse;
                toJSON(message: _70.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_70.QueryVotesResponse>): _70.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _70.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryParamsRequest;
                fromJSON(object: any): _70.QueryParamsRequest;
                toJSON(message: _70.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_70.QueryParamsRequest>): _70.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _70.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryParamsResponse;
                fromJSON(object: any): _70.QueryParamsResponse;
                toJSON(message: _70.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_70.QueryParamsResponse>): _70.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _70.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryDepositRequest;
                fromJSON(object: any): _70.QueryDepositRequest;
                toJSON(message: _70.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_70.QueryDepositRequest>): _70.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _70.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryDepositResponse;
                fromJSON(object: any): _70.QueryDepositResponse;
                toJSON(message: _70.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_70.QueryDepositResponse>): _70.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _70.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryDepositsRequest;
                fromJSON(object: any): _70.QueryDepositsRequest;
                toJSON(message: _70.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_70.QueryDepositsRequest>): _70.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _70.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryDepositsResponse;
                fromJSON(object: any): _70.QueryDepositsResponse;
                toJSON(message: _70.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_70.QueryDepositsResponse>): _70.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _70.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryTallyResultRequest;
                fromJSON(object: any): _70.QueryTallyResultRequest;
                toJSON(message: _70.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_70.QueryTallyResultRequest>): _70.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _70.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryTallyResultResponse;
                fromJSON(object: any): _70.QueryTallyResultResponse;
                toJSON(message: _70.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_70.QueryTallyResultResponse>): _70.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _69.VoteOption;
            voteOptionToJSON(object: _69.VoteOption): string;
            proposalStatusFromJSON(object: any): _69.ProposalStatus;
            proposalStatusToJSON(object: _69.ProposalStatus): string;
            VoteOption: typeof _69.VoteOption;
            VoteOptionSDKType: typeof _69.VoteOption;
            ProposalStatus: typeof _69.ProposalStatus;
            ProposalStatusSDKType: typeof _69.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _69.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.WeightedVoteOption;
                fromJSON(object: any): _69.WeightedVoteOption;
                toJSON(message: _69.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_69.WeightedVoteOption>): _69.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _69.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Deposit;
                fromJSON(object: any): _69.Deposit;
                toJSON(message: _69.Deposit): unknown;
                fromPartial(object: Partial<_69.Deposit>): _69.Deposit;
            };
            Proposal: {
                encode(message: _69.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Proposal;
                fromJSON(object: any): _69.Proposal;
                toJSON(message: _69.Proposal): unknown;
                fromPartial(object: Partial<_69.Proposal>): _69.Proposal;
            };
            TallyResult: {
                encode(message: _69.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.TallyResult;
                fromJSON(object: any): _69.TallyResult;
                toJSON(message: _69.TallyResult): unknown;
                fromPartial(object: Partial<_69.TallyResult>): _69.TallyResult;
            };
            Vote: {
                encode(message: _69.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Vote;
                fromJSON(object: any): _69.Vote;
                toJSON(message: _69.Vote): unknown;
                fromPartial(object: Partial<_69.Vote>): _69.Vote;
            };
            DepositParams: {
                encode(message: _69.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.DepositParams;
                fromJSON(object: any): _69.DepositParams;
                toJSON(message: _69.DepositParams): unknown;
                fromPartial(object: Partial<_69.DepositParams>): _69.DepositParams;
            };
            VotingParams: {
                encode(message: _69.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.VotingParams;
                fromJSON(object: any): _69.VotingParams;
                toJSON(message: _69.VotingParams): unknown;
                fromPartial(object: Partial<_69.VotingParams>): _69.VotingParams;
            };
            TallyParams: {
                encode(message: _69.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.TallyParams;
                fromJSON(object: any): _69.TallyParams;
                toJSON(message: _69.TallyParams): unknown;
                fromPartial(object: Partial<_69.TallyParams>): _69.TallyParams;
            };
            Params: {
                encode(message: _69.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Params;
                fromJSON(object: any): _69.Params;
                toJSON(message: _69.Params): unknown;
                fromPartial(object: Partial<_69.Params>): _69.Params;
            };
            GenesisState: {
                encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.GenesisState;
                fromJSON(object: any): _68.GenesisState;
                toJSON(message: _68.GenesisState): unknown;
                fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _286.MsgClientImpl;
            QueryClientImpl: typeof _266.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _74.QueryProposalRequest): Promise<_74.QueryProposalResponse>;
                proposals(request: _74.QueryProposalsRequest): Promise<_74.QueryProposalsResponse>;
                vote(request: _74.QueryVoteRequest): Promise<_74.QueryVoteResponse>;
                votes(request: _74.QueryVotesRequest): Promise<_74.QueryVotesResponse>;
                params(request: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                deposit(request: _74.QueryDepositRequest): Promise<_74.QueryDepositResponse>;
                deposits(request: _74.QueryDepositsRequest): Promise<_74.QueryDepositsResponse>;
                tallyResult(request: _74.QueryTallyResultRequest): Promise<_74.QueryTallyResultResponse>;
            };
            MsgSubmitProposal: {
                encode(message: _75.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSubmitProposal;
                fromJSON(object: any): _75.MsgSubmitProposal;
                toJSON(message: _75.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_75.MsgSubmitProposal>): _75.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _75.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSubmitProposalResponse;
                fromJSON(object: any): _75.MsgSubmitProposalResponse;
                toJSON(message: _75.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_75.MsgSubmitProposalResponse>): _75.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _75.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgVote;
                fromJSON(object: any): _75.MsgVote;
                toJSON(message: _75.MsgVote): unknown;
                fromPartial(object: Partial<_75.MsgVote>): _75.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _75.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgVoteResponse;
                fromJSON(_: any): _75.MsgVoteResponse;
                toJSON(_: _75.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_75.MsgVoteResponse>): _75.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _75.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgVoteWeighted;
                fromJSON(object: any): _75.MsgVoteWeighted;
                toJSON(message: _75.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_75.MsgVoteWeighted>): _75.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _75.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgVoteWeightedResponse;
                fromJSON(_: any): _75.MsgVoteWeightedResponse;
                toJSON(_: _75.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_75.MsgVoteWeightedResponse>): _75.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _75.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgDeposit;
                fromJSON(object: any): _75.MsgDeposit;
                toJSON(message: _75.MsgDeposit): unknown;
                fromPartial(object: Partial<_75.MsgDeposit>): _75.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _75.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgDepositResponse;
                fromJSON(_: any): _75.MsgDepositResponse;
                toJSON(_: _75.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_75.MsgDepositResponse>): _75.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _74.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryProposalRequest;
                fromJSON(object: any): _74.QueryProposalRequest;
                toJSON(message: _74.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_74.QueryProposalRequest>): _74.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _74.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryProposalResponse;
                fromJSON(object: any): _74.QueryProposalResponse;
                toJSON(message: _74.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_74.QueryProposalResponse>): _74.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _74.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryProposalsRequest;
                fromJSON(object: any): _74.QueryProposalsRequest;
                toJSON(message: _74.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_74.QueryProposalsRequest>): _74.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _74.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryProposalsResponse;
                fromJSON(object: any): _74.QueryProposalsResponse;
                toJSON(message: _74.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_74.QueryProposalsResponse>): _74.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _74.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryVoteRequest;
                fromJSON(object: any): _74.QueryVoteRequest;
                toJSON(message: _74.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_74.QueryVoteRequest>): _74.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _74.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryVoteResponse;
                fromJSON(object: any): _74.QueryVoteResponse;
                toJSON(message: _74.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_74.QueryVoteResponse>): _74.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _74.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryVotesRequest;
                fromJSON(object: any): _74.QueryVotesRequest;
                toJSON(message: _74.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_74.QueryVotesRequest>): _74.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _74.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryVotesResponse;
                fromJSON(object: any): _74.QueryVotesResponse;
                toJSON(message: _74.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_74.QueryVotesResponse>): _74.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _74.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryParamsRequest;
                fromJSON(object: any): _74.QueryParamsRequest;
                toJSON(message: _74.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_74.QueryParamsRequest>): _74.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _74.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryParamsResponse;
                fromJSON(object: any): _74.QueryParamsResponse;
                toJSON(message: _74.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_74.QueryParamsResponse>): _74.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _74.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDepositRequest;
                fromJSON(object: any): _74.QueryDepositRequest;
                toJSON(message: _74.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_74.QueryDepositRequest>): _74.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _74.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDepositResponse;
                fromJSON(object: any): _74.QueryDepositResponse;
                toJSON(message: _74.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_74.QueryDepositResponse>): _74.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _74.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDepositsRequest;
                fromJSON(object: any): _74.QueryDepositsRequest;
                toJSON(message: _74.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_74.QueryDepositsRequest>): _74.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _74.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDepositsResponse;
                fromJSON(object: any): _74.QueryDepositsResponse;
                toJSON(message: _74.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_74.QueryDepositsResponse>): _74.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _74.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryTallyResultRequest;
                fromJSON(object: any): _74.QueryTallyResultRequest;
                toJSON(message: _74.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_74.QueryTallyResultRequest>): _74.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _74.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryTallyResultResponse;
                fromJSON(object: any): _74.QueryTallyResultResponse;
                toJSON(message: _74.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_74.QueryTallyResultResponse>): _74.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _73.VoteOption;
            voteOptionToJSON(object: _73.VoteOption): string;
            proposalStatusFromJSON(object: any): _73.ProposalStatus;
            proposalStatusToJSON(object: _73.ProposalStatus): string;
            VoteOption: typeof _73.VoteOption;
            VoteOptionSDKType: typeof _73.VoteOption;
            ProposalStatus: typeof _73.ProposalStatus;
            ProposalStatusSDKType: typeof _73.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _73.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.WeightedVoteOption;
                fromJSON(object: any): _73.WeightedVoteOption;
                toJSON(message: _73.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_73.WeightedVoteOption>): _73.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _73.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TextProposal;
                fromJSON(object: any): _73.TextProposal;
                toJSON(message: _73.TextProposal): unknown;
                fromPartial(object: Partial<_73.TextProposal>): _73.TextProposal;
            };
            Deposit: {
                encode(message: _73.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Deposit;
                fromJSON(object: any): _73.Deposit;
                toJSON(message: _73.Deposit): unknown;
                fromPartial(object: Partial<_73.Deposit>): _73.Deposit;
            };
            Proposal: {
                encode(message: _73.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Proposal;
                fromJSON(object: any): _73.Proposal;
                toJSON(message: _73.Proposal): unknown;
                fromPartial(object: Partial<_73.Proposal>): _73.Proposal;
            };
            TallyResult: {
                encode(message: _73.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TallyResult;
                fromJSON(object: any): _73.TallyResult;
                toJSON(message: _73.TallyResult): unknown;
                fromPartial(object: Partial<_73.TallyResult>): _73.TallyResult;
            };
            Vote: {
                encode(message: _73.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Vote;
                fromJSON(object: any): _73.Vote;
                toJSON(message: _73.Vote): unknown;
                fromPartial(object: Partial<_73.Vote>): _73.Vote;
            };
            DepositParams: {
                encode(message: _73.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.DepositParams;
                fromJSON(object: any): _73.DepositParams;
                toJSON(message: _73.DepositParams): unknown;
                fromPartial(object: Partial<_73.DepositParams>): _73.DepositParams;
            };
            VotingParams: {
                encode(message: _73.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.VotingParams;
                fromJSON(object: any): _73.VotingParams;
                toJSON(message: _73.VotingParams): unknown;
                fromPartial(object: Partial<_73.VotingParams>): _73.VotingParams;
            };
            TallyParams: {
                encode(message: _73.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TallyParams;
                fromJSON(object: any): _73.TallyParams;
                toJSON(message: _73.TallyParams): unknown;
                fromPartial(object: Partial<_73.TallyParams>): _73.TallyParams;
            };
            GenesisState: {
                encode(message: _72.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GenesisState;
                fromJSON(object: any): _72.GenesisState;
                toJSON(message: _72.GenesisState): unknown;
                fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _76.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Module;
                    fromJSON(object: any): _76.Module;
                    toJSON(message: _76.Module): unknown;
                    fromPartial(object: Partial<_76.Module>): _76.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _287.MsgClientImpl;
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _79.QueryGroupInfoRequest): Promise<_79.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _79.QueryGroupPolicyInfoRequest): Promise<_79.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _79.QueryGroupMembersRequest): Promise<_79.QueryGroupMembersResponse>;
                groupsByAdmin(request: _79.QueryGroupsByAdminRequest): Promise<_79.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _79.QueryGroupPoliciesByGroupRequest): Promise<_79.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _79.QueryGroupPoliciesByAdminRequest): Promise<_79.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _79.QueryProposalRequest): Promise<_79.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _79.QueryProposalsByGroupPolicyRequest): Promise<_79.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _79.QueryVoteByProposalVoterRequest): Promise<_79.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _79.QueryVotesByProposalRequest): Promise<_79.QueryVotesByProposalResponse>;
                votesByVoter(request: _79.QueryVotesByVoterRequest): Promise<_79.QueryVotesByVoterResponse>;
                groupsByMember(request: _79.QueryGroupsByMemberRequest): Promise<_79.QueryGroupsByMemberResponse>;
                tallyResult(request: _79.QueryTallyResultRequest): Promise<_79.QueryTallyResultResponse>;
                groups(request?: _79.QueryGroupsRequest): Promise<_79.QueryGroupsResponse>;
            };
            voteOptionFromJSON(object: any): _81.VoteOption;
            voteOptionToJSON(object: _81.VoteOption): string;
            proposalStatusFromJSON(object: any): _81.ProposalStatus;
            proposalStatusToJSON(object: _81.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _81.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _81.ProposalExecutorResult): string;
            VoteOption: typeof _81.VoteOption;
            VoteOptionSDKType: typeof _81.VoteOption;
            ProposalStatus: typeof _81.ProposalStatus;
            ProposalStatusSDKType: typeof _81.ProposalStatus;
            ProposalExecutorResult: typeof _81.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _81.ProposalExecutorResult;
            Member: {
                encode(message: _81.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Member;
                fromJSON(object: any): _81.Member;
                toJSON(message: _81.Member): unknown;
                fromPartial(object: Partial<_81.Member>): _81.Member;
            };
            MemberRequest: {
                encode(message: _81.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MemberRequest;
                fromJSON(object: any): _81.MemberRequest;
                toJSON(message: _81.MemberRequest): unknown;
                fromPartial(object: Partial<_81.MemberRequest>): _81.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _81.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ThresholdDecisionPolicy;
                fromJSON(object: any): _81.ThresholdDecisionPolicy;
                toJSON(message: _81.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_81.ThresholdDecisionPolicy>): _81.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _81.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.PercentageDecisionPolicy;
                fromJSON(object: any): _81.PercentageDecisionPolicy;
                toJSON(message: _81.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_81.PercentageDecisionPolicy>): _81.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _81.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.DecisionPolicyWindows;
                fromJSON(object: any): _81.DecisionPolicyWindows;
                toJSON(message: _81.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_81.DecisionPolicyWindows>): _81.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _81.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.GroupInfo;
                fromJSON(object: any): _81.GroupInfo;
                toJSON(message: _81.GroupInfo): unknown;
                fromPartial(object: Partial<_81.GroupInfo>): _81.GroupInfo;
            };
            GroupMember: {
                encode(message: _81.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.GroupMember;
                fromJSON(object: any): _81.GroupMember;
                toJSON(message: _81.GroupMember): unknown;
                fromPartial(object: Partial<_81.GroupMember>): _81.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _81.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.GroupPolicyInfo;
                fromJSON(object: any): _81.GroupPolicyInfo;
                toJSON(message: _81.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_81.GroupPolicyInfo>): _81.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _81.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Proposal;
                fromJSON(object: any): _81.Proposal;
                toJSON(message: _81.Proposal): unknown;
                fromPartial(object: Partial<_81.Proposal>): _81.Proposal;
            };
            TallyResult: {
                encode(message: _81.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.TallyResult;
                fromJSON(object: any): _81.TallyResult;
                toJSON(message: _81.TallyResult): unknown;
                fromPartial(object: Partial<_81.TallyResult>): _81.TallyResult;
            };
            Vote: {
                encode(message: _81.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Vote;
                fromJSON(object: any): _81.Vote;
                toJSON(message: _81.Vote): unknown;
                fromPartial(object: Partial<_81.Vote>): _81.Vote;
            };
            execFromJSON(object: any): _80.Exec;
            execToJSON(object: _80.Exec): string;
            Exec: typeof _80.Exec;
            ExecSDKType: typeof _80.Exec;
            MsgCreateGroup: {
                encode(message: _80.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreateGroup;
                fromJSON(object: any): _80.MsgCreateGroup;
                toJSON(message: _80.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_80.MsgCreateGroup>): _80.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _80.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreateGroupResponse;
                fromJSON(object: any): _80.MsgCreateGroupResponse;
                toJSON(message: _80.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_80.MsgCreateGroupResponse>): _80.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _80.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpdateGroupMembers;
                fromJSON(object: any): _80.MsgUpdateGroupMembers;
                toJSON(message: _80.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_80.MsgUpdateGroupMembers>): _80.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _80.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _80.MsgUpdateGroupMembersResponse;
                toJSON(_: _80.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_80.MsgUpdateGroupMembersResponse>): _80.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _80.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpdateGroupAdmin;
                fromJSON(object: any): _80.MsgUpdateGroupAdmin;
                toJSON(message: _80.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_80.MsgUpdateGroupAdmin>): _80.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _80.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _80.MsgUpdateGroupAdminResponse;
                toJSON(_: _80.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_80.MsgUpdateGroupAdminResponse>): _80.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _80.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpdateGroupMetadata;
                fromJSON(object: any): _80.MsgUpdateGroupMetadata;
                toJSON(message: _80.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_80.MsgUpdateGroupMetadata>): _80.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _80.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _80.MsgUpdateGroupMetadataResponse;
                toJSON(_: _80.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_80.MsgUpdateGroupMetadataResponse>): _80.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _80.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreateGroupPolicy;
                fromJSON(object: any): _80.MsgCreateGroupPolicy;
                toJSON(message: _80.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_80.MsgCreateGroupPolicy>): _80.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _80.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _80.MsgCreateGroupPolicyResponse;
                toJSON(message: _80.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_80.MsgCreateGroupPolicyResponse>): _80.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _80.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _80.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _80.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_80.MsgUpdateGroupPolicyAdmin>): _80.MsgUpdateGroupPolicyAdmin;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _80.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _80.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _80.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_80.MsgUpdateGroupPolicyAdminResponse>): _80.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _80.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _80.MsgCreateGroupWithPolicy;
                toJSON(message: _80.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_80.MsgCreateGroupWithPolicy>): _80.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _80.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _80.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _80.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_80.MsgCreateGroupWithPolicyResponse>): _80.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _80.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _80.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _80.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_80.MsgUpdateGroupPolicyDecisionPolicy>): _80.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _80.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _80.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _80.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_80.MsgUpdateGroupPolicyDecisionPolicyResponse>): _80.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _80.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _80.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _80.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_80.MsgUpdateGroupPolicyMetadata>): _80.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _80.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _80.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _80.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_80.MsgUpdateGroupPolicyMetadataResponse>): _80.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _80.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgSubmitProposal;
                fromJSON(object: any): _80.MsgSubmitProposal;
                toJSON(message: _80.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_80.MsgSubmitProposal>): _80.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _80.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgSubmitProposalResponse;
                fromJSON(object: any): _80.MsgSubmitProposalResponse;
                toJSON(message: _80.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_80.MsgSubmitProposalResponse>): _80.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _80.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgWithdrawProposal;
                fromJSON(object: any): _80.MsgWithdrawProposal;
                toJSON(message: _80.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_80.MsgWithdrawProposal>): _80.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _80.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgWithdrawProposalResponse;
                fromJSON(_: any): _80.MsgWithdrawProposalResponse;
                toJSON(_: _80.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_80.MsgWithdrawProposalResponse>): _80.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _80.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgVote;
                fromJSON(object: any): _80.MsgVote;
                toJSON(message: _80.MsgVote): unknown;
                fromPartial(object: Partial<_80.MsgVote>): _80.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _80.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgVoteResponse;
                fromJSON(_: any): _80.MsgVoteResponse;
                toJSON(_: _80.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_80.MsgVoteResponse>): _80.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _80.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgExec;
                fromJSON(object: any): _80.MsgExec;
                toJSON(message: _80.MsgExec): unknown;
                fromPartial(object: Partial<_80.MsgExec>): _80.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _80.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgExecResponse;
                fromJSON(object: any): _80.MsgExecResponse;
                toJSON(message: _80.MsgExecResponse): unknown;
                fromPartial(object: Partial<_80.MsgExecResponse>): _80.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _80.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgLeaveGroup;
                fromJSON(object: any): _80.MsgLeaveGroup;
                toJSON(message: _80.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_80.MsgLeaveGroup>): _80.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _80.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgLeaveGroupResponse;
                fromJSON(_: any): _80.MsgLeaveGroupResponse;
                toJSON(_: _80.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_80.MsgLeaveGroupResponse>): _80.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _79.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupInfoRequest;
                fromJSON(object: any): _79.QueryGroupInfoRequest;
                toJSON(message: _79.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_79.QueryGroupInfoRequest>): _79.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _79.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupInfoResponse;
                fromJSON(object: any): _79.QueryGroupInfoResponse;
                toJSON(message: _79.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_79.QueryGroupInfoResponse>): _79.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _79.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _79.QueryGroupPolicyInfoRequest;
                toJSON(message: _79.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_79.QueryGroupPolicyInfoRequest>): _79.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _79.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _79.QueryGroupPolicyInfoResponse;
                toJSON(message: _79.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_79.QueryGroupPolicyInfoResponse>): _79.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _79.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupMembersRequest;
                fromJSON(object: any): _79.QueryGroupMembersRequest;
                toJSON(message: _79.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_79.QueryGroupMembersRequest>): _79.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _79.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupMembersResponse;
                fromJSON(object: any): _79.QueryGroupMembersResponse;
                toJSON(message: _79.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_79.QueryGroupMembersResponse>): _79.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _79.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupsByAdminRequest;
                fromJSON(object: any): _79.QueryGroupsByAdminRequest;
                toJSON(message: _79.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_79.QueryGroupsByAdminRequest>): _79.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _79.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupsByAdminResponse;
                fromJSON(object: any): _79.QueryGroupsByAdminResponse;
                toJSON(message: _79.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_79.QueryGroupsByAdminResponse>): _79.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _79.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _79.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _79.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_79.QueryGroupPoliciesByGroupRequest>): _79.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _79.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _79.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _79.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_79.QueryGroupPoliciesByGroupResponse>): _79.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _79.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _79.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _79.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_79.QueryGroupPoliciesByAdminRequest>): _79.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _79.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _79.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _79.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_79.QueryGroupPoliciesByAdminResponse>): _79.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _79.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryProposalRequest;
                fromJSON(object: any): _79.QueryProposalRequest;
                toJSON(message: _79.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_79.QueryProposalRequest>): _79.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _79.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryProposalResponse;
                fromJSON(object: any): _79.QueryProposalResponse;
                toJSON(message: _79.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_79.QueryProposalResponse>): _79.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _79.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _79.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _79.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_79.QueryProposalsByGroupPolicyRequest>): _79.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _79.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _79.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _79.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_79.QueryProposalsByGroupPolicyResponse>): _79.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _79.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _79.QueryVoteByProposalVoterRequest;
                toJSON(message: _79.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_79.QueryVoteByProposalVoterRequest>): _79.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _79.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _79.QueryVoteByProposalVoterResponse;
                toJSON(message: _79.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_79.QueryVoteByProposalVoterResponse>): _79.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _79.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryVotesByProposalRequest;
                fromJSON(object: any): _79.QueryVotesByProposalRequest;
                toJSON(message: _79.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_79.QueryVotesByProposalRequest>): _79.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _79.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryVotesByProposalResponse;
                fromJSON(object: any): _79.QueryVotesByProposalResponse;
                toJSON(message: _79.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_79.QueryVotesByProposalResponse>): _79.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _79.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryVotesByVoterRequest;
                fromJSON(object: any): _79.QueryVotesByVoterRequest;
                toJSON(message: _79.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_79.QueryVotesByVoterRequest>): _79.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _79.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryVotesByVoterResponse;
                fromJSON(object: any): _79.QueryVotesByVoterResponse;
                toJSON(message: _79.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_79.QueryVotesByVoterResponse>): _79.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _79.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupsByMemberRequest;
                fromJSON(object: any): _79.QueryGroupsByMemberRequest;
                toJSON(message: _79.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_79.QueryGroupsByMemberRequest>): _79.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _79.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupsByMemberResponse;
                fromJSON(object: any): _79.QueryGroupsByMemberResponse;
                toJSON(message: _79.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_79.QueryGroupsByMemberResponse>): _79.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _79.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryTallyResultRequest;
                fromJSON(object: any): _79.QueryTallyResultRequest;
                toJSON(message: _79.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_79.QueryTallyResultRequest>): _79.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _79.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryTallyResultResponse;
                fromJSON(object: any): _79.QueryTallyResultResponse;
                toJSON(message: _79.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_79.QueryTallyResultResponse>): _79.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _79.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupsRequest;
                fromJSON(object: any): _79.QueryGroupsRequest;
                toJSON(message: _79.QueryGroupsRequest): unknown;
                fromPartial(object: Partial<_79.QueryGroupsRequest>): _79.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _79.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGroupsResponse;
                fromJSON(object: any): _79.QueryGroupsResponse;
                toJSON(message: _79.QueryGroupsResponse): unknown;
                fromPartial(object: Partial<_79.QueryGroupsResponse>): _79.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _78.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GenesisState;
                fromJSON(object: any): _78.GenesisState;
                toJSON(message: _78.GenesisState): unknown;
                fromPartial(object: Partial<_78.GenesisState>): _78.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _77.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.EventCreateGroup;
                fromJSON(object: any): _77.EventCreateGroup;
                toJSON(message: _77.EventCreateGroup): unknown;
                fromPartial(object: Partial<_77.EventCreateGroup>): _77.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _77.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.EventUpdateGroup;
                fromJSON(object: any): _77.EventUpdateGroup;
                toJSON(message: _77.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_77.EventUpdateGroup>): _77.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _77.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.EventCreateGroupPolicy;
                fromJSON(object: any): _77.EventCreateGroupPolicy;
                toJSON(message: _77.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_77.EventCreateGroupPolicy>): _77.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _77.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.EventUpdateGroupPolicy;
                fromJSON(object: any): _77.EventUpdateGroupPolicy;
                toJSON(message: _77.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_77.EventUpdateGroupPolicy>): _77.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _77.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.EventSubmitProposal;
                fromJSON(object: any): _77.EventSubmitProposal;
                toJSON(message: _77.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_77.EventSubmitProposal>): _77.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _77.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.EventWithdrawProposal;
                fromJSON(object: any): _77.EventWithdrawProposal;
                toJSON(message: _77.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_77.EventWithdrawProposal>): _77.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _77.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.EventVote;
                fromJSON(object: any): _77.EventVote;
                toJSON(message: _77.EventVote): unknown;
                fromPartial(object: Partial<_77.EventVote>): _77.EventVote;
            };
            EventExec: {
                encode(message: _77.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.EventExec;
                fromJSON(object: any): _77.EventExec;
                toJSON(message: _77.EventExec): unknown;
                fromPartial(object: Partial<_77.EventExec>): _77.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _77.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.EventLeaveGroup;
                fromJSON(object: any): _77.EventLeaveGroup;
                toJSON(message: _77.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_77.EventLeaveGroup>): _77.EventLeaveGroup;
            };
            EventProposalPruned: {
                encode(message: _77.EventProposalPruned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.EventProposalPruned;
                fromJSON(object: any): _77.EventProposalPruned;
                toJSON(message: _77.EventProposalPruned): unknown;
                fromPartial(object: Partial<_77.EventProposalPruned>): _77.EventProposalPruned;
            };
        };
    }
    namespace ics23 {
        const v1: {
            hashOpFromJSON(object: any): _82.HashOp;
            hashOpToJSON(object: _82.HashOp): string;
            lengthOpFromJSON(object: any): _82.LengthOp;
            lengthOpToJSON(object: _82.LengthOp): string;
            HashOp: typeof _82.HashOp;
            HashOpSDKType: typeof _82.HashOp;
            LengthOp: typeof _82.LengthOp;
            LengthOpSDKType: typeof _82.LengthOp;
            ExistenceProof: {
                encode(message: _82.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ExistenceProof;
                fromJSON(object: any): _82.ExistenceProof;
                toJSON(message: _82.ExistenceProof): unknown;
                fromPartial(object: Partial<_82.ExistenceProof>): _82.ExistenceProof;
            };
            NonExistenceProof: {
                encode(message: _82.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.NonExistenceProof;
                fromJSON(object: any): _82.NonExistenceProof;
                toJSON(message: _82.NonExistenceProof): unknown;
                fromPartial(object: Partial<_82.NonExistenceProof>): _82.NonExistenceProof;
            };
            CommitmentProof: {
                encode(message: _82.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.CommitmentProof;
                fromJSON(object: any): _82.CommitmentProof;
                toJSON(message: _82.CommitmentProof): unknown;
                fromPartial(object: Partial<_82.CommitmentProof>): _82.CommitmentProof;
            };
            LeafOp: {
                encode(message: _82.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.LeafOp;
                fromJSON(object: any): _82.LeafOp;
                toJSON(message: _82.LeafOp): unknown;
                fromPartial(object: Partial<_82.LeafOp>): _82.LeafOp;
            };
            InnerOp: {
                encode(message: _82.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.InnerOp;
                fromJSON(object: any): _82.InnerOp;
                toJSON(message: _82.InnerOp): unknown;
                fromPartial(object: Partial<_82.InnerOp>): _82.InnerOp;
            };
            ProofSpec: {
                encode(message: _82.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ProofSpec;
                fromJSON(object: any): _82.ProofSpec;
                toJSON(message: _82.ProofSpec): unknown;
                fromPartial(object: Partial<_82.ProofSpec>): _82.ProofSpec;
            };
            InnerSpec: {
                encode(message: _82.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.InnerSpec;
                fromJSON(object: any): _82.InnerSpec;
                toJSON(message: _82.InnerSpec): unknown;
                fromPartial(object: Partial<_82.InnerSpec>): _82.InnerSpec;
            };
            BatchProof: {
                encode(message: _82.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.BatchProof;
                fromJSON(object: any): _82.BatchProof;
                toJSON(message: _82.BatchProof): unknown;
                fromPartial(object: Partial<_82.BatchProof>): _82.BatchProof;
            };
            BatchEntry: {
                encode(message: _82.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.BatchEntry;
                fromJSON(object: any): _82.BatchEntry;
                toJSON(message: _82.BatchEntry): unknown;
                fromPartial(object: Partial<_82.BatchEntry>): _82.BatchEntry;
            };
            CompressedBatchProof: {
                encode(message: _82.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.CompressedBatchProof;
                fromJSON(object: any): _82.CompressedBatchProof;
                toJSON(message: _82.CompressedBatchProof): unknown;
                fromPartial(object: Partial<_82.CompressedBatchProof>): _82.CompressedBatchProof;
            };
            CompressedBatchEntry: {
                encode(message: _82.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.CompressedBatchEntry;
                fromJSON(object: any): _82.CompressedBatchEntry;
                toJSON(message: _82.CompressedBatchEntry): unknown;
                fromPartial(object: Partial<_82.CompressedBatchEntry>): _82.CompressedBatchEntry;
            };
            CompressedExistenceProof: {
                encode(message: _82.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.CompressedExistenceProof;
                fromJSON(object: any): _82.CompressedExistenceProof;
                toJSON(message: _82.CompressedExistenceProof): unknown;
                fromPartial(object: Partial<_82.CompressedExistenceProof>): _82.CompressedExistenceProof;
            };
            CompressedNonExistenceProof: {
                encode(message: _82.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.CompressedNonExistenceProof;
                fromJSON(object: any): _82.CompressedNonExistenceProof;
                toJSON(message: _82.CompressedNonExistenceProof): unknown;
                fromPartial(object: Partial<_82.CompressedNonExistenceProof>): _82.CompressedNonExistenceProof;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _83.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Module;
                    fromJSON(object: any): _83.Module;
                    toJSON(message: _83.Module): unknown;
                    fromPartial(object: Partial<_83.Module>): _83.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _288.MsgClientImpl;
            QueryClientImpl: typeof _268.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                inflation(request?: _86.QueryInflationRequest): Promise<_86.QueryInflationResponse>;
                annualProvisions(request?: _86.QueryAnnualProvisionsRequest): Promise<_86.QueryAnnualProvisionsResponse>;
            };
            MsgUpdateParams: {
                encode(message: _87.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgUpdateParams;
                fromJSON(object: any): _87.MsgUpdateParams;
                toJSON(message: _87.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_87.MsgUpdateParams>): _87.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _87.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgUpdateParamsResponse;
                fromJSON(_: any): _87.MsgUpdateParamsResponse;
                toJSON(_: _87.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_87.MsgUpdateParamsResponse>): _87.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _86.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryParamsRequest;
                fromJSON(_: any): _86.QueryParamsRequest;
                toJSON(_: _86.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_86.QueryParamsRequest>): _86.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _86.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryParamsResponse;
                fromJSON(object: any): _86.QueryParamsResponse;
                toJSON(message: _86.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_86.QueryParamsResponse>): _86.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _86.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryInflationRequest;
                fromJSON(_: any): _86.QueryInflationRequest;
                toJSON(_: _86.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_86.QueryInflationRequest>): _86.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _86.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryInflationResponse;
                fromJSON(object: any): _86.QueryInflationResponse;
                toJSON(message: _86.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_86.QueryInflationResponse>): _86.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _86.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _86.QueryAnnualProvisionsRequest;
                toJSON(_: _86.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_86.QueryAnnualProvisionsRequest>): _86.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _86.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _86.QueryAnnualProvisionsResponse;
                toJSON(message: _86.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_86.QueryAnnualProvisionsResponse>): _86.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _85.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Minter;
                fromJSON(object: any): _85.Minter;
                toJSON(message: _85.Minter): unknown;
                fromPartial(object: Partial<_85.Minter>): _85.Minter;
            };
            Params: {
                encode(message: _85.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Params;
                fromJSON(object: any): _85.Params;
                toJSON(message: _85.Params): unknown;
                fromPartial(object: Partial<_85.Params>): _85.Params;
            };
            GenesisState: {
                encode(message: _84.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.GenesisState;
                fromJSON(object: any): _84.GenesisState;
                toJSON(message: _84.GenesisState): unknown;
                fromPartial(object: Partial<_84.GenesisState>): _84.GenesisState;
            };
        };
    }
    namespace msg {
        namespace textual {
            const v1: {};
        }
        const v1: {};
    }
    namespace nft {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _90.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Module;
                    fromJSON(_: any): _90.Module;
                    toJSON(_: _90.Module): unknown;
                    fromPartial(_: Partial<_90.Module>): _90.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _289.MsgClientImpl;
            QueryClientImpl: typeof _269.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _94.QueryBalanceRequest): Promise<_94.QueryBalanceResponse>;
                owner(request: _94.QueryOwnerRequest): Promise<_94.QueryOwnerResponse>;
                supply(request: _94.QuerySupplyRequest): Promise<_94.QuerySupplyResponse>;
                nFTs(request: _94.QueryNFTsRequest): Promise<_94.QueryNFTsResponse>;
                nFT(request: _94.QueryNFTRequest): Promise<_94.QueryNFTResponse>;
                class(request: _94.QueryClassRequest): Promise<_94.QueryClassResponse>;
                classes(request?: _94.QueryClassesRequest): Promise<_94.QueryClassesResponse>;
            };
            MsgSend: {
                encode(message: _95.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgSend;
                fromJSON(object: any): _95.MsgSend;
                toJSON(message: _95.MsgSend): unknown;
                fromPartial(object: Partial<_95.MsgSend>): _95.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _95.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgSendResponse;
                fromJSON(_: any): _95.MsgSendResponse;
                toJSON(_: _95.MsgSendResponse): unknown;
                fromPartial(_: Partial<_95.MsgSendResponse>): _95.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _94.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryBalanceRequest;
                fromJSON(object: any): _94.QueryBalanceRequest;
                toJSON(message: _94.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_94.QueryBalanceRequest>): _94.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _94.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryBalanceResponse;
                fromJSON(object: any): _94.QueryBalanceResponse;
                toJSON(message: _94.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_94.QueryBalanceResponse>): _94.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _94.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryOwnerRequest;
                fromJSON(object: any): _94.QueryOwnerRequest;
                toJSON(message: _94.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_94.QueryOwnerRequest>): _94.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _94.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryOwnerResponse;
                fromJSON(object: any): _94.QueryOwnerResponse;
                toJSON(message: _94.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_94.QueryOwnerResponse>): _94.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _94.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QuerySupplyRequest;
                fromJSON(object: any): _94.QuerySupplyRequest;
                toJSON(message: _94.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_94.QuerySupplyRequest>): _94.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _94.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QuerySupplyResponse;
                fromJSON(object: any): _94.QuerySupplyResponse;
                toJSON(message: _94.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_94.QuerySupplyResponse>): _94.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _94.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryNFTsRequest;
                fromJSON(object: any): _94.QueryNFTsRequest;
                toJSON(message: _94.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_94.QueryNFTsRequest>): _94.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _94.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryNFTsResponse;
                fromJSON(object: any): _94.QueryNFTsResponse;
                toJSON(message: _94.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_94.QueryNFTsResponse>): _94.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _94.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryNFTRequest;
                fromJSON(object: any): _94.QueryNFTRequest;
                toJSON(message: _94.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_94.QueryNFTRequest>): _94.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _94.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryNFTResponse;
                fromJSON(object: any): _94.QueryNFTResponse;
                toJSON(message: _94.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_94.QueryNFTResponse>): _94.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _94.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryClassRequest;
                fromJSON(object: any): _94.QueryClassRequest;
                toJSON(message: _94.QueryClassRequest): unknown;
                fromPartial(object: Partial<_94.QueryClassRequest>): _94.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _94.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryClassResponse;
                fromJSON(object: any): _94.QueryClassResponse;
                toJSON(message: _94.QueryClassResponse): unknown;
                fromPartial(object: Partial<_94.QueryClassResponse>): _94.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _94.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryClassesRequest;
                fromJSON(object: any): _94.QueryClassesRequest;
                toJSON(message: _94.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_94.QueryClassesRequest>): _94.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _94.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryClassesResponse;
                fromJSON(object: any): _94.QueryClassesResponse;
                toJSON(message: _94.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_94.QueryClassesResponse>): _94.QueryClassesResponse;
            };
            Class: {
                encode(message: _93.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Class;
                fromJSON(object: any): _93.Class;
                toJSON(message: _93.Class): unknown;
                fromPartial(object: Partial<_93.Class>): _93.Class;
            };
            NFT: {
                encode(message: _93.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.NFT;
                fromJSON(object: any): _93.NFT;
                toJSON(message: _93.NFT): unknown;
                fromPartial(object: Partial<_93.NFT>): _93.NFT;
            };
            GenesisState: {
                encode(message: _92.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GenesisState;
                fromJSON(object: any): _92.GenesisState;
                toJSON(message: _92.GenesisState): unknown;
                fromPartial(object: Partial<_92.GenesisState>): _92.GenesisState;
            };
            Entry: {
                encode(message: _92.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Entry;
                fromJSON(object: any): _92.Entry;
                toJSON(message: _92.Entry): unknown;
                fromPartial(object: Partial<_92.Entry>): _92.Entry;
            };
            EventSend: {
                encode(message: _91.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.EventSend;
                fromJSON(object: any): _91.EventSend;
                toJSON(message: _91.EventSend): unknown;
                fromPartial(object: Partial<_91.EventSend>): _91.EventSend;
            };
            EventMint: {
                encode(message: _91.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.EventMint;
                fromJSON(object: any): _91.EventMint;
                toJSON(message: _91.EventMint): unknown;
                fromPartial(object: Partial<_91.EventMint>): _91.EventMint;
            };
            EventBurn: {
                encode(message: _91.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.EventBurn;
                fromJSON(object: any): _91.EventBurn;
                toJSON(message: _91.EventBurn): unknown;
                fromPartial(object: Partial<_91.EventBurn>): _91.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _96.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Module;
                    fromJSON(_: any): _96.Module;
                    toJSON(_: _96.Module): unknown;
                    fromPartial(_: Partial<_96.Module>): _96.Module;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _270.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _97.GetRequest): Promise<_97.GetResponse>;
                    list(request: _97.ListRequest): Promise<_97.ListResponse>;
                };
                GetRequest: {
                    encode(message: _97.GetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.GetRequest;
                    fromJSON(object: any): _97.GetRequest;
                    toJSON(message: _97.GetRequest): unknown;
                    fromPartial(object: Partial<_97.GetRequest>): _97.GetRequest;
                };
                GetResponse: {
                    encode(message: _97.GetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.GetResponse;
                    fromJSON(object: any): _97.GetResponse;
                    toJSON(message: _97.GetResponse): unknown;
                    fromPartial(object: Partial<_97.GetResponse>): _97.GetResponse;
                };
                ListRequest: {
                    encode(message: _97.ListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ListRequest;
                    fromJSON(object: any): _97.ListRequest;
                    toJSON(message: _97.ListRequest): unknown;
                    fromPartial(object: Partial<_97.ListRequest>): _97.ListRequest;
                };
                ListRequest_Prefix: {
                    encode(message: _97.ListRequest_Prefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ListRequest_Prefix;
                    fromJSON(object: any): _97.ListRequest_Prefix;
                    toJSON(message: _97.ListRequest_Prefix): unknown;
                    fromPartial(object: Partial<_97.ListRequest_Prefix>): _97.ListRequest_Prefix;
                };
                ListRequest_Range: {
                    encode(message: _97.ListRequest_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ListRequest_Range;
                    fromJSON(object: any): _97.ListRequest_Range;
                    toJSON(message: _97.ListRequest_Range): unknown;
                    fromPartial(object: Partial<_97.ListRequest_Range>): _97.ListRequest_Range;
                };
                ListResponse: {
                    encode(message: _97.ListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ListResponse;
                    fromJSON(object: any): _97.ListResponse;
                    toJSON(message: _97.ListResponse): unknown;
                    fromPartial(object: Partial<_97.ListResponse>): _97.ListResponse;
                };
                IndexValue: {
                    encode(message: _97.IndexValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.IndexValue;
                    fromJSON(object: any): _97.IndexValue;
                    toJSON(message: _97.IndexValue): unknown;
                    fromPartial(object: Partial<_97.IndexValue>): _97.IndexValue;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _98.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.TableDescriptor;
                fromJSON(object: any): _98.TableDescriptor;
                toJSON(message: _98.TableDescriptor): unknown;
                fromPartial(object: Partial<_98.TableDescriptor>): _98.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _98.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.PrimaryKeyDescriptor;
                fromJSON(object: any): _98.PrimaryKeyDescriptor;
                toJSON(message: _98.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_98.PrimaryKeyDescriptor>): _98.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _98.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.SecondaryIndexDescriptor;
                fromJSON(object: any): _98.SecondaryIndexDescriptor;
                toJSON(message: _98.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_98.SecondaryIndexDescriptor>): _98.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _98.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.SingletonDescriptor;
                fromJSON(object: any): _98.SingletonDescriptor;
                toJSON(message: _98.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_98.SingletonDescriptor>): _98.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _99.StorageType;
            storageTypeToJSON(object: _99.StorageType): string;
            StorageType: typeof _99.StorageType;
            StorageTypeSDKType: typeof _99.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _99.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ModuleSchemaDescriptor;
                fromJSON(object: any): _99.ModuleSchemaDescriptor;
                toJSON(message: _99.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_99.ModuleSchemaDescriptor>): _99.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _99.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _99.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _99.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_99.ModuleSchemaDescriptor_FileEntry>): _99.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _100.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Module;
                    fromJSON(_: any): _100.Module;
                    toJSON(_: _100.Module): unknown;
                    fromPartial(_: Partial<_100.Module>): _100.Module;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
                subspaces(request?: _102.QuerySubspacesRequest): Promise<_102.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _102.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryParamsRequest;
                fromJSON(object: any): _102.QueryParamsRequest;
                toJSON(message: _102.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_102.QueryParamsRequest>): _102.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _102.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryParamsResponse;
                fromJSON(object: any): _102.QueryParamsResponse;
                toJSON(message: _102.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_102.QueryParamsResponse>): _102.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _102.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QuerySubspacesRequest;
                fromJSON(_: any): _102.QuerySubspacesRequest;
                toJSON(_: _102.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_102.QuerySubspacesRequest>): _102.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _102.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QuerySubspacesResponse;
                fromJSON(object: any): _102.QuerySubspacesResponse;
                toJSON(message: _102.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_102.QuerySubspacesResponse>): _102.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _102.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Subspace;
                fromJSON(object: any): _102.Subspace;
                toJSON(message: _102.Subspace): unknown;
                fromPartial(object: Partial<_102.Subspace>): _102.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _101.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ParameterChangeProposal;
                fromJSON(object: any): _101.ParameterChangeProposal;
                toJSON(message: _101.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_101.ParameterChangeProposal>): _101.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _101.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ParamChange;
                fromJSON(object: any): _101.ParamChange;
                toJSON(message: _101.ParamChange): unknown;
                fromPartial(object: Partial<_101.ParamChange>): _101.ParamChange;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                encode(_: _104.FileDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FileDescriptorsRequest;
                fromJSON(_: any): _104.FileDescriptorsRequest;
                toJSON(_: _104.FileDescriptorsRequest): unknown;
                fromPartial(_: Partial<_104.FileDescriptorsRequest>): _104.FileDescriptorsRequest;
            };
            FileDescriptorsResponse: {
                encode(message: _104.FileDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FileDescriptorsResponse;
                fromJSON(object: any): _104.FileDescriptorsResponse;
                toJSON(message: _104.FileDescriptorsResponse): unknown;
                fromPartial(object: Partial<_104.FileDescriptorsResponse>): _104.FileDescriptorsResponse;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _105.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Module;
                    fromJSON(object: any): _105.Module;
                    toJSON(message: _105.Module): unknown;
                    fromPartial(object: Partial<_105.Module>): _105.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _290.MsgClientImpl;
            QueryClientImpl: typeof _272.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                signingInfo(request: _107.QuerySigningInfoRequest): Promise<_107.QuerySigningInfoResponse>;
                signingInfos(request?: _107.QuerySigningInfosRequest): Promise<_107.QuerySigningInfosResponse>;
            };
            MsgUnjail: {
                encode(message: _109.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgUnjail;
                fromJSON(object: any): _109.MsgUnjail;
                toJSON(message: _109.MsgUnjail): unknown;
                fromPartial(object: Partial<_109.MsgUnjail>): _109.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _109.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgUnjailResponse;
                fromJSON(_: any): _109.MsgUnjailResponse;
                toJSON(_: _109.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_109.MsgUnjailResponse>): _109.MsgUnjailResponse;
            };
            MsgUpdateParams: {
                encode(message: _109.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgUpdateParams;
                fromJSON(object: any): _109.MsgUpdateParams;
                toJSON(message: _109.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_109.MsgUpdateParams>): _109.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _109.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgUpdateParamsResponse;
                fromJSON(_: any): _109.MsgUpdateParamsResponse;
                toJSON(_: _109.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_109.MsgUpdateParamsResponse>): _109.MsgUpdateParamsResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _108.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ValidatorSigningInfo;
                fromJSON(object: any): _108.ValidatorSigningInfo;
                toJSON(message: _108.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_108.ValidatorSigningInfo>): _108.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _108.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Params;
                fromJSON(object: any): _108.Params;
                toJSON(message: _108.Params): unknown;
                fromPartial(object: Partial<_108.Params>): _108.Params;
            };
            QueryParamsRequest: {
                encode(_: _107.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryParamsRequest;
                fromJSON(_: any): _107.QueryParamsRequest;
                toJSON(_: _107.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_107.QueryParamsRequest>): _107.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _107.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryParamsResponse;
                fromJSON(object: any): _107.QueryParamsResponse;
                toJSON(message: _107.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_107.QueryParamsResponse>): _107.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _107.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QuerySigningInfoRequest;
                fromJSON(object: any): _107.QuerySigningInfoRequest;
                toJSON(message: _107.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_107.QuerySigningInfoRequest>): _107.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _107.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QuerySigningInfoResponse;
                fromJSON(object: any): _107.QuerySigningInfoResponse;
                toJSON(message: _107.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_107.QuerySigningInfoResponse>): _107.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _107.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QuerySigningInfosRequest;
                fromJSON(object: any): _107.QuerySigningInfosRequest;
                toJSON(message: _107.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_107.QuerySigningInfosRequest>): _107.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _107.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QuerySigningInfosResponse;
                fromJSON(object: any): _107.QuerySigningInfosResponse;
                toJSON(message: _107.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_107.QuerySigningInfosResponse>): _107.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisState;
                fromJSON(object: any): _106.GenesisState;
                toJSON(message: _106.GenesisState): unknown;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
            };
            SigningInfo: {
                encode(message: _106.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.SigningInfo;
                fromJSON(object: any): _106.SigningInfo;
                toJSON(message: _106.SigningInfo): unknown;
                fromPartial(object: Partial<_106.SigningInfo>): _106.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _106.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ValidatorMissedBlocks;
                fromJSON(object: any): _106.ValidatorMissedBlocks;
                toJSON(message: _106.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_106.ValidatorMissedBlocks>): _106.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _106.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MissedBlock;
                fromJSON(object: any): _106.MissedBlock;
                toJSON(message: _106.MissedBlock): unknown;
                fromPartial(object: Partial<_106.MissedBlock>): _106.MissedBlock;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _110.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Module;
                    fromJSON(object: any): _110.Module;
                    toJSON(message: _110.Module): unknown;
                    fromPartial(object: Partial<_110.Module>): _110.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _291.MsgClientImpl;
            QueryClientImpl: typeof _273.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _113.QueryValidatorsRequest): Promise<_113.QueryValidatorsResponse>;
                validator(request: _113.QueryValidatorRequest): Promise<_113.QueryValidatorResponse>;
                validatorDelegations(request: _113.QueryValidatorDelegationsRequest): Promise<_113.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _113.QueryValidatorUnbondingDelegationsRequest): Promise<_113.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _113.QueryDelegationRequest): Promise<_113.QueryDelegationResponse>;
                unbondingDelegation(request: _113.QueryUnbondingDelegationRequest): Promise<_113.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _113.QueryDelegatorDelegationsRequest): Promise<_113.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _113.QueryDelegatorUnbondingDelegationsRequest): Promise<_113.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _113.QueryRedelegationsRequest): Promise<_113.QueryRedelegationsResponse>;
                delegatorValidators(request: _113.QueryDelegatorValidatorsRequest): Promise<_113.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _113.QueryDelegatorValidatorRequest): Promise<_113.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _113.QueryHistoricalInfoRequest): Promise<_113.QueryHistoricalInfoResponse>;
                pool(request?: _113.QueryPoolRequest): Promise<_113.QueryPoolResponse>;
                params(request?: _113.QueryParamsRequest): Promise<_113.QueryParamsResponse>;
            };
            MsgCreateValidator: {
                encode(message: _115.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgCreateValidator;
                fromJSON(object: any): _115.MsgCreateValidator;
                toJSON(message: _115.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_115.MsgCreateValidator>): _115.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _115.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgCreateValidatorResponse;
                fromJSON(_: any): _115.MsgCreateValidatorResponse;
                toJSON(_: _115.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_115.MsgCreateValidatorResponse>): _115.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _115.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgEditValidator;
                fromJSON(object: any): _115.MsgEditValidator;
                toJSON(message: _115.MsgEditValidator): unknown;
                fromPartial(object: Partial<_115.MsgEditValidator>): _115.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _115.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgEditValidatorResponse;
                fromJSON(_: any): _115.MsgEditValidatorResponse;
                toJSON(_: _115.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_115.MsgEditValidatorResponse>): _115.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _115.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgDelegate;
                fromJSON(object: any): _115.MsgDelegate;
                toJSON(message: _115.MsgDelegate): unknown;
                fromPartial(object: Partial<_115.MsgDelegate>): _115.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _115.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgDelegateResponse;
                fromJSON(_: any): _115.MsgDelegateResponse;
                toJSON(_: _115.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_115.MsgDelegateResponse>): _115.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _115.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgBeginRedelegate;
                fromJSON(object: any): _115.MsgBeginRedelegate;
                toJSON(message: _115.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_115.MsgBeginRedelegate>): _115.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _115.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgBeginRedelegateResponse;
                fromJSON(object: any): _115.MsgBeginRedelegateResponse;
                toJSON(message: _115.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_115.MsgBeginRedelegateResponse>): _115.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _115.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUndelegate;
                fromJSON(object: any): _115.MsgUndelegate;
                toJSON(message: _115.MsgUndelegate): unknown;
                fromPartial(object: Partial<_115.MsgUndelegate>): _115.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _115.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUndelegateResponse;
                fromJSON(object: any): _115.MsgUndelegateResponse;
                toJSON(message: _115.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_115.MsgUndelegateResponse>): _115.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _115.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _115.MsgCancelUnbondingDelegation;
                toJSON(message: _115.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: Partial<_115.MsgCancelUnbondingDelegation>): _115.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _115.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _115.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _115.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: Partial<_115.MsgCancelUnbondingDelegationResponse>): _115.MsgCancelUnbondingDelegationResponse;
            };
            MsgUpdateParams: {
                encode(message: _115.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateParams;
                fromJSON(object: any): _115.MsgUpdateParams;
                toJSON(message: _115.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_115.MsgUpdateParams>): _115.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _115.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateParamsResponse;
                fromJSON(_: any): _115.MsgUpdateParamsResponse;
                toJSON(_: _115.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_115.MsgUpdateParamsResponse>): _115.MsgUpdateParamsResponse;
            };
            bondStatusFromJSON(object: any): _114.BondStatus;
            bondStatusToJSON(object: _114.BondStatus): string;
            infractionFromJSON(object: any): _114.Infraction;
            infractionToJSON(object: _114.Infraction): string;
            BondStatus: typeof _114.BondStatus;
            BondStatusSDKType: typeof _114.BondStatus;
            Infraction: typeof _114.Infraction;
            InfractionSDKType: typeof _114.Infraction;
            HistoricalInfo: {
                encode(message: _114.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.HistoricalInfo;
                fromJSON(object: any): _114.HistoricalInfo;
                toJSON(message: _114.HistoricalInfo): unknown;
                fromPartial(object: Partial<_114.HistoricalInfo>): _114.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _114.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.CommissionRates;
                fromJSON(object: any): _114.CommissionRates;
                toJSON(message: _114.CommissionRates): unknown;
                fromPartial(object: Partial<_114.CommissionRates>): _114.CommissionRates;
            };
            Commission: {
                encode(message: _114.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Commission;
                fromJSON(object: any): _114.Commission;
                toJSON(message: _114.Commission): unknown;
                fromPartial(object: Partial<_114.Commission>): _114.Commission;
            };
            Description: {
                encode(message: _114.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Description;
                fromJSON(object: any): _114.Description;
                toJSON(message: _114.Description): unknown;
                fromPartial(object: Partial<_114.Description>): _114.Description;
            };
            Validator: {
                encode(message: _114.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Validator;
                fromJSON(object: any): _114.Validator;
                toJSON(message: _114.Validator): unknown;
                fromPartial(object: Partial<_114.Validator>): _114.Validator;
            };
            ValAddresses: {
                encode(message: _114.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.ValAddresses;
                fromJSON(object: any): _114.ValAddresses;
                toJSON(message: _114.ValAddresses): unknown;
                fromPartial(object: Partial<_114.ValAddresses>): _114.ValAddresses;
            };
            DVPair: {
                encode(message: _114.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.DVPair;
                fromJSON(object: any): _114.DVPair;
                toJSON(message: _114.DVPair): unknown;
                fromPartial(object: Partial<_114.DVPair>): _114.DVPair;
            };
            DVPairs: {
                encode(message: _114.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.DVPairs;
                fromJSON(object: any): _114.DVPairs;
                toJSON(message: _114.DVPairs): unknown;
                fromPartial(object: Partial<_114.DVPairs>): _114.DVPairs;
            };
            DVVTriplet: {
                encode(message: _114.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.DVVTriplet;
                fromJSON(object: any): _114.DVVTriplet;
                toJSON(message: _114.DVVTriplet): unknown;
                fromPartial(object: Partial<_114.DVVTriplet>): _114.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _114.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.DVVTriplets;
                fromJSON(object: any): _114.DVVTriplets;
                toJSON(message: _114.DVVTriplets): unknown;
                fromPartial(object: Partial<_114.DVVTriplets>): _114.DVVTriplets;
            };
            Delegation: {
                encode(message: _114.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Delegation;
                fromJSON(object: any): _114.Delegation;
                toJSON(message: _114.Delegation): unknown;
                fromPartial(object: Partial<_114.Delegation>): _114.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _114.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.UnbondingDelegation;
                fromJSON(object: any): _114.UnbondingDelegation;
                toJSON(message: _114.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_114.UnbondingDelegation>): _114.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _114.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.UnbondingDelegationEntry;
                fromJSON(object: any): _114.UnbondingDelegationEntry;
                toJSON(message: _114.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_114.UnbondingDelegationEntry>): _114.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _114.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.RedelegationEntry;
                fromJSON(object: any): _114.RedelegationEntry;
                toJSON(message: _114.RedelegationEntry): unknown;
                fromPartial(object: Partial<_114.RedelegationEntry>): _114.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _114.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Redelegation;
                fromJSON(object: any): _114.Redelegation;
                toJSON(message: _114.Redelegation): unknown;
                fromPartial(object: Partial<_114.Redelegation>): _114.Redelegation;
            };
            Params: {
                encode(message: _114.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Params;
                fromJSON(object: any): _114.Params;
                toJSON(message: _114.Params): unknown;
                fromPartial(object: Partial<_114.Params>): _114.Params;
            };
            DelegationResponse: {
                encode(message: _114.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.DelegationResponse;
                fromJSON(object: any): _114.DelegationResponse;
                toJSON(message: _114.DelegationResponse): unknown;
                fromPartial(object: Partial<_114.DelegationResponse>): _114.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _114.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.RedelegationEntryResponse;
                fromJSON(object: any): _114.RedelegationEntryResponse;
                toJSON(message: _114.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_114.RedelegationEntryResponse>): _114.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _114.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.RedelegationResponse;
                fromJSON(object: any): _114.RedelegationResponse;
                toJSON(message: _114.RedelegationResponse): unknown;
                fromPartial(object: Partial<_114.RedelegationResponse>): _114.RedelegationResponse;
            };
            Pool: {
                encode(message: _114.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Pool;
                fromJSON(object: any): _114.Pool;
                toJSON(message: _114.Pool): unknown;
                fromPartial(object: Partial<_114.Pool>): _114.Pool;
            };
            ValidatorUpdates: {
                encode(message: _114.ValidatorUpdates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.ValidatorUpdates;
                fromJSON(object: any): _114.ValidatorUpdates;
                toJSON(message: _114.ValidatorUpdates): unknown;
                fromPartial(object: Partial<_114.ValidatorUpdates>): _114.ValidatorUpdates;
            };
            QueryValidatorsRequest: {
                encode(message: _113.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryValidatorsRequest;
                fromJSON(object: any): _113.QueryValidatorsRequest;
                toJSON(message: _113.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_113.QueryValidatorsRequest>): _113.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _113.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryValidatorsResponse;
                fromJSON(object: any): _113.QueryValidatorsResponse;
                toJSON(message: _113.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_113.QueryValidatorsResponse>): _113.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _113.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryValidatorRequest;
                fromJSON(object: any): _113.QueryValidatorRequest;
                toJSON(message: _113.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_113.QueryValidatorRequest>): _113.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _113.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryValidatorResponse;
                fromJSON(object: any): _113.QueryValidatorResponse;
                toJSON(message: _113.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_113.QueryValidatorResponse>): _113.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _113.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _113.QueryValidatorDelegationsRequest;
                toJSON(message: _113.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_113.QueryValidatorDelegationsRequest>): _113.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _113.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _113.QueryValidatorDelegationsResponse;
                toJSON(message: _113.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_113.QueryValidatorDelegationsResponse>): _113.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _113.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _113.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _113.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_113.QueryValidatorUnbondingDelegationsRequest>): _113.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _113.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _113.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _113.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_113.QueryValidatorUnbondingDelegationsResponse>): _113.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _113.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDelegationRequest;
                fromJSON(object: any): _113.QueryDelegationRequest;
                toJSON(message: _113.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_113.QueryDelegationRequest>): _113.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _113.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDelegationResponse;
                fromJSON(object: any): _113.QueryDelegationResponse;
                toJSON(message: _113.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_113.QueryDelegationResponse>): _113.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _113.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _113.QueryUnbondingDelegationRequest;
                toJSON(message: _113.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_113.QueryUnbondingDelegationRequest>): _113.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _113.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _113.QueryUnbondingDelegationResponse;
                toJSON(message: _113.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_113.QueryUnbondingDelegationResponse>): _113.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _113.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _113.QueryDelegatorDelegationsRequest;
                toJSON(message: _113.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_113.QueryDelegatorDelegationsRequest>): _113.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _113.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _113.QueryDelegatorDelegationsResponse;
                toJSON(message: _113.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_113.QueryDelegatorDelegationsResponse>): _113.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _113.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _113.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _113.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_113.QueryDelegatorUnbondingDelegationsRequest>): _113.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _113.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _113.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _113.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_113.QueryDelegatorUnbondingDelegationsResponse>): _113.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _113.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryRedelegationsRequest;
                fromJSON(object: any): _113.QueryRedelegationsRequest;
                toJSON(message: _113.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_113.QueryRedelegationsRequest>): _113.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _113.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryRedelegationsResponse;
                fromJSON(object: any): _113.QueryRedelegationsResponse;
                toJSON(message: _113.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_113.QueryRedelegationsResponse>): _113.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _113.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _113.QueryDelegatorValidatorsRequest;
                toJSON(message: _113.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_113.QueryDelegatorValidatorsRequest>): _113.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _113.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _113.QueryDelegatorValidatorsResponse;
                toJSON(message: _113.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_113.QueryDelegatorValidatorsResponse>): _113.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _113.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _113.QueryDelegatorValidatorRequest;
                toJSON(message: _113.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_113.QueryDelegatorValidatorRequest>): _113.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _113.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _113.QueryDelegatorValidatorResponse;
                toJSON(message: _113.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_113.QueryDelegatorValidatorResponse>): _113.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _113.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryHistoricalInfoRequest;
                fromJSON(object: any): _113.QueryHistoricalInfoRequest;
                toJSON(message: _113.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_113.QueryHistoricalInfoRequest>): _113.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _113.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryHistoricalInfoResponse;
                fromJSON(object: any): _113.QueryHistoricalInfoResponse;
                toJSON(message: _113.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_113.QueryHistoricalInfoResponse>): _113.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _113.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPoolRequest;
                fromJSON(_: any): _113.QueryPoolRequest;
                toJSON(_: _113.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_113.QueryPoolRequest>): _113.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _113.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPoolResponse;
                fromJSON(object: any): _113.QueryPoolResponse;
                toJSON(message: _113.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_113.QueryPoolResponse>): _113.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _113.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryParamsRequest;
                fromJSON(_: any): _113.QueryParamsRequest;
                toJSON(_: _113.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_113.QueryParamsRequest>): _113.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _113.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryParamsResponse;
                fromJSON(object: any): _113.QueryParamsResponse;
                toJSON(message: _113.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_113.QueryParamsResponse>): _113.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _112.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisState;
                fromJSON(object: any): _112.GenesisState;
                toJSON(message: _112.GenesisState): unknown;
                fromPartial(object: Partial<_112.GenesisState>): _112.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _112.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.LastValidatorPower;
                fromJSON(object: any): _112.LastValidatorPower;
                toJSON(message: _112.LastValidatorPower): unknown;
                fromPartial(object: Partial<_112.LastValidatorPower>): _112.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _111.AuthorizationType;
            authorizationTypeToJSON(object: _111.AuthorizationType): string;
            AuthorizationType: typeof _111.AuthorizationType;
            AuthorizationTypeSDKType: typeof _111.AuthorizationType;
            StakeAuthorization: {
                encode(message: _111.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.StakeAuthorization;
                fromJSON(object: any): _111.StakeAuthorization;
                toJSON(message: _111.StakeAuthorization): unknown;
                fromPartial(object: Partial<_111.StakeAuthorization>): _111.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _111.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.StakeAuthorization_Validators;
                fromJSON(object: any): _111.StakeAuthorization_Validators;
                toJSON(message: _111.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_111.StakeAuthorization_Validators>): _111.StakeAuthorization_Validators;
            };
        };
    }
    namespace store {
        namespace internal {
            namespace kv {
                const v1beta1: {
                    Pairs: {
                        encode(message: _116.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Pairs;
                        fromJSON(object: any): _116.Pairs;
                        toJSON(message: _116.Pairs): unknown;
                        fromPartial(object: Partial<_116.Pairs>): _116.Pairs;
                    };
                    Pair: {
                        encode(message: _116.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Pair;
                        fromJSON(object: any): _116.Pair;
                        toJSON(message: _116.Pair): unknown;
                        fromPartial(object: Partial<_116.Pair>): _116.Pair;
                    };
                };
            }
        }
        namespace snapshots {
            const v1: {
                Snapshot: {
                    encode(message: _117.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Snapshot;
                    fromJSON(object: any): _117.Snapshot;
                    toJSON(message: _117.Snapshot): unknown;
                    fromPartial(object: Partial<_117.Snapshot>): _117.Snapshot;
                };
                Metadata: {
                    encode(message: _117.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Metadata;
                    fromJSON(object: any): _117.Metadata;
                    toJSON(message: _117.Metadata): unknown;
                    fromPartial(object: Partial<_117.Metadata>): _117.Metadata;
                };
                SnapshotItem: {
                    encode(message: _117.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.SnapshotItem;
                    fromJSON(object: any): _117.SnapshotItem;
                    toJSON(message: _117.SnapshotItem): unknown;
                    fromPartial(object: Partial<_117.SnapshotItem>): _117.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _117.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.SnapshotStoreItem;
                    fromJSON(object: any): _117.SnapshotStoreItem;
                    toJSON(message: _117.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_117.SnapshotStoreItem>): _117.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _117.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.SnapshotIAVLItem;
                    fromJSON(object: any): _117.SnapshotIAVLItem;
                    toJSON(message: _117.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_117.SnapshotIAVLItem>): _117.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _117.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.SnapshotExtensionMeta;
                    fromJSON(object: any): _117.SnapshotExtensionMeta;
                    toJSON(message: _117.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_117.SnapshotExtensionMeta>): _117.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _117.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.SnapshotExtensionPayload;
                    fromJSON(object: any): _117.SnapshotExtensionPayload;
                    toJSON(message: _117.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_117.SnapshotExtensionPayload>): _117.SnapshotExtensionPayload;
                };
            };
        }
        namespace streaming {
            const abci: {
                ListenFinalizeBlockRequest: {
                    encode(message: _118.ListenFinalizeBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ListenFinalizeBlockRequest;
                    fromJSON(object: any): _118.ListenFinalizeBlockRequest;
                    toJSON(message: _118.ListenFinalizeBlockRequest): unknown;
                    fromPartial(object: Partial<_118.ListenFinalizeBlockRequest>): _118.ListenFinalizeBlockRequest;
                };
                ListenFinalizeBlockResponse: {
                    encode(_: _118.ListenFinalizeBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ListenFinalizeBlockResponse;
                    fromJSON(_: any): _118.ListenFinalizeBlockResponse;
                    toJSON(_: _118.ListenFinalizeBlockResponse): unknown;
                    fromPartial(_: Partial<_118.ListenFinalizeBlockResponse>): _118.ListenFinalizeBlockResponse;
                };
                ListenCommitRequest: {
                    encode(message: _118.ListenCommitRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ListenCommitRequest;
                    fromJSON(object: any): _118.ListenCommitRequest;
                    toJSON(message: _118.ListenCommitRequest): unknown;
                    fromPartial(object: Partial<_118.ListenCommitRequest>): _118.ListenCommitRequest;
                };
                ListenCommitResponse: {
                    encode(_: _118.ListenCommitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ListenCommitResponse;
                    fromJSON(_: any): _118.ListenCommitResponse;
                    toJSON(_: _118.ListenCommitResponse): unknown;
                    fromPartial(_: Partial<_118.ListenCommitResponse>): _118.ListenCommitResponse;
                };
            };
        }
        const v1beta1: {
            StoreKVPair: {
                encode(message: _120.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.StoreKVPair;
                fromJSON(object: any): _120.StoreKVPair;
                toJSON(message: _120.StoreKVPair): unknown;
                fromPartial(object: Partial<_120.StoreKVPair>): _120.StoreKVPair;
            };
            BlockMetadata: {
                encode(message: _120.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.BlockMetadata;
                fromJSON(object: any): _120.BlockMetadata;
                toJSON(message: _120.BlockMetadata): unknown;
                fromPartial(object: Partial<_120.BlockMetadata>): _120.BlockMetadata;
            };
            CommitInfo: {
                encode(message: _119.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.CommitInfo;
                fromJSON(object: any): _119.CommitInfo;
                toJSON(message: _119.CommitInfo): unknown;
                fromPartial(object: Partial<_119.CommitInfo>): _119.CommitInfo;
            };
            StoreInfo: {
                encode(message: _119.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.StoreInfo;
                fromJSON(object: any): _119.StoreInfo;
                toJSON(message: _119.StoreInfo): unknown;
                fromPartial(object: Partial<_119.StoreInfo>): _119.StoreInfo;
            };
            CommitID: {
                encode(message: _119.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.CommitID;
                fromJSON(object: any): _119.CommitID;
                toJSON(message: _119.CommitID): unknown;
                fromPartial(object: Partial<_119.CommitID>): _119.CommitID;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    encode(message: _121.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Config;
                    fromJSON(object: any): _121.Config;
                    toJSON(message: _121.Config): unknown;
                    fromPartial(object: Partial<_121.Config>): _121.Config;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _122.SignMode;
                signModeToJSON(object: _122.SignMode): string;
                SignMode: typeof _122.SignMode;
                SignModeSDKType: typeof _122.SignMode;
                SignatureDescriptors: {
                    encode(message: _122.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SignatureDescriptors;
                    fromJSON(object: any): _122.SignatureDescriptors;
                    toJSON(message: _122.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_122.SignatureDescriptors>): _122.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _122.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SignatureDescriptor;
                    fromJSON(object: any): _122.SignatureDescriptor;
                    toJSON(message: _122.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_122.SignatureDescriptor>): _122.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _122.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SignatureDescriptor_Data;
                    fromJSON(object: any): _122.SignatureDescriptor_Data;
                    toJSON(message: _122.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_122.SignatureDescriptor_Data>): _122.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _122.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _122.SignatureDescriptor_Data_Single;
                    toJSON(message: _122.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_122.SignatureDescriptor_Data_Single>): _122.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _122.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _122.SignatureDescriptor_Data_Multi;
                    toJSON(message: _122.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_122.SignatureDescriptor_Data_Multi>): _122.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _274.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _123.SimulateRequest): Promise<_123.SimulateResponse>;
                getTx(request: _123.GetTxRequest): Promise<_123.GetTxResponse>;
                broadcastTx(request: _123.BroadcastTxRequest): Promise<_123.BroadcastTxResponse>;
                getTxsEvent(request: _123.GetTxsEventRequest): Promise<_123.GetTxsEventResponse>;
                getBlockWithTxs(request: _123.GetBlockWithTxsRequest): Promise<_123.GetBlockWithTxsResponse>;
                txDecode(request: _123.TxDecodeRequest): Promise<_123.TxDecodeResponse>;
                txEncode(request: _123.TxEncodeRequest): Promise<_123.TxEncodeResponse>;
                txEncodeAmino(request: _123.TxEncodeAminoRequest): Promise<_123.TxEncodeAminoResponse>;
                txDecodeAmino(request: _123.TxDecodeAminoRequest): Promise<_123.TxDecodeAminoResponse>;
            };
            Tx: {
                encode(message: _124.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Tx;
                fromJSON(object: any): _124.Tx;
                toJSON(message: _124.Tx): unknown;
                fromPartial(object: Partial<_124.Tx>): _124.Tx;
            };
            TxRaw: {
                encode(message: _124.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.TxRaw;
                fromJSON(object: any): _124.TxRaw;
                toJSON(message: _124.TxRaw): unknown;
                fromPartial(object: Partial<_124.TxRaw>): _124.TxRaw;
            };
            SignDoc: {
                encode(message: _124.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SignDoc;
                fromJSON(object: any): _124.SignDoc;
                toJSON(message: _124.SignDoc): unknown;
                fromPartial(object: Partial<_124.SignDoc>): _124.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _124.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SignDocDirectAux;
                fromJSON(object: any): _124.SignDocDirectAux;
                toJSON(message: _124.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_124.SignDocDirectAux>): _124.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _124.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.TxBody;
                fromJSON(object: any): _124.TxBody;
                toJSON(message: _124.TxBody): unknown;
                fromPartial(object: Partial<_124.TxBody>): _124.TxBody;
            };
            AuthInfo: {
                encode(message: _124.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AuthInfo;
                fromJSON(object: any): _124.AuthInfo;
                toJSON(message: _124.AuthInfo): unknown;
                fromPartial(object: Partial<_124.AuthInfo>): _124.AuthInfo;
            };
            SignerInfo: {
                encode(message: _124.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SignerInfo;
                fromJSON(object: any): _124.SignerInfo;
                toJSON(message: _124.SignerInfo): unknown;
                fromPartial(object: Partial<_124.SignerInfo>): _124.SignerInfo;
            };
            ModeInfo: {
                encode(message: _124.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ModeInfo;
                fromJSON(object: any): _124.ModeInfo;
                toJSON(message: _124.ModeInfo): unknown;
                fromPartial(object: Partial<_124.ModeInfo>): _124.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _124.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ModeInfo_Single;
                fromJSON(object: any): _124.ModeInfo_Single;
                toJSON(message: _124.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_124.ModeInfo_Single>): _124.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _124.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ModeInfo_Multi;
                fromJSON(object: any): _124.ModeInfo_Multi;
                toJSON(message: _124.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_124.ModeInfo_Multi>): _124.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _124.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Fee;
                fromJSON(object: any): _124.Fee;
                toJSON(message: _124.Fee): unknown;
                fromPartial(object: Partial<_124.Fee>): _124.Fee;
            };
            Tip: {
                encode(message: _124.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Tip;
                fromJSON(object: any): _124.Tip;
                toJSON(message: _124.Tip): unknown;
                fromPartial(object: Partial<_124.Tip>): _124.Tip;
            };
            AuxSignerData: {
                encode(message: _124.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AuxSignerData;
                fromJSON(object: any): _124.AuxSignerData;
                toJSON(message: _124.AuxSignerData): unknown;
                fromPartial(object: Partial<_124.AuxSignerData>): _124.AuxSignerData;
            };
            orderByFromJSON(object: any): _123.OrderBy;
            orderByToJSON(object: _123.OrderBy): string;
            broadcastModeFromJSON(object: any): _123.BroadcastMode;
            broadcastModeToJSON(object: _123.BroadcastMode): string;
            OrderBy: typeof _123.OrderBy;
            OrderBySDKType: typeof _123.OrderBy;
            BroadcastMode: typeof _123.BroadcastMode;
            BroadcastModeSDKType: typeof _123.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _123.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.GetTxsEventRequest;
                fromJSON(object: any): _123.GetTxsEventRequest;
                toJSON(message: _123.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_123.GetTxsEventRequest>): _123.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _123.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.GetTxsEventResponse;
                fromJSON(object: any): _123.GetTxsEventResponse;
                toJSON(message: _123.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_123.GetTxsEventResponse>): _123.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _123.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.BroadcastTxRequest;
                fromJSON(object: any): _123.BroadcastTxRequest;
                toJSON(message: _123.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_123.BroadcastTxRequest>): _123.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _123.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.BroadcastTxResponse;
                fromJSON(object: any): _123.BroadcastTxResponse;
                toJSON(message: _123.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_123.BroadcastTxResponse>): _123.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _123.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SimulateRequest;
                fromJSON(object: any): _123.SimulateRequest;
                toJSON(message: _123.SimulateRequest): unknown;
                fromPartial(object: Partial<_123.SimulateRequest>): _123.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _123.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SimulateResponse;
                fromJSON(object: any): _123.SimulateResponse;
                toJSON(message: _123.SimulateResponse): unknown;
                fromPartial(object: Partial<_123.SimulateResponse>): _123.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _123.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.GetTxRequest;
                fromJSON(object: any): _123.GetTxRequest;
                toJSON(message: _123.GetTxRequest): unknown;
                fromPartial(object: Partial<_123.GetTxRequest>): _123.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _123.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.GetTxResponse;
                fromJSON(object: any): _123.GetTxResponse;
                toJSON(message: _123.GetTxResponse): unknown;
                fromPartial(object: Partial<_123.GetTxResponse>): _123.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _123.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.GetBlockWithTxsRequest;
                fromJSON(object: any): _123.GetBlockWithTxsRequest;
                toJSON(message: _123.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_123.GetBlockWithTxsRequest>): _123.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _123.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.GetBlockWithTxsResponse;
                fromJSON(object: any): _123.GetBlockWithTxsResponse;
                toJSON(message: _123.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_123.GetBlockWithTxsResponse>): _123.GetBlockWithTxsResponse;
            };
            TxDecodeRequest: {
                encode(message: _123.TxDecodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TxDecodeRequest;
                fromJSON(object: any): _123.TxDecodeRequest;
                toJSON(message: _123.TxDecodeRequest): unknown;
                fromPartial(object: Partial<_123.TxDecodeRequest>): _123.TxDecodeRequest;
            };
            TxDecodeResponse: {
                encode(message: _123.TxDecodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TxDecodeResponse;
                fromJSON(object: any): _123.TxDecodeResponse;
                toJSON(message: _123.TxDecodeResponse): unknown;
                fromPartial(object: Partial<_123.TxDecodeResponse>): _123.TxDecodeResponse;
            };
            TxEncodeRequest: {
                encode(message: _123.TxEncodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TxEncodeRequest;
                fromJSON(object: any): _123.TxEncodeRequest;
                toJSON(message: _123.TxEncodeRequest): unknown;
                fromPartial(object: Partial<_123.TxEncodeRequest>): _123.TxEncodeRequest;
            };
            TxEncodeResponse: {
                encode(message: _123.TxEncodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TxEncodeResponse;
                fromJSON(object: any): _123.TxEncodeResponse;
                toJSON(message: _123.TxEncodeResponse): unknown;
                fromPartial(object: Partial<_123.TxEncodeResponse>): _123.TxEncodeResponse;
            };
            TxEncodeAminoRequest: {
                encode(message: _123.TxEncodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TxEncodeAminoRequest;
                fromJSON(object: any): _123.TxEncodeAminoRequest;
                toJSON(message: _123.TxEncodeAminoRequest): unknown;
                fromPartial(object: Partial<_123.TxEncodeAminoRequest>): _123.TxEncodeAminoRequest;
            };
            TxEncodeAminoResponse: {
                encode(message: _123.TxEncodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TxEncodeAminoResponse;
                fromJSON(object: any): _123.TxEncodeAminoResponse;
                toJSON(message: _123.TxEncodeAminoResponse): unknown;
                fromPartial(object: Partial<_123.TxEncodeAminoResponse>): _123.TxEncodeAminoResponse;
            };
            TxDecodeAminoRequest: {
                encode(message: _123.TxDecodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TxDecodeAminoRequest;
                fromJSON(object: any): _123.TxDecodeAminoRequest;
                toJSON(message: _123.TxDecodeAminoRequest): unknown;
                fromPartial(object: Partial<_123.TxDecodeAminoRequest>): _123.TxDecodeAminoRequest;
            };
            TxDecodeAminoResponse: {
                encode(message: _123.TxDecodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TxDecodeAminoResponse;
                fromJSON(object: any): _123.TxDecodeAminoResponse;
                toJSON(message: _123.TxDecodeAminoResponse): unknown;
                fromPartial(object: Partial<_123.TxDecodeAminoResponse>): _123.TxDecodeAminoResponse;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _125.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Module;
                    fromJSON(object: any): _125.Module;
                    toJSON(message: _125.Module): unknown;
                    fromPartial(object: Partial<_125.Module>): _125.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _292.MsgClientImpl;
            QueryClientImpl: typeof _275.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _126.QueryCurrentPlanRequest): Promise<_126.QueryCurrentPlanResponse>;
                appliedPlan(request: _126.QueryAppliedPlanRequest): Promise<_126.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _126.QueryUpgradedConsensusStateRequest): Promise<_126.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _126.QueryModuleVersionsRequest): Promise<_126.QueryModuleVersionsResponse>;
                authority(request?: _126.QueryAuthorityRequest): Promise<_126.QueryAuthorityResponse>;
            };
            Plan: {
                encode(message: _128.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Plan;
                fromJSON(object: any): _128.Plan;
                toJSON(message: _128.Plan): unknown;
                fromPartial(object: Partial<_128.Plan>): _128.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _128.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.SoftwareUpgradeProposal;
                fromJSON(object: any): _128.SoftwareUpgradeProposal;
                toJSON(message: _128.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_128.SoftwareUpgradeProposal>): _128.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _128.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _128.CancelSoftwareUpgradeProposal;
                toJSON(message: _128.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_128.CancelSoftwareUpgradeProposal>): _128.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _128.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ModuleVersion;
                fromJSON(object: any): _128.ModuleVersion;
                toJSON(message: _128.ModuleVersion): unknown;
                fromPartial(object: Partial<_128.ModuleVersion>): _128.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _127.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgSoftwareUpgrade;
                fromJSON(object: any): _127.MsgSoftwareUpgrade;
                toJSON(message: _127.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_127.MsgSoftwareUpgrade>): _127.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _127.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _127.MsgSoftwareUpgradeResponse;
                toJSON(_: _127.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_127.MsgSoftwareUpgradeResponse>): _127.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _127.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgCancelUpgrade;
                fromJSON(object: any): _127.MsgCancelUpgrade;
                toJSON(message: _127.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_127.MsgCancelUpgrade>): _127.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _127.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgCancelUpgradeResponse;
                fromJSON(_: any): _127.MsgCancelUpgradeResponse;
                toJSON(_: _127.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_127.MsgCancelUpgradeResponse>): _127.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _126.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryCurrentPlanRequest;
                fromJSON(_: any): _126.QueryCurrentPlanRequest;
                toJSON(_: _126.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_126.QueryCurrentPlanRequest>): _126.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _126.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryCurrentPlanResponse;
                fromJSON(object: any): _126.QueryCurrentPlanResponse;
                toJSON(message: _126.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_126.QueryCurrentPlanResponse>): _126.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _126.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAppliedPlanRequest;
                fromJSON(object: any): _126.QueryAppliedPlanRequest;
                toJSON(message: _126.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_126.QueryAppliedPlanRequest>): _126.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _126.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAppliedPlanResponse;
                fromJSON(object: any): _126.QueryAppliedPlanResponse;
                toJSON(message: _126.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_126.QueryAppliedPlanResponse>): _126.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _126.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _126.QueryUpgradedConsensusStateRequest;
                toJSON(message: _126.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_126.QueryUpgradedConsensusStateRequest>): _126.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _126.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _126.QueryUpgradedConsensusStateResponse;
                toJSON(message: _126.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_126.QueryUpgradedConsensusStateResponse>): _126.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _126.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryModuleVersionsRequest;
                fromJSON(object: any): _126.QueryModuleVersionsRequest;
                toJSON(message: _126.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_126.QueryModuleVersionsRequest>): _126.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _126.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryModuleVersionsResponse;
                fromJSON(object: any): _126.QueryModuleVersionsResponse;
                toJSON(message: _126.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_126.QueryModuleVersionsResponse>): _126.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _126.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAuthorityRequest;
                fromJSON(_: any): _126.QueryAuthorityRequest;
                toJSON(_: _126.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_126.QueryAuthorityRequest>): _126.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _126.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAuthorityResponse;
                fromJSON(object: any): _126.QueryAuthorityResponse;
                toJSON(message: _126.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_126.QueryAuthorityResponse>): _126.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _129.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Module;
                    fromJSON(_: any): _129.Module;
                    toJSON(_: _129.Module): unknown;
                    fromPartial(_: Partial<_129.Module>): _129.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _293.MsgClientImpl;
            BaseVestingAccount: {
                encode(message: _131.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.BaseVestingAccount;
                fromJSON(object: any): _131.BaseVestingAccount;
                toJSON(message: _131.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_131.BaseVestingAccount>): _131.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _131.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ContinuousVestingAccount;
                fromJSON(object: any): _131.ContinuousVestingAccount;
                toJSON(message: _131.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_131.ContinuousVestingAccount>): _131.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _131.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.DelayedVestingAccount;
                fromJSON(object: any): _131.DelayedVestingAccount;
                toJSON(message: _131.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_131.DelayedVestingAccount>): _131.DelayedVestingAccount;
            };
            Period: {
                encode(message: _131.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Period;
                fromJSON(object: any): _131.Period;
                toJSON(message: _131.Period): unknown;
                fromPartial(object: Partial<_131.Period>): _131.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _131.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.PeriodicVestingAccount;
                fromJSON(object: any): _131.PeriodicVestingAccount;
                toJSON(message: _131.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_131.PeriodicVestingAccount>): _131.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _131.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.PermanentLockedAccount;
                fromJSON(object: any): _131.PermanentLockedAccount;
                toJSON(message: _131.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_131.PermanentLockedAccount>): _131.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _130.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgCreateVestingAccount;
                fromJSON(object: any): _130.MsgCreateVestingAccount;
                toJSON(message: _130.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_130.MsgCreateVestingAccount>): _130.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _130.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _130.MsgCreateVestingAccountResponse;
                toJSON(_: _130.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_130.MsgCreateVestingAccountResponse>): _130.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _130.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _130.MsgCreatePermanentLockedAccount;
                toJSON(message: _130.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_130.MsgCreatePermanentLockedAccount>): _130.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _130.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _130.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _130.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_130.MsgCreatePermanentLockedAccountResponse>): _130.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _130.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _130.MsgCreatePeriodicVestingAccount;
                toJSON(message: _130.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_130.MsgCreatePeriodicVestingAccount>): _130.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _130.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _130.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _130.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_130.MsgCreatePeriodicVestingAccountResponse>): _130.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _276.MsgClientImpl;
                };
                authz: {
                    v1beta1: _277.MsgClientImpl;
                };
                bank: {
                    v1beta1: _278.MsgClientImpl;
                };
                circuit: {
                    v1: _279.MsgClientImpl;
                };
                consensus: {
                    v1: _280.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _281.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _282.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _283.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _284.MsgClientImpl;
                };
                gov: {
                    v1: _285.MsgClientImpl;
                    v1beta1: _286.MsgClientImpl;
                };
                group: {
                    v1: _287.MsgClientImpl;
                };
                mint: {
                    v1beta1: _288.MsgClientImpl;
                };
                nft: {
                    v1beta1: _289.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _290.MsgClientImpl;
                };
                staking: {
                    v1beta1: _291.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _292.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _293.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _6.QueryConfigRequest): Promise<_6.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _10.QueryAccountsRequest): Promise<_10.QueryAccountsResponse>;
                        account(request: _10.QueryAccountRequest): Promise<_10.QueryAccountResponse>;
                        accountAddressByID(request: _10.QueryAccountAddressByIDRequest): Promise<_10.QueryAccountAddressByIDResponse>;
                        params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                        moduleAccounts(request?: _10.QueryModuleAccountsRequest): Promise<_10.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _10.QueryModuleAccountByNameRequest): Promise<_10.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _10.Bech32PrefixRequest): Promise<_10.Bech32PrefixResponse>;
                        addressBytesToString(request: _10.AddressBytesToStringRequest): Promise<_10.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _10.AddressStringToBytesRequest): Promise<_10.AddressStringToBytesResponse>;
                        accountInfo(request: _10.QueryAccountInfoRequest): Promise<_10.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _16.QueryGrantsRequest): Promise<_16.QueryGrantsResponse>;
                        granterGrants(request: _16.QueryGranterGrantsRequest): Promise<_16.QueryGranterGrantsResponse>;
                        granteeGrants(request: _16.QueryGranteeGrantsRequest): Promise<_16.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _19.AppOptionsRequest): Promise<_19.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _24.QueryBalanceRequest): Promise<_24.QueryBalanceResponse>;
                        allBalances(request: _24.QueryAllBalancesRequest): Promise<_24.QueryAllBalancesResponse>;
                        spendableBalances(request: _24.QuerySpendableBalancesRequest): Promise<_24.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _24.QuerySpendableBalanceByDenomRequest): Promise<_24.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _24.QueryTotalSupplyRequest): Promise<_24.QueryTotalSupplyResponse>;
                        supplyOf(request: _24.QuerySupplyOfRequest): Promise<_24.QuerySupplyOfResponse>;
                        params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                        denomMetadata(request: _24.QueryDenomMetadataRequest): Promise<_24.QueryDenomMetadataResponse>;
                        denomMetadataByQueryString(request: _24.QueryDenomMetadataByQueryStringRequest): Promise<_24.QueryDenomMetadataByQueryStringResponse>;
                        denomsMetadata(request?: _24.QueryDenomsMetadataRequest): Promise<_24.QueryDenomsMetadataResponse>;
                        denomOwners(request: _24.QueryDenomOwnersRequest): Promise<_24.QueryDenomOwnersResponse>;
                        denomOwnersByQuery(request: _24.QueryDenomOwnersByQueryRequest): Promise<_24.QueryDenomOwnersByQueryResponse>;
                        sendEnabled(request: _24.QuerySendEnabledRequest): Promise<_24.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _27.ConfigRequest): Promise<_27.ConfigResponse>;
                            status(request?: _27.StatusRequest): Promise<_27.StatusResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _31.GetNodeInfoRequest): Promise<_31.GetNodeInfoResponse>;
                            getSyncing(request?: _31.GetSyncingRequest): Promise<_31.GetSyncingResponse>;
                            getLatestBlock(request?: _31.GetLatestBlockRequest): Promise<_31.GetLatestBlockResponse>;
                            getBlockByHeight(request: _31.GetBlockByHeightRequest): Promise<_31.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _31.GetLatestValidatorSetRequest): Promise<_31.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _31.GetValidatorSetByHeightRequest): Promise<_31.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _31.ABCIQueryRequest): Promise<_31.ABCIQueryResponse>;
                        };
                    };
                };
                circuit: {
                    v1: {
                        account(request: _35.QueryAccountRequest): Promise<_35.AccountResponse>;
                        accounts(request?: _35.QueryAccountsRequest): Promise<_35.AccountsResponse>;
                        disabledList(request?: _35.QueryDisabledListRequest): Promise<_35.DisabledListResponse>;
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                        validatorDistributionInfo(request: _53.QueryValidatorDistributionInfoRequest): Promise<_53.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _53.QueryValidatorOutstandingRewardsRequest): Promise<_53.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _53.QueryValidatorCommissionRequest): Promise<_53.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _53.QueryValidatorSlashesRequest): Promise<_53.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _53.QueryDelegationRewardsRequest): Promise<_53.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _53.QueryDelegationTotalRewardsRequest): Promise<_53.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _53.QueryDelegatorValidatorsRequest): Promise<_53.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _53.QueryDelegatorWithdrawAddressRequest): Promise<_53.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _53.QueryCommunityPoolRequest): Promise<_53.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _58.QueryEvidenceRequest): Promise<_58.QueryEvidenceResponse>;
                        allEvidence(request?: _58.QueryAllEvidenceRequest): Promise<_58.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _63.QueryAllowanceRequest): Promise<_63.QueryAllowanceResponse>;
                        allowances(request: _63.QueryAllowancesRequest): Promise<_63.QueryAllowancesResponse>;
                        allowancesByGranter(request: _63.QueryAllowancesByGranterRequest): Promise<_63.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        constitution(request?: _70.QueryConstitutionRequest): Promise<_70.QueryConstitutionResponse>;
                        proposal(request: _70.QueryProposalRequest): Promise<_70.QueryProposalResponse>;
                        proposals(request: _70.QueryProposalsRequest): Promise<_70.QueryProposalsResponse>;
                        vote(request: _70.QueryVoteRequest): Promise<_70.QueryVoteResponse>;
                        votes(request: _70.QueryVotesRequest): Promise<_70.QueryVotesResponse>;
                        params(request: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                        deposit(request: _70.QueryDepositRequest): Promise<_70.QueryDepositResponse>;
                        deposits(request: _70.QueryDepositsRequest): Promise<_70.QueryDepositsResponse>;
                        tallyResult(request: _70.QueryTallyResultRequest): Promise<_70.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _74.QueryProposalRequest): Promise<_74.QueryProposalResponse>;
                        proposals(request: _74.QueryProposalsRequest): Promise<_74.QueryProposalsResponse>;
                        vote(request: _74.QueryVoteRequest): Promise<_74.QueryVoteResponse>;
                        votes(request: _74.QueryVotesRequest): Promise<_74.QueryVotesResponse>;
                        params(request: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                        deposit(request: _74.QueryDepositRequest): Promise<_74.QueryDepositResponse>;
                        deposits(request: _74.QueryDepositsRequest): Promise<_74.QueryDepositsResponse>;
                        tallyResult(request: _74.QueryTallyResultRequest): Promise<_74.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _79.QueryGroupInfoRequest): Promise<_79.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _79.QueryGroupPolicyInfoRequest): Promise<_79.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _79.QueryGroupMembersRequest): Promise<_79.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _79.QueryGroupsByAdminRequest): Promise<_79.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _79.QueryGroupPoliciesByGroupRequest): Promise<_79.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _79.QueryGroupPoliciesByAdminRequest): Promise<_79.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _79.QueryProposalRequest): Promise<_79.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _79.QueryProposalsByGroupPolicyRequest): Promise<_79.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _79.QueryVoteByProposalVoterRequest): Promise<_79.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _79.QueryVotesByProposalRequest): Promise<_79.QueryVotesByProposalResponse>;
                        votesByVoter(request: _79.QueryVotesByVoterRequest): Promise<_79.QueryVotesByVoterResponse>;
                        groupsByMember(request: _79.QueryGroupsByMemberRequest): Promise<_79.QueryGroupsByMemberResponse>;
                        tallyResult(request: _79.QueryTallyResultRequest): Promise<_79.QueryTallyResultResponse>;
                        groups(request?: _79.QueryGroupsRequest): Promise<_79.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                        inflation(request?: _86.QueryInflationRequest): Promise<_86.QueryInflationResponse>;
                        annualProvisions(request?: _86.QueryAnnualProvisionsRequest): Promise<_86.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _94.QueryBalanceRequest): Promise<_94.QueryBalanceResponse>;
                        owner(request: _94.QueryOwnerRequest): Promise<_94.QueryOwnerResponse>;
                        supply(request: _94.QuerySupplyRequest): Promise<_94.QuerySupplyResponse>;
                        nFTs(request: _94.QueryNFTsRequest): Promise<_94.QueryNFTsResponse>;
                        nFT(request: _94.QueryNFTRequest): Promise<_94.QueryNFTResponse>;
                        class(request: _94.QueryClassRequest): Promise<_94.QueryClassResponse>;
                        classes(request?: _94.QueryClassesRequest): Promise<_94.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _97.GetRequest): Promise<_97.GetResponse>;
                            list(request: _97.ListRequest): Promise<_97.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
                        subspaces(request?: _102.QuerySubspacesRequest): Promise<_102.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                        signingInfo(request: _107.QuerySigningInfoRequest): Promise<_107.QuerySigningInfoResponse>;
                        signingInfos(request?: _107.QuerySigningInfosRequest): Promise<_107.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _113.QueryValidatorsRequest): Promise<_113.QueryValidatorsResponse>;
                        validator(request: _113.QueryValidatorRequest): Promise<_113.QueryValidatorResponse>;
                        validatorDelegations(request: _113.QueryValidatorDelegationsRequest): Promise<_113.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _113.QueryValidatorUnbondingDelegationsRequest): Promise<_113.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _113.QueryDelegationRequest): Promise<_113.QueryDelegationResponse>;
                        unbondingDelegation(request: _113.QueryUnbondingDelegationRequest): Promise<_113.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _113.QueryDelegatorDelegationsRequest): Promise<_113.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _113.QueryDelegatorUnbondingDelegationsRequest): Promise<_113.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _113.QueryRedelegationsRequest): Promise<_113.QueryRedelegationsResponse>;
                        delegatorValidators(request: _113.QueryDelegatorValidatorsRequest): Promise<_113.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _113.QueryDelegatorValidatorRequest): Promise<_113.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _113.QueryHistoricalInfoRequest): Promise<_113.QueryHistoricalInfoResponse>;
                        pool(request?: _113.QueryPoolRequest): Promise<_113.QueryPoolResponse>;
                        params(request?: _113.QueryParamsRequest): Promise<_113.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _123.SimulateRequest): Promise<_123.SimulateResponse>;
                        getTx(request: _123.GetTxRequest): Promise<_123.GetTxResponse>;
                        broadcastTx(request: _123.BroadcastTxRequest): Promise<_123.BroadcastTxResponse>;
                        getTxsEvent(request: _123.GetTxsEventRequest): Promise<_123.GetTxsEventResponse>;
                        getBlockWithTxs(request: _123.GetBlockWithTxsRequest): Promise<_123.GetBlockWithTxsResponse>;
                        txDecode(request: _123.TxDecodeRequest): Promise<_123.TxDecodeResponse>;
                        txEncode(request: _123.TxEncodeRequest): Promise<_123.TxEncodeResponse>;
                        txEncodeAmino(request: _123.TxEncodeAminoRequest): Promise<_123.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _123.TxDecodeAminoRequest): Promise<_123.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _126.QueryCurrentPlanRequest): Promise<_126.QueryCurrentPlanResponse>;
                        appliedPlan(request: _126.QueryAppliedPlanRequest): Promise<_126.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _126.QueryUpgradedConsensusStateRequest): Promise<_126.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _126.QueryModuleVersionsRequest): Promise<_126.QueryModuleVersionsResponse>;
                        authority(request?: _126.QueryAuthorityRequest): Promise<_126.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
