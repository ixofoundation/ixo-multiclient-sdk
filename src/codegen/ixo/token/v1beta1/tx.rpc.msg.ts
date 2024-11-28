//@ts-nocheck
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateToken, MsgCreateTokenResponse, MsgMintToken, MsgMintTokenResponse, MsgTransferToken, MsgTransferTokenResponse, MsgRetireToken, MsgRetireTokenResponse, MsgTransferCredit, MsgTransferCreditResponse, MsgCancelToken, MsgCancelTokenResponse, MsgPauseToken, MsgPauseTokenResponse, MsgStopToken, MsgStopTokenResponse } from "./tx";
/** Msg defines the project Msg service. */
export interface Msg {
  createToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
  mintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
  transferToken(request: MsgTransferToken): Promise<MsgTransferTokenResponse>;
  retireToken(request: MsgRetireToken): Promise<MsgRetireTokenResponse>;
  transferCredit(request: MsgTransferCredit): Promise<MsgTransferCreditResponse>;
  cancelToken(request: MsgCancelToken): Promise<MsgCancelTokenResponse>;
  pauseToken(request: MsgPauseToken): Promise<MsgPauseTokenResponse>;
  stopToken(request: MsgStopToken): Promise<MsgStopTokenResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createToken = this.createToken.bind(this);
    this.mintToken = this.mintToken.bind(this);
    this.transferToken = this.transferToken.bind(this);
    this.retireToken = this.retireToken.bind(this);
    this.transferCredit = this.transferCredit.bind(this);
    this.cancelToken = this.cancelToken.bind(this);
    this.pauseToken = this.pauseToken.bind(this);
    this.stopToken = this.stopToken.bind(this);
  }
  createToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse> {
    const data = MsgCreateToken.encode(request).finish();
    const promise = this.rpc.request("ixo.token.v1beta1.Msg", "CreateToken", data);
    return promise.then(data => MsgCreateTokenResponse.decode(new _m0.Reader(data)));
  }
  mintToken(request: MsgMintToken): Promise<MsgMintTokenResponse> {
    const data = MsgMintToken.encode(request).finish();
    const promise = this.rpc.request("ixo.token.v1beta1.Msg", "MintToken", data);
    return promise.then(data => MsgMintTokenResponse.decode(new _m0.Reader(data)));
  }
  transferToken(request: MsgTransferToken): Promise<MsgTransferTokenResponse> {
    const data = MsgTransferToken.encode(request).finish();
    const promise = this.rpc.request("ixo.token.v1beta1.Msg", "TransferToken", data);
    return promise.then(data => MsgTransferTokenResponse.decode(new _m0.Reader(data)));
  }
  retireToken(request: MsgRetireToken): Promise<MsgRetireTokenResponse> {
    const data = MsgRetireToken.encode(request).finish();
    const promise = this.rpc.request("ixo.token.v1beta1.Msg", "RetireToken", data);
    return promise.then(data => MsgRetireTokenResponse.decode(new _m0.Reader(data)));
  }
  transferCredit(request: MsgTransferCredit): Promise<MsgTransferCreditResponse> {
    const data = MsgTransferCredit.encode(request).finish();
    const promise = this.rpc.request("ixo.token.v1beta1.Msg", "TransferCredit", data);
    return promise.then(data => MsgTransferCreditResponse.decode(new _m0.Reader(data)));
  }
  cancelToken(request: MsgCancelToken): Promise<MsgCancelTokenResponse> {
    const data = MsgCancelToken.encode(request).finish();
    const promise = this.rpc.request("ixo.token.v1beta1.Msg", "CancelToken", data);
    return promise.then(data => MsgCancelTokenResponse.decode(new _m0.Reader(data)));
  }
  pauseToken(request: MsgPauseToken): Promise<MsgPauseTokenResponse> {
    const data = MsgPauseToken.encode(request).finish();
    const promise = this.rpc.request("ixo.token.v1beta1.Msg", "PauseToken", data);
    return promise.then(data => MsgPauseTokenResponse.decode(new _m0.Reader(data)));
  }
  stopToken(request: MsgStopToken): Promise<MsgStopTokenResponse> {
    const data = MsgStopToken.encode(request).finish();
    const promise = this.rpc.request("ixo.token.v1beta1.Msg", "StopToken", data);
    return promise.then(data => MsgStopTokenResponse.decode(new _m0.Reader(data)));
  }
}