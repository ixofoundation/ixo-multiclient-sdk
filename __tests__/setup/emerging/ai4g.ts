import {
  customQueries,
  generateNewWallet,
  getFileFromPath,
  ixo,
  saveFileToPath,
  testMsg,
  utils,
} from "../../helpers/common";
import { WalletUsers } from "../../helpers/constants";
import * as Iid from "../../modules/Iid";
import * as Entity from "./Entity";
import * as Entity1 from "../Entity";
import { EcsCredentialsWorkerUrl, chainNetwork, dids } from "../constants";
import {
  uploadAllToCellnodeWeb3,
  uploadAllToCellnodeWeb3Claims,
} from "../helpers";
import {
  setup_collection_ai4g_constants,
  setup_protocol_ai4g_cooking_constants,
} from "./ai4g-constants";
import axios from "axios";

export const emergingAi4gProtocolsFlow = () =>
  describe("Flow for creating Emerging Protocol (dao/protocol/oracle)", () => {
    beforeAll(() =>
      Promise.all([
        generateNewWallet(WalletUsers.tester, process.env.ROOT_EMERGING!),
        generateNewWallet(WalletUsers.alice, process.env.ROOT_ED_EMERGING!),
      ])
    );

    // =============================== START
    let protAi4gDid: string;
    testMsg("Create ai4g cooking protocol", async () => {
      const daoConst = setup_protocol_ai4g_cooking_constants();

      let protCleanCookingLinkedResourcesUploaded =
        await uploadAllToCellnodeWeb3(daoConst.linkedResources);
      console.log({ protCleanCookingLinkedResourcesUploaded });

      // Create the Entity
      const res = await Entity1.CreateEntity(
        daoConst.entity,
        protCleanCookingLinkedResourcesUploaded,
        true
      );
      protAi4gDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ protAi4gDid });

      return res;
    });
    // =============================== END
  });

export const ai4gCollectionFlow = () =>
  describe("Flow for creating aig4 collection", () => {
    beforeAll(() =>
      generateNewWallet(WalletUsers.tester, process.env.ROOT_ECS!)
    );

    // =============================== START
    let assetCollectionDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const collectionConst = setup_collection_ai4g_constants();

      let linkedResourcesUploaded = await uploadAllToCellnodeWeb3(
        collectionConst.linkedResources
      );
      console.log({ linkedResourcesUploaded });

      let linkedClaimsUploaded = await uploadAllToCellnodeWeb3Claims(
        collectionConst.linkedClaims
      );
      console.log({ linkedClaimsUploaded });

      // Create the Entity
      const res = await Entity.CreateSupamotoAssetCollection(
        collectionConst.entity,
        linkedResourcesUploaded,
        linkedClaimsUploaded,
        false,
        "2024-07-31T23:59:59Z"
      );
      assetCollectionDid = utils.common.getValueFromEvents(
        res,
        "wasm",
        "token_id"
      );
      console.log({ assetCollectionDid });

      return res;
    });
    // =============================== END

    // Add the web dashboard linkedResource as need did
    testMsg("/ixo.iid.v1beta1.MsgAddLinkedResource", () =>
      Iid.AddLinkedResource(
        assetCollectionDid,
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#collectionDashboard",
          type: "WebDashboard",
          description: "Collection Dashboard",
          mediaType: "application/html",
          serviceEndpoint: "emerging:/collections/" + assetCollectionDid,
          proof: "",
          encrypted: "false",
          right: "#apitoken",
        })
      )
    );
  });

