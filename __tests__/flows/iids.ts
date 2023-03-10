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
          "bond",
          "oracle",
          "random",
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

// ------------------------------------------------------------
// flow to run after devnet was reset, please dont change
// ------------------------------------------------------------
export const registerIidsDev = () =>
  describe("Testing the faucet and creation of Iids for dev", () => {
    const users = Object.values(WalletUsers).filter(
      (user) => !["bond", "oracle", "random"].includes(user)
    );

    users.forEach((user) => {
      sendFromFaucet(user);
      testMsg("/ixo.iid.v1beta1.MsgCreateIidDocument", () =>
        Iid.CreateIidDoc(user)
      );
    });
  });

export const iidsBasic = () =>
  describe("Testing the Iid module", () => {
    // testMsg("/ixo.iid.v1beta1.MsgUpdateIidDocument", () => Iid.UpdateIidDoc());
    testMsg("/ixo.iid.v1beta1.MsgAddIidContext", () => Iid.AddIidContext());
    testMsg("/ixo.iid.v1beta1.MsgDeleteIidContext", () =>
      Iid.DeleteIidContext()
    );
    testMsg("/ixo.iid.v1beta1.MsgAddVerification", () => Iid.AddVerification());
    testMsg("/ixo.iid.v1beta1.MsgSetVerificationRelationships", () =>
      Iid.SetVerificationRelationships()
    );
    testMsg("/ixo.iid.v1beta1.MsgRevokeVerification", () =>
      Iid.RevokeVerification()
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
    testMsg("/ixo.iid.v1beta1.MsgAddLinkedClaim", () => Iid.AddLinkedClaim());
    testMsg("/ixo.iid.v1beta1.MsgDeleteLinkedClaim", () =>
      Iid.DeleteLinkedClaim()
    );
    testMsg("/ixo.iid.v1beta1.MsgAddService", () => Iid.AddService());
    testMsg("/ixo.iid.v1beta1.MsgDeleteService", () => Iid.DeleteService());
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

// --------------------------------------
// generateBlockchainTestUsers USERS
// --------------------------------------
// [
// 	{
// 		tester: {
// 			ed: {
// 				did: 'did:ixo:PwZDGjvgUNdSThjQ7ZUjjL',
// 				address: 'ixo1jtlkhddkfvzu4p2vl4dvlszzkqvlthghee44jz',
// 				publicKey: 'DWCUkANZAN2RQFDA9bwiTdwRVuBK7UfABgRu7hqfNW3J',
// 			},
// 			secp: {
// 				did: 'did:x:zQ3shoiydFD6jdTdXLPProPZWL6igg9bCyaJY6zEKqQoNE96C',
// 				address: 'ixo1n8yrmeatsk74dw0zs95ess9sgzptd6thgjgcj2',
// 				publicKey: '23mpcQ4dGJpQe6HiSRJgTWWMF2PQEh2G1B4UXY58F1fEU',
// 			},
// 		},
// 	},
// 	{
// 		alice: {
// 			ed: {
// 				did: 'did:ixo:TVtbjPKvyMNGAFQvaatXzR',
// 				address: 'ixo1ruwxxfsp6jgdk88fmyzyp7s3hs20vqmg5f3htp',
// 				publicKey: 'FSf7SvJw3DRE6b9GBKWi9JVt7nM5njPURcmXPSzTDLt6',
// 			},
// 			secp: {
// 				did: 'did:x:zQ3shUQYdonbR4CaaWBmfYMHND7KEXY3tEStFndNGWp4njQ54',
// 				address: 'ixo12am7v5xgjh72c7xujreyvtncqwue3w0v6ud3r4',
// 				publicKey: 'iTPcxe7wjZMhG66FAGQKPWwnsmruwtqirhcUDUPfWvDL',
// 			},
// 		},
// 	},
// 	{
// 		bob: {
// 			ed: {
// 				did: 'did:ixo:Nf7ne25stikrUGX5JPfBpL',
// 				address: 'ixo1fzztp4ryg6kcn6cxja9qmvmz70l46es97q9m2a',
// 				publicKey: 'CodLSPkY5NduFLUTKsgGmT5WUS8XGuYYd3FFVm7xa43v',
// 			},
// 			secp: {
// 				did: 'did:x:zQ3shdv1QebkD12iJh2pNVsHtBZSW4prECtzwdtnj2eZKZ436',
// 				address: 'ixo13dy867pyn8jda82vnshy7jjjv42n69k7497jrh',
// 				publicKey: 'sxrPoTGjgPVRSw8x7nQqMy54R4fFvLxQhy2vjJtCLaBN',
// 			},
// 		},
// 	},
// 	{
// 		charlie: {
// 			ed: {
// 				did: 'did:ixo:VQzvtwnjxCHmYcvYZfKvRe',
// 				address: 'ixo16vw0mreudhe39z5sr7ldk6jqtfdz4lmentrl4x',
// 				publicKey: 'GVDVSHdBKFT2FRPbxtd8GHuWhu5MoanQKQ1CKgUx76Kt',
// 			},
// 			secp: {
// 				did: 'did:x:zQ3shne9kEBA4Q8mQr5em3NF9mgE8zLXiHGMydLeDqPvbMo7c',
// 				address: 'ixo1fewufqrjy0r8kercq3wazsr7v0cymhvgteq442',
// 				publicKey: '22gzjP2gb5VYXbyyLfHN6x5rhLaLjziKShQtRY4FU9KFt',
// 			},
// 		},
// 	},
// ];
