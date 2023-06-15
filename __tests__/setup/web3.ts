import { customQueries, getFileFromPath, utils } from "../helpers/common";
import { storeWeb3 } from "../helpers/web3";

export const web3Storage = () =>
  describe("Uploading file to web3 storage", () => {
    // test("uplaod file json", async () => {
    //   const file = JSON.parse(
    //     getFileFromPath(
    //       ["documents", "impacts", "ImpactsDAO_profile.json"],
    //       "ascii"
    //     )
    //   );
    //   file["issuer"] = "value";
    //   let buff = Buffer.from(JSON.stringify(file));
    //   const cid = await storeWeb3(
    //     "test",
    //     ContentTypes.jsonld,
    //     buff.toString("base64")
    //   );
    //   console.log({ cid });
    //   expect(cid).toBeTruthy();
    // });

    // test("upload file image", async () => {
    //   const file = getFileFromPath([
    //     "documents",
    //     "emerging",
    //     "CARBON token_profile.png",
    //   ]);
    //   const cid = await storeWeb3(
    //     "CARBON token_profile",
    //     ContentTypes.png,
    //     file
    //   );
    //   console.log({ cid });
    //   expect(cid).toBeTruthy();
    // });

    // test("upload file pdf", async () => {
    //   const file = getFileFromPath([
    //     "documents",
    //     "impacts",
    //     "Pellet Sample Analysis Zambia - Oct 2022.pdf",
    //   ]);
    //   const cid = await storeWeb3(
    //     "Supamoto Zambia Pellet Spec Analysis",
    //     ContentTypes.pdf,
    //     file
    //   );
    //   console.log({ cid });
    //   expect(cid).toBeTruthy();
    // });

    test("upload json", async () => {
      const json = {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          {
            "@version": 1.1,
            "@protected": true,
            type: "@type",
            vocab: "https://w3id.org/emerging/vocab/v1",
          },
        ],
        id: "urn:uuid:e9f0e597-a62e-41be-bd1b-020d9d632510",
        type: ["VerifiableCredential"],
        credentialSubject: {
          id: "did:ixo:entity:7f0cc7a072d514b38cb90bdf2e215901",
        },
        data: [
          {
            Project_FuelConsumption: {
              value: "1.000",
              units: "tonnes",
              id: "vocab:QuantitativeValue",
              type: "QuantitativeValue",
              description: "Ratio of fuel purchased that is used for cooking",
            },
          },
          {
            Project_FuelEnergy: {
              value: "0.0176",
              units: "Tj/t",
              id: "vocab:Energy",
              type: "Energy",
              description:
                "Energy generated per tonne of Fuel for the Modern Energy Device type and model used by the Project. Based on independent tests conducted by a certified lab. If not available, 0,017 is used for woody pellets and 0,014 for non-woody.",
            },
          },
          {
            Baseline_Wood: {
              value: "",
              units: "t/a",
              id: "vocab:QuantitativeValue",
              type: "QuantitativeValue",
              description: "Baseline wood consumption",
            },
          },
          {
            Baseline_Charcoal: {
              value: "0.796",
              units: "t/a",
              id: "vocab:QuantitativeValue",
              type: "QuantitativeValue",
              description: "Baseline charcoal consumption",
            },
          },
          {
            Baseline_LPG: {
              value: "2.760",
              units: "kg/a",
              id: "vocab:QuantitativeValue",
              type: "QuantitativeValue",
              description: "Baseline LPG consumption",
            },
          },
          {
            Baseline_Kerosine: {
              value: "",
              units: "kg/a",
              id: "vocab:QuantitativeValue",
              type: "QuantitativeValue",
              description: "Baseline kerosine consumption",
            },
          },
          {
            Baseline_Electricity: {
              value: "713",
              units: "kWh/a",
              id: "vocab:QuantitativeValue",
              type: "QuantitativeValue",
              description: "Baseline electricity consumption",
            },
          },
          {
            Fuel_NonRenewable_Biomass: {
              value: "86.9",
              units: "%",
              id: "vocab:QuantitativeValue",
              type: "QuantitativeValue",
              description: "Fraction non-renewable biomass (fNRB)",
            },
          },
          {
            Device_Efficiency: {
              value: "54.7",
              units: "%",
              id: "vocab:QuantitativeValue",
              type: "QuantitativeValue",
              description:
                "Percentage of generated energy that goes into the cooking pot. Based on independent lab tests of the device.",
            },
          },
          {
            Fuel_NonWaste: {
              value: "10",
              units: "%",
              id: "vocab:QuantitativeValue",
              type: "QuantitativeValue",
              description:
                "Relates to only burning of pellets under Project emissions.",
            },
          },
          {
            Fuel_AddedWood: {
              value: "20",
              units: "%",
              id: "vocab:QuantitativeValue",
              type: "QuantitativeValue",
              description:
                "Percentage of additional dry-matter wood that is required to manufacture pellets",
            },
          },
          {
            Fuel_ProductionEmissions: {
              value: "0.33",
              units: "tCO2/a",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "calcuated as 0.33tCO2/tPellets",
            },
          },
          {
            Fuel_TransportEmissions: {
              value: "0.05",
              units: "tCO2/a",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "calcuated as 0.05tCO2/tPellets",
            },
          },
          {
            Fuel_Wood_EmissionsFactor: {
              value: "1.89",
              units: "tCO2e/t",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "Emissions factor for Wood",
            },
          },
          {
            Fuel_Charcoal_EmissionsFactor: {
              value: "11.37",
              units: "tCO2e/t",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "Emissions factor for Charcoal",
            },
          },
          {
            Fuel_LPG_EmissionsFactor: {
              value: "2.98",
              units: "tCO2e/t",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "Emissions factor for LPG",
            },
          },
          {
            Fuel_Kerosene_EmissionsFactor: {
              value: "3.15",
              units: "tCO2e/t",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "Emissions factor for Kerosene",
            },
          },
          {
            Fuel_Electricity_EmissionsFactor: {
              value: "0.87",
              units: "tCO2/MWh",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "Emissions factor for Electricity",
            },
          },
          {
            Fuel_Wood_Energy: {
              value: "0.0156",
              units: "TJ/t",
              id: "vocab:Energy",
              type: "Energy",
              description: "Net calorific value of the Fuel",
            },
          },
          {
            Fuel_Charcoal_Energy: {
              value: "0.0295",
              units: "TJ/t",
              id: "vocab:Energy",
              type: "Energy",
              description: "Net calorific value of the Fuel",
            },
          },
          {
            Fuel_LPG_Energy: {
              value: "0.0473",
              units: "TJ/t",
              id: "vocab:Energy",
              type: "Energy",
              description: "Net calorific value of the Fuel",
            },
          },
          {
            Fuel_Kerosine_Energy: {
              value: "0.0438",
              units: "TJ/t",
              id: "vocab:Energy",
              type: "Energy",
              description: "Net calorific value of the Fuel",
            },
          },
          {
            Fuel_Electricity_Energy: {
              value: "0.0036",
              units: "GJ/kWh",
              id: "vocab:Energy",
              type: "Energy",
              description: "Net calorific value of the Fuel",
            },
          },
          {
            Device_Wood_Efficiency: {
              value: "10",
              units: "%",
              id: "vocab:QuantitativeValue",
              type: "QuantitativeValue",
              description: "Device Efficiency",
            },
          },
          {
            Device_Charcoal_Efficiency: {
              value: "20",
              units: "%",
              id: "vocab:QuantitativeValue",
              type: "QuantitativeValue",
              description: "Device Efficiency",
            },
          },
          {
            Device_LPG_Efficiency: {
              value: "51",
              units: "%",
              id: "vocab:QuantitativeValue",
              type: "QuantitativeValue",
              description: "Device Efficiency",
            },
          },
          {
            Device_Kerosine_Efficiency: {
              value: "43",
              units: "%",
              id: "vocab:QuantitativeValue",
              type: "QuantitativeValue",
              description: "Device Efficiency",
            },
          },
          {
            Device_Electricity_Efficiency: {
              value: "74",
              units: "%",
              id: "vocab:QuantitativeValue",
              type: "QuantitativeValue",
              description: "Device Efficiency",
            },
          },
          {
            Fuel_Wood_Emissions_Baseline: {
              value: "",
              units: "tCO2/a",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "How much CO2 is emitted in the baseline scenario",
            },
          },
          {
            Fuel_Charcoal_Emissions_Baseline: {
              value: "7.86",
              units: "tCO2/a",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "How much CO2 is emitted in the baseline scenario",
            },
          },
          {
            Fuel_LPG_Emissions_Baseline: {
              value: "0.01",
              units: "tCO2/a",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "How much CO2 is emitted in the baseline scenario",
            },
          },
          {
            Fuel_Kerosine_Emissions_Baseline: {
              value: "",
              units: "tCO2/a",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "How much CO2 is emitted in the baseline scenario",
            },
          },
          {
            Fuel_Electricity_Emissions_Baseline: {
              value: "0.62",
              units: "tCO2/a",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "How much CO2 is emitted in the baseline scenario",
            },
          },
          {
            Fuel_Total_Emissions_Baseline: {
              value: "8.49",
              units: "tCO2/a",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "How much CO2 is emitted in the baseline scenario",
            },
          },
          {
            Device_Wood_UsefulEnergy: {
              value: "",
              units: "GJ/a",
              id: "vocab:Energy",
              type: "Energy",
              description:
                "How much energy goes into the pot in the baseline scenario",
            },
          },
          {
            Device_Charcoal_UsefulEnergy: {
              value: "4.70",
              units: "GJ/a",
              id: "vocab:Energy",
              type: "Energy",
              description:
                "How much energy goes into the pot in the baseline scenario",
            },
          },
          {
            Device_LPG_UsefulEnergy: {
              value: "0.07",
              units: "GJ/a",
              id: "vocab:Energy",
              type: "Energy",
              description:
                "How much energy goes into the pot in the baseline scenario",
            },
          },
          {
            Device_Kerosine_UsefulEnergy: {
              value: "",
              units: "GJ/a",
              id: "vocab:Energy",
              type: "Energy",
              description:
                "How much energy goes into the pot in the baseline scenario",
            },
          },
          {
            Device_Electricity_UsefulEnergy: {
              value: "1.90",
              units: "GJ/a",
              id: "vocab:Energy",
              type: "Energy",
              description:
                "How much energy goes into the pot in the baseline scenario",
            },
          },
          {
            Device_Total_UsefulEnergy: {
              value: "6.66",
              units: "GJ/a",
              id: "vocab:Energy",
              type: "Energy",
              description:
                "How much energy goes into the pot in the baseline scenario",
            },
          },
          {
            Project_Emissions_Baseline: {
              value: "1.27",
              units: "tCO2/GJ",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "Baseline Emission Factor",
            },
          },
          {
            Project_UsefulEnergy: {
              value: "9.63",
              units: "GJ/a",
              id: "vocab:Energy",
              type: "Energy",
              description:
                "How much Energy per Tonne of Fuel goes into the pot on average for the entire Project",
            },
          },
          {
            Project_Emissions_GrossSavings: {
              value: "12.27",
              units: "tCO2/a",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description:
                "Total Gross amount of CO2 Emissions Reduced by the Project per Tonne of Fuel using the Modern Energy Cooking Device, before compensating for Emissions from Manufacturing and Transportation of Fuels.",
            },
          },
          {
            Project_Emissions_FuelProduction: {
              value: "0.33",
              units: "tCO2/a",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "Constant of 0.33tCO2/tpellets",
            },
          },
          {
            Project_Emissions_FuelTransportation: {
              value: "0.05",
              units: "tCO2/a",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "Constant of 0.05tCO2/tpellets",
            },
          },
          {
            Project_Emissions_FuelUsage: {
              value: "0.20",
              units: "tCO2/a",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description:
                "Emissions from burning Pellets. Value is 0 if pellets are made from 100% sustainable wood",
            },
          },
          {
            Project_Emissions_Total: {
              value: "0.58",
              units: "tCO2/a",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description: "Total Project Emissions",
            },
          },
          {
            Project_Emissions_Leakage: {
              value: "0",
              units: "tCO2/a",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description:
                "Unintended increase in emissions elsewhere attributable to the Project",
            },
          },
          {
            Project_Emissions_Reduced: {
              value: "11.69",
              units: "tCO2/a",
              id: "vocab:CO2Emission",
              type: "CO2Emission",
              description:
                "Total Net Amount of CO2 Emissions Reduced by the Project per Tonne of Fuel using the Modern Energy Cooking Device",
            },
          },
        ],
        issuer: {
          id: "did:ixo:entity:237cb945b1368ed450ec67c7c4ac56ac",
        },
        issuanceDate: "2023-06-10T09:39:52.500Z",
        proof: {
          type: "Ed25519Signature2018",
          created: "2023-06-10T09:39:52Z",
          verificationMethod:
            "did:ixo:entity:237cb945b1368ed450ec67c7c4ac56ac#DQPAV2hR3RQzRATr2r6EHa3LW8zk1E6fw5gpNUZJkAzx",
          proofPurpose: "assertionMethod",
          jws: "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..zYy0VrnRHholzHCsryZfur4wkmZ84IW0gaFcqmsiMN7QDRtGETFXOoUPXX2S7kgGzqrn-Drf26C1tWfUGRXMBQ",
        },
      };
      const cid = await storeWeb3(
        "Supamoto Calculations Credentials",
        ContentTypes.jsonld,
        Buffer.from(JSON.stringify(json)).toString("base64")
      );
      console.log({ cid });
      expect(cid).toBeTruthy();
    });
  });

