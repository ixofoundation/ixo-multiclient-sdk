import { getUser, getVerificationMethod, createClient, ixo } from "./common";
import { constants, fee, WalletUsers } from "./constants";

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

  let verifications = [
    ixo.iid.Verification.fromPartial({
      relationships: ["authentication"],
      method: getVerificationMethod(did, myPubKey, did),
    }),
    ixo.iid.Verification.fromPartial({
      relationships: ["authentication"],
      method: getVerificationMethod(`${did}#${myAddress}`, myPubKey, did),
    }),
  ];

  if (userToAddToVerifications) {
    const eUser = getUser(userToAddToVerifications);
    const eUserAccount = (await eUser.getAccounts())[0];
    const eUserAddress = eUserAccount.address;
    const eUserPubKey = eUserAccount.pubkey;
    const eUserdid = eUser.did;

    verifications.push(
      ixo.iid.Verification.fromPartial({
        relationships: ["authentication"],
        method: getVerificationMethod(eUserdid, eUserPubKey, eUserdid),
      })
    );
    verifications.push(
      ixo.iid.Verification.fromPartial({
        relationships: ["authentication"],
        method: getVerificationMethod(
          `${eUserdid}#${eUserAddress}`,
          eUserPubKey,
          eUserdid
        ),
      })
    );
  }

  const message = {
    typeUrl: "/iid.MsgCreateIidDocument",
    value: ixo.iid.MsgCreateIidDocument.fromPartial({
      id: did,
      verifications,
      signer: myAddress,
      controllers: [did],
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const UpdateIidDoc = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const alice = getUser(WalletUsers.alice);

  const message = {
    typeUrl: "/iid.MsgUpdateIidDocument",
    value: ixo.iid.MsgUpdateIidDocument.fromPartial({
      doc: ixo.iid.IidDocument.fromPartial({
        id: did,
        controller: [alice.did],
      }),
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const UpdateIidMeta = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/iid.MsgUpdateIidMeta",
    value: ixo.iid.MsgUpdateIidMeta.fromPartial({
      id: did,
      meta: ixo.iid.IidMetadata.fromPartial({ versionId: "2" }),
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const AddIidContext = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/iid.MsgAddIidContext",
    value: ixo.iid.MsgAddIidContext.fromPartial({
      id: did,
      context: ixo.iid.Context.fromPartial({
        key: constants.contextKey,
        val: "val",
      }),
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const DeleteIidContext = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/iid.MsgDeleteIidContext",
    value: ixo.iid.MsgDeleteIidContext.fromPartial({
      id: did,
      contextKey: constants.contextKey,
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
  relationships: string[] = ["authentication"]
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const alice = getUser(WalletUsers.alice);
  const aliceAccount = (await alice.getAccounts())[0];

  const message = {
    typeUrl: "/iid.MsgAddVerification",
    value: ixo.iid.MsgAddVerification.fromPartial({
      id: did,
      verification: ixo.iid.Verification.fromPartial({
        relationships: relationships,
        method: getVerificationMethod(
          alice.did,
          aliceAccount.pubkey,
          alice.did
        ),
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
  relationships: string[] = ["authentication"]
) => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const alice = getUser(WalletUsers.alice);

  const message = {
    typeUrl: "/iid.MsgSetVerificationRelationships",
    value: ixo.iid.MsgSetVerificationRelationships.fromPartial({
      id: did,
      methodId: alice.did,
      relationships: relationships,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const RevokeVerification = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const alice = getUser(WalletUsers.alice);

  const message = {
    typeUrl: "/iid.MsgRevokeVerification",
    value: ixo.iid.MsgRevokeVerification.fromPartial({
      id: did,
      methodId: alice.did,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const AddAccordedRight = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const accordedRight = getUser(WalletUsers.accordedRight);

  const message = {
    typeUrl: "/iid.MsgAddAccordedRight",
    value: ixo.iid.MsgAddAccordedRight.fromPartial({
      id: accordedRight.did,
      accordedRight: ixo.iid.AccordedRight.fromPartial({
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

export const DeleteAccordedRight = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;

  const accordedRight = getUser(WalletUsers.accordedRight);

  const message = {
    typeUrl: "/iid.MsgDeleteAccordedRight",
    value: ixo.iid.MsgDeleteAccordedRight.fromPartial({
      id: accordedRight.did,
      rightId: constants.accordedRightId,
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
    typeUrl: "/iid.MsgAddController",
    value: ixo.iid.MsgAddController.fromPartial({
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
    typeUrl: "/iid.MsgDeleteController",
    value: ixo.iid.MsgDeleteController.fromPartial({
      id: did,
      controllerDid: bob.did,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const AddLinkedEntity = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/iid.MsgAddLinkedEntity",
    value: ixo.iid.MsgAddLinkedEntity.fromPartial({
      id: did,
      linkedEntity: ixo.iid.LinkedEntity.fromPartial({
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
    typeUrl: "/iid.MsgDeleteLinkedEntity",
    value: ixo.iid.MsgDeleteLinkedEntity.fromPartial({
      id: did,
      entityId: constants.linkedEntityId,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const AddLinkedResource = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/iid.MsgAddLinkedResource",
    value: ixo.iid.MsgAddLinkedResource.fromPartial({
      id: did,
      linkedResource: ixo.iid.LinkedResource.fromPartial({
        id: constants.linkedResourceId,
        description: "Description",
      }),
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const DeleteLinkedResource = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/iid.MsgDeleteLinkedResource",
    value: ixo.iid.MsgDeleteLinkedResource.fromPartial({
      id: did,
      resourceId: constants.linkedResourceId,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const AddService = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/iid.MsgAddService",
    value: ixo.iid.MsgAddService.fromPartial({
      id: did,
      serviceData: ixo.iid.Service.fromPartial({
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

export const DeleteService = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/iid.MsgDeleteService",
    value: ixo.iid.MsgDeleteService.fromPartial({
      id: did,
      serviceId: constants.serviceId,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
