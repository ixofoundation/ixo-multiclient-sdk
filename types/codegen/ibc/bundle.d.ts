import * as _102 from "./applications/transfer/v1/genesis";
import * as _103 from "./applications/transfer/v1/query";
import * as _104 from "./applications/transfer/v1/transfer";
import * as _105 from "./applications/transfer/v1/tx";
import * as _106 from "./applications/transfer/v2/packet";
import * as _107 from "./core/channel/v1/channel";
import * as _108 from "./core/channel/v1/genesis";
import * as _109 from "./core/channel/v1/query";
import * as _110 from "./core/channel/v1/tx";
import * as _111 from "./core/client/v1/client";
import * as _112 from "./core/client/v1/genesis";
import * as _113 from "./core/client/v1/query";
import * as _114 from "./core/client/v1/tx";
import * as _115 from "./core/commitment/v1/commitment";
import * as _116 from "./core/connection/v1/connection";
import * as _117 from "./core/connection/v1/genesis";
import * as _118 from "./core/connection/v1/query";
import * as _119 from "./core/connection/v1/tx";
import * as _120 from "./core/port/v1/query";
import * as _121 from "./core/types/v1/genesis";
import * as _122 from "./lightclients/localhost/v1/localhost";
import * as _123 from "./lightclients/solomachine/v1/solomachine";
import * as _124 from "./lightclients/solomachine/v2/solomachine";
import * as _125 from "./lightclients/tendermint/v1/tendermint";
import * as _199 from "./applications/transfer/v1/query.rpc.Query";
import * as _200 from "./core/channel/v1/query.rpc.Query";
import * as _201 from "./core/client/v1/query.rpc.Query";
import * as _202 from "./core/connection/v1/query.rpc.Query";
import * as _203 from "./core/port/v1/query.rpc.Query";
import * as _204 from "./applications/transfer/v1/tx.rpc.msg";
import * as _205 from "./core/channel/v1/tx.rpc.msg";
import * as _206 from "./core/client/v1/tx.rpc.msg";
import * as _207 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _204.MsgClientImpl;
                QueryClientImpl: typeof _199.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _103.QueryDenomTraceRequest): Promise<_103.QueryDenomTraceResponse>;
                    denomTraces(request?: _103.QueryDenomTracesRequest): Promise<_103.QueryDenomTracesResponse>;
                    params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                };
                MsgTransfer: {
                    encode(message: _105.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgTransfer;
                    fromJSON(object: any): _105.MsgTransfer;
                    toJSON(message: _105.MsgTransfer): unknown;
                    fromPartial(object: Partial<_105.MsgTransfer>): _105.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _105.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgTransferResponse;
                    fromJSON(_: any): _105.MsgTransferResponse;
                    toJSON(_: _105.MsgTransferResponse): unknown;
                    fromPartial(_: Partial<_105.MsgTransferResponse>): _105.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _104.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DenomTrace;
                    fromJSON(object: any): _104.DenomTrace;
                    toJSON(message: _104.DenomTrace): unknown;
                    fromPartial(object: Partial<_104.DenomTrace>): _104.DenomTrace;
                };
                Params: {
                    encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Params;
                    fromJSON(object: any): _104.Params;
                    toJSON(message: _104.Params): unknown;
                    fromPartial(object: Partial<_104.Params>): _104.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _103.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTraceRequest;
                    fromJSON(object: any): _103.QueryDenomTraceRequest;
                    toJSON(message: _103.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_103.QueryDenomTraceRequest>): _103.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _103.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTraceResponse;
                    fromJSON(object: any): _103.QueryDenomTraceResponse;
                    toJSON(message: _103.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_103.QueryDenomTraceResponse>): _103.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _103.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTracesRequest;
                    fromJSON(object: any): _103.QueryDenomTracesRequest;
                    toJSON(message: _103.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_103.QueryDenomTracesRequest>): _103.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _103.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTracesResponse;
                    fromJSON(object: any): _103.QueryDenomTracesResponse;
                    toJSON(message: _103.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_103.QueryDenomTracesResponse>): _103.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _103.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsRequest;
                    fromJSON(_: any): _103.QueryParamsRequest;
                    toJSON(_: _103.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_103.QueryParamsRequest>): _103.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _103.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsResponse;
                    fromJSON(object: any): _103.QueryParamsResponse;
                    toJSON(message: _103.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_103.QueryParamsResponse>): _103.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GenesisState;
                    fromJSON(object: any): _102.GenesisState;
                    toJSON(message: _102.GenesisState): unknown;
                    fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _106.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.FungibleTokenPacketData;
                    fromJSON(object: any): _106.FungibleTokenPacketData;
                    toJSON(message: _106.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_106.FungibleTokenPacketData>): _106.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _205.MsgClientImpl;
                QueryClientImpl: typeof _200.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _109.QueryChannelRequest): Promise<_109.QueryChannelResponse>;
                    channels(request?: _109.QueryChannelsRequest): Promise<_109.QueryChannelsResponse>;
                    connectionChannels(request: _109.QueryConnectionChannelsRequest): Promise<_109.QueryConnectionChannelsResponse>;
                    channelClientState(request: _109.QueryChannelClientStateRequest): Promise<_109.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _109.QueryChannelConsensusStateRequest): Promise<_109.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _109.QueryPacketCommitmentRequest): Promise<_109.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _109.QueryPacketCommitmentsRequest): Promise<_109.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _109.QueryPacketReceiptRequest): Promise<_109.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _109.QueryPacketAcknowledgementRequest): Promise<_109.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _109.QueryPacketAcknowledgementsRequest): Promise<_109.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _109.QueryUnreceivedPacketsRequest): Promise<_109.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _109.QueryUnreceivedAcksRequest): Promise<_109.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _109.QueryNextSequenceReceiveRequest): Promise<_109.QueryNextSequenceReceiveResponse>;
                };
                MsgChannelOpenInit: {
                    encode(message: _110.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenInit;
                    fromJSON(object: any): _110.MsgChannelOpenInit;
                    toJSON(message: _110.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_110.MsgChannelOpenInit>): _110.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _110.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _110.MsgChannelOpenInitResponse;
                    toJSON(_: _110.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: Partial<_110.MsgChannelOpenInitResponse>): _110.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _110.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenTry;
                    fromJSON(object: any): _110.MsgChannelOpenTry;
                    toJSON(message: _110.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_110.MsgChannelOpenTry>): _110.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _110.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _110.MsgChannelOpenTryResponse;
                    toJSON(_: _110.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: Partial<_110.MsgChannelOpenTryResponse>): _110.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _110.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenAck;
                    fromJSON(object: any): _110.MsgChannelOpenAck;
                    toJSON(message: _110.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_110.MsgChannelOpenAck>): _110.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _110.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _110.MsgChannelOpenAckResponse;
                    toJSON(_: _110.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_110.MsgChannelOpenAckResponse>): _110.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _110.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenConfirm;
                    fromJSON(object: any): _110.MsgChannelOpenConfirm;
                    toJSON(message: _110.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_110.MsgChannelOpenConfirm>): _110.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _110.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _110.MsgChannelOpenConfirmResponse;
                    toJSON(_: _110.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_110.MsgChannelOpenConfirmResponse>): _110.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _110.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseInit;
                    fromJSON(object: any): _110.MsgChannelCloseInit;
                    toJSON(message: _110.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_110.MsgChannelCloseInit>): _110.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _110.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _110.MsgChannelCloseInitResponse;
                    toJSON(_: _110.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_110.MsgChannelCloseInitResponse>): _110.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _110.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseConfirm;
                    fromJSON(object: any): _110.MsgChannelCloseConfirm;
                    toJSON(message: _110.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_110.MsgChannelCloseConfirm>): _110.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _110.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _110.MsgChannelCloseConfirmResponse;
                    toJSON(_: _110.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_110.MsgChannelCloseConfirmResponse>): _110.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _110.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgRecvPacket;
                    fromJSON(object: any): _110.MsgRecvPacket;
                    toJSON(message: _110.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_110.MsgRecvPacket>): _110.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _110.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgRecvPacketResponse;
                    fromJSON(_: any): _110.MsgRecvPacketResponse;
                    toJSON(_: _110.MsgRecvPacketResponse): unknown;
                    fromPartial(_: Partial<_110.MsgRecvPacketResponse>): _110.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _110.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeout;
                    fromJSON(object: any): _110.MsgTimeout;
                    toJSON(message: _110.MsgTimeout): unknown;
                    fromPartial(object: Partial<_110.MsgTimeout>): _110.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _110.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeoutResponse;
                    fromJSON(_: any): _110.MsgTimeoutResponse;
                    toJSON(_: _110.MsgTimeoutResponse): unknown;
                    fromPartial(_: Partial<_110.MsgTimeoutResponse>): _110.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _110.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeoutOnClose;
                    fromJSON(object: any): _110.MsgTimeoutOnClose;
                    toJSON(message: _110.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_110.MsgTimeoutOnClose>): _110.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _110.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _110.MsgTimeoutOnCloseResponse;
                    toJSON(_: _110.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: Partial<_110.MsgTimeoutOnCloseResponse>): _110.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _110.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgAcknowledgement;
                    fromJSON(object: any): _110.MsgAcknowledgement;
                    toJSON(message: _110.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_110.MsgAcknowledgement>): _110.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _110.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgAcknowledgementResponse;
                    fromJSON(_: any): _110.MsgAcknowledgementResponse;
                    toJSON(_: _110.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: Partial<_110.MsgAcknowledgementResponse>): _110.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _109.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelRequest;
                    fromJSON(object: any): _109.QueryChannelRequest;
                    toJSON(message: _109.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_109.QueryChannelRequest>): _109.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _109.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelResponse;
                    fromJSON(object: any): _109.QueryChannelResponse;
                    toJSON(message: _109.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_109.QueryChannelResponse>): _109.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _109.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelsRequest;
                    fromJSON(object: any): _109.QueryChannelsRequest;
                    toJSON(message: _109.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_109.QueryChannelsRequest>): _109.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _109.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelsResponse;
                    fromJSON(object: any): _109.QueryChannelsResponse;
                    toJSON(message: _109.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_109.QueryChannelsResponse>): _109.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _109.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _109.QueryConnectionChannelsRequest;
                    toJSON(message: _109.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_109.QueryConnectionChannelsRequest>): _109.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _109.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _109.QueryConnectionChannelsResponse;
                    toJSON(message: _109.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_109.QueryConnectionChannelsResponse>): _109.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _109.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelClientStateRequest;
                    fromJSON(object: any): _109.QueryChannelClientStateRequest;
                    toJSON(message: _109.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_109.QueryChannelClientStateRequest>): _109.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _109.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelClientStateResponse;
                    fromJSON(object: any): _109.QueryChannelClientStateResponse;
                    toJSON(message: _109.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_109.QueryChannelClientStateResponse>): _109.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _109.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _109.QueryChannelConsensusStateRequest;
                    toJSON(message: _109.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_109.QueryChannelConsensusStateRequest>): _109.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _109.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _109.QueryChannelConsensusStateResponse;
                    toJSON(message: _109.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_109.QueryChannelConsensusStateResponse>): _109.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _109.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _109.QueryPacketCommitmentRequest;
                    toJSON(message: _109.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_109.QueryPacketCommitmentRequest>): _109.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _109.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _109.QueryPacketCommitmentResponse;
                    toJSON(message: _109.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_109.QueryPacketCommitmentResponse>): _109.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _109.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _109.QueryPacketCommitmentsRequest;
                    toJSON(message: _109.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_109.QueryPacketCommitmentsRequest>): _109.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _109.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _109.QueryPacketCommitmentsResponse;
                    toJSON(message: _109.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_109.QueryPacketCommitmentsResponse>): _109.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _109.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketReceiptRequest;
                    fromJSON(object: any): _109.QueryPacketReceiptRequest;
                    toJSON(message: _109.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_109.QueryPacketReceiptRequest>): _109.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _109.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketReceiptResponse;
                    fromJSON(object: any): _109.QueryPacketReceiptResponse;
                    toJSON(message: _109.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_109.QueryPacketReceiptResponse>): _109.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _109.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementRequest;
                    toJSON(message: _109.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_109.QueryPacketAcknowledgementRequest>): _109.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _109.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementResponse;
                    toJSON(message: _109.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_109.QueryPacketAcknowledgementResponse>): _109.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _109.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _109.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_109.QueryPacketAcknowledgementsRequest>): _109.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _109.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _109.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_109.QueryPacketAcknowledgementsResponse>): _109.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _109.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _109.QueryUnreceivedPacketsRequest;
                    toJSON(message: _109.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_109.QueryUnreceivedPacketsRequest>): _109.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _109.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _109.QueryUnreceivedPacketsResponse;
                    toJSON(message: _109.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_109.QueryUnreceivedPacketsResponse>): _109.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _109.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _109.QueryUnreceivedAcksRequest;
                    toJSON(message: _109.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_109.QueryUnreceivedAcksRequest>): _109.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _109.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _109.QueryUnreceivedAcksResponse;
                    toJSON(message: _109.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_109.QueryUnreceivedAcksResponse>): _109.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _109.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _109.QueryNextSequenceReceiveRequest;
                    toJSON(message: _109.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_109.QueryNextSequenceReceiveRequest>): _109.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _109.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _109.QueryNextSequenceReceiveResponse;
                    toJSON(message: _109.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_109.QueryNextSequenceReceiveResponse>): _109.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GenesisState;
                    fromJSON(object: any): _108.GenesisState;
                    toJSON(message: _108.GenesisState): unknown;
                    fromPartial(object: Partial<_108.GenesisState>): _108.GenesisState;
                };
                PacketSequence: {
                    encode(message: _108.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.PacketSequence;
                    fromJSON(object: any): _108.PacketSequence;
                    toJSON(message: _108.PacketSequence): unknown;
                    fromPartial(object: Partial<_108.PacketSequence>): _108.PacketSequence;
                };
                stateFromJSON(object: any): _107.State;
                stateToJSON(object: _107.State): string;
                orderFromJSON(object: any): _107.Order;
                orderToJSON(object: _107.Order): string;
                State: typeof _107.State;
                StateSDKType: typeof _107.StateSDKType;
                Order: typeof _107.Order;
                OrderSDKType: typeof _107.OrderSDKType;
                Channel: {
                    encode(message: _107.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Channel;
                    fromJSON(object: any): _107.Channel;
                    toJSON(message: _107.Channel): unknown;
                    fromPartial(object: Partial<_107.Channel>): _107.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _107.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.IdentifiedChannel;
                    fromJSON(object: any): _107.IdentifiedChannel;
                    toJSON(message: _107.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_107.IdentifiedChannel>): _107.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _107.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Counterparty;
                    fromJSON(object: any): _107.Counterparty;
                    toJSON(message: _107.Counterparty): unknown;
                    fromPartial(object: Partial<_107.Counterparty>): _107.Counterparty;
                };
                Packet: {
                    encode(message: _107.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Packet;
                    fromJSON(object: any): _107.Packet;
                    toJSON(message: _107.Packet): unknown;
                    fromPartial(object: Partial<_107.Packet>): _107.Packet;
                };
                PacketState: {
                    encode(message: _107.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PacketState;
                    fromJSON(object: any): _107.PacketState;
                    toJSON(message: _107.PacketState): unknown;
                    fromPartial(object: Partial<_107.PacketState>): _107.PacketState;
                };
                Acknowledgement: {
                    encode(message: _107.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Acknowledgement;
                    fromJSON(object: any): _107.Acknowledgement;
                    toJSON(message: _107.Acknowledgement): unknown;
                    fromPartial(object: Partial<_107.Acknowledgement>): _107.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _206.MsgClientImpl;
                QueryClientImpl: typeof _201.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _113.QueryClientStateRequest): Promise<_113.QueryClientStateResponse>;
                    clientStates(request?: _113.QueryClientStatesRequest): Promise<_113.QueryClientStatesResponse>;
                    consensusState(request: _113.QueryConsensusStateRequest): Promise<_113.QueryConsensusStateResponse>;
                    consensusStates(request: _113.QueryConsensusStatesRequest): Promise<_113.QueryConsensusStatesResponse>;
                    clientStatus(request: _113.QueryClientStatusRequest): Promise<_113.QueryClientStatusResponse>;
                    clientParams(request?: _113.QueryClientParamsRequest): Promise<_113.QueryClientParamsResponse>;
                    upgradedClientState(request?: _113.QueryUpgradedClientStateRequest): Promise<_113.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _113.QueryUpgradedConsensusStateRequest): Promise<_113.QueryUpgradedConsensusStateResponse>;
                };
                MsgCreateClient: {
                    encode(message: _114.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateClient;
                    fromJSON(object: any): _114.MsgCreateClient;
                    toJSON(message: _114.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_114.MsgCreateClient>): _114.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _114.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateClientResponse;
                    fromJSON(_: any): _114.MsgCreateClientResponse;
                    toJSON(_: _114.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_114.MsgCreateClientResponse>): _114.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _114.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateClient;
                    fromJSON(object: any): _114.MsgUpdateClient;
                    toJSON(message: _114.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_114.MsgUpdateClient>): _114.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _114.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateClientResponse;
                    fromJSON(_: any): _114.MsgUpdateClientResponse;
                    toJSON(_: _114.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_114.MsgUpdateClientResponse>): _114.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _114.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpgradeClient;
                    fromJSON(object: any): _114.MsgUpgradeClient;
                    toJSON(message: _114.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_114.MsgUpgradeClient>): _114.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _114.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpgradeClientResponse;
                    fromJSON(_: any): _114.MsgUpgradeClientResponse;
                    toJSON(_: _114.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_114.MsgUpgradeClientResponse>): _114.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _114.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _114.MsgSubmitMisbehaviour;
                    toJSON(message: _114.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_114.MsgSubmitMisbehaviour>): _114.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _114.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _114.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _114.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_114.MsgSubmitMisbehaviourResponse>): _114.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _113.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStateRequest;
                    fromJSON(object: any): _113.QueryClientStateRequest;
                    toJSON(message: _113.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_113.QueryClientStateRequest>): _113.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _113.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStateResponse;
                    fromJSON(object: any): _113.QueryClientStateResponse;
                    toJSON(message: _113.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_113.QueryClientStateResponse>): _113.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _113.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatesRequest;
                    fromJSON(object: any): _113.QueryClientStatesRequest;
                    toJSON(message: _113.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_113.QueryClientStatesRequest>): _113.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _113.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatesResponse;
                    fromJSON(object: any): _113.QueryClientStatesResponse;
                    toJSON(message: _113.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_113.QueryClientStatesResponse>): _113.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _113.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStateRequest;
                    fromJSON(object: any): _113.QueryConsensusStateRequest;
                    toJSON(message: _113.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_113.QueryConsensusStateRequest>): _113.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _113.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStateResponse;
                    fromJSON(object: any): _113.QueryConsensusStateResponse;
                    toJSON(message: _113.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_113.QueryConsensusStateResponse>): _113.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _113.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStatesRequest;
                    fromJSON(object: any): _113.QueryConsensusStatesRequest;
                    toJSON(message: _113.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_113.QueryConsensusStatesRequest>): _113.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _113.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStatesResponse;
                    fromJSON(object: any): _113.QueryConsensusStatesResponse;
                    toJSON(message: _113.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_113.QueryConsensusStatesResponse>): _113.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _113.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatusRequest;
                    fromJSON(object: any): _113.QueryClientStatusRequest;
                    toJSON(message: _113.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_113.QueryClientStatusRequest>): _113.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _113.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatusResponse;
                    fromJSON(object: any): _113.QueryClientStatusResponse;
                    toJSON(message: _113.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_113.QueryClientStatusResponse>): _113.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _113.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientParamsRequest;
                    fromJSON(_: any): _113.QueryClientParamsRequest;
                    toJSON(_: _113.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_113.QueryClientParamsRequest>): _113.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _113.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientParamsResponse;
                    fromJSON(object: any): _113.QueryClientParamsResponse;
                    toJSON(message: _113.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_113.QueryClientParamsResponse>): _113.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _113.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _113.QueryUpgradedClientStateRequest;
                    toJSON(_: _113.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_113.QueryUpgradedClientStateRequest>): _113.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _113.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _113.QueryUpgradedClientStateResponse;
                    toJSON(message: _113.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_113.QueryUpgradedClientStateResponse>): _113.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _113.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _113.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _113.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_113.QueryUpgradedConsensusStateRequest>): _113.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _113.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _113.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _113.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_113.QueryUpgradedConsensusStateResponse>): _113.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _112.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisState;
                    fromJSON(object: any): _112.GenesisState;
                    toJSON(message: _112.GenesisState): unknown;
                    fromPartial(object: Partial<_112.GenesisState>): _112.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _112.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisMetadata;
                    fromJSON(object: any): _112.GenesisMetadata;
                    toJSON(message: _112.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_112.GenesisMetadata>): _112.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _112.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _112.IdentifiedGenesisMetadata;
                    toJSON(message: _112.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_112.IdentifiedGenesisMetadata>): _112.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _111.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.IdentifiedClientState;
                    fromJSON(object: any): _111.IdentifiedClientState;
                    toJSON(message: _111.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_111.IdentifiedClientState>): _111.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _111.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ConsensusStateWithHeight;
                    fromJSON(object: any): _111.ConsensusStateWithHeight;
                    toJSON(message: _111.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_111.ConsensusStateWithHeight>): _111.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _111.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ClientConsensusStates;
                    fromJSON(object: any): _111.ClientConsensusStates;
                    toJSON(message: _111.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_111.ClientConsensusStates>): _111.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _111.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ClientUpdateProposal;
                    fromJSON(object: any): _111.ClientUpdateProposal;
                    toJSON(message: _111.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_111.ClientUpdateProposal>): _111.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _111.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.UpgradeProposal;
                    fromJSON(object: any): _111.UpgradeProposal;
                    toJSON(message: _111.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_111.UpgradeProposal>): _111.UpgradeProposal;
                };
                Height: {
                    encode(message: _111.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Height;
                    fromJSON(object: any): _111.Height;
                    toJSON(message: _111.Height): unknown;
                    fromPartial(object: Partial<_111.Height>): _111.Height;
                };
                Params: {
                    encode(message: _111.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Params;
                    fromJSON(object: any): _111.Params;
                    toJSON(message: _111.Params): unknown;
                    fromPartial(object: Partial<_111.Params>): _111.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _115.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerkleRoot;
                    fromJSON(object: any): _115.MerkleRoot;
                    toJSON(message: _115.MerkleRoot): unknown;
                    fromPartial(object: Partial<_115.MerkleRoot>): _115.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _115.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerklePrefix;
                    fromJSON(object: any): _115.MerklePrefix;
                    toJSON(message: _115.MerklePrefix): unknown;
                    fromPartial(object: Partial<_115.MerklePrefix>): _115.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _115.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerklePath;
                    fromJSON(object: any): _115.MerklePath;
                    toJSON(message: _115.MerklePath): unknown;
                    fromPartial(object: Partial<_115.MerklePath>): _115.MerklePath;
                };
                MerkleProof: {
                    encode(message: _115.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerkleProof;
                    fromJSON(object: any): _115.MerkleProof;
                    toJSON(message: _115.MerkleProof): unknown;
                    fromPartial(object: Partial<_115.MerkleProof>): _115.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _207.MsgClientImpl;
                QueryClientImpl: typeof _202.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _118.QueryConnectionRequest): Promise<_118.QueryConnectionResponse>;
                    connections(request?: _118.QueryConnectionsRequest): Promise<_118.QueryConnectionsResponse>;
                    clientConnections(request: _118.QueryClientConnectionsRequest): Promise<_118.QueryClientConnectionsResponse>;
                    connectionClientState(request: _118.QueryConnectionClientStateRequest): Promise<_118.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _118.QueryConnectionConsensusStateRequest): Promise<_118.QueryConnectionConsensusStateResponse>;
                };
                MsgConnectionOpenInit: {
                    encode(message: _119.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenInit;
                    fromJSON(object: any): _119.MsgConnectionOpenInit;
                    toJSON(message: _119.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_119.MsgConnectionOpenInit>): _119.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _119.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenInitResponse;
                    toJSON(_: _119.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_119.MsgConnectionOpenInitResponse>): _119.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _119.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenTry;
                    fromJSON(object: any): _119.MsgConnectionOpenTry;
                    toJSON(message: _119.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_119.MsgConnectionOpenTry>): _119.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _119.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenTryResponse;
                    toJSON(_: _119.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_119.MsgConnectionOpenTryResponse>): _119.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _119.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenAck;
                    fromJSON(object: any): _119.MsgConnectionOpenAck;
                    toJSON(message: _119.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_119.MsgConnectionOpenAck>): _119.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _119.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenAckResponse;
                    toJSON(_: _119.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_119.MsgConnectionOpenAckResponse>): _119.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _119.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _119.MsgConnectionOpenConfirm;
                    toJSON(message: _119.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_119.MsgConnectionOpenConfirm>): _119.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _119.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _119.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_119.MsgConnectionOpenConfirmResponse>): _119.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _118.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionRequest;
                    fromJSON(object: any): _118.QueryConnectionRequest;
                    toJSON(message: _118.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_118.QueryConnectionRequest>): _118.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _118.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionResponse;
                    fromJSON(object: any): _118.QueryConnectionResponse;
                    toJSON(message: _118.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_118.QueryConnectionResponse>): _118.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _118.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionsRequest;
                    fromJSON(object: any): _118.QueryConnectionsRequest;
                    toJSON(message: _118.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_118.QueryConnectionsRequest>): _118.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _118.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionsResponse;
                    fromJSON(object: any): _118.QueryConnectionsResponse;
                    toJSON(message: _118.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_118.QueryConnectionsResponse>): _118.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _118.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryClientConnectionsRequest;
                    fromJSON(object: any): _118.QueryClientConnectionsRequest;
                    toJSON(message: _118.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_118.QueryClientConnectionsRequest>): _118.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _118.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryClientConnectionsResponse;
                    fromJSON(object: any): _118.QueryClientConnectionsResponse;
                    toJSON(message: _118.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_118.QueryClientConnectionsResponse>): _118.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _118.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _118.QueryConnectionClientStateRequest;
                    toJSON(message: _118.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_118.QueryConnectionClientStateRequest>): _118.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _118.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _118.QueryConnectionClientStateResponse;
                    toJSON(message: _118.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_118.QueryConnectionClientStateResponse>): _118.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _118.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _118.QueryConnectionConsensusStateRequest;
                    toJSON(message: _118.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_118.QueryConnectionConsensusStateRequest>): _118.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _118.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _118.QueryConnectionConsensusStateResponse;
                    toJSON(message: _118.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_118.QueryConnectionConsensusStateResponse>): _118.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisState;
                    fromJSON(object: any): _117.GenesisState;
                    toJSON(message: _117.GenesisState): unknown;
                    fromPartial(object: Partial<_117.GenesisState>): _117.GenesisState;
                };
                stateFromJSON(object: any): _116.State;
                stateToJSON(object: _116.State): string;
                State: typeof _116.State;
                StateSDKType: typeof _116.StateSDKType;
                ConnectionEnd: {
                    encode(message: _116.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ConnectionEnd;
                    fromJSON(object: any): _116.ConnectionEnd;
                    toJSON(message: _116.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_116.ConnectionEnd>): _116.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _116.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.IdentifiedConnection;
                    fromJSON(object: any): _116.IdentifiedConnection;
                    toJSON(message: _116.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_116.IdentifiedConnection>): _116.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _116.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Counterparty;
                    fromJSON(object: any): _116.Counterparty;
                    toJSON(message: _116.Counterparty): unknown;
                    fromPartial(object: Partial<_116.Counterparty>): _116.Counterparty;
                };
                ClientPaths: {
                    encode(message: _116.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ClientPaths;
                    fromJSON(object: any): _116.ClientPaths;
                    toJSON(message: _116.ClientPaths): unknown;
                    fromPartial(object: Partial<_116.ClientPaths>): _116.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _116.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ConnectionPaths;
                    fromJSON(object: any): _116.ConnectionPaths;
                    toJSON(message: _116.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_116.ConnectionPaths>): _116.ConnectionPaths;
                };
                Version: {
                    encode(message: _116.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Version;
                    fromJSON(object: any): _116.Version;
                    toJSON(message: _116.Version): unknown;
                    fromPartial(object: Partial<_116.Version>): _116.Version;
                };
                Params: {
                    encode(message: _116.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Params;
                    fromJSON(object: any): _116.Params;
                    toJSON(message: _116.Params): unknown;
                    fromPartial(object: Partial<_116.Params>): _116.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _203.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    appVersion(request: _120.QueryAppVersionRequest): Promise<_120.QueryAppVersionResponse>;
                };
                QueryAppVersionRequest: {
                    encode(message: _120.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryAppVersionRequest;
                    fromJSON(object: any): _120.QueryAppVersionRequest;
                    toJSON(message: _120.QueryAppVersionRequest): unknown;
                    fromPartial(object: Partial<_120.QueryAppVersionRequest>): _120.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _120.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryAppVersionResponse;
                    fromJSON(object: any): _120.QueryAppVersionResponse;
                    toJSON(message: _120.QueryAppVersionResponse): unknown;
                    fromPartial(object: Partial<_120.QueryAppVersionResponse>): _120.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _121.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GenesisState;
                    fromJSON(object: any): _121.GenesisState;
                    toJSON(message: _121.GenesisState): unknown;
                    fromPartial(object: Partial<_121.GenesisState>): _121.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _122.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ClientState;
                    fromJSON(object: any): _122.ClientState;
                    toJSON(message: _122.ClientState): unknown;
                    fromPartial(object: Partial<_122.ClientState>): _122.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _123.DataType;
                dataTypeToJSON(object: _123.DataType): string;
                DataType: typeof _123.DataType;
                DataTypeSDKType: typeof _123.DataTypeSDKType;
                ClientState: {
                    encode(message: _123.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ClientState;
                    fromJSON(object: any): _123.ClientState;
                    toJSON(message: _123.ClientState): unknown;
                    fromPartial(object: Partial<_123.ClientState>): _123.ClientState;
                };
                ConsensusState: {
                    encode(message: _123.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConsensusState;
                    fromJSON(object: any): _123.ConsensusState;
                    toJSON(message: _123.ConsensusState): unknown;
                    fromPartial(object: Partial<_123.ConsensusState>): _123.ConsensusState;
                };
                Header: {
                    encode(message: _123.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Header;
                    fromJSON(object: any): _123.Header;
                    toJSON(message: _123.Header): unknown;
                    fromPartial(object: Partial<_123.Header>): _123.Header;
                };
                Misbehaviour: {
                    encode(message: _123.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Misbehaviour;
                    fromJSON(object: any): _123.Misbehaviour;
                    toJSON(message: _123.Misbehaviour): unknown;
                    fromPartial(object: Partial<_123.Misbehaviour>): _123.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _123.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SignatureAndData;
                    fromJSON(object: any): _123.SignatureAndData;
                    toJSON(message: _123.SignatureAndData): unknown;
                    fromPartial(object: Partial<_123.SignatureAndData>): _123.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _123.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TimestampedSignatureData;
                    fromJSON(object: any): _123.TimestampedSignatureData;
                    toJSON(message: _123.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_123.TimestampedSignatureData>): _123.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _123.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SignBytes;
                    fromJSON(object: any): _123.SignBytes;
                    toJSON(message: _123.SignBytes): unknown;
                    fromPartial(object: Partial<_123.SignBytes>): _123.SignBytes;
                };
                HeaderData: {
                    encode(message: _123.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.HeaderData;
                    fromJSON(object: any): _123.HeaderData;
                    toJSON(message: _123.HeaderData): unknown;
                    fromPartial(object: Partial<_123.HeaderData>): _123.HeaderData;
                };
                ClientStateData: {
                    encode(message: _123.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ClientStateData;
                    fromJSON(object: any): _123.ClientStateData;
                    toJSON(message: _123.ClientStateData): unknown;
                    fromPartial(object: Partial<_123.ClientStateData>): _123.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _123.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConsensusStateData;
                    fromJSON(object: any): _123.ConsensusStateData;
                    toJSON(message: _123.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_123.ConsensusStateData>): _123.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _123.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConnectionStateData;
                    fromJSON(object: any): _123.ConnectionStateData;
                    toJSON(message: _123.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_123.ConnectionStateData>): _123.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _123.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ChannelStateData;
                    fromJSON(object: any): _123.ChannelStateData;
                    toJSON(message: _123.ChannelStateData): unknown;
                    fromPartial(object: Partial<_123.ChannelStateData>): _123.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _123.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketCommitmentData;
                    fromJSON(object: any): _123.PacketCommitmentData;
                    toJSON(message: _123.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_123.PacketCommitmentData>): _123.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _123.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketAcknowledgementData;
                    fromJSON(object: any): _123.PacketAcknowledgementData;
                    toJSON(message: _123.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_123.PacketAcknowledgementData>): _123.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _123.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketReceiptAbsenceData;
                    fromJSON(object: any): _123.PacketReceiptAbsenceData;
                    toJSON(message: _123.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_123.PacketReceiptAbsenceData>): _123.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _123.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.NextSequenceRecvData;
                    fromJSON(object: any): _123.NextSequenceRecvData;
                    toJSON(message: _123.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_123.NextSequenceRecvData>): _123.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _124.DataType;
                dataTypeToJSON(object: _124.DataType): string;
                DataType: typeof _124.DataType;
                DataTypeSDKType: typeof _124.DataTypeSDKType;
                ClientState: {
                    encode(message: _124.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ClientState;
                    fromJSON(object: any): _124.ClientState;
                    toJSON(message: _124.ClientState): unknown;
                    fromPartial(object: Partial<_124.ClientState>): _124.ClientState;
                };
                ConsensusState: {
                    encode(message: _124.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConsensusState;
                    fromJSON(object: any): _124.ConsensusState;
                    toJSON(message: _124.ConsensusState): unknown;
                    fromPartial(object: Partial<_124.ConsensusState>): _124.ConsensusState;
                };
                Header: {
                    encode(message: _124.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Header;
                    fromJSON(object: any): _124.Header;
                    toJSON(message: _124.Header): unknown;
                    fromPartial(object: Partial<_124.Header>): _124.Header;
                };
                Misbehaviour: {
                    encode(message: _124.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Misbehaviour;
                    fromJSON(object: any): _124.Misbehaviour;
                    toJSON(message: _124.Misbehaviour): unknown;
                    fromPartial(object: Partial<_124.Misbehaviour>): _124.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _124.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SignatureAndData;
                    fromJSON(object: any): _124.SignatureAndData;
                    toJSON(message: _124.SignatureAndData): unknown;
                    fromPartial(object: Partial<_124.SignatureAndData>): _124.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _124.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.TimestampedSignatureData;
                    fromJSON(object: any): _124.TimestampedSignatureData;
                    toJSON(message: _124.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_124.TimestampedSignatureData>): _124.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _124.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SignBytes;
                    fromJSON(object: any): _124.SignBytes;
                    toJSON(message: _124.SignBytes): unknown;
                    fromPartial(object: Partial<_124.SignBytes>): _124.SignBytes;
                };
                HeaderData: {
                    encode(message: _124.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.HeaderData;
                    fromJSON(object: any): _124.HeaderData;
                    toJSON(message: _124.HeaderData): unknown;
                    fromPartial(object: Partial<_124.HeaderData>): _124.HeaderData;
                };
                ClientStateData: {
                    encode(message: _124.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ClientStateData;
                    fromJSON(object: any): _124.ClientStateData;
                    toJSON(message: _124.ClientStateData): unknown;
                    fromPartial(object: Partial<_124.ClientStateData>): _124.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _124.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConsensusStateData;
                    fromJSON(object: any): _124.ConsensusStateData;
                    toJSON(message: _124.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_124.ConsensusStateData>): _124.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _124.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConnectionStateData;
                    fromJSON(object: any): _124.ConnectionStateData;
                    toJSON(message: _124.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_124.ConnectionStateData>): _124.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _124.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ChannelStateData;
                    fromJSON(object: any): _124.ChannelStateData;
                    toJSON(message: _124.ChannelStateData): unknown;
                    fromPartial(object: Partial<_124.ChannelStateData>): _124.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _124.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketCommitmentData;
                    fromJSON(object: any): _124.PacketCommitmentData;
                    toJSON(message: _124.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_124.PacketCommitmentData>): _124.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _124.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketAcknowledgementData;
                    fromJSON(object: any): _124.PacketAcknowledgementData;
                    toJSON(message: _124.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_124.PacketAcknowledgementData>): _124.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _124.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketReceiptAbsenceData;
                    fromJSON(object: any): _124.PacketReceiptAbsenceData;
                    toJSON(message: _124.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_124.PacketReceiptAbsenceData>): _124.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _124.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.NextSequenceRecvData;
                    fromJSON(object: any): _124.NextSequenceRecvData;
                    toJSON(message: _124.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_124.NextSequenceRecvData>): _124.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _125.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ClientState;
                    fromJSON(object: any): _125.ClientState;
                    toJSON(message: _125.ClientState): unknown;
                    fromPartial(object: Partial<_125.ClientState>): _125.ClientState;
                };
                ConsensusState: {
                    encode(message: _125.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ConsensusState;
                    fromJSON(object: any): _125.ConsensusState;
                    toJSON(message: _125.ConsensusState): unknown;
                    fromPartial(object: Partial<_125.ConsensusState>): _125.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _125.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Misbehaviour;
                    fromJSON(object: any): _125.Misbehaviour;
                    toJSON(message: _125.Misbehaviour): unknown;
                    fromPartial(object: Partial<_125.Misbehaviour>): _125.Misbehaviour;
                };
                Header: {
                    encode(message: _125.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Header;
                    fromJSON(object: any): _125.Header;
                    toJSON(message: _125.Header): unknown;
                    fromPartial(object: Partial<_125.Header>): _125.Header;
                };
                Fraction: {
                    encode(message: _125.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Fraction;
                    fromJSON(object: any): _125.Fraction;
                    toJSON(message: _125.Fraction): unknown;
                    fromPartial(object: Partial<_125.Fraction>): _125.Fraction;
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
                    transfer: {
                        v1: _204.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _205.MsgClientImpl;
                    };
                    client: {
                        v1: _206.MsgClientImpl;
                    };
                    connection: {
                        v1: _207.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
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
                    transfer: {
                        v1: {
                            denomTrace(request: _103.QueryDenomTraceRequest): Promise<_103.QueryDenomTraceResponse>;
                            denomTraces(request?: _103.QueryDenomTracesRequest): Promise<_103.QueryDenomTracesResponse>;
                            params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _109.QueryChannelRequest): Promise<_109.QueryChannelResponse>;
                            channels(request?: _109.QueryChannelsRequest): Promise<_109.QueryChannelsResponse>;
                            connectionChannels(request: _109.QueryConnectionChannelsRequest): Promise<_109.QueryConnectionChannelsResponse>;
                            channelClientState(request: _109.QueryChannelClientStateRequest): Promise<_109.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _109.QueryChannelConsensusStateRequest): Promise<_109.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _109.QueryPacketCommitmentRequest): Promise<_109.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _109.QueryPacketCommitmentsRequest): Promise<_109.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _109.QueryPacketReceiptRequest): Promise<_109.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _109.QueryPacketAcknowledgementRequest): Promise<_109.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _109.QueryPacketAcknowledgementsRequest): Promise<_109.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _109.QueryUnreceivedPacketsRequest): Promise<_109.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _109.QueryUnreceivedAcksRequest): Promise<_109.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _109.QueryNextSequenceReceiveRequest): Promise<_109.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _113.QueryClientStateRequest): Promise<_113.QueryClientStateResponse>;
                            clientStates(request?: _113.QueryClientStatesRequest): Promise<_113.QueryClientStatesResponse>;
                            consensusState(request: _113.QueryConsensusStateRequest): Promise<_113.QueryConsensusStateResponse>;
                            consensusStates(request: _113.QueryConsensusStatesRequest): Promise<_113.QueryConsensusStatesResponse>;
                            clientStatus(request: _113.QueryClientStatusRequest): Promise<_113.QueryClientStatusResponse>;
                            clientParams(request?: _113.QueryClientParamsRequest): Promise<_113.QueryClientParamsResponse>;
                            upgradedClientState(request?: _113.QueryUpgradedClientStateRequest): Promise<_113.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _113.QueryUpgradedConsensusStateRequest): Promise<_113.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _118.QueryConnectionRequest): Promise<_118.QueryConnectionResponse>;
                            connections(request?: _118.QueryConnectionsRequest): Promise<_118.QueryConnectionsResponse>;
                            clientConnections(request: _118.QueryClientConnectionsRequest): Promise<_118.QueryClientConnectionsResponse>;
                            connectionClientState(request: _118.QueryConnectionClientStateRequest): Promise<_118.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _118.QueryConnectionConsensusStateRequest): Promise<_118.QueryConnectionConsensusStateResponse>;
                        };
                    };
                    port: {
                        v1: {
                            appVersion(request: _120.QueryAppVersionRequest): Promise<_120.QueryAppVersionResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
