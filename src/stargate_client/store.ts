import { OfflineSigner } from "@cosmjs/proto-signing";
import { createSigningClient } from "./customClient";

const SignerStoreKey = "ixo-signer-data";

export type SignerData = {
  accountNumber: number;
  sequence: number;
  chainId: string;
};

export type LocalStoreFunctions = {
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
export const getSignerData = async (
  signingClient: Awaited<ReturnType<typeof createSigningClient>>,
  wallet: OfflineSigner,
  storageFunctions: LocalStoreFunctions
): Promise<SignerData> => {
  if (!storageFunctions) {
    throw new Error("Storage functions not provided");
  }

  const chainId = await signingClient.getChainId();
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;
  const { accountNumber, sequence } = await signingClient.getSequence(address);

  // If atomic getAndIncrementSequence is provided, use it for distributed coordination
  // This enables safe concurrent access across multiple workers/processes
  if (storageFunctions.getAndIncrementSequence) {
    return storageFunctions.getAndIncrementSequence({
      chainId,
      accountNumber,
      chainSequence: sequence,
    });
  }

  // Fall back to local storage logic for single-process scenarios
  if (!storageFunctions.getLocalData || !storageFunctions.setLocalData) {
    throw new Error(
      "Storage functions must provide either getAndIncrementSequence or both getLocalData and setLocalData"
    );
  }

  let data = (await storageFunctions.getLocalData(SignerStoreKey)) || {};
  const now = new Date();

  if (!data[chainId]) data[chainId] = {};
  if (!data[chainId][accountNumber]) {
    data[chainId][accountNumber] = {
      sequence: sequence,
      updated: now.toISOString(),
    };
  }

  const updated = new Date(data[chainId][accountNumber].updated);

  const timeDiff = now.getTime() - updated.getTime();
  if (
    // last updated is more than 7 seconds ago
    timeDiff > 7000 ||
    // or no timeDiff which means it is the first time
    timeDiff === 0 ||
    // or the remote sequence is more than local one
    sequence > data[chainId][accountNumber].sequence
  ) {
    // then update the local sequence to use remote one
    data[chainId][accountNumber].sequence = sequence;
  } else {
    // otherwise increment the local sequence by 1 as we are sending another tx while remote one is in progress
    data[chainId][accountNumber].sequence++;
  }

  // set the updated time to now
  data[chainId][accountNumber].updated = now.toISOString();

  // Await setLocalData to ensure data is persisted before returning
  // This prevents race conditions where concurrent calls read stale sequence data
  await storageFunctions.setLocalData(SignerStoreKey, data);

  return {
    accountNumber,
    sequence: data[chainId][accountNumber].sequence,
    chainId,
  };
};
