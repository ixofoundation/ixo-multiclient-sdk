import {
  customQueries,
  generateNewWallet,
  testMsg,
  timeout,
  utils,
} from "../../helpers/common";
import * as Entity from "./Entity";
import csvtojsonV2 from "csvtojson/v2";
import { setAndLedgerUser, uploadAllToCellnodeWeb3 } from "../helpers";
import { WalletUsers } from "../../helpers/constants";
import { idcc_daos, projectsMapping } from "./creds";
import { chainNetwork } from "../constants";
import { LinkedResource } from "../../../src/codegen/ixo/iid/v1beta1/types";

export const idccDaoFlows = () =>
  describe("Flow for creating daos", () => {
    Object.keys(idcc_daos).forEach((dao) =>
      describe("creating dao", () => {
        const data = idcc_daos[dao];
        console.log({ data, dao });
        setAndLedgerUser(data.mnemonic);

        let daoDid: string;
        testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
          // Create the Entity
          const res = await Entity.CreateEntityIDCCDao();
          daoDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
          console.log({ dao, daoDid });
          return res;
        });
      })
    );
  });

export const idccDAOprofilesFlows = () =>
  describe("Flow for creating daos", () => {
    testMsg("test", async () => {
      let data = await csvtojsonV2().fromFile(
        "./__tests__/setup/idcc/DAO _ Profile-Grid view.csv"
      );
      data = data.map((row) => {
        const context = row["@context"].replaceAll("\\", "");
        delete row["Field 0"];
        return {
          ...row,
          "@context": JSON.parse(context),
          attributes: JSON.parse(row.attributes || "[]"),
          metrics: JSON.parse(row.metrics || "[]"),
        };
      });

      for (let i = 0; i < data.length; i++) {
        const row = data[i];
        console.log({ row });
        const res = await customQueries.cellnode.uploadWeb3Doc(
          utils.common.generateId(12),
          "application/ld+json",
          Buffer.from(JSON.stringify(row)).toString("base64"),
          undefined,
          chainNetwork
        );
        console.log({ brand: row.brand, res });
      }
      // console.dir(data, { depth: null });

      return true as any;
    });
  });

export const idccDAOtagsFlows = () =>
  describe("Flow for creating daos", () => {
    testMsg("test", async () => {
      let data = await csvtojsonV2().fromFile(
        "./__tests__/setup/idcc/DAO_ Tags-Grid view.csv"
      );
      const ids = Object.values(data).map((row) => row["Field 0"]);
      data = data.map((row) => {
        const context = row["@context"].replaceAll("\\", "");
        const entityTags = row["entityTags"].replaceAll("\\", "");
        delete row["Field 0"];
        return {
          ...row,
          "@context": JSON.parse(context),
          entityTags: JSON.parse(entityTags),
        };
      });

      for (let i = 0; i < data.length; i++) {
        const row = data[i];
        console.log({ row });
        const res = await customQueries.cellnode.uploadPublicDoc(
          "application/ld+json",
          Buffer.from(JSON.stringify(row)).toString("base64"),
          undefined,
          chainNetwork
        );
        console.log({ brand: ids[i], res });
      }
      // console.dir(data, { depth: null });

      return true as any;
    });
  });

export const idccDAOPagesFlows = () =>
  describe("Flow for creating daos", () => {
    testMsg("test", async () => {
      let data = await csvtojsonV2().fromFile(
        "./__tests__/setup/idcc/DAO _ Page-Grid view.csv"
      );
      // remove last one as it incomplete
      data.pop();
      const ids = Object.values(data).map((row) => row["Field 0"]);
      data = data.map((row) => {
        delete row["Field 0"];
        return JSON.parse(row.page);
      });

      for (let i = 0; i < data.length; i++) {
        const row = data[i];
        const res = await customQueries.cellnode.uploadPublicDoc(
          "application/ld+json",
          Buffer.from(JSON.stringify(row)).toString("base64"),
          undefined,
          chainNetwork
        );
        console.log({ brand: ids[i], res });
      }
      // console.dir(data, { depth: null });

      return true as any;
    });
  });

export const idccDAOUpdateFlows = () =>
  describe("Flow for creating daos", () => {
    Object.keys(idcc_daos).forEach((dao) =>
      describe("updating dao", () => {
        const data = idcc_daos[dao];
        beforeAll(() =>
          Promise.all([generateNewWallet(WalletUsers.tester, data.mnemonic)])
        );

        const linkedResources: {
          did: string;
          linkedResource: LinkedResource;
        }[] = [];
        if (data.daoProfileIpfs) {
          linkedResources.push({
            did: data.daoDid,
            linkedResource: {
              id: `{id}#profile`,
              type: "Settings",
              description: "Profile",
              mediaType: "application/ld+json",
              serviceEndpoint: `ipfs:${data.daoProfileIpfs}`,
              proof: data.daoProfileIpfs,
              encrypted: "false",
              right: "",
            },
          });
        }
        if (data.daoTagsCellnode) {
          linkedResources.push({
            did: data.daoDid,
            linkedResource: {
              id: `{id}#tags`,
              type: "Settings",
              description: "Tags",
              mediaType: "application/ld+json",
              serviceEndpoint: `cellnode:${data.daoTagsCellnode}`,
              proof: data.daoTagsCellnode,
              encrypted: "false",
              right: "",
            },
          });
        }
        if (data.daoPageCellnode) {
          linkedResources.push({
            did: data.daoDid,
            linkedResource: {
              id: `{id}#page`,
              type: "Settings",
              description: "Page",
              mediaType: "application/ld+json",
              serviceEndpoint: `cellnode:${data.daoPageCellnode}`,
              proof: data.daoPageCellnode,
              encrypted: "false",
              right: "",
            },
          });
        }

        testMsg("/ixo.iid.v1beta1.MsgAddLinkedResource dao", async () => {
          const res = await Entity.AddLinkedResource(linkedResources);
          return res;
        });
      })
    );
  });

