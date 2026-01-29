/**
 * Shared types for sequence/signer data storage.
 * This file has no dependencies on crypto libraries, making it safe to import
 * in Cloudflare Workers at module load time.
 */

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
