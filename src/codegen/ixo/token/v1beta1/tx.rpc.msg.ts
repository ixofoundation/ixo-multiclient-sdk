import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSetupMinter, MsgSetupMinterResponse, MsgMint, MsgMintResponse, MsgTransferToken, MsgTransferTokenResponse } from "./tx";
/** Msg defines the project Msg service. */

export interface Msg {
  /** CreateProject defines a method for creating a project. */
  setupMinter(request: MsgSetupMinter): Promise<MsgSetupMinterResponse>;
  mintToken(request: MsgMint): Promise<MsgMintResponse>;
  /** Transfers an token and its nft to the recipient */

  transferToken(request: MsgTransferToken): Promise<MsgTransferTokenResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setupMinter = this.setupMinter.bind(this);
    this.mintToken = this.mintToken.bind(this);
    this.transferToken = this.transferToken.bind(this);
  }

  setupMinter(request: MsgSetupMinter): Promise<MsgSetupMinterResponse> {
    const data = MsgSetupMinter.encode(request).finish();
    const promise = this.rpc.request("ixo.token.v1beta1.Msg", "SetupMinter", data);
    return promise.then(data => MsgSetupMinterResponse.decode(new _m0.Reader(data)));
  }

  mintToken(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("ixo.token.v1beta1.Msg", "MintToken", data);
    return promise.then(data => MsgMintResponse.decode(new _m0.Reader(data)));
  }

  transferToken(request: MsgTransferToken): Promise<MsgTransferTokenResponse> {
    const data = MsgTransferToken.encode(request).finish();
    const promise = this.rpc.request("ixo.token.v1beta1.Msg", "TransferToken", data);
    return promise.then(data => MsgTransferTokenResponse.decode(new _m0.Reader(data)));
  }

}