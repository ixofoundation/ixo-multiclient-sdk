import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    bonds: import("./tx.rpc.msg").MsgClientImpl;
}>;
