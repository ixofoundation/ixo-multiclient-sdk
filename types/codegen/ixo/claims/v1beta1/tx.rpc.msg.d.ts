import { Rpc } from "../../../helpers";
import { MsgCreateCollection, MsgCreateCollectionResponse, MsgSubmitClaim, MsgSubmitClaimResponse, MsgEvaluateClaim, MsgEvaluateClaimResponse, MsgDisputeClaim, MsgDisputeClaimResponse, MsgWithdrawPayment, MsgWithdrawPaymentResponse, MsgUpdateCollectionState, MsgUpdateCollectionStateResponse, MsgUpdateCollectionDates, MsgUpdateCollectionDatesResponse, MsgUpdateCollectionPayments, MsgUpdateCollectionPaymentsResponse, MsgUpdateCollectionIntents, MsgUpdateCollectionIntentsResponse, MsgUpdateCollectionQuota, MsgUpdateCollectionQuotaResponse, MsgClaimIntent, MsgClaimIntentResponse, MsgCreateClaimAuthorization, MsgCreateClaimAuthorizationResponse, MsgSetCollectionMembers, MsgSetCollectionMembersResponse, MsgRemoveCollectionMembers, MsgRemoveCollectionMembersResponse, MsgUpdateCollectionDisputeConfig, MsgUpdateCollectionDisputeConfigResponse, MsgAddPerformanceDeposit, MsgAddPerformanceDepositResponse, MsgWithdrawPerformanceDeposit, MsgWithdrawPerformanceDepositResponse, MsgAdjudicateDispute, MsgAdjudicateDisputeResponse } from "./tx";
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
    updateCollectionQuota(request: MsgUpdateCollectionQuota): Promise<MsgUpdateCollectionQuotaResponse>;
    claimIntent(request: MsgClaimIntent): Promise<MsgClaimIntentResponse>;
    createClaimAuthorization(request: MsgCreateClaimAuthorization): Promise<MsgCreateClaimAuthorizationResponse>;
    setCollectionMembers(request: MsgSetCollectionMembers): Promise<MsgSetCollectionMembersResponse>;
    removeCollectionMembers(request: MsgRemoveCollectionMembers): Promise<MsgRemoveCollectionMembersResponse>;
    updateCollectionDisputeConfig(request: MsgUpdateCollectionDisputeConfig): Promise<MsgUpdateCollectionDisputeConfigResponse>;
    addPerformanceDeposit(request: MsgAddPerformanceDeposit): Promise<MsgAddPerformanceDepositResponse>;
    withdrawPerformanceDeposit(request: MsgWithdrawPerformanceDeposit): Promise<MsgWithdrawPerformanceDepositResponse>;
    adjudicateDispute(request: MsgAdjudicateDispute): Promise<MsgAdjudicateDisputeResponse>;
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
    updateCollectionQuota(request: MsgUpdateCollectionQuota): Promise<MsgUpdateCollectionQuotaResponse>;
    claimIntent(request: MsgClaimIntent): Promise<MsgClaimIntentResponse>;
    createClaimAuthorization(request: MsgCreateClaimAuthorization): Promise<MsgCreateClaimAuthorizationResponse>;
    setCollectionMembers(request: MsgSetCollectionMembers): Promise<MsgSetCollectionMembersResponse>;
    removeCollectionMembers(request: MsgRemoveCollectionMembers): Promise<MsgRemoveCollectionMembersResponse>;
    updateCollectionDisputeConfig(request: MsgUpdateCollectionDisputeConfig): Promise<MsgUpdateCollectionDisputeConfigResponse>;
    addPerformanceDeposit(request: MsgAddPerformanceDeposit): Promise<MsgAddPerformanceDepositResponse>;
    withdrawPerformanceDeposit(request: MsgWithdrawPerformanceDeposit): Promise<MsgWithdrawPerformanceDepositResponse>;
    adjudicateDispute(request: MsgAdjudicateDispute): Promise<MsgAdjudicateDisputeResponse>;
}
