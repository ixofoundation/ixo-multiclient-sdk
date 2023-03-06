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
import * as _143 from "./entity/v1beta1/entity";
import * as _144 from "./entity/v1beta1/event";
import * as _145 from "./entity/v1beta1/genesis";
import * as _146 from "./entity/v1beta1/proposal";
import * as _147 from "./entity/v1beta1/query";
import * as _148 from "./entity/v1beta1/tx";
import * as _149 from "./iid/v1beta1/event";
import * as _150 from "./iid/v1beta1/genesis";
import * as _151 from "./iid/v1beta1/iid";
import * as _152 from "./iid/v1beta1/query";
import * as _153 from "./iid/v1beta1/tx";
import * as _154 from "./iid/v1beta1/types";
import * as _155 from "./payments/v1/genesis";
import * as _156 from "./payments/v1/payments";
import * as _157 from "./payments/v1/query";
import * as _158 from "./payments/v1/tx";
import * as _159 from "./project/v1/genesis";
import * as _160 from "./project/v1/project";
import * as _161 from "./project/v1/query";
import * as _162 from "./project/v1/tx";
import * as _163 from "./token/v1beta1/authz";
import * as _164 from "./token/v1beta1/event";
import * as _165 from "./token/v1beta1/genesis";
import * as _166 from "./token/v1beta1/proposal";
import * as _167 from "./token/v1beta1/query";
import * as _168 from "./token/v1beta1/token";
import * as _169 from "./token/v1beta1/tx";
import * as _226 from "./bonds/v1beta1/query.rpc.Query";
import * as _227 from "./claims/v1beta1/query.rpc.Query";
import * as _228 from "./entity/v1beta1/query.rpc.Query";
import * as _229 from "./iid/v1beta1/query.rpc.Query";
import * as _230 from "./payments/v1/query.rpc.Query";
import * as _231 from "./project/v1/query.rpc.Query";
import * as _232 from "./token/v1beta1/query.rpc.Query";
import * as _233 from "./bonds/v1beta1/tx.rpc.msg";
import * as _234 from "./claims/v1beta1/tx.rpc.msg";
import * as _235 from "./entity/v1beta1/tx.rpc.msg";
import * as _236 from "./iid/v1beta1/tx.rpc.msg";
import * as _237 from "./payments/v1/tx.rpc.msg";
import * as _238 from "./project/v1/tx.rpc.msg";
import * as _239 from "./token/v1beta1/tx.rpc.msg";
import * as _246 from "./rpc.query";
import * as _247 from "./rpc.tx";
export namespace ixo {
  export namespace bonds {
    export const v1beta1 = { ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._226,
      ..._233
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
      ..._227,
      ..._234
    };
  }
  export namespace entity {
    export const v1beta1 = { ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._228,
      ..._235
    };
  }
  export namespace iid {
    export const v1beta1 = { ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._229,
      ..._236
    };
  }
  export namespace payments {
    export const v1 = { ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._230,
      ..._237
    };
  }
  export namespace project {
    export const v1 = { ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._231,
      ..._238
    };
  }
  export namespace token {
    export const v1beta1 = { ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._232,
      ..._239
    };
  }
  export const ClientFactory = { ..._246,
    ..._247
  };
}