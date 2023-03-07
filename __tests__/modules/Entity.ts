import {
  createAgentIidContext,
  createIidVerificationMethods,
} from "../../src/messages/iid";
import {
  addDays,
  cosmos,
  createClient,
  getUser,
  ixo,
  queryClient,
  utils,
} from "../helpers/common";
import { fee, keyType, WalletUsers } from "../helpers/constants";

export const CreateEntity = async (
  entityType: string = "asset",
  context?: [{ key: string; val: string }],
  relayerNode: WalletUsers = WalletUsers.tester,
  signer: WalletUsers = WalletUsers.tester
) => {
  const client = await createClient(getUser(signer));

  const tester = getUser(signer);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const myPubKey = account.pubkey;
  const did = tester.did;

  const relayerNodeDid = getUser(relayerNode).did;

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
      relayerNode: relayerNodeDid,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

type CreateEntityAssetSupamotoParams = {
  inheritEntityDid: string;
  profile: string;
  page: string;
  creator: string;
  administrator: string;
  tags: string;
  claims: string;
  tokenMetadata: string;
  projectCert: string;
  oracle: string;
};
export const CreateEntityAssetSupamoto = async (
  p: CreateEntityAssetSupamotoParams
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const myPubKey = account.pubkey;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgCreateEntity",
    value: ixo.entity.v1beta1.MsgCreateEntity.fromPartial({
      entityType: "asset/collection",
      entityStatus: 0,
      controller: [did],
      context: createAgentIidContext([
        { key: "class", val: p.inheritEntityDid },
      ]),
      verification: createIidVerificationMethods({
        did,
        pubkey: myPubKey,
        address: myAddress,
        controller: did,
        type: keyType,
      }),
      service: [
        ixo.iid.v1beta1.Service.fromPartial({
          id: "{id}#cellnode-pandora",
          type: "cellnode",
          serviceEndpoint: "https://devnet-cellnode.ixo.earth/",
        }),
        ixo.iid.v1beta1.Service.fromPartial({
          id: "{id}#ixo",
          type: "chainService",
          serviceEndpoint:
            "https://github.com/cosmos/chain-registry/blob/master/ixo/chain.json?rpc/",
        }),
        ixo.iid.v1beta1.Service.fromPartial({
          id: "{id}#supamoto",
          type: "linkedDomains",
          serviceEndpoint: "https://app.emerging.eco/collection/?id=",
        }),
        ixo.iid.v1beta1.Service.fromPartial({
          id: "{id}#dashboard",
          type: "linkedDomains",
          serviceEndpoint: "https://supamoto.jambo.earth/?id=",
        }),
      ],
      linkedResource: [
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#profile",
          type: "Settings",
          description: "Profile",
          mediaType: "application/ld+json",
          serviceEndpoint: p.profile,
          proof: p.profile.split(".")[0].split("/")[2],
          encrypted: "false",
          right: "",
        }),
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#page",
          type: "Settings",
          description: "Page",
          mediaType: "application/ld+json",
          serviceEndpoint: `#cellnode-pandora/public/${p.page}`,
          proof: p.page,
          encrypted: "false",
          right: "",
        }),
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#creator",
          type: "verifiableCredential",
          description: "Creator",
          mediaType: "application/ld+json",
          serviceEndpoint: `#cellnode-pandora/public/${p.creator}`,
          proof: p.creator,
          encrypted: "false",
          right: "",
        }),
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#administrator",
          type: "VerifiableCredential",
          description: "Administrator",
          mediaType: "application/ld+json",
          serviceEndpoint: `#cellnode-pandora/public/${p.administrator}`,
          proof: p.administrator,
          encrypted: "false",
          right: "",
        }),
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#tags",
          type: "Settings",
          description: "Tags",
          mediaType: "application/ld+json",
          serviceEndpoint: `#cellnode-pandora/public/${p.tags}`,
          proof: p.tags,
          encrypted: "false",
          right: "",
        }),
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#claims",
          type: "Settings",
          description: "Claims",
          mediaType: "application/ld+json",
          serviceEndpoint: `#cellnode-pandora/public/${p.claims}`,
          proof: p.claims,
          encrypted: "false",
          right: "",
        }),
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#token",
          type: "TokenMetadata",
          description: "Impact Token",
          mediaType: "application/json",
          serviceEndpoint: p.tokenMetadata,
          proof: p.tokenMetadata.split(".")[0].split("/")[2],
          encrypted: "false",
          right: "",
        }),
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#project-credential",
          type: "VerifiableCredential",
          description: "Project Certificate",
          mediaType: "application/ld+json",
          serviceEndpoint: p.projectCert,
          proof: p.projectCert.split(".")[0].split("/")[2],
          encrypted: "false",
          right: "",
        }),
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#collection-dashboard",
          type: "WebDashboard",
          description: "Collection Dashboard",
          mediaType: "application/html",
          serviceEndpoint: "#dashboard-collection",
          proof: "",
          encrypted: "false",
          right: "#apitoken",
        }),
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#asset-dashboard",
          type: "WebDashboard",
          description: "SupaMoto Dashboard",
          mediaType: "application/html",
          serviceEndpoint: "#dashboard-supamoto",
          proof: "",
          encrypted: "false",
          right: "#apitoken",
        }),
      ],
      accordedRight: [
        ixo.iid.v1beta1.AccordedRight.fromPartial({
          id: "{id}#mintNFT",
          type: "capability/mint",
          mechanism: "cw721",
          message: "msgMintNFT",
          service: "#ixo",
        }),
        ixo.iid.v1beta1.AccordedRight.fromPartial({
          id: "{id}#carbon-claim",
          type: "capability/attest",
          mechanism: "x/claims",
          message: "msgSubmitClaim",
          service: "#cellnode",
        }),
        ixo.iid.v1beta1.AccordedRight.fromPartial({
          id: "{id}#legal",
          type: "legal",
          mechanism: "judicial",
        }),
        ixo.iid.v1beta1.AccordedRight.fromPartial({
          id: "{id}#apitoken",
          type: "AccessToken",
          mechanism: "authentication",
        }),
      ],
      linkedEntity: [
        ixo.iid.v1beta1.LinkedEntity.fromPartial({
          id: p.oracle,
          type: "oracle",
          relationship: "verifies",
          service: "",
        }),
      ],
      ownerDid: did,
      ownerAddress: myAddress,
      relayerNode: did,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const CreateEntityAssetSupamotoInstance = async (
  inheritEntityDid: string,
  deviceId: string,
  index: number,
  deviceCreds: string
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const myPubKey = account.pubkey;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgCreateEntity",
    value: ixo.entity.v1beta1.MsgCreateEntity.fromPartial({
      entityType: "asset",
      entityStatus: 0,
      context: createAgentIidContext([{ key: "class", val: inheritEntityDid }]),
      controller: [did],
      service: [],
      verification: createIidVerificationMethods({
        did,
        pubkey: myPubKey,
        address: myAddress,
        controller: did,
        type: keyType,
      }),
      alsoKnownAs: `{id}#${index}`,
      linkedResource: [
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{entity}#device-credential",
          type: "VerifiableCredential",
          description: "Certificate of Manufacture",
          mediaType: "application/ld+json",
          serviceEndpoint: deviceCreds,
          proof: deviceCreds.split(".")[0].split("/")[2],
          encrypted: "false",
          right: "",
        }),
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#asset-dashboard",
          type: "WebDashboard",
          description: "SupaMoto Dashboard",
          mediaType: "application/html",
          serviceEndpoint: `dashboard-supamoto:${deviceId}`,
          proof: "",
          encrypted: "false",
          right: "#apitoken",
        }),
      ],
      accordedRight: [
        ixo.iid.v1beta1.AccordedRight.fromPartial({
          id: "{did}#view",
          type: "capability/access",
          mechanism: "zcap",
          service: "",
        }),
      ],
      linkedEntity: [
        ixo.iid.v1beta1.LinkedEntity.fromPartial({
          id: "",
          type: "",
          relationship: "",
        }),
      ],
      ownerDid: did,
      ownerAddress: myAddress,
      relayerNode: did,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const TransferEntity = async (
  signer: WalletUsers = WalletUsers.tester,
  entityDid: string
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
      recipientDid: alice.did,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const UpdateEntity = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgUpdateEntity",
    value: ixo.entity.v1beta1.MsgUpdateEntity.fromPartial({
      entityStatus: 1,
      controllerDid: did,
      controllerAddress: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const UpdateEntityVerified = async (
  signer: WalletUsers = WalletUsers.tester,
  entityDid: string
) => {
  const client = await createClient(getUser(signer));

  const tester = getUser(signer);
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgUpdateEntityVerified",
    value: ixo.entity.v1beta1.MsgUpdateEntityVerified.fromPartial({
      id: entityDid,
      entityVerified: true,
      relayerNodeDid: tester.did,
      relayerNodeAddress: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
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
              msg: "/cosmos.gov.v1beta1.MsgVote",
            })
          ).finish(),
        },
        // authorization: {
        //   typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
        //   value: cosmos.bank.v1beta1.SendAuthorization.encode(
        //     cosmos.bank.v1beta1.SendAuthorization.fromPartial({
        //       spendLimit: [
        //         cosmos.base.v1beta1.Coin.fromPartial({
        //           amount: "10000000",
        //           denom: "uixo",
        //         }),
        //       ],
        //     })
        //   ).finish(),
        // },
        expiration: utils.proto.toTimestamp(addDays(new Date(), 365)),
      }),
    }),
  };

  const response = await client.signAndBroadcast(tester, [message], fee);
  return response;
};
