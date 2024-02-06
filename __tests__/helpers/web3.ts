import { uploadWeb3Doc } from "../../src/custom_queries/cellnode";
import { chainNetwork } from "../setup/constants";

export const storeWeb3 = async (
  name: string,
  contentType: string,
  data: string
) => {
  const cid = await uploadWeb3Doc(
    name,
    contentType,
    data,
    undefined,
    chainNetwork
  );

  return cid;
};
