import * as _142 from "./intertx/query";
import * as _143 from "./intertx/tx";
import * as _233 from "./intertx/query.rpc.Query";
import * as _234 from "./intertx/tx.rpc.msg";
import * as _251 from "./rpc.query";
import * as _252 from "./rpc.tx";
export namespace ica {
  export const intertx = {
    ..._142,
    ..._143,
    ..._233,
    ..._234
  };
  export const ClientFactory = {
    ..._251,
    ..._252
  };
}