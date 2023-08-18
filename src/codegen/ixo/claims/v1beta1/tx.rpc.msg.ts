import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateCollection, MsgCreateCollectionResponse, MsgSubmitClaim, MsgSubmitClaimResponse, MsgEvaluateClaim, MsgEvaluateClaimResponse, MsgDisputeClaim, MsgDisputeClaimResponse, MsgWithdrawPayment, MsgWithdrawPaymentResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createCollection(request: MsgCreateCollection): Promise<MsgCreateCollectionResponse>;
  submitClaim(request: MsgSubmitClaim): Promise<MsgSubmitClaimResponse>;
  evaluateClaim(request: MsgEvaluateClaim): Promise<MsgEvaluateClaimResponse>;
  disputeClaim(request: MsgDisputeClaim): Promise<MsgDisputeClaimResponse>;
  withdrawPayment(request: MsgWithdrawPayment): Promise<MsgWithdrawPaymentResponse>;
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
}