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
    // below is example to make a user from a know mnemonic
    // beforeAll(() =>
    //   generateNewWallet(
    //     WalletUsers.tester,
    //     "visa catch design whip maple peasant ribbon dawn office hole video order ready height bottom suggest renew lake sister excite couch alone fan width"
    //   )
    // );
    // beforeAll(() =>
    //   generateNewWallet(
    //     WalletUsers.alice,
    //     "curve drive liar wear present uncover pet aisle magnet where reason rate dice enact supreme apple text deny idle jazz shiver mixture analyst execute"
    //   )
    // );
    // beforeAll(() =>
    //   generateNewWallet(
    //     WalletUsers.bob,
    //     "legend level swamp nut black demise ring treat replace rally click frozen unfair general inside quantum camera coffee lake rocket aunt emotion convince asthma"
    //   )
    // );

    const users = Object.values(WalletUsers).filter(
      (user) =>
        ![
          "project",
          "bond",
          "oracle",
          "accordedRight",
          "charlie",
          // "bob",
          // "alice",
          // "tester",
        ].includes(user)
    );

    users.forEach((user) => {
      sendFromFaucet(user);
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
    testMsg("/ixo.iid.v1beta1.MsgUpdateIidDocument", () => Iid.UpdateIidDoc());
    testMsg("/ixo.iid.v1beta1.MsgUpdateIidMeta", () => Iid.UpdateIidMeta());
    testMsg("/ixo.iid.v1beta1.MsgAddIidContext", () => Iid.AddIidContext());
    testMsg("/ixo.iid.v1beta1.MsgDeleteIidContext", () =>
      Iid.DeleteIidContext()
    );
    testMsg("/ixo.iid.v1beta1.MsgAddVerification", () => Iid.AddVerification());
    // testMsg("/ixo.iid.v1beta1.MsgSetVerificationRelationships", () =>
    //   Iid.SetVerificationRelationships()
    // );
    // testMsg("/ixo.iid.v1beta1.MsgRevokeVerification", () =>
    //   Iid.RevokeVerification()
    // );
    sendFromFaucet(WalletUsers.accordedRight);
    testMsg("/ixo.iid.v1beta1.MsgCreateIidDocument", () =>
      Iid.CreateIidDoc(WalletUsers.accordedRight, WalletUsers.tester)
    );
    testMsg("/ixo.iid.v1beta1.MsgAddAccordedRight", () =>
      Iid.AddAccordedRight()
    );
    testMsg("/ixo.iid.v1beta1.MsgDeleteAccordedRight", () =>
      Iid.DeleteAccordedRight()
    );
    testMsg("/ixo.iid.v1beta1.MsgAddController", () => Iid.AddController());
    testMsg("/ixo.iid.v1beta1.MsgDeleteController", () =>
      Iid.DeleteController()
    );
    testMsg("/ixo.iid.v1beta1.MsgAddLinkedEntity", () => Iid.AddLinkedEntity());
    testMsg("/ixo.iid.v1beta1.MsgDeleteLinkedEntity", () =>
      Iid.DeleteLinkedEntity()
    );
    testMsg("/ixo.iid.v1beta1.MsgAddLinkedResource", () =>
      Iid.AddLinkedResource()
    );
    testMsg("/ixo.iid.v1beta1.MsgDeleteLinkedResource", () =>
      Iid.DeleteLinkedResource()
    );
    testMsg("/ixo.iid.v1beta1.MsgAddService", () => Iid.AddService());
    testMsg("/ixo.iid.v1beta1.MsgDeleteService", () => Iid.DeleteService());
  });
