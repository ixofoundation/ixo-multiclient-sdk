import { ChainNetwork } from "./chain.types";
import { contracts } from "./contract.constants";

export const getContractCodes = (
  chainNetwork: ChainNetwork,
  category?: "ixo" | "daodao"
): { name: string; code?: number }[] =>
  contracts
    .filter((contract) => !category || contract.category === category)
    .map((contract) => ({
      name: contract.name,
      code: contract.code[chainNetwork],
    }));

export const getContractCode = (
  chainNetwork: ChainNetwork,
  contractName: string
): number | undefined =>
  contracts.find((contract) => contract.name === contractName)?.code[
    chainNetwork
  ] ?? -1;

export const getContractAddress = (
  chainNetwork: ChainNetwork,
  contractName: string
): string | undefined => {
  const addresses =
    contracts.find((contract) => contract.name === contractName)?.address ?? {};
  return addresses[chainNetwork];
};

export const getContractData = (
  chainNetwork: ChainNetwork,
  contractName: string
) => {
  const data = contracts.find((contract) => contract.name === contractName);

  return data?.code
    ? {
        ...data,
        code: data.code[chainNetwork],
        address: data.address[chainNetwork],
      }
    : undefined;
};

// ---------------------------------------------------------------------------
// DAO DAO versioned contract registry (v2.0.3 legacy + v2.7.1)
// ---------------------------------------------------------------------------
import {
  contractsV271,
  DAO_VERSION_LATEST,
  DAO_VERSION_OLD,
} from "./contract.constants.v271";

// Only category "daodao" belongs in the versioned DAO DAO registry — the full
// legacy `contracts` array also holds unrelated families (ixo, hyperlane)
// whose code ids overlap the v2.7.1 ids on some networks (e.g. devnet 33
// ixoswap vs harness dao_voting_cw4), so they must not leak into the
// cross-version reverse lookup.
export const daoContractsByVersion: Record<
  string,
  { name: string; category?: string; code: { [n in ChainNetwork]: number } }[]
> = {
  [DAO_VERSION_OLD]: (contracts as any[]).filter(
    (c) => c.category === "daodao"
  ),
  [DAO_VERSION_LATEST]: (contractsV271 as any[]).filter(
    (c) => c.category === "daodao"
  ),
};

/** Code id for a contract at a specific DAO DAO version (default latest).
 *  Returns undefined when the contract is not uploaded on that network yet. */
export const getContractCodeByVersion = (
  chainNetwork: ChainNetwork,
  contractName: string,
  version: string = DAO_VERSION_LATEST
): number | undefined => {
  const list = daoContractsByVersion[version] ?? [];
  const code = list.find((c) => c.name === contractName)?.code[chainNetwork];
  return code && code > 0 ? code : undefined;
};

/** Reverse lookup across ALL known versions — needed because old DAOs keep
 *  running old code ids forever after the v2.7.1 uploads. */
export const getContractNameByCodeIdAllVersions = (
  chainNetwork: ChainNetwork,
  codeId: number
): string | undefined => {
  if (!codeId || codeId <= 0) return undefined;
  for (const list of Object.values(daoContractsByVersion)) {
    const hit = list.find((c) => c.code[chainNetwork] === codeId);
    if (hit) return hit.name;
  }
  return undefined;
};