const ContentTypes = {
  svg: "image/svg+xml",
  png: "image/png",
  jsonld: "application/ld+json",
  json: "application/json",
  pdf: "application/pdf",
};

// ecs web3 account
// CARBON token_logo bafkreidw5lg6mn2q33vj6gokazbl6yepsh3s32xf5z3evqu43s2ccqg3xy
// CARBON token_profile bafkreifndsbwafc23y2muflrwrfaev5qe5kxcth6atnahcdnwxm753vviq
// carbonORACLE_logo bafkreifo3vrfdlry7pjiu2coxaecfvxb2alcmcxbw72hexhlpv3j4xofei
// carbonORACLE_profile bafkreiffgg6nrzcebnvf63rqxlrxpmvazm6gxe3kb6xlwoap4l32iu7w6y
// ECS DAO_logo bafkreifw7mvuwremuf3ffpdx3r2jgxjme4s2dbsld5y3oe75wavar6hwja
// ECS DAO_profile bafkreiac7mlmlodnhy453xlmdfgnvkqtyx2mcehloxsyl2pig3yjrvkfza
// Emerging_logo bafkreiditx3ykwyfa2e4jk6yjp2vylhqgj45fq4zdxj32hwvp5k4dar7ju
// Emerging_profile bafkreihstux2zf7cobztq5acdqmihbmvkptml7tpvjrd6ecluqllb4iji4
// Prospect_oracle_profile bafkreiexxhidqxzobndelfuxbbzimzvzdporiujpcijm26a5fq3prvgiqy
// ProspectDAO_logo bafkreifycd6nal7k2gmtiiyqrvogcgx6zie6yktpcbq7c3nrrxucotmyt4
// ProspectDAO_profile bafkreidxcimput3wl632czbzkgebfxequ66abgg66pjjkyr525d5wfebbq
// SupaMoto_asset_profile bafybeicav572xehbpzjfx4zhaqbsdez2h6gr3v4ils6jqqacgl5ohs4mbm
// SupaMoto_collection_profile bafybeid5m3l3ulpseaameyjaiokhdpap7bztk4k4irrxidsezntktvpo3i
