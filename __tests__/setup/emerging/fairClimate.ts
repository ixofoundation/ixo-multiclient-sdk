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
import axios from "axios";
import { setup_collection_fairClimate_constants } from "./fairClimate-constants";

export const fairClimateCollectionFlow = () =>
  describe("Flow for creating fairClimate collection", () => {
    beforeAll(() =>
      generateNewWallet(WalletUsers.tester, process.env.ROOT_ECS!)
    );

    // =============================== START
    let assetCollectionDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const collectionConst = setup_collection_fairClimate_constants();

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
        false
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

// TODO: add linkedClaims to collection
export const fairClimateCookstovesFlow = () =>
  describe("Creating fairClimate stoves assets", () => {
    beforeAll(() =>
      generateNewWallet(WalletUsers.tester, process.env.ROOT_ECS!)
    );

    // Create a batch of Asset entities for the individual Supamoto assets
    let assetsFailed: any[] = [];
    let assetInstanceDids: { id: string; did: string }[] = [];
    let index = 1;

    fairClimateCookstoveIds.map((id, i) =>
      testMsg(
        `/ixo.entity.v1beta1.MsgCreateEntity asset instance`,
        async () => {
          console.log(
            `/ixo.entity.v1beta1.MsgCreateEntity asset instance index:${index} (array index: ${i}) for id:${id}`
          );
          try {
            const file = JSON.parse(
              getFileFromPath(
                [
                  "documents",
                  "test-supamoto-device-credential-supamoto.jsonld",
                ],
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
              dids.fairClimateCollection,
              [{ deviceId: id, index, deviceCreds }],
              dids.emergingDao,
              "bafkreic2d5slukymfu3vzky3jfuypu653orso5whajbu6sc6a5gnqfaywe"
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
        ["documents", "emerging", "fairClimate_cookstoves_dids.json"],
        JSON.stringify({ assetInstanceDids, assetsFailed }, null, 2)
      );
      expect(true).toBeTruthy();
    });
  });

// list of Supamoto FairClimate Collection stoves
export const fairClimateCookstoveIds = [
  "S014000399",
  "S014001377",
  "S014000161",
  "S014000122",
  "S014000444",
  "S014000170",
  "S014000465",
  "S014000198",
  "S014000400",
  "S014000036",
  "S014000328",
  "S014000059",
  "S014000256",
  "S014000147",
  "S014001362",
  "S014000331",
  "S014000758",
  "S014000053",
  "S014000694",
  "S014001367",
  "S014000288",
  "S014000464",
  "S014000843",
  "S014001446",
  "S014000570",
  "S014000321",
  "S014000797",
  "S014000172",
  "S014000373",
  "S014000083",
  "S014000386",
  "S014001319",
  "S014000038",
  "S014000967",
  "S014000767",
  "S014001443",
  "S014001029",
  "S014000286",
  "S014000688",
  "S014000689",
  "S014000502",
  "S014001253",
  "S014000757",
  "S014000087",
  "S014000626",
  "S014000766",
  "S014000957",
  "S014000023",
  "S014001180",
  "S014000141",
  "S014000751",
  "S014001405",
  "S014000140",
  "S014000984",
  "S014001037",
  "S014000224",
  "S014000564",
  "S014001472",
  "S014000505",
  "S014001381",
  "S014000486",
  "S014000683",
  "S014000468",
  "S014000244",
  "S014000503",
  "S014001459",
  "S014000968",
  "S014000796",
  "S014000355",
  "S014000353",
  "S014000834",
  "S014000006",
  "S014001000",
  "S014000466",
  "S014001351",
  "S014000335",
  "S014000643",
  "S014000890",
  "S014001173",
  "S014000986",
  "S014001398",
  "S014000904",
  "S014001099",
  "S014001165",
  "S014001400",
  "S014000376",
  "S014000556",
  "S014001167",
  "S014001476",
  "S014000860",
  "S014000216",
  "S014000712",
  "S014000239",
  "S014000567",
  "S014001433",
  "S014001056",
  "S014000037",
  "S014001297",
  "S014000608",
  "S014000183",
  "S014001022",
  "S014000167",
  "S014000972",
  "S014000948",
  "S014000910",
  "S014001426",
  "S014001322",
  "S014000669",
  "S014000954",
  "S014001023",
  "S014001332",
  "S014000672",
  "S014000667",
  "S014000184",
  "S014000725",
  "S014001187",
  "S014001209",
  "S014000192",
  "S014000384",
  "S014000105",
  "S014001442",
  "S014000693",
  "S014000138",
  "S014000894",
  "S014000789",
  "S014000912",
  "S014000662",
  "S014000670",
  "S014000359",
  "S014000354",
  "S014000097",
  "S014000306",
  "S014000692",
  "S014001015",
  "S014001127",
  "S014001033",
  "S014000795",
  "S014000736",
  "S014000946",
  "S014001186",
  "S014000754",
  "S014001386",
  "S014001431",
  "S014001048",
  "S014001121",
  "S014001217",
  "S014000939",
  "S014001318",
  "S014000013",
  "S014001213",
  "S014000800",
  "S014001011",
  "S014000330",
  "S014000787",
  "S014000923",
  "S014000018",
  "S014000983",
  "S014000815",
  "S014000657",
  "S014001032",
  "S014000919",
  "S014001005",
  "S014000927",
  "S014001115",
  "S014000896",
  "S014000744",
  "S014001049",
  "S014000380",
  "S014000988",
  "S014001469",
  "S014000042",
  "S014001448",
  "S014000528",
  "S014000101",
  "S014001475",
  "S014000333",
  "S014000742",
  "S014000162",
  "S014000648",
  "S014001316",
  "S014000102",
  "S014000555",
  "S014000830",
  "S014000646",
  "S014000566",
  "S014000844",
  "S014000254",
  "S014000442",
  "S014001436",
  "S014000508",
  "S014000481",
  "S014000227",
  "S014000275",
  "S014000230",
  "S014001010",
  "S014000336",
  "S014000418",
  "S014000660",
  "S014001415",
  "S014000467",
  "S014000460",
  "S014000061",
  "S014000088",
  "S014000084",
  "S014000421",
  "S014000462",
  "S014000872",
  "S014000318",
  "S014000056",
  "S014000223",
  "S014000156",
  "S014001463",
  "S014000329",
  "S014000929",
  "S014000034",
  "S014000759",
  "S014000926",
  "S014000020",
  "S014001425",
  "S014000417",
  "S014001429",
  "S014000855",
  "S014000125",
  "S014000746",
  "S014001166",
  "S014000133",
  "S014001026",
  "S014000033",
  "S014000680",
  "S014000221",
  "S014000661",
  "S014000171",
  "S014000592",
  "S014001450",
  "S014000702",
  "S014000818",
  "S014001036",
  "S014000313",
  "S014000338",
  "S014000274",
  "S014000058",
  "S014000065",
  "S014000009",
  "S014000007",
  "S014000123",
  "S014000982",
  "S014001434",
  "S014000048",
  "S014001413",
  "S014000478",
  "S014000173",
  "S014001009",
  "S014000144",
  "S014000340",
  "S014000935",
  "S014001461",
  "S014000934",
  "S014000226",
  "S014000315",
  "S014000075",
  "S014000474",
  "S014000949",
  "S014000443",
  "S014000242",
  "S014000004",
  "S014000168",
  "S014000166",
  "S014000747",
  "S014000433",
  "S014000229",
  "S014000072",
  "S014000484",
  "S014000206",
  "S014000057",
  "S014001201",
  "S014000334",
  "S014000112",
  "S014000786",
  "S014000375",
  "S014000999",
  "S014000080",
  "S014000522",
  "S014000997",
  "S014001143",
  "S014000163",
  "S014001027",
  "S014000943",
  "S014000995",
  "S014000976",
  "S014000062",
  "S014000225",
  "S014000003",
  "S014001449",
  "S014001030",
  "S014001424",
  "S014001002",
  "S014001404",
  "S014001435",
  "S014000392",
  "S014000937",
  "S014000963",
  "S014000044",
  "S014000814",
  "S014000096",
  "S014000246",
  "S014000240",
  "S014000195",
  "S014000314",
  "S014000152",
  "S014000019",
  "S014000284",
  "S014001177",
  "S014000415",
  "S014000342",
  "S014000357",
  "S014001452",
  "S014000519",
  "S014000118",
  "S014000312",
  "S014000696",
  "S014000499",
  "S014000513",
  "S014000305",
  "S014000311",
  "S014000634",
  "S014001138",
  "S014000150",
  "S014001172",
  "S014000863",
  "S014000127",
  "S014000569",
  "S014000506",
  "S014001041",
  "S014000117",
  "S014000483",
  "S014001148",
  "S014000647",
  "S014000077",
  "S014000404",
  "S014000271",
  "S014001445",
  "S014000078",
  "S014000121",
  "S014000790",
  "S014000730",
  "S014000807",
  "S014001144",
  "S014000119",
  "S014001028",
  "S014000436",
  "S014001145",
  "S014000412",
  "S014000487",
  "S014001152",
  "S014001034",
  "S014001432",
  "S014000507",
  "S014000291",
  "S014000131",
  "S014000352",
  "S014000850",
  "S014001199",
  "S014001149",
  "S014000823",
  "S014000233",
  "S014000287",
  "S014000071",
  "S014000406",
  "S014001039",
  "S014000260",
  "S014001192",
  "S014000573",
  "S014000022",
  "S014000385",
  "S014000263",
  "S014000871",
  "S014000142",
  "S014000111",
  "S014000016",
  "S014001004",
  "S014001477",
  "S014000989",
  "S014000017",
  "S014001142",
  "S014001171",
  "S014001421",
  "S014000665",
  "S014000235",
  "S014000320",
  "S014000811",
  "S014000090",
  "S014000812",
  "S014000164",
  "S014000130",
  "S014001430",
  "S014000241",
  "S014001423",
  "S014000158",
  "S014000001",
  "S014001153",
  "S014000469",
  "S014000178",
  "S014000388",
  "S014001174",
  "S014000745",
  "S014000365",
  "S014001050",
  "S014000109",
  "S014000039",
  "S014001195",
  "S014000985",
  "S014000202",
  "S014000299",
  "S014000345",
  "S014000237",
  "S014000292",
  "S014000303",
  "S014000458",
  "S014000255",
  "S014000068",
  "S014000322",
  "S014000160",
  "S014000177",
  "S014000076",
  "S014000492",
  "S014000005",
  "S014000361",
  "S014000440",
  "S014000148",
  "S014000509",
  "S014000413",
  "S014000517",
  "S014000428",
  "S014001046",
  "S014000511",
  "S014000310",
  "S014000432",
  "S014000304",
  "S014000104",
  "S014000473",
  "S014001383",
  "S014001339",
  "S014000430",
  "S014001373",
  "S014000422",
  "S014000203",
  "S014000245",
  "S014001126",
  "S014001154",
  "S014001132",
  "S014001155",
  "S014000283",
  "S014000218",
  "S014000390",
  "S014000054",
  "S014001453",
  "S014001346",
  "S014000028",
  "S014000180",
  "S014000002",
  "S014000344",
  "S014000991",
  "S014000107",
  "S014000490",
  "S014000073",
  "S014000405",
  "S014000169",
  "S014000035",
  "S014000055",
  "S014000297",
  "S014000294",
  "S014000435",
  "S014000067",
  "S014000878",
  "S014000300",
  "S014000426",
  "S014000136",
  "S014001184",
  "S014000351",
  "S014000358",
  "S014000842",
  "S014000381",
  "S014000181",
  "S014000273",
  "S014000828",
  "S014001047",
  "S014000497",
  "S014000401",
  "S014000324",
  "S014000410",
  "S014000094",
  "S014000482",
  "S014000427",
  "S014000489",
  "S014000382",
  "S014000491",
  "S014000086",
  "S014000523",
];
// duplicate stoves that is in genesis collection
export const fairClimateCookstoveDuplicates = [];
