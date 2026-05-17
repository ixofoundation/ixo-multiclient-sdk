//@ts-nocheck
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateCollection, MsgCreateCollectionResponse, MsgSubmitClaim, MsgSubmitClaimResponse, MsgEvaluateClaim, MsgEvaluateClaimResponse, MsgDisputeClaim, MsgDisputeClaimResponse, MsgWithdrawPayment, MsgWithdrawPaymentResponse, MsgUpdateCollectionState, MsgUpdateCollectionStateResponse, MsgUpdateCollectionDates, MsgUpdateCollectionDatesResponse, MsgUpdateCollectionPayments, MsgUpdateCollectionPaymentsResponse, MsgUpdateCollectionIntents, MsgUpdateCollectionIntentsResponse, MsgClaimIntent, MsgClaimIntentResponse, MsgCreateClaimAuthorization, MsgCreateClaimAuthorizationResponse, MsgSetCollectionMembers, MsgSetCollectionMembersResponse, MsgRemoveCollectionMembers, MsgRemoveCollectionMembersResponse, MsgUpdateCollectionDisputeConfig, MsgUpdateCollectionDisputeConfigResponse, MsgAddPerformanceDeposit, MsgAddPerformanceDepositResponse, MsgWithdrawPerformanceDeposit, MsgWithdrawPerformanceDepositResponse, MsgAdjudicateDispute, MsgAdjudicateDisputeResponse } from "./tx";
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
  createClaimAuthorization(request: MsgCreateClaimAuthorization): Promise<MsgCreateClaimAuthorizationResponse>;
  setCollectionMembers(request: MsgSetCollectionMembers): Promise<MsgSetCollectionMembersResponse>;
  removeCollectionMembers(request: MsgRemoveCollectionMembers): Promise<MsgRemoveCollectionMembersResponse>;
  updateCollectionDisputeConfig(request: MsgUpdateCollectionDisputeConfig): Promise<MsgUpdateCollectionDisputeConfigResponse>;
  addPerformanceDeposit(request: MsgAddPerformanceDeposit): Promise<MsgAddPerformanceDepositResponse>;
  withdrawPerformanceDeposit(request: MsgWithdrawPerformanceDeposit): Promise<MsgWithdrawPerformanceDepositResponse>;
  adjudicateDispute(request: MsgAdjudicateDispute): Promise<MsgAdjudicateDisputeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createCollection = this.createCollection.bind(this);
    this.submitClaim = this.submitClaim.bind(this);
    this.evaluateClaim = this.evaluateClaim.bind(this);
    this.disputeClaim = this.disputeClaim.bind(this);
    this.withdrawPayment = this.withdrawPayment.bind(this);
    this.updateCollectionState = this.updateCollectionState.bind(this);
    this.updateCollectionDates = this.updateCollectionDates.bind(this);
    this.updateCollectionPayments = this.updateCollectionPayments.bind(this);
    this.updateCollectionIntents = this.updateCollectionIntents.bind(this);
    this.claimIntent = this.claimIntent.bind(this);
    this.createClaimAuthorization = this.createClaimAuthorization.bind(this);
    this.setCollectionMembers = this.setCollectionMembers.bind(this);
    this.removeCollectionMembers = this.removeCollectionMembers.bind(this);
    this.updateCollectionDisputeConfig = this.updateCollectionDisputeConfig.bind(this);
    this.addPerformanceDeposit = this.addPerformanceDeposit.bind(this);
    this.withdrawPerformanceDeposit = this.withdrawPerformanceDeposit.bind(this);
    this.adjudicateDispute = this.adjudicateDispute.bind(this);
  }
  createCollection(request: MsgCreateCollection): Promise<MsgCreateCollectionResponse> {
    const data = MsgCreateCollection.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "CreateCollection", data);
    return promise.then(data => MsgCreateCollectionResponse.decode(new _m0.Reader(data)));
  }
  submitClaim(request: MsgSubmitClaim): Promise<MsgSubmitClaimResponse> {
    const data = MsgSubmitClaim.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "SubmitClaim", data);
    return promise.then(data => MsgSubmitClaimResponse.decode(new _m0.Reader(data)));
  }
  evaluateClaim(request: MsgEvaluateClaim): Promise<MsgEvaluateClaimResponse> {
    const data = MsgEvaluateClaim.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "EvaluateClaim", data);
    return promise.then(data => MsgEvaluateClaimResponse.decode(new _m0.Reader(data)));
  }
  disputeClaim(request: MsgDisputeClaim): Promise<MsgDisputeClaimResponse> {
    const data = MsgDisputeClaim.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "DisputeClaim", data);
    return promise.then(data => MsgDisputeClaimResponse.decode(new _m0.Reader(data)));
  }
  withdrawPayment(request: MsgWithdrawPayment): Promise<MsgWithdrawPaymentResponse> {
    const data = MsgWithdrawPayment.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "WithdrawPayment", data);
    return promise.then(data => MsgWithdrawPaymentResponse.decode(new _m0.Reader(data)));
  }
  updateCollectionState(request: MsgUpdateCollectionState): Promise<MsgUpdateCollectionStateResponse> {
    const data = MsgUpdateCollectionState.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "UpdateCollectionState", data);
    return promise.then(data => MsgUpdateCollectionStateResponse.decode(new _m0.Reader(data)));
  }
  updateCollectionDates(request: MsgUpdateCollectionDates): Promise<MsgUpdateCollectionDatesResponse> {
    const data = MsgUpdateCollectionDates.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "UpdateCollectionDates", data);
    return promise.then(data => MsgUpdateCollectionDatesResponse.decode(new _m0.Reader(data)));
  }
  updateCollectionPayments(request: MsgUpdateCollectionPayments): Promise<MsgUpdateCollectionPaymentsResponse> {
    const data = MsgUpdateCollectionPayments.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "UpdateCollectionPayments", data);
    return promise.then(data => MsgUpdateCollectionPaymentsResponse.decode(new _m0.Reader(data)));
  }
  updateCollectionIntents(request: MsgUpdateCollectionIntents): Promise<MsgUpdateCollectionIntentsResponse> {
    const data = MsgUpdateCollectionIntents.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "UpdateCollectionIntents", data);
    return promise.then(data => MsgUpdateCollectionIntentsResponse.decode(new _m0.Reader(data)));
  }
  claimIntent(request: MsgClaimIntent): Promise<MsgClaimIntentResponse> {
    const data = MsgClaimIntent.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "ClaimIntent", data);
    return promise.then(data => MsgClaimIntentResponse.decode(new _m0.Reader(data)));
  }
  createClaimAuthorization(request: MsgCreateClaimAuthorization): Promise<MsgCreateClaimAuthorizationResponse> {
    const data = MsgCreateClaimAuthorization.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "CreateClaimAuthorization", data);
    return promise.then(data => MsgCreateClaimAuthorizationResponse.decode(new _m0.Reader(data)));
  }
  setCollectionMembers(request: MsgSetCollectionMembers): Promise<MsgSetCollectionMembersResponse> {
    const data = MsgSetCollectionMembers.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "SetCollectionMembers", data);
    return promise.then(data => MsgSetCollectionMembersResponse.decode(new _m0.Reader(data)));
  }
  removeCollectionMembers(request: MsgRemoveCollectionMembers): Promise<MsgRemoveCollectionMembersResponse> {
    const data = MsgRemoveCollectionMembers.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "RemoveCollectionMembers", data);
    return promise.then(data => MsgRemoveCollectionMembersResponse.decode(new _m0.Reader(data)));
  }
  updateCollectionDisputeConfig(request: MsgUpdateCollectionDisputeConfig): Promise<MsgUpdateCollectionDisputeConfigResponse> {
    const data = MsgUpdateCollectionDisputeConfig.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "UpdateCollectionDisputeConfig", data);
    return promise.then(data => MsgUpdateCollectionDisputeConfigResponse.decode(new _m0.Reader(data)));
  }
  addPerformanceDeposit(request: MsgAddPerformanceDeposit): Promise<MsgAddPerformanceDepositResponse> {
    const data = MsgAddPerformanceDeposit.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "AddPerformanceDeposit", data);
    return promise.then(data => MsgAddPerformanceDepositResponse.decode(new _m0.Reader(data)));
  }
  withdrawPerformanceDeposit(request: MsgWithdrawPerformanceDeposit): Promise<MsgWithdrawPerformanceDepositResponse> {
    const data = MsgWithdrawPerformanceDeposit.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "WithdrawPerformanceDeposit", data);
    return promise.then(data => MsgWithdrawPerformanceDepositResponse.decode(new _m0.Reader(data)));
  }
  adjudicateDispute(request: MsgAdjudicateDispute): Promise<MsgAdjudicateDisputeResponse> {
    const data = MsgAdjudicateDispute.encode(request).finish();
    const promise = this.rpc.request("ixo.claims.v1beta1.Msg", "AdjudicateDispute", data);
    return promise.then(data => MsgAdjudicateDisputeResponse.decode(new _m0.Reader(data)));
  }
}