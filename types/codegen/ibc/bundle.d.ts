import * as _108 from "./applications/transfer/v1/genesis";
import * as _109 from "./applications/transfer/v1/query";
import * as _110 from "./applications/transfer/v1/transfer";
import * as _111 from "./applications/transfer/v1/tx";
import * as _112 from "./applications/transfer/v2/packet";
import * as _113 from "./core/channel/v1/channel";
import * as _114 from "./core/channel/v1/genesis";
import * as _115 from "./core/channel/v1/query";
import * as _116 from "./core/channel/v1/tx";
import * as _117 from "./core/client/v1/client";
import * as _118 from "./core/client/v1/genesis";
import * as _119 from "./core/client/v1/query";
import * as _120 from "./core/client/v1/tx";
import * as _121 from "./core/commitment/v1/commitment";
import * as _122 from "./core/connection/v1/connection";
import * as _123 from "./core/connection/v1/genesis";
import * as _124 from "./core/connection/v1/query";
import * as _125 from "./core/connection/v1/tx";
import * as _126 from "./core/port/v1/query";
import * as _127 from "./core/types/v1/genesis";
import * as _128 from "./lightclients/localhost/v1/localhost";
import * as _129 from "./lightclients/solomachine/v1/solomachine";
import * as _130 from "./lightclients/solomachine/v2/solomachine";
import * as _131 from "./lightclients/tendermint/v1/tendermint";
import * as _210 from "./applications/transfer/v1/query.rpc.Query";
import * as _211 from "./core/channel/v1/query.rpc.Query";
import * as _212 from "./core/client/v1/query.rpc.Query";
import * as _213 from "./core/connection/v1/query.rpc.Query";
import * as _214 from "./core/port/v1/query.rpc.Query";
import * as _215 from "./applications/transfer/v1/tx.rpc.msg";
import * as _216 from "./core/channel/v1/tx.rpc.msg";
import * as _217 from "./core/client/v1/tx.rpc.msg";
import * as _218 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _215.MsgClientImpl;
                QueryClientImpl: typeof _210.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _109.QueryDenomTraceRequest): Promise<_109.QueryDenomTraceResponse>;
                    denomTraces(request?: _109.QueryDenomTracesRequest): Promise<_109.QueryDenomTracesResponse>;
                    params(request?: _109.QueryParamsRequest): Promise<_109.QueryParamsResponse>;
                };
                MsgTransfer: {
                    encode(message: _111.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgTransfer;
                    fromJSON(object: any): _111.MsgTransfer;
                    toJSON(message: _111.MsgTransfer): unknown;
                    fromPartial(object: Partial<_111.MsgTransfer>): _111.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _111.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgTransferResponse;
                    fromJSON(_: any): _111.MsgTransferResponse;
                    toJSON(_: _111.MsgTransferResponse): unknown;
                    fromPartial(_: Partial<_111.MsgTransferResponse>): _111.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _110.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.DenomTrace;
                    fromJSON(object: any): _110.DenomTrace;
                    toJSON(message: _110.DenomTrace): unknown;
                    fromPartial(object: Partial<_110.DenomTrace>): _110.DenomTrace;
                };
                Params: {
                    encode(message: _110.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Params;
                    fromJSON(object: any): _110.Params;
                    toJSON(message: _110.Params): unknown;
                    fromPartial(object: Partial<_110.Params>): _110.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _109.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryDenomTraceRequest;
                    fromJSON(object: any): _109.QueryDenomTraceRequest;
                    toJSON(message: _109.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_109.QueryDenomTraceRequest>): _109.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _109.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryDenomTraceResponse;
                    fromJSON(object: any): _109.QueryDenomTraceResponse;
                    toJSON(message: _109.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_109.QueryDenomTraceResponse>): _109.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _109.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryDenomTracesRequest;
                    fromJSON(object: any): _109.QueryDenomTracesRequest;
                    toJSON(message: _109.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_109.QueryDenomTracesRequest>): _109.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _109.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryDenomTracesResponse;
                    fromJSON(object: any): _109.QueryDenomTracesResponse;
                    toJSON(message: _109.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_109.QueryDenomTracesResponse>): _109.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _109.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryParamsRequest;
                    fromJSON(_: any): _109.QueryParamsRequest;
                    toJSON(_: _109.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_109.QueryParamsRequest>): _109.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _109.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryParamsResponse;
                    fromJSON(object: any): _109.QueryParamsResponse;
                    toJSON(message: _109.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_109.QueryParamsResponse>): _109.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GenesisState;
                    fromJSON(object: any): _108.GenesisState;
                    toJSON(message: _108.GenesisState): unknown;
                    fromPartial(object: Partial<_108.GenesisState>): _108.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _112.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.FungibleTokenPacketData;
                    fromJSON(object: any): _112.FungibleTokenPacketData;
                    toJSON(message: _112.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_112.FungibleTokenPacketData>): _112.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _216.MsgClientImpl;
                QueryClientImpl: typeof _211.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _115.QueryChannelRequest): Promise<_115.QueryChannelResponse>;
                    channels(request?: _115.QueryChannelsRequest): Promise<_115.QueryChannelsResponse>;
                    connectionChannels(request: _115.QueryConnectionChannelsRequest): Promise<_115.QueryConnectionChannelsResponse>;
                    channelClientState(request: _115.QueryChannelClientStateRequest): Promise<_115.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _115.QueryChannelConsensusStateRequest): Promise<_115.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _115.QueryPacketCommitmentRequest): Promise<_115.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _115.QueryPacketCommitmentsRequest): Promise<_115.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _115.QueryPacketReceiptRequest): Promise<_115.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _115.QueryPacketAcknowledgementRequest): Promise<_115.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _115.QueryPacketAcknowledgementsRequest): Promise<_115.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _115.QueryUnreceivedPacketsRequest): Promise<_115.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _115.QueryUnreceivedAcksRequest): Promise<_115.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _115.QueryNextSequenceReceiveRequest): Promise<_115.QueryNextSequenceReceiveResponse>;
                };
                MsgChannelOpenInit: {
                    encode(message: _116.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenInit;
                    fromJSON(object: any): _116.MsgChannelOpenInit;
                    toJSON(message: _116.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_116.MsgChannelOpenInit>): _116.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _116.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _116.MsgChannelOpenInitResponse;
                    toJSON(_: _116.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: Partial<_116.MsgChannelOpenInitResponse>): _116.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _116.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenTry;
                    fromJSON(object: any): _116.MsgChannelOpenTry;
                    toJSON(message: _116.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_116.MsgChannelOpenTry>): _116.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _116.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _116.MsgChannelOpenTryResponse;
                    toJSON(_: _116.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: Partial<_116.MsgChannelOpenTryResponse>): _116.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _116.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenAck;
                    fromJSON(object: any): _116.MsgChannelOpenAck;
                    toJSON(message: _116.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_116.MsgChannelOpenAck>): _116.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _116.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _116.MsgChannelOpenAckResponse;
                    toJSON(_: _116.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_116.MsgChannelOpenAckResponse>): _116.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _116.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenConfirm;
                    fromJSON(object: any): _116.MsgChannelOpenConfirm;
                    toJSON(message: _116.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_116.MsgChannelOpenConfirm>): _116.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _116.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _116.MsgChannelOpenConfirmResponse;
                    toJSON(_: _116.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_116.MsgChannelOpenConfirmResponse>): _116.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _116.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelCloseInit;
                    fromJSON(object: any): _116.MsgChannelCloseInit;
                    toJSON(message: _116.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_116.MsgChannelCloseInit>): _116.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _116.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _116.MsgChannelCloseInitResponse;
                    toJSON(_: _116.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_116.MsgChannelCloseInitResponse>): _116.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _116.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelCloseConfirm;
                    fromJSON(object: any): _116.MsgChannelCloseConfirm;
                    toJSON(message: _116.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_116.MsgChannelCloseConfirm>): _116.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _116.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _116.MsgChannelCloseConfirmResponse;
                    toJSON(_: _116.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_116.MsgChannelCloseConfirmResponse>): _116.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _116.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgRecvPacket;
                    fromJSON(object: any): _116.MsgRecvPacket;
                    toJSON(message: _116.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_116.MsgRecvPacket>): _116.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _116.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgRecvPacketResponse;
                    fromJSON(_: any): _116.MsgRecvPacketResponse;
                    toJSON(_: _116.MsgRecvPacketResponse): unknown;
                    fromPartial(_: Partial<_116.MsgRecvPacketResponse>): _116.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _116.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgTimeout;
                    fromJSON(object: any): _116.MsgTimeout;
                    toJSON(message: _116.MsgTimeout): unknown;
                    fromPartial(object: Partial<_116.MsgTimeout>): _116.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _116.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgTimeoutResponse;
                    fromJSON(_: any): _116.MsgTimeoutResponse;
                    toJSON(_: _116.MsgTimeoutResponse): unknown;
                    fromPartial(_: Partial<_116.MsgTimeoutResponse>): _116.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _116.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgTimeoutOnClose;
                    fromJSON(object: any): _116.MsgTimeoutOnClose;
                    toJSON(message: _116.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_116.MsgTimeoutOnClose>): _116.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _116.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _116.MsgTimeoutOnCloseResponse;
                    toJSON(_: _116.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: Partial<_116.MsgTimeoutOnCloseResponse>): _116.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _116.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgAcknowledgement;
                    fromJSON(object: any): _116.MsgAcknowledgement;
                    toJSON(message: _116.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_116.MsgAcknowledgement>): _116.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _116.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgAcknowledgementResponse;
                    fromJSON(_: any): _116.MsgAcknowledgementResponse;
                    toJSON(_: _116.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: Partial<_116.MsgAcknowledgementResponse>): _116.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _115.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelRequest;
                    fromJSON(object: any): _115.QueryChannelRequest;
                    toJSON(message: _115.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_115.QueryChannelRequest>): _115.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _115.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelResponse;
                    fromJSON(object: any): _115.QueryChannelResponse;
                    toJSON(message: _115.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_115.QueryChannelResponse>): _115.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _115.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelsRequest;
                    fromJSON(object: any): _115.QueryChannelsRequest;
                    toJSON(message: _115.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_115.QueryChannelsRequest>): _115.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _115.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelsResponse;
                    fromJSON(object: any): _115.QueryChannelsResponse;
                    toJSON(message: _115.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_115.QueryChannelsResponse>): _115.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _115.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _115.QueryConnectionChannelsRequest;
                    toJSON(message: _115.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_115.QueryConnectionChannelsRequest>): _115.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _115.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _115.QueryConnectionChannelsResponse;
                    toJSON(message: _115.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_115.QueryConnectionChannelsResponse>): _115.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _115.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelClientStateRequest;
                    fromJSON(object: any): _115.QueryChannelClientStateRequest;
                    toJSON(message: _115.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_115.QueryChannelClientStateRequest>): _115.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _115.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelClientStateResponse;
                    fromJSON(object: any): _115.QueryChannelClientStateResponse;
                    toJSON(message: _115.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_115.QueryChannelClientStateResponse>): _115.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _115.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _115.QueryChannelConsensusStateRequest;
                    toJSON(message: _115.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_115.QueryChannelConsensusStateRequest>): _115.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _115.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _115.QueryChannelConsensusStateResponse;
                    toJSON(message: _115.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_115.QueryChannelConsensusStateResponse>): _115.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _115.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _115.QueryPacketCommitmentRequest;
                    toJSON(message: _115.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_115.QueryPacketCommitmentRequest>): _115.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _115.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _115.QueryPacketCommitmentResponse;
                    toJSON(message: _115.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_115.QueryPacketCommitmentResponse>): _115.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _115.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _115.QueryPacketCommitmentsRequest;
                    toJSON(message: _115.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_115.QueryPacketCommitmentsRequest>): _115.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _115.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _115.QueryPacketCommitmentsResponse;
                    toJSON(message: _115.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_115.QueryPacketCommitmentsResponse>): _115.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _115.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketReceiptRequest;
                    fromJSON(object: any): _115.QueryPacketReceiptRequest;
                    toJSON(message: _115.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_115.QueryPacketReceiptRequest>): _115.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _115.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketReceiptResponse;
                    fromJSON(object: any): _115.QueryPacketReceiptResponse;
                    toJSON(message: _115.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_115.QueryPacketReceiptResponse>): _115.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _115.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _115.QueryPacketAcknowledgementRequest;
                    toJSON(message: _115.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_115.QueryPacketAcknowledgementRequest>): _115.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _115.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _115.QueryPacketAcknowledgementResponse;
                    toJSON(message: _115.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_115.QueryPacketAcknowledgementResponse>): _115.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _115.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _115.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _115.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_115.QueryPacketAcknowledgementsRequest>): _115.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _115.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _115.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _115.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_115.QueryPacketAcknowledgementsResponse>): _115.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _115.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _115.QueryUnreceivedPacketsRequest;
                    toJSON(message: _115.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_115.QueryUnreceivedPacketsRequest>): _115.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _115.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _115.QueryUnreceivedPacketsResponse;
                    toJSON(message: _115.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_115.QueryUnreceivedPacketsResponse>): _115.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _115.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _115.QueryUnreceivedAcksRequest;
                    toJSON(message: _115.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_115.QueryUnreceivedAcksRequest>): _115.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _115.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _115.QueryUnreceivedAcksResponse;
                    toJSON(message: _115.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_115.QueryUnreceivedAcksResponse>): _115.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _115.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _115.QueryNextSequenceReceiveRequest;
                    toJSON(message: _115.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_115.QueryNextSequenceReceiveRequest>): _115.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _115.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _115.QueryNextSequenceReceiveResponse;
                    toJSON(message: _115.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_115.QueryNextSequenceReceiveResponse>): _115.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _114.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.GenesisState;
                    fromJSON(object: any): _114.GenesisState;
                    toJSON(message: _114.GenesisState): unknown;
                    fromPartial(object: Partial<_114.GenesisState>): _114.GenesisState;
                };
                PacketSequence: {
                    encode(message: _114.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.PacketSequence;
                    fromJSON(object: any): _114.PacketSequence;
                    toJSON(message: _114.PacketSequence): unknown;
                    fromPartial(object: Partial<_114.PacketSequence>): _114.PacketSequence;
                };
                stateFromJSON(object: any): _113.State;
                stateToJSON(object: _113.State): string;
                orderFromJSON(object: any): _113.Order;
                orderToJSON(object: _113.Order): string;
                State: typeof _113.State;
                StateSDKType: typeof _113.StateSDKType;
                Order: typeof _113.Order;
                OrderSDKType: typeof _113.OrderSDKType;
                Channel: {
                    encode(message: _113.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Channel;
                    fromJSON(object: any): _113.Channel;
                    toJSON(message: _113.Channel): unknown;
                    fromPartial(object: Partial<_113.Channel>): _113.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _113.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.IdentifiedChannel;
                    fromJSON(object: any): _113.IdentifiedChannel;
                    toJSON(message: _113.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_113.IdentifiedChannel>): _113.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _113.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Counterparty;
                    fromJSON(object: any): _113.Counterparty;
                    toJSON(message: _113.Counterparty): unknown;
                    fromPartial(object: Partial<_113.Counterparty>): _113.Counterparty;
                };
                Packet: {
                    encode(message: _113.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Packet;
                    fromJSON(object: any): _113.Packet;
                    toJSON(message: _113.Packet): unknown;
                    fromPartial(object: Partial<_113.Packet>): _113.Packet;
                };
                PacketState: {
                    encode(message: _113.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.PacketState;
                    fromJSON(object: any): _113.PacketState;
                    toJSON(message: _113.PacketState): unknown;
                    fromPartial(object: Partial<_113.PacketState>): _113.PacketState;
                };
                Acknowledgement: {
                    encode(message: _113.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Acknowledgement;
                    fromJSON(object: any): _113.Acknowledgement;
                    toJSON(message: _113.Acknowledgement): unknown;
                    fromPartial(object: Partial<_113.Acknowledgement>): _113.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _217.MsgClientImpl;
                QueryClientImpl: typeof _212.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _119.QueryClientStateRequest): Promise<_119.QueryClientStateResponse>;
                    clientStates(request?: _119.QueryClientStatesRequest): Promise<_119.QueryClientStatesResponse>;
                    consensusState(request: _119.QueryConsensusStateRequest): Promise<_119.QueryConsensusStateResponse>;
                    consensusStates(request: _119.QueryConsensusStatesRequest): Promise<_119.QueryConsensusStatesResponse>;
                    clientStatus(request: _119.QueryClientStatusRequest): Promise<_119.QueryClientStatusResponse>;
                    clientParams(request?: _119.QueryClientParamsRequest): Promise<_119.QueryClientParamsResponse>;
                    upgradedClientState(request?: _119.QueryUpgradedClientStateRequest): Promise<_119.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _119.QueryUpgradedConsensusStateRequest): Promise<_119.QueryUpgradedConsensusStateResponse>;
                };
                MsgCreateClient: {
                    encode(message: _120.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgCreateClient;
                    fromJSON(object: any): _120.MsgCreateClient;
                    toJSON(message: _120.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_120.MsgCreateClient>): _120.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _120.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgCreateClientResponse;
                    fromJSON(_: any): _120.MsgCreateClientResponse;
                    toJSON(_: _120.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_120.MsgCreateClientResponse>): _120.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _120.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgUpdateClient;
                    fromJSON(object: any): _120.MsgUpdateClient;
                    toJSON(message: _120.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_120.MsgUpdateClient>): _120.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _120.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgUpdateClientResponse;
                    fromJSON(_: any): _120.MsgUpdateClientResponse;
                    toJSON(_: _120.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_120.MsgUpdateClientResponse>): _120.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _120.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgUpgradeClient;
                    fromJSON(object: any): _120.MsgUpgradeClient;
                    toJSON(message: _120.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_120.MsgUpgradeClient>): _120.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _120.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgUpgradeClientResponse;
                    fromJSON(_: any): _120.MsgUpgradeClientResponse;
                    toJSON(_: _120.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_120.MsgUpgradeClientResponse>): _120.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _120.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _120.MsgSubmitMisbehaviour;
                    toJSON(message: _120.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_120.MsgSubmitMisbehaviour>): _120.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _120.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _120.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _120.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_120.MsgSubmitMisbehaviourResponse>): _120.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _119.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStateRequest;
                    fromJSON(object: any): _119.QueryClientStateRequest;
                    toJSON(message: _119.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_119.QueryClientStateRequest>): _119.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _119.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStateResponse;
                    fromJSON(object: any): _119.QueryClientStateResponse;
                    toJSON(message: _119.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_119.QueryClientStateResponse>): _119.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _119.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStatesRequest;
                    fromJSON(object: any): _119.QueryClientStatesRequest;
                    toJSON(message: _119.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_119.QueryClientStatesRequest>): _119.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _119.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStatesResponse;
                    fromJSON(object: any): _119.QueryClientStatesResponse;
                    toJSON(message: _119.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_119.QueryClientStatesResponse>): _119.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _119.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConsensusStateRequest;
                    fromJSON(object: any): _119.QueryConsensusStateRequest;
                    toJSON(message: _119.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_119.QueryConsensusStateRequest>): _119.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _119.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConsensusStateResponse;
                    fromJSON(object: any): _119.QueryConsensusStateResponse;
                    toJSON(message: _119.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_119.QueryConsensusStateResponse>): _119.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _119.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConsensusStatesRequest;
                    fromJSON(object: any): _119.QueryConsensusStatesRequest;
                    toJSON(message: _119.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_119.QueryConsensusStatesRequest>): _119.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _119.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConsensusStatesResponse;
                    fromJSON(object: any): _119.QueryConsensusStatesResponse;
                    toJSON(message: _119.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_119.QueryConsensusStatesResponse>): _119.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _119.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStatusRequest;
                    fromJSON(object: any): _119.QueryClientStatusRequest;
                    toJSON(message: _119.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_119.QueryClientStatusRequest>): _119.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _119.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStatusResponse;
                    fromJSON(object: any): _119.QueryClientStatusResponse;
                    toJSON(message: _119.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_119.QueryClientStatusResponse>): _119.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _119.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientParamsRequest;
                    fromJSON(_: any): _119.QueryClientParamsRequest;
                    toJSON(_: _119.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_119.QueryClientParamsRequest>): _119.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _119.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientParamsResponse;
                    fromJSON(object: any): _119.QueryClientParamsResponse;
                    toJSON(message: _119.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_119.QueryClientParamsResponse>): _119.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _119.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _119.QueryUpgradedClientStateRequest;
                    toJSON(_: _119.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_119.QueryUpgradedClientStateRequest>): _119.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _119.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _119.QueryUpgradedClientStateResponse;
                    toJSON(message: _119.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_119.QueryUpgradedClientStateResponse>): _119.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _119.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _119.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _119.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_119.QueryUpgradedConsensusStateRequest>): _119.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _119.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _119.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _119.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_119.QueryUpgradedConsensusStateResponse>): _119.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _118.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.GenesisState;
                    fromJSON(object: any): _118.GenesisState;
                    toJSON(message: _118.GenesisState): unknown;
                    fromPartial(object: Partial<_118.GenesisState>): _118.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _118.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.GenesisMetadata;
                    fromJSON(object: any): _118.GenesisMetadata;
                    toJSON(message: _118.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_118.GenesisMetadata>): _118.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _118.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _118.IdentifiedGenesisMetadata;
                    toJSON(message: _118.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_118.IdentifiedGenesisMetadata>): _118.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _117.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.IdentifiedClientState;
                    fromJSON(object: any): _117.IdentifiedClientState;
                    toJSON(message: _117.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_117.IdentifiedClientState>): _117.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _117.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ConsensusStateWithHeight;
                    fromJSON(object: any): _117.ConsensusStateWithHeight;
                    toJSON(message: _117.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_117.ConsensusStateWithHeight>): _117.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _117.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ClientConsensusStates;
                    fromJSON(object: any): _117.ClientConsensusStates;
                    toJSON(message: _117.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_117.ClientConsensusStates>): _117.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _117.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ClientUpdateProposal;
                    fromJSON(object: any): _117.ClientUpdateProposal;
                    toJSON(message: _117.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_117.ClientUpdateProposal>): _117.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _117.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.UpgradeProposal;
                    fromJSON(object: any): _117.UpgradeProposal;
                    toJSON(message: _117.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_117.UpgradeProposal>): _117.UpgradeProposal;
                };
                Height: {
                    encode(message: _117.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Height;
                    fromJSON(object: any): _117.Height;
                    toJSON(message: _117.Height): unknown;
                    fromPartial(object: Partial<_117.Height>): _117.Height;
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
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _121.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MerkleRoot;
                    fromJSON(object: any): _121.MerkleRoot;
                    toJSON(message: _121.MerkleRoot): unknown;
                    fromPartial(object: Partial<_121.MerkleRoot>): _121.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _121.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MerklePrefix;
                    fromJSON(object: any): _121.MerklePrefix;
                    toJSON(message: _121.MerklePrefix): unknown;
                    fromPartial(object: Partial<_121.MerklePrefix>): _121.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _121.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MerklePath;
                    fromJSON(object: any): _121.MerklePath;
                    toJSON(message: _121.MerklePath): unknown;
                    fromPartial(object: Partial<_121.MerklePath>): _121.MerklePath;
                };
                MerkleProof: {
                    encode(message: _121.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MerkleProof;
                    fromJSON(object: any): _121.MerkleProof;
                    toJSON(message: _121.MerkleProof): unknown;
                    fromPartial(object: Partial<_121.MerkleProof>): _121.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _218.MsgClientImpl;
                QueryClientImpl: typeof _213.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _124.QueryConnectionRequest): Promise<_124.QueryConnectionResponse>;
                    connections(request?: _124.QueryConnectionsRequest): Promise<_124.QueryConnectionsResponse>;
                    clientConnections(request: _124.QueryClientConnectionsRequest): Promise<_124.QueryClientConnectionsResponse>;
                    connectionClientState(request: _124.QueryConnectionClientStateRequest): Promise<_124.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _124.QueryConnectionConsensusStateRequest): Promise<_124.QueryConnectionConsensusStateResponse>;
                };
                MsgConnectionOpenInit: {
                    encode(message: _125.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenInit;
                    fromJSON(object: any): _125.MsgConnectionOpenInit;
                    toJSON(message: _125.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_125.MsgConnectionOpenInit>): _125.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _125.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _125.MsgConnectionOpenInitResponse;
                    toJSON(_: _125.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_125.MsgConnectionOpenInitResponse>): _125.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _125.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenTry;
                    fromJSON(object: any): _125.MsgConnectionOpenTry;
                    toJSON(message: _125.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_125.MsgConnectionOpenTry>): _125.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _125.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _125.MsgConnectionOpenTryResponse;
                    toJSON(_: _125.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_125.MsgConnectionOpenTryResponse>): _125.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _125.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenAck;
                    fromJSON(object: any): _125.MsgConnectionOpenAck;
                    toJSON(message: _125.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_125.MsgConnectionOpenAck>): _125.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _125.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _125.MsgConnectionOpenAckResponse;
                    toJSON(_: _125.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_125.MsgConnectionOpenAckResponse>): _125.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _125.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _125.MsgConnectionOpenConfirm;
                    toJSON(message: _125.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_125.MsgConnectionOpenConfirm>): _125.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _125.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _125.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _125.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_125.MsgConnectionOpenConfirmResponse>): _125.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _124.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionRequest;
                    fromJSON(object: any): _124.QueryConnectionRequest;
                    toJSON(message: _124.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_124.QueryConnectionRequest>): _124.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _124.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionResponse;
                    fromJSON(object: any): _124.QueryConnectionResponse;
                    toJSON(message: _124.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_124.QueryConnectionResponse>): _124.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _124.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionsRequest;
                    fromJSON(object: any): _124.QueryConnectionsRequest;
                    toJSON(message: _124.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_124.QueryConnectionsRequest>): _124.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _124.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionsResponse;
                    fromJSON(object: any): _124.QueryConnectionsResponse;
                    toJSON(message: _124.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_124.QueryConnectionsResponse>): _124.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _124.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryClientConnectionsRequest;
                    fromJSON(object: any): _124.QueryClientConnectionsRequest;
                    toJSON(message: _124.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_124.QueryClientConnectionsRequest>): _124.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _124.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryClientConnectionsResponse;
                    fromJSON(object: any): _124.QueryClientConnectionsResponse;
                    toJSON(message: _124.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_124.QueryClientConnectionsResponse>): _124.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _124.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _124.QueryConnectionClientStateRequest;
                    toJSON(message: _124.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_124.QueryConnectionClientStateRequest>): _124.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _124.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _124.QueryConnectionClientStateResponse;
                    toJSON(message: _124.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_124.QueryConnectionClientStateResponse>): _124.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _124.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _124.QueryConnectionConsensusStateRequest;
                    toJSON(message: _124.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_124.QueryConnectionConsensusStateRequest>): _124.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _124.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _124.QueryConnectionConsensusStateResponse;
                    toJSON(message: _124.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_124.QueryConnectionConsensusStateResponse>): _124.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _123.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.GenesisState;
                    fromJSON(object: any): _123.GenesisState;
                    toJSON(message: _123.GenesisState): unknown;
                    fromPartial(object: Partial<_123.GenesisState>): _123.GenesisState;
                };
                stateFromJSON(object: any): _122.State;
                stateToJSON(object: _122.State): string;
                State: typeof _122.State;
                StateSDKType: typeof _122.StateSDKType;
                ConnectionEnd: {
                    encode(message: _122.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ConnectionEnd;
                    fromJSON(object: any): _122.ConnectionEnd;
                    toJSON(message: _122.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_122.ConnectionEnd>): _122.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _122.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.IdentifiedConnection;
                    fromJSON(object: any): _122.IdentifiedConnection;
                    toJSON(message: _122.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_122.IdentifiedConnection>): _122.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _122.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Counterparty;
                    fromJSON(object: any): _122.Counterparty;
                    toJSON(message: _122.Counterparty): unknown;
                    fromPartial(object: Partial<_122.Counterparty>): _122.Counterparty;
                };
                ClientPaths: {
                    encode(message: _122.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ClientPaths;
                    fromJSON(object: any): _122.ClientPaths;
                    toJSON(message: _122.ClientPaths): unknown;
                    fromPartial(object: Partial<_122.ClientPaths>): _122.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _122.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ConnectionPaths;
                    fromJSON(object: any): _122.ConnectionPaths;
                    toJSON(message: _122.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_122.ConnectionPaths>): _122.ConnectionPaths;
                };
                Version: {
                    encode(message: _122.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Version;
                    fromJSON(object: any): _122.Version;
                    toJSON(message: _122.Version): unknown;
                    fromPartial(object: Partial<_122.Version>): _122.Version;
                };
                Params: {
                    encode(message: _122.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Params;
                    fromJSON(object: any): _122.Params;
                    toJSON(message: _122.Params): unknown;
                    fromPartial(object: Partial<_122.Params>): _122.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _214.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    appVersion(request: _126.QueryAppVersionRequest): Promise<_126.QueryAppVersionResponse>;
                };
                QueryAppVersionRequest: {
                    encode(message: _126.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAppVersionRequest;
                    fromJSON(object: any): _126.QueryAppVersionRequest;
                    toJSON(message: _126.QueryAppVersionRequest): unknown;
                    fromPartial(object: Partial<_126.QueryAppVersionRequest>): _126.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _126.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAppVersionResponse;
                    fromJSON(object: any): _126.QueryAppVersionResponse;
                    toJSON(message: _126.QueryAppVersionResponse): unknown;
                    fromPartial(object: Partial<_126.QueryAppVersionResponse>): _126.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _127.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.GenesisState;
                    fromJSON(object: any): _127.GenesisState;
                    toJSON(message: _127.GenesisState): unknown;
                    fromPartial(object: Partial<_127.GenesisState>): _127.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _128.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ClientState;
                    fromJSON(object: any): _128.ClientState;
                    toJSON(message: _128.ClientState): unknown;
                    fromPartial(object: Partial<_128.ClientState>): _128.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _129.DataType;
                dataTypeToJSON(object: _129.DataType): string;
                DataType: typeof _129.DataType;
                DataTypeSDKType: typeof _129.DataTypeSDKType;
                ClientState: {
                    encode(message: _129.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ClientState;
                    fromJSON(object: any): _129.ClientState;
                    toJSON(message: _129.ClientState): unknown;
                    fromPartial(object: Partial<_129.ClientState>): _129.ClientState;
                };
                ConsensusState: {
                    encode(message: _129.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ConsensusState;
                    fromJSON(object: any): _129.ConsensusState;
                    toJSON(message: _129.ConsensusState): unknown;
                    fromPartial(object: Partial<_129.ConsensusState>): _129.ConsensusState;
                };
                Header: {
                    encode(message: _129.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Header;
                    fromJSON(object: any): _129.Header;
                    toJSON(message: _129.Header): unknown;
                    fromPartial(object: Partial<_129.Header>): _129.Header;
                };
                Misbehaviour: {
                    encode(message: _129.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Misbehaviour;
                    fromJSON(object: any): _129.Misbehaviour;
                    toJSON(message: _129.Misbehaviour): unknown;
                    fromPartial(object: Partial<_129.Misbehaviour>): _129.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _129.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.SignatureAndData;
                    fromJSON(object: any): _129.SignatureAndData;
                    toJSON(message: _129.SignatureAndData): unknown;
                    fromPartial(object: Partial<_129.SignatureAndData>): _129.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _129.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.TimestampedSignatureData;
                    fromJSON(object: any): _129.TimestampedSignatureData;
                    toJSON(message: _129.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_129.TimestampedSignatureData>): _129.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _129.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.SignBytes;
                    fromJSON(object: any): _129.SignBytes;
                    toJSON(message: _129.SignBytes): unknown;
                    fromPartial(object: Partial<_129.SignBytes>): _129.SignBytes;
                };
                HeaderData: {
                    encode(message: _129.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.HeaderData;
                    fromJSON(object: any): _129.HeaderData;
                    toJSON(message: _129.HeaderData): unknown;
                    fromPartial(object: Partial<_129.HeaderData>): _129.HeaderData;
                };
                ClientStateData: {
                    encode(message: _129.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ClientStateData;
                    fromJSON(object: any): _129.ClientStateData;
                    toJSON(message: _129.ClientStateData): unknown;
                    fromPartial(object: Partial<_129.ClientStateData>): _129.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _129.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ConsensusStateData;
                    fromJSON(object: any): _129.ConsensusStateData;
                    toJSON(message: _129.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_129.ConsensusStateData>): _129.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _129.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ConnectionStateData;
                    fromJSON(object: any): _129.ConnectionStateData;
                    toJSON(message: _129.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_129.ConnectionStateData>): _129.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _129.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ChannelStateData;
                    fromJSON(object: any): _129.ChannelStateData;
                    toJSON(message: _129.ChannelStateData): unknown;
                    fromPartial(object: Partial<_129.ChannelStateData>): _129.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _129.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.PacketCommitmentData;
                    fromJSON(object: any): _129.PacketCommitmentData;
                    toJSON(message: _129.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_129.PacketCommitmentData>): _129.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _129.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.PacketAcknowledgementData;
                    fromJSON(object: any): _129.PacketAcknowledgementData;
                    toJSON(message: _129.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_129.PacketAcknowledgementData>): _129.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _129.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.PacketReceiptAbsenceData;
                    fromJSON(object: any): _129.PacketReceiptAbsenceData;
                    toJSON(message: _129.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_129.PacketReceiptAbsenceData>): _129.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _129.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.NextSequenceRecvData;
                    fromJSON(object: any): _129.NextSequenceRecvData;
                    toJSON(message: _129.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_129.NextSequenceRecvData>): _129.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _130.DataType;
                dataTypeToJSON(object: _130.DataType): string;
                DataType: typeof _130.DataType;
                DataTypeSDKType: typeof _130.DataTypeSDKType;
                ClientState: {
                    encode(message: _130.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ClientState;
                    fromJSON(object: any): _130.ClientState;
                    toJSON(message: _130.ClientState): unknown;
                    fromPartial(object: Partial<_130.ClientState>): _130.ClientState;
                };
                ConsensusState: {
                    encode(message: _130.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ConsensusState;
                    fromJSON(object: any): _130.ConsensusState;
                    toJSON(message: _130.ConsensusState): unknown;
                    fromPartial(object: Partial<_130.ConsensusState>): _130.ConsensusState;
                };
                Header: {
                    encode(message: _130.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Header;
                    fromJSON(object: any): _130.Header;
                    toJSON(message: _130.Header): unknown;
                    fromPartial(object: Partial<_130.Header>): _130.Header;
                };
                Misbehaviour: {
                    encode(message: _130.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Misbehaviour;
                    fromJSON(object: any): _130.Misbehaviour;
                    toJSON(message: _130.Misbehaviour): unknown;
                    fromPartial(object: Partial<_130.Misbehaviour>): _130.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _130.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.SignatureAndData;
                    fromJSON(object: any): _130.SignatureAndData;
                    toJSON(message: _130.SignatureAndData): unknown;
                    fromPartial(object: Partial<_130.SignatureAndData>): _130.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _130.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.TimestampedSignatureData;
                    fromJSON(object: any): _130.TimestampedSignatureData;
                    toJSON(message: _130.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_130.TimestampedSignatureData>): _130.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _130.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.SignBytes;
                    fromJSON(object: any): _130.SignBytes;
                    toJSON(message: _130.SignBytes): unknown;
                    fromPartial(object: Partial<_130.SignBytes>): _130.SignBytes;
                };
                HeaderData: {
                    encode(message: _130.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.HeaderData;
                    fromJSON(object: any): _130.HeaderData;
                    toJSON(message: _130.HeaderData): unknown;
                    fromPartial(object: Partial<_130.HeaderData>): _130.HeaderData;
                };
                ClientStateData: {
                    encode(message: _130.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ClientStateData;
                    fromJSON(object: any): _130.ClientStateData;
                    toJSON(message: _130.ClientStateData): unknown;
                    fromPartial(object: Partial<_130.ClientStateData>): _130.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _130.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ConsensusStateData;
                    fromJSON(object: any): _130.ConsensusStateData;
                    toJSON(message: _130.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_130.ConsensusStateData>): _130.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _130.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ConnectionStateData;
                    fromJSON(object: any): _130.ConnectionStateData;
                    toJSON(message: _130.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_130.ConnectionStateData>): _130.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _130.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ChannelStateData;
                    fromJSON(object: any): _130.ChannelStateData;
                    toJSON(message: _130.ChannelStateData): unknown;
                    fromPartial(object: Partial<_130.ChannelStateData>): _130.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _130.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PacketCommitmentData;
                    fromJSON(object: any): _130.PacketCommitmentData;
                    toJSON(message: _130.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_130.PacketCommitmentData>): _130.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _130.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PacketAcknowledgementData;
                    fromJSON(object: any): _130.PacketAcknowledgementData;
                    toJSON(message: _130.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_130.PacketAcknowledgementData>): _130.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _130.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PacketReceiptAbsenceData;
                    fromJSON(object: any): _130.PacketReceiptAbsenceData;
                    toJSON(message: _130.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_130.PacketReceiptAbsenceData>): _130.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _130.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.NextSequenceRecvData;
                    fromJSON(object: any): _130.NextSequenceRecvData;
                    toJSON(message: _130.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_130.NextSequenceRecvData>): _130.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _131.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ClientState;
                    fromJSON(object: any): _131.ClientState;
                    toJSON(message: _131.ClientState): unknown;
                    fromPartial(object: Partial<_131.ClientState>): _131.ClientState;
                };
                ConsensusState: {
                    encode(message: _131.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ConsensusState;
                    fromJSON(object: any): _131.ConsensusState;
                    toJSON(message: _131.ConsensusState): unknown;
                    fromPartial(object: Partial<_131.ConsensusState>): _131.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _131.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Misbehaviour;
                    fromJSON(object: any): _131.Misbehaviour;
                    toJSON(message: _131.Misbehaviour): unknown;
                    fromPartial(object: Partial<_131.Misbehaviour>): _131.Misbehaviour;
                };
                Header: {
                    encode(message: _131.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Header;
                    fromJSON(object: any): _131.Header;
                    toJSON(message: _131.Header): unknown;
                    fromPartial(object: Partial<_131.Header>): _131.Header;
                };
                Fraction: {
                    encode(message: _131.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Fraction;
                    fromJSON(object: any): _131.Fraction;
                    toJSON(message: _131.Fraction): unknown;
                    fromPartial(object: Partial<_131.Fraction>): _131.Fraction;
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
                        v1: _215.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _216.MsgClientImpl;
                    };
                    client: {
                        v1: _217.MsgClientImpl;
                    };
                    connection: {
                        v1: _218.MsgClientImpl;
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
                            denomTrace(request: _109.QueryDenomTraceRequest): Promise<_109.QueryDenomTraceResponse>;
                            denomTraces(request?: _109.QueryDenomTracesRequest): Promise<_109.QueryDenomTracesResponse>;
                            params(request?: _109.QueryParamsRequest): Promise<_109.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _115.QueryChannelRequest): Promise<_115.QueryChannelResponse>;
                            channels(request?: _115.QueryChannelsRequest): Promise<_115.QueryChannelsResponse>;
                            connectionChannels(request: _115.QueryConnectionChannelsRequest): Promise<_115.QueryConnectionChannelsResponse>;
                            channelClientState(request: _115.QueryChannelClientStateRequest): Promise<_115.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _115.QueryChannelConsensusStateRequest): Promise<_115.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _115.QueryPacketCommitmentRequest): Promise<_115.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _115.QueryPacketCommitmentsRequest): Promise<_115.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _115.QueryPacketReceiptRequest): Promise<_115.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _115.QueryPacketAcknowledgementRequest): Promise<_115.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _115.QueryPacketAcknowledgementsRequest): Promise<_115.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _115.QueryUnreceivedPacketsRequest): Promise<_115.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _115.QueryUnreceivedAcksRequest): Promise<_115.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _115.QueryNextSequenceReceiveRequest): Promise<_115.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _119.QueryClientStateRequest): Promise<_119.QueryClientStateResponse>;
                            clientStates(request?: _119.QueryClientStatesRequest): Promise<_119.QueryClientStatesResponse>;
                            consensusState(request: _119.QueryConsensusStateRequest): Promise<_119.QueryConsensusStateResponse>;
                            consensusStates(request: _119.QueryConsensusStatesRequest): Promise<_119.QueryConsensusStatesResponse>;
                            clientStatus(request: _119.QueryClientStatusRequest): Promise<_119.QueryClientStatusResponse>;
                            clientParams(request?: _119.QueryClientParamsRequest): Promise<_119.QueryClientParamsResponse>;
                            upgradedClientState(request?: _119.QueryUpgradedClientStateRequest): Promise<_119.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _119.QueryUpgradedConsensusStateRequest): Promise<_119.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _124.QueryConnectionRequest): Promise<_124.QueryConnectionResponse>;
                            connections(request?: _124.QueryConnectionsRequest): Promise<_124.QueryConnectionsResponse>;
                            clientConnections(request: _124.QueryClientConnectionsRequest): Promise<_124.QueryClientConnectionsResponse>;
                            connectionClientState(request: _124.QueryConnectionClientStateRequest): Promise<_124.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _124.QueryConnectionConsensusStateRequest): Promise<_124.QueryConnectionConsensusStateResponse>;
                        };
                    };
                    port: {
                        v1: {
                            appVersion(request: _126.QueryAppVersionRequest): Promise<_126.QueryAppVersionResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
