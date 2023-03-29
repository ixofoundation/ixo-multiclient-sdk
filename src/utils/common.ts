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
  filterFunc = (s: any): any => s,
  logError?: boolean,
  throwError?: boolean
) => {
  try {
    const value = JSON.parse(res.rawLog!)[0]
      ["events"].find((e: any) => e.type === event)
      ["attributes"].find((e: any) => e.key === attribute)["value"];
    // ["value"].replaceAll('"', "");
    let filteredValue;
    try {
      filteredValue = filterFunc(JSON.parse(value));
    } catch (error) {
      filteredValue = filterFunc(value);
    }
    return filteredValue;
  } catch (error) {
    if (logError) console.log({ error, res });
    if (throwError) throw error;
  }
};
