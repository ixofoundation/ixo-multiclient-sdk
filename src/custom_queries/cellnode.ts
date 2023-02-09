import axios from "axios";
import { ChainNetwork } from "./chain.types";

export type CellnodePublicResource = {
  key: string;
  contentType: string; // mimetype
  data: {
    type: string;
    data: any;
  };
};

export type CellnodeWeb3Resource = {
  cid: string;
  name: string;
  ipfs: string;
  url: string;
};

export const cellNodeChainMapping: { [network in ChainNetwork]: string } = {
  mainnet: "https://cellnode.ixo.earth",
  testnet: "https://cellnode-pandora.ixo.earth",
  devnet: "https://devnet-cellnode.ixo.earth",
};

export const getPublicDoc = async (
  cid: string,
  cellnodeUrl?: string,
  chainNetwork: ChainNetwork = "mainnet"
): Promise<CellnodePublicResource> => {
  const baseUrl = cellnodeUrl || cellNodeChainMapping[chainNetwork];
  const url = `${baseUrl}/public/${cid}`;
  const response = await axios.get(url);
  return response.data as CellnodePublicResource;
};

export const uploadPublicDoc = async (
  contentType: string, // mimetype
  data: string,
  cellnodeUrl?: string,
  chainNetwork: ChainNetwork = "mainnet"
): Promise<CellnodePublicResource> => {
  const baseUrl = cellnodeUrl || cellNodeChainMapping[chainNetwork];
  const url = `${baseUrl}/public/createpublic`;
  const response = await axios.post(url, {
    contentType,
    data,
  });
  return response.data as CellnodePublicResource;
};

export const getWeb3Doc = async (
  cid: string,
  cellnodeUrl?: string,
  chainNetwork: ChainNetwork = "mainnet"
): Promise<CellnodeWeb3Resource> => {
  const baseUrl = cellnodeUrl || cellNodeChainMapping[chainNetwork];
  const url = `${baseUrl}/storage/retrieve/${cid}`;
  const response = await axios.get(url);
  return {
    ...response.data,
    url: `https://${response.data.ipfs}`,
  } as CellnodeWeb3Resource;
};

export const uploadWeb3Doc = async (
  name: string,
  contentType: string, // mimetype
  data: string,
  cellnodeUrl?: string,
  chainNetwork: ChainNetwork = "mainnet"
): Promise<CellnodeWeb3Resource> => {
  const baseUrl = cellnodeUrl || cellNodeChainMapping[chainNetwork];
  const url = `${baseUrl}/storage/store`;
  const response = await axios.post(url, {
    name,
    contentType,
    data,
  });
  return {
    ...response.data,
    url: `https://${response.data.ipfs}`,
  } as CellnodeWeb3Resource;
};
