import Long from "long";
import { queryClient, utils } from "../helpers/common";

export const quickQueries = () =>
  describe("Quick queries to see states", () => {
    test("Query cosmos.tx.v1beta1.getBlockWithTxs", async () => {
      const res = await queryClient.cosmos.tx.v1beta1.getBlockWithTxs({
        height: Long.fromNumber(95),
      });
      console.log({ res });
      expect(res).toBeTruthy();
    });
  });
