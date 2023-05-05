import { Web3Storage, File, Blob } from "web3.storage";

const token = process.env.WEB3STORAGE_TOKEN || "";
const client = new Web3Storage({ token: token });

export const storeWeb3 = async (
  name: string,
  contentType: string,
  data: string
) => {
  const buffer = Buffer.from(data, "base64");
  const blob = new Blob([buffer], { type: contentType });
  const file = new File([blob], name, { type: contentType });
  const cid = await client.put([file], {
    wrapWithDirectory: false,
    name: name,
  });
  return cid;
};
