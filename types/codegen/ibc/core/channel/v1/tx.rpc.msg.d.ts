import { Rpc } from "../../../../helpers";
import { MsgChannelOpenInit, MsgChannelOpenInitResponse, MsgChannelOpenTry, MsgChannelOpenTryResponse, MsgChannelOpenAck, MsgChannelOpenAckResponse, MsgChannelOpenConfirm, MsgChannelOpenConfirmResponse, MsgChannelCloseInit, MsgChannelCloseInitResponse, MsgChannelCloseConfirm, MsgChannelCloseConfirmResponse, MsgRecvPacket, MsgRecvPacketResponse, MsgTimeout, MsgTimeoutResponse, MsgTimeoutOnClose, MsgTimeoutOnCloseResponse, MsgAcknowledgement, MsgAcknowledgementResponse, MsgChannelUpgradeInit, MsgChannelUpgradeInitResponse, MsgChannelUpgradeTry, MsgChannelUpgradeTryResponse, MsgChannelUpgradeAck, MsgChannelUpgradeAckResponse, MsgChannelUpgradeConfirm, MsgChannelUpgradeConfirmResponse, MsgChannelUpgradeOpen, MsgChannelUpgradeOpenResponse, MsgChannelUpgradeTimeout, MsgChannelUpgradeTimeoutResponse, MsgChannelUpgradeCancel, MsgChannelUpgradeCancelResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgPruneAcknowledgements, MsgPruneAcknowledgementsResponse } from "./tx";
/** Msg defines the ibc/channel Msg service. */
export interface Msg {
    /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
    channelOpenInit(request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponse>;
    /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
    channelOpenTry(request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponse>;
    /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
    channelOpenAck(request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponse>;
    /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
    channelOpenConfirm(request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponse>;
    /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
    channelCloseInit(request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponse>;
    /**
     * ChannelCloseConfirm defines a rpc handler method for
     * MsgChannelCloseConfirm.
     */
    channelCloseConfirm(request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponse>;
    /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
    recvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse>;
    /** Timeout defines a rpc handler method for MsgTimeout. */
    timeout(request: MsgTimeout): Promise<MsgTimeoutResponse>;
    /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
    timeoutOnClose(request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponse>;
    /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
    acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse>;
    /** ChannelUpgradeInit defines a rpc handler method for MsgChannelUpgradeInit. */
    channelUpgradeInit(request: MsgChannelUpgradeInit): Promise<MsgChannelUpgradeInitResponse>;
    /** ChannelUpgradeTry defines a rpc handler method for MsgChannelUpgradeTry. */
    channelUpgradeTry(request: MsgChannelUpgradeTry): Promise<MsgChannelUpgradeTryResponse>;
    /** ChannelUpgradeAck defines a rpc handler method for MsgChannelUpgradeAck. */
    channelUpgradeAck(request: MsgChannelUpgradeAck): Promise<MsgChannelUpgradeAckResponse>;
    /** ChannelUpgradeConfirm defines a rpc handler method for MsgChannelUpgradeConfirm. */
    channelUpgradeConfirm(request: MsgChannelUpgradeConfirm): Promise<MsgChannelUpgradeConfirmResponse>;
    /** ChannelUpgradeOpen defines a rpc handler method for MsgChannelUpgradeOpen. */
    channelUpgradeOpen(request: MsgChannelUpgradeOpen): Promise<MsgChannelUpgradeOpenResponse>;
    /** ChannelUpgradeTimeout defines a rpc handler method for MsgChannelUpgradeTimeout. */
    channelUpgradeTimeout(request: MsgChannelUpgradeTimeout): Promise<MsgChannelUpgradeTimeoutResponse>;
    /** ChannelUpgradeCancel defines a rpc handler method for MsgChannelUpgradeCancel. */
    channelUpgradeCancel(request: MsgChannelUpgradeCancel): Promise<MsgChannelUpgradeCancelResponse>;
    /** UpdateChannelParams defines a rpc handler method for MsgUpdateParams. */
    updateChannelParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /** PruneAcknowledgements defines a rpc handler method for MsgPruneAcknowledgements. */
    pruneAcknowledgements(request: MsgPruneAcknowledgements): Promise<MsgPruneAcknowledgementsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    channelOpenInit(request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponse>;
    channelOpenTry(request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponse>;
    channelOpenAck(request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponse>;
    channelOpenConfirm(request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponse>;
    channelCloseInit(request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponse>;
    channelCloseConfirm(request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponse>;
    recvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse>;
    timeout(request: MsgTimeout): Promise<MsgTimeoutResponse>;
    timeoutOnClose(request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponse>;
    acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse>;
    channelUpgradeInit(request: MsgChannelUpgradeInit): Promise<MsgChannelUpgradeInitResponse>;
    channelUpgradeTry(request: MsgChannelUpgradeTry): Promise<MsgChannelUpgradeTryResponse>;
    channelUpgradeAck(request: MsgChannelUpgradeAck): Promise<MsgChannelUpgradeAckResponse>;
    channelUpgradeConfirm(request: MsgChannelUpgradeConfirm): Promise<MsgChannelUpgradeConfirmResponse>;
    channelUpgradeOpen(request: MsgChannelUpgradeOpen): Promise<MsgChannelUpgradeOpenResponse>;
    channelUpgradeTimeout(request: MsgChannelUpgradeTimeout): Promise<MsgChannelUpgradeTimeoutResponse>;
    channelUpgradeCancel(request: MsgChannelUpgradeCancel): Promise<MsgChannelUpgradeCancelResponse>;
    updateChannelParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    pruneAcknowledgements(request: MsgPruneAcknowledgements): Promise<MsgPruneAcknowledgementsResponse>;
}
