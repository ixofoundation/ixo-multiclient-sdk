import { testMsg } from "../helpers/common";
import * as Authz from "../modules/Authz";

export const authzBasic = () =>
  describe("Testing the cosmos authz module", () => {
    testMsg("test Grant Authz Authz", async () => {
      const res = await Authz.MsgGrantAuthz();
      console.log(res);
      return res;
    });
    testMsg("test Exec Authz Authz", () => Authz.MsgExecAuthz());
  });
