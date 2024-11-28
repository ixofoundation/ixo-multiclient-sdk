//@ts-nocheck
import * as _132 from "./wasm/v1/authz";
import * as _133 from "./wasm/v1/genesis";
import * as _134 from "./wasm/v1/ibc";
import * as _135 from "./wasm/v1/proposal_legacy";
import * as _136 from "./wasm/v1/query";
import * as _137 from "./wasm/v1/tx";
import * as _138 from "./wasm/v1/types";
import * as _294 from "./wasm/v1/query.rpc.Query";
import * as _295 from "./wasm/v1/tx.rpc.msg";
import * as _330 from "./rpc.query";
import * as _331 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._294,
      ..._295
    };
  }
  export const ClientFactory = {
    ..._330,
    ..._331
  };
}