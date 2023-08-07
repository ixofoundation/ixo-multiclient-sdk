import { MsgUpdateEntity } from "../../src/codegen/ixo/entity/v1beta1/tx";
import {
  createAgentIidContext,
  createIidVerificationMethods,
} from "../../src/messages/iid";
import { Timestamp } from "../../src/utils/proto";
import {
  addDays,
  cosmos,
  createClient,
  getUser,
  ixo,
  queryClient,
  utils,
} from "../helpers/common";
import { fee, getFee, keyType, WalletUsers } from "../helpers/constants";

export const CreateEntity = async (
  entityType: string = "asset",
  context?: [{ key: string; val: string }],
  relayerNodeDid = "",
  relayerNode: WalletUsers = WalletUsers.tester,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = getUser(signer);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const myPubKey = account.pubkey;
  const did = tester.did;

  const relayerNodeDidLocal = relayerNodeDid || getUser(relayerNode).did;

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgCreateEntity",
    value: ixo.entity.v1beta1.MsgCreateEntity.fromPartial({
      entityType: entityType,
      context: createAgentIidContext(context),
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
      relayerNode: relayerNodeDidLocal,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const CreateEntityAssetSupamotoInstance = async (
  inheritEntityDid: string,
  entities: {
    deviceId: string | number;
    index: number;
    deviceCreds: string;
  }[],
  relayerDid?: string
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const myPubKey = account.pubkey;
  const did = tester.did;

  const message = entities.map((entity) => ({
    typeUrl: "/ixo.entity.v1beta1.MsgCreateEntity",
    value: ixo.entity.v1beta1.MsgCreateEntity.fromPartial({
      entityType: "asset/device",
      entityStatus: 0,
      context: createAgentIidContext([{ key: "class", val: inheritEntityDid }]),
      controller: [did],
      service: [],
      startDate: utils.proto.toTimestamp(new Date()),
      verification: createIidVerificationMethods({
        did,
        pubkey: myPubKey,
        address: myAddress,
        controller: did,
        type: keyType,
      }),
      alsoKnownAs: `{id}#${entity.index}`,
      linkedResource: [
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#deviceCredential",
          type: "VerifiableCredential",
          description: "Certificate of Manufacture",
          mediaType: "application/ld+json",
          serviceEndpoint: `ipfs:${entity.deviceCreds}`,
          proof: entity.deviceCreds,
          encrypted: "false",
          right: "",
        }),
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#assetDashboard",
          type: "WebDashboard",
          description: "SupaMoto Dashboard",
          mediaType: "application/html",
          serviceEndpoint: `emerging:/devices/${entity.deviceId}`,
          proof: "",
          encrypted: "false",
          right: "#apitoken",
        }),
        {
          id: `{id}#token`,
          type: "TokenMetadata",
          description: "Impact Token",
          mediaType: "application/json",
          serviceEndpoint:
            "ipfs:bafkreid2shatt7tw7hs2b7j3eip7l52xa24xwtvnc2doj22g67fosvfize",
          proof: "bafkreid2shatt7tw7hs2b7j3eip7l52xa24xwtvnc2doj22g67fosvfize",
          encrypted: "false",
          right: "",
        },
        {
          id: `{id}#profile`,
          type: "Settings",
          description: "Profile",
          mediaType: "application/ld+json",
          serviceEndpoint:
            "ipfs:bafkreigx7val5mfeghm636jcso6kt7wqpieh7h7hgdkcn64xxyy7ihp2q4",
          proof: "bafkreigx7val5mfeghm636jcso6kt7wqpieh7h7hgdkcn64xxyy7ihp2q4",
          encrypted: "false",
          right: "",
        },
      ],
      accordedRight: [],
      linkedEntity: [],
      ownerDid: did,
      ownerAddress: myAddress,
      relayerNode: relayerDid || did,
    }),
  }));

  const response = await client.signAndBroadcast(
    myAddress,
    message,
    getFee(message.length)
  );
  return response;
};

export const TransferEntity = async (
  signer: WalletUsers = WalletUsers.tester,
  entityDid: string,
  recipientDid?: string
) => {
  const client = await createClient(getUser(signer));

  const tester = getUser(signer);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const alice = getUser(WalletUsers.alice);

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgTransferEntity",
    value: ixo.entity.v1beta1.MsgTransferEntity.fromPartial({
      id: entityDid,
      ownerDid: did,
      ownerAddress: myAddress,
      recipientDid: recipientDid || alice.did,
    }),
  };

  console.log({ myAddress });
  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const UpdateEntity = async (data: {
  id?: string;
  entityStatus?: number;
  startDate?: Timestamp;
  endDate?: Timestamp;
  credentials?: string[];
}) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const userDid = tester.did;

  const entity = await queryClient.ixo.entity.v1beta1.entity({
    id: data?.id || userDid,
  });
  if (!entity.entity) {
    throw new Error("Entity not found");
  }

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgUpdateEntity",
    value: ixo.entity.v1beta1.MsgUpdateEntity.fromPartial({
      id: data?.id || userDid,
      entityStatus: data?.entityStatus || entity.entity.status,
      startDate: data?.startDate || entity.entity.startDate,
      endDate: data?.endDate || entity.entity.endDate,
      credentials: data?.credentials || entity.entity.credentials,
      controllerDid: userDid,
      controllerAddress: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const UpdateEntityVerified = async (
  signer: WalletUsers = WalletUsers.tester,
  entityDids: string[],
  relayerDid?: string
) => {
  const client = await createClient(getUser(signer));

  const tester = getUser(signer);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const messages = entityDids.map((did) => ({
    typeUrl: "/ixo.entity.v1beta1.MsgUpdateEntityVerified",
    value: ixo.entity.v1beta1.MsgUpdateEntityVerified.fromPartial({
      id: did,
      entityVerified: true,
      relayerNodeDid: relayerDid || tester.did,
      relayerNodeAddress: myAddress,
    }),
  }));

  const response = await client.signAndBroadcast(
    myAddress,
    messages,
    getFee(messages.length)
  );
  return response;
};

export const CreateEntityAccount = async (
  entityDid: string,
  name = "name",
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgCreateEntityAccount",
    value: ixo.entity.v1beta1.MsgCreateEntityAccount.fromPartial({
      id: entityDid,
      ownerAddress: tester,
      name,
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};

export const GrantEntityAccountAuthz = async (
  entityDid: string,
  name = "name",
  grantee: WalletUsers = WalletUsers.alice,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = (await getUser(signer).getAccounts())[0].address;
  const granteeAddress = (await getUser(grantee).getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz",
    value: ixo.entity.v1beta1.MsgGrantEntityAccountAuthz.fromPartial({
      id: entityDid,
      ownerAddress: tester,
      name,
      granteeAddress,
      grant: cosmos.authz.v1beta1.Grant.fromPartial({
        authorization: {
          typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
          value: cosmos.authz.v1beta1.GenericAuthorization.encode(
            cosmos.authz.v1beta1.GenericAuthorization.fromPartial({
              msg: "/cosmos.gov.v1beta1.MsgSend",
            })
          ).finish(),
        },
        expiration: utils.proto.toTimestamp(addDays(new Date(), 1)),
      }),
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};
