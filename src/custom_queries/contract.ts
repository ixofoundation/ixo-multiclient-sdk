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
