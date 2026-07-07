// A consumer that only wants one tiny helper from the root export.
// Ideal outcome: a few KB. If tree shaking is broken, the whole SDK comes along.
import { utils } from "@ixo/impactxclient-sdk";

console.log(utils.conversions.concatArrayBuffers(new Uint8Array([1])));
