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

/**
 * Converts an account number from cosmjs (bigint since cosmjs 0.39, since
 * Cosmos SDK 0.53+ can exceed 2^53-1) to the number used in SignerData and
 * client-side JSON storage. Throws instead of silently losing precision.
 */
export function accountNumberToNumber(value: number | bigint): number {
  const asNumber = Number(value);
  if (!Number.isSafeInteger(asNumber)) {
    throw new Error(
      `Account number ${value} exceeds Number.MAX_SAFE_INTEGER and cannot be safely represented`
    );
  }
  return asNumber;
}

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
