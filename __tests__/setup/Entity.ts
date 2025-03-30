import {
  createAgentIidContext,
  createIidVerificationMethods,
} from "../../src/messages/iid";
import {
  createClient,
  customMessages,
  getUser,
  ixo,
  utils,
} from "../helpers/common";
import { fee, getFee, keyType, WalletUsers } from "../helpers/constants";
import { SetupDaoConstantFields } from "./impacts/constants";
import { SetupClassConstants } from "./classes/constants";
import { dids } from "./constants";
import base58 from "bs58";
import { LinkedClaimUploaded, LinkedResourcesUploaded } from "./helpers";

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

export const CreateEntity = async (
  entity: SetupDaoConstantFields["entity"],
  linkedResourcesUploaded: LinkedResourcesUploaded,
  addEdKeys = false
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

  const verification = createIidVerificationMethods({
    did,
    pubkey: myPubKey,
    address: myAddress,
    controller: did,
    type: keyType,
  });

  // Add ed keys user to verification method for verification of credentials
  if (addEdKeys) {
    const edPubKey = (await getUser(WalletUsers.alice, "ed").getAccounts())[0]
      .pubkey;
    const pubkeyBase58 = base58.encode(edPubKey);

    verification.push(
      ixo.iid.v1beta1.Verification.fromPartial({
        relationships: ["assertionMethod"],
        method: ixo.iid.v1beta1.VerificationMethod.fromPartial({
          id: "{id}#" + pubkeyBase58,
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
      verification: verification,
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
      linkedEntity: entity.linkedEntity
        ? entity.linkedEntity.map((le) =>
            ixo.iid.v1beta1.LinkedEntity.fromPartial(le)
          )
        : undefined,
      ownerDid: did,
      startDate: utils.proto.toTimestamp(new Date()),
      ownerAddress: myAddress,
      relayerNode: entity.relayerNode || did,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const CreateSupamotoAssetCollection = async (
  entity: SetupDaoConstantFields["entity"],
  linkedResourcesUploaded: LinkedResourcesUploaded,
  linkedClaimsUploaded: LinkedClaimUploaded,
  addEdKeys = false
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
        relationships: ["authentication"],
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

export const AddVerification = async (
  entityId: string,
  address: string,
  accountUser?: WalletUsers,
  relationships: string[] = ["assertionMethod"],
  legacyDidController = false
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  let accountUserUser;
  let accountUserAccount;
  let accountUserAddress;
  let accountUserDid;
  if (accountUser) {
    accountUserUser = getUser(accountUser);
    accountUserAccount = (await accountUserUser.getAccounts())[0];
    accountUserAddress = accountUserAccount.address;
    accountUserDid = accountUserUser.did;
  }
  let methodId = accountUserAddress
    ? `${entityId}#${accountUserAddress}`
    : entityId;

  // override accountUserDid with old did structure
  if (legacyDidController) {
    accountUserDid = utils.did.generateSecpDidLegacy(accountUserAccount.pubkey);
  }

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgAddVerification",
    value: ixo.iid.v1beta1.MsgAddVerification.fromPartial({
      id: entityId,
      verification: ixo.iid.v1beta1.Verification.fromPartial({
        relationships: relationships,
        method: ixo.iid.v1beta1.VerificationMethod.fromPartial({
          id: methodId,
          type: "CosmosAccountAddress",
          blockchainAccountID: accountUserAddress || address,
          controller: accountUserDid || entityId,
        }),
      }),
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const AddEdKeysVerification = async (
  entityId: string,
  accountUser = WalletUsers.alice
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  // Add ed keys user to verification method for verification of credentials
  const edUser = getUser(accountUser || undefined, "ed");
  const edAccount = (await edUser.getAccounts())[0];
  const pubkeyBase58 = base58.encode(edAccount.pubkey);
  const did = edUser.did;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgAddVerification",
    value: ixo.iid.v1beta1.MsgAddVerification.fromPartial({
      id: entityId,
      verification: ixo.iid.v1beta1.Verification.fromPartial({
        relationships: ["authentication", "assertionMethod"],
        method: ixo.iid.v1beta1.VerificationMethod.fromPartial({
          id: did + "#" + pubkeyBase58,
          type: "Ed25519VerificationKey2018",
          publicKeyBase58: pubkeyBase58,
          controller: "{id}",
        }),
      }),
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const CreateEntityAssetAquaminerInstance = async (
  inheritEntityDid: string,
  entities: {
    deviceId: string | number;
    index: number;
    alsoKnownAs: string;
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
      alsoKnownAs: entity.alsoKnownAs,
      linkedResource: [
        {
          id: `{id}#profile`,
          type: "Settings",
          description: "Profile",
          mediaType: "application/ld+json",
          serviceEndpoint:
            "cellnode:bafkreibtzbsecftnodq4do5sfzz77kst6cseqy3nob3nmfhudws4rweqdi",
          proof: "bafkreibtzbsecftnodq4do5sfzz77kst6cseqy3nob3nmfhudws4rweqdi",
          encrypted: "false",
          right: "",
        },
        {
          id: `{id}#page`,
          type: "Settings",
          description: "Page",
          mediaType: "application/ld+json",
          serviceEndpoint:
            "cellnode:bafkreig3d5ds7ah2lvk5p5fw6txxxi4mn5mvyzicihqhrduxmy6c35n67a",
          proof: "bafkreig3d5ds7ah2lvk5p5fw6txxxi4mn5mvyzicihqhrduxmy6c35n67a",
          encrypted: "false",
          right: "",
        },
        {
          id: `{id}#tags`,
          type: "Settings",
          description: "Tags",
          mediaType: "application/ld+json",
          serviceEndpoint:
            "cellnode:bafkreig2ifjtesfb2y2dgic3gzdioojrqknwowmx2b7puib6wri4ti6pky",
          proof: "bafkreig2ifjtesfb2y2dgic3gzdioojrqknwowmx2b7puib6wri4ti6pky",
          encrypted: "false",
          right: "",
        },
      ],
      accordedRight: [],
      linkedEntity: [
        ixo.iid.v1beta1.LinkedEntity.fromPartial({
          id: dids.aquaminerCollection,
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
