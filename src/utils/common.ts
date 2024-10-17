import { DeliverTxResponse } from "@cosmjs/stargate";
import { EventAttribute, EventSDKType } from "../codegen/tendermint/abci/types";

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
  throwError?: boolean,
  messageIndex = 0
) => {
  try {
    let value: any;
    // from cosmos-sdk v0.50 onwards, rawLog is not available, events is seperate
    if (res.events) {
      value = res.events
        .find((e: EventSDKType) => {
          // first check if type is correct
          const isType = e.type === event;
          if (!isType) return false;

          // then check if attributes contains correct msg_index
          const msgIndexAttribute = e.attributes.find(
            (a: EventAttribute) => a.key === "msg_index"
          )?.value;
          if (
            msgIndexAttribute === undefined ||
            msgIndexAttribute !== messageIndex.toString()
          )
            return false;

          // finally check if attribute is present
          const isAttribute = e.attributes.find(
            (a: EventAttribute) => a.key === attribute
          )?.value;
          if (isAttribute === undefined) return false;
          return true;
        })
        ?.attributes?.find((a: EventAttribute) => a.key === attribute).value;

      // if no value it could be for chain pre v0.50 where events doesnt include msgIndex
      if (!value) {
        value = res.events
          .find((e: EventSDKType) => {
            // first check if type is correct
            const isType = e.type === event;
            if (!isType) return false;

            // finally check if attribute is present
            const isAttribute = e.attributes.find(
              (a: EventAttribute) => a.key === attribute
            )?.value;
            if (isAttribute === undefined) return false;
            return true;
          })
          ?.attributes?.find((a: EventAttribute) => a.key === attribute).value;
      }
    } else {
      value = JSON.parse(res.rawLog)
        [messageIndex]?.events?.find((e: EventSDKType) => e.type === event)
        ?.attributes?.find((e: EventAttribute) => e.key === attribute)?.value;
    }

    let filteredValue;
    try {
      filteredValue = filterFunc(JSON.parse(value));
    } catch (error) {
      filteredValue = filterFunc(value);
    }
    return filteredValue;
  } catch (error) {
    if (logError) console.error({ error, res });
    if (throwError) throw error;
  }
};

// Iterator function to help run getValueFromEvents with mutliple messages
export const getValuesFromEvents = (
  res: DeliverTxResponse,
  event: string,
  attribute: string,
  filterFunc = (s: any): any => s,
  logError?: boolean,
  throwError?: boolean
) => {
  try {
    return JSON.parse(res.rawLog!).map((log, i) =>
      getValueFromEvents(
        res,
        event,
        attribute,
        filterFunc,
        logError,
        throwError,
        i
      )
    );
  } catch (error) {
    if (logError) console.log({ error, res });
    if (throwError) throw error;
  }
};
