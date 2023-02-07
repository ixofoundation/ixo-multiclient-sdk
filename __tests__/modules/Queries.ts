import { queryClient } from "../helpers/common";

export const AllBonds = async () => {
  return await queryClient.ixo.bonds.v1beta1.bonds({});
};

export const ProjectDoc = async (did: string) => {
  return await queryClient.ixo.project.v1.projectDoc({
    projectDid: did,
  });
};
