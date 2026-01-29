import { OfflineSigner } from "@cosmjs/proto-signing";
import { createSigningClient } from "./customClient";
import type { SignerData, LocalStoreFunctions } from "./storeTypes";
export type { SignerData, LocalStoreFunctions } from "./storeTypes";
/**
 * Helper function to get the signer sequence from chain, and if it is same
 * as current locally stored one, it means you you want to send another tx while there is
 * already one in progress on chain, thus increment the local sequence by 1 and use it.
 * If the time from previous check is more than 7 seconds, then we assume the remote sequence is
 * correct and use it since a tx could have failed and thus the sequence is not incremented.
 */
export declare const getSignerData: (signingClient: Awaited<ReturnType<typeof createSigningClient>>, wallet: OfflineSigner, storageFunctions: LocalStoreFunctions) => Promise<SignerData>;
