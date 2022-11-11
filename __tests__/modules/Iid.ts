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
    ixo.iid.v1beta1.Verification.fromPartial({
      relationships: ["authentication"],
      method: getVerificationMethod(did, myPubKey, did),
    }),
    ixo.iid.v1beta1.Verification.fromPartial({
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
      ixo.iid.v1beta1.Verification.fromPartial({
        relationships: ["authentication"],
        method: getVerificationMethod(eUserdid, eUserPubKey, eUserdid),
      })
    );
    verifications.push(
      ixo.iid.v1beta1.Verification.fromPartial({
        relationships: ["authentication"],
        method: getVerificationMethod(
          `${eUserdid}#${eUserAddress}`,
          eUserPubKey,
          eUserdid
        ),
      })
    );
  }

  // const { createIidDocument } = ixo.iid.v1beta1.MessageComposer.withTypeUrl;
  // const message1 = createIidDocument({
  //   id: did,
  //   verifications: [
  //     {
  //       context: [],
  //       relationships: ["authentication"],
  //       method: getVerificationMethod(did, myPubKey, did),
  //     },
  //     {
  //       context: [],
  //       relationships: ["authentication"],
  //       method: getVerificationMethod(`${did}#${myAddress}`, myPubKey, did),
  //     },
  //   ],
  //   signer: myAddress,
  //   controllers: [did],
  //   context: [],
  //   services: [],
  //   linkedEntity: [],
  //   linkedResource: [],
  //   accordedRight: [],
  // });

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgCreateIidDocument",
    value: ixo.iid.v1beta1.MsgCreateIidDocument.fromPartial({
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
    typeUrl: "/ixo.iid.v1beta1.MsgUpdateIidDocument",
    value: ixo.iid.v1beta1.MsgUpdateIidDocument.fromPartial({
      doc: ixo.iid.v1beta1.IidDocument.fromPartial({
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
    typeUrl: "/ixo.iid.v1beta1.MsgUpdateIidMeta",
    value: ixo.iid.v1beta1.MsgUpdateIidMeta.fromPartial({
      id: did,
      meta: ixo.iid.v1beta1.IidMetadata.fromPartial({ versionId: "2" }),
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
    typeUrl: "/ixo.iid.v1beta1.MsgAddIidContext",
    value: ixo.iid.v1beta1.MsgAddIidContext.fromPartial({
      id: did,
      context: ixo.iid.v1beta1.Context.fromPartial({
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
    typeUrl: "/ixo.iid.v1beta1.MsgDeleteIidContext",
    value: ixo.iid.v1beta1.MsgDeleteIidContext.fromPartial({
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
    typeUrl: "/ixo.iid.v1beta1.MsgAddVerification",
    value: ixo.iid.v1beta1.MsgAddVerification.fromPartial({
      id: did,
      verification: ixo.iid.v1beta1.Verification.fromPartial({
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
    typeUrl: "/ixo.iid.v1beta1.MsgSetVerificationRelationships",
    value: ixo.iid.v1beta1.MsgSetVerificationRelationships.fromPartial({
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
    typeUrl: "/ixo.iid.v1beta1.MsgRevokeVerification",
    value: ixo.iid.v1beta1.MsgRevokeVerification.fromPartial({
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
    typeUrl: "/ixo.iid.v1beta1.MsgAddAccordedRight",
    value: ixo.iid.v1beta1.MsgAddAccordedRight.fromPartial({
      id: accordedRight.did,
      accordedRight: ixo.iid.v1beta1.AccordedRight.fromPartial({
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
    typeUrl: "/ixo.iid.v1beta1.MsgDeleteAccordedRight",
    value: ixo.iid.v1beta1.MsgDeleteAccordedRight.fromPartial({
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

export const AddLinkedEntity = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgAddLinkedEntity",
    value: ixo.iid.v1beta1.MsgAddLinkedEntity.fromPartial({
      id: did,
      linkedEntity: ixo.iid.v1beta1.LinkedEntity.fromPartial({
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

export const AddLinkedResource = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const message = {
    typeUrl: "/ixo.iid.v1beta1.MsgAddLinkedResource",
    value: ixo.iid.v1beta1.MsgAddLinkedResource.fromPartial({
      id: did,
      linkedResource: ixo.iid.v1beta1.LinkedResource.fromPartial({
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
    typeUrl: "/ixo.iid.v1beta1.MsgDeleteLinkedResource",
    value: ixo.iid.v1beta1.MsgDeleteLinkedResource.fromPartial({
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
    typeUrl: "/ixo.iid.v1beta1.MsgAddService",
    value: ixo.iid.v1beta1.MsgAddService.fromPartial({
      id: did,
      serviceData: ixo.iid.v1beta1.Service.fromPartial({
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
    typeUrl: "/ixo.iid.v1beta1.MsgDeleteService",
    value: ixo.iid.v1beta1.MsgDeleteService.fromPartial({
      id: did,
      serviceId: constants.serviceId,
      signer: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};
