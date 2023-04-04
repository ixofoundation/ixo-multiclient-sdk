import {
  createAgentIidContext,
  createIidVerificationMethods,
} from "../../src/messages/iid";
import { createClient, getUser, ixo } from "../helpers/common";
import { fee, keyType, WalletUsers } from "../helpers/constants";
import { SetupDaoConstantFields } from "./impacts/constants";
import { SetupClassConstants } from "./classes/constants";
import { LinkedResourcesUploaded } from "./constants";

export const CreateEntityBasic = async (
  entity: SetupClassConstants["dao"],
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = getUser(signer);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const myPubKey = account.pubkey;
  const did = tester.did;

  const context = !entity.contextClass
    ? createAgentIidContext()
    : createAgentIidContext([{ key: "class", val: entity.contextClass }]);

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgCreateEntity",
    value: ixo.entity.v1beta1.MsgCreateEntity.fromPartial({
      entityType: entity.entityType,
      context: context,
      verification: createIidVerificationMethods({
        did,
        pubkey: myPubKey,
        address: myAddress,
        controller: did,
        type: keyType,
      }),
      controller: [did],
      ownerDid: did,
      ownerAddress: myAddress,
      relayerNode: entity.relayerNode || did,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const CreateEntity = async (
  entity: SetupDaoConstantFields["entity"],
  linkedResourcesUploaded: LinkedResourcesUploaded
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myPubKey = account.pubkey;
  const myAddress = account.address;
  const did = tester.did;

  const linkedResources = linkedResourcesUploaded.map(
    ({ name, cid, type, storage }) =>
      ixo.iid.v1beta1.LinkedResource.fromPartial({
        id: `{id}#${name}`,
        type,
        description: name.slice(0, 1).toLocaleUpperCase() + name.slice(1),
        mediaType: "application/ld+json",
        serviceEndpoint:
          storage === "cellnode" ? `cellnode:/public/${cid}` : `ipfs:${cid}`,
        proof: cid,
        encrypted: "false",
        right: "",
      })
  );

  const context = !entity.contextClass
    ? createAgentIidContext()
    : createAgentIidContext([{ key: "class", val: entity.contextClass }]);

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgCreateEntity",
    value: ixo.entity.v1beta1.MsgCreateEntity.fromPartial({
      entityType: entity.entityType,
      entityStatus: 0,
      controller: [did],
      context,
      alsoKnownAs: entity.alsoKnownAs,
      service: entity.service.map((s) =>
        ixo.iid.v1beta1.Service.fromPartial(s)
      ),
      // verification: entity.verification.map((v) =>
      //   ixo.iid.v1beta1.Verification.fromPartial({
      //     relationships: v.relationships,
      //     method: ixo.iid.v1beta1.VerificationMethod.fromPartial(v.method),
      //   })
      // ),
      // since no groups at time of run adding creators keys as verification methods
      verification: createIidVerificationMethods({
        did,
        pubkey: myPubKey,
        address: myAddress,
        controller: did,
        type: keyType,
      }),
      linkedResource: linkedResources.concat(
        entity.linkedResources.map((r) =>
          ixo.iid.v1beta1.LinkedResource.fromPartial(r)
        )
      ),
      accordedRight: [],
      // linkedEntity: entity.groupAddresses.map((address) =>
      //   ixo.iid.v1beta1.LinkedEntity.fromPartial({
      //     id: `{id}#${address}`,
      //     type: "Group",
      //     relationship: "subsidiary",
      //     service: "",
      //   })
      // ),
      // since no groups at time of run no linkedEntities
      linkedEntity: [],
      ownerDid: did,
      ownerAddress: myAddress,
      relayerNode: entity.relayerNode || did,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const TransferEntity = async (
  entityDid: string,
  recipientDid: string,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = getUser(signer);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgTransferEntity",
    value: ixo.entity.v1beta1.MsgTransferEntity.fromPartial({
      id: entityDid,
      ownerDid: did,
      ownerAddress: myAddress,
      recipientDid,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
