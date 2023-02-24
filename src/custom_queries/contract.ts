import { ChainNetwork } from "./chain.types";
import { contracts } from "./contract.constants";

export const getContractCodes = (
  chainNetwork: ChainNetwork,
  category?: "ixo" | "daodao"
) => {
  return contracts
    .filter((contract) => !category || contract.category === category)
    .map((contract) => ({
      name: contract.name,
      code: contract.code[chainNetwork],
    }));
};
