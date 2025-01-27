/**
 * Gets the block results from the Comet38 node
 * Adjusted for IXO blocksync-core
 * @param endpoint - The endpoint of the Comet38 node
 * @returns - The block results
 */
export declare const blockResults: (height: number, endpoint: string, includeResults?: boolean) => Promise<import("../utils/tendermintClientHelpers").BlockResultsResponse>;
