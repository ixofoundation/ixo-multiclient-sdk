import * as _0 from "../codegen_ixo/bonds/genesis";
import * as _1 from "../codegen_ixo/bonds/bonds";
import * as _2 from "../codegen_ixo/bonds/query";
import * as _3 from "../codegen_ixo/bonds/tx";

import * as _4 from "../codegen_ixo/cosmos/coin";
import * as _5 from "../codegen_ixo/cosmos/cosmos";
import * as _6 from "../codegen_ixo/cosmos/pagination";

import * as _7 from "../codegen_ixo/entity/entity";
import * as _8 from "../codegen_ixo/entity/genesis";
import * as _9 from "../codegen_ixo/entity/query";
import * as _10 from "../codegen_ixo/entity/tx";

import * as _11 from "../codegen_ixo/iid/event";
import * as _12 from "../codegen_ixo/iid/genesis";
import * as _13 from "../codegen_ixo/iid/iid";
import * as _14 from "../codegen_ixo/iid/query";
import * as _15 from "../codegen_ixo/iid/tx";

import * as _16 from "../codegen_ixo/legacy/did/did";
import * as _17 from "../codegen_ixo/legacy/did/diddoc";

import * as _18 from "../codegen_ixo/payments/genesis";
import * as _19 from "../codegen_ixo/payments/payments";
import * as _20 from "../codegen_ixo/payments/query";
import * as _21 from "../codegen_ixo/payments/tx";

import * as _22 from "../codegen_ixo/project/genesis";
import * as _23 from "../codegen_ixo/project/project";
import * as _24 from "../codegen_ixo/project/query";
import * as _25 from "../codegen_ixo/project/tx";

import * as _26 from "./rpc.query";

export * as helpers from "./helpers";

export namespace ixo {
  export const bonds = {
    ..._0,
    ..._1,
    ..._2,
    ..._3,
  };
  export const cosmos = {
    ..._4,
    ..._5,
    ..._6,
  };
  export const entity = {
    ..._7,
    ..._8,
    ..._9,
    ..._10,
  };
  export const iid = {
    ..._11,
    ..._12,
    ..._13,
    ..._14,
    ..._15,
  };
  export const did = {
    ..._16,
    ..._17,
  };
  export const payments = {
    ..._18,
    ..._19,
    ..._20,
    ..._21,
  };
  export const project = {
    ..._22,
    ..._23,
    ..._24,
    ..._25,
  };
  export const ClientFactory = {
    ..._26,
  };
}
