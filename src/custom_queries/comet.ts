import { HttpClient } from "@cosmjs/tendermint-rpc";
import {
  createJsonRpcRequest,
  encodeHeightParam,
  decodeBlockResults,
} from "../utils/tendermintClientHelpers";

/**
 * Gets the block results from the Comet38 node
 * Adjusted for IXO blocksync-core
 * @param endpoint - The endpoint of the Comet38 node
 * @returns - The block results
 */
export const blockResults = async (
  height: number,
  endpoint: string,
  includeResults: boolean = false
) => {
  // only allow endpoiints as string and starting with http
  if (typeof endpoint !== "string" || !endpoint.startsWith("http")) {
    throw new Error("Invalid endpoint");
  }
  if (!height) {
    throw new Error("Invalid height");
  }

  const query = {
    method: "block_results",
    params: { height: height },
  };

  const req = createJsonRpcRequest(
    query.method,
    encodeHeightParam(query.params)
  );
  const result = (await new HttpClient(endpoint).execute(req)) as any;
  if (!result.result) {
    throw new Error(result.message ?? "No RPC result");
  }
  // console.dir(result.result, { depth: null });
  return decodeBlockResults(result.result, includeResults);
};
