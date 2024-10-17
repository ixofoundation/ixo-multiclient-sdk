import { Rpc } from "../../../helpers";
import { MsgCreateCollection, MsgCreateCollectionResponse, MsgSubmitClaim, MsgSubmitClaimResponse, MsgEvaluateClaim, MsgEvaluateClaimResponse, MsgDisputeClaim, MsgDisputeClaimResponse, MsgWithdrawPayment, MsgWithdrawPaymentResponse, MsgUpdateCollectionState, MsgUpdateCollectionStateResponse, MsgUpdateCollectionDates, MsgUpdateCollectionDatesResponse, MsgUpdateCollectionPayments, MsgUpdateCollectionPaymentsResponse, MsgUpdateCollectionIntents, MsgUpdateCollectionIntentsResponse, MsgClaimIntent, MsgClaimIntentResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    createCollection(request: MsgCreateCollection): Promise<MsgCreateCollectionResponse>;
    submitClaim(request: MsgSubmitClaim): Promise<MsgSubmitClaimResponse>;
    evaluateClaim(request: MsgEvaluateClaim): Promise<MsgEvaluateClaimResponse>;
    disputeClaim(request: MsgDisputeClaim): Promise<MsgDisputeClaimResponse>;
    withdrawPayment(request: MsgWithdrawPayment): Promise<MsgWithdrawPaymentResponse>;
    updateCollectionState(request: MsgUpdateCollectionState): Promise<MsgUpdateCollectionStateResponse>;
    updateCollectionDates(request: MsgUpdateCollectionDates): Promise<MsgUpdateCollectionDatesResponse>;
    updateCollectionPayments(request: MsgUpdateCollectionPayments): Promise<MsgUpdateCollectionPaymentsResponse>;
    updateCollectionIntents(request: MsgUpdateCollectionIntents): Promise<MsgUpdateCollectionIntentsResponse>;
    claimIntent(request: MsgClaimIntent): Promise<MsgClaimIntentResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createCollection(request: MsgCreateCollection): Promise<MsgCreateCollectionResponse>;
    submitClaim(request: MsgSubmitClaim): Promise<MsgSubmitClaimResponse>;
    evaluateClaim(request: MsgEvaluateClaim): Promise<MsgEvaluateClaimResponse>;
    disputeClaim(request: MsgDisputeClaim): Promise<MsgDisputeClaimResponse>;
    withdrawPayment(request: MsgWithdrawPayment): Promise<MsgWithdrawPaymentResponse>;
    updateCollectionState(request: MsgUpdateCollectionState): Promise<MsgUpdateCollectionStateResponse>;
    updateCollectionDates(request: MsgUpdateCollectionDates): Promise<MsgUpdateCollectionDatesResponse>;
    updateCollectionPayments(request: MsgUpdateCollectionPayments): Promise<MsgUpdateCollectionPaymentsResponse>;
    updateCollectionIntents(request: MsgUpdateCollectionIntents): Promise<MsgUpdateCollectionIntentsResponse>;
    claimIntent(request: MsgClaimIntent): Promise<MsgClaimIntentResponse>;
}
