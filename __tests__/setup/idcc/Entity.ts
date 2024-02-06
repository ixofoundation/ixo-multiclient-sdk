import {
  createAgentIidContext,
  createIidVerificationMethods,
} from "../../../src/messages/iid";
import {
  createClient,
  customMessages,
  getUser,
  ixo,
  utils,
} from "../../helpers/common";
import { fee, getFee, keyType, WalletUsers } from "../../helpers/constants";
import { SetupDaoConstantFields } from "./../impacts/constants";
import { SetupClassConstants } from "./../classes/constants";
import { chainNetwork, dids } from "./../constants";
import base58 from "bs58";
import { LinkedClaimUploaded, LinkedResourcesUploaded } from "./../helpers";
import { cellNodeChainMapping } from "../../../src/custom_queries/cellnode";
import { idcc_constants } from "./creds";
import { LinkedResource } from "../../../src/codegen/ixo/iid/v1beta1/types";

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
      startDate: utils.proto.toTimestamp(new Date()),
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

export const CreateEntityIDCCDao = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myPubKey = account.pubkey;
  const myAddress = account.address;
  const did = tester.did;

  const context = createAgentIidContext([{ key: "class", val: dids.daoClass }]);

  const verification = createIidVerificationMethods({
    did,
    pubkey: myPubKey,
    address: myAddress,
    controller: did,
    type: keyType,
  });

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgCreateEntity",
    value: ixo.entity.v1beta1.MsgCreateEntity.fromPartial({
      entityType: "dao",
      entityStatus: 0,
      controller: [did],
      context,
      alsoKnownAs: "",
      service: [
        {
          id: "{id}#cellnode",
          type: "Cellnode",
          serviceEndpoint: cellNodeChainMapping[chainNetwork],
        },
        {
          id: "{id}#ipfs",
          type: "Ipfs",
          serviceEndpoint: "https://ipfs.io/ipfs/",
        },
      ],
      // since no groups at time of run adding creators keys as verification methods
      verification: verification,
      linkedResource: [],
      accordedRight: [],
      // since no groups at time of run no linkedEntities
      linkedEntity: [],
      ownerDid: did,
      startDate: utils.proto.toTimestamp(new Date()),
      ownerAddress: myAddress,
      relayerNode: idcc_constants.idcc_dao,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const AddLinkedResource = async (
  data: { did: string; linkedResource: LinkedResource }[]
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const messages = data.map((d) => ({
    typeUrl: "/ixo.iid.v1beta1.MsgAddLinkedResource",
    value: ixo.iid.v1beta1.MsgAddLinkedResource.fromPartial({
      id: d.did,
      linkedResource: d.linkedResource,
      signer: myAddress,
    }),
  }));

  const response = await client.signAndBroadcast(
    myAddress,
    messages,
    getFee(messages.length)
  );
  return response;
};

export const CreateEntityIDCCProject = async (
  linkedResources: LinkedResource[],
  parentDao: string
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myPubKey = account.pubkey;
  const myAddress = account.address;
  const did = tester.did;

  const context = createAgentIidContext([{ key: "class", val: parentDao }]);

  const verification = createIidVerificationMethods({
    did,
    pubkey: myPubKey,
    address: myAddress,
    controller: did,
    type: keyType,
  });

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgCreateEntity",
    value: ixo.entity.v1beta1.MsgCreateEntity.fromPartial({
      entityType: "project",
      entityStatus: 0,
      controller: [did],
      context,
      alsoKnownAs: "",
      service: [
        {
          id: "{id}#cellnode",
          type: "Cellnode",
          serviceEndpoint: cellNodeChainMapping[chainNetwork],
        },
        {
          id: "{id}#ipfs",
          type: "Ipfs",
          serviceEndpoint: "https://ipfs.io/ipfs/",
        },
      ],
      // since no groups at time of run adding creators keys as verification methods
      verification: verification,
      linkedResource: linkedResources,
      accordedRight: [],
      // since no groups at time of run no linkedEntities
      linkedEntity: [
        {
          id: parentDao,
          type: "dao",
          relationship: "implementation",
          service: "ixo",
        },
      ],
      ownerDid: did,
      startDate: utils.proto.toTimestamp(new Date()),
      ownerAddress: myAddress,
      relayerNode: idcc_constants.idcc_dao,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
