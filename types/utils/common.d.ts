import { DeliverTxResponse } from "@cosmjs/stargate";
export declare const generateId: (length?: number) => string;
export declare const getValueFromEvents: (res: DeliverTxResponse, event: string, attribute: string, filterFunc?: (s: any) => any, logError?: boolean, throwError?: boolean) => any;
