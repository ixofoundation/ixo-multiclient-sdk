import { DeliverTxResponse } from "@cosmjs/stargate";

export const generateId = (length: number = 12) => {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const getValueFromEvents = (
  res: DeliverTxResponse,
  event: string,
  attribute: string,
  logError?: boolean,
  throwError?: boolean
) => {
  try {
    const value = JSON.parse(res.rawLog!)[0]
      ["events"].find((e: any) => e.type === event)
      ["attributes"].find((e: any) => e.key === attribute)
      ["value"].replaceAll('"', "");
    return value;
  } catch (error) {
    if (logError) console.log({ error, res });
    if (throwError) throw error;
  }
};
