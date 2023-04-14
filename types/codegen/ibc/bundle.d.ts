import * as _109 from "./applications/fee/v1/ack";
import * as _110 from "./applications/fee/v1/fee";
import * as _111 from "./applications/fee/v1/genesis";
import * as _112 from "./applications/fee/v1/metadata";
import * as _113 from "./applications/fee/v1/query";
import * as _114 from "./applications/fee/v1/tx";
import * as _115 from "./applications/interchain_accounts/controller/v1/controller";
import * as _116 from "./applications/interchain_accounts/controller/v1/query";
import * as _117 from "./applications/interchain_accounts/host/v1/host";
import * as _118 from "./applications/interchain_accounts/host/v1/query";
import * as _119 from "./applications/interchain_accounts/v1/account";
import * as _120 from "./applications/interchain_accounts/v1/genesis";
import * as _121 from "./applications/interchain_accounts/v1/metadata";
import * as _122 from "./applications/interchain_accounts/v1/packet";
import * as _123 from "./applications/transfer/v1/genesis";
import * as _124 from "./applications/transfer/v1/query";
import * as _125 from "./applications/transfer/v1/transfer";
import * as _126 from "./applications/transfer/v1/tx";
import * as _127 from "./applications/transfer/v2/packet";
import * as _128 from "./core/channel/v1/channel";
import * as _129 from "./core/channel/v1/genesis";
import * as _130 from "./core/channel/v1/query";
import * as _131 from "./core/channel/v1/tx";
import * as _132 from "./core/client/v1/client";
import * as _133 from "./core/client/v1/genesis";
import * as _134 from "./core/client/v1/query";
import * as _135 from "./core/client/v1/tx";
import * as _136 from "./core/commitment/v1/commitment";
import * as _137 from "./core/connection/v1/connection";
import * as _138 from "./core/connection/v1/genesis";
import * as _139 from "./core/connection/v1/query";
import * as _140 from "./core/connection/v1/tx";
import * as _141 from "./core/types/v1/genesis";
import * as _220 from "./applications/fee/v1/query.rpc.Query";
import * as _221 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _222 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _223 from "./applications/transfer/v1/query.rpc.Query";
import * as _224 from "./core/channel/v1/query.rpc.Query";
import * as _225 from "./core/client/v1/query.rpc.Query";
import * as _226 from "./core/connection/v1/query.rpc.Query";
import * as _227 from "./applications/fee/v1/tx.rpc.msg";
import * as _228 from "./applications/transfer/v1/tx.rpc.msg";
import * as _229 from "./core/channel/v1/tx.rpc.msg";
import * as _230 from "./core/client/v1/tx.rpc.msg";
import * as _231 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _227.MsgClientImpl;
                QueryClientImpl: typeof _220.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _113.QueryIncentivizedPacketsRequest): Promise<_113.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _113.QueryIncentivizedPacketRequest): Promise<_113.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _113.QueryIncentivizedPacketsForChannelRequest): Promise<_113.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _113.QueryTotalRecvFeesRequest): Promise<_113.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _113.QueryTotalAckFeesRequest): Promise<_113.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _113.QueryTotalTimeoutFeesRequest): Promise<_113.QueryTotalTimeoutFeesResponse>;
                    payee(request: _113.QueryPayeeRequest): Promise<_113.QueryPayeeResponse>;
                    counterpartyPayee(request: _113.QueryCounterpartyPayeeRequest): Promise<_113.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _113.QueryFeeEnabledChannelsRequest): Promise<_113.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _113.QueryFeeEnabledChannelRequest): Promise<_113.QueryFeeEnabledChannelResponse>;
                };
                MsgRegisterPayee: {
                    encode(message: _114.MsgRegisterPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgRegisterPayee;
                    fromJSON(object: any): _114.MsgRegisterPayee;
                    toJSON(message: _114.MsgRegisterPayee): unknown;
                    fromPartial(object: Partial<_114.MsgRegisterPayee>): _114.MsgRegisterPayee;
                };
                MsgRegisterPayeeResponse: {
                    encode(_: _114.MsgRegisterPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgRegisterPayeeResponse;
                    fromJSON(_: any): _114.MsgRegisterPayeeResponse;
                    toJSON(_: _114.MsgRegisterPayeeResponse): unknown;
                    fromPartial(_: Partial<_114.MsgRegisterPayeeResponse>): _114.MsgRegisterPayeeResponse;
                };
                MsgRegisterCounterpartyPayee: {
                    encode(message: _114.MsgRegisterCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgRegisterCounterpartyPayee;
                    fromJSON(object: any): _114.MsgRegisterCounterpartyPayee;
                    toJSON(message: _114.MsgRegisterCounterpartyPayee): unknown;
                    fromPartial(object: Partial<_114.MsgRegisterCounterpartyPayee>): _114.MsgRegisterCounterpartyPayee;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    encode(_: _114.MsgRegisterCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgRegisterCounterpartyPayeeResponse;
                    fromJSON(_: any): _114.MsgRegisterCounterpartyPayeeResponse;
                    toJSON(_: _114.MsgRegisterCounterpartyPayeeResponse): unknown;
                    fromPartial(_: Partial<_114.MsgRegisterCounterpartyPayeeResponse>): _114.MsgRegisterCounterpartyPayeeResponse;
                };
                MsgPayPacketFee: {
                    encode(message: _114.MsgPayPacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgPayPacketFee;
                    fromJSON(object: any): _114.MsgPayPacketFee;
                    toJSON(message: _114.MsgPayPacketFee): unknown;
                    fromPartial(object: Partial<_114.MsgPayPacketFee>): _114.MsgPayPacketFee;
                };
                MsgPayPacketFeeResponse: {
                    encode(_: _114.MsgPayPacketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgPayPacketFeeResponse;
                    fromJSON(_: any): _114.MsgPayPacketFeeResponse;
                    toJSON(_: _114.MsgPayPacketFeeResponse): unknown;
                    fromPartial(_: Partial<_114.MsgPayPacketFeeResponse>): _114.MsgPayPacketFeeResponse;
                };
                MsgPayPacketFeeAsync: {
                    encode(message: _114.MsgPayPacketFeeAsync, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgPayPacketFeeAsync;
                    fromJSON(object: any): _114.MsgPayPacketFeeAsync;
                    toJSON(message: _114.MsgPayPacketFeeAsync): unknown;
                    fromPartial(object: Partial<_114.MsgPayPacketFeeAsync>): _114.MsgPayPacketFeeAsync;
                };
                MsgPayPacketFeeAsyncResponse: {
                    encode(_: _114.MsgPayPacketFeeAsyncResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgPayPacketFeeAsyncResponse;
                    fromJSON(_: any): _114.MsgPayPacketFeeAsyncResponse;
                    toJSON(_: _114.MsgPayPacketFeeAsyncResponse): unknown;
                    fromPartial(_: Partial<_114.MsgPayPacketFeeAsyncResponse>): _114.MsgPayPacketFeeAsyncResponse;
                };
                QueryIncentivizedPacketsRequest: {
                    encode(message: _113.QueryIncentivizedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryIncentivizedPacketsRequest;
                    fromJSON(object: any): _113.QueryIncentivizedPacketsRequest;
                    toJSON(message: _113.QueryIncentivizedPacketsRequest): unknown;
                    fromPartial(object: Partial<_113.QueryIncentivizedPacketsRequest>): _113.QueryIncentivizedPacketsRequest;
                };
                QueryIncentivizedPacketsResponse: {
                    encode(message: _113.QueryIncentivizedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryIncentivizedPacketsResponse;
                    fromJSON(object: any): _113.QueryIncentivizedPacketsResponse;
                    toJSON(message: _113.QueryIncentivizedPacketsResponse): unknown;
                    fromPartial(object: Partial<_113.QueryIncentivizedPacketsResponse>): _113.QueryIncentivizedPacketsResponse;
                };
                QueryIncentivizedPacketRequest: {
                    encode(message: _113.QueryIncentivizedPacketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryIncentivizedPacketRequest;
                    fromJSON(object: any): _113.QueryIncentivizedPacketRequest;
                    toJSON(message: _113.QueryIncentivizedPacketRequest): unknown;
                    fromPartial(object: Partial<_113.QueryIncentivizedPacketRequest>): _113.QueryIncentivizedPacketRequest;
                };
                QueryIncentivizedPacketResponse: {
                    encode(message: _113.QueryIncentivizedPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryIncentivizedPacketResponse;
                    fromJSON(object: any): _113.QueryIncentivizedPacketResponse;
                    toJSON(message: _113.QueryIncentivizedPacketResponse): unknown;
                    fromPartial(object: Partial<_113.QueryIncentivizedPacketResponse>): _113.QueryIncentivizedPacketResponse;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    encode(message: _113.QueryIncentivizedPacketsForChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryIncentivizedPacketsForChannelRequest;
                    fromJSON(object: any): _113.QueryIncentivizedPacketsForChannelRequest;
                    toJSON(message: _113.QueryIncentivizedPacketsForChannelRequest): unknown;
                    fromPartial(object: Partial<_113.QueryIncentivizedPacketsForChannelRequest>): _113.QueryIncentivizedPacketsForChannelRequest;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    encode(message: _113.QueryIncentivizedPacketsForChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryIncentivizedPacketsForChannelResponse;
                    fromJSON(object: any): _113.QueryIncentivizedPacketsForChannelResponse;
                    toJSON(message: _113.QueryIncentivizedPacketsForChannelResponse): unknown;
                    fromPartial(object: Partial<_113.QueryIncentivizedPacketsForChannelResponse>): _113.QueryIncentivizedPacketsForChannelResponse;
                };
                QueryTotalRecvFeesRequest: {
                    encode(message: _113.QueryTotalRecvFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryTotalRecvFeesRequest;
                    fromJSON(object: any): _113.QueryTotalRecvFeesRequest;
                    toJSON(message: _113.QueryTotalRecvFeesRequest): unknown;
                    fromPartial(object: Partial<_113.QueryTotalRecvFeesRequest>): _113.QueryTotalRecvFeesRequest;
                };
                QueryTotalRecvFeesResponse: {
                    encode(message: _113.QueryTotalRecvFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryTotalRecvFeesResponse;
                    fromJSON(object: any): _113.QueryTotalRecvFeesResponse;
                    toJSON(message: _113.QueryTotalRecvFeesResponse): unknown;
                    fromPartial(object: Partial<_113.QueryTotalRecvFeesResponse>): _113.QueryTotalRecvFeesResponse;
                };
                QueryTotalAckFeesRequest: {
                    encode(message: _113.QueryTotalAckFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryTotalAckFeesRequest;
                    fromJSON(object: any): _113.QueryTotalAckFeesRequest;
                    toJSON(message: _113.QueryTotalAckFeesRequest): unknown;
                    fromPartial(object: Partial<_113.QueryTotalAckFeesRequest>): _113.QueryTotalAckFeesRequest;
                };
                QueryTotalAckFeesResponse: {
                    encode(message: _113.QueryTotalAckFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryTotalAckFeesResponse;
                    fromJSON(object: any): _113.QueryTotalAckFeesResponse;
                    toJSON(message: _113.QueryTotalAckFeesResponse): unknown;
                    fromPartial(object: Partial<_113.QueryTotalAckFeesResponse>): _113.QueryTotalAckFeesResponse;
                };
                QueryTotalTimeoutFeesRequest: {
                    encode(message: _113.QueryTotalTimeoutFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryTotalTimeoutFeesRequest;
                    fromJSON(object: any): _113.QueryTotalTimeoutFeesRequest;
                    toJSON(message: _113.QueryTotalTimeoutFeesRequest): unknown;
                    fromPartial(object: Partial<_113.QueryTotalTimeoutFeesRequest>): _113.QueryTotalTimeoutFeesRequest;
                };
                QueryTotalTimeoutFeesResponse: {
                    encode(message: _113.QueryTotalTimeoutFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryTotalTimeoutFeesResponse;
                    fromJSON(object: any): _113.QueryTotalTimeoutFeesResponse;
                    toJSON(message: _113.QueryTotalTimeoutFeesResponse): unknown;
                    fromPartial(object: Partial<_113.QueryTotalTimeoutFeesResponse>): _113.QueryTotalTimeoutFeesResponse;
                };
                QueryPayeeRequest: {
                    encode(message: _113.QueryPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPayeeRequest;
                    fromJSON(object: any): _113.QueryPayeeRequest;
                    toJSON(message: _113.QueryPayeeRequest): unknown;
                    fromPartial(object: Partial<_113.QueryPayeeRequest>): _113.QueryPayeeRequest;
                };
                QueryPayeeResponse: {
                    encode(message: _113.QueryPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPayeeResponse;
                    fromJSON(object: any): _113.QueryPayeeResponse;
                    toJSON(message: _113.QueryPayeeResponse): unknown;
                    fromPartial(object: Partial<_113.QueryPayeeResponse>): _113.QueryPayeeResponse;
                };
                QueryCounterpartyPayeeRequest: {
                    encode(message: _113.QueryCounterpartyPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryCounterpartyPayeeRequest;
                    fromJSON(object: any): _113.QueryCounterpartyPayeeRequest;
                    toJSON(message: _113.QueryCounterpartyPayeeRequest): unknown;
                    fromPartial(object: Partial<_113.QueryCounterpartyPayeeRequest>): _113.QueryCounterpartyPayeeRequest;
                };
                QueryCounterpartyPayeeResponse: {
                    encode(message: _113.QueryCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryCounterpartyPayeeResponse;
                    fromJSON(object: any): _113.QueryCounterpartyPayeeResponse;
                    toJSON(message: _113.QueryCounterpartyPayeeResponse): unknown;
                    fromPartial(object: Partial<_113.QueryCounterpartyPayeeResponse>): _113.QueryCounterpartyPayeeResponse;
                };
                QueryFeeEnabledChannelsRequest: {
                    encode(message: _113.QueryFeeEnabledChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryFeeEnabledChannelsRequest;
                    fromJSON(object: any): _113.QueryFeeEnabledChannelsRequest;
                    toJSON(message: _113.QueryFeeEnabledChannelsRequest): unknown;
                    fromPartial(object: Partial<_113.QueryFeeEnabledChannelsRequest>): _113.QueryFeeEnabledChannelsRequest;
                };
                QueryFeeEnabledChannelsResponse: {
                    encode(message: _113.QueryFeeEnabledChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryFeeEnabledChannelsResponse;
                    fromJSON(object: any): _113.QueryFeeEnabledChannelsResponse;
                    toJSON(message: _113.QueryFeeEnabledChannelsResponse): unknown;
                    fromPartial(object: Partial<_113.QueryFeeEnabledChannelsResponse>): _113.QueryFeeEnabledChannelsResponse;
                };
                QueryFeeEnabledChannelRequest: {
                    encode(message: _113.QueryFeeEnabledChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryFeeEnabledChannelRequest;
                    fromJSON(object: any): _113.QueryFeeEnabledChannelRequest;
                    toJSON(message: _113.QueryFeeEnabledChannelRequest): unknown;
                    fromPartial(object: Partial<_113.QueryFeeEnabledChannelRequest>): _113.QueryFeeEnabledChannelRequest;
                };
                QueryFeeEnabledChannelResponse: {
                    encode(message: _113.QueryFeeEnabledChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryFeeEnabledChannelResponse;
                    fromJSON(object: any): _113.QueryFeeEnabledChannelResponse;
                    toJSON(message: _113.QueryFeeEnabledChannelResponse): unknown;
                    fromPartial(object: Partial<_113.QueryFeeEnabledChannelResponse>): _113.QueryFeeEnabledChannelResponse;
                };
                Metadata: {
                    encode(message: _112.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Metadata;
                    fromJSON(object: any): _112.Metadata;
                    toJSON(message: _112.Metadata): unknown;
                    fromPartial(object: Partial<_112.Metadata>): _112.Metadata;
                };
                GenesisState: {
                    encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GenesisState;
                    fromJSON(object: any): _111.GenesisState;
                    toJSON(message: _111.GenesisState): unknown;
                    fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
                };
                FeeEnabledChannel: {
                    encode(message: _111.FeeEnabledChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.FeeEnabledChannel;
                    fromJSON(object: any): _111.FeeEnabledChannel;
                    toJSON(message: _111.FeeEnabledChannel): unknown;
                    fromPartial(object: Partial<_111.FeeEnabledChannel>): _111.FeeEnabledChannel;
                };
                RegisteredPayee: {
                    encode(message: _111.RegisteredPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RegisteredPayee;
                    fromJSON(object: any): _111.RegisteredPayee;
                    toJSON(message: _111.RegisteredPayee): unknown;
                    fromPartial(object: Partial<_111.RegisteredPayee>): _111.RegisteredPayee;
                };
                RegisteredCounterpartyPayee: {
                    encode(message: _111.RegisteredCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RegisteredCounterpartyPayee;
                    fromJSON(object: any): _111.RegisteredCounterpartyPayee;
                    toJSON(message: _111.RegisteredCounterpartyPayee): unknown;
                    fromPartial(object: Partial<_111.RegisteredCounterpartyPayee>): _111.RegisteredCounterpartyPayee;
                };
                ForwardRelayerAddress: {
                    encode(message: _111.ForwardRelayerAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ForwardRelayerAddress;
                    fromJSON(object: any): _111.ForwardRelayerAddress;
                    toJSON(message: _111.ForwardRelayerAddress): unknown;
                    fromPartial(object: Partial<_111.ForwardRelayerAddress>): _111.ForwardRelayerAddress;
                };
                Fee: {
                    encode(message: _110.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Fee;
                    fromJSON(object: any): _110.Fee;
                    toJSON(message: _110.Fee): unknown;
                    fromPartial(object: Partial<_110.Fee>): _110.Fee;
                };
                PacketFee: {
                    encode(message: _110.PacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.PacketFee;
                    fromJSON(object: any): _110.PacketFee;
                    toJSON(message: _110.PacketFee): unknown;
                    fromPartial(object: Partial<_110.PacketFee>): _110.PacketFee;
                };
                PacketFees: {
                    encode(message: _110.PacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.PacketFees;
                    fromJSON(object: any): _110.PacketFees;
                    toJSON(message: _110.PacketFees): unknown;
                    fromPartial(object: Partial<_110.PacketFees>): _110.PacketFees;
                };
                IdentifiedPacketFees: {
                    encode(message: _110.IdentifiedPacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.IdentifiedPacketFees;
                    fromJSON(object: any): _110.IdentifiedPacketFees;
                    toJSON(message: _110.IdentifiedPacketFees): unknown;
                    fromPartial(object: Partial<_110.IdentifiedPacketFees>): _110.IdentifiedPacketFees;
                };
                IncentivizedAcknowledgement: {
                    encode(message: _109.IncentivizedAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.IncentivizedAcknowledgement;
                    fromJSON(object: any): _109.IncentivizedAcknowledgement;
                    toJSON(message: _109.IncentivizedAcknowledgement): unknown;
                    fromPartial(object: Partial<_109.IncentivizedAcknowledgement>): _109.IncentivizedAcknowledgement;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryClientImpl: typeof _221.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _116.QueryInterchainAccountRequest): Promise<_116.QueryInterchainAccountResponse>;
                        params(request?: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
                    };
                    QueryInterchainAccountRequest: {
                        encode(message: _116.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryInterchainAccountRequest;
                        fromJSON(object: any): _116.QueryInterchainAccountRequest;
                        toJSON(message: _116.QueryInterchainAccountRequest): unknown;
                        fromPartial(object: Partial<_116.QueryInterchainAccountRequest>): _116.QueryInterchainAccountRequest;
                    };
                    QueryInterchainAccountResponse: {
                        encode(message: _116.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryInterchainAccountResponse;
                        fromJSON(object: any): _116.QueryInterchainAccountResponse;
                        toJSON(message: _116.QueryInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_116.QueryInterchainAccountResponse>): _116.QueryInterchainAccountResponse;
                    };
                    QueryParamsRequest: {
                        encode(_: _116.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryParamsRequest;
                        fromJSON(_: any): _116.QueryParamsRequest;
                        toJSON(_: _116.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_116.QueryParamsRequest>): _116.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _116.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryParamsResponse;
                        fromJSON(object: any): _116.QueryParamsResponse;
                        toJSON(message: _116.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_116.QueryParamsResponse>): _116.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _115.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Params;
                        fromJSON(object: any): _115.Params;
                        toJSON(message: _115.Params): unknown;
                        fromPartial(object: Partial<_115.Params>): _115.Params;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _222.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _118.QueryParamsRequest): Promise<_118.QueryParamsResponse>;
                    };
                    QueryParamsRequest: {
                        encode(_: _118.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryParamsRequest;
                        fromJSON(_: any): _118.QueryParamsRequest;
                        toJSON(_: _118.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_118.QueryParamsRequest>): _118.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _118.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryParamsResponse;
                        fromJSON(object: any): _118.QueryParamsResponse;
                        toJSON(message: _118.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_118.QueryParamsResponse>): _118.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _117.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Params;
                        fromJSON(object: any): _117.Params;
                        toJSON(message: _117.Params): unknown;
                        fromPartial(object: Partial<_117.Params>): _117.Params;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _122.Type;
                typeToJSON(object: _122.Type): string;
                Type: typeof _122.Type;
                TypeSDKType: typeof _122.Type;
                InterchainAccountPacketData: {
                    encode(message: _122.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.InterchainAccountPacketData;
                    fromJSON(object: any): _122.InterchainAccountPacketData;
                    toJSON(message: _122.InterchainAccountPacketData): unknown;
                    fromPartial(object: Partial<_122.InterchainAccountPacketData>): _122.InterchainAccountPacketData;
                };
                CosmosTx: {
                    encode(message: _122.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.CosmosTx;
                    fromJSON(object: any): _122.CosmosTx;
                    toJSON(message: _122.CosmosTx): unknown;
                    fromPartial(object: Partial<_122.CosmosTx>): _122.CosmosTx;
                };
                Metadata: {
                    encode(message: _121.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Metadata;
                    fromJSON(object: any): _121.Metadata;
                    toJSON(message: _121.Metadata): unknown;
                    fromPartial(object: Partial<_121.Metadata>): _121.Metadata;
                };
                GenesisState: {
                    encode(message: _120.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GenesisState;
                    fromJSON(object: any): _120.GenesisState;
                    toJSON(message: _120.GenesisState): unknown;
                    fromPartial(object: Partial<_120.GenesisState>): _120.GenesisState;
                };
                ControllerGenesisState: {
                    encode(message: _120.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ControllerGenesisState;
                    fromJSON(object: any): _120.ControllerGenesisState;
                    toJSON(message: _120.ControllerGenesisState): unknown;
                    fromPartial(object: Partial<_120.ControllerGenesisState>): _120.ControllerGenesisState;
                };
                HostGenesisState: {
                    encode(message: _120.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.HostGenesisState;
                    fromJSON(object: any): _120.HostGenesisState;
                    toJSON(message: _120.HostGenesisState): unknown;
                    fromPartial(object: Partial<_120.HostGenesisState>): _120.HostGenesisState;
                };
                ActiveChannel: {
                    encode(message: _120.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ActiveChannel;
                    fromJSON(object: any): _120.ActiveChannel;
                    toJSON(message: _120.ActiveChannel): unknown;
                    fromPartial(object: Partial<_120.ActiveChannel>): _120.ActiveChannel;
                };
                RegisteredInterchainAccount: {
                    encode(message: _120.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RegisteredInterchainAccount;
                    fromJSON(object: any): _120.RegisteredInterchainAccount;
                    toJSON(message: _120.RegisteredInterchainAccount): unknown;
                    fromPartial(object: Partial<_120.RegisteredInterchainAccount>): _120.RegisteredInterchainAccount;
                };
                InterchainAccount: {
                    encode(message: _119.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.InterchainAccount;
                    fromJSON(object: any): _119.InterchainAccount;
                    toJSON(message: _119.InterchainAccount): unknown;
                    fromPartial(object: Partial<_119.InterchainAccount>): _119.InterchainAccount;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _228.MsgClientImpl;
                QueryClientImpl: typeof _223.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _124.QueryDenomTraceRequest): Promise<_124.QueryDenomTraceResponse>;
                    denomTraces(request?: _124.QueryDenomTracesRequest): Promise<_124.QueryDenomTracesResponse>;
                    params(request?: _124.QueryParamsRequest): Promise<_124.QueryParamsResponse>;
                    denomHash(request: _124.QueryDenomHashRequest): Promise<_124.QueryDenomHashResponse>;
                    escrowAddress(request: _124.QueryEscrowAddressRequest): Promise<_124.QueryEscrowAddressResponse>;
                };
                MsgTransfer: {
                    encode(message: _126.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgTransfer;
                    fromJSON(object: any): _126.MsgTransfer;
                    toJSON(message: _126.MsgTransfer): unknown;
                    fromPartial(object: Partial<_126.MsgTransfer>): _126.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(message: _126.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgTransferResponse;
                    fromJSON(object: any): _126.MsgTransferResponse;
                    toJSON(message: _126.MsgTransferResponse): unknown;
                    fromPartial(object: Partial<_126.MsgTransferResponse>): _126.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _125.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.DenomTrace;
                    fromJSON(object: any): _125.DenomTrace;
                    toJSON(message: _125.DenomTrace): unknown;
                    fromPartial(object: Partial<_125.DenomTrace>): _125.DenomTrace;
                };
                Params: {
                    encode(message: _125.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Params;
                    fromJSON(object: any): _125.Params;
                    toJSON(message: _125.Params): unknown;
                    fromPartial(object: Partial<_125.Params>): _125.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _124.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDenomTraceRequest;
                    fromJSON(object: any): _124.QueryDenomTraceRequest;
                    toJSON(message: _124.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_124.QueryDenomTraceRequest>): _124.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _124.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDenomTraceResponse;
                    fromJSON(object: any): _124.QueryDenomTraceResponse;
                    toJSON(message: _124.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_124.QueryDenomTraceResponse>): _124.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _124.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDenomTracesRequest;
                    fromJSON(object: any): _124.QueryDenomTracesRequest;
                    toJSON(message: _124.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_124.QueryDenomTracesRequest>): _124.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _124.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDenomTracesResponse;
                    fromJSON(object: any): _124.QueryDenomTracesResponse;
                    toJSON(message: _124.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_124.QueryDenomTracesResponse>): _124.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _124.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryParamsRequest;
                    fromJSON(_: any): _124.QueryParamsRequest;
                    toJSON(_: _124.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_124.QueryParamsRequest>): _124.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _124.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryParamsResponse;
                    fromJSON(object: any): _124.QueryParamsResponse;
                    toJSON(message: _124.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_124.QueryParamsResponse>): _124.QueryParamsResponse;
                };
                QueryDenomHashRequest: {
                    encode(message: _124.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDenomHashRequest;
                    fromJSON(object: any): _124.QueryDenomHashRequest;
                    toJSON(message: _124.QueryDenomHashRequest): unknown;
                    fromPartial(object: Partial<_124.QueryDenomHashRequest>): _124.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _124.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDenomHashResponse;
                    fromJSON(object: any): _124.QueryDenomHashResponse;
                    toJSON(message: _124.QueryDenomHashResponse): unknown;
                    fromPartial(object: Partial<_124.QueryDenomHashResponse>): _124.QueryDenomHashResponse;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _124.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryEscrowAddressRequest;
                    fromJSON(object: any): _124.QueryEscrowAddressRequest;
                    toJSON(message: _124.QueryEscrowAddressRequest): unknown;
                    fromPartial(object: Partial<_124.QueryEscrowAddressRequest>): _124.QueryEscrowAddressRequest;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _124.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryEscrowAddressResponse;
                    fromJSON(object: any): _124.QueryEscrowAddressResponse;
                    toJSON(message: _124.QueryEscrowAddressResponse): unknown;
                    fromPartial(object: Partial<_124.QueryEscrowAddressResponse>): _124.QueryEscrowAddressResponse;
                };
                GenesisState: {
                    encode(message: _123.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.GenesisState;
                    fromJSON(object: any): _123.GenesisState;
                    toJSON(message: _123.GenesisState): unknown;
                    fromPartial(object: Partial<_123.GenesisState>): _123.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _127.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.FungibleTokenPacketData;
                    fromJSON(object: any): _127.FungibleTokenPacketData;
                    toJSON(message: _127.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_127.FungibleTokenPacketData>): _127.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _229.MsgClientImpl;
                QueryClientImpl: typeof _224.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _130.QueryChannelRequest): Promise<_130.QueryChannelResponse>;
                    channels(request?: _130.QueryChannelsRequest): Promise<_130.QueryChannelsResponse>;
                    connectionChannels(request: _130.QueryConnectionChannelsRequest): Promise<_130.QueryConnectionChannelsResponse>;
                    channelClientState(request: _130.QueryChannelClientStateRequest): Promise<_130.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _130.QueryChannelConsensusStateRequest): Promise<_130.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _130.QueryPacketCommitmentRequest): Promise<_130.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _130.QueryPacketCommitmentsRequest): Promise<_130.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _130.QueryPacketReceiptRequest): Promise<_130.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _130.QueryPacketAcknowledgementRequest): Promise<_130.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _130.QueryPacketAcknowledgementsRequest): Promise<_130.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _130.QueryUnreceivedPacketsRequest): Promise<_130.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _130.QueryUnreceivedAcksRequest): Promise<_130.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _130.QueryNextSequenceReceiveRequest): Promise<_130.QueryNextSequenceReceiveResponse>;
                };
                responseResultTypeFromJSON(object: any): _131.ResponseResultType;
                responseResultTypeToJSON(object: _131.ResponseResultType): string;
                ResponseResultType: typeof _131.ResponseResultType;
                ResponseResultTypeSDKType: typeof _131.ResponseResultType;
                MsgChannelOpenInit: {
                    encode(message: _131.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgChannelOpenInit;
                    fromJSON(object: any): _131.MsgChannelOpenInit;
                    toJSON(message: _131.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_131.MsgChannelOpenInit>): _131.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _131.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgChannelOpenInitResponse;
                    fromJSON(object: any): _131.MsgChannelOpenInitResponse;
                    toJSON(message: _131.MsgChannelOpenInitResponse): unknown;
                    fromPartial(object: Partial<_131.MsgChannelOpenInitResponse>): _131.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _131.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgChannelOpenTry;
                    fromJSON(object: any): _131.MsgChannelOpenTry;
                    toJSON(message: _131.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_131.MsgChannelOpenTry>): _131.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(message: _131.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgChannelOpenTryResponse;
                    fromJSON(object: any): _131.MsgChannelOpenTryResponse;
                    toJSON(message: _131.MsgChannelOpenTryResponse): unknown;
                    fromPartial(object: Partial<_131.MsgChannelOpenTryResponse>): _131.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _131.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgChannelOpenAck;
                    fromJSON(object: any): _131.MsgChannelOpenAck;
                    toJSON(message: _131.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_131.MsgChannelOpenAck>): _131.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _131.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _131.MsgChannelOpenAckResponse;
                    toJSON(_: _131.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_131.MsgChannelOpenAckResponse>): _131.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _131.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgChannelOpenConfirm;
                    fromJSON(object: any): _131.MsgChannelOpenConfirm;
                    toJSON(message: _131.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_131.MsgChannelOpenConfirm>): _131.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _131.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _131.MsgChannelOpenConfirmResponse;
                    toJSON(_: _131.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_131.MsgChannelOpenConfirmResponse>): _131.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _131.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgChannelCloseInit;
                    fromJSON(object: any): _131.MsgChannelCloseInit;
                    toJSON(message: _131.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_131.MsgChannelCloseInit>): _131.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _131.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _131.MsgChannelCloseInitResponse;
                    toJSON(_: _131.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_131.MsgChannelCloseInitResponse>): _131.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _131.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgChannelCloseConfirm;
                    fromJSON(object: any): _131.MsgChannelCloseConfirm;
                    toJSON(message: _131.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_131.MsgChannelCloseConfirm>): _131.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _131.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _131.MsgChannelCloseConfirmResponse;
                    toJSON(_: _131.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_131.MsgChannelCloseConfirmResponse>): _131.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _131.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgRecvPacket;
                    fromJSON(object: any): _131.MsgRecvPacket;
                    toJSON(message: _131.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_131.MsgRecvPacket>): _131.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(message: _131.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgRecvPacketResponse;
                    fromJSON(object: any): _131.MsgRecvPacketResponse;
                    toJSON(message: _131.MsgRecvPacketResponse): unknown;
                    fromPartial(object: Partial<_131.MsgRecvPacketResponse>): _131.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _131.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgTimeout;
                    fromJSON(object: any): _131.MsgTimeout;
                    toJSON(message: _131.MsgTimeout): unknown;
                    fromPartial(object: Partial<_131.MsgTimeout>): _131.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(message: _131.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgTimeoutResponse;
                    fromJSON(object: any): _131.MsgTimeoutResponse;
                    toJSON(message: _131.MsgTimeoutResponse): unknown;
                    fromPartial(object: Partial<_131.MsgTimeoutResponse>): _131.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _131.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgTimeoutOnClose;
                    fromJSON(object: any): _131.MsgTimeoutOnClose;
                    toJSON(message: _131.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_131.MsgTimeoutOnClose>): _131.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(message: _131.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgTimeoutOnCloseResponse;
                    fromJSON(object: any): _131.MsgTimeoutOnCloseResponse;
                    toJSON(message: _131.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(object: Partial<_131.MsgTimeoutOnCloseResponse>): _131.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _131.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgAcknowledgement;
                    fromJSON(object: any): _131.MsgAcknowledgement;
                    toJSON(message: _131.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_131.MsgAcknowledgement>): _131.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(message: _131.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgAcknowledgementResponse;
                    fromJSON(object: any): _131.MsgAcknowledgementResponse;
                    toJSON(message: _131.MsgAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_131.MsgAcknowledgementResponse>): _131.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _130.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryChannelRequest;
                    fromJSON(object: any): _130.QueryChannelRequest;
                    toJSON(message: _130.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_130.QueryChannelRequest>): _130.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _130.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryChannelResponse;
                    fromJSON(object: any): _130.QueryChannelResponse;
                    toJSON(message: _130.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_130.QueryChannelResponse>): _130.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _130.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryChannelsRequest;
                    fromJSON(object: any): _130.QueryChannelsRequest;
                    toJSON(message: _130.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_130.QueryChannelsRequest>): _130.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _130.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryChannelsResponse;
                    fromJSON(object: any): _130.QueryChannelsResponse;
                    toJSON(message: _130.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_130.QueryChannelsResponse>): _130.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _130.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _130.QueryConnectionChannelsRequest;
                    toJSON(message: _130.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_130.QueryConnectionChannelsRequest>): _130.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _130.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _130.QueryConnectionChannelsResponse;
                    toJSON(message: _130.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_130.QueryConnectionChannelsResponse>): _130.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _130.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryChannelClientStateRequest;
                    fromJSON(object: any): _130.QueryChannelClientStateRequest;
                    toJSON(message: _130.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_130.QueryChannelClientStateRequest>): _130.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _130.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryChannelClientStateResponse;
                    fromJSON(object: any): _130.QueryChannelClientStateResponse;
                    toJSON(message: _130.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_130.QueryChannelClientStateResponse>): _130.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _130.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _130.QueryChannelConsensusStateRequest;
                    toJSON(message: _130.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_130.QueryChannelConsensusStateRequest>): _130.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _130.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _130.QueryChannelConsensusStateResponse;
                    toJSON(message: _130.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_130.QueryChannelConsensusStateResponse>): _130.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _130.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _130.QueryPacketCommitmentRequest;
                    toJSON(message: _130.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_130.QueryPacketCommitmentRequest>): _130.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _130.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _130.QueryPacketCommitmentResponse;
                    toJSON(message: _130.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_130.QueryPacketCommitmentResponse>): _130.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _130.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _130.QueryPacketCommitmentsRequest;
                    toJSON(message: _130.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_130.QueryPacketCommitmentsRequest>): _130.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _130.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _130.QueryPacketCommitmentsResponse;
                    toJSON(message: _130.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_130.QueryPacketCommitmentsResponse>): _130.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _130.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPacketReceiptRequest;
                    fromJSON(object: any): _130.QueryPacketReceiptRequest;
                    toJSON(message: _130.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_130.QueryPacketReceiptRequest>): _130.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _130.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPacketReceiptResponse;
                    fromJSON(object: any): _130.QueryPacketReceiptResponse;
                    toJSON(message: _130.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_130.QueryPacketReceiptResponse>): _130.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _130.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _130.QueryPacketAcknowledgementRequest;
                    toJSON(message: _130.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_130.QueryPacketAcknowledgementRequest>): _130.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _130.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _130.QueryPacketAcknowledgementResponse;
                    toJSON(message: _130.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_130.QueryPacketAcknowledgementResponse>): _130.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _130.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _130.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _130.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_130.QueryPacketAcknowledgementsRequest>): _130.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _130.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _130.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _130.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_130.QueryPacketAcknowledgementsResponse>): _130.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _130.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _130.QueryUnreceivedPacketsRequest;
                    toJSON(message: _130.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_130.QueryUnreceivedPacketsRequest>): _130.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _130.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _130.QueryUnreceivedPacketsResponse;
                    toJSON(message: _130.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_130.QueryUnreceivedPacketsResponse>): _130.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _130.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _130.QueryUnreceivedAcksRequest;
                    toJSON(message: _130.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_130.QueryUnreceivedAcksRequest>): _130.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _130.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _130.QueryUnreceivedAcksResponse;
                    toJSON(message: _130.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_130.QueryUnreceivedAcksResponse>): _130.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _130.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _130.QueryNextSequenceReceiveRequest;
                    toJSON(message: _130.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_130.QueryNextSequenceReceiveRequest>): _130.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _130.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _130.QueryNextSequenceReceiveResponse;
                    toJSON(message: _130.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_130.QueryNextSequenceReceiveResponse>): _130.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _129.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.GenesisState;
                    fromJSON(object: any): _129.GenesisState;
                    toJSON(message: _129.GenesisState): unknown;
                    fromPartial(object: Partial<_129.GenesisState>): _129.GenesisState;
                };
                PacketSequence: {
                    encode(message: _129.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.PacketSequence;
                    fromJSON(object: any): _129.PacketSequence;
                    toJSON(message: _129.PacketSequence): unknown;
                    fromPartial(object: Partial<_129.PacketSequence>): _129.PacketSequence;
                };
                stateFromJSON(object: any): _128.State;
                stateToJSON(object: _128.State): string;
                orderFromJSON(object: any): _128.Order;
                orderToJSON(object: _128.Order): string;
                State: typeof _128.State;
                StateSDKType: typeof _128.State;
                Order: typeof _128.Order;
                OrderSDKType: typeof _128.Order;
                Channel: {
                    encode(message: _128.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Channel;
                    fromJSON(object: any): _128.Channel;
                    toJSON(message: _128.Channel): unknown;
                    fromPartial(object: Partial<_128.Channel>): _128.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _128.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.IdentifiedChannel;
                    fromJSON(object: any): _128.IdentifiedChannel;
                    toJSON(message: _128.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_128.IdentifiedChannel>): _128.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _128.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Counterparty;
                    fromJSON(object: any): _128.Counterparty;
                    toJSON(message: _128.Counterparty): unknown;
                    fromPartial(object: Partial<_128.Counterparty>): _128.Counterparty;
                };
                Packet: {
                    encode(message: _128.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Packet;
                    fromJSON(object: any): _128.Packet;
                    toJSON(message: _128.Packet): unknown;
                    fromPartial(object: Partial<_128.Packet>): _128.Packet;
                };
                PacketState: {
                    encode(message: _128.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.PacketState;
                    fromJSON(object: any): _128.PacketState;
                    toJSON(message: _128.PacketState): unknown;
                    fromPartial(object: Partial<_128.PacketState>): _128.PacketState;
                };
                PacketId: {
                    encode(message: _128.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.PacketId;
                    fromJSON(object: any): _128.PacketId;
                    toJSON(message: _128.PacketId): unknown;
                    fromPartial(object: Partial<_128.PacketId>): _128.PacketId;
                };
                Acknowledgement: {
                    encode(message: _128.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Acknowledgement;
                    fromJSON(object: any): _128.Acknowledgement;
                    toJSON(message: _128.Acknowledgement): unknown;
                    fromPartial(object: Partial<_128.Acknowledgement>): _128.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _230.MsgClientImpl;
                QueryClientImpl: typeof _225.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _134.QueryClientStateRequest): Promise<_134.QueryClientStateResponse>;
                    clientStates(request?: _134.QueryClientStatesRequest): Promise<_134.QueryClientStatesResponse>;
                    consensusState(request: _134.QueryConsensusStateRequest): Promise<_134.QueryConsensusStateResponse>;
                    consensusStates(request: _134.QueryConsensusStatesRequest): Promise<_134.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _134.QueryConsensusStateHeightsRequest): Promise<_134.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _134.QueryClientStatusRequest): Promise<_134.QueryClientStatusResponse>;
                    clientParams(request?: _134.QueryClientParamsRequest): Promise<_134.QueryClientParamsResponse>;
                    upgradedClientState(request?: _134.QueryUpgradedClientStateRequest): Promise<_134.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _134.QueryUpgradedConsensusStateRequest): Promise<_134.QueryUpgradedConsensusStateResponse>;
                };
                MsgCreateClient: {
                    encode(message: _135.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgCreateClient;
                    fromJSON(object: any): _135.MsgCreateClient;
                    toJSON(message: _135.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_135.MsgCreateClient>): _135.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _135.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgCreateClientResponse;
                    fromJSON(_: any): _135.MsgCreateClientResponse;
                    toJSON(_: _135.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_135.MsgCreateClientResponse>): _135.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _135.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgUpdateClient;
                    fromJSON(object: any): _135.MsgUpdateClient;
                    toJSON(message: _135.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_135.MsgUpdateClient>): _135.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _135.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgUpdateClientResponse;
                    fromJSON(_: any): _135.MsgUpdateClientResponse;
                    toJSON(_: _135.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_135.MsgUpdateClientResponse>): _135.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _135.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgUpgradeClient;
                    fromJSON(object: any): _135.MsgUpgradeClient;
                    toJSON(message: _135.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_135.MsgUpgradeClient>): _135.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _135.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgUpgradeClientResponse;
                    fromJSON(_: any): _135.MsgUpgradeClientResponse;
                    toJSON(_: _135.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_135.MsgUpgradeClientResponse>): _135.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _135.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _135.MsgSubmitMisbehaviour;
                    toJSON(message: _135.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_135.MsgSubmitMisbehaviour>): _135.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _135.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _135.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _135.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_135.MsgSubmitMisbehaviourResponse>): _135.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _134.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryClientStateRequest;
                    fromJSON(object: any): _134.QueryClientStateRequest;
                    toJSON(message: _134.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_134.QueryClientStateRequest>): _134.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _134.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryClientStateResponse;
                    fromJSON(object: any): _134.QueryClientStateResponse;
                    toJSON(message: _134.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_134.QueryClientStateResponse>): _134.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _134.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryClientStatesRequest;
                    fromJSON(object: any): _134.QueryClientStatesRequest;
                    toJSON(message: _134.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_134.QueryClientStatesRequest>): _134.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _134.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryClientStatesResponse;
                    fromJSON(object: any): _134.QueryClientStatesResponse;
                    toJSON(message: _134.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_134.QueryClientStatesResponse>): _134.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _134.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryConsensusStateRequest;
                    fromJSON(object: any): _134.QueryConsensusStateRequest;
                    toJSON(message: _134.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_134.QueryConsensusStateRequest>): _134.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _134.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryConsensusStateResponse;
                    fromJSON(object: any): _134.QueryConsensusStateResponse;
                    toJSON(message: _134.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_134.QueryConsensusStateResponse>): _134.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _134.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryConsensusStatesRequest;
                    fromJSON(object: any): _134.QueryConsensusStatesRequest;
                    toJSON(message: _134.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_134.QueryConsensusStatesRequest>): _134.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _134.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryConsensusStatesResponse;
                    fromJSON(object: any): _134.QueryConsensusStatesResponse;
                    toJSON(message: _134.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_134.QueryConsensusStatesResponse>): _134.QueryConsensusStatesResponse;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _134.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryConsensusStateHeightsRequest;
                    fromJSON(object: any): _134.QueryConsensusStateHeightsRequest;
                    toJSON(message: _134.QueryConsensusStateHeightsRequest): unknown;
                    fromPartial(object: Partial<_134.QueryConsensusStateHeightsRequest>): _134.QueryConsensusStateHeightsRequest;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _134.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryConsensusStateHeightsResponse;
                    fromJSON(object: any): _134.QueryConsensusStateHeightsResponse;
                    toJSON(message: _134.QueryConsensusStateHeightsResponse): unknown;
                    fromPartial(object: Partial<_134.QueryConsensusStateHeightsResponse>): _134.QueryConsensusStateHeightsResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _134.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryClientStatusRequest;
                    fromJSON(object: any): _134.QueryClientStatusRequest;
                    toJSON(message: _134.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_134.QueryClientStatusRequest>): _134.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _134.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryClientStatusResponse;
                    fromJSON(object: any): _134.QueryClientStatusResponse;
                    toJSON(message: _134.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_134.QueryClientStatusResponse>): _134.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _134.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryClientParamsRequest;
                    fromJSON(_: any): _134.QueryClientParamsRequest;
                    toJSON(_: _134.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_134.QueryClientParamsRequest>): _134.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _134.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryClientParamsResponse;
                    fromJSON(object: any): _134.QueryClientParamsResponse;
                    toJSON(message: _134.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_134.QueryClientParamsResponse>): _134.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _134.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _134.QueryUpgradedClientStateRequest;
                    toJSON(_: _134.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_134.QueryUpgradedClientStateRequest>): _134.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _134.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _134.QueryUpgradedClientStateResponse;
                    toJSON(message: _134.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_134.QueryUpgradedClientStateResponse>): _134.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _134.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _134.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _134.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_134.QueryUpgradedConsensusStateRequest>): _134.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _134.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _134.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _134.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_134.QueryUpgradedConsensusStateResponse>): _134.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _133.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.GenesisState;
                    fromJSON(object: any): _133.GenesisState;
                    toJSON(message: _133.GenesisState): unknown;
                    fromPartial(object: Partial<_133.GenesisState>): _133.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _133.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.GenesisMetadata;
                    fromJSON(object: any): _133.GenesisMetadata;
                    toJSON(message: _133.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_133.GenesisMetadata>): _133.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _133.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _133.IdentifiedGenesisMetadata;
                    toJSON(message: _133.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_133.IdentifiedGenesisMetadata>): _133.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _132.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.IdentifiedClientState;
                    fromJSON(object: any): _132.IdentifiedClientState;
                    toJSON(message: _132.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_132.IdentifiedClientState>): _132.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _132.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConsensusStateWithHeight;
                    fromJSON(object: any): _132.ConsensusStateWithHeight;
                    toJSON(message: _132.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_132.ConsensusStateWithHeight>): _132.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _132.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ClientConsensusStates;
                    fromJSON(object: any): _132.ClientConsensusStates;
                    toJSON(message: _132.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_132.ClientConsensusStates>): _132.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _132.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ClientUpdateProposal;
                    fromJSON(object: any): _132.ClientUpdateProposal;
                    toJSON(message: _132.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_132.ClientUpdateProposal>): _132.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _132.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.UpgradeProposal;
                    fromJSON(object: any): _132.UpgradeProposal;
                    toJSON(message: _132.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_132.UpgradeProposal>): _132.UpgradeProposal;
                };
                Height: {
                    encode(message: _132.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Height;
                    fromJSON(object: any): _132.Height;
                    toJSON(message: _132.Height): unknown;
                    fromPartial(object: Partial<_132.Height>): _132.Height;
                };
                Params: {
                    encode(message: _132.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Params;
                    fromJSON(object: any): _132.Params;
                    toJSON(message: _132.Params): unknown;
                    fromPartial(object: Partial<_132.Params>): _132.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _136.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.MerkleRoot;
                    fromJSON(object: any): _136.MerkleRoot;
                    toJSON(message: _136.MerkleRoot): unknown;
                    fromPartial(object: Partial<_136.MerkleRoot>): _136.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _136.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.MerklePrefix;
                    fromJSON(object: any): _136.MerklePrefix;
                    toJSON(message: _136.MerklePrefix): unknown;
                    fromPartial(object: Partial<_136.MerklePrefix>): _136.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _136.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.MerklePath;
                    fromJSON(object: any): _136.MerklePath;
                    toJSON(message: _136.MerklePath): unknown;
                    fromPartial(object: Partial<_136.MerklePath>): _136.MerklePath;
                };
                MerkleProof: {
                    encode(message: _136.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.MerkleProof;
                    fromJSON(object: any): _136.MerkleProof;
                    toJSON(message: _136.MerkleProof): unknown;
                    fromPartial(object: Partial<_136.MerkleProof>): _136.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _231.MsgClientImpl;
                QueryClientImpl: typeof _226.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _139.QueryConnectionRequest): Promise<_139.QueryConnectionResponse>;
                    connections(request?: _139.QueryConnectionsRequest): Promise<_139.QueryConnectionsResponse>;
                    clientConnections(request: _139.QueryClientConnectionsRequest): Promise<_139.QueryClientConnectionsResponse>;
                    connectionClientState(request: _139.QueryConnectionClientStateRequest): Promise<_139.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _139.QueryConnectionConsensusStateRequest): Promise<_139.QueryConnectionConsensusStateResponse>;
                };
                MsgConnectionOpenInit: {
                    encode(message: _140.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgConnectionOpenInit;
                    fromJSON(object: any): _140.MsgConnectionOpenInit;
                    toJSON(message: _140.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_140.MsgConnectionOpenInit>): _140.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _140.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _140.MsgConnectionOpenInitResponse;
                    toJSON(_: _140.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_140.MsgConnectionOpenInitResponse>): _140.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _140.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgConnectionOpenTry;
                    fromJSON(object: any): _140.MsgConnectionOpenTry;
                    toJSON(message: _140.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_140.MsgConnectionOpenTry>): _140.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _140.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _140.MsgConnectionOpenTryResponse;
                    toJSON(_: _140.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_140.MsgConnectionOpenTryResponse>): _140.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _140.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgConnectionOpenAck;
                    fromJSON(object: any): _140.MsgConnectionOpenAck;
                    toJSON(message: _140.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_140.MsgConnectionOpenAck>): _140.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _140.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _140.MsgConnectionOpenAckResponse;
                    toJSON(_: _140.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_140.MsgConnectionOpenAckResponse>): _140.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _140.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _140.MsgConnectionOpenConfirm;
                    toJSON(message: _140.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_140.MsgConnectionOpenConfirm>): _140.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _140.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _140.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _140.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_140.MsgConnectionOpenConfirmResponse>): _140.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _139.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryConnectionRequest;
                    fromJSON(object: any): _139.QueryConnectionRequest;
                    toJSON(message: _139.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_139.QueryConnectionRequest>): _139.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _139.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryConnectionResponse;
                    fromJSON(object: any): _139.QueryConnectionResponse;
                    toJSON(message: _139.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_139.QueryConnectionResponse>): _139.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _139.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryConnectionsRequest;
                    fromJSON(object: any): _139.QueryConnectionsRequest;
                    toJSON(message: _139.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_139.QueryConnectionsRequest>): _139.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _139.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryConnectionsResponse;
                    fromJSON(object: any): _139.QueryConnectionsResponse;
                    toJSON(message: _139.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_139.QueryConnectionsResponse>): _139.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _139.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryClientConnectionsRequest;
                    fromJSON(object: any): _139.QueryClientConnectionsRequest;
                    toJSON(message: _139.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_139.QueryClientConnectionsRequest>): _139.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _139.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryClientConnectionsResponse;
                    fromJSON(object: any): _139.QueryClientConnectionsResponse;
                    toJSON(message: _139.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_139.QueryClientConnectionsResponse>): _139.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _139.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _139.QueryConnectionClientStateRequest;
                    toJSON(message: _139.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_139.QueryConnectionClientStateRequest>): _139.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _139.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _139.QueryConnectionClientStateResponse;
                    toJSON(message: _139.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_139.QueryConnectionClientStateResponse>): _139.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _139.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _139.QueryConnectionConsensusStateRequest;
                    toJSON(message: _139.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_139.QueryConnectionConsensusStateRequest>): _139.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _139.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _139.QueryConnectionConsensusStateResponse;
                    toJSON(message: _139.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_139.QueryConnectionConsensusStateResponse>): _139.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _138.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.GenesisState;
                    fromJSON(object: any): _138.GenesisState;
                    toJSON(message: _138.GenesisState): unknown;
                    fromPartial(object: Partial<_138.GenesisState>): _138.GenesisState;
                };
                stateFromJSON(object: any): _137.State;
                stateToJSON(object: _137.State): string;
                State: typeof _137.State;
                StateSDKType: typeof _137.State;
                ConnectionEnd: {
                    encode(message: _137.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ConnectionEnd;
                    fromJSON(object: any): _137.ConnectionEnd;
                    toJSON(message: _137.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_137.ConnectionEnd>): _137.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _137.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.IdentifiedConnection;
                    fromJSON(object: any): _137.IdentifiedConnection;
                    toJSON(message: _137.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_137.IdentifiedConnection>): _137.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _137.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Counterparty;
                    fromJSON(object: any): _137.Counterparty;
                    toJSON(message: _137.Counterparty): unknown;
                    fromPartial(object: Partial<_137.Counterparty>): _137.Counterparty;
                };
                ClientPaths: {
                    encode(message: _137.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ClientPaths;
                    fromJSON(object: any): _137.ClientPaths;
                    toJSON(message: _137.ClientPaths): unknown;
                    fromPartial(object: Partial<_137.ClientPaths>): _137.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _137.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ConnectionPaths;
                    fromJSON(object: any): _137.ConnectionPaths;
                    toJSON(message: _137.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_137.ConnectionPaths>): _137.ConnectionPaths;
                };
                Version: {
                    encode(message: _137.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Version;
                    fromJSON(object: any): _137.Version;
                    toJSON(message: _137.Version): unknown;
                    fromPartial(object: Partial<_137.Version>): _137.Version;
                };
                Params: {
                    encode(message: _137.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Params;
                    fromJSON(object: any): _137.Params;
                    toJSON(message: _137.Params): unknown;
                    fromPartial(object: Partial<_137.Params>): _137.Params;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _141.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.GenesisState;
                    fromJSON(object: any): _141.GenesisState;
                    toJSON(message: _141.GenesisState): unknown;
                    fromPartial(object: Partial<_141.GenesisState>): _141.GenesisState;
                };
            };
        }
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
            ibc: {
                applications: {
                    fee: {
                        v1: _227.MsgClientImpl;
                    };
                    transfer: {
                        v1: _228.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _229.MsgClientImpl;
                    };
                    client: {
                        v1: _230.MsgClientImpl;
                    };
                    connection: {
                        v1: _231.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    fee: {
                        v1: {
                            incentivizedPackets(request: _113.QueryIncentivizedPacketsRequest): Promise<_113.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _113.QueryIncentivizedPacketRequest): Promise<_113.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _113.QueryIncentivizedPacketsForChannelRequest): Promise<_113.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _113.QueryTotalRecvFeesRequest): Promise<_113.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _113.QueryTotalAckFeesRequest): Promise<_113.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _113.QueryTotalTimeoutFeesRequest): Promise<_113.QueryTotalTimeoutFeesResponse>;
                            payee(request: _113.QueryPayeeRequest): Promise<_113.QueryPayeeResponse>;
                            counterpartyPayee(request: _113.QueryCounterpartyPayeeRequest): Promise<_113.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _113.QueryFeeEnabledChannelsRequest): Promise<_113.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _113.QueryFeeEnabledChannelRequest): Promise<_113.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _116.QueryInterchainAccountRequest): Promise<_116.QueryInterchainAccountResponse>;
                                params(request?: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _118.QueryParamsRequest): Promise<_118.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _124.QueryDenomTraceRequest): Promise<_124.QueryDenomTraceResponse>;
                            denomTraces(request?: _124.QueryDenomTracesRequest): Promise<_124.QueryDenomTracesResponse>;
                            params(request?: _124.QueryParamsRequest): Promise<_124.QueryParamsResponse>;
                            denomHash(request: _124.QueryDenomHashRequest): Promise<_124.QueryDenomHashResponse>;
                            escrowAddress(request: _124.QueryEscrowAddressRequest): Promise<_124.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _130.QueryChannelRequest): Promise<_130.QueryChannelResponse>;
                            channels(request?: _130.QueryChannelsRequest): Promise<_130.QueryChannelsResponse>;
                            connectionChannels(request: _130.QueryConnectionChannelsRequest): Promise<_130.QueryConnectionChannelsResponse>;
                            channelClientState(request: _130.QueryChannelClientStateRequest): Promise<_130.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _130.QueryChannelConsensusStateRequest): Promise<_130.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _130.QueryPacketCommitmentRequest): Promise<_130.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _130.QueryPacketCommitmentsRequest): Promise<_130.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _130.QueryPacketReceiptRequest): Promise<_130.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _130.QueryPacketAcknowledgementRequest): Promise<_130.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _130.QueryPacketAcknowledgementsRequest): Promise<_130.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _130.QueryUnreceivedPacketsRequest): Promise<_130.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _130.QueryUnreceivedAcksRequest): Promise<_130.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _130.QueryNextSequenceReceiveRequest): Promise<_130.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _134.QueryClientStateRequest): Promise<_134.QueryClientStateResponse>;
                            clientStates(request?: _134.QueryClientStatesRequest): Promise<_134.QueryClientStatesResponse>;
                            consensusState(request: _134.QueryConsensusStateRequest): Promise<_134.QueryConsensusStateResponse>;
                            consensusStates(request: _134.QueryConsensusStatesRequest): Promise<_134.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _134.QueryConsensusStateHeightsRequest): Promise<_134.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _134.QueryClientStatusRequest): Promise<_134.QueryClientStatusResponse>;
                            clientParams(request?: _134.QueryClientParamsRequest): Promise<_134.QueryClientParamsResponse>;
                            upgradedClientState(request?: _134.QueryUpgradedClientStateRequest): Promise<_134.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _134.QueryUpgradedConsensusStateRequest): Promise<_134.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _139.QueryConnectionRequest): Promise<_139.QueryConnectionResponse>;
                            connections(request?: _139.QueryConnectionsRequest): Promise<_139.QueryConnectionsResponse>;
                            clientConnections(request: _139.QueryClientConnectionsRequest): Promise<_139.QueryClientConnectionsResponse>;
                            connectionClientState(request: _139.QueryConnectionClientStateRequest): Promise<_139.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _139.QueryConnectionConsensusStateRequest): Promise<_139.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
