// NEW in this upgrade: granular typed subpath — one proto message via
// "@ixo/impactxclient-sdk/codegen/..." (no /module/, no .js, full types).
import { MsgAddController } from "@ixo/impactxclient-sdk/codegen/ixo/iid/v1beta1/tx";

const msg = MsgAddController.fromPartial({});
console.log(msg);
