import { Uint8ArrayToJS } from "../../src/utils/conversions";
import { queryClient } from "../helpers/common";

export const AllBonds = async () => {
  return await queryClient.ixo.bonds.v1beta1.bonds({});
};

export const ProjectDoc = async (did: string) => {
  const project = await queryClient.ixo.project.v1.projectDoc({
    projectDid: did,
  });
  console.log(Uint8ArrayToJS(project.projectDoc?.data as Uint8Array))
  return project
};
