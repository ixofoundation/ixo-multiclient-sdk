import { queryClient } from "../helpers/common";

export const AllBonds = async () => {
  return await queryClient.ixo.bonds.v1beta1.bonds({});
};

export const AllEntities = async () => {
  return await queryClient.ixo.entity.v1beta1.entityList({});
};

export const AllIidDocuments = async () => {
  return await queryClient.ixo.iid.v1beta1.iidDocuments({});
};

export const IidDocument = async (did: string) => {
  return await queryClient.ixo.iid.v1beta1.iidDocument({
    id: did,
  });
};

export const AllAccounts = async () => {
  return await queryClient.cosmos.auth.v1beta1.accounts({});
};
