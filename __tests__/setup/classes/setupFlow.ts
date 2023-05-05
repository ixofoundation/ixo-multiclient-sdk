import { testMsg, utils } from "../../helpers/common";
import { setup_class_constants } from "./constants";
import * as Entity from "../Entity";
import { setAndLedgerUser } from "../helpers";

export const classesFlow = () =>
  describe("Flow for creating classes", () => {
    setAndLedgerUser(process.env.ROOT_IMPACTS!);

    // Creating the parent classes here that will be in context of all following entities
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity classes", async () => {
      for (const c of Object.keys(setup_class_constants)) {
        const res = await Entity.CreateEntityBasic(setup_class_constants[c]);
        if (res.code != 0) throw new Error(res.rawLog);
        const did = utils.common.getValueFromEvents(res, "wasm", "token_id");
        console.log({ [c]: did });
      }

      return true as any;
    });
  });
