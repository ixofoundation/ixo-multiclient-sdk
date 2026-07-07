// NEW: slim composed query client — createRpc + only the modules you need,
// via granular typed subpaths. The recommended pattern for Workers/frontends
// that query a handful of modules instead of all ~35.
import { createRpc } from "@ixo/impactxclient-sdk/queries";
import { QueryClientImpl as IidQuery } from "@ixo/impactxclient-sdk/codegen/ixo/iid/v1beta1/query.rpc.Query";
import { QueryClientImpl as BankQuery } from "@ixo/impactxclient-sdk/codegen/cosmos/bank/v1beta1/query.rpc.Query";

(async () => {
  const rpc = await createRpc("https://impacthub.ixo.world/rpc/");
  const iid = new IidQuery(rpc);
  const bank = new BankQuery(rpc);
  console.log(typeof iid.iidDocument, typeof bank.balance);
})();
