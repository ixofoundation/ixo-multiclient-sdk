import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSetupMinter, MsgSetupMinterResponse, MsgMintToken, MsgMintTokenResponse, MsgTransferToken, MsgTransferTokenResponse } from "./tx";
/** Msg defines the project Msg service. */

export interface Msg {
  /** SetupMinter defines a method for setting up a minter */
  setupMinter(request: MsgSetupMinter): Promise<MsgSetupMinterResponse>;
  mintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
  /** Transfers a token and its nft to the recipient */

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