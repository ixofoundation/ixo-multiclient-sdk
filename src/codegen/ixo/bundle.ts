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
import * as _156 from "./payments/v1/genesis";
import * as _157 from "./payments/v1/payments";
import * as _158 from "./payments/v1/query";
import * as _159 from "./payments/v1/tx";
import * as _160 from "./project/v1/genesis";
import * as _161 from "./project/v1/project";
import * as _162 from "./project/v1/query";
import * as _163 from "./project/v1/tx";
import * as _164 from "./token/v1beta1/authz";
import * as _165 from "./token/v1beta1/event";
import * as _166 from "./token/v1beta1/genesis";
import * as _167 from "./token/v1beta1/proposal";
import * as _168 from "./token/v1beta1/query";
import * as _169 from "./token/v1beta1/token";
import * as _170 from "./token/v1beta1/tx";
import * as _227 from "./bonds/v1beta1/query.rpc.Query";
import * as _228 from "./claims/v1beta1/query.rpc.Query";
import * as _229 from "./entity/v1beta1/query.rpc.Query";
import * as _230 from "./iid/v1beta1/query.rpc.Query";
import * as _231 from "./payments/v1/query.rpc.Query";
import * as _232 from "./project/v1/query.rpc.Query";
import * as _233 from "./token/v1beta1/query.rpc.Query";
import * as _234 from "./bonds/v1beta1/tx.rpc.msg";
import * as _235 from "./claims/v1beta1/tx.rpc.msg";
import * as _236 from "./entity/v1beta1/tx.rpc.msg";
import * as _237 from "./iid/v1beta1/tx.rpc.msg";
import * as _238 from "./payments/v1/tx.rpc.msg";
import * as _239 from "./project/v1/tx.rpc.msg";
import * as _240 from "./token/v1beta1/tx.rpc.msg";
import * as _247 from "./rpc.query";
import * as _248 from "./rpc.tx";
export namespace ixo {
  export namespace bonds {
    export const v1beta1 = { ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._227,
      ..._234
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
      ..._228,
      ..._235
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
      ..._229,
      ..._236
    };
  }
  export namespace iid {
    export const v1beta1 = { ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._230,
      ..._237
    };
  }
  export namespace payments {
    export const v1 = { ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._231,
      ..._238
    };
  }
  export namespace project {
    export const v1 = { ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._232,
      ..._239
    };
  }
  export namespace token {
    export const v1beta1 = { ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._233,
      ..._240
    };
  }
  export const ClientFactory = { ..._247,
    ..._248
  };
}