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
import { dids } from "../setup/constants";
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

export const iidReplaceLinkedResource = () =>
  describe("Testing the iid module", () => {
    beforeAll(() =>
      generateNewWallet(WalletUsers.tester, process.env.ROOT_ECS!)
    );

    // let cid: string;
    // test("upload file to cellnode", async () => {
    //   const file = getFileFromPath([
    //     "documents",
    //     "impacts",
    //     "ImpactsDao_page.png",
    //   ]);
    //   const json = {
    //     "@context": {
    //       ixo: "https://w3id.org/ixo/ns/protocol/",
    //       "@id": "@type",
    //       type: "@type",
    //       "@protected": true,
    //     },
    //     type: "ixo:entity#tags",
    //     entityTags: [
    //       { category: "Entity", tags: ["Asset"], readonly: true },
    //       { category: "Claim Type", tags: [""], readonly: true },
    //       { category: "Type", tags: ["Coin"], readonly: true },
    //       { category: "Token Class", tags: ["Unspecified"], readonly: true },
    //     ],
    //   };

    //   const cellnode = await customQueries.cellnode.uploadWeb3Doc(
    //     "name",
    //     // "image/png",
    //     "application/ld+json",
    //     // file,
    //     Buffer.from(JSON.stringify(json)).toString("base64"),
    //     undefined,
    //     "testnet"
    //   );
    //   cid = cellnode.cid; /// ipfs
    //   // cid = cellnode.key; // cellnode
    //   console.log({ cid });
    //   return expect(true).toBeTruthy();
    // });

    // testMsg("/ixo.iid.v1beta1.MsgAddLinkedResource", async () => {
    //   if (!cid) throw new Error("no cid"); // if using cid from above,otherwise comment out
    //   // const entityDid = "did:ixo:entity:a033a255d0001d4ba7a2d6fdf47309a9";
    //   const entityDid = "did:ixo:entity:7e317b06a650da5ec35ce8fbbbc0b0c7";
    //   const resource = ixo.iid.v1beta1.LinkedResource.fromPartial({
    //     type: "Settings",
    //     id: "{id}#tags",
    //     description: "Tags",
    //     mediaType: "application/ld+json",
    //     serviceEndpoint: `ipfs:${cid}`,
    //     proof: cid,
    //     encrypted: "false",
    //     right: "",
    //   });

    //   const remove = await Iid.DeleteLinkedResource(entityDid, resource.id);
    //   const add = await Iid.AddLinkedResource(entityDid, resource);

    //   return remove as any;
    // });

    // testMsg("/ixo.iid.v1beta1.MsgAddService", async () => {
    //   const entityDid = "did:ixo:entity:7e317b06a650da5ec35ce8fbbbc0b0c7";
    //   const resource = ixo.iid.v1beta1.Service.fromPartial({
    //     id: "{id}#ipfs",
    //     type: "Ipfs",
    //     serviceEndpoint:
    //       "https://testnet-blocksync-graphql.ixo.earth/api/ipfs/",
    //   });

    //   try {
    //     await Iid.DeleteService(entityDid, resource.id);
    //   } catch (error) {}
    //   const add = await Iid.AddService(entityDid, resource);

    //   return add as any;
    // });

    // testMsg("/ixo.iid.v1beta1.MsgAddAccordedRight", async () => {
    //   const entityDid = "did:ixo:entity:7e317b06a650da5ec35ce8fbbbc0b0c7";
    //   const right = ixo.iid.v1beta1.AccordedRight.fromPartial({
    //     id: "{id}#transferToken",
    //     type: "capability/ibcTransfer",
    //     message: "MsgTransfer",
    //     service: "ixo",
    //     mechanism: "ibc.applications.transfer.v1.MsgTransfer",
    //   });

    //   try {
    //     await Iid.DeleteAccordedRight(entityDid, right.id);
    //   } catch (error) {}
    //   const add = await Iid.AddAccordedRight(entityDid, right);

    //   return add as any;
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

    testMsg("/ixo.iid.v1beta1.MsgDeleteIidContext", async () => {
      const allEntities = [
        "did:ixo:entity:0a221ea18d7d9c89390b61210e085d43",
        "did:ixo:entity:157627fa6bd235a9b47742a0e648f298",
        "did:ixo:entity:0bb81390ab719d43e91daa99e3f636b7",
        "did:ixo:entity:c8e1e2d3c25bdcf37dbd29662048ef45",
      ];

      const chunkSize = 30;
      let index = 0;
      for (const entities of chunkArray(allEntities, chunkSize)) {
        index++;
        // if (index < 4) continue; // for skipping certain batches
        console.log("removing contexts for batch", index);

        await Iid.DeleteIidContexts(
          entities.map((e: string) => ({
            did: e,
            key: "class",
          }))
        );
      }
      return true as any;
    });

    // testMsg("/ixo.iid.v1beta1.MsgAddLinkedResource", async () => {
    //   const getResource = (externalId?: string) =>
    //     ixo.iid.v1beta1.LinkedResource.fromPartial({
    //       id: `{id}#profile`,
    //       type: "Settings",
    //       description: "Profile",
    //       mediaType: "application/ld+json",
    //       serviceEndpoint:
    //         "ipfs:bafkreihkrftb62kfrk7zor6lgu34gew7jmyt4j6itfnjjrmdyqudgr54ta",
    //       proof: "bafkreihkrftb62kfrk7zor6lgu34gew7jmyt4j6itfnjjrmdyqudgr54ta",
    //       encrypted: "false",
    //       right: "",
    //     });

    //   const allEntities = aquaminerAssets.map((e) => e.id);

    //   const chunkSize = 30;
    //   let index = 0;
    //   for (const entities of chunkArray(allEntities, chunkSize)) {
    //     index++;
    //     // if (index < 4) continue; // for skipping certain batches
    //     console.log("replacing linked resource for batch", index);
    //     try {
    //       await Iid.DeleteLinkedResources(
    //         entities.map((e: string) => ({
    //           did: e,
    //           resourceId: `{id}#profile`,
    //         }))
    //       );
    //     } catch (error) {}
    //     await Iid.AddLinkedResources(
    //       entities.map((e: string) => ({
    //         did: e,
    //         linkedResource: getResource(),
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
  });

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
