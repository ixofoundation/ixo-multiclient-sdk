import { testMsg, utils } from "../helpers/common";
import * as Entity from "../modules/Entity";

export const enititiesBasic = () =>
  describe("Testing the Supamoto nfts flow", () => {
    let assetDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity asset", async () => {
      const res = await Entity.CreateEntityAsset();
      console.log({ res });
      assetDid = utils.common.getValueFromEvents(
        res,
        "ixo.iid.v1beta1.IidDocumentCreatedEvent",
        "did"
      );
      console.log({ assetDid });
      return res;
    });
    // let assetSupamotoDid: string;
    // testMsg(
    //   "/ixo.entity.v1beta1.MsgCreateEntity asset class supamoto",
    //   async () => {
    //     const res = await Entity.CreateEntityAssetSupamoto(assetDid);
    //     assetSupamotoDid = utils.common.getValueFromEvents(
    //       res,
    //       "ixo.iid.v1beta1.IidDocumentCreatedEvent",
    //       "did"
    //     );
    //     console.log({ assetSupamotoDid });
    //     return res;
    //   }
    // );
    // let assetSupamotoInstanceDid: string;
    // testMsg(
    //   "/ixo.entity.v1beta1.MsgCreateEntity asset class supamoto instance",
    //   async () => {
    //     const res = await Entity.CreateEntityAssetSupamotoInstance(
    //       assetSupamotoDid
    //     );
    //     assetSupamotoInstanceDid = utils.common.getValueFromEvents(
    //       res,
    //       "ixo.iid.v1beta1.IidDocumentCreatedEvent",
    //       "did"
    //     );
    //     console.log({ assetSupamotoInstanceDid });
    //     return res;
    //   }
    // );
    // testMsg("/ixo.entity.v1beta1.MsgTransferEntity", () =>
    //   Entity.TransferEntity(assetSupamotoInstanceDid)
    // );
    // testMsg("/ixo.entity.v1beta1.MsgUpdateEntity", () => Entity.UpdateEntity());
  });

export const supamotoFlow = () =>
  // User mapping
  // tester = Asset Creator and Controller (= ECS)
  // alice = Service Agent (=Supamoto)
  // bob = "Evaluation Agent (= Scalnyx)
  // charlie = Asset Owners to who the assets will be transferred (UBS Employees)

  describe("Testing the Supamoto nfts flow", () => {
    let assetDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity asset", async () => {
      const res = await Entity.CreateEntityAsset();
      console.log({ res });
      assetDid = utils.common.getValueFromEvents(
        res,
        "ixo.iid.v1beta1.IidDocumentCreatedEvent",
        "did"
      );
      console.log({ assetDid });
      return res;
    });
    // Create a Protocol entity for the SupaMoto Zambia Asset Class
    let assetSupamotoDid: string;
    testMsg(
      "/ixo.entity.v1beta1.MsgCreateEntity asset class supamoto",
      async () => {
        const res = await Entity.CreateEntityAssetSupamoto(assetDid);
        assetSupamotoDid = utils.common.getValueFromEvents(
          res,
          "ixo.iid.v1beta1.IidDocumentCreatedEvent",
          "did"
        );
        console.log({ assetSupamotoDid });
        return res;
      }
    );
    // Create a batch of Asset entities for the individual Supamoto assets, which are of the class SupaMoto Zambia
    // Include the Cellnode agent as a Controller MORE TROUBLE HERE!
    let assetSupamotoInstanceDid: string;
    testMsg(
      "/ixo.entity.v1beta1.MsgCreateEntity asset class supamoto instance",
      async () => {
        const res = await Entity.CreateEntityAssetSupamotoInstance(
          assetSupamotoDid
        );
        assetSupamotoInstanceDid = utils.common.getValueFromEvents(
          res,
          "ixo.iid.v1beta1.IidDocumentCreatedEvent",
          "did"
        );
        console.log({ assetSupamotoInstanceDid });
        return res;
      }
    );
  });
