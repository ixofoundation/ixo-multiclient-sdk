import * as _101 from "./bonds/v1beta1/bonds";
import * as _102 from "./bonds/v1beta1/genesis";
import * as _103 from "./bonds/v1beta1/query";
import * as _104 from "./bonds/v1beta1/tx";
import * as _105 from "./entity/v1beta1/entity";
import * as _106 from "./entity/v1beta1/genesis";
import * as _107 from "./entity/v1beta1/proposal";
import * as _108 from "./entity/v1beta1/query";
import * as _109 from "./entity/v1beta1/tx";
import * as _110 from "./iid/v1beta1/event";
import * as _111 from "./iid/v1beta1/genesis";
import * as _112 from "./iid/v1beta1/iid";
import * as _113 from "./iid/v1beta1/query";
import * as _114 from "./iid/v1beta1/tx";
import * as _115 from "./payments/v1/genesis";
import * as _116 from "./payments/v1/payments";
import * as _117 from "./payments/v1/query";
import * as _118 from "./payments/v1/tx";
import * as _119 from "./project/v1/genesis";
import * as _120 from "./project/v1/project";
import * as _121 from "./project/v1/query";
import * as _122 from "./project/v1/tx";
import * as _123 from "./token/v1beta1/genesis";
import * as _124 from "./token/v1beta1/proposal";
import * as _125 from "./token/v1beta1/query";
import * as _126 from "./token/v1beta1/token";
import * as _127 from "./token/v1beta1/tx";
import * as _173 from "./bonds/v1beta1/query.rpc.Query";
import * as _174 from "./entity/v1beta1/query.rpc.Query";
import * as _175 from "./iid/v1beta1/query.rpc.Query";
import * as _176 from "./payments/v1/query.rpc.Query";
import * as _177 from "./project/v1/query.rpc.Query";
import * as _178 from "./token/v1beta1/query.rpc.Query";
import * as _179 from "./bonds/v1beta1/tx.rpc.msg";
import * as _180 from "./entity/v1beta1/tx.rpc.msg";
import * as _181 from "./iid/v1beta1/tx.rpc.msg";
import * as _182 from "./payments/v1/tx.rpc.msg";
import * as _183 from "./project/v1/tx.rpc.msg";
import * as _184 from "./token/v1beta1/tx.rpc.msg";
import * as _187 from "./rpc.query";
import * as _188 from "./rpc.tx";
export namespace ixo {
  export namespace bonds {
    export const v1beta1 = { ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._173,
      ..._179
    };
  }
  export namespace entity {
    export const v1beta1 = { ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._174,
      ..._180
    };
  }
  export namespace iid {
    export const v1beta1 = { ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._175,
      ..._181
    };
  }
  export namespace payments {
    export const v1 = { ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._176,
      ..._182
    };
  }
  export namespace project {
    export const v1 = { ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._177,
      ..._183
    };
  }
  export namespace token {
    export const v1beta1 = { ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._178,
      ..._184
    };
  }
  export const ClientFactory = { ..._187,
    ..._188
  };
}