export const ai4gCookstovesFlow = () =>
  describe("Creating AI4G stoves assets", () => {
    beforeAll(() =>
      generateNewWallet(WalletUsers.tester, process.env.ROOT_ECS!)
    );

    // Create a batch of Asset entities for the individual Supamoto assets
    let assetsFailed: any[] = [];
    let assetInstanceDids: { id: string; did: string }[] = [];
    let index = 1;

    aig4CookstoveIds.map((id, i) =>
      testMsg(
        `/ixo.entity.v1beta1.MsgCreateEntity asset instance`,
        async () => {
          console.log(
            `/ixo.entity.v1beta1.MsgCreateEntity asset instance index:${index} (array index: ${i}) for id:${id}`
          );
          try {
            const file = JSON.parse(
              getFileFromPath(
                ["documents", "test-supamoto-device-credential-legacy.jsonld"],
                "ascii"
              )
            );
            file["credential"]["credentialSubject"][
              "id"
            ] = `https://app.emerging.eco/devices/${id}`;

            // Create Credential, ecs must issue cert for each asset, so ecs creds worker
            const resCreds = await axios.post(
              EcsCredentialsWorkerUrl + "credentials/create",
              file,
              {
                headers: {
                  Authorization: process.env.ECS_CREDENTIAL_WORKER_AUTH,
                },
              }
            );
            if (![200, 201].includes(resCreds.status) || !resCreds.data)
              throw new Error("error creating device creds");

            // Upload credential to web3 storage
            const deviceCreds = (
              await customQueries.cellnode.uploadWeb3Doc(
                `Supamoto Asset Device Creds: ${chainNetwork} ${id}`,
                "application/ld+json",
                Buffer.from(JSON.stringify(resCreds.data)).toString("base64"),
                undefined,
                chainNetwork
              )
            ).cid;

            console.log({ deviceCreds });
            if (!deviceCreds) throw new Error("error saving device creds file");

            const res = await Entity.CreateEntityAssetSupamotoInstance(
              dids.ai4gCollection,
              [{ deviceId: id, index, deviceCreds }],
              dids.emergingDao
            );
            const nftAssetDid = utils.common.getValueFromEvents(
              res,
              "wasm",
              "token_id"
            );
            console.log({ nftAssetDid });
            if (!nftAssetDid) throw new Error("error creating nft asset");

            index++;
            assetInstanceDids.push({ id: id, did: nftAssetDid });
            return "res" as any;
          } catch (error) {
            console.log({ error });
            assetsFailed.push({ id });
            throw new Error(error);
          }
        }
      )
    );

    test("Logging all nft assets created", async () => {
      console.log(
        "Create file to save assetInstanceDids that was successfully and failed"
      );
      saveFileToPath(
        ["documents", "emerging", "aig4_cookstoves_dids.json"],
        JSON.stringify({ assetInstanceDids, assetsFailed }, null, 2)
      );
      expect(true).toBeTruthy();
    });
  });

