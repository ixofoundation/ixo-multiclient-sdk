import {
  createAgentIidContext,
  createIidVerificationMethods,
} from "../../../src/messages/iid";
import { createClient, getUser, ixo, utils } from "../../helpers/common";
import { fee, getFee, keyType, WalletUsers } from "../../helpers/constants";
import { SetupDaoConstantFields } from "../impacts/constants";
import { dids } from "../constants";
import base58 from "bs58";
import { LinkedClaimUploaded, LinkedResourcesUploaded } from "../helpers";

export const CreateSupamotoAssetCollection = async (
  entity: SetupDaoConstantFields["entity"],
  linkedResourcesUploaded: LinkedResourcesUploaded,
  linkedClaimsUploaded: LinkedClaimUploaded,
  addEdKeys = false,
  endDate?: string
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

  const linkedClaims = linkedClaimsUploaded.map(
    ({ name, cid, type, description, storage }) =>
      ixo.iid.v1beta1.LinkedClaim.fromPartial({
        id: `{id}#${name}`,
        type,
        description,
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

  const verification = createIidVerificationMethods({
    did,
    pubkey: myPubKey,
    address: myAddress,
    controller: did,
    type: keyType,
  });

  // Add ed keys user to verification method for verification of credentials
  if (addEdKeys) {
    const edPubKey = (await getUser(WalletUsers.alice).getAccounts())[0].pubkey;
    const pubkeyBase58 = base58.encode(edPubKey);

    verification.push(
      ixo.iid.v1beta1.Verification.fromPartial({
        relationships: ["attestation"],
        method: ixo.iid.v1beta1.VerificationMethod.fromPartial({
          id: did + "#" + pubkeyBase58,
          type: "Ed25519VerificationKey2018",
          publicKeyBase58: pubkeyBase58,
          controller: "{id}",
        }),
      })
    );
  }

  const message = {
    typeUrl: "/ixo.entity.v1beta1.MsgCreateEntity",
    value: ixo.entity.v1beta1.MsgCreateEntity.fromPartial({
      entityType: entity.entityType,
      entityStatus: 0,
      controller: [did],
      context,
      alsoKnownAs: entity.alsoKnownAs,
      startDate: utils.proto.toTimestamp(new Date()),
      service: entity.service.map((s) =>
        ixo.iid.v1beta1.Service.fromPartial(s)
      ),
      verification: verification,
      linkedResource: linkedResources.concat(
        entity.linkedResources.map((r) =>
          ixo.iid.v1beta1.LinkedResource.fromPartial(r)
        )
      ),
      accordedRight: [
        ixo.iid.v1beta1.AccordedRight.fromPartial({
          id: "{id}#mintNFT",
          type: "capability/createEntity",
          mechanism: "x/entity",
          message: "MsgCreateEntity",
          service: "#ixo",
        }),
        ixo.iid.v1beta1.AccordedRight.fromPartial({
          id: "{id}#carbon-claim",
          type: "capability/attest",
          mechanism: "x/claims",
          message: "MsgSubmitClaim",
          service: "#ixo",
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
        ixo.iid.v1beta1.AccordedRight.fromPartial({
          id: "{id}#view",
          type: "capability/access",
          mechanism: "zcap",
          service: "emerging",
        }),
        ixo.iid.v1beta1.AccordedRight.fromPartial({
          id: "{id}#mintCARBON",
          type: "capability/mintToken",
          mechanism: "x/token",
          message: "MsgMintToken",
          service: "ixo",
        }),
      ],
      linkedEntity: [
        ixo.iid.v1beta1.LinkedEntity.fromPartial({
          id: dids.ecsProject,
          type: "project",
          relationship: "collection",
          service: "ixo",
        }),
        ixo.iid.v1beta1.LinkedEntity.fromPartial({
          id: dids.prospectOracle,
          type: "oracle",
          relationship: "verifies",
          service: "ixo",
        }),
        ixo.iid.v1beta1.LinkedEntity.fromPartial({
          id: dids.carbonOracle,
          type: "oracle",
          relationship: "verifies",
          service: "ixo",
        }),
        ixo.iid.v1beta1.LinkedEntity.fromPartial({
          id: dids.ecsDao,
          type: "dao",
          relationship: "mints",
          service: "ixo",
        }),
      ],
      linkedClaim: linkedClaims,
      ownerDid: did,
      ownerAddress: myAddress,
      relayerNode: entity.relayerNode || did,
    }),
  };
  if (endDate) {
    message.value.endDate = utils.proto.toTimestamp(new Date(endDate));
  }

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
      // endDate: utils.proto.toTimestamp(new Date("2024-07-31T23:59:59Z")),
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
            "ipfs:bafkreigsemewlm4ihwnuxbbironfvex56o5k6ho5hdmcacvrtybpqlhxne",
          proof: "bafkreigsemewlm4ihwnuxbbironfvex56o5k6ho5hdmcacvrtybpqlhxne",
          encrypted: "false",
          right: "",
        },
        {
          id: `{id}#profile`,
          type: "Settings",
          description: "Profile",
          mediaType: "application/ld+json",
          serviceEndpoint:
            "ipfs:bafkreihavbzy2nugfl7qoxrmpcn7nwlmwrohoxocxzugvjxha575de5jde",
          proof: "bafkreihavbzy2nugfl7qoxrmpcn7nwlmwrohoxocxzugvjxha575de5jde",
          encrypted: "false",
          right: "",
        },
      ],
      accordedRight: [],
      linkedEntity: [
        ixo.iid.v1beta1.LinkedEntity.fromPartial({
          id: dids.ai4gCollection,
          type: "collection",
          relationship: "instantiation",
          service: "ixo",
        }),
      ],
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
