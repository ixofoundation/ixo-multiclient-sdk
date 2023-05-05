import axios from "axios";
import { ChainNetwork } from "./chain.types";

/**
 * Sample: {
        key: 'lt2nc8vwbsjlfwap84z',
        contentType: 'application/ld+json',
        data: 'eyJAY29udGV4dCI6eyJpeG8iOiJodHRwczovL3czaWQub3JnL2l4by9ucy9wcm90b2NvbC8iLCJAaWQiOiJAdHlwZSIsInR5cGUiOiJAdHlwZSIsIkBwcm90ZWN0ZWQiOnRydWV9LCJ0eXBlIjoiaXhvOmVudGl0eSNwYWdlIiwicGFnZSI6eyJpZCI6IklyQ2NKOGhsOHQiLCJ0eXBlIjoicGFyYWdyYXBoIiwiZGF0YSI6eyJ0ZXh0IjoiVGhlIEltcGFjdCBEQU8gY29vcGVyYXRpdmUgbWFrZXMgb3V0Y29tZXMtYmFzZWQgaW52ZXN0bWVudHMgaW50byBpbm5vdmF0aW9ucywgcHJvamVjdHMgYW5kIHZlbnR1cmVzIHRoYXQgY2FuIGRsZWl2ZXIgSW50ZXJuZXQgb2YgSW1wYWN0IHNvbHV0aW9ucy4gTWVtYmVycyBvZiB0aGUgREFPIGFyZSBwaW9uZWVyaW5nIGlubm92YXRvcnMsIGludmVzdG9ycywgYnVpbGRlcnMsIGFuZCBpbXBsZW1lbnRvcnMgd2hvIGNvbnRyaWJ1dGUgY2FwaXRhbCwgd29yaywgb3Blbi1zb3VyY2Ugc29mdHdhcmUsIGFuZCBtYXJrZXQgYWNjZXNzIG9wcG9ydHVuaXRpZXMuIFRoZSBEQU8gdHJlYXN1cnkgcHJvdmlkZXMgZmluYW5jaW5nIGZvciB0aGUgZWNvc3lzdGVtIGJ5IGdyb3dpbmcgYSBwb3J0Zm9saW8gb2YgYXNzZXRzIGFuZCBieSBnZW5lcmF0aW5nIHJldmVudWVzIGZyb20gaXRzIGludmVzdG1lbnRzLiBUaGUgREFPIFRva2VucyByZXByZXNlbnQgZWFjaCBtZW1iZXIncyBwYXJ0aWNpcGF0aW9uIHNoYXJlIGluIHRoZSB0cmVhc3VyeSB0aGF0IGNhbiBiZSBleGNoYW5nZWQgYWZ0ZXIgdGhlIERBTyBicmVha3MgZXZlbi4gTW9yZSByZWNlbnQgaW52ZXN0b3JzIHJlY2l2ZSBhIGxpcXVpZGF0aW9uIHByZWZlcmVuY2UuIn19fQ==',
        url: 'https://devnet-cellnode.ixo.earth/public/lt2nc8vwbsjlfwap84z'
      }
 */
export type CellnodePublicResource = {
  key: string;
  contentType: string; // mimetype
  data: string;
  url: string;
};

/**
 * Sample: {
        cid: 'bafkreieevelc4vmpo6p2lsqu2zgiuc3xatxuzoquwtvqea6zabufbxmwiu',
        name: 'atJywpxoUyHx',
        ipfs: 'bafkreieevelc4vmpo6p2lsqu2zgiuc3xatxuzoquwtvqea6zabufbxmwiu.ipfs.w3s.link',
        url: 'https://bafkreieevelc4vmpo6p2lsqu2zgiuc3xatxuzoquwtvqea6zabufbxmwiu.ipfs.w3s.link'
      }
 */
export type CellnodeWeb3Resource = {
  cid: string;
  name: string;
  ipfs: string;
  url: string;
};

export const cellNodeChainMapping: { [network in ChainNetwork]: string } = {
  mainnet: "https://cellnode.ixo.world",
  testnet: "https://cellnode-pandora.ixo.earth",
  devnet: "https://devnet-cellnode.ixo.earth",
};

export const getPublicDoc = async (
  cid: string,
  cellnodeUrl?: string,
  chainNetwork: ChainNetwork = "mainnet"
): Promise<any> => {
  const baseUrl = cellnodeUrl || cellNodeChainMapping[chainNetwork];
  const url = `${baseUrl}/public/${cid}`;
  const response = await axios.get(url);
  return response.data;
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
  return {
    ...response.data,
    url: `${baseUrl}/public/${response.data.key}`,
  } as CellnodePublicResource;
};

export const getWeb3Doc = async (
  cid: string,
  cellnodeUrl?: string,
  chainNetwork: ChainNetwork = "mainnet"
): Promise<any> => {
  const baseUrl = cellnodeUrl || cellNodeChainMapping[chainNetwork];
  const url = `${baseUrl}/storage/retrieve/${cid}`;
  const response = await axios.get(url);
  return response.data;
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