// list of Supamoto AI4G Collection stoves 256 long
export const aig4CookstoveIds = [
  "S014000145",
  "S014000070",
  "S014001387",
  "S014000187",
  "S014000135",
  "S014000231",
  "S014000323",
  "S014000350",
  "S014000204",
  "S014000132",
  "S014001384",
  "S014000776",
  "S014001380",
  "S014000343",
  "S014000750",
  "S014000346",
  "S014000205",
  "S014000197",
  "S014001160",
  "S014000066",
  "S014000553",
  "S014000368",
  "S014000188",
  "S014001020",
  "S014000613",
  "S014001385",
  "S014001042",
  "S014000211",
  "S014000493",
  "S014001016",
  "S014001465",
  "S014000906",
  "S014001350",
  "S014001440",
  "S014000208",
  "S014000848",
  "S014000165",
  "S014001438",
  "S014000674",
  "S014000309",
  "S014000833",
  "S014000593",
  "S014000296",
  "S014001214",
  "S014001188",
  "S014000398",
  "S014000201",
  "S014000098",
  "S014000784",
  "S014000617",
  "S014000394",
  "S014001393",
  "S014001161",
  "S014000809",
  "S014000673",
  "S014000247",
  "S014000512",
  "S014000091",
  "S014000772",
  "S014000921",
  "S014001323",
  "S014000196",
  "S014001157",
  "S014001392",
  "S014000179",
  "S014000032",
  "S014000501",
  "S014000554",
  "S014000082",
  "S014000524",
  "S014000265",
  "S014000155",
  "S014000611",
  "S014000950",
  "S014000552",
  "S014000153",
  "S014000008",
  "S014000031",
  "S014001212",
  "S014000307",
  "S014000518",
  "S014000364",
  "S014000675",
  "S014001193",
  "S014000219",
  "S014000961",
  "S014000960",
  "S014000046",
  "S014000434",
  "S014000332",
  "S014000348",
  "S014000853",
  "S014000174",
  "S014000911",
  "S014001437",
  "S014000268",
  "S014001019",
  "S014001455",
  "S014000371",
  "S014000060",
  "S014001399",
  "S014000110",
  "S014000251",
  "S014000520",
  "S014000722",
  "S014000267",
  "S014001420",
  "S014000129",
  "S014000366",
  "S014000089",
  "S014000915",
  "S014000015",
  "S014000108",
  "S014001057",
  "S014000869",
  "S014000079",
  "S014001051",
  "S014001355",
  "S014000455",
  "S014000106",
  "S014000813",
  "S014000447",
  "S014001311",
  "S014000917",
  "S014000867",
  "S014000316",
  "S014000407",
  "S014000362",
  "S014000337",
  "S014001310",
  "S014000535",
  "S014000250",
  "S014001014",
  "S014000826",
  "S014001396",
  "S014001354",
  "S014000248",
  "S014000437",
  "S014000827",
  "S014000457",
  "S014000819",
  "S014000865",
  "S014001301",
  "S014000425",
  "S014000012",
  "S014000439",
  "S014000650",
  "S014000253",
  "S014000641",
  "S014001397",
  "S014001401",
  "S014000993",
  "S014001403",
  "S014000456",
  "S014000822",
  "S014000881",
  "S014000854",
  "S014000847",
  "S014000259",
  "S014001315",
  "S014000045",
  "S014000126",
  "S014000538",
  "S014000232",
  "S014000050",
  "S014000932",
  "S014000011",
  "S014000825",
  "S014000653",
  "S014000636",
  "S014000899",
  "S014000454",
  "S014001125",
  "S014001368",
  "S014001170",
  "S014000526",
  "S014000582",
  "S014001124",
  "S014001017",
  "S014000782",
  "S014000317",
  "S014000628",
  "S014000739",
  "S014000788",
  "S014000791",
  "S014000633",
  "S014000632",
  "S014000799",
  "S014000734",
  "S014001371",
  "S014001169",
  "S014001162",
  "S014000539",
  "S014000737",
  "S014001040",
  "S014000449",
  "S014000654",
  "S014000947",
  "S014000956",
  "S014001196",
  "S014000448",
  "S014001176",
  "S014001369",
  "S014000902",
  "S014000234",
  "S014001416",
  "S014000637",
  "S014001189",
  "S014000792",
  "S014000618",
  "S014000938",
  "S014000638",
  "S014000620",
  "S014000798",
  "S014000748",
  "S014000802",
  "S014001390",
  "S014000451",
  "S014000886",
  "S014000752",
  "S014001043",
  "S014000154",
  "S014001198",
  "S014000769",
  "S014000884",
  "S014000753",
  "S014001150",
  "S014001471",
  "S014001447",
  "S014000176",
  "S014001133",
  "S014001128",
  "S014000450",
  "S014001454",
  "S014000395",
  "S014001382",
  "S014001137",
  "S014000805",
  "S014001130",
  "S014000901",
  "S014000749",
  "S014001197",
  "S014001467",
  "S014001136",
  "S014000755",
  "S014000445",
  "S014000663",
  "S014000264",
  "S014001470",
  "S014001202",
  "S014000775",
  "S014000583",
  "S014000210",
  "S014001464",
  "S014001134",
  "S014001338",
];
// 31 duplicate stoves that is in genesis collection
export const ai4gCookstoveDuplicates = [];
