import {
  generateNewWallet,
  queryClient,
  sendFromFaucet,
  testMsg,
  testQry,
} from "../helpers/common";
import { WalletUsers } from "../helpers/constants";
import * as Iid from "../modules/Iid";

export const registerIids = () =>
  describe("Testing the faucet and creation of Iids", () => {
    // below is example to make a user from a know mnemonic, below is same users as chain scripts to test this sdk
    // against same local chain
    // beforeAll(() =>
    //   generateNewWallet(
    //     WalletUsers.tester, // Miguel
    //     "jungle brave person inmate dirt upset try rotate twin fossil grid border"
    //   )
    // );

    const users = Object.values(WalletUsers).filter(
      (user) =>
        ![
          "project",
          "bond",
          "oracle",
          // "charlie",
          // "bob",
          // "alice",
          // "tester",
        ].includes(user)
    );

    users.forEach((user) => {
      // sendFromFaucet(user);
      testMsg("/ixo.iid.v1beta1.MsgCreateIidDocument", () =>
        Iid.CreateIidDoc(user)
      );
    });

    // testQry(
    //   "test query",
    //   () => queryClient.ixo.bonds.v1beta1.bond({ bondDid: "adsf" }),
    //   {
    //     bonds: [],
    //   }
    // );
  });

export const iidsBasic = () =>
  describe("Testing the Iid module", () => {
    // testMsg("/ixo.iid.v1beta1.MsgUpdateIidDocument", () => Iid.UpdateIidDoc());
    // testMsg("/ixo.iid.v1beta1.MsgAddIidContext", () => Iid.AddIidContext());
    // testMsg("/ixo.iid.v1beta1.MsgDeleteIidContext", () =>
    //   Iid.DeleteIidContext()
    // );
    // testMsg("/ixo.iid.v1beta1.MsgAddVerification", () => Iid.AddVerification());
    // testMsg("/ixo.iid.v1beta1.MsgSetVerificationRelationships", () =>
    //   Iid.SetVerificationRelationships()
    // );
    // testMsg("/ixo.iid.v1beta1.MsgRevokeVerification", () =>
    //   Iid.RevokeVerification()
    // );
    // testMsg("/ixo.iid.v1beta1.MsgAddAccordedRight", () =>
    //   Iid.AddAccordedRight()
    // );
    // testMsg("/ixo.iid.v1beta1.MsgDeleteAccordedRight", () =>
    //   Iid.DeleteAccordedRight()
    // );
    // testMsg("/ixo.iid.v1beta1.MsgAddController", () => Iid.AddController());
    // testMsg("/ixo.iid.v1beta1.MsgDeleteController", () =>
    //   Iid.DeleteController()
    // );
    // testMsg("/ixo.iid.v1beta1.MsgAddLinkedEntity", () => Iid.AddLinkedEntity());
    // testMsg("/ixo.iid.v1beta1.MsgDeleteLinkedEntity", () =>
    //   Iid.DeleteLinkedEntity()
    // );
    // testMsg("/ixo.iid.v1beta1.MsgAddLinkedResource", () =>
    //   Iid.AddLinkedResource()
    // );
    // testMsg("/ixo.iid.v1beta1.MsgDeleteLinkedResource", () =>
    //   Iid.DeleteLinkedResource()
    // );
    // testMsg("/ixo.iid.v1beta1.MsgAddService", () => Iid.AddService());
    // testMsg("/ixo.iid.v1beta1.MsgDeleteService", () => Iid.DeleteService());
  });

export const generateBlockchainTestUsers = () => {
  beforeAll(() =>
    generateNewWallet(
      WalletUsers.tester, // Miguel
      "jungle brave person inmate dirt upset try rotate twin fossil grid border"
    )
  );
  beforeAll(() =>
    generateNewWallet(
      WalletUsers.alice,
      "fall sound heavy fantasy start army shop license insane nuclear emotion execute"
    )
  );
  beforeAll(() =>
    generateNewWallet(
      WalletUsers.bob,
      "genuine suspect someone trip school order amateur heart cheap similar creek turn"
    )
  );
  beforeAll(() =>
    generateNewWallet(
      WalletUsers.charlie,
      "faith game good hover hope area detect scout easily filter piece measure"
    )
  );
};
