import * as _132 from "./bonds/v1beta1/bonds";
import * as _133 from "./bonds/v1beta1/genesis";
import * as _134 from "./bonds/v1beta1/query";
import * as _135 from "./bonds/v1beta1/tx";
import * as _136 from "./claims/v1beta1/authz";
import * as _137 from "./claims/v1beta1/claims";
import * as _138 from "./claims/v1beta1/cosmos";
import * as _139 from "./claims/v1beta1/event";
import * as _140 from "./claims/v1beta1/genesis";
import * as _141 from "./claims/v1beta1/query";
import * as _142 from "./claims/v1beta1/tx";
import * as _143 from "./entity/v1beta1/cosmos";
import * as _144 from "./entity/v1beta1/entity";
import * as _145 from "./entity/v1beta1/event";
import * as _146 from "./entity/v1beta1/genesis";
import * as _147 from "./entity/v1beta1/proposal";
import * as _148 from "./entity/v1beta1/query";
import * as _149 from "./entity/v1beta1/tx";
import * as _150 from "./iid/v1beta1/event";
import * as _151 from "./iid/v1beta1/genesis";
import * as _152 from "./iid/v1beta1/iid";
import * as _153 from "./iid/v1beta1/query";
import * as _154 from "./iid/v1beta1/tx";
import * as _155 from "./iid/v1beta1/types";
import * as _156 from "./token/v1beta1/authz";
import * as _157 from "./token/v1beta1/event";
import * as _158 from "./token/v1beta1/genesis";
import * as _159 from "./token/v1beta1/proposal";
import * as _160 from "./token/v1beta1/query";
import * as _161 from "./token/v1beta1/token";
import * as _162 from "./token/v1beta1/tx";
import * as _217 from "./bonds/v1beta1/query.rpc.Query";
import * as _218 from "./claims/v1beta1/query.rpc.Query";
import * as _219 from "./entity/v1beta1/query.rpc.Query";
import * as _220 from "./iid/v1beta1/query.rpc.Query";
import * as _221 from "./token/v1beta1/query.rpc.Query";
import * as _222 from "./bonds/v1beta1/tx.rpc.msg";
import * as _223 from "./claims/v1beta1/tx.rpc.msg";
import * as _224 from "./entity/v1beta1/tx.rpc.msg";
import * as _225 from "./iid/v1beta1/tx.rpc.msg";
import * as _226 from "./token/v1beta1/tx.rpc.msg";
import * as _233 from "./rpc.query";
import * as _234 from "./rpc.tx";
export namespace ixo {
  export namespace bonds {
    export const v1beta1 = { ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._217,
      ..._222
    };
  }
  export namespace claims {
    export const v1beta1 = { ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._218,
      ..._223
    };
  }
  export namespace entity {
    export const v1beta1 = { ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._219,
      ..._224
    };
  }
  export namespace iid {
    export const v1beta1 = { ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._220,
      ..._225
    };
  }
  export namespace token {
    export const v1beta1 = { ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._221,
      ..._226
    };
  }
  export const ClientFactory = { ..._233,
    ..._234
  };
}