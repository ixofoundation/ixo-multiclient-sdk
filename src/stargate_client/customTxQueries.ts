import {
  createProtobufRpcClient,
  QueryClient,
  TxExtension,
} from "@cosmjs/stargate";
import Long from "long";
import { SignMode } from "../codegen/cosmos/tx/signing/v1beta1/signing";

import { SimulateRequest } from "../codegen/cosmos/tx/v1beta1/service";
import { ServiceClientImpl } from "../codegen/cosmos/tx/v1beta1/service.rpc.Service";
import { AuthInfo, Fee, Tx, TxBody } from "../codegen/cosmos/tx/v1beta1/tx";
import { encodePubkey } from "./customPubkey";

export const setupTxExtension = (base: QueryClient): TxExtension => {
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);

  return {
    tx: {
      getTx: async (txId) => {
        const request = {
          hash: txId,
        };
        const response = await queryService.getTx(request);
        return response as any;
      },
      simulate: async (messages, memo, signer, sequence) => {
        const request = SimulateRequest.fromPartial({
          tx: Tx.fromPartial({
            authInfo: AuthInfo.fromPartial({
              fee: Fee.fromPartial({}),
              signerInfos: [
                {
                  publicKey: encodePubkey(signer),
                  sequence: Long.fromNumber(sequence, true),
                  modeInfo: {
                    single: { mode: SignMode.SIGN_MODE_UNSPECIFIED },
                  },
                },
              ],
            }),
            body: TxBody.fromPartial({
              messages: Array.from(messages),
              memo: memo,
            }),
            signatures: [new Uint8Array()],
          }),
          // Sending serialized `txBytes` is the future. But
          // this is not available in Comsos SDK 0.42.
          txBytes: undefined,
        });
        const response = await queryService.simulate(request);
        return response;
      },
    },
  };
};
