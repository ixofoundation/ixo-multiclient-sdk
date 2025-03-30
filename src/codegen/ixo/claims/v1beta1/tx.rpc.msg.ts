//@ts-nocheck
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateCollection, MsgCreateCollectionResponse, MsgSubmitClaim, MsgSubmitClaimResponse, MsgEvaluateClaim, MsgEvaluateClaimResponse, MsgDisputeClaim, MsgDisputeClaimResponse, MsgWithdrawPayment, MsgWithdrawPaymentResponse, MsgUpdateCollectionState, MsgUpdateCollectionStateResponse, MsgUpdateCollectionDates, MsgUpdateCollectionDatesResponse, MsgUpdateCollectionPayments, MsgUpdateCollectionPaymentsResponse, MsgUpdateCollectionIntents, MsgUpdateCollectionIntentsResponse, MsgClaimIntent, MsgClaimIntentResponse, MsgCreateClaimAuthorization, MsgCreateClaimAuthorizationResponse } from "./tx";
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
}