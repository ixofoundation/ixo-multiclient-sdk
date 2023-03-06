import { Rpc } from "../../../helpers";
import { MsgCreateCollection, MsgCreateCollectionResponse, MsgSubmitClaim, MsgSubmitClaimResponse, MsgEvaluateClaim, MsgEvaluateClaimResponse, MsgDisputeClaim, MsgDisputeClaimResponse, MsgWithdrawPayment, MsgWithdrawPaymentResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    createCollection(request: MsgCreateCollection): Promise<MsgCreateCollectionResponse>;
    submitClaim(request: MsgSubmitClaim): Promise<MsgSubmitClaimResponse>;
    evaluateClaim(request: MsgEvaluateClaim): Promise<MsgEvaluateClaimResponse>;
    disputeClaim(request: MsgDisputeClaim): Promise<MsgDisputeClaimResponse>;
    withdrawPayment(request: MsgWithdrawPayment): Promise<MsgWithdrawPaymentResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createCollection(request: MsgCreateCollection): Promise<MsgCreateCollectionResponse>;
    submitClaim(request: MsgSubmitClaim): Promise<MsgSubmitClaimResponse>;
    evaluateClaim(request: MsgEvaluateClaim): Promise<MsgEvaluateClaimResponse>;
    disputeClaim(request: MsgDisputeClaim): Promise<MsgDisputeClaimResponse>;
    withdrawPayment(request: MsgWithdrawPayment): Promise<MsgWithdrawPaymentResponse>;
}
