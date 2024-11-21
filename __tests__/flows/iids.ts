import {
  chunkArray,
  customQueries,
  generateNewWallet,
  getFileFromPath,
  ixo,
  queryClient,
  sendFromFaucet,
  testMsg,
  testQry,
} from "../helpers/common";
import { WalletUsers } from "../helpers/constants";
import * as Iid from "../modules/Iid";
import * as Entity from "../modules/Entity";
import { setAndLedgerUser } from "../setup/helpers";
import { toTimestamp } from "../../src/codegen/helpers";
import axios from "axios";
import { didArrays, intermediaryRegistry } from "../setup/constants";
import { aquaminerAssets } from "../setup/aquaminer/assets";
import { remove } from "store";

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
  });

export const iidDeleteLinkedResource = () =>
  describe("Testing DeleteLinkedResource", () => {
    beforeAll(() =>
      generateNewWallet(WalletUsers.tester, process.env.ROOT_IMPACTS!)
    );

    test("Delete a linked resource if added in error.", async () => {
      const removeLinkedResource = await Iid.DeleteLinkedResource('did:x:zQ3shj4dPHhbsSXYcmsZLoDkiPJxkHhWYZpihWSQn95fuos2y', `{id}#offer#26`);
      return removeLinkedResource;
    });
  })

export const iidReplaceLinkedResourcesIDCC = (intermediaryRegistry) => {
  // Loop through Intermediaries
  for (const intermediary of intermediaryRegistry.intermediaries) {
    console.log(intermediary);
    iidReplaceLinkedResource(intermediary.mnemonic!);
  }
}

export const iidReplaceLinkedResourcesArrayOfDIDs = (dids) => {
  describe("Delete and Add LinkedResources for a list of entity DIDs", () => {
  })
}

export const iidReplaceLinkedResource = (mnemonic) =>
  describe("Testing the iid module", () => {
    beforeAll(() =>
      generateNewWallet(WalletUsers.tester, mnemonic!)
    );

    testMsg("/ixo.iid.v1beta1.MsgAddLinkedResource", async () => {
      const resource = ixo.iid.v1beta1.LinkedResource.fromPartial({
        id: "{id}#surveyTemplate",
        type: "surveyTemplate",
        proof: "bafkreicdlmbv62qftfiddjifbfxpdajygjjzz44dxeyn5pysbrw7k2z7yq",
        right: "",
        encrypted: "false",
        mediaType: "application/ld+json",
        description: "",
        serviceEndpoint: "cellnode:/public/bafkreicdlmbv62qftfiddjifbfxpdajygjjzz44dxeyn5pysbrw7k2z7yq"
      });
      const deleteResource = await Iid.DeleteLinkedResource("did:ixo:entity:0f40508dec32e4b8d2f1d74fbe2a4f79", "{id}#surveyTemplate");
      const addResource = await Iid.AddLinkedResource("did:ixo:entity:0f40508dec32e4b8d2f1d74fbe2a4f79", resource);
      return deleteResource as any;
    });
  });

export const iidReplaceService = (mnemonic) => {
  (
    describe("Testing the iid module > Services", () => {
      beforeAll(() =>
        generateNewWallet(WalletUsers.tester, mnemonic!)
      );

      testMsg("/ixo.iid.v1beta1.MsgAddService", async () => {
        const entityDid = "did:ixo:entity:0f40508dec32e4b8d2f1d74fbe2a4f79";
        const resource = ixo.iid.v1beta1.Service.fromPartial({
          id: "{id}#cellnode",
          type: "CellNode",
          serviceEndpoint: "https://cellnode.ixo.earth/\r\n"
        });

        const remove = await Iid.DeleteService(entityDid, resource.id);
        const add = await Iid.AddService(entityDid, resource);

        return remove as any;
      })
    })
  )
}

