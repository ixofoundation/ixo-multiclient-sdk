import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  ixo: {
    bonds: {
      v1beta1: new (await import("./bonds/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    entity: {
      v1beta1: new (await import("./entity/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    iid: {
      v1beta1: new (await import("./iid/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    payments: {
      v1: new (await import("./payments/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    project: {
      v1: new (await import("./project/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    token: {
      v1beta1: new (await import("./token/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});