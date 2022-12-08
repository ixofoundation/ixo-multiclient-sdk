import { DeliverTxResponse } from "@cosmjs/stargate";
export declare const generateId: (length?: number) => string;
export declare const getValueFromEvents: (res: DeliverTxResponse, event: string, attribute: string, logError?: boolean, throwError?: boolean) => any;
