import { ChainNetwork } from "./chain.types";
/**
 * Sample: {
        key: 'lt2nc8vwbsjlfwap84z',
        contentType: 'application/ld+json',
        data: 'eyJAY29udGV4dCI6eyJpeG8iOiJodHRwczovL3czaWQub3JnL2l4by9ucy9wcm90b2NvbC8iLCJAaWQiOiJAdHlwZSIsInR5cGUiOiJAdHlwZSIsIkBwcm90ZWN0ZWQiOnRydWV9LCJ0eXBlIjoiaXhvOmVudGl0eSNwYWdlIiwicGFnZSI6eyJpZCI6IklyQ2NKOGhsOHQiLCJ0eXBlIjoicGFyYWdyYXBoIiwiZGF0YSI6eyJ0ZXh0IjoiVGhlIEltcGFjdCBEQU8gY29vcGVyYXRpdmUgbWFrZXMgb3V0Y29tZXMtYmFzZWQgaW52ZXN0bWVudHMgaW50byBpbm5vdmF0aW9ucywgcHJvamVjdHMgYW5kIHZlbnR1cmVzIHRoYXQgY2FuIGRsZWl2ZXIgSW50ZXJuZXQgb2YgSW1wYWN0IHNvbHV0aW9ucy4gTWVtYmVycyBvZiB0aGUgREFPIGFyZSBwaW9uZWVyaW5nIGlubm92YXRvcnMsIGludmVzdG9ycywgYnVpbGRlcnMsIGFuZCBpbXBsZW1lbnRvcnMgd2hvIGNvbnRyaWJ1dGUgY2FwaXRhbCwgd29yaywgb3Blbi1zb3VyY2Ugc29mdHdhcmUsIGFuZCBtYXJrZXQgYWNjZXNzIG9wcG9ydHVuaXRpZXMuIFRoZSBEQU8gdHJlYXN1cnkgcHJvdmlkZXMgZmluYW5jaW5nIGZvciB0aGUgZWNvc3lzdGVtIGJ5IGdyb3dpbmcgYSBwb3J0Zm9saW8gb2YgYXNzZXRzIGFuZCBieSBnZW5lcmF0aW5nIHJldmVudWVzIGZyb20gaXRzIGludmVzdG1lbnRzLiBUaGUgREFPIFRva2VucyByZXByZXNlbnQgZWFjaCBtZW1iZXIncyBwYXJ0aWNpcGF0aW9uIHNoYXJlIGluIHRoZSB0cmVhc3VyeSB0aGF0IGNhbiBiZSBleGNoYW5nZWQgYWZ0ZXIgdGhlIERBTyBicmVha3MgZXZlbi4gTW9yZSByZWNlbnQgaW52ZXN0b3JzIHJlY2l2ZSBhIGxpcXVpZGF0aW9uIHByZWZlcmVuY2UuIn19fQ==',
        url: 'https://devnet-cellnode.ixo.earth/public/lt2nc8vwbsjlfwap84z'
      }
 */
export declare type CellnodePublicResource = {
    key: string;
    contentType: string;
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
export declare type CellnodeWeb3Resource = {
    cid: string;
    name: string;
    ipfs: string;
    url: string;
};
export declare const cellNodeChainMapping: {
    [network in ChainNetwork]: string;
};
export declare const getPublicDoc: (cid: string, cellnodeUrl?: string, chainNetwork?: ChainNetwork) => Promise<any>;
export declare const uploadPublicDoc: (contentType: string, data: string, cellnodeUrl?: string, chainNetwork?: ChainNetwork) => Promise<CellnodePublicResource>;
export declare const getWeb3Doc: (cid: string, cellnodeUrl?: string, chainNetwork?: ChainNetwork) => Promise<any>;
export declare const uploadWeb3Doc: (name: string, contentType: string, data: string, cellnodeUrl?: string, chainNetwork?: ChainNetwork) => Promise<CellnodeWeb3Resource>;
