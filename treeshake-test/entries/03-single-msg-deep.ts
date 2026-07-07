// Same single proto message, but imported via a deep file path that skips
// the root barrel + namespace objects. Best case the current package layout allows.
import { MsgAddController } from "@ixo/impactxclient-sdk/module/codegen/ixo/iid/v1beta1/tx.js";

const msg = MsgAddController.fromPartial({});
console.log(msg);
