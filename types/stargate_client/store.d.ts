import { OfflineSigner } from "@cosmjs/proto-signing";
import { createSigningClient } from "./customClient";
export declare type SignerData = {
    accountNumber: number;
    sequence: number;
    chainId: string;
};
export declare type LocalStoreFunctions = {
    getLocalData: (key: string) => Promise<any>;
    setLocalData: (key: string, data: any) => void | Promise<void>;
    /**
     * Optional atomic get-and-increment for distributed sequence coordination.
     * If provided, this method is used instead of the local storage logic,
     * enabling coordination across multiple workers/processes (e.g., via Durable Objects).
     */
    getAndIncrementSequence?: (params: {
        chainId: string;
        accountNumber: number;
        chainSequence: number;
    }) => Promise<SignerData>;
};
/**
 * Helper function to get the signer sequence from chain, and if it is same
 * as current locally stored one, it means you you want to send another tx while there is
 * already one in progress on chain, thus increment the local sequence by 1 and use it.
 * If the time from previous check is more than 7 seconds, then we assume the remote sequence is
 * correct and use it since a tx could have failed and thus the sequence is not incremented.
 */
export declare const getSignerData: (signingClient: Awaited<ReturnType<typeof createSigningClient>>, wallet: OfflineSigner, storageFunctions: LocalStoreFunctions) => Promise<SignerData>;