export const deleteLinkedClaims = () => {
  describe("Testing DeleteLinkedClaims", () => {
    beforeAll(() =>
      generateNewWallet(WalletUsers.tester, process.env.ROOT_IMPACTS!)
    );

    test("Delete a linked claim if added in error.", async () => {

      // const claimIdList: string[] = [
      // 'EyYNiKInQu',
      // "WyUZXaIqKd",
      // "ncTQaKFxim",
      // "IzCbAsrxxs",
      // "KRZcQKhucK",
      // "dlZeLpUgKj",
      // "EamQgxcJfr",
      // "LBOXxMPqpx",
      // "BZuPXTmEOk",
      // "JwFmvArFBp",
      // "WJJFKAqgKb",
      // "YHQiNUaNMS",
      // "{id}#cf3ffe32-809b-4434-af0a-178e673b4445",
      // "{id}#43468ad9-e9c5-414a-829a-8b8fad3b7c47",
      // "{id}#1f2ef584-2577-4bfe-8747-e03142eef276",
      // "{id}#addd0aaf-4906-4a3e-9838-1d6de19fc8c0",
      // "{id}#17287553-bc50-4e19-8f22-da8781927ac9",
      // "{id}#557674ba-1f5c-4043-b8c6-e53bf8031bf2",
      // "{id}#1c10ec69-e227-4603-81dc-524d778aa9af",
      // "{id}#a5ffbc9a-49e1-436b-a575-3ca15e7d201a",
      // "{id}#8bafb788-3738-4f24-b788-2ce63472d57a",
      // ];
      // console.log("claimIdList = ", claimIdList);

      await Iid.DeleteLinkedClaim('did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb', 'EyYNiKInQu');
      return true;
    });

  });
}

