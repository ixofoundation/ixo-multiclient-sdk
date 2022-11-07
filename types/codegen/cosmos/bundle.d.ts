import * as _1 from "./app/v1alpha1/config";
import * as _2 from "./app/v1alpha1/module";
import * as _3 from "./app/v1alpha1/query";
import * as _4 from "./auth/v1beta1/auth";
import * as _5 from "./auth/v1beta1/genesis";
import * as _6 from "./auth/v1beta1/query";
import * as _7 from "./authz/v1beta1/authz";
import * as _8 from "./authz/v1beta1/event";
import * as _9 from "./authz/v1beta1/genesis";
import * as _10 from "./authz/v1beta1/query";
import * as _11 from "./authz/v1beta1/tx";
import * as _12 from "./bank/v1beta1/authz";
import * as _13 from "./bank/v1beta1/bank";
import * as _14 from "./bank/v1beta1/genesis";
import * as _15 from "./bank/v1beta1/query";
import * as _16 from "./bank/v1beta1/tx";
import * as _17 from "./base/abci/v1beta1/abci";
import * as _18 from "./base/kv/v1beta1/kv";
import * as _19 from "./base/query/v1beta1/pagination";
import * as _20 from "./base/reflection/v1beta1/reflection";
import * as _21 from "./base/reflection/v2alpha1/reflection";
import * as _22 from "./base/snapshots/v1beta1/snapshot";
import * as _23 from "./base/store/v1beta1/commit_info";
import * as _24 from "./base/store/v1beta1/listening";
import * as _25 from "./base/tendermint/v1beta1/query";
import * as _26 from "./base/v1beta1/coin";
import * as _27 from "./capability/v1beta1/capability";
import * as _28 from "./capability/v1beta1/genesis";
import * as _29 from "./crisis/v1beta1/genesis";
import * as _30 from "./crisis/v1beta1/tx";
import * as _31 from "./crypto/ed25519/keys";
import * as _32 from "./crypto/hd/v1/hd";
import * as _33 from "./crypto/keyring/v1/record";
import * as _34 from "./crypto/multisig/keys";
import * as _35 from "./crypto/secp256k1/keys";
import * as _36 from "./crypto/secp256r1/keys";
import * as _37 from "./distribution/v1beta1/distribution";
import * as _38 from "./distribution/v1beta1/genesis";
import * as _39 from "./distribution/v1beta1/query";
import * as _40 from "./distribution/v1beta1/tx";
import * as _41 from "./evidence/v1beta1/evidence";
import * as _42 from "./evidence/v1beta1/genesis";
import * as _43 from "./evidence/v1beta1/query";
import * as _44 from "./evidence/v1beta1/tx";
import * as _45 from "./feegrant/v1beta1/feegrant";
import * as _46 from "./feegrant/v1beta1/genesis";
import * as _47 from "./feegrant/v1beta1/query";
import * as _48 from "./feegrant/v1beta1/tx";
import * as _49 from "./genutil/v1beta1/genesis";
import * as _50 from "./gov/v1/genesis";
import * as _51 from "./gov/v1/gov";
import * as _52 from "./gov/v1/query";
import * as _53 from "./gov/v1/tx";
import * as _54 from "./gov/v1beta1/genesis";
import * as _55 from "./gov/v1beta1/gov";
import * as _56 from "./gov/v1beta1/query";
import * as _57 from "./gov/v1beta1/tx";
import * as _58 from "./group/v1/events";
import * as _59 from "./group/v1/genesis";
import * as _60 from "./group/v1/query";
import * as _61 from "./group/v1/tx";
import * as _62 from "./group/v1/types";
import * as _63 from "./mint/v1beta1/genesis";
import * as _64 from "./mint/v1beta1/mint";
import * as _65 from "./mint/v1beta1/query";
import * as _67 from "./nft/v1beta1/event";
import * as _68 from "./nft/v1beta1/genesis";
import * as _69 from "./nft/v1beta1/nft";
import * as _70 from "./nft/v1beta1/query";
import * as _71 from "./nft/v1beta1/tx";
import * as _72 from "./orm/v1/orm";
import * as _73 from "./orm/v1alpha1/schema";
import * as _74 from "./params/v1beta1/params";
import * as _75 from "./params/v1beta1/query";
import * as _76 from "./slashing/v1beta1/genesis";
import * as _77 from "./slashing/v1beta1/query";
import * as _78 from "./slashing/v1beta1/slashing";
import * as _79 from "./slashing/v1beta1/tx";
import * as _80 from "./staking/v1beta1/authz";
import * as _81 from "./staking/v1beta1/genesis";
import * as _82 from "./staking/v1beta1/query";
import * as _83 from "./staking/v1beta1/staking";
import * as _84 from "./staking/v1beta1/tx";
import * as _85 from "./tx/signing/v1beta1/signing";
import * as _86 from "./tx/v1beta1/service";
import * as _87 from "./tx/v1beta1/tx";
import * as _88 from "./upgrade/v1beta1/query";
import * as _89 from "./upgrade/v1beta1/tx";
import * as _90 from "./upgrade/v1beta1/upgrade";
import * as _91 from "./vesting/v1beta1/tx";
import * as _92 from "./vesting/v1beta1/vesting";
import * as _112 from "./app/v1alpha1/query.rpc.Query";
import * as _113 from "./auth/v1beta1/query.rpc.Query";
import * as _114 from "./authz/v1beta1/query.rpc.Query";
import * as _115 from "./bank/v1beta1/query.rpc.Query";
import * as _116 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _117 from "./distribution/v1beta1/query.rpc.Query";
import * as _118 from "./evidence/v1beta1/query.rpc.Query";
import * as _119 from "./feegrant/v1beta1/query.rpc.Query";
import * as _120 from "./gov/v1/query.rpc.Query";
import * as _121 from "./gov/v1beta1/query.rpc.Query";
import * as _122 from "./group/v1/query.rpc.Query";
import * as _123 from "./mint/v1beta1/query.rpc.Query";
import * as _124 from "./nft/v1beta1/query.rpc.Query";
import * as _125 from "./params/v1beta1/query.rpc.Query";
import * as _126 from "./slashing/v1beta1/query.rpc.Query";
import * as _127 from "./staking/v1beta1/query.rpc.Query";
import * as _128 from "./tx/v1beta1/service.rpc.Service";
import * as _129 from "./upgrade/v1beta1/query.rpc.Query";
import * as _130 from "./authz/v1beta1/tx.rpc.msg";
import * as _131 from "./bank/v1beta1/tx.rpc.msg";
import * as _132 from "./crisis/v1beta1/tx.rpc.msg";
import * as _133 from "./distribution/v1beta1/tx.rpc.msg";
import * as _134 from "./evidence/v1beta1/tx.rpc.msg";
import * as _135 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _136 from "./gov/v1/tx.rpc.msg";
import * as _137 from "./gov/v1beta1/tx.rpc.msg";
import * as _138 from "./group/v1/tx.rpc.msg";
import * as _139 from "./nft/v1beta1/tx.rpc.msg";
import * as _140 from "./slashing/v1beta1/tx.rpc.msg";
import * as _141 from "./staking/v1beta1/tx.rpc.msg";
import * as _142 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _143 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _112.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _3.QueryConfigRequest): Promise<_3.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _3.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryConfigRequest;
                fromJSON(_: any): _3.QueryConfigRequest;
                toJSON(_: _3.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_3.QueryConfigRequest>): _3.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _3.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryConfigResponse;
                fromJSON(object: any): _3.QueryConfigResponse;
                toJSON(message: _3.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_3.QueryConfigResponse>): _3.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _2.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ModuleDescriptor;
                fromJSON(object: any): _2.ModuleDescriptor;
                toJSON(message: _2.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_2.ModuleDescriptor>): _2.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _2.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.PackageReference;
                fromJSON(object: any): _2.PackageReference;
                toJSON(message: _2.PackageReference): unknown;
                fromPartial(object: Partial<_2.PackageReference>): _2.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _2.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.MigrateFromInfo;
                fromJSON(object: any): _2.MigrateFromInfo;
                toJSON(message: _2.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_2.MigrateFromInfo>): _2.MigrateFromInfo;
            };
            Config: {
                encode(message: _1.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Config;
                fromJSON(object: any): _1.Config;
                toJSON(message: _1.Config): unknown;
                fromPartial(object: Partial<_1.Config>): _1.Config;
            };
            ModuleConfig: {
                encode(message: _1.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ModuleConfig;
                fromJSON(object: any): _1.ModuleConfig;
                toJSON(message: _1.ModuleConfig): unknown;
                fromPartial(object: Partial<_1.ModuleConfig>): _1.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _113.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _6.QueryAccountsRequest): Promise<_6.QueryAccountsResponse>;
                account(request: _6.QueryAccountRequest): Promise<_6.QueryAccountResponse>;
                params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                moduleAccounts(request?: _6.QueryModuleAccountsRequest): Promise<_6.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _6.Bech32PrefixRequest): Promise<_6.Bech32PrefixResponse>;
                addressBytesToString(request: _6.AddressBytesToStringRequest): Promise<_6.AddressBytesToStringResponse>;
                addressStringToBytes(request: _6.AddressStringToBytesRequest): Promise<_6.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _6.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryAccountsRequest;
                fromJSON(object: any): _6.QueryAccountsRequest;
                toJSON(message: _6.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_6.QueryAccountsRequest>): _6.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _6.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryAccountsResponse;
                fromJSON(object: any): _6.QueryAccountsResponse;
                toJSON(message: _6.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_6.QueryAccountsResponse>): _6.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _6.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryAccountRequest;
                fromJSON(object: any): _6.QueryAccountRequest;
                toJSON(message: _6.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_6.QueryAccountRequest>): _6.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _6.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryModuleAccountsRequest;
                fromJSON(_: any): _6.QueryModuleAccountsRequest;
                toJSON(_: _6.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_6.QueryModuleAccountsRequest>): _6.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _6.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryParamsResponse;
                fromJSON(object: any): _6.QueryParamsResponse;
                toJSON(message: _6.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_6.QueryParamsResponse>): _6.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _6.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryAccountResponse;
                fromJSON(object: any): _6.QueryAccountResponse;
                toJSON(message: _6.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_6.QueryAccountResponse>): _6.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _6.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryParamsRequest;
                fromJSON(_: any): _6.QueryParamsRequest;
                toJSON(_: _6.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_6.QueryParamsRequest>): _6.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _6.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryModuleAccountsResponse;
                fromJSON(object: any): _6.QueryModuleAccountsResponse;
                toJSON(message: _6.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_6.QueryModuleAccountsResponse>): _6.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _6.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Bech32PrefixRequest;
                fromJSON(_: any): _6.Bech32PrefixRequest;
                toJSON(_: _6.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_6.Bech32PrefixRequest>): _6.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _6.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Bech32PrefixResponse;
                fromJSON(object: any): _6.Bech32PrefixResponse;
                toJSON(message: _6.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_6.Bech32PrefixResponse>): _6.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _6.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.AddressBytesToStringRequest;
                fromJSON(object: any): _6.AddressBytesToStringRequest;
                toJSON(message: _6.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_6.AddressBytesToStringRequest>): _6.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _6.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.AddressBytesToStringResponse;
                fromJSON(object: any): _6.AddressBytesToStringResponse;
                toJSON(message: _6.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_6.AddressBytesToStringResponse>): _6.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _6.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.AddressStringToBytesRequest;
                fromJSON(object: any): _6.AddressStringToBytesRequest;
                toJSON(message: _6.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_6.AddressStringToBytesRequest>): _6.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _6.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.AddressStringToBytesResponse;
                fromJSON(object: any): _6.AddressStringToBytesResponse;
                toJSON(message: _6.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_6.AddressStringToBytesResponse>): _6.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _5.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GenesisState;
                fromJSON(object: any): _5.GenesisState;
                toJSON(message: _5.GenesisState): unknown;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
            };
            BaseAccount: {
                encode(message: _4.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.BaseAccount;
                fromJSON(object: any): _4.BaseAccount;
                toJSON(message: _4.BaseAccount): unknown;
                fromPartial(object: Partial<_4.BaseAccount>): _4.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _4.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.ModuleAccount;
                fromJSON(object: any): _4.ModuleAccount;
                toJSON(message: _4.ModuleAccount): unknown;
                fromPartial(object: Partial<_4.ModuleAccount>): _4.ModuleAccount;
            };
            Params: {
                encode(message: _4.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Params;
                fromJSON(object: any): _4.Params;
                toJSON(message: _4.Params): unknown;
                fromPartial(object: Partial<_4.Params>): _4.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _130.MsgClientImpl;
            QueryClientImpl: typeof _114.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _10.QueryGrantsRequest): Promise<_10.QueryGrantsResponse>;
                granterGrants(request: _10.QueryGranterGrantsRequest): Promise<_10.QueryGranterGrantsResponse>;
                granteeGrants(request: _10.QueryGranteeGrantsRequest): Promise<_10.QueryGranteeGrantsResponse>;
            };
            MsgGrant: {
                encode(message: _11.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgGrant;
                fromJSON(object: any): _11.MsgGrant;
                toJSON(message: _11.MsgGrant): unknown;
                fromPartial(object: Partial<_11.MsgGrant>): _11.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _11.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgExecResponse;
                fromJSON(object: any): _11.MsgExecResponse;
                toJSON(message: _11.MsgExecResponse): unknown;
                fromPartial(object: Partial<_11.MsgExecResponse>): _11.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _11.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgExec;
                fromJSON(object: any): _11.MsgExec;
                toJSON(message: _11.MsgExec): unknown;
                fromPartial(object: Partial<_11.MsgExec>): _11.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _11.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgGrantResponse;
                fromJSON(_: any): _11.MsgGrantResponse;
                toJSON(_: _11.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_11.MsgGrantResponse>): _11.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _11.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgRevoke;
                fromJSON(object: any): _11.MsgRevoke;
                toJSON(message: _11.MsgRevoke): unknown;
                fromPartial(object: Partial<_11.MsgRevoke>): _11.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _11.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgRevokeResponse;
                fromJSON(_: any): _11.MsgRevokeResponse;
                toJSON(_: _11.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_11.MsgRevokeResponse>): _11.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _10.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryGrantsRequest;
                fromJSON(object: any): _10.QueryGrantsRequest;
                toJSON(message: _10.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_10.QueryGrantsRequest>): _10.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _10.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryGrantsResponse;
                fromJSON(object: any): _10.QueryGrantsResponse;
                toJSON(message: _10.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_10.QueryGrantsResponse>): _10.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _10.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryGranterGrantsRequest;
                fromJSON(object: any): _10.QueryGranterGrantsRequest;
                toJSON(message: _10.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_10.QueryGranterGrantsRequest>): _10.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _10.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryGranterGrantsResponse;
                fromJSON(object: any): _10.QueryGranterGrantsResponse;
                toJSON(message: _10.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_10.QueryGranterGrantsResponse>): _10.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _10.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryGranteeGrantsRequest;
                fromJSON(object: any): _10.QueryGranteeGrantsRequest;
                toJSON(message: _10.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_10.QueryGranteeGrantsRequest>): _10.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _10.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryGranteeGrantsResponse;
                fromJSON(object: any): _10.QueryGranteeGrantsResponse;
                toJSON(message: _10.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_10.QueryGranteeGrantsResponse>): _10.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _9.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.GenesisState;
                fromJSON(object: any): _9.GenesisState;
                toJSON(message: _9.GenesisState): unknown;
                fromPartial(object: Partial<_9.GenesisState>): _9.GenesisState;
            };
            EventGrant: {
                encode(message: _8.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.EventGrant;
                fromJSON(object: any): _8.EventGrant;
                toJSON(message: _8.EventGrant): unknown;
                fromPartial(object: Partial<_8.EventGrant>): _8.EventGrant;
            };
            EventRevoke: {
                encode(message: _8.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.EventRevoke;
                fromJSON(object: any): _8.EventRevoke;
                toJSON(message: _8.EventRevoke): unknown;
                fromPartial(object: Partial<_8.EventRevoke>): _8.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _7.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.GenericAuthorization;
                fromJSON(object: any): _7.GenericAuthorization;
                toJSON(message: _7.GenericAuthorization): unknown;
                fromPartial(object: Partial<_7.GenericAuthorization>): _7.GenericAuthorization;
            };
            Grant: {
                encode(message: _7.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Grant;
                fromJSON(object: any): _7.Grant;
                toJSON(message: _7.Grant): unknown;
                fromPartial(object: Partial<_7.Grant>): _7.Grant;
            };
            GrantAuthorization: {
                encode(message: _7.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.GrantAuthorization;
                fromJSON(object: any): _7.GrantAuthorization;
                toJSON(message: _7.GrantAuthorization): unknown;
                fromPartial(object: Partial<_7.GrantAuthorization>): _7.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _7.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.GrantQueueItem;
                fromJSON(object: any): _7.GrantQueueItem;
                toJSON(message: _7.GrantQueueItem): unknown;
                fromPartial(object: Partial<_7.GrantQueueItem>): _7.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _131.MsgClientImpl;
            QueryClientImpl: typeof _115.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _15.QueryBalanceRequest): Promise<_15.QueryBalanceResponse>;
                allBalances(request: _15.QueryAllBalancesRequest): Promise<_15.QueryAllBalancesResponse>;
                spendableBalances(request: _15.QuerySpendableBalancesRequest): Promise<_15.QuerySpendableBalancesResponse>;
                totalSupply(request?: _15.QueryTotalSupplyRequest): Promise<_15.QueryTotalSupplyResponse>;
                supplyOf(request: _15.QuerySupplyOfRequest): Promise<_15.QuerySupplyOfResponse>;
                params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                denomMetadata(request: _15.QueryDenomMetadataRequest): Promise<_15.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _15.QueryDenomsMetadataRequest): Promise<_15.QueryDenomsMetadataResponse>;
                denomOwners(request: _15.QueryDenomOwnersRequest): Promise<_15.QueryDenomOwnersResponse>;
            };
            MsgSend: {
                encode(message: _16.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgSend;
                fromJSON(object: any): _16.MsgSend;
                toJSON(message: _16.MsgSend): unknown;
                fromPartial(object: Partial<_16.MsgSend>): _16.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _16.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgSendResponse;
                fromJSON(_: any): _16.MsgSendResponse;
                toJSON(_: _16.MsgSendResponse): unknown;
                fromPartial(_: Partial<_16.MsgSendResponse>): _16.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _16.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgMultiSend;
                fromJSON(object: any): _16.MsgMultiSend;
                toJSON(message: _16.MsgMultiSend): unknown;
                fromPartial(object: Partial<_16.MsgMultiSend>): _16.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _16.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgMultiSendResponse;
                fromJSON(_: any): _16.MsgMultiSendResponse;
                toJSON(_: _16.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_16.MsgMultiSendResponse>): _16.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _15.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryBalanceRequest;
                fromJSON(object: any): _15.QueryBalanceRequest;
                toJSON(message: _15.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_15.QueryBalanceRequest>): _15.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _15.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryBalanceResponse;
                fromJSON(object: any): _15.QueryBalanceResponse;
                toJSON(message: _15.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_15.QueryBalanceResponse>): _15.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _15.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryAllBalancesRequest;
                fromJSON(object: any): _15.QueryAllBalancesRequest;
                toJSON(message: _15.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_15.QueryAllBalancesRequest>): _15.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _15.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryAllBalancesResponse;
                fromJSON(object: any): _15.QueryAllBalancesResponse;
                toJSON(message: _15.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_15.QueryAllBalancesResponse>): _15.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _15.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QuerySpendableBalancesRequest;
                fromJSON(object: any): _15.QuerySpendableBalancesRequest;
                toJSON(message: _15.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_15.QuerySpendableBalancesRequest>): _15.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _15.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QuerySpendableBalancesResponse;
                fromJSON(object: any): _15.QuerySpendableBalancesResponse;
                toJSON(message: _15.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_15.QuerySpendableBalancesResponse>): _15.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _15.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryTotalSupplyRequest;
                fromJSON(object: any): _15.QueryTotalSupplyRequest;
                toJSON(message: _15.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_15.QueryTotalSupplyRequest>): _15.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _15.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryTotalSupplyResponse;
                fromJSON(object: any): _15.QueryTotalSupplyResponse;
                toJSON(message: _15.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_15.QueryTotalSupplyResponse>): _15.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _15.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QuerySupplyOfRequest;
                fromJSON(object: any): _15.QuerySupplyOfRequest;
                toJSON(message: _15.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_15.QuerySupplyOfRequest>): _15.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _15.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QuerySupplyOfResponse;
                fromJSON(object: any): _15.QuerySupplyOfResponse;
                toJSON(message: _15.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_15.QuerySupplyOfResponse>): _15.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _15.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryParamsRequest;
                fromJSON(_: any): _15.QueryParamsRequest;
                toJSON(_: _15.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_15.QueryParamsRequest>): _15.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _15.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryParamsResponse;
                fromJSON(object: any): _15.QueryParamsResponse;
                toJSON(message: _15.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_15.QueryParamsResponse>): _15.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _15.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomsMetadataRequest;
                fromJSON(object: any): _15.QueryDenomsMetadataRequest;
                toJSON(message: _15.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_15.QueryDenomsMetadataRequest>): _15.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _15.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomsMetadataResponse;
                fromJSON(object: any): _15.QueryDenomsMetadataResponse;
                toJSON(message: _15.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_15.QueryDenomsMetadataResponse>): _15.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _15.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomMetadataRequest;
                fromJSON(object: any): _15.QueryDenomMetadataRequest;
                toJSON(message: _15.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_15.QueryDenomMetadataRequest>): _15.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _15.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomMetadataResponse;
                fromJSON(object: any): _15.QueryDenomMetadataResponse;
                toJSON(message: _15.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_15.QueryDenomMetadataResponse>): _15.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _15.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomOwnersRequest;
                fromJSON(object: any): _15.QueryDenomOwnersRequest;
                toJSON(message: _15.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_15.QueryDenomOwnersRequest>): _15.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _15.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DenomOwner;
                fromJSON(object: any): _15.DenomOwner;
                toJSON(message: _15.DenomOwner): unknown;
                fromPartial(object: Partial<_15.DenomOwner>): _15.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _15.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomOwnersResponse;
                fromJSON(object: any): _15.QueryDenomOwnersResponse;
                toJSON(message: _15.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_15.QueryDenomOwnersResponse>): _15.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _14.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GenesisState;
                fromJSON(object: any): _14.GenesisState;
                toJSON(message: _14.GenesisState): unknown;
                fromPartial(object: Partial<_14.GenesisState>): _14.GenesisState;
            };
            Balance: {
                encode(message: _14.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Balance;
                fromJSON(object: any): _14.Balance;
                toJSON(message: _14.Balance): unknown;
                fromPartial(object: Partial<_14.Balance>): _14.Balance;
            };
            Params: {
                encode(message: _13.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Params;
                fromJSON(object: any): _13.Params;
                toJSON(message: _13.Params): unknown;
                fromPartial(object: Partial<_13.Params>): _13.Params;
            };
            SendEnabled: {
                encode(message: _13.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SendEnabled;
                fromJSON(object: any): _13.SendEnabled;
                toJSON(message: _13.SendEnabled): unknown;
                fromPartial(object: Partial<_13.SendEnabled>): _13.SendEnabled;
            };
            Input: {
                encode(message: _13.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Input;
                fromJSON(object: any): _13.Input;
                toJSON(message: _13.Input): unknown;
                fromPartial(object: Partial<_13.Input>): _13.Input;
            };
            Output: {
                encode(message: _13.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Output;
                fromJSON(object: any): _13.Output;
                toJSON(message: _13.Output): unknown;
                fromPartial(object: Partial<_13.Output>): _13.Output;
            };
            Supply: {
                encode(message: _13.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Supply;
                fromJSON(object: any): _13.Supply;
                toJSON(message: _13.Supply): unknown;
                fromPartial(object: Partial<_13.Supply>): _13.Supply;
            };
            DenomUnit: {
                encode(message: _13.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.DenomUnit;
                fromJSON(object: any): _13.DenomUnit;
                toJSON(message: _13.DenomUnit): unknown;
                fromPartial(object: Partial<_13.DenomUnit>): _13.DenomUnit;
            };
            Metadata: {
                encode(message: _13.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Metadata;
                fromJSON(object: any): _13.Metadata;
                toJSON(message: _13.Metadata): unknown;
                fromPartial(object: Partial<_13.Metadata>): _13.Metadata;
            };
            SendAuthorization: {
                encode(message: _12.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.SendAuthorization;
                fromJSON(object: any): _12.SendAuthorization;
                toJSON(message: _12.SendAuthorization): unknown;
                fromPartial(object: Partial<_12.SendAuthorization>): _12.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _17.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.TxResponse;
                    fromJSON(object: any): _17.TxResponse;
                    toJSON(message: _17.TxResponse): unknown;
                    fromPartial(object: Partial<_17.TxResponse>): _17.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _17.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ABCIMessageLog;
                    fromJSON(object: any): _17.ABCIMessageLog;
                    toJSON(message: _17.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_17.ABCIMessageLog>): _17.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _17.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.StringEvent;
                    fromJSON(object: any): _17.StringEvent;
                    toJSON(message: _17.StringEvent): unknown;
                    fromPartial(object: Partial<_17.StringEvent>): _17.StringEvent;
                };
                Attribute: {
                    encode(message: _17.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Attribute;
                    fromJSON(object: any): _17.Attribute;
                    toJSON(message: _17.Attribute): unknown;
                    fromPartial(object: Partial<_17.Attribute>): _17.Attribute;
                };
                GasInfo: {
                    encode(message: _17.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GasInfo;
                    fromJSON(object: any): _17.GasInfo;
                    toJSON(message: _17.GasInfo): unknown;
                    fromPartial(object: Partial<_17.GasInfo>): _17.GasInfo;
                };
                Result: {
                    encode(message: _17.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Result;
                    fromJSON(object: any): _17.Result;
                    toJSON(message: _17.Result): unknown;
                    fromPartial(object: Partial<_17.Result>): _17.Result;
                };
                SimulationResponse: {
                    encode(message: _17.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.SimulationResponse;
                    fromJSON(object: any): _17.SimulationResponse;
                    toJSON(message: _17.SimulationResponse): unknown;
                    fromPartial(object: Partial<_17.SimulationResponse>): _17.SimulationResponse;
                };
                MsgData: {
                    encode(message: _17.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgData;
                    fromJSON(object: any): _17.MsgData;
                    toJSON(message: _17.MsgData): unknown;
                    fromPartial(object: Partial<_17.MsgData>): _17.MsgData;
                };
                TxMsgData: {
                    encode(message: _17.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.TxMsgData;
                    fromJSON(object: any): _17.TxMsgData;
                    toJSON(message: _17.TxMsgData): unknown;
                    fromPartial(object: Partial<_17.TxMsgData>): _17.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _17.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.SearchTxsResult;
                    fromJSON(object: any): _17.SearchTxsResult;
                    toJSON(message: _17.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_17.SearchTxsResult>): _17.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _18.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Pairs;
                    fromJSON(object: any): _18.Pairs;
                    toJSON(message: _18.Pairs): unknown;
                    fromPartial(object: Partial<_18.Pairs>): _18.Pairs;
                };
                Pair: {
                    encode(message: _18.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Pair;
                    fromJSON(object: any): _18.Pair;
                    toJSON(message: _18.Pair): unknown;
                    fromPartial(object: Partial<_18.Pair>): _18.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _19.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PageRequest;
                    fromJSON(object: any): _19.PageRequest;
                    toJSON(message: _19.PageRequest): unknown;
                    fromPartial(object: Partial<_19.PageRequest>): _19.PageRequest;
                };
                PageResponse: {
                    encode(message: _19.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PageResponse;
                    fromJSON(object: any): _19.PageResponse;
                    toJSON(message: _19.PageResponse): unknown;
                    fromPartial(object: Partial<_19.PageResponse>): _19.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _20.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ListAllInterfacesRequest;
                    fromJSON(_: any): _20.ListAllInterfacesRequest;
                    toJSON(_: _20.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_20.ListAllInterfacesRequest>): _20.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _20.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ListAllInterfacesResponse;
                    fromJSON(object: any): _20.ListAllInterfacesResponse;
                    toJSON(message: _20.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_20.ListAllInterfacesResponse>): _20.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _20.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ListImplementationsRequest;
                    fromJSON(object: any): _20.ListImplementationsRequest;
                    toJSON(message: _20.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_20.ListImplementationsRequest>): _20.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _20.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ListImplementationsResponse;
                    fromJSON(object: any): _20.ListImplementationsResponse;
                    toJSON(message: _20.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_20.ListImplementationsResponse>): _20.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _21.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.AppDescriptor;
                    fromJSON(object: any): _21.AppDescriptor;
                    toJSON(message: _21.AppDescriptor): unknown;
                    fromPartial(object: Partial<_21.AppDescriptor>): _21.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _21.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.TxDescriptor;
                    fromJSON(object: any): _21.TxDescriptor;
                    toJSON(message: _21.TxDescriptor): unknown;
                    fromPartial(object: Partial<_21.TxDescriptor>): _21.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _21.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.AuthnDescriptor;
                    fromJSON(object: any): _21.AuthnDescriptor;
                    toJSON(message: _21.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_21.AuthnDescriptor>): _21.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _21.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.SigningModeDescriptor;
                    fromJSON(object: any): _21.SigningModeDescriptor;
                    toJSON(message: _21.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_21.SigningModeDescriptor>): _21.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _21.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ChainDescriptor;
                    fromJSON(object: any): _21.ChainDescriptor;
                    toJSON(message: _21.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_21.ChainDescriptor>): _21.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _21.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.CodecDescriptor;
                    fromJSON(object: any): _21.CodecDescriptor;
                    toJSON(message: _21.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_21.CodecDescriptor>): _21.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _21.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.InterfaceDescriptor;
                    fromJSON(object: any): _21.InterfaceDescriptor;
                    toJSON(message: _21.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_21.InterfaceDescriptor>): _21.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _21.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _21.InterfaceImplementerDescriptor;
                    toJSON(message: _21.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_21.InterfaceImplementerDescriptor>): _21.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _21.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _21.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _21.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_21.InterfaceAcceptingMessageDescriptor>): _21.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _21.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ConfigurationDescriptor;
                    fromJSON(object: any): _21.ConfigurationDescriptor;
                    toJSON(message: _21.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_21.ConfigurationDescriptor>): _21.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _21.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgDescriptor;
                    fromJSON(object: any): _21.MsgDescriptor;
                    toJSON(message: _21.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_21.MsgDescriptor>): _21.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _21.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _21.GetAuthnDescriptorRequest;
                    toJSON(_: _21.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_21.GetAuthnDescriptorRequest>): _21.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _21.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _21.GetAuthnDescriptorResponse;
                    toJSON(message: _21.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_21.GetAuthnDescriptorResponse>): _21.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _21.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetChainDescriptorRequest;
                    fromJSON(_: any): _21.GetChainDescriptorRequest;
                    toJSON(_: _21.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_21.GetChainDescriptorRequest>): _21.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _21.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetChainDescriptorResponse;
                    fromJSON(object: any): _21.GetChainDescriptorResponse;
                    toJSON(message: _21.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_21.GetChainDescriptorResponse>): _21.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _21.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetCodecDescriptorRequest;
                    fromJSON(_: any): _21.GetCodecDescriptorRequest;
                    toJSON(_: _21.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_21.GetCodecDescriptorRequest>): _21.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _21.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetCodecDescriptorResponse;
                    fromJSON(object: any): _21.GetCodecDescriptorResponse;
                    toJSON(message: _21.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_21.GetCodecDescriptorResponse>): _21.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _21.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _21.GetConfigurationDescriptorRequest;
                    toJSON(_: _21.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_21.GetConfigurationDescriptorRequest>): _21.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _21.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _21.GetConfigurationDescriptorResponse;
                    toJSON(message: _21.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_21.GetConfigurationDescriptorResponse>): _21.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _21.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _21.GetQueryServicesDescriptorRequest;
                    toJSON(_: _21.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_21.GetQueryServicesDescriptorRequest>): _21.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _21.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _21.GetQueryServicesDescriptorResponse;
                    toJSON(message: _21.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_21.GetQueryServicesDescriptorResponse>): _21.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _21.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetTxDescriptorRequest;
                    fromJSON(_: any): _21.GetTxDescriptorRequest;
                    toJSON(_: _21.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_21.GetTxDescriptorRequest>): _21.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _21.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetTxDescriptorResponse;
                    fromJSON(object: any): _21.GetTxDescriptorResponse;
                    toJSON(message: _21.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_21.GetTxDescriptorResponse>): _21.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _21.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryServicesDescriptor;
                    fromJSON(object: any): _21.QueryServicesDescriptor;
                    toJSON(message: _21.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_21.QueryServicesDescriptor>): _21.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _21.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryServiceDescriptor;
                    fromJSON(object: any): _21.QueryServiceDescriptor;
                    toJSON(message: _21.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_21.QueryServiceDescriptor>): _21.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _21.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryMethodDescriptor;
                    fromJSON(object: any): _21.QueryMethodDescriptor;
                    toJSON(message: _21.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_21.QueryMethodDescriptor>): _21.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _22.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Snapshot;
                    fromJSON(object: any): _22.Snapshot;
                    toJSON(message: _22.Snapshot): unknown;
                    fromPartial(object: Partial<_22.Snapshot>): _22.Snapshot;
                };
                Metadata: {
                    encode(message: _22.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Metadata;
                    fromJSON(object: any): _22.Metadata;
                    toJSON(message: _22.Metadata): unknown;
                    fromPartial(object: Partial<_22.Metadata>): _22.Metadata;
                };
                SnapshotItem: {
                    encode(message: _22.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SnapshotItem;
                    fromJSON(object: any): _22.SnapshotItem;
                    toJSON(message: _22.SnapshotItem): unknown;
                    fromPartial(object: Partial<_22.SnapshotItem>): _22.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _22.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SnapshotStoreItem;
                    fromJSON(object: any): _22.SnapshotStoreItem;
                    toJSON(message: _22.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_22.SnapshotStoreItem>): _22.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _22.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SnapshotIAVLItem;
                    fromJSON(object: any): _22.SnapshotIAVLItem;
                    toJSON(message: _22.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_22.SnapshotIAVLItem>): _22.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _22.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SnapshotExtensionMeta;
                    fromJSON(object: any): _22.SnapshotExtensionMeta;
                    toJSON(message: _22.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_22.SnapshotExtensionMeta>): _22.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _22.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SnapshotExtensionPayload;
                    fromJSON(object: any): _22.SnapshotExtensionPayload;
                    toJSON(message: _22.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_22.SnapshotExtensionPayload>): _22.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _22.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SnapshotKVItem;
                    fromJSON(object: any): _22.SnapshotKVItem;
                    toJSON(message: _22.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_22.SnapshotKVItem>): _22.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _22.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SnapshotSchema;
                    fromJSON(object: any): _22.SnapshotSchema;
                    toJSON(message: _22.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_22.SnapshotSchema>): _22.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _24.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.StoreKVPair;
                    fromJSON(object: any): _24.StoreKVPair;
                    toJSON(message: _24.StoreKVPair): unknown;
                    fromPartial(object: Partial<_24.StoreKVPair>): _24.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _23.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.CommitInfo;
                    fromJSON(object: any): _23.CommitInfo;
                    toJSON(message: _23.CommitInfo): unknown;
                    fromPartial(object: Partial<_23.CommitInfo>): _23.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _23.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.StoreInfo;
                    fromJSON(object: any): _23.StoreInfo;
                    toJSON(message: _23.StoreInfo): unknown;
                    fromPartial(object: Partial<_23.StoreInfo>): _23.StoreInfo;
                };
                CommitID: {
                    encode(message: _23.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.CommitID;
                    fromJSON(object: any): _23.CommitID;
                    toJSON(message: _23.CommitID): unknown;
                    fromPartial(object: Partial<_23.CommitID>): _23.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _116.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _25.GetNodeInfoRequest): Promise<_25.GetNodeInfoResponse>;
                    getSyncing(request?: _25.GetSyncingRequest): Promise<_25.GetSyncingResponse>;
                    getLatestBlock(request?: _25.GetLatestBlockRequest): Promise<_25.GetLatestBlockResponse>;
                    getBlockByHeight(request: _25.GetBlockByHeightRequest): Promise<_25.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _25.GetLatestValidatorSetRequest): Promise<_25.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _25.GetValidatorSetByHeightRequest): Promise<_25.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _25.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _25.GetValidatorSetByHeightRequest;
                    toJSON(message: _25.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_25.GetValidatorSetByHeightRequest>): _25.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _25.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _25.GetValidatorSetByHeightResponse;
                    toJSON(message: _25.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_25.GetValidatorSetByHeightResponse>): _25.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _25.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _25.GetLatestValidatorSetRequest;
                    toJSON(message: _25.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_25.GetLatestValidatorSetRequest>): _25.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _25.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _25.GetLatestValidatorSetResponse;
                    toJSON(message: _25.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_25.GetLatestValidatorSetResponse>): _25.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _25.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Validator;
                    fromJSON(object: any): _25.Validator;
                    toJSON(message: _25.Validator): unknown;
                    fromPartial(object: Partial<_25.Validator>): _25.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _25.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetBlockByHeightRequest;
                    fromJSON(object: any): _25.GetBlockByHeightRequest;
                    toJSON(message: _25.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_25.GetBlockByHeightRequest>): _25.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _25.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetBlockByHeightResponse;
                    fromJSON(object: any): _25.GetBlockByHeightResponse;
                    toJSON(message: _25.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_25.GetBlockByHeightResponse>): _25.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _25.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetLatestBlockRequest;
                    fromJSON(_: any): _25.GetLatestBlockRequest;
                    toJSON(_: _25.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_25.GetLatestBlockRequest>): _25.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _25.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetLatestBlockResponse;
                    fromJSON(object: any): _25.GetLatestBlockResponse;
                    toJSON(message: _25.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_25.GetLatestBlockResponse>): _25.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _25.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetSyncingRequest;
                    fromJSON(_: any): _25.GetSyncingRequest;
                    toJSON(_: _25.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_25.GetSyncingRequest>): _25.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _25.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetSyncingResponse;
                    fromJSON(object: any): _25.GetSyncingResponse;
                    toJSON(message: _25.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_25.GetSyncingResponse>): _25.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _25.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetNodeInfoRequest;
                    fromJSON(_: any): _25.GetNodeInfoRequest;
                    toJSON(_: _25.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_25.GetNodeInfoRequest>): _25.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _25.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetNodeInfoResponse;
                    fromJSON(object: any): _25.GetNodeInfoResponse;
                    toJSON(message: _25.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_25.GetNodeInfoResponse>): _25.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _25.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.VersionInfo;
                    fromJSON(object: any): _25.VersionInfo;
                    toJSON(message: _25.VersionInfo): unknown;
                    fromPartial(object: Partial<_25.VersionInfo>): _25.VersionInfo;
                };
                Module: {
                    encode(message: _25.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Module;
                    fromJSON(object: any): _25.Module;
                    toJSON(message: _25.Module): unknown;
                    fromPartial(object: Partial<_25.Module>): _25.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _26.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Coin;
                fromJSON(object: any): _26.Coin;
                toJSON(message: _26.Coin): unknown;
                fromPartial(object: Partial<_26.Coin>): _26.Coin;
            };
            DecCoin: {
                encode(message: _26.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.DecCoin;
                fromJSON(object: any): _26.DecCoin;
                toJSON(message: _26.DecCoin): unknown;
                fromPartial(object: Partial<_26.DecCoin>): _26.DecCoin;
            };
            IntProto: {
                encode(message: _26.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.IntProto;
                fromJSON(object: any): _26.IntProto;
                toJSON(message: _26.IntProto): unknown;
                fromPartial(object: Partial<_26.IntProto>): _26.IntProto;
            };
            DecProto: {
                encode(message: _26.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.DecProto;
                fromJSON(object: any): _26.DecProto;
                toJSON(message: _26.DecProto): unknown;
                fromPartial(object: Partial<_26.DecProto>): _26.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _28.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GenesisOwners;
                fromJSON(object: any): _28.GenesisOwners;
                toJSON(message: _28.GenesisOwners): unknown;
                fromPartial(object: Partial<_28.GenesisOwners>): _28.GenesisOwners;
            };
            GenesisState: {
                encode(message: _28.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GenesisState;
                fromJSON(object: any): _28.GenesisState;
                toJSON(message: _28.GenesisState): unknown;
                fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
            };
            Capability: {
                encode(message: _27.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Capability;
                fromJSON(object: any): _27.Capability;
                toJSON(message: _27.Capability): unknown;
                fromPartial(object: Partial<_27.Capability>): _27.Capability;
            };
            Owner: {
                encode(message: _27.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Owner;
                fromJSON(object: any): _27.Owner;
                toJSON(message: _27.Owner): unknown;
                fromPartial(object: Partial<_27.Owner>): _27.Owner;
            };
            CapabilityOwners: {
                encode(message: _27.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.CapabilityOwners;
                fromJSON(object: any): _27.CapabilityOwners;
                toJSON(message: _27.CapabilityOwners): unknown;
                fromPartial(object: Partial<_27.CapabilityOwners>): _27.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _132.MsgClientImpl;
            MsgVerifyInvariant: {
                encode(message: _30.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgVerifyInvariant;
                fromJSON(object: any): _30.MsgVerifyInvariant;
                toJSON(message: _30.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_30.MsgVerifyInvariant>): _30.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _30.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgVerifyInvariantResponse;
                fromJSON(_: any): _30.MsgVerifyInvariantResponse;
                toJSON(_: _30.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_30.MsgVerifyInvariantResponse>): _30.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisState;
                fromJSON(object: any): _29.GenesisState;
                toJSON(message: _29.GenesisState): unknown;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _31.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.PubKey;
                fromJSON(object: any): _31.PubKey;
                toJSON(message: _31.PubKey): unknown;
                fromPartial(object: Partial<_31.PubKey>): _31.PubKey;
            };
            PrivKey: {
                encode(message: _31.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.PrivKey;
                fromJSON(object: any): _31.PrivKey;
                toJSON(message: _31.PrivKey): unknown;
                fromPartial(object: Partial<_31.PrivKey>): _31.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _32.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.BIP44Params;
                    fromJSON(object: any): _32.BIP44Params;
                    toJSON(message: _32.BIP44Params): unknown;
                    fromPartial(object: Partial<_32.BIP44Params>): _32.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _33.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Record;
                    fromJSON(object: any): _33.Record;
                    toJSON(message: _33.Record): unknown;
                    fromPartial(object: Partial<_33.Record>): _33.Record;
                };
                Record_Local: {
                    encode(message: _33.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Record_Local;
                    fromJSON(object: any): _33.Record_Local;
                    toJSON(message: _33.Record_Local): unknown;
                    fromPartial(object: Partial<_33.Record_Local>): _33.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _33.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Record_Ledger;
                    fromJSON(object: any): _33.Record_Ledger;
                    toJSON(message: _33.Record_Ledger): unknown;
                    fromPartial(object: Partial<_33.Record_Ledger>): _33.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _33.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Record_Multi;
                    fromJSON(_: any): _33.Record_Multi;
                    toJSON(_: _33.Record_Multi): unknown;
                    fromPartial(_: Partial<_33.Record_Multi>): _33.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _33.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Record_Offline;
                    fromJSON(_: any): _33.Record_Offline;
                    toJSON(_: _33.Record_Offline): unknown;
                    fromPartial(_: Partial<_33.Record_Offline>): _33.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _34.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.LegacyAminoPubKey;
                fromJSON(object: any): _34.LegacyAminoPubKey;
                toJSON(message: _34.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_34.LegacyAminoPubKey>): _34.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _35.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.PubKey;
                fromJSON(object: any): _35.PubKey;
                toJSON(message: _35.PubKey): unknown;
                fromPartial(object: Partial<_35.PubKey>): _35.PubKey;
            };
            PrivKey: {
                encode(message: _35.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.PrivKey;
                fromJSON(object: any): _35.PrivKey;
                toJSON(message: _35.PrivKey): unknown;
                fromPartial(object: Partial<_35.PrivKey>): _35.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _36.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PubKey;
                fromJSON(object: any): _36.PubKey;
                toJSON(message: _36.PubKey): unknown;
                fromPartial(object: Partial<_36.PubKey>): _36.PubKey;
            };
            PrivKey: {
                encode(message: _36.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PrivKey;
                fromJSON(object: any): _36.PrivKey;
                toJSON(message: _36.PrivKey): unknown;
                fromPartial(object: Partial<_36.PrivKey>): _36.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _133.MsgClientImpl;
            QueryClientImpl: typeof _117.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                validatorOutstandingRewards(request: _39.QueryValidatorOutstandingRewardsRequest): Promise<_39.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _39.QueryValidatorCommissionRequest): Promise<_39.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _39.QueryValidatorSlashesRequest): Promise<_39.QueryValidatorSlashesResponse>;
                delegationRewards(request: _39.QueryDelegationRewardsRequest): Promise<_39.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _39.QueryDelegationTotalRewardsRequest): Promise<_39.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _39.QueryDelegatorValidatorsRequest): Promise<_39.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _39.QueryDelegatorWithdrawAddressRequest): Promise<_39.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _39.QueryCommunityPoolRequest): Promise<_39.QueryCommunityPoolResponse>;
            };
            MsgSetWithdrawAddress: {
                encode(message: _40.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgSetWithdrawAddress;
                fromJSON(object: any): _40.MsgSetWithdrawAddress;
                toJSON(message: _40.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_40.MsgSetWithdrawAddress>): _40.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _40.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _40.MsgSetWithdrawAddressResponse;
                toJSON(_: _40.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_40.MsgSetWithdrawAddressResponse>): _40.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _40.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _40.MsgWithdrawDelegatorReward;
                toJSON(message: _40.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_40.MsgWithdrawDelegatorReward>): _40.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _40.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _40.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _40.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_40.MsgWithdrawDelegatorRewardResponse>): _40.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _40.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _40.MsgWithdrawValidatorCommission;
                toJSON(message: _40.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_40.MsgWithdrawValidatorCommission>): _40.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _40.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _40.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _40.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_40.MsgWithdrawValidatorCommissionResponse>): _40.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _40.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgFundCommunityPool;
                fromJSON(object: any): _40.MsgFundCommunityPool;
                toJSON(message: _40.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_40.MsgFundCommunityPool>): _40.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _40.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _40.MsgFundCommunityPoolResponse;
                toJSON(_: _40.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_40.MsgFundCommunityPoolResponse>): _40.MsgFundCommunityPoolResponse;
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
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _39.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _39.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _39.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_39.QueryValidatorOutstandingRewardsRequest>): _39.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _39.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _39.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _39.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_39.QueryValidatorOutstandingRewardsResponse>): _39.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _39.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorCommissionRequest;
                fromJSON(object: any): _39.QueryValidatorCommissionRequest;
                toJSON(message: _39.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_39.QueryValidatorCommissionRequest>): _39.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _39.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorCommissionResponse;
                fromJSON(object: any): _39.QueryValidatorCommissionResponse;
                toJSON(message: _39.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_39.QueryValidatorCommissionResponse>): _39.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _39.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorSlashesRequest;
                fromJSON(object: any): _39.QueryValidatorSlashesRequest;
                toJSON(message: _39.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_39.QueryValidatorSlashesRequest>): _39.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _39.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorSlashesResponse;
                fromJSON(object: any): _39.QueryValidatorSlashesResponse;
                toJSON(message: _39.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_39.QueryValidatorSlashesResponse>): _39.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _39.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegationRewardsRequest;
                fromJSON(object: any): _39.QueryDelegationRewardsRequest;
                toJSON(message: _39.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_39.QueryDelegationRewardsRequest>): _39.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _39.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegationRewardsResponse;
                fromJSON(object: any): _39.QueryDelegationRewardsResponse;
                toJSON(message: _39.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_39.QueryDelegationRewardsResponse>): _39.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _39.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _39.QueryDelegationTotalRewardsRequest;
                toJSON(message: _39.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_39.QueryDelegationTotalRewardsRequest>): _39.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _39.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _39.QueryDelegationTotalRewardsResponse;
                toJSON(message: _39.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_39.QueryDelegationTotalRewardsResponse>): _39.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _39.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _39.QueryDelegatorValidatorsRequest;
                toJSON(message: _39.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_39.QueryDelegatorValidatorsRequest>): _39.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _39.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _39.QueryDelegatorValidatorsResponse;
                toJSON(message: _39.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_39.QueryDelegatorValidatorsResponse>): _39.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _39.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _39.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _39.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_39.QueryDelegatorWithdrawAddressRequest>): _39.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _39.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _39.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _39.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_39.QueryDelegatorWithdrawAddressResponse>): _39.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _39.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryCommunityPoolRequest;
                fromJSON(_: any): _39.QueryCommunityPoolRequest;
                toJSON(_: _39.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_39.QueryCommunityPoolRequest>): _39.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _39.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryCommunityPoolResponse;
                fromJSON(object: any): _39.QueryCommunityPoolResponse;
                toJSON(message: _39.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_39.QueryCommunityPoolResponse>): _39.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _38.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegatorWithdrawInfo;
                fromJSON(object: any): _38.DelegatorWithdrawInfo;
                toJSON(message: _38.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_38.DelegatorWithdrawInfo>): _38.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _38.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _38.ValidatorOutstandingRewardsRecord;
                toJSON(message: _38.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_38.ValidatorOutstandingRewardsRecord>): _38.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _38.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _38.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _38.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_38.ValidatorAccumulatedCommissionRecord>): _38.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _38.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _38.ValidatorHistoricalRewardsRecord;
                toJSON(message: _38.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_38.ValidatorHistoricalRewardsRecord>): _38.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _38.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _38.ValidatorCurrentRewardsRecord;
                toJSON(message: _38.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_38.ValidatorCurrentRewardsRecord>): _38.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _38.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegatorStartingInfoRecord;
                fromJSON(object: any): _38.DelegatorStartingInfoRecord;
                toJSON(message: _38.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_38.DelegatorStartingInfoRecord>): _38.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _38.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorSlashEventRecord;
                fromJSON(object: any): _38.ValidatorSlashEventRecord;
                toJSON(message: _38.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_38.ValidatorSlashEventRecord>): _38.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _38.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GenesisState;
                fromJSON(object: any): _38.GenesisState;
                toJSON(message: _38.GenesisState): unknown;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
            };
            Params: {
                encode(message: _37.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Params;
                fromJSON(object: any): _37.Params;
                toJSON(message: _37.Params): unknown;
                fromPartial(object: Partial<_37.Params>): _37.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _37.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorHistoricalRewards;
                fromJSON(object: any): _37.ValidatorHistoricalRewards;
                toJSON(message: _37.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_37.ValidatorHistoricalRewards>): _37.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _37.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorCurrentRewards;
                fromJSON(object: any): _37.ValidatorCurrentRewards;
                toJSON(message: _37.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_37.ValidatorCurrentRewards>): _37.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _37.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorAccumulatedCommission;
                fromJSON(object: any): _37.ValidatorAccumulatedCommission;
                toJSON(message: _37.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_37.ValidatorAccumulatedCommission>): _37.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _37.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorOutstandingRewards;
                fromJSON(object: any): _37.ValidatorOutstandingRewards;
                toJSON(message: _37.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_37.ValidatorOutstandingRewards>): _37.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _37.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorSlashEvent;
                fromJSON(object: any): _37.ValidatorSlashEvent;
                toJSON(message: _37.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_37.ValidatorSlashEvent>): _37.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _37.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorSlashEvents;
                fromJSON(object: any): _37.ValidatorSlashEvents;
                toJSON(message: _37.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_37.ValidatorSlashEvents>): _37.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _37.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.FeePool;
                fromJSON(object: any): _37.FeePool;
                toJSON(message: _37.FeePool): unknown;
                fromPartial(object: Partial<_37.FeePool>): _37.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _37.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.CommunityPoolSpendProposal;
                fromJSON(object: any): _37.CommunityPoolSpendProposal;
                toJSON(message: _37.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_37.CommunityPoolSpendProposal>): _37.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _37.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DelegatorStartingInfo;
                fromJSON(object: any): _37.DelegatorStartingInfo;
                toJSON(message: _37.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_37.DelegatorStartingInfo>): _37.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _37.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DelegationDelegatorReward;
                fromJSON(object: any): _37.DelegationDelegatorReward;
                toJSON(message: _37.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_37.DelegationDelegatorReward>): _37.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _37.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _37.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _37.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_37.CommunityPoolSpendProposalWithDeposit>): _37.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _134.MsgClientImpl;
            QueryClientImpl: typeof _118.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _43.QueryEvidenceRequest): Promise<_43.QueryEvidenceResponse>;
                allEvidence(request?: _43.QueryAllEvidenceRequest): Promise<_43.QueryAllEvidenceResponse>;
            };
            MsgSubmitEvidence: {
                encode(message: _44.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSubmitEvidence;
                fromJSON(object: any): _44.MsgSubmitEvidence;
                toJSON(message: _44.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_44.MsgSubmitEvidence>): _44.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _44.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _44.MsgSubmitEvidenceResponse;
                toJSON(message: _44.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_44.MsgSubmitEvidenceResponse>): _44.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _43.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryEvidenceRequest;
                fromJSON(object: any): _43.QueryEvidenceRequest;
                toJSON(message: _43.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_43.QueryEvidenceRequest>): _43.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _43.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryEvidenceResponse;
                fromJSON(object: any): _43.QueryEvidenceResponse;
                toJSON(message: _43.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_43.QueryEvidenceResponse>): _43.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _43.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAllEvidenceRequest;
                fromJSON(object: any): _43.QueryAllEvidenceRequest;
                toJSON(message: _43.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_43.QueryAllEvidenceRequest>): _43.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _43.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAllEvidenceResponse;
                fromJSON(object: any): _43.QueryAllEvidenceResponse;
                toJSON(message: _43.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_43.QueryAllEvidenceResponse>): _43.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _42.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GenesisState;
                fromJSON(object: any): _42.GenesisState;
                toJSON(message: _42.GenesisState): unknown;
                fromPartial(object: Partial<_42.GenesisState>): _42.GenesisState;
            };
            Equivocation: {
                encode(message: _41.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Equivocation;
                fromJSON(object: any): _41.Equivocation;
                toJSON(message: _41.Equivocation): unknown;
                fromPartial(object: Partial<_41.Equivocation>): _41.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _135.MsgClientImpl;
            QueryClientImpl: typeof _119.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _47.QueryAllowanceRequest): Promise<_47.QueryAllowanceResponse>;
                allowances(request: _47.QueryAllowancesRequest): Promise<_47.QueryAllowancesResponse>;
                allowancesByGranter(request: _47.QueryAllowancesByGranterRequest): Promise<_47.QueryAllowancesByGranterResponse>;
            };
            MsgGrantAllowance: {
                encode(message: _48.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgGrantAllowance;
                fromJSON(object: any): _48.MsgGrantAllowance;
                toJSON(message: _48.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_48.MsgGrantAllowance>): _48.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _48.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgGrantAllowanceResponse;
                fromJSON(_: any): _48.MsgGrantAllowanceResponse;
                toJSON(_: _48.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_48.MsgGrantAllowanceResponse>): _48.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _48.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgRevokeAllowance;
                fromJSON(object: any): _48.MsgRevokeAllowance;
                toJSON(message: _48.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_48.MsgRevokeAllowance>): _48.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _48.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _48.MsgRevokeAllowanceResponse;
                toJSON(_: _48.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_48.MsgRevokeAllowanceResponse>): _48.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _47.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAllowanceRequest;
                fromJSON(object: any): _47.QueryAllowanceRequest;
                toJSON(message: _47.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_47.QueryAllowanceRequest>): _47.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _47.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAllowanceResponse;
                fromJSON(object: any): _47.QueryAllowanceResponse;
                toJSON(message: _47.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_47.QueryAllowanceResponse>): _47.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _47.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAllowancesRequest;
                fromJSON(object: any): _47.QueryAllowancesRequest;
                toJSON(message: _47.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_47.QueryAllowancesRequest>): _47.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _47.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAllowancesResponse;
                fromJSON(object: any): _47.QueryAllowancesResponse;
                toJSON(message: _47.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_47.QueryAllowancesResponse>): _47.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _47.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _47.QueryAllowancesByGranterRequest;
                toJSON(message: _47.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_47.QueryAllowancesByGranterRequest>): _47.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _47.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _47.QueryAllowancesByGranterResponse;
                toJSON(message: _47.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_47.QueryAllowancesByGranterResponse>): _47.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisState;
                fromJSON(object: any): _46.GenesisState;
                toJSON(message: _46.GenesisState): unknown;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
            };
            BasicAllowance: {
                encode(message: _45.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.BasicAllowance;
                fromJSON(object: any): _45.BasicAllowance;
                toJSON(message: _45.BasicAllowance): unknown;
                fromPartial(object: Partial<_45.BasicAllowance>): _45.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _45.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.PeriodicAllowance;
                fromJSON(object: any): _45.PeriodicAllowance;
                toJSON(message: _45.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_45.PeriodicAllowance>): _45.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _45.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.AllowedMsgAllowance;
                fromJSON(object: any): _45.AllowedMsgAllowance;
                toJSON(message: _45.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_45.AllowedMsgAllowance>): _45.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _45.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Grant;
                fromJSON(object: any): _45.Grant;
                toJSON(message: _45.Grant): unknown;
                fromPartial(object: Partial<_45.Grant>): _45.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _49.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GenesisState;
                fromJSON(object: any): _49.GenesisState;
                toJSON(message: _49.GenesisState): unknown;
                fromPartial(object: Partial<_49.GenesisState>): _49.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _136.MsgClientImpl;
            QueryClientImpl: typeof _120.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _52.QueryProposalRequest): Promise<_52.QueryProposalResponse>;
                proposals(request: _52.QueryProposalsRequest): Promise<_52.QueryProposalsResponse>;
                vote(request: _52.QueryVoteRequest): Promise<_52.QueryVoteResponse>;
                votes(request: _52.QueryVotesRequest): Promise<_52.QueryVotesResponse>;
                params(request: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                deposit(request: _52.QueryDepositRequest): Promise<_52.QueryDepositResponse>;
                deposits(request: _52.QueryDepositsRequest): Promise<_52.QueryDepositsResponse>;
                tallyResult(request: _52.QueryTallyResultRequest): Promise<_52.QueryTallyResultResponse>;
            };
            MsgSubmitProposal: {
                encode(message: _53.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSubmitProposal;
                fromJSON(object: any): _53.MsgSubmitProposal;
                toJSON(message: _53.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_53.MsgSubmitProposal>): _53.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _53.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSubmitProposalResponse;
                fromJSON(object: any): _53.MsgSubmitProposalResponse;
                toJSON(message: _53.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_53.MsgSubmitProposalResponse>): _53.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _53.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgExecLegacyContent;
                fromJSON(object: any): _53.MsgExecLegacyContent;
                toJSON(message: _53.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_53.MsgExecLegacyContent>): _53.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _53.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgExecLegacyContentResponse;
                fromJSON(_: any): _53.MsgExecLegacyContentResponse;
                toJSON(_: _53.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_53.MsgExecLegacyContentResponse>): _53.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _53.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgVote;
                fromJSON(object: any): _53.MsgVote;
                toJSON(message: _53.MsgVote): unknown;
                fromPartial(object: Partial<_53.MsgVote>): _53.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _53.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgVoteResponse;
                fromJSON(_: any): _53.MsgVoteResponse;
                toJSON(_: _53.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_53.MsgVoteResponse>): _53.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _53.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgVoteWeighted;
                fromJSON(object: any): _53.MsgVoteWeighted;
                toJSON(message: _53.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_53.MsgVoteWeighted>): _53.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _53.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgVoteWeightedResponse;
                fromJSON(_: any): _53.MsgVoteWeightedResponse;
                toJSON(_: _53.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_53.MsgVoteWeightedResponse>): _53.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _53.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgDeposit;
                fromJSON(object: any): _53.MsgDeposit;
                toJSON(message: _53.MsgDeposit): unknown;
                fromPartial(object: Partial<_53.MsgDeposit>): _53.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _53.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgDepositResponse;
                fromJSON(_: any): _53.MsgDepositResponse;
                toJSON(_: _53.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_53.MsgDepositResponse>): _53.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _52.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProposalRequest;
                fromJSON(object: any): _52.QueryProposalRequest;
                toJSON(message: _52.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_52.QueryProposalRequest>): _52.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _52.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProposalResponse;
                fromJSON(object: any): _52.QueryProposalResponse;
                toJSON(message: _52.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_52.QueryProposalResponse>): _52.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _52.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProposalsRequest;
                fromJSON(object: any): _52.QueryProposalsRequest;
                toJSON(message: _52.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_52.QueryProposalsRequest>): _52.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _52.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProposalsResponse;
                fromJSON(object: any): _52.QueryProposalsResponse;
                toJSON(message: _52.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_52.QueryProposalsResponse>): _52.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _52.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryVoteRequest;
                fromJSON(object: any): _52.QueryVoteRequest;
                toJSON(message: _52.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_52.QueryVoteRequest>): _52.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _52.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryVoteResponse;
                fromJSON(object: any): _52.QueryVoteResponse;
                toJSON(message: _52.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_52.QueryVoteResponse>): _52.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _52.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryVotesRequest;
                fromJSON(object: any): _52.QueryVotesRequest;
                toJSON(message: _52.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_52.QueryVotesRequest>): _52.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _52.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryVotesResponse;
                fromJSON(object: any): _52.QueryVotesResponse;
                toJSON(message: _52.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_52.QueryVotesResponse>): _52.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _52.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsRequest;
                fromJSON(object: any): _52.QueryParamsRequest;
                toJSON(message: _52.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_52.QueryParamsRequest>): _52.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _52.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsResponse;
                fromJSON(object: any): _52.QueryParamsResponse;
                toJSON(message: _52.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_52.QueryParamsResponse>): _52.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _52.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDepositRequest;
                fromJSON(object: any): _52.QueryDepositRequest;
                toJSON(message: _52.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_52.QueryDepositRequest>): _52.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _52.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDepositResponse;
                fromJSON(object: any): _52.QueryDepositResponse;
                toJSON(message: _52.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_52.QueryDepositResponse>): _52.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _52.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDepositsRequest;
                fromJSON(object: any): _52.QueryDepositsRequest;
                toJSON(message: _52.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_52.QueryDepositsRequest>): _52.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _52.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDepositsResponse;
                fromJSON(object: any): _52.QueryDepositsResponse;
                toJSON(message: _52.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_52.QueryDepositsResponse>): _52.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _52.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryTallyResultRequest;
                fromJSON(object: any): _52.QueryTallyResultRequest;
                toJSON(message: _52.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_52.QueryTallyResultRequest>): _52.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _52.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryTallyResultResponse;
                fromJSON(object: any): _52.QueryTallyResultResponse;
                toJSON(message: _52.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_52.QueryTallyResultResponse>): _52.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _51.VoteOption;
            voteOptionToJSON(object: _51.VoteOption): string;
            proposalStatusFromJSON(object: any): _51.ProposalStatus;
            proposalStatusToJSON(object: _51.ProposalStatus): string;
            VoteOption: typeof _51.VoteOption;
            VoteOptionSDKType: typeof _51.VoteOptionSDKType;
            ProposalStatus: typeof _51.ProposalStatus;
            ProposalStatusSDKType: typeof _51.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _51.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.WeightedVoteOption;
                fromJSON(object: any): _51.WeightedVoteOption;
                toJSON(message: _51.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_51.WeightedVoteOption>): _51.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _51.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Deposit;
                fromJSON(object: any): _51.Deposit;
                toJSON(message: _51.Deposit): unknown;
                fromPartial(object: Partial<_51.Deposit>): _51.Deposit;
            };
            Proposal: {
                encode(message: _51.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Proposal;
                fromJSON(object: any): _51.Proposal;
                toJSON(message: _51.Proposal): unknown;
                fromPartial(object: Partial<_51.Proposal>): _51.Proposal;
            };
            TallyResult: {
                encode(message: _51.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.TallyResult;
                fromJSON(object: any): _51.TallyResult;
                toJSON(message: _51.TallyResult): unknown;
                fromPartial(object: Partial<_51.TallyResult>): _51.TallyResult;
            };
            Vote: {
                encode(message: _51.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Vote;
                fromJSON(object: any): _51.Vote;
                toJSON(message: _51.Vote): unknown;
                fromPartial(object: Partial<_51.Vote>): _51.Vote;
            };
            DepositParams: {
                encode(message: _51.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.DepositParams;
                fromJSON(object: any): _51.DepositParams;
                toJSON(message: _51.DepositParams): unknown;
                fromPartial(object: Partial<_51.DepositParams>): _51.DepositParams;
            };
            VotingParams: {
                encode(message: _51.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.VotingParams;
                fromJSON(object: any): _51.VotingParams;
                toJSON(message: _51.VotingParams): unknown;
                fromPartial(object: Partial<_51.VotingParams>): _51.VotingParams;
            };
            TallyParams: {
                encode(message: _51.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.TallyParams;
                fromJSON(object: any): _51.TallyParams;
                toJSON(message: _51.TallyParams): unknown;
                fromPartial(object: Partial<_51.TallyParams>): _51.TallyParams;
            };
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GenesisState;
                fromJSON(object: any): _50.GenesisState;
                toJSON(message: _50.GenesisState): unknown;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _137.MsgClientImpl;
            QueryClientImpl: typeof _121.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _56.QueryProposalRequest): Promise<_56.QueryProposalResponse>;
                proposals(request: _56.QueryProposalsRequest): Promise<_56.QueryProposalsResponse>;
                vote(request: _56.QueryVoteRequest): Promise<_56.QueryVoteResponse>;
                votes(request: _56.QueryVotesRequest): Promise<_56.QueryVotesResponse>;
                params(request: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                deposit(request: _56.QueryDepositRequest): Promise<_56.QueryDepositResponse>;
                deposits(request: _56.QueryDepositsRequest): Promise<_56.QueryDepositsResponse>;
                tallyResult(request: _56.QueryTallyResultRequest): Promise<_56.QueryTallyResultResponse>;
            };
            MsgSubmitProposal: {
                encode(message: _57.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgSubmitProposal;
                fromJSON(object: any): _57.MsgSubmitProposal;
                toJSON(message: _57.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_57.MsgSubmitProposal>): _57.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _57.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgSubmitProposalResponse;
                fromJSON(object: any): _57.MsgSubmitProposalResponse;
                toJSON(message: _57.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_57.MsgSubmitProposalResponse>): _57.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _57.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgVote;
                fromJSON(object: any): _57.MsgVote;
                toJSON(message: _57.MsgVote): unknown;
                fromPartial(object: Partial<_57.MsgVote>): _57.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _57.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgVoteResponse;
                fromJSON(_: any): _57.MsgVoteResponse;
                toJSON(_: _57.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_57.MsgVoteResponse>): _57.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _57.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgVoteWeighted;
                fromJSON(object: any): _57.MsgVoteWeighted;
                toJSON(message: _57.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_57.MsgVoteWeighted>): _57.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _57.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgVoteWeightedResponse;
                fromJSON(_: any): _57.MsgVoteWeightedResponse;
                toJSON(_: _57.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_57.MsgVoteWeightedResponse>): _57.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _57.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgDeposit;
                fromJSON(object: any): _57.MsgDeposit;
                toJSON(message: _57.MsgDeposit): unknown;
                fromPartial(object: Partial<_57.MsgDeposit>): _57.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _57.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgDepositResponse;
                fromJSON(_: any): _57.MsgDepositResponse;
                toJSON(_: _57.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_57.MsgDepositResponse>): _57.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _56.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryProposalRequest;
                fromJSON(object: any): _56.QueryProposalRequest;
                toJSON(message: _56.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_56.QueryProposalRequest>): _56.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _56.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryProposalResponse;
                fromJSON(object: any): _56.QueryProposalResponse;
                toJSON(message: _56.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_56.QueryProposalResponse>): _56.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _56.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryProposalsRequest;
                fromJSON(object: any): _56.QueryProposalsRequest;
                toJSON(message: _56.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_56.QueryProposalsRequest>): _56.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _56.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryProposalsResponse;
                fromJSON(object: any): _56.QueryProposalsResponse;
                toJSON(message: _56.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_56.QueryProposalsResponse>): _56.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _56.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryVoteRequest;
                fromJSON(object: any): _56.QueryVoteRequest;
                toJSON(message: _56.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_56.QueryVoteRequest>): _56.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _56.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryVoteResponse;
                fromJSON(object: any): _56.QueryVoteResponse;
                toJSON(message: _56.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_56.QueryVoteResponse>): _56.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _56.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryVotesRequest;
                fromJSON(object: any): _56.QueryVotesRequest;
                toJSON(message: _56.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_56.QueryVotesRequest>): _56.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _56.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryVotesResponse;
                fromJSON(object: any): _56.QueryVotesResponse;
                toJSON(message: _56.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_56.QueryVotesResponse>): _56.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _56.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsRequest;
                fromJSON(object: any): _56.QueryParamsRequest;
                toJSON(message: _56.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_56.QueryParamsRequest>): _56.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _56.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsResponse;
                fromJSON(object: any): _56.QueryParamsResponse;
                toJSON(message: _56.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_56.QueryParamsResponse>): _56.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _56.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDepositRequest;
                fromJSON(object: any): _56.QueryDepositRequest;
                toJSON(message: _56.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_56.QueryDepositRequest>): _56.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _56.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDepositResponse;
                fromJSON(object: any): _56.QueryDepositResponse;
                toJSON(message: _56.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_56.QueryDepositResponse>): _56.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _56.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDepositsRequest;
                fromJSON(object: any): _56.QueryDepositsRequest;
                toJSON(message: _56.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_56.QueryDepositsRequest>): _56.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _56.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDepositsResponse;
                fromJSON(object: any): _56.QueryDepositsResponse;
                toJSON(message: _56.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_56.QueryDepositsResponse>): _56.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _56.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryTallyResultRequest;
                fromJSON(object: any): _56.QueryTallyResultRequest;
                toJSON(message: _56.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_56.QueryTallyResultRequest>): _56.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _56.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryTallyResultResponse;
                fromJSON(object: any): _56.QueryTallyResultResponse;
                toJSON(message: _56.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_56.QueryTallyResultResponse>): _56.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _55.VoteOption;
            voteOptionToJSON(object: _55.VoteOption): string;
            proposalStatusFromJSON(object: any): _55.ProposalStatus;
            proposalStatusToJSON(object: _55.ProposalStatus): string;
            VoteOption: typeof _55.VoteOption;
            VoteOptionSDKType: typeof _55.VoteOptionSDKType;
            ProposalStatus: typeof _55.ProposalStatus;
            ProposalStatusSDKType: typeof _55.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _55.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.WeightedVoteOption;
                fromJSON(object: any): _55.WeightedVoteOption;
                toJSON(message: _55.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_55.WeightedVoteOption>): _55.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _55.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.TextProposal;
                fromJSON(object: any): _55.TextProposal;
                toJSON(message: _55.TextProposal): unknown;
                fromPartial(object: Partial<_55.TextProposal>): _55.TextProposal;
            };
            Deposit: {
                encode(message: _55.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Deposit;
                fromJSON(object: any): _55.Deposit;
                toJSON(message: _55.Deposit): unknown;
                fromPartial(object: Partial<_55.Deposit>): _55.Deposit;
            };
            Proposal: {
                encode(message: _55.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Proposal;
                fromJSON(object: any): _55.Proposal;
                toJSON(message: _55.Proposal): unknown;
                fromPartial(object: Partial<_55.Proposal>): _55.Proposal;
            };
            TallyResult: {
                encode(message: _55.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.TallyResult;
                fromJSON(object: any): _55.TallyResult;
                toJSON(message: _55.TallyResult): unknown;
                fromPartial(object: Partial<_55.TallyResult>): _55.TallyResult;
            };
            Vote: {
                encode(message: _55.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Vote;
                fromJSON(object: any): _55.Vote;
                toJSON(message: _55.Vote): unknown;
                fromPartial(object: Partial<_55.Vote>): _55.Vote;
            };
            DepositParams: {
                encode(message: _55.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.DepositParams;
                fromJSON(object: any): _55.DepositParams;
                toJSON(message: _55.DepositParams): unknown;
                fromPartial(object: Partial<_55.DepositParams>): _55.DepositParams;
            };
            VotingParams: {
                encode(message: _55.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.VotingParams;
                fromJSON(object: any): _55.VotingParams;
                toJSON(message: _55.VotingParams): unknown;
                fromPartial(object: Partial<_55.VotingParams>): _55.VotingParams;
            };
            TallyParams: {
                encode(message: _55.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.TallyParams;
                fromJSON(object: any): _55.TallyParams;
                toJSON(message: _55.TallyParams): unknown;
                fromPartial(object: Partial<_55.TallyParams>): _55.TallyParams;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GenesisState;
                fromJSON(object: any): _54.GenesisState;
                toJSON(message: _54.GenesisState): unknown;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _138.MsgClientImpl;
            QueryClientImpl: typeof _122.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _60.QueryGroupInfoRequest): Promise<_60.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _60.QueryGroupPolicyInfoRequest): Promise<_60.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _60.QueryGroupMembersRequest): Promise<_60.QueryGroupMembersResponse>;
                groupsByAdmin(request: _60.QueryGroupsByAdminRequest): Promise<_60.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _60.QueryGroupPoliciesByGroupRequest): Promise<_60.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _60.QueryGroupPoliciesByAdminRequest): Promise<_60.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _60.QueryProposalRequest): Promise<_60.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _60.QueryProposalsByGroupPolicyRequest): Promise<_60.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _60.QueryVoteByProposalVoterRequest): Promise<_60.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _60.QueryVotesByProposalRequest): Promise<_60.QueryVotesByProposalResponse>;
                votesByVoter(request: _60.QueryVotesByVoterRequest): Promise<_60.QueryVotesByVoterResponse>;
                groupsByMember(request: _60.QueryGroupsByMemberRequest): Promise<_60.QueryGroupsByMemberResponse>;
                tallyResult(request: _60.QueryTallyResultRequest): Promise<_60.QueryTallyResultResponse>;
            };
            voteOptionFromJSON(object: any): _62.VoteOption;
            voteOptionToJSON(object: _62.VoteOption): string;
            proposalStatusFromJSON(object: any): _62.ProposalStatus;
            proposalStatusToJSON(object: _62.ProposalStatus): string;
            proposalResultFromJSON(object: any): _62.ProposalResult;
            proposalResultToJSON(object: _62.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _62.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _62.ProposalExecutorResult): string;
            VoteOption: typeof _62.VoteOption;
            VoteOptionSDKType: typeof _62.VoteOptionSDKType;
            ProposalStatus: typeof _62.ProposalStatus;
            ProposalStatusSDKType: typeof _62.ProposalStatusSDKType;
            ProposalResult: typeof _62.ProposalResult;
            ProposalResultSDKType: typeof _62.ProposalResultSDKType;
            ProposalExecutorResult: typeof _62.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _62.ProposalExecutorResultSDKType;
            Member: {
                encode(message: _62.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Member;
                fromJSON(object: any): _62.Member;
                toJSON(message: _62.Member): unknown;
                fromPartial(object: Partial<_62.Member>): _62.Member;
            };
            Members: {
                encode(message: _62.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Members;
                fromJSON(object: any): _62.Members;
                toJSON(message: _62.Members): unknown;
                fromPartial(object: Partial<_62.Members>): _62.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _62.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ThresholdDecisionPolicy;
                fromJSON(object: any): _62.ThresholdDecisionPolicy;
                toJSON(message: _62.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_62.ThresholdDecisionPolicy>): _62.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _62.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.PercentageDecisionPolicy;
                fromJSON(object: any): _62.PercentageDecisionPolicy;
                toJSON(message: _62.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_62.PercentageDecisionPolicy>): _62.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _62.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DecisionPolicyWindows;
                fromJSON(object: any): _62.DecisionPolicyWindows;
                toJSON(message: _62.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_62.DecisionPolicyWindows>): _62.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _62.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GroupInfo;
                fromJSON(object: any): _62.GroupInfo;
                toJSON(message: _62.GroupInfo): unknown;
                fromPartial(object: Partial<_62.GroupInfo>): _62.GroupInfo;
            };
            GroupMember: {
                encode(message: _62.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GroupMember;
                fromJSON(object: any): _62.GroupMember;
                toJSON(message: _62.GroupMember): unknown;
                fromPartial(object: Partial<_62.GroupMember>): _62.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _62.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GroupPolicyInfo;
                fromJSON(object: any): _62.GroupPolicyInfo;
                toJSON(message: _62.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_62.GroupPolicyInfo>): _62.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _62.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Proposal;
                fromJSON(object: any): _62.Proposal;
                toJSON(message: _62.Proposal): unknown;
                fromPartial(object: Partial<_62.Proposal>): _62.Proposal;
            };
            TallyResult: {
                encode(message: _62.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.TallyResult;
                fromJSON(object: any): _62.TallyResult;
                toJSON(message: _62.TallyResult): unknown;
                fromPartial(object: Partial<_62.TallyResult>): _62.TallyResult;
            };
            Vote: {
                encode(message: _62.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Vote;
                fromJSON(object: any): _62.Vote;
                toJSON(message: _62.Vote): unknown;
                fromPartial(object: Partial<_62.Vote>): _62.Vote;
            };
            execFromJSON(object: any): _61.Exec;
            execToJSON(object: _61.Exec): string;
            Exec: typeof _61.Exec;
            ExecSDKType: typeof _61.ExecSDKType;
            MsgCreateGroup: {
                encode(message: _61.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgCreateGroup;
                fromJSON(object: any): _61.MsgCreateGroup;
                toJSON(message: _61.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_61.MsgCreateGroup>): _61.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _61.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgCreateGroupResponse;
                fromJSON(object: any): _61.MsgCreateGroupResponse;
                toJSON(message: _61.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_61.MsgCreateGroupResponse>): _61.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _61.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupMembers;
                fromJSON(object: any): _61.MsgUpdateGroupMembers;
                toJSON(message: _61.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_61.MsgUpdateGroupMembers>): _61.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _61.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _61.MsgUpdateGroupMembersResponse;
                toJSON(_: _61.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_61.MsgUpdateGroupMembersResponse>): _61.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _61.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupAdmin;
                fromJSON(object: any): _61.MsgUpdateGroupAdmin;
                toJSON(message: _61.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_61.MsgUpdateGroupAdmin>): _61.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _61.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _61.MsgUpdateGroupAdminResponse;
                toJSON(_: _61.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_61.MsgUpdateGroupAdminResponse>): _61.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _61.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupMetadata;
                fromJSON(object: any): _61.MsgUpdateGroupMetadata;
                toJSON(message: _61.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_61.MsgUpdateGroupMetadata>): _61.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _61.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _61.MsgUpdateGroupMetadataResponse;
                toJSON(_: _61.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_61.MsgUpdateGroupMetadataResponse>): _61.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _61.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgCreateGroupPolicy;
                fromJSON(object: any): _61.MsgCreateGroupPolicy;
                toJSON(message: _61.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_61.MsgCreateGroupPolicy>): _61.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _61.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _61.MsgCreateGroupPolicyResponse;
                toJSON(message: _61.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_61.MsgCreateGroupPolicyResponse>): _61.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _61.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _61.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _61.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_61.MsgUpdateGroupPolicyAdmin>): _61.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _61.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _61.MsgCreateGroupWithPolicy;
                toJSON(message: _61.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_61.MsgCreateGroupWithPolicy>): _61.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _61.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _61.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _61.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_61.MsgCreateGroupWithPolicyResponse>): _61.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _61.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _61.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _61.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_61.MsgUpdateGroupPolicyAdminResponse>): _61.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _61.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _61.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _61.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_61.MsgUpdateGroupPolicyDecisionPolicy>): _61.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _61.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _61.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _61.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_61.MsgUpdateGroupPolicyDecisionPolicyResponse>): _61.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _61.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _61.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _61.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_61.MsgUpdateGroupPolicyMetadata>): _61.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _61.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _61.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _61.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_61.MsgUpdateGroupPolicyMetadataResponse>): _61.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _61.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgSubmitProposal;
                fromJSON(object: any): _61.MsgSubmitProposal;
                toJSON(message: _61.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_61.MsgSubmitProposal>): _61.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _61.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgSubmitProposalResponse;
                fromJSON(object: any): _61.MsgSubmitProposalResponse;
                toJSON(message: _61.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_61.MsgSubmitProposalResponse>): _61.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _61.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgWithdrawProposal;
                fromJSON(object: any): _61.MsgWithdrawProposal;
                toJSON(message: _61.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_61.MsgWithdrawProposal>): _61.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _61.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgWithdrawProposalResponse;
                fromJSON(_: any): _61.MsgWithdrawProposalResponse;
                toJSON(_: _61.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_61.MsgWithdrawProposalResponse>): _61.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _61.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgVote;
                fromJSON(object: any): _61.MsgVote;
                toJSON(message: _61.MsgVote): unknown;
                fromPartial(object: Partial<_61.MsgVote>): _61.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _61.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgVoteResponse;
                fromJSON(_: any): _61.MsgVoteResponse;
                toJSON(_: _61.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_61.MsgVoteResponse>): _61.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _61.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgExec;
                fromJSON(object: any): _61.MsgExec;
                toJSON(message: _61.MsgExec): unknown;
                fromPartial(object: Partial<_61.MsgExec>): _61.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _61.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgExecResponse;
                fromJSON(_: any): _61.MsgExecResponse;
                toJSON(_: _61.MsgExecResponse): unknown;
                fromPartial(_: Partial<_61.MsgExecResponse>): _61.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _61.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgLeaveGroup;
                fromJSON(object: any): _61.MsgLeaveGroup;
                toJSON(message: _61.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_61.MsgLeaveGroup>): _61.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _61.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgLeaveGroupResponse;
                fromJSON(_: any): _61.MsgLeaveGroupResponse;
                toJSON(_: _61.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_61.MsgLeaveGroupResponse>): _61.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _60.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupInfoRequest;
                fromJSON(object: any): _60.QueryGroupInfoRequest;
                toJSON(message: _60.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_60.QueryGroupInfoRequest>): _60.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _60.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupInfoResponse;
                fromJSON(object: any): _60.QueryGroupInfoResponse;
                toJSON(message: _60.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_60.QueryGroupInfoResponse>): _60.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _60.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _60.QueryGroupPolicyInfoRequest;
                toJSON(message: _60.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_60.QueryGroupPolicyInfoRequest>): _60.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _60.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _60.QueryGroupPolicyInfoResponse;
                toJSON(message: _60.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_60.QueryGroupPolicyInfoResponse>): _60.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _60.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupMembersRequest;
                fromJSON(object: any): _60.QueryGroupMembersRequest;
                toJSON(message: _60.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_60.QueryGroupMembersRequest>): _60.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _60.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupMembersResponse;
                fromJSON(object: any): _60.QueryGroupMembersResponse;
                toJSON(message: _60.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_60.QueryGroupMembersResponse>): _60.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _60.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupsByAdminRequest;
                fromJSON(object: any): _60.QueryGroupsByAdminRequest;
                toJSON(message: _60.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_60.QueryGroupsByAdminRequest>): _60.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _60.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupsByAdminResponse;
                fromJSON(object: any): _60.QueryGroupsByAdminResponse;
                toJSON(message: _60.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_60.QueryGroupsByAdminResponse>): _60.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _60.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _60.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _60.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_60.QueryGroupPoliciesByGroupRequest>): _60.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _60.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _60.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _60.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_60.QueryGroupPoliciesByGroupResponse>): _60.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _60.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _60.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _60.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_60.QueryGroupPoliciesByAdminRequest>): _60.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _60.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _60.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _60.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_60.QueryGroupPoliciesByAdminResponse>): _60.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _60.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalRequest;
                fromJSON(object: any): _60.QueryProposalRequest;
                toJSON(message: _60.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_60.QueryProposalRequest>): _60.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _60.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalResponse;
                fromJSON(object: any): _60.QueryProposalResponse;
                toJSON(message: _60.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_60.QueryProposalResponse>): _60.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _60.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _60.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _60.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_60.QueryProposalsByGroupPolicyRequest>): _60.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _60.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _60.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _60.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_60.QueryProposalsByGroupPolicyResponse>): _60.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _60.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _60.QueryVoteByProposalVoterRequest;
                toJSON(message: _60.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_60.QueryVoteByProposalVoterRequest>): _60.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _60.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _60.QueryVoteByProposalVoterResponse;
                toJSON(message: _60.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_60.QueryVoteByProposalVoterResponse>): _60.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _60.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVotesByProposalRequest;
                fromJSON(object: any): _60.QueryVotesByProposalRequest;
                toJSON(message: _60.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_60.QueryVotesByProposalRequest>): _60.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _60.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVotesByProposalResponse;
                fromJSON(object: any): _60.QueryVotesByProposalResponse;
                toJSON(message: _60.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_60.QueryVotesByProposalResponse>): _60.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _60.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVotesByVoterRequest;
                fromJSON(object: any): _60.QueryVotesByVoterRequest;
                toJSON(message: _60.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_60.QueryVotesByVoterRequest>): _60.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _60.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVotesByVoterResponse;
                fromJSON(object: any): _60.QueryVotesByVoterResponse;
                toJSON(message: _60.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_60.QueryVotesByVoterResponse>): _60.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _60.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupsByMemberRequest;
                fromJSON(object: any): _60.QueryGroupsByMemberRequest;
                toJSON(message: _60.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_60.QueryGroupsByMemberRequest>): _60.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _60.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupsByMemberResponse;
                fromJSON(object: any): _60.QueryGroupsByMemberResponse;
                toJSON(message: _60.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_60.QueryGroupsByMemberResponse>): _60.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _60.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryTallyResultRequest;
                fromJSON(object: any): _60.QueryTallyResultRequest;
                toJSON(message: _60.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_60.QueryTallyResultRequest>): _60.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _60.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryTallyResultResponse;
                fromJSON(object: any): _60.QueryTallyResultResponse;
                toJSON(message: _60.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_60.QueryTallyResultResponse>): _60.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _59.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.GenesisState;
                fromJSON(object: any): _59.GenesisState;
                toJSON(message: _59.GenesisState): unknown;
                fromPartial(object: Partial<_59.GenesisState>): _59.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _58.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventCreateGroup;
                fromJSON(object: any): _58.EventCreateGroup;
                toJSON(message: _58.EventCreateGroup): unknown;
                fromPartial(object: Partial<_58.EventCreateGroup>): _58.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _58.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventUpdateGroup;
                fromJSON(object: any): _58.EventUpdateGroup;
                toJSON(message: _58.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_58.EventUpdateGroup>): _58.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _58.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventCreateGroupPolicy;
                fromJSON(object: any): _58.EventCreateGroupPolicy;
                toJSON(message: _58.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_58.EventCreateGroupPolicy>): _58.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _58.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventUpdateGroupPolicy;
                fromJSON(object: any): _58.EventUpdateGroupPolicy;
                toJSON(message: _58.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_58.EventUpdateGroupPolicy>): _58.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _58.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventSubmitProposal;
                fromJSON(object: any): _58.EventSubmitProposal;
                toJSON(message: _58.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_58.EventSubmitProposal>): _58.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _58.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventWithdrawProposal;
                fromJSON(object: any): _58.EventWithdrawProposal;
                toJSON(message: _58.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_58.EventWithdrawProposal>): _58.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _58.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventVote;
                fromJSON(object: any): _58.EventVote;
                toJSON(message: _58.EventVote): unknown;
                fromPartial(object: Partial<_58.EventVote>): _58.EventVote;
            };
            EventExec: {
                encode(message: _58.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventExec;
                fromJSON(object: any): _58.EventExec;
                toJSON(message: _58.EventExec): unknown;
                fromPartial(object: Partial<_58.EventExec>): _58.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _58.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventLeaveGroup;
                fromJSON(object: any): _58.EventLeaveGroup;
                toJSON(message: _58.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_58.EventLeaveGroup>): _58.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _123.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                inflation(request?: _65.QueryInflationRequest): Promise<_65.QueryInflationResponse>;
                annualProvisions(request?: _65.QueryAnnualProvisionsRequest): Promise<_65.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _65.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryParamsRequest;
                fromJSON(_: any): _65.QueryParamsRequest;
                toJSON(_: _65.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_65.QueryParamsRequest>): _65.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _65.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryParamsResponse;
                fromJSON(object: any): _65.QueryParamsResponse;
                toJSON(message: _65.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_65.QueryParamsResponse>): _65.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _65.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryInflationRequest;
                fromJSON(_: any): _65.QueryInflationRequest;
                toJSON(_: _65.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_65.QueryInflationRequest>): _65.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _65.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryInflationResponse;
                fromJSON(object: any): _65.QueryInflationResponse;
                toJSON(message: _65.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_65.QueryInflationResponse>): _65.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _65.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _65.QueryAnnualProvisionsRequest;
                toJSON(_: _65.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_65.QueryAnnualProvisionsRequest>): _65.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _65.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _65.QueryAnnualProvisionsResponse;
                toJSON(message: _65.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_65.QueryAnnualProvisionsResponse>): _65.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _64.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Minter;
                fromJSON(object: any): _64.Minter;
                toJSON(message: _64.Minter): unknown;
                fromPartial(object: Partial<_64.Minter>): _64.Minter;
            };
            Params: {
                encode(message: _64.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Params;
                fromJSON(object: any): _64.Params;
                toJSON(message: _64.Params): unknown;
                fromPartial(object: Partial<_64.Params>): _64.Params;
            };
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GenesisState;
                fromJSON(object: any): _63.GenesisState;
                toJSON(message: _63.GenesisState): unknown;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _139.MsgClientImpl;
            QueryClientImpl: typeof _124.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _70.QueryBalanceRequest): Promise<_70.QueryBalanceResponse>;
                owner(request: _70.QueryOwnerRequest): Promise<_70.QueryOwnerResponse>;
                supply(request: _70.QuerySupplyRequest): Promise<_70.QuerySupplyResponse>;
                nFTs(request: _70.QueryNFTsRequest): Promise<_70.QueryNFTsResponse>;
                nFT(request: _70.QueryNFTRequest): Promise<_70.QueryNFTResponse>;
                class(request: _70.QueryClassRequest): Promise<_70.QueryClassResponse>;
                classes(request?: _70.QueryClassesRequest): Promise<_70.QueryClassesResponse>;
            };
            MsgSend: {
                encode(message: _71.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgSend;
                fromJSON(object: any): _71.MsgSend;
                toJSON(message: _71.MsgSend): unknown;
                fromPartial(object: Partial<_71.MsgSend>): _71.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _71.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgSendResponse;
                fromJSON(_: any): _71.MsgSendResponse;
                toJSON(_: _71.MsgSendResponse): unknown;
                fromPartial(_: Partial<_71.MsgSendResponse>): _71.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _70.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryBalanceRequest;
                fromJSON(object: any): _70.QueryBalanceRequest;
                toJSON(message: _70.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_70.QueryBalanceRequest>): _70.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _70.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryBalanceResponse;
                fromJSON(object: any): _70.QueryBalanceResponse;
                toJSON(message: _70.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_70.QueryBalanceResponse>): _70.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _70.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryOwnerRequest;
                fromJSON(object: any): _70.QueryOwnerRequest;
                toJSON(message: _70.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_70.QueryOwnerRequest>): _70.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _70.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryOwnerResponse;
                fromJSON(object: any): _70.QueryOwnerResponse;
                toJSON(message: _70.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_70.QueryOwnerResponse>): _70.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _70.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QuerySupplyRequest;
                fromJSON(object: any): _70.QuerySupplyRequest;
                toJSON(message: _70.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_70.QuerySupplyRequest>): _70.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _70.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QuerySupplyResponse;
                fromJSON(object: any): _70.QuerySupplyResponse;
                toJSON(message: _70.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_70.QuerySupplyResponse>): _70.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _70.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryNFTsRequest;
                fromJSON(object: any): _70.QueryNFTsRequest;
                toJSON(message: _70.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_70.QueryNFTsRequest>): _70.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _70.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryNFTsResponse;
                fromJSON(object: any): _70.QueryNFTsResponse;
                toJSON(message: _70.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_70.QueryNFTsResponse>): _70.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _70.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryNFTRequest;
                fromJSON(object: any): _70.QueryNFTRequest;
                toJSON(message: _70.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_70.QueryNFTRequest>): _70.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _70.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryNFTResponse;
                fromJSON(object: any): _70.QueryNFTResponse;
                toJSON(message: _70.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_70.QueryNFTResponse>): _70.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _70.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryClassRequest;
                fromJSON(object: any): _70.QueryClassRequest;
                toJSON(message: _70.QueryClassRequest): unknown;
                fromPartial(object: Partial<_70.QueryClassRequest>): _70.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _70.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryClassResponse;
                fromJSON(object: any): _70.QueryClassResponse;
                toJSON(message: _70.QueryClassResponse): unknown;
                fromPartial(object: Partial<_70.QueryClassResponse>): _70.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _70.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryClassesRequest;
                fromJSON(object: any): _70.QueryClassesRequest;
                toJSON(message: _70.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_70.QueryClassesRequest>): _70.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _70.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryClassesResponse;
                fromJSON(object: any): _70.QueryClassesResponse;
                toJSON(message: _70.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_70.QueryClassesResponse>): _70.QueryClassesResponse;
            };
            Class: {
                encode(message: _69.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Class;
                fromJSON(object: any): _69.Class;
                toJSON(message: _69.Class): unknown;
                fromPartial(object: Partial<_69.Class>): _69.Class;
            };
            NFT: {
                encode(message: _69.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.NFT;
                fromJSON(object: any): _69.NFT;
                toJSON(message: _69.NFT): unknown;
                fromPartial(object: Partial<_69.NFT>): _69.NFT;
            };
            GenesisState: {
                encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.GenesisState;
                fromJSON(object: any): _68.GenesisState;
                toJSON(message: _68.GenesisState): unknown;
                fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
            };
            Entry: {
                encode(message: _68.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Entry;
                fromJSON(object: any): _68.Entry;
                toJSON(message: _68.Entry): unknown;
                fromPartial(object: Partial<_68.Entry>): _68.Entry;
            };
            EventSend: {
                encode(message: _67.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.EventSend;
                fromJSON(object: any): _67.EventSend;
                toJSON(message: _67.EventSend): unknown;
                fromPartial(object: Partial<_67.EventSend>): _67.EventSend;
            };
            EventMint: {
                encode(message: _67.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.EventMint;
                fromJSON(object: any): _67.EventMint;
                toJSON(message: _67.EventMint): unknown;
                fromPartial(object: Partial<_67.EventMint>): _67.EventMint;
            };
            EventBurn: {
                encode(message: _67.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.EventBurn;
                fromJSON(object: any): _67.EventBurn;
                toJSON(message: _67.EventBurn): unknown;
                fromPartial(object: Partial<_67.EventBurn>): _67.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _72.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.TableDescriptor;
                fromJSON(object: any): _72.TableDescriptor;
                toJSON(message: _72.TableDescriptor): unknown;
                fromPartial(object: Partial<_72.TableDescriptor>): _72.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _72.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.PrimaryKeyDescriptor;
                fromJSON(object: any): _72.PrimaryKeyDescriptor;
                toJSON(message: _72.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_72.PrimaryKeyDescriptor>): _72.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _72.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.SecondaryIndexDescriptor;
                fromJSON(object: any): _72.SecondaryIndexDescriptor;
                toJSON(message: _72.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_72.SecondaryIndexDescriptor>): _72.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _72.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.SingletonDescriptor;
                fromJSON(object: any): _72.SingletonDescriptor;
                toJSON(message: _72.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_72.SingletonDescriptor>): _72.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _73.StorageType;
            storageTypeToJSON(object: _73.StorageType): string;
            StorageType: typeof _73.StorageType;
            StorageTypeSDKType: typeof _73.StorageTypeSDKType;
            ModuleSchemaDescriptor: {
                encode(message: _73.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ModuleSchemaDescriptor;
                fromJSON(object: any): _73.ModuleSchemaDescriptor;
                toJSON(message: _73.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_73.ModuleSchemaDescriptor>): _73.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _73.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _73.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _73.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_73.ModuleSchemaDescriptor_FileEntry>): _73.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _125.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                subspaces(request?: _75.QuerySubspacesRequest): Promise<_75.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _75.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryParamsRequest;
                fromJSON(object: any): _75.QueryParamsRequest;
                toJSON(message: _75.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_75.QueryParamsRequest>): _75.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _75.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryParamsResponse;
                fromJSON(object: any): _75.QueryParamsResponse;
                toJSON(message: _75.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_75.QueryParamsResponse>): _75.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _75.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QuerySubspacesRequest;
                fromJSON(_: any): _75.QuerySubspacesRequest;
                toJSON(_: _75.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_75.QuerySubspacesRequest>): _75.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _75.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QuerySubspacesResponse;
                fromJSON(object: any): _75.QuerySubspacesResponse;
                toJSON(message: _75.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_75.QuerySubspacesResponse>): _75.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _75.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Subspace;
                fromJSON(object: any): _75.Subspace;
                toJSON(message: _75.Subspace): unknown;
                fromPartial(object: Partial<_75.Subspace>): _75.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _74.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ParameterChangeProposal;
                fromJSON(object: any): _74.ParameterChangeProposal;
                toJSON(message: _74.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_74.ParameterChangeProposal>): _74.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _74.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ParamChange;
                fromJSON(object: any): _74.ParamChange;
                toJSON(message: _74.ParamChange): unknown;
                fromPartial(object: Partial<_74.ParamChange>): _74.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _140.MsgClientImpl;
            QueryClientImpl: typeof _126.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                signingInfo(request: _77.QuerySigningInfoRequest): Promise<_77.QuerySigningInfoResponse>;
                signingInfos(request?: _77.QuerySigningInfosRequest): Promise<_77.QuerySigningInfosResponse>;
            };
            MsgUnjail: {
                encode(message: _79.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUnjail;
                fromJSON(object: any): _79.MsgUnjail;
                toJSON(message: _79.MsgUnjail): unknown;
                fromPartial(object: Partial<_79.MsgUnjail>): _79.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _79.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUnjailResponse;
                fromJSON(_: any): _79.MsgUnjailResponse;
                toJSON(_: _79.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_79.MsgUnjailResponse>): _79.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _78.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ValidatorSigningInfo;
                fromJSON(object: any): _78.ValidatorSigningInfo;
                toJSON(message: _78.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_78.ValidatorSigningInfo>): _78.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _78.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Params;
                fromJSON(object: any): _78.Params;
                toJSON(message: _78.Params): unknown;
                fromPartial(object: Partial<_78.Params>): _78.Params;
            };
            QueryParamsRequest: {
                encode(_: _77.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryParamsRequest;
                fromJSON(_: any): _77.QueryParamsRequest;
                toJSON(_: _77.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_77.QueryParamsRequest>): _77.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _77.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryParamsResponse;
                fromJSON(object: any): _77.QueryParamsResponse;
                toJSON(message: _77.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_77.QueryParamsResponse>): _77.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _77.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QuerySigningInfoRequest;
                fromJSON(object: any): _77.QuerySigningInfoRequest;
                toJSON(message: _77.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_77.QuerySigningInfoRequest>): _77.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _77.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QuerySigningInfoResponse;
                fromJSON(object: any): _77.QuerySigningInfoResponse;
                toJSON(message: _77.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_77.QuerySigningInfoResponse>): _77.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _77.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QuerySigningInfosRequest;
                fromJSON(object: any): _77.QuerySigningInfosRequest;
                toJSON(message: _77.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_77.QuerySigningInfosRequest>): _77.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _77.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QuerySigningInfosResponse;
                fromJSON(object: any): _77.QuerySigningInfosResponse;
                toJSON(message: _77.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_77.QuerySigningInfosResponse>): _77.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _76.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.GenesisState;
                fromJSON(object: any): _76.GenesisState;
                toJSON(message: _76.GenesisState): unknown;
                fromPartial(object: Partial<_76.GenesisState>): _76.GenesisState;
            };
            SigningInfo: {
                encode(message: _76.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SigningInfo;
                fromJSON(object: any): _76.SigningInfo;
                toJSON(message: _76.SigningInfo): unknown;
                fromPartial(object: Partial<_76.SigningInfo>): _76.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _76.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ValidatorMissedBlocks;
                fromJSON(object: any): _76.ValidatorMissedBlocks;
                toJSON(message: _76.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_76.ValidatorMissedBlocks>): _76.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _76.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MissedBlock;
                fromJSON(object: any): _76.MissedBlock;
                toJSON(message: _76.MissedBlock): unknown;
                fromPartial(object: Partial<_76.MissedBlock>): _76.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _141.MsgClientImpl;
            QueryClientImpl: typeof _127.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _82.QueryValidatorsRequest): Promise<_82.QueryValidatorsResponse>;
                validator(request: _82.QueryValidatorRequest): Promise<_82.QueryValidatorResponse>;
                validatorDelegations(request: _82.QueryValidatorDelegationsRequest): Promise<_82.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _82.QueryValidatorUnbondingDelegationsRequest): Promise<_82.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _82.QueryDelegationRequest): Promise<_82.QueryDelegationResponse>;
                unbondingDelegation(request: _82.QueryUnbondingDelegationRequest): Promise<_82.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _82.QueryDelegatorDelegationsRequest): Promise<_82.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _82.QueryDelegatorUnbondingDelegationsRequest): Promise<_82.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _82.QueryRedelegationsRequest): Promise<_82.QueryRedelegationsResponse>;
                delegatorValidators(request: _82.QueryDelegatorValidatorsRequest): Promise<_82.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _82.QueryDelegatorValidatorRequest): Promise<_82.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _82.QueryHistoricalInfoRequest): Promise<_82.QueryHistoricalInfoResponse>;
                pool(request?: _82.QueryPoolRequest): Promise<_82.QueryPoolResponse>;
                params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
            };
            MsgCreateValidator: {
                encode(message: _84.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgCreateValidator;
                fromJSON(object: any): _84.MsgCreateValidator;
                toJSON(message: _84.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_84.MsgCreateValidator>): _84.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _84.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgCreateValidatorResponse;
                fromJSON(_: any): _84.MsgCreateValidatorResponse;
                toJSON(_: _84.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_84.MsgCreateValidatorResponse>): _84.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _84.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgEditValidator;
                fromJSON(object: any): _84.MsgEditValidator;
                toJSON(message: _84.MsgEditValidator): unknown;
                fromPartial(object: Partial<_84.MsgEditValidator>): _84.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _84.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgEditValidatorResponse;
                fromJSON(_: any): _84.MsgEditValidatorResponse;
                toJSON(_: _84.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_84.MsgEditValidatorResponse>): _84.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _84.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgDelegate;
                fromJSON(object: any): _84.MsgDelegate;
                toJSON(message: _84.MsgDelegate): unknown;
                fromPartial(object: Partial<_84.MsgDelegate>): _84.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _84.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgDelegateResponse;
                fromJSON(_: any): _84.MsgDelegateResponse;
                toJSON(_: _84.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_84.MsgDelegateResponse>): _84.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _84.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgBeginRedelegate;
                fromJSON(object: any): _84.MsgBeginRedelegate;
                toJSON(message: _84.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_84.MsgBeginRedelegate>): _84.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _84.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgBeginRedelegateResponse;
                fromJSON(object: any): _84.MsgBeginRedelegateResponse;
                toJSON(message: _84.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_84.MsgBeginRedelegateResponse>): _84.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _84.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgUndelegate;
                fromJSON(object: any): _84.MsgUndelegate;
                toJSON(message: _84.MsgUndelegate): unknown;
                fromPartial(object: Partial<_84.MsgUndelegate>): _84.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _84.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgUndelegateResponse;
                fromJSON(object: any): _84.MsgUndelegateResponse;
                toJSON(message: _84.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_84.MsgUndelegateResponse>): _84.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _83.BondStatus;
            bondStatusToJSON(object: _83.BondStatus): string;
            BondStatus: typeof _83.BondStatus;
            BondStatusSDKType: typeof _83.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _83.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.HistoricalInfo;
                fromJSON(object: any): _83.HistoricalInfo;
                toJSON(message: _83.HistoricalInfo): unknown;
                fromPartial(object: Partial<_83.HistoricalInfo>): _83.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _83.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.CommissionRates;
                fromJSON(object: any): _83.CommissionRates;
                toJSON(message: _83.CommissionRates): unknown;
                fromPartial(object: Partial<_83.CommissionRates>): _83.CommissionRates;
            };
            Commission: {
                encode(message: _83.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Commission;
                fromJSON(object: any): _83.Commission;
                toJSON(message: _83.Commission): unknown;
                fromPartial(object: Partial<_83.Commission>): _83.Commission;
            };
            Description: {
                encode(message: _83.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Description;
                fromJSON(object: any): _83.Description;
                toJSON(message: _83.Description): unknown;
                fromPartial(object: Partial<_83.Description>): _83.Description;
            };
            Validator: {
                encode(message: _83.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Validator;
                fromJSON(object: any): _83.Validator;
                toJSON(message: _83.Validator): unknown;
                fromPartial(object: Partial<_83.Validator>): _83.Validator;
            };
            ValAddresses: {
                encode(message: _83.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ValAddresses;
                fromJSON(object: any): _83.ValAddresses;
                toJSON(message: _83.ValAddresses): unknown;
                fromPartial(object: Partial<_83.ValAddresses>): _83.ValAddresses;
            };
            DVPair: {
                encode(message: _83.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.DVPair;
                fromJSON(object: any): _83.DVPair;
                toJSON(message: _83.DVPair): unknown;
                fromPartial(object: Partial<_83.DVPair>): _83.DVPair;
            };
            DVPairs: {
                encode(message: _83.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.DVPairs;
                fromJSON(object: any): _83.DVPairs;
                toJSON(message: _83.DVPairs): unknown;
                fromPartial(object: Partial<_83.DVPairs>): _83.DVPairs;
            };
            DVVTriplet: {
                encode(message: _83.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.DVVTriplet;
                fromJSON(object: any): _83.DVVTriplet;
                toJSON(message: _83.DVVTriplet): unknown;
                fromPartial(object: Partial<_83.DVVTriplet>): _83.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _83.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.DVVTriplets;
                fromJSON(object: any): _83.DVVTriplets;
                toJSON(message: _83.DVVTriplets): unknown;
                fromPartial(object: Partial<_83.DVVTriplets>): _83.DVVTriplets;
            };
            Delegation: {
                encode(message: _83.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Delegation;
                fromJSON(object: any): _83.Delegation;
                toJSON(message: _83.Delegation): unknown;
                fromPartial(object: Partial<_83.Delegation>): _83.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _83.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.UnbondingDelegation;
                fromJSON(object: any): _83.UnbondingDelegation;
                toJSON(message: _83.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_83.UnbondingDelegation>): _83.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _83.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.UnbondingDelegationEntry;
                fromJSON(object: any): _83.UnbondingDelegationEntry;
                toJSON(message: _83.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_83.UnbondingDelegationEntry>): _83.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _83.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RedelegationEntry;
                fromJSON(object: any): _83.RedelegationEntry;
                toJSON(message: _83.RedelegationEntry): unknown;
                fromPartial(object: Partial<_83.RedelegationEntry>): _83.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _83.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Redelegation;
                fromJSON(object: any): _83.Redelegation;
                toJSON(message: _83.Redelegation): unknown;
                fromPartial(object: Partial<_83.Redelegation>): _83.Redelegation;
            };
            Params: {
                encode(message: _83.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Params;
                fromJSON(object: any): _83.Params;
                toJSON(message: _83.Params): unknown;
                fromPartial(object: Partial<_83.Params>): _83.Params;
            };
            DelegationResponse: {
                encode(message: _83.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.DelegationResponse;
                fromJSON(object: any): _83.DelegationResponse;
                toJSON(message: _83.DelegationResponse): unknown;
                fromPartial(object: Partial<_83.DelegationResponse>): _83.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _83.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RedelegationEntryResponse;
                fromJSON(object: any): _83.RedelegationEntryResponse;
                toJSON(message: _83.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_83.RedelegationEntryResponse>): _83.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _83.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RedelegationResponse;
                fromJSON(object: any): _83.RedelegationResponse;
                toJSON(message: _83.RedelegationResponse): unknown;
                fromPartial(object: Partial<_83.RedelegationResponse>): _83.RedelegationResponse;
            };
            Pool: {
                encode(message: _83.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Pool;
                fromJSON(object: any): _83.Pool;
                toJSON(message: _83.Pool): unknown;
                fromPartial(object: Partial<_83.Pool>): _83.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _82.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorsRequest;
                fromJSON(object: any): _82.QueryValidatorsRequest;
                toJSON(message: _82.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_82.QueryValidatorsRequest>): _82.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _82.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorsResponse;
                fromJSON(object: any): _82.QueryValidatorsResponse;
                toJSON(message: _82.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_82.QueryValidatorsResponse>): _82.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _82.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorRequest;
                fromJSON(object: any): _82.QueryValidatorRequest;
                toJSON(message: _82.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_82.QueryValidatorRequest>): _82.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _82.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorResponse;
                fromJSON(object: any): _82.QueryValidatorResponse;
                toJSON(message: _82.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_82.QueryValidatorResponse>): _82.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _82.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _82.QueryValidatorDelegationsRequest;
                toJSON(message: _82.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_82.QueryValidatorDelegationsRequest>): _82.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _82.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _82.QueryValidatorDelegationsResponse;
                toJSON(message: _82.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_82.QueryValidatorDelegationsResponse>): _82.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _82.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _82.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _82.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_82.QueryValidatorUnbondingDelegationsRequest>): _82.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _82.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _82.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _82.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_82.QueryValidatorUnbondingDelegationsResponse>): _82.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _82.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegationRequest;
                fromJSON(object: any): _82.QueryDelegationRequest;
                toJSON(message: _82.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_82.QueryDelegationRequest>): _82.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _82.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegationResponse;
                fromJSON(object: any): _82.QueryDelegationResponse;
                toJSON(message: _82.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_82.QueryDelegationResponse>): _82.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _82.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _82.QueryUnbondingDelegationRequest;
                toJSON(message: _82.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_82.QueryUnbondingDelegationRequest>): _82.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _82.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _82.QueryUnbondingDelegationResponse;
                toJSON(message: _82.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_82.QueryUnbondingDelegationResponse>): _82.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _82.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _82.QueryDelegatorDelegationsRequest;
                toJSON(message: _82.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_82.QueryDelegatorDelegationsRequest>): _82.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _82.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _82.QueryDelegatorDelegationsResponse;
                toJSON(message: _82.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_82.QueryDelegatorDelegationsResponse>): _82.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _82.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _82.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _82.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_82.QueryDelegatorUnbondingDelegationsRequest>): _82.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _82.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _82.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _82.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_82.QueryDelegatorUnbondingDelegationsResponse>): _82.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _82.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryRedelegationsRequest;
                fromJSON(object: any): _82.QueryRedelegationsRequest;
                toJSON(message: _82.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_82.QueryRedelegationsRequest>): _82.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _82.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryRedelegationsResponse;
                fromJSON(object: any): _82.QueryRedelegationsResponse;
                toJSON(message: _82.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_82.QueryRedelegationsResponse>): _82.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _82.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _82.QueryDelegatorValidatorsRequest;
                toJSON(message: _82.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_82.QueryDelegatorValidatorsRequest>): _82.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _82.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _82.QueryDelegatorValidatorsResponse;
                toJSON(message: _82.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_82.QueryDelegatorValidatorsResponse>): _82.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _82.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _82.QueryDelegatorValidatorRequest;
                toJSON(message: _82.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_82.QueryDelegatorValidatorRequest>): _82.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _82.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _82.QueryDelegatorValidatorResponse;
                toJSON(message: _82.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_82.QueryDelegatorValidatorResponse>): _82.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _82.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryHistoricalInfoRequest;
                fromJSON(object: any): _82.QueryHistoricalInfoRequest;
                toJSON(message: _82.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_82.QueryHistoricalInfoRequest>): _82.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _82.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryHistoricalInfoResponse;
                fromJSON(object: any): _82.QueryHistoricalInfoResponse;
                toJSON(message: _82.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_82.QueryHistoricalInfoResponse>): _82.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _82.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryPoolRequest;
                fromJSON(_: any): _82.QueryPoolRequest;
                toJSON(_: _82.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_82.QueryPoolRequest>): _82.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _82.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryPoolResponse;
                fromJSON(object: any): _82.QueryPoolResponse;
                toJSON(message: _82.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_82.QueryPoolResponse>): _82.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _82.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryParamsRequest;
                fromJSON(_: any): _82.QueryParamsRequest;
                toJSON(_: _82.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_82.QueryParamsRequest>): _82.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _82.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryParamsResponse;
                fromJSON(object: any): _82.QueryParamsResponse;
                toJSON(message: _82.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_82.QueryParamsResponse>): _82.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _81.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.GenesisState;
                fromJSON(object: any): _81.GenesisState;
                toJSON(message: _81.GenesisState): unknown;
                fromPartial(object: Partial<_81.GenesisState>): _81.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _81.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.LastValidatorPower;
                fromJSON(object: any): _81.LastValidatorPower;
                toJSON(message: _81.LastValidatorPower): unknown;
                fromPartial(object: Partial<_81.LastValidatorPower>): _81.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _80.AuthorizationType;
            authorizationTypeToJSON(object: _80.AuthorizationType): string;
            AuthorizationType: typeof _80.AuthorizationType;
            AuthorizationTypeSDKType: typeof _80.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _80.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.StakeAuthorization;
                fromJSON(object: any): _80.StakeAuthorization;
                toJSON(message: _80.StakeAuthorization): unknown;
                fromPartial(object: Partial<_80.StakeAuthorization>): _80.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _80.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.StakeAuthorization_Validators;
                fromJSON(object: any): _80.StakeAuthorization_Validators;
                toJSON(message: _80.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_80.StakeAuthorization_Validators>): _80.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _85.SignMode;
                signModeToJSON(object: _85.SignMode): string;
                SignMode: typeof _85.SignMode;
                SignModeSDKType: typeof _85.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _85.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.SignatureDescriptors;
                    fromJSON(object: any): _85.SignatureDescriptors;
                    toJSON(message: _85.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_85.SignatureDescriptors>): _85.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _85.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.SignatureDescriptor;
                    fromJSON(object: any): _85.SignatureDescriptor;
                    toJSON(message: _85.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_85.SignatureDescriptor>): _85.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _85.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.SignatureDescriptor_Data;
                    fromJSON(object: any): _85.SignatureDescriptor_Data;
                    toJSON(message: _85.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_85.SignatureDescriptor_Data>): _85.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _85.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _85.SignatureDescriptor_Data_Single;
                    toJSON(message: _85.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_85.SignatureDescriptor_Data_Single>): _85.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _85.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _85.SignatureDescriptor_Data_Multi;
                    toJSON(message: _85.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_85.SignatureDescriptor_Data_Multi>): _85.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _128.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _86.SimulateRequest): Promise<_86.SimulateResponse>;
                getTx(request: _86.GetTxRequest): Promise<_86.GetTxResponse>;
                broadcastTx(request: _86.BroadcastTxRequest): Promise<_86.BroadcastTxResponse>;
                getTxsEvent(request: _86.GetTxsEventRequest): Promise<_86.GetTxsEventResponse>;
                getBlockWithTxs(request: _86.GetBlockWithTxsRequest): Promise<_86.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _87.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Tx;
                fromJSON(object: any): _87.Tx;
                toJSON(message: _87.Tx): unknown;
                fromPartial(object: Partial<_87.Tx>): _87.Tx;
            };
            TxRaw: {
                encode(message: _87.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.TxRaw;
                fromJSON(object: any): _87.TxRaw;
                toJSON(message: _87.TxRaw): unknown;
                fromPartial(object: Partial<_87.TxRaw>): _87.TxRaw;
            };
            SignDoc: {
                encode(message: _87.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignDoc;
                fromJSON(object: any): _87.SignDoc;
                toJSON(message: _87.SignDoc): unknown;
                fromPartial(object: Partial<_87.SignDoc>): _87.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _87.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignDocDirectAux;
                fromJSON(object: any): _87.SignDocDirectAux;
                toJSON(message: _87.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_87.SignDocDirectAux>): _87.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _87.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.TxBody;
                fromJSON(object: any): _87.TxBody;
                toJSON(message: _87.TxBody): unknown;
                fromPartial(object: Partial<_87.TxBody>): _87.TxBody;
            };
            AuthInfo: {
                encode(message: _87.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.AuthInfo;
                fromJSON(object: any): _87.AuthInfo;
                toJSON(message: _87.AuthInfo): unknown;
                fromPartial(object: Partial<_87.AuthInfo>): _87.AuthInfo;
            };
            SignerInfo: {
                encode(message: _87.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignerInfo;
                fromJSON(object: any): _87.SignerInfo;
                toJSON(message: _87.SignerInfo): unknown;
                fromPartial(object: Partial<_87.SignerInfo>): _87.SignerInfo;
            };
            ModeInfo: {
                encode(message: _87.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ModeInfo;
                fromJSON(object: any): _87.ModeInfo;
                toJSON(message: _87.ModeInfo): unknown;
                fromPartial(object: Partial<_87.ModeInfo>): _87.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _87.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ModeInfo_Single;
                fromJSON(object: any): _87.ModeInfo_Single;
                toJSON(message: _87.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_87.ModeInfo_Single>): _87.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _87.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ModeInfo_Multi;
                fromJSON(object: any): _87.ModeInfo_Multi;
                toJSON(message: _87.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_87.ModeInfo_Multi>): _87.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _87.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Fee;
                fromJSON(object: any): _87.Fee;
                toJSON(message: _87.Fee): unknown;
                fromPartial(object: Partial<_87.Fee>): _87.Fee;
            };
            Tip: {
                encode(message: _87.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Tip;
                fromJSON(object: any): _87.Tip;
                toJSON(message: _87.Tip): unknown;
                fromPartial(object: Partial<_87.Tip>): _87.Tip;
            };
            AuxSignerData: {
                encode(message: _87.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.AuxSignerData;
                fromJSON(object: any): _87.AuxSignerData;
                toJSON(message: _87.AuxSignerData): unknown;
                fromPartial(object: Partial<_87.AuxSignerData>): _87.AuxSignerData;
            };
            orderByFromJSON(object: any): _86.OrderBy;
            orderByToJSON(object: _86.OrderBy): string;
            broadcastModeFromJSON(object: any): _86.BroadcastMode;
            broadcastModeToJSON(object: _86.BroadcastMode): string;
            OrderBy: typeof _86.OrderBy;
            OrderBySDKType: typeof _86.OrderBySDKType;
            BroadcastMode: typeof _86.BroadcastMode;
            BroadcastModeSDKType: typeof _86.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _86.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GetTxsEventRequest;
                fromJSON(object: any): _86.GetTxsEventRequest;
                toJSON(message: _86.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_86.GetTxsEventRequest>): _86.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _86.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GetTxsEventResponse;
                fromJSON(object: any): _86.GetTxsEventResponse;
                toJSON(message: _86.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_86.GetTxsEventResponse>): _86.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _86.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.BroadcastTxRequest;
                fromJSON(object: any): _86.BroadcastTxRequest;
                toJSON(message: _86.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_86.BroadcastTxRequest>): _86.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _86.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.BroadcastTxResponse;
                fromJSON(object: any): _86.BroadcastTxResponse;
                toJSON(message: _86.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_86.BroadcastTxResponse>): _86.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _86.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SimulateRequest;
                fromJSON(object: any): _86.SimulateRequest;
                toJSON(message: _86.SimulateRequest): unknown;
                fromPartial(object: Partial<_86.SimulateRequest>): _86.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _86.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SimulateResponse;
                fromJSON(object: any): _86.SimulateResponse;
                toJSON(message: _86.SimulateResponse): unknown;
                fromPartial(object: Partial<_86.SimulateResponse>): _86.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _86.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GetTxRequest;
                fromJSON(object: any): _86.GetTxRequest;
                toJSON(message: _86.GetTxRequest): unknown;
                fromPartial(object: Partial<_86.GetTxRequest>): _86.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _86.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GetTxResponse;
                fromJSON(object: any): _86.GetTxResponse;
                toJSON(message: _86.GetTxResponse): unknown;
                fromPartial(object: Partial<_86.GetTxResponse>): _86.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _86.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GetBlockWithTxsRequest;
                fromJSON(object: any): _86.GetBlockWithTxsRequest;
                toJSON(message: _86.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_86.GetBlockWithTxsRequest>): _86.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _86.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GetBlockWithTxsResponse;
                fromJSON(object: any): _86.GetBlockWithTxsResponse;
                toJSON(message: _86.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_86.GetBlockWithTxsResponse>): _86.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _142.MsgClientImpl;
            QueryClientImpl: typeof _129.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _88.QueryCurrentPlanRequest): Promise<_88.QueryCurrentPlanResponse>;
                appliedPlan(request: _88.QueryAppliedPlanRequest): Promise<_88.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _88.QueryUpgradedConsensusStateRequest): Promise<_88.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _88.QueryModuleVersionsRequest): Promise<_88.QueryModuleVersionsResponse>;
                authority(request?: _88.QueryAuthorityRequest): Promise<_88.QueryAuthorityResponse>;
            };
            Plan: {
                encode(message: _90.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Plan;
                fromJSON(object: any): _90.Plan;
                toJSON(message: _90.Plan): unknown;
                fromPartial(object: Partial<_90.Plan>): _90.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _90.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SoftwareUpgradeProposal;
                fromJSON(object: any): _90.SoftwareUpgradeProposal;
                toJSON(message: _90.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_90.SoftwareUpgradeProposal>): _90.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _90.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _90.CancelSoftwareUpgradeProposal;
                toJSON(message: _90.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_90.CancelSoftwareUpgradeProposal>): _90.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _90.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ModuleVersion;
                fromJSON(object: any): _90.ModuleVersion;
                toJSON(message: _90.ModuleVersion): unknown;
                fromPartial(object: Partial<_90.ModuleVersion>): _90.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _89.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgSoftwareUpgrade;
                fromJSON(object: any): _89.MsgSoftwareUpgrade;
                toJSON(message: _89.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_89.MsgSoftwareUpgrade>): _89.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _89.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _89.MsgSoftwareUpgradeResponse;
                toJSON(_: _89.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_89.MsgSoftwareUpgradeResponse>): _89.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _89.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgCancelUpgrade;
                fromJSON(object: any): _89.MsgCancelUpgrade;
                toJSON(message: _89.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_89.MsgCancelUpgrade>): _89.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _89.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgCancelUpgradeResponse;
                fromJSON(_: any): _89.MsgCancelUpgradeResponse;
                toJSON(_: _89.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_89.MsgCancelUpgradeResponse>): _89.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _88.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryCurrentPlanRequest;
                fromJSON(_: any): _88.QueryCurrentPlanRequest;
                toJSON(_: _88.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_88.QueryCurrentPlanRequest>): _88.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _88.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryCurrentPlanResponse;
                fromJSON(object: any): _88.QueryCurrentPlanResponse;
                toJSON(message: _88.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_88.QueryCurrentPlanResponse>): _88.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _88.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryAppliedPlanRequest;
                fromJSON(object: any): _88.QueryAppliedPlanRequest;
                toJSON(message: _88.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_88.QueryAppliedPlanRequest>): _88.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _88.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryAppliedPlanResponse;
                fromJSON(object: any): _88.QueryAppliedPlanResponse;
                toJSON(message: _88.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_88.QueryAppliedPlanResponse>): _88.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _88.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _88.QueryUpgradedConsensusStateRequest;
                toJSON(message: _88.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_88.QueryUpgradedConsensusStateRequest>): _88.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _88.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _88.QueryUpgradedConsensusStateResponse;
                toJSON(message: _88.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_88.QueryUpgradedConsensusStateResponse>): _88.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _88.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryModuleVersionsRequest;
                fromJSON(object: any): _88.QueryModuleVersionsRequest;
                toJSON(message: _88.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_88.QueryModuleVersionsRequest>): _88.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _88.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryModuleVersionsResponse;
                fromJSON(object: any): _88.QueryModuleVersionsResponse;
                toJSON(message: _88.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_88.QueryModuleVersionsResponse>): _88.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _88.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryAuthorityRequest;
                fromJSON(_: any): _88.QueryAuthorityRequest;
                toJSON(_: _88.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_88.QueryAuthorityRequest>): _88.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _88.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryAuthorityResponse;
                fromJSON(object: any): _88.QueryAuthorityResponse;
                toJSON(message: _88.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_88.QueryAuthorityResponse>): _88.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _143.MsgClientImpl;
            BaseVestingAccount: {
                encode(message: _92.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.BaseVestingAccount;
                fromJSON(object: any): _92.BaseVestingAccount;
                toJSON(message: _92.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_92.BaseVestingAccount>): _92.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _92.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ContinuousVestingAccount;
                fromJSON(object: any): _92.ContinuousVestingAccount;
                toJSON(message: _92.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_92.ContinuousVestingAccount>): _92.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _92.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.DelayedVestingAccount;
                fromJSON(object: any): _92.DelayedVestingAccount;
                toJSON(message: _92.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_92.DelayedVestingAccount>): _92.DelayedVestingAccount;
            };
            Period: {
                encode(message: _92.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Period;
                fromJSON(object: any): _92.Period;
                toJSON(message: _92.Period): unknown;
                fromPartial(object: Partial<_92.Period>): _92.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _92.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.PeriodicVestingAccount;
                fromJSON(object: any): _92.PeriodicVestingAccount;
                toJSON(message: _92.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_92.PeriodicVestingAccount>): _92.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _92.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.PermanentLockedAccount;
                fromJSON(object: any): _92.PermanentLockedAccount;
                toJSON(message: _92.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_92.PermanentLockedAccount>): _92.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _91.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCreateVestingAccount;
                fromJSON(object: any): _91.MsgCreateVestingAccount;
                toJSON(message: _91.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_91.MsgCreateVestingAccount>): _91.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _91.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _91.MsgCreateVestingAccountResponse;
                toJSON(_: _91.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_91.MsgCreateVestingAccountResponse>): _91.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _91.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _91.MsgCreatePermanentLockedAccount;
                toJSON(message: _91.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_91.MsgCreatePermanentLockedAccount>): _91.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _91.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _91.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _91.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_91.MsgCreatePermanentLockedAccountResponse>): _91.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _91.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _91.MsgCreatePeriodicVestingAccount;
                toJSON(message: _91.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_91.MsgCreatePeriodicVestingAccount>): _91.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _91.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _91.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _91.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_91.MsgCreatePeriodicVestingAccountResponse>): _91.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _130.MsgClientImpl;
                };
                bank: {
                    v1beta1: _131.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _132.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _133.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _134.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _135.MsgClientImpl;
                };
                gov: {
                    v1: _136.MsgClientImpl;
                    v1beta1: _137.MsgClientImpl;
                };
                group: {
                    v1: _138.MsgClientImpl;
                };
                nft: {
                    v1beta1: _139.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _140.MsgClientImpl;
                };
                staking: {
                    v1beta1: _141.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _142.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _143.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _3.QueryConfigRequest): Promise<_3.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _6.QueryAccountsRequest): Promise<_6.QueryAccountsResponse>;
                        account(request: _6.QueryAccountRequest): Promise<_6.QueryAccountResponse>;
                        params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                        moduleAccounts(request?: _6.QueryModuleAccountsRequest): Promise<_6.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _6.Bech32PrefixRequest): Promise<_6.Bech32PrefixResponse>;
                        addressBytesToString(request: _6.AddressBytesToStringRequest): Promise<_6.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _6.AddressStringToBytesRequest): Promise<_6.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _10.QueryGrantsRequest): Promise<_10.QueryGrantsResponse>;
                        granterGrants(request: _10.QueryGranterGrantsRequest): Promise<_10.QueryGranterGrantsResponse>;
                        granteeGrants(request: _10.QueryGranteeGrantsRequest): Promise<_10.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _15.QueryBalanceRequest): Promise<_15.QueryBalanceResponse>;
                        allBalances(request: _15.QueryAllBalancesRequest): Promise<_15.QueryAllBalancesResponse>;
                        spendableBalances(request: _15.QuerySpendableBalancesRequest): Promise<_15.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _15.QueryTotalSupplyRequest): Promise<_15.QueryTotalSupplyResponse>;
                        supplyOf(request: _15.QuerySupplyOfRequest): Promise<_15.QuerySupplyOfResponse>;
                        params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                        denomMetadata(request: _15.QueryDenomMetadataRequest): Promise<_15.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _15.QueryDenomsMetadataRequest): Promise<_15.QueryDenomsMetadataResponse>;
                        denomOwners(request: _15.QueryDenomOwnersRequest): Promise<_15.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _25.GetNodeInfoRequest): Promise<_25.GetNodeInfoResponse>;
                            getSyncing(request?: _25.GetSyncingRequest): Promise<_25.GetSyncingResponse>;
                            getLatestBlock(request?: _25.GetLatestBlockRequest): Promise<_25.GetLatestBlockResponse>;
                            getBlockByHeight(request: _25.GetBlockByHeightRequest): Promise<_25.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _25.GetLatestValidatorSetRequest): Promise<_25.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _25.GetValidatorSetByHeightRequest): Promise<_25.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _39.QueryValidatorOutstandingRewardsRequest): Promise<_39.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _39.QueryValidatorCommissionRequest): Promise<_39.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _39.QueryValidatorSlashesRequest): Promise<_39.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _39.QueryDelegationRewardsRequest): Promise<_39.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _39.QueryDelegationTotalRewardsRequest): Promise<_39.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _39.QueryDelegatorValidatorsRequest): Promise<_39.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _39.QueryDelegatorWithdrawAddressRequest): Promise<_39.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _39.QueryCommunityPoolRequest): Promise<_39.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _43.QueryEvidenceRequest): Promise<_43.QueryEvidenceResponse>;
                        allEvidence(request?: _43.QueryAllEvidenceRequest): Promise<_43.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _47.QueryAllowanceRequest): Promise<_47.QueryAllowanceResponse>;
                        allowances(request: _47.QueryAllowancesRequest): Promise<_47.QueryAllowancesResponse>;
                        allowancesByGranter(request: _47.QueryAllowancesByGranterRequest): Promise<_47.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _52.QueryProposalRequest): Promise<_52.QueryProposalResponse>;
                        proposals(request: _52.QueryProposalsRequest): Promise<_52.QueryProposalsResponse>;
                        vote(request: _52.QueryVoteRequest): Promise<_52.QueryVoteResponse>;
                        votes(request: _52.QueryVotesRequest): Promise<_52.QueryVotesResponse>;
                        params(request: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                        deposit(request: _52.QueryDepositRequest): Promise<_52.QueryDepositResponse>;
                        deposits(request: _52.QueryDepositsRequest): Promise<_52.QueryDepositsResponse>;
                        tallyResult(request: _52.QueryTallyResultRequest): Promise<_52.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _56.QueryProposalRequest): Promise<_56.QueryProposalResponse>;
                        proposals(request: _56.QueryProposalsRequest): Promise<_56.QueryProposalsResponse>;
                        vote(request: _56.QueryVoteRequest): Promise<_56.QueryVoteResponse>;
                        votes(request: _56.QueryVotesRequest): Promise<_56.QueryVotesResponse>;
                        params(request: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                        deposit(request: _56.QueryDepositRequest): Promise<_56.QueryDepositResponse>;
                        deposits(request: _56.QueryDepositsRequest): Promise<_56.QueryDepositsResponse>;
                        tallyResult(request: _56.QueryTallyResultRequest): Promise<_56.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _60.QueryGroupInfoRequest): Promise<_60.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _60.QueryGroupPolicyInfoRequest): Promise<_60.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _60.QueryGroupMembersRequest): Promise<_60.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _60.QueryGroupsByAdminRequest): Promise<_60.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _60.QueryGroupPoliciesByGroupRequest): Promise<_60.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _60.QueryGroupPoliciesByAdminRequest): Promise<_60.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _60.QueryProposalRequest): Promise<_60.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _60.QueryProposalsByGroupPolicyRequest): Promise<_60.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _60.QueryVoteByProposalVoterRequest): Promise<_60.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _60.QueryVotesByProposalRequest): Promise<_60.QueryVotesByProposalResponse>;
                        votesByVoter(request: _60.QueryVotesByVoterRequest): Promise<_60.QueryVotesByVoterResponse>;
                        groupsByMember(request: _60.QueryGroupsByMemberRequest): Promise<_60.QueryGroupsByMemberResponse>;
                        tallyResult(request: _60.QueryTallyResultRequest): Promise<_60.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                        inflation(request?: _65.QueryInflationRequest): Promise<_65.QueryInflationResponse>;
                        annualProvisions(request?: _65.QueryAnnualProvisionsRequest): Promise<_65.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _70.QueryBalanceRequest): Promise<_70.QueryBalanceResponse>;
                        owner(request: _70.QueryOwnerRequest): Promise<_70.QueryOwnerResponse>;
                        supply(request: _70.QuerySupplyRequest): Promise<_70.QuerySupplyResponse>;
                        nFTs(request: _70.QueryNFTsRequest): Promise<_70.QueryNFTsResponse>;
                        nFT(request: _70.QueryNFTRequest): Promise<_70.QueryNFTResponse>;
                        class(request: _70.QueryClassRequest): Promise<_70.QueryClassResponse>;
                        classes(request?: _70.QueryClassesRequest): Promise<_70.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                        subspaces(request?: _75.QuerySubspacesRequest): Promise<_75.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                        signingInfo(request: _77.QuerySigningInfoRequest): Promise<_77.QuerySigningInfoResponse>;
                        signingInfos(request?: _77.QuerySigningInfosRequest): Promise<_77.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _82.QueryValidatorsRequest): Promise<_82.QueryValidatorsResponse>;
                        validator(request: _82.QueryValidatorRequest): Promise<_82.QueryValidatorResponse>;
                        validatorDelegations(request: _82.QueryValidatorDelegationsRequest): Promise<_82.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _82.QueryValidatorUnbondingDelegationsRequest): Promise<_82.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _82.QueryDelegationRequest): Promise<_82.QueryDelegationResponse>;
                        unbondingDelegation(request: _82.QueryUnbondingDelegationRequest): Promise<_82.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _82.QueryDelegatorDelegationsRequest): Promise<_82.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _82.QueryDelegatorUnbondingDelegationsRequest): Promise<_82.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _82.QueryRedelegationsRequest): Promise<_82.QueryRedelegationsResponse>;
                        delegatorValidators(request: _82.QueryDelegatorValidatorsRequest): Promise<_82.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _82.QueryDelegatorValidatorRequest): Promise<_82.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _82.QueryHistoricalInfoRequest): Promise<_82.QueryHistoricalInfoResponse>;
                        pool(request?: _82.QueryPoolRequest): Promise<_82.QueryPoolResponse>;
                        params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _86.SimulateRequest): Promise<_86.SimulateResponse>;
                        getTx(request: _86.GetTxRequest): Promise<_86.GetTxResponse>;
                        broadcastTx(request: _86.BroadcastTxRequest): Promise<_86.BroadcastTxResponse>;
                        getTxsEvent(request: _86.GetTxsEventRequest): Promise<_86.GetTxsEventResponse>;
                        getBlockWithTxs(request: _86.GetBlockWithTxsRequest): Promise<_86.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _88.QueryCurrentPlanRequest): Promise<_88.QueryCurrentPlanResponse>;
                        appliedPlan(request: _88.QueryAppliedPlanRequest): Promise<_88.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _88.QueryUpgradedConsensusStateRequest): Promise<_88.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _88.QueryModuleVersionsRequest): Promise<_88.QueryModuleVersionsResponse>;
                        authority(request?: _88.QueryAuthorityRequest): Promise<_88.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
