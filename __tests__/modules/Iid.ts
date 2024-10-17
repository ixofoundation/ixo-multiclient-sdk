import base58 from "bs58";
import {
  KeyTypes,
  createAgentIidContext,
  createIidVerificationMethods,
} from "../../src/messages/iid";
import { getUser, customMessages, createClient, ixo } from "../helpers/common";
import {
  constants,
  fee,
  getFee,
  keyType,
  WalletUsers,
} from "../helpers/constants";
import {
  LinkedResource,
  LinkedEntity,
  Context,
  LinkedClaim,
  Service,
  VerificationMethod,
  AccordedRight,
} from "../../src/codegen/ixo/iid/v1beta1/types";

export const CreateIidDoc = async (
  signer: WalletUsers = WalletUsers.tester,
  userToAddToVerifications?: WalletUsers
) => {
  const client = await createClient(getUser(signer));

  const user = getUser(signer);
  const account = (await user.getAccounts())[0];
  const myAddress = account.address;
  const myPubKey = account.pubkey;
  const did = user.did;

  let verifications = createIidVerificationMethods({
    did,
    pubkey: myPubKey,
    address: myAddress,
    controller: did,
    type: keyType,
  });

  if (userToAddToVerifications) {
    const eUser = getUser(userToAddToVerifications);
    const eUserAccount = (await eUser.getAccounts())[0];
    const eUserAddress = eUserAccount.address;
    const eUserPubKey = eUserAccount.pubkey;
    const eUserdid = eUser.did;

    verifications.push(
      ...createIidVerificationMethods({
        did: eUserdid,
        pubkey: eUserPubKey,
        address: eUserAddress,
        controller: eUserdid,
        type: keyType,
      })
    );
  }

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgCreateIidDocument",
    value: ixo.iid.v1beta1.MsgCreateIidDocument.fromPartial({
      context: createAgentIidContext(),
      id: did,
      alsoKnownAs: "user",
      verifications,
      signer: myAddress,
      controllers: [did],
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

// export const UpdateIidDoc = async () => {
//   const client = await createClient();

//   const tester = getUser();
//   const account = (await tester.getAccounts())[0];
//   const myAddress = account.address;
//   const did = tester.did;

//   const alice = getUser(WalletUsers.alice);

//   const message = {
//     typeUrl: "/ixo.iid.v1beta1.MsgUpdateIidDocument",
//     value: ixo.iid.v1beta1.MsgUpdateIidDocument.fromPartial({
//       doc: ixo.iid.v1beta1.IidDocument.fromPartial({
//         id: did,
//         controller: [alice.did],
//       }),
//       signer: myAddress,
//     }),
//   };

//   const response = await client.signAndBroadcast(myAddress, [message], fee);
//   return response;
// };

export const AddIidContext = async (did?: string, context?: Context) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const userDid = tester.did;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgAddIidContext",
    value: ixo.iid.v1beta1.MsgAddIidContext.fromPartial({
      id: did || userDid,
      context:
        context ||
        ixo.iid.v1beta1.Context.fromPartial({
          key: constants.contextKey,
          val: "val",
        }),
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const DeleteIidContext = async (did?: string, key?: string) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const userDid = tester.did;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgDeleteIidContext",
    value: ixo.iid.v1beta1.MsgDeleteIidContext.fromPartial({
      id: did || userDid,
      contextKey: key || constants.contextKey,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

/**
 * @param relationships list with values: 'authentication' | 'assertionMethod' | 'keyAgreement' | 'capabilityInvocation' | 'capabilityDelegation'
 */
export const AddVerification = async (
  relationships: string[] = ["authentication", "assertionMethod"],
  did?: string,
  keyType: KeyTypes = "ed",
  userToAdd: WalletUsers = WalletUsers.tester,
  addBlockchainAccountId = false
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const userDid = tester.did;

  const userToAddAccount = getUser(userToAdd, keyType);
  const userToAddPubkey = (await userToAddAccount.getAccounts())[0].pubkey;
  const userToAddAddress = (await userToAddAccount.getAccounts())[0].address;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgAddVerification",
    value: ixo.iid.v1beta1.MsgAddVerification.fromPartial({
      id: did ?? userDid,
      verification: ixo.iid.v1beta1.Verification.fromPartial({
        relationships: relationships,
        method: addBlockchainAccountId
          ? ixo.iid.v1beta1.VerificationMethod.fromPartial({
              id: did + "#" + userToAddAddress,
              type: "CosmosAccountAddress",
              blockchainAccountID: userToAddAddress,
              controller: userToAddAccount.did,
            })
          : customMessages.iid.createVerificationMethod(
              userToAddAccount.did,
              userToAddPubkey,
              userToAddAccount.did,
              keyType
            ),
        // method: ixo.iid.v1beta1.VerificationMethod.fromPartial({
        //   id:
        //     "{id}#" +
        //     "ixo1svn6synsq98ynnxajenrtejjxv5rp0p9jnvhxhtjwfjm3kf5h4lq2hsyvd",
        //   blockchainAccountID:
        //     "ixo1svn6synsq98ynnxajenrtejjxv5rp0p9jnvhxhtjwfjm3kf5h4lq2hsyvd",
        //   type: "CosmosAccountAddress",
        //   controller: "{id}",
        // }),
      }),
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

/**
 * @param relationships list with values: 'authentication' | 'assertionMethod' | 'keyAgreement' | 'capabilityInvocation' | 'capabilityDelegation'
 */
export const SetVerificationRelationships = async (
  relationships: string[] = ["assertionMethod"]
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  // const alice = getUser(WalletUsers.alice);
  // const pubkeyBase58 = base58.encode((await alice.getAccounts())[0].pubkey);
  const userEd = getUser(WalletUsers.tester, "ed");
  const accountEd = (await userEd.getAccounts())[0];
  const myPubkey = base58.encode(accountEd.pubkey);

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgSetVerificationRelationships",
    value: ixo.iid.v1beta1.MsgSetVerificationRelationships.fromPartial({
      id: did,
      methodId: userEd.did + "#" + myPubkey,
      relationships: relationships,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const RevokeVerification = async (did?: string, methodId?: string) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const userDid = tester.did;

  // const alice = getUser(WalletUsers.alice);
  // const pubkeyBase58 = base58.encode((await alice.getAccounts())[0].pubkey);
  const userEd = getUser(WalletUsers.tester, "ed");
  const accountEd = (await userEd.getAccounts())[0];
  const myPubkey = base58.encode(accountEd.pubkey);

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgRevokeVerification",
    value: ixo.iid.v1beta1.MsgRevokeVerification.fromPartial({
      id: did ?? userDid,
      methodId: methodId ?? userEd.did + "#" + myPubkey,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const AddAccordedRight = async (did?: string, right?: AccordedRight) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const userDid = tester.did;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgAddAccordedRight",
    value: ixo.iid.v1beta1.MsgAddAccordedRight.fromPartial({
      id: did || userDid,
      accordedRight:
        right ||
        ixo.iid.v1beta1.AccordedRight.fromPartial({
          type: "type",
          id: constants.accordedRightId,
          mechanism: "mechanism",
          message: "message",
          service: "service",
        }),
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const DeleteAccordedRight = async (did?: string, rightId?: string) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const userDid = tester.did;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgDeleteAccordedRight",
    value: ixo.iid.v1beta1.MsgDeleteAccordedRight.fromPartial({
      id: did || userDid,
      rightId: rightId || constants.accordedRightId,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const AddController = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const bob = getUser(WalletUsers.bob);

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgAddController",
    value: ixo.iid.v1beta1.MsgAddController.fromPartial({
      id: did,
      controllerDid: bob.did,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const DeleteController = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const bob = getUser(WalletUsers.bob);

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgDeleteController",
    value: ixo.iid.v1beta1.MsgDeleteController.fromPartial({
      id: did,
      controllerDid: bob.did,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const AddLinkedEntity = async (
  did?: string,
  linkedEntity?: LinkedEntity
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const userDid = tester.did;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgAddLinkedEntity",
    value: ixo.iid.v1beta1.MsgAddLinkedEntity.fromPartial({
      id: did || userDid,
      linkedEntity:
        linkedEntity ||
        ixo.iid.v1beta1.LinkedEntity.fromPartial({
          id: constants.linkedEntityId,
        }),
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const DeleteLinkedEntity = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgDeleteLinkedEntity",
    value: ixo.iid.v1beta1.MsgDeleteLinkedEntity.fromPartial({
      id: did,
      entityId: constants.linkedEntityId,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const AddLinkedResource = async (
  did?: string,
  linkedResource?: LinkedResource
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const userDid = tester.did;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgAddLinkedResource",
    value: ixo.iid.v1beta1.MsgAddLinkedResource.fromPartial({
      id: did || userDid,
      linkedResource:
        linkedResource ||
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: constants.linkedResourceId,
          description: "Description",
        }),
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const DeleteLinkedResource = async (
  did?: string,
  resourceId?: string
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const userDid = tester.did;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgDeleteLinkedResource",
    value: ixo.iid.v1beta1.MsgDeleteLinkedResource.fromPartial({
      id: did || userDid,
      resourceId: resourceId || constants.linkedResourceId,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const AddLinkedResources = async (
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

export const DeleteLinkedResources = async (
  data: { did: string; resourceId: string }[]
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const messages = data.map((d) => ({
    typeUrl: "/ixo.iid.v1beta1.MsgDeleteLinkedResource",
    value: ixo.iid.v1beta1.MsgDeleteLinkedResource.fromPartial({
      id: d.did,
      resourceId: d.resourceId,
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

export const AddLinkedClaim = async (
  did?: string,
  linkedClaim?: LinkedClaim
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const userDid = tester.did;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgAddLinkedClaim",
    value: ixo.iid.v1beta1.MsgAddLinkedClaim.fromPartial({
      id: did || userDid,
      linkedClaim:
        linkedClaim ||
        ixo.iid.v1beta1.LinkedClaim.fromPartial({
          id: constants.linkedClaimId,
          description: "Description",
        }),
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const DeleteLinkedClaim = async (did?: string, claimId?: string) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const userDid = tester.did;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgDeleteLinkedClaim",
    value: ixo.iid.v1beta1.MsgDeleteLinkedClaim.fromPartial({
      id: did || userDid,
      claimId: claimId || constants.linkedClaimId,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const AddService = async (did?: string, service?: Service) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const userDid = tester.did;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgAddService",
    value: ixo.iid.v1beta1.MsgAddService.fromPartial({
      id: did || userDid,
      serviceData:
        service ||
        ixo.iid.v1beta1.Service.fromPartial({
          id: constants.serviceId,
          serviceEndpoint: "https://ixo.world",
          type: "awesome",
        }),
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const DeleteService = async (did?: string, serviceId?: string) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const userDid = tester.did;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgDeleteService",
    value: ixo.iid.v1beta1.MsgDeleteService.fromPartial({
      id: did || userDid,
      serviceId: serviceId || constants.serviceId,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