export const addEdKeysToDid = () =>
  describe("Testing the iid module", () => {
    beforeAll(() =>
      Promise.all([
        generateNewWallet(WalletUsers.tester, process.env.LOCAL_USER_MNEMONIC!),
      ])
    );

    let entityDid = undefined; // can add did or will sue users from above mnemonic's did

    testMsg("/ixo.entity.v1beta1.MsgUpdateEntity", () =>
      Iid.AddVerification(undefined, entityDid, "ed")
    );
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
    // beforeAll(() =>
    //   Promise.all([
    //     generateNewWallet(WalletUsers.tester, process.env.ROOT_IMPACTS),
    //   ])
    // );
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

export const iidAddEdKeys = () =>
  describe("Testing the Iid module adding ED keys to iid doc", () => {
    testMsg("/ixo.iid.v1beta1.MsgAddVerification", () => Iid.AddVerification());
    // testMsg("/ixo.iid.v1beta1.MsgRevokeVerification", () =>
    //   Iid.RevokeVerification()
    // );
  });

export const generateBlockchainTestUsers = () => {
  beforeAll(() =>
    generateNewWallet(
      WalletUsers.tester, // Miguel
      "jungle brave person inmate dirt upset try rotate twin fossil grid border"
      // process.env.ROOT_FEEGRANT!
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

// Examples of tests
// test("upload file to cellnode", async () => {
//   const json = {
//     "@context":
//     {
//       "ixo": "https://w3id.org/ixo/ns/protocol/",
//       "@id": "@type",
//       "type": "@type",
//       "@protected": true
//     },
//     "type": "ixo:entity#tags",
//     "entityTags":
//       [
//         {
//           "category": "DAO Type",
//           "tags":
//             [
//               "Cooperative"
//             ]
//         },
//         {
//           "category": "SDG",
//           "tags":
//             [
//               "SDG9 – Industry, Innovation and Infrastructure"
//             ]
//         }
//       ]
//   };
//   const cellnode = await customQueries.cellnode.uploadPublicDoc(
//     // "image/png",
//     "application/ld+json",
//     // file,
//     Buffer.from(JSON.stringify(json)).toString("base64"),
//     undefined,
//     "devnet"
//   );
//   console.log({ cellnode });
//   return expect(true).toBeTruthy();
// });

// testMsg("/ixo.iid.v1beta1.MsgAddService", async () => {
//   const entityDid = dids.legacyCollection;
//   const resource = ixo.iid.v1beta1.Service.fromPartial({
//     id: "{id}#cellnode",
//     type: "Cellnode",
//     serviceEndpoint: "https://cellnode-pandora.ixo.earth",
//   });

//   const remove = await Iid.DeleteService(entityDid, resource.id);
//   const add = await Iid.AddService(entityDid, resource);

//   return remove as any;
// });

// testMsg("/ixo.iid.v1beta1.AddLinkedClaim", async () => {
//   const entityDid = dids.legacyCollection;
//   const resource = ixo.iid.v1beta1.LinkedClaim.fromPartial({
//     type: "Procurement",
//     id: "{id}#FuelPurchases",
//     description: "Fuel Purchase Claim",
//     serviceEndpoint:
//       "cellnode:/public/bafkreigmu5bvvoyibnqg4hwppasyr3briuknhgdagy5filwmpjvse3epfq",
//     proof: "bafkreigmu5bvvoyibnqg4hwppasyr3briuknhgdagy5filwmpjvse3epfq",
//     encrypted: "false",
//     right: "",
//   });

//   const remove = await Iid.DeleteLinkedClaim(entityDid, resource.id);
//   const add = await Iid.AddLinkedClaim(entityDid, resource);

//   return remove as any;
// });

// testMsg("/ixo.iid.v1beta1.MsgAddLinkedResource", async () => {
//   const getResource = (externalId: string) =>
//     ixo.iid.v1beta1.LinkedResource.fromPartial({
//       id: `{id}#profile`,
//       type: "Settings",
//       description: "Profile",
//       mediaType: "application/ld+json",
//       serviceEndpoint:
//         "ipfs:bafkreigx7val5mfeghm636jcso6kt7wqpieh7h7hgdkcn64xxyy7ihp2q4",
//       proof: "bafkreigx7val5mfeghm636jcso6kt7wqpieh7h7hgdkcn64xxyy7ihp2q4",
//       encrypted: "false",
//       right: "",
//     });

//   const collections = await axios.get(
//     "https://blocksync.ixo.earth/api/entity/collectionsByOwnerAddress/ixo1lgelskjkjjasl860n6kmevlflanqj5vh8l8p5w"
//   );
//   const allEntities = collections.data[0].entities;
//   // console.log(allEntities);

//   const chunkSize = 100;
//   let index = 0;
//   for (const entities of chunkArray(allEntities, chunkSize)) {
//     index++;
//     console.log("replacing linked resource for batch", index);
//     try {
//       await Iid.DeleteLinkedResources(
//         entities.map((e: any) => ({
//           did: e.id,
//           resourceId: `{id}#profile`,
//         }))
//       );
//     } catch (error) {}
//     await Iid.AddLinkedResources(
//       entities.map((e: any) => ({
//         did: e.id,
//         linkedResource: getResource(e.externalId),
//       }))
//     );
//   }
//   return true as any;
// });

// testMsg("/ixo.entity.v1beta1.MsgUpdateEntity", () =>
//   Entity.UpdateEntity(
//     ixo.entity.v1beta1.MsgUpdateEntity.fromPartial({
//       id: "did:ixo:entity:2f22535f8b179a51d77a0e302e68d35d",
//       entityStatus: 0,
//       startDate: toTimestamp(new Date("2023-02-14T12:00:00Z")),
//     })
//   )
// );

// testMsg("/ixo.iid.v1beta1.AddLinkedEntity Project", async () => {
//   const resource = ixo.iid.v1beta1.LinkedEntity.fromPartial({
//     id: "ixo1lgelskjkjjasl860n6kmevlflanqj5vh8l8p5w",
//     type: "MemberDAO",
//     relationship: "member",
//     service: "",
//   });
//   return await Iid.AddLinkedEntity(dids.impactsDao, resource);
// });
