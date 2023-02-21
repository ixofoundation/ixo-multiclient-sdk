import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateToken, MsgCreateTokenResponse, MsgMintToken, MsgMintTokenResponse, MsgTransferToken, MsgTransferTokenResponse } from "./tx";
/** Msg defines the project Msg service. */

export interface Msg {
  createToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
  mintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
  transferToken(request: MsgTransferToken): Promise<MsgTransferTokenResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createToken = this.createToken.bind(this);
    this.mintToken = this.mintToken.bind(this);
    this.transferToken = this.transferToken.bind(this);
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

}