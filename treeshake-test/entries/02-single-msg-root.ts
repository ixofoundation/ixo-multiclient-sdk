// A consumer that needs a single proto message type via the root `ixo` namespace.
// This is how the SDK docs/examples tell people to use it.
import { ixo } from "@ixo/impactxclient-sdk";

const msg = ixo.iid.v1beta1.MsgAddController.fromPartial({});
console.log(msg);
