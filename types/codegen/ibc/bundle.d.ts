import * as _147 from "./applications/fee/v1/ack";
import * as _148 from "./applications/fee/v1/fee";
import * as _149 from "./applications/fee/v1/genesis";
import * as _150 from "./applications/fee/v1/metadata";
import * as _151 from "./applications/fee/v1/query";
import * as _152 from "./applications/fee/v1/tx";
import * as _153 from "./applications/interchain_accounts/controller/v1/controller";
import * as _154 from "./applications/interchain_accounts/controller/v1/query";
import * as _155 from "./applications/interchain_accounts/controller/v1/tx";
import * as _156 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _157 from "./applications/interchain_accounts/host/v1/host";
import * as _158 from "./applications/interchain_accounts/host/v1/query";
import * as _159 from "./applications/interchain_accounts/host/v1/tx";
import * as _160 from "./applications/interchain_accounts/v1/account";
import * as _161 from "./applications/interchain_accounts/v1/metadata";
import * as _162 from "./applications/interchain_accounts/v1/packet";
import * as _163 from "./applications/transfer/v1/authz";
import * as _164 from "./applications/transfer/v1/genesis";
import * as _165 from "./applications/transfer/v1/query";
import * as _166 from "./applications/transfer/v1/transfer";
import * as _167 from "./applications/transfer/v1/tx";
import * as _168 from "./applications/transfer/v2/packet";
import * as _169 from "./core/channel/v1/channel";
import * as _170 from "./core/channel/v1/genesis";
import * as _171 from "./core/channel/v1/query";
import * as _172 from "./core/channel/v1/tx";
import * as _173 from "./core/channel/v1/upgrade";
import * as _174 from "./core/client/v1/client";
import * as _175 from "./core/client/v1/genesis";
import * as _176 from "./core/client/v1/query";
import * as _177 from "./core/client/v1/tx";
import * as _178 from "./core/commitment/v1/commitment";
import * as _179 from "./core/connection/v1/connection";
import * as _180 from "./core/connection/v1/genesis";
import * as _181 from "./core/connection/v1/query";
import * as _182 from "./core/connection/v1/tx";
import * as _183 from "./core/types/v1/genesis";
import * as _184 from "./lightclients/localhost/v2/localhost";
import * as _185 from "./lightclients/solomachine/v2/solomachine";
import * as _186 from "./lightclients/solomachine/v3/solomachine";
import * as _187 from "./lightclients/tendermint/v1/tendermint";
import * as _188 from "./lightclients/wasm/v1/genesis";
import * as _189 from "./lightclients/wasm/v1/query";
import * as _190 from "./lightclients/wasm/v1/tx";
import * as _191 from "./lightclients/wasm/v1/wasm";
import * as _290 from "./applications/fee/v1/query.rpc.Query";
import * as _291 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _292 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _293 from "./applications/transfer/v1/query.rpc.Query";
import * as _294 from "./core/channel/v1/query.rpc.Query";
import * as _295 from "./core/client/v1/query.rpc.Query";
import * as _296 from "./core/connection/v1/query.rpc.Query";
import * as _297 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _298 from "./applications/fee/v1/tx.rpc.msg";
import * as _299 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _300 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _301 from "./applications/transfer/v1/tx.rpc.msg";
import * as _302 from "./core/channel/v1/tx.rpc.msg";
import * as _303 from "./core/client/v1/tx.rpc.msg";
import * as _304 from "./core/connection/v1/tx.rpc.msg";
import * as _305 from "./lightclients/wasm/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _298.MsgClientImpl;
                QueryClientImpl: typeof _290.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _151.QueryIncentivizedPacketsRequest): Promise<_151.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _151.QueryIncentivizedPacketRequest): Promise<_151.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _151.QueryIncentivizedPacketsForChannelRequest): Promise<_151.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _151.QueryTotalRecvFeesRequest): Promise<_151.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _151.QueryTotalAckFeesRequest): Promise<_151.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _151.QueryTotalTimeoutFeesRequest): Promise<_151.QueryTotalTimeoutFeesResponse>;
                    payee(request: _151.QueryPayeeRequest): Promise<_151.QueryPayeeResponse>;
                    counterpartyPayee(request: _151.QueryCounterpartyPayeeRequest): Promise<_151.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _151.QueryFeeEnabledChannelsRequest): Promise<_151.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _151.QueryFeeEnabledChannelRequest): Promise<_151.QueryFeeEnabledChannelResponse>;
                };
                MsgRegisterPayee: {
                    encode(message: _152.MsgRegisterPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgRegisterPayee;
                    fromJSON(object: any): _152.MsgRegisterPayee;
                    toJSON(message: _152.MsgRegisterPayee): unknown;
                    fromPartial(object: Partial<_152.MsgRegisterPayee>): _152.MsgRegisterPayee;
                };
                MsgRegisterPayeeResponse: {
                    encode(_: _152.MsgRegisterPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgRegisterPayeeResponse;
                    fromJSON(_: any): _152.MsgRegisterPayeeResponse;
                    toJSON(_: _152.MsgRegisterPayeeResponse): unknown;
                    fromPartial(_: Partial<_152.MsgRegisterPayeeResponse>): _152.MsgRegisterPayeeResponse;
                };
                MsgRegisterCounterpartyPayee: {
                    encode(message: _152.MsgRegisterCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgRegisterCounterpartyPayee;
                    fromJSON(object: any): _152.MsgRegisterCounterpartyPayee;
                    toJSON(message: _152.MsgRegisterCounterpartyPayee): unknown;
                    fromPartial(object: Partial<_152.MsgRegisterCounterpartyPayee>): _152.MsgRegisterCounterpartyPayee;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    encode(_: _152.MsgRegisterCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgRegisterCounterpartyPayeeResponse;
                    fromJSON(_: any): _152.MsgRegisterCounterpartyPayeeResponse;
                    toJSON(_: _152.MsgRegisterCounterpartyPayeeResponse): unknown;
                    fromPartial(_: Partial<_152.MsgRegisterCounterpartyPayeeResponse>): _152.MsgRegisterCounterpartyPayeeResponse;
                };
                MsgPayPacketFee: {
                    encode(message: _152.MsgPayPacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgPayPacketFee;
                    fromJSON(object: any): _152.MsgPayPacketFee;
                    toJSON(message: _152.MsgPayPacketFee): unknown;
                    fromPartial(object: Partial<_152.MsgPayPacketFee>): _152.MsgPayPacketFee;
                };
                MsgPayPacketFeeResponse: {
                    encode(_: _152.MsgPayPacketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgPayPacketFeeResponse;
                    fromJSON(_: any): _152.MsgPayPacketFeeResponse;
                    toJSON(_: _152.MsgPayPacketFeeResponse): unknown;
                    fromPartial(_: Partial<_152.MsgPayPacketFeeResponse>): _152.MsgPayPacketFeeResponse;
                };
                MsgPayPacketFeeAsync: {
                    encode(message: _152.MsgPayPacketFeeAsync, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgPayPacketFeeAsync;
                    fromJSON(object: any): _152.MsgPayPacketFeeAsync;
                    toJSON(message: _152.MsgPayPacketFeeAsync): unknown;
                    fromPartial(object: Partial<_152.MsgPayPacketFeeAsync>): _152.MsgPayPacketFeeAsync;
                };
                MsgPayPacketFeeAsyncResponse: {
                    encode(_: _152.MsgPayPacketFeeAsyncResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgPayPacketFeeAsyncResponse;
                    fromJSON(_: any): _152.MsgPayPacketFeeAsyncResponse;
                    toJSON(_: _152.MsgPayPacketFeeAsyncResponse): unknown;
                    fromPartial(_: Partial<_152.MsgPayPacketFeeAsyncResponse>): _152.MsgPayPacketFeeAsyncResponse;
                };
                QueryIncentivizedPacketsRequest: {
                    encode(message: _151.QueryIncentivizedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryIncentivizedPacketsRequest;
                    fromJSON(object: any): _151.QueryIncentivizedPacketsRequest;
                    toJSON(message: _151.QueryIncentivizedPacketsRequest): unknown;
                    fromPartial(object: Partial<_151.QueryIncentivizedPacketsRequest>): _151.QueryIncentivizedPacketsRequest;
                };
                QueryIncentivizedPacketsResponse: {
                    encode(message: _151.QueryIncentivizedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryIncentivizedPacketsResponse;
                    fromJSON(object: any): _151.QueryIncentivizedPacketsResponse;
                    toJSON(message: _151.QueryIncentivizedPacketsResponse): unknown;
                    fromPartial(object: Partial<_151.QueryIncentivizedPacketsResponse>): _151.QueryIncentivizedPacketsResponse;
                };
                QueryIncentivizedPacketRequest: {
                    encode(message: _151.QueryIncentivizedPacketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryIncentivizedPacketRequest;
                    fromJSON(object: any): _151.QueryIncentivizedPacketRequest;
                    toJSON(message: _151.QueryIncentivizedPacketRequest): unknown;
                    fromPartial(object: Partial<_151.QueryIncentivizedPacketRequest>): _151.QueryIncentivizedPacketRequest;
                };
                QueryIncentivizedPacketResponse: {
                    encode(message: _151.QueryIncentivizedPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryIncentivizedPacketResponse;
                    fromJSON(object: any): _151.QueryIncentivizedPacketResponse;
                    toJSON(message: _151.QueryIncentivizedPacketResponse): unknown;
                    fromPartial(object: Partial<_151.QueryIncentivizedPacketResponse>): _151.QueryIncentivizedPacketResponse;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    encode(message: _151.QueryIncentivizedPacketsForChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryIncentivizedPacketsForChannelRequest;
                    fromJSON(object: any): _151.QueryIncentivizedPacketsForChannelRequest;
                    toJSON(message: _151.QueryIncentivizedPacketsForChannelRequest): unknown;
                    fromPartial(object: Partial<_151.QueryIncentivizedPacketsForChannelRequest>): _151.QueryIncentivizedPacketsForChannelRequest;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    encode(message: _151.QueryIncentivizedPacketsForChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryIncentivizedPacketsForChannelResponse;
                    fromJSON(object: any): _151.QueryIncentivizedPacketsForChannelResponse;
                    toJSON(message: _151.QueryIncentivizedPacketsForChannelResponse): unknown;
                    fromPartial(object: Partial<_151.QueryIncentivizedPacketsForChannelResponse>): _151.QueryIncentivizedPacketsForChannelResponse;
                };
                QueryTotalRecvFeesRequest: {
                    encode(message: _151.QueryTotalRecvFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryTotalRecvFeesRequest;
                    fromJSON(object: any): _151.QueryTotalRecvFeesRequest;
                    toJSON(message: _151.QueryTotalRecvFeesRequest): unknown;
                    fromPartial(object: Partial<_151.QueryTotalRecvFeesRequest>): _151.QueryTotalRecvFeesRequest;
                };
                QueryTotalRecvFeesResponse: {
                    encode(message: _151.QueryTotalRecvFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryTotalRecvFeesResponse;
                    fromJSON(object: any): _151.QueryTotalRecvFeesResponse;
                    toJSON(message: _151.QueryTotalRecvFeesResponse): unknown;
                    fromPartial(object: Partial<_151.QueryTotalRecvFeesResponse>): _151.QueryTotalRecvFeesResponse;
                };
                QueryTotalAckFeesRequest: {
                    encode(message: _151.QueryTotalAckFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryTotalAckFeesRequest;
                    fromJSON(object: any): _151.QueryTotalAckFeesRequest;
                    toJSON(message: _151.QueryTotalAckFeesRequest): unknown;
                    fromPartial(object: Partial<_151.QueryTotalAckFeesRequest>): _151.QueryTotalAckFeesRequest;
                };
                QueryTotalAckFeesResponse: {
                    encode(message: _151.QueryTotalAckFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryTotalAckFeesResponse;
                    fromJSON(object: any): _151.QueryTotalAckFeesResponse;
                    toJSON(message: _151.QueryTotalAckFeesResponse): unknown;
                    fromPartial(object: Partial<_151.QueryTotalAckFeesResponse>): _151.QueryTotalAckFeesResponse;
                };
                QueryTotalTimeoutFeesRequest: {
                    encode(message: _151.QueryTotalTimeoutFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryTotalTimeoutFeesRequest;
                    fromJSON(object: any): _151.QueryTotalTimeoutFeesRequest;
                    toJSON(message: _151.QueryTotalTimeoutFeesRequest): unknown;
                    fromPartial(object: Partial<_151.QueryTotalTimeoutFeesRequest>): _151.QueryTotalTimeoutFeesRequest;
                };
                QueryTotalTimeoutFeesResponse: {
                    encode(message: _151.QueryTotalTimeoutFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryTotalTimeoutFeesResponse;
                    fromJSON(object: any): _151.QueryTotalTimeoutFeesResponse;
                    toJSON(message: _151.QueryTotalTimeoutFeesResponse): unknown;
                    fromPartial(object: Partial<_151.QueryTotalTimeoutFeesResponse>): _151.QueryTotalTimeoutFeesResponse;
                };
                QueryPayeeRequest: {
                    encode(message: _151.QueryPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryPayeeRequest;
                    fromJSON(object: any): _151.QueryPayeeRequest;
                    toJSON(message: _151.QueryPayeeRequest): unknown;
                    fromPartial(object: Partial<_151.QueryPayeeRequest>): _151.QueryPayeeRequest;
                };
                QueryPayeeResponse: {
                    encode(message: _151.QueryPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryPayeeResponse;
                    fromJSON(object: any): _151.QueryPayeeResponse;
                    toJSON(message: _151.QueryPayeeResponse): unknown;
                    fromPartial(object: Partial<_151.QueryPayeeResponse>): _151.QueryPayeeResponse;
                };
                QueryCounterpartyPayeeRequest: {
                    encode(message: _151.QueryCounterpartyPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryCounterpartyPayeeRequest;
                    fromJSON(object: any): _151.QueryCounterpartyPayeeRequest;
                    toJSON(message: _151.QueryCounterpartyPayeeRequest): unknown;
                    fromPartial(object: Partial<_151.QueryCounterpartyPayeeRequest>): _151.QueryCounterpartyPayeeRequest;
                };
                QueryCounterpartyPayeeResponse: {
                    encode(message: _151.QueryCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryCounterpartyPayeeResponse;
                    fromJSON(object: any): _151.QueryCounterpartyPayeeResponse;
                    toJSON(message: _151.QueryCounterpartyPayeeResponse): unknown;
                    fromPartial(object: Partial<_151.QueryCounterpartyPayeeResponse>): _151.QueryCounterpartyPayeeResponse;
                };
                QueryFeeEnabledChannelsRequest: {
                    encode(message: _151.QueryFeeEnabledChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryFeeEnabledChannelsRequest;
                    fromJSON(object: any): _151.QueryFeeEnabledChannelsRequest;
                    toJSON(message: _151.QueryFeeEnabledChannelsRequest): unknown;
                    fromPartial(object: Partial<_151.QueryFeeEnabledChannelsRequest>): _151.QueryFeeEnabledChannelsRequest;
                };
                QueryFeeEnabledChannelsResponse: {
                    encode(message: _151.QueryFeeEnabledChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryFeeEnabledChannelsResponse;
                    fromJSON(object: any): _151.QueryFeeEnabledChannelsResponse;
                    toJSON(message: _151.QueryFeeEnabledChannelsResponse): unknown;
                    fromPartial(object: Partial<_151.QueryFeeEnabledChannelsResponse>): _151.QueryFeeEnabledChannelsResponse;
                };
                QueryFeeEnabledChannelRequest: {
                    encode(message: _151.QueryFeeEnabledChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryFeeEnabledChannelRequest;
                    fromJSON(object: any): _151.QueryFeeEnabledChannelRequest;
                    toJSON(message: _151.QueryFeeEnabledChannelRequest): unknown;
                    fromPartial(object: Partial<_151.QueryFeeEnabledChannelRequest>): _151.QueryFeeEnabledChannelRequest;
                };
                QueryFeeEnabledChannelResponse: {
                    encode(message: _151.QueryFeeEnabledChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryFeeEnabledChannelResponse;
                    fromJSON(object: any): _151.QueryFeeEnabledChannelResponse;
                    toJSON(message: _151.QueryFeeEnabledChannelResponse): unknown;
                    fromPartial(object: Partial<_151.QueryFeeEnabledChannelResponse>): _151.QueryFeeEnabledChannelResponse;
                };
                Metadata: {
                    encode(message: _150.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Metadata;
                    fromJSON(object: any): _150.Metadata;
                    toJSON(message: _150.Metadata): unknown;
                    fromPartial(object: Partial<_150.Metadata>): _150.Metadata;
                };
                GenesisState: {
                    encode(message: _149.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.GenesisState;
                    fromJSON(object: any): _149.GenesisState;
                    toJSON(message: _149.GenesisState): unknown;
                    fromPartial(object: Partial<_149.GenesisState>): _149.GenesisState;
                };
                FeeEnabledChannel: {
                    encode(message: _149.FeeEnabledChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.FeeEnabledChannel;
                    fromJSON(object: any): _149.FeeEnabledChannel;
                    toJSON(message: _149.FeeEnabledChannel): unknown;
                    fromPartial(object: Partial<_149.FeeEnabledChannel>): _149.FeeEnabledChannel;
                };
                RegisteredPayee: {
                    encode(message: _149.RegisteredPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.RegisteredPayee;
                    fromJSON(object: any): _149.RegisteredPayee;
                    toJSON(message: _149.RegisteredPayee): unknown;
                    fromPartial(object: Partial<_149.RegisteredPayee>): _149.RegisteredPayee;
                };
                RegisteredCounterpartyPayee: {
                    encode(message: _149.RegisteredCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.RegisteredCounterpartyPayee;
                    fromJSON(object: any): _149.RegisteredCounterpartyPayee;
                    toJSON(message: _149.RegisteredCounterpartyPayee): unknown;
                    fromPartial(object: Partial<_149.RegisteredCounterpartyPayee>): _149.RegisteredCounterpartyPayee;
                };
                ForwardRelayerAddress: {
                    encode(message: _149.ForwardRelayerAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.ForwardRelayerAddress;
                    fromJSON(object: any): _149.ForwardRelayerAddress;
                    toJSON(message: _149.ForwardRelayerAddress): unknown;
                    fromPartial(object: Partial<_149.ForwardRelayerAddress>): _149.ForwardRelayerAddress;
                };
                Fee: {
                    encode(message: _148.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Fee;
                    fromJSON(object: any): _148.Fee;
                    toJSON(message: _148.Fee): unknown;
                    fromPartial(object: Partial<_148.Fee>): _148.Fee;
                };
                PacketFee: {
                    encode(message: _148.PacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.PacketFee;
                    fromJSON(object: any): _148.PacketFee;
                    toJSON(message: _148.PacketFee): unknown;
                    fromPartial(object: Partial<_148.PacketFee>): _148.PacketFee;
                };
                PacketFees: {
                    encode(message: _148.PacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.PacketFees;
                    fromJSON(object: any): _148.PacketFees;
                    toJSON(message: _148.PacketFees): unknown;
                    fromPartial(object: Partial<_148.PacketFees>): _148.PacketFees;
                };
                IdentifiedPacketFees: {
                    encode(message: _148.IdentifiedPacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.IdentifiedPacketFees;
                    fromJSON(object: any): _148.IdentifiedPacketFees;
                    toJSON(message: _148.IdentifiedPacketFees): unknown;
                    fromPartial(object: Partial<_148.IdentifiedPacketFees>): _148.IdentifiedPacketFees;
                };
                IncentivizedAcknowledgement: {
                    encode(message: _147.IncentivizedAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.IncentivizedAcknowledgement;
                    fromJSON(object: any): _147.IncentivizedAcknowledgement;
                    toJSON(message: _147.IncentivizedAcknowledgement): unknown;
                    fromPartial(object: Partial<_147.IncentivizedAcknowledgement>): _147.IncentivizedAcknowledgement;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _299.MsgClientImpl;
                    QueryClientImpl: typeof _291.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _154.QueryInterchainAccountRequest): Promise<_154.QueryInterchainAccountResponse>;
                        params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                    };
                    MsgRegisterInterchainAccount: {
                        encode(message: _155.MsgRegisterInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgRegisterInterchainAccount;
                        fromJSON(object: any): _155.MsgRegisterInterchainAccount;
                        toJSON(message: _155.MsgRegisterInterchainAccount): unknown;
                        fromPartial(object: Partial<_155.MsgRegisterInterchainAccount>): _155.MsgRegisterInterchainAccount;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        encode(message: _155.MsgRegisterInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgRegisterInterchainAccountResponse;
                        fromJSON(object: any): _155.MsgRegisterInterchainAccountResponse;
                        toJSON(message: _155.MsgRegisterInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_155.MsgRegisterInterchainAccountResponse>): _155.MsgRegisterInterchainAccountResponse;
                    };
                    MsgSendTx: {
                        encode(message: _155.MsgSendTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSendTx;
                        fromJSON(object: any): _155.MsgSendTx;
                        toJSON(message: _155.MsgSendTx): unknown;
                        fromPartial(object: Partial<_155.MsgSendTx>): _155.MsgSendTx;
                    };
                    MsgSendTxResponse: {
                        encode(message: _155.MsgSendTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSendTxResponse;
                        fromJSON(object: any): _155.MsgSendTxResponse;
                        toJSON(message: _155.MsgSendTxResponse): unknown;
                        fromPartial(object: Partial<_155.MsgSendTxResponse>): _155.MsgSendTxResponse;
                    };
                    MsgUpdateParams: {
                        encode(message: _155.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgUpdateParams;
                        fromJSON(object: any): _155.MsgUpdateParams;
                        toJSON(message: _155.MsgUpdateParams): unknown;
                        fromPartial(object: Partial<_155.MsgUpdateParams>): _155.MsgUpdateParams;
                    };
                    MsgUpdateParamsResponse: {
                        encode(_: _155.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgUpdateParamsResponse;
                        fromJSON(_: any): _155.MsgUpdateParamsResponse;
                        toJSON(_: _155.MsgUpdateParamsResponse): unknown;
                        fromPartial(_: Partial<_155.MsgUpdateParamsResponse>): _155.MsgUpdateParamsResponse;
                    };
                    QueryInterchainAccountRequest: {
                        encode(message: _154.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryInterchainAccountRequest;
                        fromJSON(object: any): _154.QueryInterchainAccountRequest;
                        toJSON(message: _154.QueryInterchainAccountRequest): unknown;
                        fromPartial(object: Partial<_154.QueryInterchainAccountRequest>): _154.QueryInterchainAccountRequest;
                    };
                    QueryInterchainAccountResponse: {
                        encode(message: _154.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryInterchainAccountResponse;
                        fromJSON(object: any): _154.QueryInterchainAccountResponse;
                        toJSON(message: _154.QueryInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_154.QueryInterchainAccountResponse>): _154.QueryInterchainAccountResponse;
                    };
                    QueryParamsRequest: {
                        encode(_: _154.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsRequest;
                        fromJSON(_: any): _154.QueryParamsRequest;
                        toJSON(_: _154.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_154.QueryParamsRequest>): _154.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _154.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsResponse;
                        fromJSON(object: any): _154.QueryParamsResponse;
                        toJSON(message: _154.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_154.QueryParamsResponse>): _154.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _153.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Params;
                        fromJSON(object: any): _153.Params;
                        toJSON(message: _153.Params): unknown;
                        fromPartial(object: Partial<_153.Params>): _153.Params;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        encode(message: _156.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.GenesisState;
                        fromJSON(object: any): _156.GenesisState;
                        toJSON(message: _156.GenesisState): unknown;
                        fromPartial(object: Partial<_156.GenesisState>): _156.GenesisState;
                    };
                    ControllerGenesisState: {
                        encode(message: _156.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ControllerGenesisState;
                        fromJSON(object: any): _156.ControllerGenesisState;
                        toJSON(message: _156.ControllerGenesisState): unknown;
                        fromPartial(object: Partial<_156.ControllerGenesisState>): _156.ControllerGenesisState;
                    };
                    HostGenesisState: {
                        encode(message: _156.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.HostGenesisState;
                        fromJSON(object: any): _156.HostGenesisState;
                        toJSON(message: _156.HostGenesisState): unknown;
                        fromPartial(object: Partial<_156.HostGenesisState>): _156.HostGenesisState;
                    };
                    ActiveChannel: {
                        encode(message: _156.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ActiveChannel;
                        fromJSON(object: any): _156.ActiveChannel;
                        toJSON(message: _156.ActiveChannel): unknown;
                        fromPartial(object: Partial<_156.ActiveChannel>): _156.ActiveChannel;
                    };
                    RegisteredInterchainAccount: {
                        encode(message: _156.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RegisteredInterchainAccount;
                        fromJSON(object: any): _156.RegisteredInterchainAccount;
                        toJSON(message: _156.RegisteredInterchainAccount): unknown;
                        fromPartial(object: Partial<_156.RegisteredInterchainAccount>): _156.RegisteredInterchainAccount;
                    };
                };
            }
            namespace host {
                const v1: {
                    MsgClientImpl: typeof _300.MsgClientImpl;
                    QueryClientImpl: typeof _292.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                    };
                    MsgUpdateParams: {
                        encode(message: _159.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgUpdateParams;
                        fromJSON(object: any): _159.MsgUpdateParams;
                        toJSON(message: _159.MsgUpdateParams): unknown;
                        fromPartial(object: Partial<_159.MsgUpdateParams>): _159.MsgUpdateParams;
                    };
                    MsgUpdateParamsResponse: {
                        encode(_: _159.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgUpdateParamsResponse;
                        fromJSON(_: any): _159.MsgUpdateParamsResponse;
                        toJSON(_: _159.MsgUpdateParamsResponse): unknown;
                        fromPartial(_: Partial<_159.MsgUpdateParamsResponse>): _159.MsgUpdateParamsResponse;
                    };
                    MsgModuleQuerySafe: {
                        encode(message: _159.MsgModuleQuerySafe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgModuleQuerySafe;
                        fromJSON(object: any): _159.MsgModuleQuerySafe;
                        toJSON(message: _159.MsgModuleQuerySafe): unknown;
                        fromPartial(object: Partial<_159.MsgModuleQuerySafe>): _159.MsgModuleQuerySafe;
                    };
                    MsgModuleQuerySafeResponse: {
                        encode(message: _159.MsgModuleQuerySafeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgModuleQuerySafeResponse;
                        fromJSON(object: any): _159.MsgModuleQuerySafeResponse;
                        toJSON(message: _159.MsgModuleQuerySafeResponse): unknown;
                        fromPartial(object: Partial<_159.MsgModuleQuerySafeResponse>): _159.MsgModuleQuerySafeResponse;
                    };
                    QueryParamsRequest: {
                        encode(_: _158.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsRequest;
                        fromJSON(_: any): _158.QueryParamsRequest;
                        toJSON(_: _158.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_158.QueryParamsRequest>): _158.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _158.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsResponse;
                        fromJSON(object: any): _158.QueryParamsResponse;
                        toJSON(message: _158.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_158.QueryParamsResponse>): _158.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _157.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Params;
                        fromJSON(object: any): _157.Params;
                        toJSON(message: _157.Params): unknown;
                        fromPartial(object: Partial<_157.Params>): _157.Params;
                    };
                    QueryRequest: {
                        encode(message: _157.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryRequest;
                        fromJSON(object: any): _157.QueryRequest;
                        toJSON(message: _157.QueryRequest): unknown;
                        fromPartial(object: Partial<_157.QueryRequest>): _157.QueryRequest;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _162.Type;
                typeToJSON(object: _162.Type): string;
                Type: typeof _162.Type;
                TypeSDKType: typeof _162.Type;
                InterchainAccountPacketData: {
                    encode(message: _162.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.InterchainAccountPacketData;
                    fromJSON(object: any): _162.InterchainAccountPacketData;
                    toJSON(message: _162.InterchainAccountPacketData): unknown;
                    fromPartial(object: Partial<_162.InterchainAccountPacketData>): _162.InterchainAccountPacketData;
                };
                CosmosTx: {
                    encode(message: _162.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.CosmosTx;
                    fromJSON(object: any): _162.CosmosTx;
                    toJSON(message: _162.CosmosTx): unknown;
                    fromPartial(object: Partial<_162.CosmosTx>): _162.CosmosTx;
                };
                Metadata: {
                    encode(message: _161.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Metadata;
                    fromJSON(object: any): _161.Metadata;
                    toJSON(message: _161.Metadata): unknown;
                    fromPartial(object: Partial<_161.Metadata>): _161.Metadata;
                };
                InterchainAccount: {
                    encode(message: _160.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.InterchainAccount;
                    fromJSON(object: any): _160.InterchainAccount;
                    toJSON(message: _160.InterchainAccount): unknown;
                    fromPartial(object: Partial<_160.InterchainAccount>): _160.InterchainAccount;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _301.MsgClientImpl;
                QueryClientImpl: typeof _293.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTraces(request?: _165.QueryDenomTracesRequest): Promise<_165.QueryDenomTracesResponse>;
                    denomTrace(request: _165.QueryDenomTraceRequest): Promise<_165.QueryDenomTraceResponse>;
                    params(request?: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                    denomHash(request: _165.QueryDenomHashRequest): Promise<_165.QueryDenomHashResponse>;
                    escrowAddress(request: _165.QueryEscrowAddressRequest): Promise<_165.QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: _165.QueryTotalEscrowForDenomRequest): Promise<_165.QueryTotalEscrowForDenomResponse>;
                };
                MsgTransfer: {
                    encode(message: _167.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgTransfer;
                    fromJSON(object: any): _167.MsgTransfer;
                    toJSON(message: _167.MsgTransfer): unknown;
                    fromPartial(object: Partial<_167.MsgTransfer>): _167.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(message: _167.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgTransferResponse;
                    fromJSON(object: any): _167.MsgTransferResponse;
                    toJSON(message: _167.MsgTransferResponse): unknown;
                    fromPartial(object: Partial<_167.MsgTransferResponse>): _167.MsgTransferResponse;
                };
                MsgUpdateParams: {
                    encode(message: _167.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgUpdateParams;
                    fromJSON(object: any): _167.MsgUpdateParams;
                    toJSON(message: _167.MsgUpdateParams): unknown;
                    fromPartial(object: Partial<_167.MsgUpdateParams>): _167.MsgUpdateParams;
                };
                MsgUpdateParamsResponse: {
                    encode(_: _167.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgUpdateParamsResponse;
                    fromJSON(_: any): _167.MsgUpdateParamsResponse;
                    toJSON(_: _167.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: Partial<_167.MsgUpdateParamsResponse>): _167.MsgUpdateParamsResponse;
                };
                DenomTrace: {
                    encode(message: _166.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.DenomTrace;
                    fromJSON(object: any): _166.DenomTrace;
                    toJSON(message: _166.DenomTrace): unknown;
                    fromPartial(object: Partial<_166.DenomTrace>): _166.DenomTrace;
                };
                Params: {
                    encode(message: _166.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Params;
                    fromJSON(object: any): _166.Params;
                    toJSON(message: _166.Params): unknown;
                    fromPartial(object: Partial<_166.Params>): _166.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _165.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDenomTraceRequest;
                    fromJSON(object: any): _165.QueryDenomTraceRequest;
                    toJSON(message: _165.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_165.QueryDenomTraceRequest>): _165.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _165.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDenomTraceResponse;
                    fromJSON(object: any): _165.QueryDenomTraceResponse;
                    toJSON(message: _165.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_165.QueryDenomTraceResponse>): _165.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _165.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDenomTracesRequest;
                    fromJSON(object: any): _165.QueryDenomTracesRequest;
                    toJSON(message: _165.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_165.QueryDenomTracesRequest>): _165.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _165.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDenomTracesResponse;
                    fromJSON(object: any): _165.QueryDenomTracesResponse;
                    toJSON(message: _165.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_165.QueryDenomTracesResponse>): _165.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _165.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryParamsRequest;
                    fromJSON(_: any): _165.QueryParamsRequest;
                    toJSON(_: _165.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_165.QueryParamsRequest>): _165.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _165.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryParamsResponse;
                    fromJSON(object: any): _165.QueryParamsResponse;
                    toJSON(message: _165.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_165.QueryParamsResponse>): _165.QueryParamsResponse;
                };
                QueryDenomHashRequest: {
                    encode(message: _165.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDenomHashRequest;
                    fromJSON(object: any): _165.QueryDenomHashRequest;
                    toJSON(message: _165.QueryDenomHashRequest): unknown;
                    fromPartial(object: Partial<_165.QueryDenomHashRequest>): _165.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _165.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDenomHashResponse;
                    fromJSON(object: any): _165.QueryDenomHashResponse;
                    toJSON(message: _165.QueryDenomHashResponse): unknown;
                    fromPartial(object: Partial<_165.QueryDenomHashResponse>): _165.QueryDenomHashResponse;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _165.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryEscrowAddressRequest;
                    fromJSON(object: any): _165.QueryEscrowAddressRequest;
                    toJSON(message: _165.QueryEscrowAddressRequest): unknown;
                    fromPartial(object: Partial<_165.QueryEscrowAddressRequest>): _165.QueryEscrowAddressRequest;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _165.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryEscrowAddressResponse;
                    fromJSON(object: any): _165.QueryEscrowAddressResponse;
                    toJSON(message: _165.QueryEscrowAddressResponse): unknown;
                    fromPartial(object: Partial<_165.QueryEscrowAddressResponse>): _165.QueryEscrowAddressResponse;
                };
                QueryTotalEscrowForDenomRequest: {
                    encode(message: _165.QueryTotalEscrowForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryTotalEscrowForDenomRequest;
                    fromJSON(object: any): _165.QueryTotalEscrowForDenomRequest;
                    toJSON(message: _165.QueryTotalEscrowForDenomRequest): unknown;
                    fromPartial(object: Partial<_165.QueryTotalEscrowForDenomRequest>): _165.QueryTotalEscrowForDenomRequest;
                };
                QueryTotalEscrowForDenomResponse: {
                    encode(message: _165.QueryTotalEscrowForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryTotalEscrowForDenomResponse;
                    fromJSON(object: any): _165.QueryTotalEscrowForDenomResponse;
                    toJSON(message: _165.QueryTotalEscrowForDenomResponse): unknown;
                    fromPartial(object: Partial<_165.QueryTotalEscrowForDenomResponse>): _165.QueryTotalEscrowForDenomResponse;
                };
                GenesisState: {
                    encode(message: _164.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.GenesisState;
                    fromJSON(object: any): _164.GenesisState;
                    toJSON(message: _164.GenesisState): unknown;
                    fromPartial(object: Partial<_164.GenesisState>): _164.GenesisState;
                };
                Allocation: {
                    encode(message: _163.Allocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Allocation;
                    fromJSON(object: any): _163.Allocation;
                    toJSON(message: _163.Allocation): unknown;
                    fromPartial(object: Partial<_163.Allocation>): _163.Allocation;
                };
                TransferAuthorization: {
                    encode(message: _163.TransferAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.TransferAuthorization;
                    fromJSON(object: any): _163.TransferAuthorization;
                    toJSON(message: _163.TransferAuthorization): unknown;
                    fromPartial(object: Partial<_163.TransferAuthorization>): _163.TransferAuthorization;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _168.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.FungibleTokenPacketData;
                    fromJSON(object: any): _168.FungibleTokenPacketData;
                    toJSON(message: _168.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_168.FungibleTokenPacketData>): _168.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _302.MsgClientImpl;
                QueryClientImpl: typeof _294.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _171.QueryChannelRequest): Promise<_171.QueryChannelResponse>;
                    channels(request?: _171.QueryChannelsRequest): Promise<_171.QueryChannelsResponse>;
                    connectionChannels(request: _171.QueryConnectionChannelsRequest): Promise<_171.QueryConnectionChannelsResponse>;
                    channelClientState(request: _171.QueryChannelClientStateRequest): Promise<_171.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _171.QueryChannelConsensusStateRequest): Promise<_171.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _171.QueryPacketCommitmentRequest): Promise<_171.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _171.QueryPacketCommitmentsRequest): Promise<_171.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _171.QueryPacketReceiptRequest): Promise<_171.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _171.QueryPacketAcknowledgementRequest): Promise<_171.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _171.QueryPacketAcknowledgementsRequest): Promise<_171.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _171.QueryUnreceivedPacketsRequest): Promise<_171.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _171.QueryUnreceivedAcksRequest): Promise<_171.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _171.QueryNextSequenceReceiveRequest): Promise<_171.QueryNextSequenceReceiveResponse>;
                    nextSequenceSend(request: _171.QueryNextSequenceSendRequest): Promise<_171.QueryNextSequenceSendResponse>;
                    upgradeError(request: _171.QueryUpgradeErrorRequest): Promise<_171.QueryUpgradeErrorResponse>;
                    upgrade(request: _171.QueryUpgradeRequest): Promise<_171.QueryUpgradeResponse>;
                    channelParams(request?: _171.QueryChannelParamsRequest): Promise<_171.QueryChannelParamsResponse>;
                };
                Upgrade: {
                    encode(message: _173.Upgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Upgrade;
                    fromJSON(object: any): _173.Upgrade;
                    toJSON(message: _173.Upgrade): unknown;
                    fromPartial(object: Partial<_173.Upgrade>): _173.Upgrade;
                };
                UpgradeFields: {
                    encode(message: _173.UpgradeFields, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.UpgradeFields;
                    fromJSON(object: any): _173.UpgradeFields;
                    toJSON(message: _173.UpgradeFields): unknown;
                    fromPartial(object: Partial<_173.UpgradeFields>): _173.UpgradeFields;
                };
                ErrorReceipt: {
                    encode(message: _173.ErrorReceipt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ErrorReceipt;
                    fromJSON(object: any): _173.ErrorReceipt;
                    toJSON(message: _173.ErrorReceipt): unknown;
                    fromPartial(object: Partial<_173.ErrorReceipt>): _173.ErrorReceipt;
                };
                responseResultTypeFromJSON(object: any): _172.ResponseResultType;
                responseResultTypeToJSON(object: _172.ResponseResultType): string;
                ResponseResultType: typeof _172.ResponseResultType;
                ResponseResultTypeSDKType: typeof _172.ResponseResultType;
                MsgChannelOpenInit: {
                    encode(message: _172.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelOpenInit;
                    fromJSON(object: any): _172.MsgChannelOpenInit;
                    toJSON(message: _172.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_172.MsgChannelOpenInit>): _172.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _172.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelOpenInitResponse;
                    fromJSON(object: any): _172.MsgChannelOpenInitResponse;
                    toJSON(message: _172.MsgChannelOpenInitResponse): unknown;
                    fromPartial(object: Partial<_172.MsgChannelOpenInitResponse>): _172.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _172.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelOpenTry;
                    fromJSON(object: any): _172.MsgChannelOpenTry;
                    toJSON(message: _172.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_172.MsgChannelOpenTry>): _172.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(message: _172.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelOpenTryResponse;
                    fromJSON(object: any): _172.MsgChannelOpenTryResponse;
                    toJSON(message: _172.MsgChannelOpenTryResponse): unknown;
                    fromPartial(object: Partial<_172.MsgChannelOpenTryResponse>): _172.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _172.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelOpenAck;
                    fromJSON(object: any): _172.MsgChannelOpenAck;
                    toJSON(message: _172.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_172.MsgChannelOpenAck>): _172.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _172.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _172.MsgChannelOpenAckResponse;
                    toJSON(_: _172.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_172.MsgChannelOpenAckResponse>): _172.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _172.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelOpenConfirm;
                    fromJSON(object: any): _172.MsgChannelOpenConfirm;
                    toJSON(message: _172.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_172.MsgChannelOpenConfirm>): _172.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _172.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _172.MsgChannelOpenConfirmResponse;
                    toJSON(_: _172.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_172.MsgChannelOpenConfirmResponse>): _172.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _172.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelCloseInit;
                    fromJSON(object: any): _172.MsgChannelCloseInit;
                    toJSON(message: _172.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_172.MsgChannelCloseInit>): _172.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _172.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _172.MsgChannelCloseInitResponse;
                    toJSON(_: _172.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_172.MsgChannelCloseInitResponse>): _172.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _172.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelCloseConfirm;
                    fromJSON(object: any): _172.MsgChannelCloseConfirm;
                    toJSON(message: _172.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_172.MsgChannelCloseConfirm>): _172.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _172.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _172.MsgChannelCloseConfirmResponse;
                    toJSON(_: _172.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_172.MsgChannelCloseConfirmResponse>): _172.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _172.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgRecvPacket;
                    fromJSON(object: any): _172.MsgRecvPacket;
                    toJSON(message: _172.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_172.MsgRecvPacket>): _172.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(message: _172.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgRecvPacketResponse;
                    fromJSON(object: any): _172.MsgRecvPacketResponse;
                    toJSON(message: _172.MsgRecvPacketResponse): unknown;
                    fromPartial(object: Partial<_172.MsgRecvPacketResponse>): _172.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _172.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgTimeout;
                    fromJSON(object: any): _172.MsgTimeout;
                    toJSON(message: _172.MsgTimeout): unknown;
                    fromPartial(object: Partial<_172.MsgTimeout>): _172.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(message: _172.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgTimeoutResponse;
                    fromJSON(object: any): _172.MsgTimeoutResponse;
                    toJSON(message: _172.MsgTimeoutResponse): unknown;
                    fromPartial(object: Partial<_172.MsgTimeoutResponse>): _172.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _172.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgTimeoutOnClose;
                    fromJSON(object: any): _172.MsgTimeoutOnClose;
                    toJSON(message: _172.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_172.MsgTimeoutOnClose>): _172.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(message: _172.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgTimeoutOnCloseResponse;
                    fromJSON(object: any): _172.MsgTimeoutOnCloseResponse;
                    toJSON(message: _172.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(object: Partial<_172.MsgTimeoutOnCloseResponse>): _172.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _172.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgAcknowledgement;
                    fromJSON(object: any): _172.MsgAcknowledgement;
                    toJSON(message: _172.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_172.MsgAcknowledgement>): _172.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(message: _172.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgAcknowledgementResponse;
                    fromJSON(object: any): _172.MsgAcknowledgementResponse;
                    toJSON(message: _172.MsgAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_172.MsgAcknowledgementResponse>): _172.MsgAcknowledgementResponse;
                };
                MsgChannelUpgradeInit: {
                    encode(message: _172.MsgChannelUpgradeInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelUpgradeInit;
                    fromJSON(object: any): _172.MsgChannelUpgradeInit;
                    toJSON(message: _172.MsgChannelUpgradeInit): unknown;
                    fromPartial(object: Partial<_172.MsgChannelUpgradeInit>): _172.MsgChannelUpgradeInit;
                };
                MsgChannelUpgradeInitResponse: {
                    encode(message: _172.MsgChannelUpgradeInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelUpgradeInitResponse;
                    fromJSON(object: any): _172.MsgChannelUpgradeInitResponse;
                    toJSON(message: _172.MsgChannelUpgradeInitResponse): unknown;
                    fromPartial(object: Partial<_172.MsgChannelUpgradeInitResponse>): _172.MsgChannelUpgradeInitResponse;
                };
                MsgChannelUpgradeTry: {
                    encode(message: _172.MsgChannelUpgradeTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelUpgradeTry;
                    fromJSON(object: any): _172.MsgChannelUpgradeTry;
                    toJSON(message: _172.MsgChannelUpgradeTry): unknown;
                    fromPartial(object: Partial<_172.MsgChannelUpgradeTry>): _172.MsgChannelUpgradeTry;
                };
                MsgChannelUpgradeTryResponse: {
                    encode(message: _172.MsgChannelUpgradeTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelUpgradeTryResponse;
                    fromJSON(object: any): _172.MsgChannelUpgradeTryResponse;
                    toJSON(message: _172.MsgChannelUpgradeTryResponse): unknown;
                    fromPartial(object: Partial<_172.MsgChannelUpgradeTryResponse>): _172.MsgChannelUpgradeTryResponse;
                };
                MsgChannelUpgradeAck: {
                    encode(message: _172.MsgChannelUpgradeAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelUpgradeAck;
                    fromJSON(object: any): _172.MsgChannelUpgradeAck;
                    toJSON(message: _172.MsgChannelUpgradeAck): unknown;
                    fromPartial(object: Partial<_172.MsgChannelUpgradeAck>): _172.MsgChannelUpgradeAck;
                };
                MsgChannelUpgradeAckResponse: {
                    encode(message: _172.MsgChannelUpgradeAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelUpgradeAckResponse;
                    fromJSON(object: any): _172.MsgChannelUpgradeAckResponse;
                    toJSON(message: _172.MsgChannelUpgradeAckResponse): unknown;
                    fromPartial(object: Partial<_172.MsgChannelUpgradeAckResponse>): _172.MsgChannelUpgradeAckResponse;
                };
                MsgChannelUpgradeConfirm: {
                    encode(message: _172.MsgChannelUpgradeConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelUpgradeConfirm;
                    fromJSON(object: any): _172.MsgChannelUpgradeConfirm;
                    toJSON(message: _172.MsgChannelUpgradeConfirm): unknown;
                    fromPartial(object: Partial<_172.MsgChannelUpgradeConfirm>): _172.MsgChannelUpgradeConfirm;
                };
                MsgChannelUpgradeConfirmResponse: {
                    encode(message: _172.MsgChannelUpgradeConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelUpgradeConfirmResponse;
                    fromJSON(object: any): _172.MsgChannelUpgradeConfirmResponse;
                    toJSON(message: _172.MsgChannelUpgradeConfirmResponse): unknown;
                    fromPartial(object: Partial<_172.MsgChannelUpgradeConfirmResponse>): _172.MsgChannelUpgradeConfirmResponse;
                };
                MsgChannelUpgradeOpen: {
                    encode(message: _172.MsgChannelUpgradeOpen, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelUpgradeOpen;
                    fromJSON(object: any): _172.MsgChannelUpgradeOpen;
                    toJSON(message: _172.MsgChannelUpgradeOpen): unknown;
                    fromPartial(object: Partial<_172.MsgChannelUpgradeOpen>): _172.MsgChannelUpgradeOpen;
                };
                MsgChannelUpgradeOpenResponse: {
                    encode(_: _172.MsgChannelUpgradeOpenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelUpgradeOpenResponse;
                    fromJSON(_: any): _172.MsgChannelUpgradeOpenResponse;
                    toJSON(_: _172.MsgChannelUpgradeOpenResponse): unknown;
                    fromPartial(_: Partial<_172.MsgChannelUpgradeOpenResponse>): _172.MsgChannelUpgradeOpenResponse;
                };
                MsgChannelUpgradeTimeout: {
                    encode(message: _172.MsgChannelUpgradeTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelUpgradeTimeout;
                    fromJSON(object: any): _172.MsgChannelUpgradeTimeout;
                    toJSON(message: _172.MsgChannelUpgradeTimeout): unknown;
                    fromPartial(object: Partial<_172.MsgChannelUpgradeTimeout>): _172.MsgChannelUpgradeTimeout;
                };
                MsgChannelUpgradeTimeoutResponse: {
                    encode(_: _172.MsgChannelUpgradeTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelUpgradeTimeoutResponse;
                    fromJSON(_: any): _172.MsgChannelUpgradeTimeoutResponse;
                    toJSON(_: _172.MsgChannelUpgradeTimeoutResponse): unknown;
                    fromPartial(_: Partial<_172.MsgChannelUpgradeTimeoutResponse>): _172.MsgChannelUpgradeTimeoutResponse;
                };
                MsgChannelUpgradeCancel: {
                    encode(message: _172.MsgChannelUpgradeCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelUpgradeCancel;
                    fromJSON(object: any): _172.MsgChannelUpgradeCancel;
                    toJSON(message: _172.MsgChannelUpgradeCancel): unknown;
                    fromPartial(object: Partial<_172.MsgChannelUpgradeCancel>): _172.MsgChannelUpgradeCancel;
                };
                MsgChannelUpgradeCancelResponse: {
                    encode(_: _172.MsgChannelUpgradeCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgChannelUpgradeCancelResponse;
                    fromJSON(_: any): _172.MsgChannelUpgradeCancelResponse;
                    toJSON(_: _172.MsgChannelUpgradeCancelResponse): unknown;
                    fromPartial(_: Partial<_172.MsgChannelUpgradeCancelResponse>): _172.MsgChannelUpgradeCancelResponse;
                };
                MsgUpdateParams: {
                    encode(message: _172.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgUpdateParams;
                    fromJSON(object: any): _172.MsgUpdateParams;
                    toJSON(message: _172.MsgUpdateParams): unknown;
                    fromPartial(object: Partial<_172.MsgUpdateParams>): _172.MsgUpdateParams;
                };
                MsgUpdateParamsResponse: {
                    encode(_: _172.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgUpdateParamsResponse;
                    fromJSON(_: any): _172.MsgUpdateParamsResponse;
                    toJSON(_: _172.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: Partial<_172.MsgUpdateParamsResponse>): _172.MsgUpdateParamsResponse;
                };
                MsgPruneAcknowledgements: {
                    encode(message: _172.MsgPruneAcknowledgements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgPruneAcknowledgements;
                    fromJSON(object: any): _172.MsgPruneAcknowledgements;
                    toJSON(message: _172.MsgPruneAcknowledgements): unknown;
                    fromPartial(object: Partial<_172.MsgPruneAcknowledgements>): _172.MsgPruneAcknowledgements;
                };
                MsgPruneAcknowledgementsResponse: {
                    encode(message: _172.MsgPruneAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgPruneAcknowledgementsResponse;
                    fromJSON(object: any): _172.MsgPruneAcknowledgementsResponse;
                    toJSON(message: _172.MsgPruneAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_172.MsgPruneAcknowledgementsResponse>): _172.MsgPruneAcknowledgementsResponse;
                };
                QueryChannelRequest: {
                    encode(message: _171.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryChannelRequest;
                    fromJSON(object: any): _171.QueryChannelRequest;
                    toJSON(message: _171.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_171.QueryChannelRequest>): _171.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _171.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryChannelResponse;
                    fromJSON(object: any): _171.QueryChannelResponse;
                    toJSON(message: _171.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_171.QueryChannelResponse>): _171.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _171.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryChannelsRequest;
                    fromJSON(object: any): _171.QueryChannelsRequest;
                    toJSON(message: _171.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_171.QueryChannelsRequest>): _171.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _171.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryChannelsResponse;
                    fromJSON(object: any): _171.QueryChannelsResponse;
                    toJSON(message: _171.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_171.QueryChannelsResponse>): _171.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _171.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _171.QueryConnectionChannelsRequest;
                    toJSON(message: _171.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_171.QueryConnectionChannelsRequest>): _171.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _171.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _171.QueryConnectionChannelsResponse;
                    toJSON(message: _171.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_171.QueryConnectionChannelsResponse>): _171.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _171.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryChannelClientStateRequest;
                    fromJSON(object: any): _171.QueryChannelClientStateRequest;
                    toJSON(message: _171.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_171.QueryChannelClientStateRequest>): _171.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _171.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryChannelClientStateResponse;
                    fromJSON(object: any): _171.QueryChannelClientStateResponse;
                    toJSON(message: _171.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_171.QueryChannelClientStateResponse>): _171.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _171.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _171.QueryChannelConsensusStateRequest;
                    toJSON(message: _171.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_171.QueryChannelConsensusStateRequest>): _171.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _171.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _171.QueryChannelConsensusStateResponse;
                    toJSON(message: _171.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_171.QueryChannelConsensusStateResponse>): _171.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _171.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _171.QueryPacketCommitmentRequest;
                    toJSON(message: _171.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_171.QueryPacketCommitmentRequest>): _171.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _171.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _171.QueryPacketCommitmentResponse;
                    toJSON(message: _171.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_171.QueryPacketCommitmentResponse>): _171.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _171.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _171.QueryPacketCommitmentsRequest;
                    toJSON(message: _171.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_171.QueryPacketCommitmentsRequest>): _171.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _171.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _171.QueryPacketCommitmentsResponse;
                    toJSON(message: _171.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_171.QueryPacketCommitmentsResponse>): _171.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _171.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryPacketReceiptRequest;
                    fromJSON(object: any): _171.QueryPacketReceiptRequest;
                    toJSON(message: _171.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_171.QueryPacketReceiptRequest>): _171.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _171.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryPacketReceiptResponse;
                    fromJSON(object: any): _171.QueryPacketReceiptResponse;
                    toJSON(message: _171.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_171.QueryPacketReceiptResponse>): _171.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _171.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _171.QueryPacketAcknowledgementRequest;
                    toJSON(message: _171.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_171.QueryPacketAcknowledgementRequest>): _171.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _171.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _171.QueryPacketAcknowledgementResponse;
                    toJSON(message: _171.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_171.QueryPacketAcknowledgementResponse>): _171.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _171.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _171.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _171.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_171.QueryPacketAcknowledgementsRequest>): _171.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _171.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _171.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _171.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_171.QueryPacketAcknowledgementsResponse>): _171.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _171.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _171.QueryUnreceivedPacketsRequest;
                    toJSON(message: _171.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_171.QueryUnreceivedPacketsRequest>): _171.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _171.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _171.QueryUnreceivedPacketsResponse;
                    toJSON(message: _171.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_171.QueryUnreceivedPacketsResponse>): _171.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _171.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _171.QueryUnreceivedAcksRequest;
                    toJSON(message: _171.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_171.QueryUnreceivedAcksRequest>): _171.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _171.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _171.QueryUnreceivedAcksResponse;
                    toJSON(message: _171.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_171.QueryUnreceivedAcksResponse>): _171.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _171.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _171.QueryNextSequenceReceiveRequest;
                    toJSON(message: _171.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_171.QueryNextSequenceReceiveRequest>): _171.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _171.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _171.QueryNextSequenceReceiveResponse;
                    toJSON(message: _171.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_171.QueryNextSequenceReceiveResponse>): _171.QueryNextSequenceReceiveResponse;
                };
                QueryNextSequenceSendRequest: {
                    encode(message: _171.QueryNextSequenceSendRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryNextSequenceSendRequest;
                    fromJSON(object: any): _171.QueryNextSequenceSendRequest;
                    toJSON(message: _171.QueryNextSequenceSendRequest): unknown;
                    fromPartial(object: Partial<_171.QueryNextSequenceSendRequest>): _171.QueryNextSequenceSendRequest;
                };
                QueryNextSequenceSendResponse: {
                    encode(message: _171.QueryNextSequenceSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryNextSequenceSendResponse;
                    fromJSON(object: any): _171.QueryNextSequenceSendResponse;
                    toJSON(message: _171.QueryNextSequenceSendResponse): unknown;
                    fromPartial(object: Partial<_171.QueryNextSequenceSendResponse>): _171.QueryNextSequenceSendResponse;
                };
                QueryUpgradeErrorRequest: {
                    encode(message: _171.QueryUpgradeErrorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryUpgradeErrorRequest;
                    fromJSON(object: any): _171.QueryUpgradeErrorRequest;
                    toJSON(message: _171.QueryUpgradeErrorRequest): unknown;
                    fromPartial(object: Partial<_171.QueryUpgradeErrorRequest>): _171.QueryUpgradeErrorRequest;
                };
                QueryUpgradeErrorResponse: {
                    encode(message: _171.QueryUpgradeErrorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryUpgradeErrorResponse;
                    fromJSON(object: any): _171.QueryUpgradeErrorResponse;
                    toJSON(message: _171.QueryUpgradeErrorResponse): unknown;
                    fromPartial(object: Partial<_171.QueryUpgradeErrorResponse>): _171.QueryUpgradeErrorResponse;
                };
                QueryUpgradeRequest: {
                    encode(message: _171.QueryUpgradeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryUpgradeRequest;
                    fromJSON(object: any): _171.QueryUpgradeRequest;
                    toJSON(message: _171.QueryUpgradeRequest): unknown;
                    fromPartial(object: Partial<_171.QueryUpgradeRequest>): _171.QueryUpgradeRequest;
                };
                QueryUpgradeResponse: {
                    encode(message: _171.QueryUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryUpgradeResponse;
                    fromJSON(object: any): _171.QueryUpgradeResponse;
                    toJSON(message: _171.QueryUpgradeResponse): unknown;
                    fromPartial(object: Partial<_171.QueryUpgradeResponse>): _171.QueryUpgradeResponse;
                };
                QueryChannelParamsRequest: {
                    encode(_: _171.QueryChannelParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryChannelParamsRequest;
                    fromJSON(_: any): _171.QueryChannelParamsRequest;
                    toJSON(_: _171.QueryChannelParamsRequest): unknown;
                    fromPartial(_: Partial<_171.QueryChannelParamsRequest>): _171.QueryChannelParamsRequest;
                };
                QueryChannelParamsResponse: {
                    encode(message: _171.QueryChannelParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryChannelParamsResponse;
                    fromJSON(object: any): _171.QueryChannelParamsResponse;
                    toJSON(message: _171.QueryChannelParamsResponse): unknown;
                    fromPartial(object: Partial<_171.QueryChannelParamsResponse>): _171.QueryChannelParamsResponse;
                };
                GenesisState: {
                    encode(message: _170.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.GenesisState;
                    fromJSON(object: any): _170.GenesisState;
                    toJSON(message: _170.GenesisState): unknown;
                    fromPartial(object: Partial<_170.GenesisState>): _170.GenesisState;
                };
                PacketSequence: {
                    encode(message: _170.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.PacketSequence;
                    fromJSON(object: any): _170.PacketSequence;
                    toJSON(message: _170.PacketSequence): unknown;
                    fromPartial(object: Partial<_170.PacketSequence>): _170.PacketSequence;
                };
                stateFromJSON(object: any): _169.State;
                stateToJSON(object: _169.State): string;
                orderFromJSON(object: any): _169.Order;
                orderToJSON(object: _169.Order): string;
                State: typeof _169.State;
                StateSDKType: typeof _169.State;
                Order: typeof _169.Order;
                OrderSDKType: typeof _169.Order;
                Channel: {
                    encode(message: _169.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Channel;
                    fromJSON(object: any): _169.Channel;
                    toJSON(message: _169.Channel): unknown;
                    fromPartial(object: Partial<_169.Channel>): _169.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _169.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.IdentifiedChannel;
                    fromJSON(object: any): _169.IdentifiedChannel;
                    toJSON(message: _169.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_169.IdentifiedChannel>): _169.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _169.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Counterparty;
                    fromJSON(object: any): _169.Counterparty;
                    toJSON(message: _169.Counterparty): unknown;
                    fromPartial(object: Partial<_169.Counterparty>): _169.Counterparty;
                };
                Packet: {
                    encode(message: _169.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Packet;
                    fromJSON(object: any): _169.Packet;
                    toJSON(message: _169.Packet): unknown;
                    fromPartial(object: Partial<_169.Packet>): _169.Packet;
                };
                PacketState: {
                    encode(message: _169.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.PacketState;
                    fromJSON(object: any): _169.PacketState;
                    toJSON(message: _169.PacketState): unknown;
                    fromPartial(object: Partial<_169.PacketState>): _169.PacketState;
                };
                PacketId: {
                    encode(message: _169.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.PacketId;
                    fromJSON(object: any): _169.PacketId;
                    toJSON(message: _169.PacketId): unknown;
                    fromPartial(object: Partial<_169.PacketId>): _169.PacketId;
                };
                Acknowledgement: {
                    encode(message: _169.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Acknowledgement;
                    fromJSON(object: any): _169.Acknowledgement;
                    toJSON(message: _169.Acknowledgement): unknown;
                    fromPartial(object: Partial<_169.Acknowledgement>): _169.Acknowledgement;
                };
                Timeout: {
                    encode(message: _169.Timeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Timeout;
                    fromJSON(object: any): _169.Timeout;
                    toJSON(message: _169.Timeout): unknown;
                    fromPartial(object: Partial<_169.Timeout>): _169.Timeout;
                };
                Params: {
                    encode(message: _169.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Params;
                    fromJSON(object: any): _169.Params;
                    toJSON(message: _169.Params): unknown;
                    fromPartial(object: Partial<_169.Params>): _169.Params;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _303.MsgClientImpl;
                QueryClientImpl: typeof _295.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _176.QueryClientStateRequest): Promise<_176.QueryClientStateResponse>;
                    clientStates(request?: _176.QueryClientStatesRequest): Promise<_176.QueryClientStatesResponse>;
                    consensusState(request: _176.QueryConsensusStateRequest): Promise<_176.QueryConsensusStateResponse>;
                    consensusStates(request: _176.QueryConsensusStatesRequest): Promise<_176.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _176.QueryConsensusStateHeightsRequest): Promise<_176.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _176.QueryClientStatusRequest): Promise<_176.QueryClientStatusResponse>;
                    clientParams(request?: _176.QueryClientParamsRequest): Promise<_176.QueryClientParamsResponse>;
                    upgradedClientState(request?: _176.QueryUpgradedClientStateRequest): Promise<_176.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _176.QueryUpgradedConsensusStateRequest): Promise<_176.QueryUpgradedConsensusStateResponse>;
                    verifyMembership(request: _176.QueryVerifyMembershipRequest): Promise<_176.QueryVerifyMembershipResponse>;
                };
                MsgCreateClient: {
                    encode(message: _177.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgCreateClient;
                    fromJSON(object: any): _177.MsgCreateClient;
                    toJSON(message: _177.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_177.MsgCreateClient>): _177.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _177.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgCreateClientResponse;
                    fromJSON(_: any): _177.MsgCreateClientResponse;
                    toJSON(_: _177.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_177.MsgCreateClientResponse>): _177.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _177.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgUpdateClient;
                    fromJSON(object: any): _177.MsgUpdateClient;
                    toJSON(message: _177.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_177.MsgUpdateClient>): _177.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _177.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgUpdateClientResponse;
                    fromJSON(_: any): _177.MsgUpdateClientResponse;
                    toJSON(_: _177.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_177.MsgUpdateClientResponse>): _177.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _177.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgUpgradeClient;
                    fromJSON(object: any): _177.MsgUpgradeClient;
                    toJSON(message: _177.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_177.MsgUpgradeClient>): _177.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _177.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgUpgradeClientResponse;
                    fromJSON(_: any): _177.MsgUpgradeClientResponse;
                    toJSON(_: _177.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_177.MsgUpgradeClientResponse>): _177.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _177.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _177.MsgSubmitMisbehaviour;
                    toJSON(message: _177.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_177.MsgSubmitMisbehaviour>): _177.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _177.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _177.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _177.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_177.MsgSubmitMisbehaviourResponse>): _177.MsgSubmitMisbehaviourResponse;
                };
                MsgRecoverClient: {
                    encode(message: _177.MsgRecoverClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgRecoverClient;
                    fromJSON(object: any): _177.MsgRecoverClient;
                    toJSON(message: _177.MsgRecoverClient): unknown;
                    fromPartial(object: Partial<_177.MsgRecoverClient>): _177.MsgRecoverClient;
                };
                MsgRecoverClientResponse: {
                    encode(_: _177.MsgRecoverClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgRecoverClientResponse;
                    fromJSON(_: any): _177.MsgRecoverClientResponse;
                    toJSON(_: _177.MsgRecoverClientResponse): unknown;
                    fromPartial(_: Partial<_177.MsgRecoverClientResponse>): _177.MsgRecoverClientResponse;
                };
                MsgIBCSoftwareUpgrade: {
                    encode(message: _177.MsgIBCSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgIBCSoftwareUpgrade;
                    fromJSON(object: any): _177.MsgIBCSoftwareUpgrade;
                    toJSON(message: _177.MsgIBCSoftwareUpgrade): unknown;
                    fromPartial(object: Partial<_177.MsgIBCSoftwareUpgrade>): _177.MsgIBCSoftwareUpgrade;
                };
                MsgIBCSoftwareUpgradeResponse: {
                    encode(_: _177.MsgIBCSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgIBCSoftwareUpgradeResponse;
                    fromJSON(_: any): _177.MsgIBCSoftwareUpgradeResponse;
                    toJSON(_: _177.MsgIBCSoftwareUpgradeResponse): unknown;
                    fromPartial(_: Partial<_177.MsgIBCSoftwareUpgradeResponse>): _177.MsgIBCSoftwareUpgradeResponse;
                };
                MsgUpdateParams: {
                    encode(message: _177.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgUpdateParams;
                    fromJSON(object: any): _177.MsgUpdateParams;
                    toJSON(message: _177.MsgUpdateParams): unknown;
                    fromPartial(object: Partial<_177.MsgUpdateParams>): _177.MsgUpdateParams;
                };
                MsgUpdateParamsResponse: {
                    encode(_: _177.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgUpdateParamsResponse;
                    fromJSON(_: any): _177.MsgUpdateParamsResponse;
                    toJSON(_: _177.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: Partial<_177.MsgUpdateParamsResponse>): _177.MsgUpdateParamsResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _176.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientStateRequest;
                    fromJSON(object: any): _176.QueryClientStateRequest;
                    toJSON(message: _176.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_176.QueryClientStateRequest>): _176.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _176.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientStateResponse;
                    fromJSON(object: any): _176.QueryClientStateResponse;
                    toJSON(message: _176.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_176.QueryClientStateResponse>): _176.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _176.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientStatesRequest;
                    fromJSON(object: any): _176.QueryClientStatesRequest;
                    toJSON(message: _176.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_176.QueryClientStatesRequest>): _176.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _176.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientStatesResponse;
                    fromJSON(object: any): _176.QueryClientStatesResponse;
                    toJSON(message: _176.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_176.QueryClientStatesResponse>): _176.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _176.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryConsensusStateRequest;
                    fromJSON(object: any): _176.QueryConsensusStateRequest;
                    toJSON(message: _176.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_176.QueryConsensusStateRequest>): _176.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _176.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryConsensusStateResponse;
                    fromJSON(object: any): _176.QueryConsensusStateResponse;
                    toJSON(message: _176.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_176.QueryConsensusStateResponse>): _176.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _176.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryConsensusStatesRequest;
                    fromJSON(object: any): _176.QueryConsensusStatesRequest;
                    toJSON(message: _176.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_176.QueryConsensusStatesRequest>): _176.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _176.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryConsensusStatesResponse;
                    fromJSON(object: any): _176.QueryConsensusStatesResponse;
                    toJSON(message: _176.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_176.QueryConsensusStatesResponse>): _176.QueryConsensusStatesResponse;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _176.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryConsensusStateHeightsRequest;
                    fromJSON(object: any): _176.QueryConsensusStateHeightsRequest;
                    toJSON(message: _176.QueryConsensusStateHeightsRequest): unknown;
                    fromPartial(object: Partial<_176.QueryConsensusStateHeightsRequest>): _176.QueryConsensusStateHeightsRequest;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _176.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryConsensusStateHeightsResponse;
                    fromJSON(object: any): _176.QueryConsensusStateHeightsResponse;
                    toJSON(message: _176.QueryConsensusStateHeightsResponse): unknown;
                    fromPartial(object: Partial<_176.QueryConsensusStateHeightsResponse>): _176.QueryConsensusStateHeightsResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _176.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientStatusRequest;
                    fromJSON(object: any): _176.QueryClientStatusRequest;
                    toJSON(message: _176.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_176.QueryClientStatusRequest>): _176.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _176.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientStatusResponse;
                    fromJSON(object: any): _176.QueryClientStatusResponse;
                    toJSON(message: _176.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_176.QueryClientStatusResponse>): _176.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _176.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientParamsRequest;
                    fromJSON(_: any): _176.QueryClientParamsRequest;
                    toJSON(_: _176.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_176.QueryClientParamsRequest>): _176.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _176.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientParamsResponse;
                    fromJSON(object: any): _176.QueryClientParamsResponse;
                    toJSON(message: _176.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_176.QueryClientParamsResponse>): _176.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _176.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _176.QueryUpgradedClientStateRequest;
                    toJSON(_: _176.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_176.QueryUpgradedClientStateRequest>): _176.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _176.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _176.QueryUpgradedClientStateResponse;
                    toJSON(message: _176.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_176.QueryUpgradedClientStateResponse>): _176.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _176.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _176.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _176.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_176.QueryUpgradedConsensusStateRequest>): _176.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _176.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _176.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _176.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_176.QueryUpgradedConsensusStateResponse>): _176.QueryUpgradedConsensusStateResponse;
                };
                QueryVerifyMembershipRequest: {
                    encode(message: _176.QueryVerifyMembershipRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryVerifyMembershipRequest;
                    fromJSON(object: any): _176.QueryVerifyMembershipRequest;
                    toJSON(message: _176.QueryVerifyMembershipRequest): unknown;
                    fromPartial(object: Partial<_176.QueryVerifyMembershipRequest>): _176.QueryVerifyMembershipRequest;
                };
                QueryVerifyMembershipResponse: {
                    encode(message: _176.QueryVerifyMembershipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryVerifyMembershipResponse;
                    fromJSON(object: any): _176.QueryVerifyMembershipResponse;
                    toJSON(message: _176.QueryVerifyMembershipResponse): unknown;
                    fromPartial(object: Partial<_176.QueryVerifyMembershipResponse>): _176.QueryVerifyMembershipResponse;
                };
                GenesisState: {
                    encode(message: _175.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.GenesisState;
                    fromJSON(object: any): _175.GenesisState;
                    toJSON(message: _175.GenesisState): unknown;
                    fromPartial(object: Partial<_175.GenesisState>): _175.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _175.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.GenesisMetadata;
                    fromJSON(object: any): _175.GenesisMetadata;
                    toJSON(message: _175.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_175.GenesisMetadata>): _175.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _175.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _175.IdentifiedGenesisMetadata;
                    toJSON(message: _175.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_175.IdentifiedGenesisMetadata>): _175.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _174.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.IdentifiedClientState;
                    fromJSON(object: any): _174.IdentifiedClientState;
                    toJSON(message: _174.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_174.IdentifiedClientState>): _174.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _174.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ConsensusStateWithHeight;
                    fromJSON(object: any): _174.ConsensusStateWithHeight;
                    toJSON(message: _174.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_174.ConsensusStateWithHeight>): _174.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _174.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ClientConsensusStates;
                    fromJSON(object: any): _174.ClientConsensusStates;
                    toJSON(message: _174.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_174.ClientConsensusStates>): _174.ClientConsensusStates;
                };
                Height: {
                    encode(message: _174.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Height;
                    fromJSON(object: any): _174.Height;
                    toJSON(message: _174.Height): unknown;
                    fromPartial(object: Partial<_174.Height>): _174.Height;
                };
                Params: {
                    encode(message: _174.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Params;
                    fromJSON(object: any): _174.Params;
                    toJSON(message: _174.Params): unknown;
                    fromPartial(object: Partial<_174.Params>): _174.Params;
                };
                ClientUpdateProposal: {
                    encode(message: _174.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ClientUpdateProposal;
                    fromJSON(object: any): _174.ClientUpdateProposal;
                    toJSON(message: _174.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_174.ClientUpdateProposal>): _174.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _174.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.UpgradeProposal;
                    fromJSON(object: any): _174.UpgradeProposal;
                    toJSON(message: _174.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_174.UpgradeProposal>): _174.UpgradeProposal;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _178.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MerkleRoot;
                    fromJSON(object: any): _178.MerkleRoot;
                    toJSON(message: _178.MerkleRoot): unknown;
                    fromPartial(object: Partial<_178.MerkleRoot>): _178.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _178.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MerklePrefix;
                    fromJSON(object: any): _178.MerklePrefix;
                    toJSON(message: _178.MerklePrefix): unknown;
                    fromPartial(object: Partial<_178.MerklePrefix>): _178.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _178.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MerklePath;
                    fromJSON(object: any): _178.MerklePath;
                    toJSON(message: _178.MerklePath): unknown;
                    fromPartial(object: Partial<_178.MerklePath>): _178.MerklePath;
                };
                MerkleProof: {
                    encode(message: _178.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MerkleProof;
                    fromJSON(object: any): _178.MerkleProof;
                    toJSON(message: _178.MerkleProof): unknown;
                    fromPartial(object: Partial<_178.MerkleProof>): _178.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _304.MsgClientImpl;
                QueryClientImpl: typeof _296.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _181.QueryConnectionRequest): Promise<_181.QueryConnectionResponse>;
                    connections(request?: _181.QueryConnectionsRequest): Promise<_181.QueryConnectionsResponse>;
                    clientConnections(request: _181.QueryClientConnectionsRequest): Promise<_181.QueryClientConnectionsResponse>;
                    connectionClientState(request: _181.QueryConnectionClientStateRequest): Promise<_181.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _181.QueryConnectionConsensusStateRequest): Promise<_181.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _181.QueryConnectionParamsRequest): Promise<_181.QueryConnectionParamsResponse>;
                };
                MsgConnectionOpenInit: {
                    encode(message: _182.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenInit;
                    fromJSON(object: any): _182.MsgConnectionOpenInit;
                    toJSON(message: _182.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_182.MsgConnectionOpenInit>): _182.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _182.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _182.MsgConnectionOpenInitResponse;
                    toJSON(_: _182.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_182.MsgConnectionOpenInitResponse>): _182.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _182.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenTry;
                    fromJSON(object: any): _182.MsgConnectionOpenTry;
                    toJSON(message: _182.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_182.MsgConnectionOpenTry>): _182.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _182.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _182.MsgConnectionOpenTryResponse;
                    toJSON(_: _182.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_182.MsgConnectionOpenTryResponse>): _182.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _182.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenAck;
                    fromJSON(object: any): _182.MsgConnectionOpenAck;
                    toJSON(message: _182.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_182.MsgConnectionOpenAck>): _182.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _182.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _182.MsgConnectionOpenAckResponse;
                    toJSON(_: _182.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_182.MsgConnectionOpenAckResponse>): _182.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _182.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _182.MsgConnectionOpenConfirm;
                    toJSON(message: _182.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_182.MsgConnectionOpenConfirm>): _182.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _182.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _182.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _182.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_182.MsgConnectionOpenConfirmResponse>): _182.MsgConnectionOpenConfirmResponse;
                };
                MsgUpdateParams: {
                    encode(message: _182.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgUpdateParams;
                    fromJSON(object: any): _182.MsgUpdateParams;
                    toJSON(message: _182.MsgUpdateParams): unknown;
                    fromPartial(object: Partial<_182.MsgUpdateParams>): _182.MsgUpdateParams;
                };
                MsgUpdateParamsResponse: {
                    encode(_: _182.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgUpdateParamsResponse;
                    fromJSON(_: any): _182.MsgUpdateParamsResponse;
                    toJSON(_: _182.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: Partial<_182.MsgUpdateParamsResponse>): _182.MsgUpdateParamsResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _181.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionRequest;
                    fromJSON(object: any): _181.QueryConnectionRequest;
                    toJSON(message: _181.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionRequest>): _181.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _181.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionResponse;
                    fromJSON(object: any): _181.QueryConnectionResponse;
                    toJSON(message: _181.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionResponse>): _181.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _181.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionsRequest;
                    fromJSON(object: any): _181.QueryConnectionsRequest;
                    toJSON(message: _181.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionsRequest>): _181.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _181.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionsResponse;
                    fromJSON(object: any): _181.QueryConnectionsResponse;
                    toJSON(message: _181.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionsResponse>): _181.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _181.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryClientConnectionsRequest;
                    fromJSON(object: any): _181.QueryClientConnectionsRequest;
                    toJSON(message: _181.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_181.QueryClientConnectionsRequest>): _181.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _181.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryClientConnectionsResponse;
                    fromJSON(object: any): _181.QueryClientConnectionsResponse;
                    toJSON(message: _181.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_181.QueryClientConnectionsResponse>): _181.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _181.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _181.QueryConnectionClientStateRequest;
                    toJSON(message: _181.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionClientStateRequest>): _181.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _181.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _181.QueryConnectionClientStateResponse;
                    toJSON(message: _181.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionClientStateResponse>): _181.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _181.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _181.QueryConnectionConsensusStateRequest;
                    toJSON(message: _181.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionConsensusStateRequest>): _181.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _181.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _181.QueryConnectionConsensusStateResponse;
                    toJSON(message: _181.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionConsensusStateResponse>): _181.QueryConnectionConsensusStateResponse;
                };
                QueryConnectionParamsRequest: {
                    encode(_: _181.QueryConnectionParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionParamsRequest;
                    fromJSON(_: any): _181.QueryConnectionParamsRequest;
                    toJSON(_: _181.QueryConnectionParamsRequest): unknown;
                    fromPartial(_: Partial<_181.QueryConnectionParamsRequest>): _181.QueryConnectionParamsRequest;
                };
                QueryConnectionParamsResponse: {
                    encode(message: _181.QueryConnectionParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionParamsResponse;
                    fromJSON(object: any): _181.QueryConnectionParamsResponse;
                    toJSON(message: _181.QueryConnectionParamsResponse): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionParamsResponse>): _181.QueryConnectionParamsResponse;
                };
                GenesisState: {
                    encode(message: _180.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GenesisState;
                    fromJSON(object: any): _180.GenesisState;
                    toJSON(message: _180.GenesisState): unknown;
                    fromPartial(object: Partial<_180.GenesisState>): _180.GenesisState;
                };
                stateFromJSON(object: any): _179.State;
                stateToJSON(object: _179.State): string;
                State: typeof _179.State;
                StateSDKType: typeof _179.State;
                ConnectionEnd: {
                    encode(message: _179.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ConnectionEnd;
                    fromJSON(object: any): _179.ConnectionEnd;
                    toJSON(message: _179.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_179.ConnectionEnd>): _179.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _179.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.IdentifiedConnection;
                    fromJSON(object: any): _179.IdentifiedConnection;
                    toJSON(message: _179.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_179.IdentifiedConnection>): _179.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _179.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Counterparty;
                    fromJSON(object: any): _179.Counterparty;
                    toJSON(message: _179.Counterparty): unknown;
                    fromPartial(object: Partial<_179.Counterparty>): _179.Counterparty;
                };
                ClientPaths: {
                    encode(message: _179.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ClientPaths;
                    fromJSON(object: any): _179.ClientPaths;
                    toJSON(message: _179.ClientPaths): unknown;
                    fromPartial(object: Partial<_179.ClientPaths>): _179.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _179.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ConnectionPaths;
                    fromJSON(object: any): _179.ConnectionPaths;
                    toJSON(message: _179.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_179.ConnectionPaths>): _179.ConnectionPaths;
                };
                Version: {
                    encode(message: _179.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Version;
                    fromJSON(object: any): _179.Version;
                    toJSON(message: _179.Version): unknown;
                    fromPartial(object: Partial<_179.Version>): _179.Version;
                };
                Params: {
                    encode(message: _179.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Params;
                    fromJSON(object: any): _179.Params;
                    toJSON(message: _179.Params): unknown;
                    fromPartial(object: Partial<_179.Params>): _179.Params;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _183.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.GenesisState;
                    fromJSON(object: any): _183.GenesisState;
                    toJSON(message: _183.GenesisState): unknown;
                    fromPartial(object: Partial<_183.GenesisState>): _183.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                ClientState: {
                    encode(message: _184.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.ClientState;
                    fromJSON(object: any): _184.ClientState;
                    toJSON(message: _184.ClientState): unknown;
                    fromPartial(object: Partial<_184.ClientState>): _184.ClientState;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _185.DataType;
                dataTypeToJSON(object: _185.DataType): string;
                DataType: typeof _185.DataType;
                DataTypeSDKType: typeof _185.DataType;
                ClientState: {
                    encode(message: _185.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ClientState;
                    fromJSON(object: any): _185.ClientState;
                    toJSON(message: _185.ClientState): unknown;
                    fromPartial(object: Partial<_185.ClientState>): _185.ClientState;
                };
                ConsensusState: {
                    encode(message: _185.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ConsensusState;
                    fromJSON(object: any): _185.ConsensusState;
                    toJSON(message: _185.ConsensusState): unknown;
                    fromPartial(object: Partial<_185.ConsensusState>): _185.ConsensusState;
                };
                Header: {
                    encode(message: _185.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Header;
                    fromJSON(object: any): _185.Header;
                    toJSON(message: _185.Header): unknown;
                    fromPartial(object: Partial<_185.Header>): _185.Header;
                };
                Misbehaviour: {
                    encode(message: _185.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Misbehaviour;
                    fromJSON(object: any): _185.Misbehaviour;
                    toJSON(message: _185.Misbehaviour): unknown;
                    fromPartial(object: Partial<_185.Misbehaviour>): _185.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _185.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.SignatureAndData;
                    fromJSON(object: any): _185.SignatureAndData;
                    toJSON(message: _185.SignatureAndData): unknown;
                    fromPartial(object: Partial<_185.SignatureAndData>): _185.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _185.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.TimestampedSignatureData;
                    fromJSON(object: any): _185.TimestampedSignatureData;
                    toJSON(message: _185.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_185.TimestampedSignatureData>): _185.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _185.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.SignBytes;
                    fromJSON(object: any): _185.SignBytes;
                    toJSON(message: _185.SignBytes): unknown;
                    fromPartial(object: Partial<_185.SignBytes>): _185.SignBytes;
                };
                HeaderData: {
                    encode(message: _185.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.HeaderData;
                    fromJSON(object: any): _185.HeaderData;
                    toJSON(message: _185.HeaderData): unknown;
                    fromPartial(object: Partial<_185.HeaderData>): _185.HeaderData;
                };
                ClientStateData: {
                    encode(message: _185.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ClientStateData;
                    fromJSON(object: any): _185.ClientStateData;
                    toJSON(message: _185.ClientStateData): unknown;
                    fromPartial(object: Partial<_185.ClientStateData>): _185.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _185.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ConsensusStateData;
                    fromJSON(object: any): _185.ConsensusStateData;
                    toJSON(message: _185.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_185.ConsensusStateData>): _185.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _185.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ConnectionStateData;
                    fromJSON(object: any): _185.ConnectionStateData;
                    toJSON(message: _185.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_185.ConnectionStateData>): _185.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _185.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ChannelStateData;
                    fromJSON(object: any): _185.ChannelStateData;
                    toJSON(message: _185.ChannelStateData): unknown;
                    fromPartial(object: Partial<_185.ChannelStateData>): _185.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _185.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.PacketCommitmentData;
                    fromJSON(object: any): _185.PacketCommitmentData;
                    toJSON(message: _185.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_185.PacketCommitmentData>): _185.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _185.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.PacketAcknowledgementData;
                    fromJSON(object: any): _185.PacketAcknowledgementData;
                    toJSON(message: _185.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_185.PacketAcknowledgementData>): _185.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _185.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.PacketReceiptAbsenceData;
                    fromJSON(object: any): _185.PacketReceiptAbsenceData;
                    toJSON(message: _185.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_185.PacketReceiptAbsenceData>): _185.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _185.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.NextSequenceRecvData;
                    fromJSON(object: any): _185.NextSequenceRecvData;
                    toJSON(message: _185.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_185.NextSequenceRecvData>): _185.NextSequenceRecvData;
                };
            };
            const v3: {
                ClientState: {
                    encode(message: _186.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.ClientState;
                    fromJSON(object: any): _186.ClientState;
                    toJSON(message: _186.ClientState): unknown;
                    fromPartial(object: Partial<_186.ClientState>): _186.ClientState;
                };
                ConsensusState: {
                    encode(message: _186.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.ConsensusState;
                    fromJSON(object: any): _186.ConsensusState;
                    toJSON(message: _186.ConsensusState): unknown;
                    fromPartial(object: Partial<_186.ConsensusState>): _186.ConsensusState;
                };
                Header: {
                    encode(message: _186.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.Header;
                    fromJSON(object: any): _186.Header;
                    toJSON(message: _186.Header): unknown;
                    fromPartial(object: Partial<_186.Header>): _186.Header;
                };
                Misbehaviour: {
                    encode(message: _186.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.Misbehaviour;
                    fromJSON(object: any): _186.Misbehaviour;
                    toJSON(message: _186.Misbehaviour): unknown;
                    fromPartial(object: Partial<_186.Misbehaviour>): _186.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _186.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.SignatureAndData;
                    fromJSON(object: any): _186.SignatureAndData;
                    toJSON(message: _186.SignatureAndData): unknown;
                    fromPartial(object: Partial<_186.SignatureAndData>): _186.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _186.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.TimestampedSignatureData;
                    fromJSON(object: any): _186.TimestampedSignatureData;
                    toJSON(message: _186.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_186.TimestampedSignatureData>): _186.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _186.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.SignBytes;
                    fromJSON(object: any): _186.SignBytes;
                    toJSON(message: _186.SignBytes): unknown;
                    fromPartial(object: Partial<_186.SignBytes>): _186.SignBytes;
                };
                HeaderData: {
                    encode(message: _186.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.HeaderData;
                    fromJSON(object: any): _186.HeaderData;
                    toJSON(message: _186.HeaderData): unknown;
                    fromPartial(object: Partial<_186.HeaderData>): _186.HeaderData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _187.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ClientState;
                    fromJSON(object: any): _187.ClientState;
                    toJSON(message: _187.ClientState): unknown;
                    fromPartial(object: Partial<_187.ClientState>): _187.ClientState;
                };
                ConsensusState: {
                    encode(message: _187.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ConsensusState;
                    fromJSON(object: any): _187.ConsensusState;
                    toJSON(message: _187.ConsensusState): unknown;
                    fromPartial(object: Partial<_187.ConsensusState>): _187.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _187.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Misbehaviour;
                    fromJSON(object: any): _187.Misbehaviour;
                    toJSON(message: _187.Misbehaviour): unknown;
                    fromPartial(object: Partial<_187.Misbehaviour>): _187.Misbehaviour;
                };
                Header: {
                    encode(message: _187.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Header;
                    fromJSON(object: any): _187.Header;
                    toJSON(message: _187.Header): unknown;
                    fromPartial(object: Partial<_187.Header>): _187.Header;
                };
                Fraction: {
                    encode(message: _187.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Fraction;
                    fromJSON(object: any): _187.Fraction;
                    toJSON(message: _187.Fraction): unknown;
                    fromPartial(object: Partial<_187.Fraction>): _187.Fraction;
                };
            };
        }
        namespace wasm {
            const v1: {
                MsgClientImpl: typeof _305.MsgClientImpl;
                QueryClientImpl: typeof _297.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    checksums(request?: _189.QueryChecksumsRequest): Promise<_189.QueryChecksumsResponse>;
                    code(request: _189.QueryCodeRequest): Promise<_189.QueryCodeResponse>;
                };
                ClientState: {
                    encode(message: _191.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ClientState;
                    fromJSON(object: any): _191.ClientState;
                    toJSON(message: _191.ClientState): unknown;
                    fromPartial(object: Partial<_191.ClientState>): _191.ClientState;
                };
                ConsensusState: {
                    encode(message: _191.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ConsensusState;
                    fromJSON(object: any): _191.ConsensusState;
                    toJSON(message: _191.ConsensusState): unknown;
                    fromPartial(object: Partial<_191.ConsensusState>): _191.ConsensusState;
                };
                ClientMessage: {
                    encode(message: _191.ClientMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ClientMessage;
                    fromJSON(object: any): _191.ClientMessage;
                    toJSON(message: _191.ClientMessage): unknown;
                    fromPartial(object: Partial<_191.ClientMessage>): _191.ClientMessage;
                };
                Checksums: {
                    encode(message: _191.Checksums, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Checksums;
                    fromJSON(object: any): _191.Checksums;
                    toJSON(message: _191.Checksums): unknown;
                    fromPartial(object: Partial<_191.Checksums>): _191.Checksums;
                };
                MsgStoreCode: {
                    encode(message: _190.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgStoreCode;
                    fromJSON(object: any): _190.MsgStoreCode;
                    toJSON(message: _190.MsgStoreCode): unknown;
                    fromPartial(object: Partial<_190.MsgStoreCode>): _190.MsgStoreCode;
                };
                MsgStoreCodeResponse: {
                    encode(message: _190.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgStoreCodeResponse;
                    fromJSON(object: any): _190.MsgStoreCodeResponse;
                    toJSON(message: _190.MsgStoreCodeResponse): unknown;
                    fromPartial(object: Partial<_190.MsgStoreCodeResponse>): _190.MsgStoreCodeResponse;
                };
                MsgRemoveChecksum: {
                    encode(message: _190.MsgRemoveChecksum, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgRemoveChecksum;
                    fromJSON(object: any): _190.MsgRemoveChecksum;
                    toJSON(message: _190.MsgRemoveChecksum): unknown;
                    fromPartial(object: Partial<_190.MsgRemoveChecksum>): _190.MsgRemoveChecksum;
                };
                MsgRemoveChecksumResponse: {
                    encode(_: _190.MsgRemoveChecksumResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgRemoveChecksumResponse;
                    fromJSON(_: any): _190.MsgRemoveChecksumResponse;
                    toJSON(_: _190.MsgRemoveChecksumResponse): unknown;
                    fromPartial(_: Partial<_190.MsgRemoveChecksumResponse>): _190.MsgRemoveChecksumResponse;
                };
                MsgMigrateContract: {
                    encode(message: _190.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgMigrateContract;
                    fromJSON(object: any): _190.MsgMigrateContract;
                    toJSON(message: _190.MsgMigrateContract): unknown;
                    fromPartial(object: Partial<_190.MsgMigrateContract>): _190.MsgMigrateContract;
                };
                MsgMigrateContractResponse: {
                    encode(_: _190.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgMigrateContractResponse;
                    fromJSON(_: any): _190.MsgMigrateContractResponse;
                    toJSON(_: _190.MsgMigrateContractResponse): unknown;
                    fromPartial(_: Partial<_190.MsgMigrateContractResponse>): _190.MsgMigrateContractResponse;
                };
                QueryChecksumsRequest: {
                    encode(message: _189.QueryChecksumsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryChecksumsRequest;
                    fromJSON(object: any): _189.QueryChecksumsRequest;
                    toJSON(message: _189.QueryChecksumsRequest): unknown;
                    fromPartial(object: Partial<_189.QueryChecksumsRequest>): _189.QueryChecksumsRequest;
                };
                QueryChecksumsResponse: {
                    encode(message: _189.QueryChecksumsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryChecksumsResponse;
                    fromJSON(object: any): _189.QueryChecksumsResponse;
                    toJSON(message: _189.QueryChecksumsResponse): unknown;
                    fromPartial(object: Partial<_189.QueryChecksumsResponse>): _189.QueryChecksumsResponse;
                };
                QueryCodeRequest: {
                    encode(message: _189.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryCodeRequest;
                    fromJSON(object: any): _189.QueryCodeRequest;
                    toJSON(message: _189.QueryCodeRequest): unknown;
                    fromPartial(object: Partial<_189.QueryCodeRequest>): _189.QueryCodeRequest;
                };
                QueryCodeResponse: {
                    encode(message: _189.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueryCodeResponse;
                    fromJSON(object: any): _189.QueryCodeResponse;
                    toJSON(message: _189.QueryCodeResponse): unknown;
                    fromPartial(object: Partial<_189.QueryCodeResponse>): _189.QueryCodeResponse;
                };
                GenesisState: {
                    encode(message: _188.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.GenesisState;
                    fromJSON(object: any): _188.GenesisState;
                    toJSON(message: _188.GenesisState): unknown;
                    fromPartial(object: Partial<_188.GenesisState>): _188.GenesisState;
                };
                Contract: {
                    encode(message: _188.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Contract;
                    fromJSON(object: any): _188.Contract;
                    toJSON(message: _188.Contract): unknown;
                    fromPartial(object: Partial<_188.Contract>): _188.Contract;
                };
            };
        }
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
            ibc: {
                applications: {
                    fee: {
                        v1: _298.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _299.MsgClientImpl;
                        };
                        host: {
                            v1: _300.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _301.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _302.MsgClientImpl;
                    };
                    client: {
                        v1: _303.MsgClientImpl;
                    };
                    connection: {
                        v1: _304.MsgClientImpl;
                    };
                };
                lightclients: {
                    wasm: {
                        v1: _305.MsgClientImpl;
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
            ibc: {
                applications: {
                    fee: {
                        v1: {
                            incentivizedPackets(request: _151.QueryIncentivizedPacketsRequest): Promise<_151.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _151.QueryIncentivizedPacketRequest): Promise<_151.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _151.QueryIncentivizedPacketsForChannelRequest): Promise<_151.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _151.QueryTotalRecvFeesRequest): Promise<_151.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _151.QueryTotalAckFeesRequest): Promise<_151.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _151.QueryTotalTimeoutFeesRequest): Promise<_151.QueryTotalTimeoutFeesResponse>;
                            payee(request: _151.QueryPayeeRequest): Promise<_151.QueryPayeeResponse>;
                            counterpartyPayee(request: _151.QueryCounterpartyPayeeRequest): Promise<_151.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _151.QueryFeeEnabledChannelsRequest): Promise<_151.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _151.QueryFeeEnabledChannelRequest): Promise<_151.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _154.QueryInterchainAccountRequest): Promise<_154.QueryInterchainAccountResponse>;
                                params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTraces(request?: _165.QueryDenomTracesRequest): Promise<_165.QueryDenomTracesResponse>;
                            denomTrace(request: _165.QueryDenomTraceRequest): Promise<_165.QueryDenomTraceResponse>;
                            params(request?: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                            denomHash(request: _165.QueryDenomHashRequest): Promise<_165.QueryDenomHashResponse>;
                            escrowAddress(request: _165.QueryEscrowAddressRequest): Promise<_165.QueryEscrowAddressResponse>;
                            totalEscrowForDenom(request: _165.QueryTotalEscrowForDenomRequest): Promise<_165.QueryTotalEscrowForDenomResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _171.QueryChannelRequest): Promise<_171.QueryChannelResponse>;
                            channels(request?: _171.QueryChannelsRequest): Promise<_171.QueryChannelsResponse>;
                            connectionChannels(request: _171.QueryConnectionChannelsRequest): Promise<_171.QueryConnectionChannelsResponse>;
                            channelClientState(request: _171.QueryChannelClientStateRequest): Promise<_171.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _171.QueryChannelConsensusStateRequest): Promise<_171.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _171.QueryPacketCommitmentRequest): Promise<_171.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _171.QueryPacketCommitmentsRequest): Promise<_171.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _171.QueryPacketReceiptRequest): Promise<_171.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _171.QueryPacketAcknowledgementRequest): Promise<_171.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _171.QueryPacketAcknowledgementsRequest): Promise<_171.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _171.QueryUnreceivedPacketsRequest): Promise<_171.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _171.QueryUnreceivedAcksRequest): Promise<_171.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _171.QueryNextSequenceReceiveRequest): Promise<_171.QueryNextSequenceReceiveResponse>;
                            nextSequenceSend(request: _171.QueryNextSequenceSendRequest): Promise<_171.QueryNextSequenceSendResponse>;
                            upgradeError(request: _171.QueryUpgradeErrorRequest): Promise<_171.QueryUpgradeErrorResponse>;
                            upgrade(request: _171.QueryUpgradeRequest): Promise<_171.QueryUpgradeResponse>;
                            channelParams(request?: _171.QueryChannelParamsRequest): Promise<_171.QueryChannelParamsResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _176.QueryClientStateRequest): Promise<_176.QueryClientStateResponse>;
                            clientStates(request?: _176.QueryClientStatesRequest): Promise<_176.QueryClientStatesResponse>;
                            consensusState(request: _176.QueryConsensusStateRequest): Promise<_176.QueryConsensusStateResponse>;
                            consensusStates(request: _176.QueryConsensusStatesRequest): Promise<_176.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _176.QueryConsensusStateHeightsRequest): Promise<_176.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _176.QueryClientStatusRequest): Promise<_176.QueryClientStatusResponse>;
                            clientParams(request?: _176.QueryClientParamsRequest): Promise<_176.QueryClientParamsResponse>;
                            upgradedClientState(request?: _176.QueryUpgradedClientStateRequest): Promise<_176.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _176.QueryUpgradedConsensusStateRequest): Promise<_176.QueryUpgradedConsensusStateResponse>;
                            verifyMembership(request: _176.QueryVerifyMembershipRequest): Promise<_176.QueryVerifyMembershipResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _181.QueryConnectionRequest): Promise<_181.QueryConnectionResponse>;
                            connections(request?: _181.QueryConnectionsRequest): Promise<_181.QueryConnectionsResponse>;
                            clientConnections(request: _181.QueryClientConnectionsRequest): Promise<_181.QueryClientConnectionsResponse>;
                            connectionClientState(request: _181.QueryConnectionClientStateRequest): Promise<_181.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _181.QueryConnectionConsensusStateRequest): Promise<_181.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _181.QueryConnectionParamsRequest): Promise<_181.QueryConnectionParamsResponse>;
                        };
                    };
                };
                lightclients: {
                    wasm: {
                        v1: {
                            checksums(request?: _189.QueryChecksumsRequest): Promise<_189.QueryChecksumsResponse>;
                            code(request: _189.QueryCodeRequest): Promise<_189.QueryCodeResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