export const idccProjectsFlows = () =>
  describe("Flow for creating daos", () => {
    let pages;
    const getProjectsPages = async () => {
      pages = await csvtojsonV2().fromFile(
        "./__tests__/setup/idcc/IDCC_ Page-Grid view.csv"
      );
      pages = pages.map((row) => {
        const context = row["@context"].replaceAll("\\", "");
        return {
          ...row,
          oldDid: row["Field 0"],
          "@context": JSON.parse(context),
          page: JSON.parse(row.page),
        };
      });
    };
    let profiles;
    const getProjectsProfiles = async () => {
      profiles = await csvtojsonV2().fromFile(
        "./__tests__/setup/idcc/IDCC_Profile-Grid view.csv"
      );
      profiles = profiles.map((row) => {
        const context = row["@context"].replaceAll("\\", "");
        return {
          ...row,
          oldDid: row["Field 0"],
          "@context": JSON.parse(context),
          attributes: JSON.parse(row.attributes || "[]"),
          metrics: JSON.parse(row.metrics || "[]"),
        };
      });
    };
    let tags;
    const getProjectsTags = async () => {
      tags = await csvtojsonV2().fromFile(
        "./__tests__/setup/idcc/IDCC_Tags-Grid view.csv"
      );
      tags = tags.map((row) => {
        const context = row["@context"].replaceAll("\\", "");
        return {
          ...row,
          oldDid: row["Field 0"],
          "@context": JSON.parse(context),
          entityTags: JSON.parse(row.entityTags),
        };
      });
    };
    beforeAll(() =>
      Promise.all([
        getProjectsPages(),
        getProjectsProfiles(),
        getProjectsTags(),
      ])
    );

    const newProjects: any = [];
    projectsMapping.forEach((project) =>
      describe("creating project", () => {
        const daoKey = Object.keys(idcc_daos).find((d) => {
          // console.log(idcc_daos[d].daoDid, project.dao);
          return idcc_daos[d].daoDid === project.dao;
        });
        if (!daoKey) throw new Error("No dao found");
        const daoData = idcc_daos[daoKey];
        beforeAll(() =>
          Promise.all([generateNewWallet(WalletUsers.tester, daoData.mnemonic)])
        );

        testMsg("create project", async () => {
          // console.log(project);
          await timeout(1000);

          const linkedResources: LinkedResource[] = [];
          const profile = profiles.find((p) => p.oldDid === project.oldDid);
          const tag = tags.find((t) => t.oldDid === project.oldDid);
          const page = pages.find((p) => p.oldDid === project.oldDid);

          if (profile) {
            delete profile["Field 0"];
            delete profile.oldDid;
            // console.dir(profile, { depth: null });
            const resProfile = await customQueries.cellnode.uploadWeb3Doc(
              utils.common.generateId(12),
              "application/ld+json",
              Buffer.from(JSON.stringify(profile)).toString("base64"),
              undefined,
              chainNetwork
            );
            linkedResources.push({
              id: `{id}#profile`,
              type: "Settings",
              description: "Profile",
              mediaType: "application/ld+json",
              serviceEndpoint: `ipfs:${resProfile.cid}`,
              proof: resProfile.cid,
              encrypted: "false",
              right: "",
            });
          }
          if (tag) {
            delete tag["Field 0"];
            delete tag.oldDid;
            // console.dir(tag, { depth: null });
            const resTag = await customQueries.cellnode.uploadPublicDoc(
              "application/ld+json",
              Buffer.from(JSON.stringify(tag)).toString("base64"),
              undefined,
              chainNetwork
            );
            linkedResources.push({
              id: `{id}#tags`,
              type: "Settings",
              description: "Tags",
              mediaType: "application/ld+json",
              serviceEndpoint: `cellnode:${resTag.contentType}`,
              proof: resTag.key,
              encrypted: "false",
              right: "",
            });
          }
          if (page) {
            delete page["Field 0"];
            delete page.oldDid;
            // console.dir(page, { depth: null });
            const resPage = await customQueries.cellnode.uploadPublicDoc(
              "application/ld+json",
              Buffer.from(JSON.stringify(page.page)).toString("base64"),
              undefined,
              chainNetwork
            );
            linkedResources.push({
              id: `{id}#page`,
              type: "Settings",
              description: "Page",
              mediaType: "application/ld+json",
              serviceEndpoint: `cellnode:${resPage.key}`,
              proof: resPage.key,
              encrypted: "false",
              right: "",
            });
          }

          const res = await Entity.CreateEntityIDCCProject(
            linkedResources,
            daoData.daoDid
          );
          const projectDid = utils.common.getValueFromEvents(
            res,
            "wasm",
            "token_id"
          );

          newProjects.push({ ...project, projectDid });
          return res;
          // return true as any;
        });
      })
    );

    // helper to log the new dids
    testMsg("log newProjects", async () => {
      console.dir(newProjects, { depth: null });
      return true as any;
    });

    // helper to get the projects mapping to dao
    // testMsg("/ixo.iid.v1beta1.MsgAddLinkedResource dao", async () => {
    //   let projects;
    //   const getProjects = async () => {
    //     projects = await csvtojsonV2().fromFile(
    //       "./__tests__/setup/idcc/NEW DAO Project Mapping-Grid view.csv"
    //     );
    //     projects = projects.map((row) => {
    //       return {
    //         oldDid: row["Project"],
    //         dao: row["intermediary 1"],
    //       };
    //     });
    //   };
    //   await getProjects();
    //   console.dir(projects, { depth: null });
    //   return true as any;
    // });
  });
