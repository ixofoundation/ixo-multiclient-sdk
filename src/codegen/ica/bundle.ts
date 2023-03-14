import * as _142 from "./intertx/query";
import * as _143 from "./intertx/tx";
import * as _232 from "./intertx/query.rpc.Query";
import * as _233 from "./intertx/tx.rpc.msg";
import * as _250 from "./rpc.query";
import * as _251 from "./rpc.tx";
export namespace ica {
  export const intertx = { ..._142,
    ..._143,
    ..._232,
    ..._233
  };
  export const ClientFactory = { ..._250,
    ..._251
  };
}