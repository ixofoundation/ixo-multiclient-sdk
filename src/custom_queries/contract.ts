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
