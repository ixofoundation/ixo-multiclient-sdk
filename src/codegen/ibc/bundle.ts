import * as _102 from "./applications/transfer/v1/genesis";
import * as _103 from "./applications/transfer/v1/query";
import * as _104 from "./applications/transfer/v1/transfer";
import * as _105 from "./applications/transfer/v1/tx";
import * as _106 from "./applications/transfer/v2/packet";
import * as _107 from "./core/channel/v1/channel";
import * as _108 from "./core/channel/v1/genesis";
import * as _109 from "./core/channel/v1/query";
import * as _110 from "./core/channel/v1/tx";
import * as _111 from "./core/client/v1/client";
import * as _112 from "./core/client/v1/genesis";
import * as _113 from "./core/client/v1/query";
import * as _114 from "./core/client/v1/tx";
import * as _115 from "./core/commitment/v1/commitment";
import * as _116 from "./core/connection/v1/connection";
import * as _117 from "./core/connection/v1/genesis";
import * as _118 from "./core/connection/v1/query";
import * as _119 from "./core/connection/v1/tx";
import * as _120 from "./core/port/v1/query";
import * as _121 from "./core/types/v1/genesis";
import * as _122 from "./lightclients/localhost/v1/localhost";
import * as _123 from "./lightclients/solomachine/v1/solomachine";
import * as _124 from "./lightclients/solomachine/v2/solomachine";
import * as _125 from "./lightclients/tendermint/v1/tendermint";
import * as _199 from "./applications/transfer/v1/query.rpc.Query";
import * as _200 from "./core/channel/v1/query.rpc.Query";
import * as _201 from "./core/client/v1/query.rpc.Query";
import * as _202 from "./core/connection/v1/query.rpc.Query";
import * as _203 from "./core/port/v1/query.rpc.Query";
import * as _204 from "./applications/transfer/v1/tx.rpc.msg";
import * as _205 from "./core/channel/v1/tx.rpc.msg";
import * as _206 from "./core/client/v1/tx.rpc.msg";
import * as _207 from "./core/connection/v1/tx.rpc.msg";
import * as _222 from "./rpc.query";
import * as _223 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._102,
        ..._103,
        ..._104,
        ..._105,
        ..._199,
        ..._204
      };
      export const v2 = { ..._106
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._107,
        ..._108,
        ..._109,
        ..._110,
        ..._200,
        ..._205
      };
    }
    export namespace client {
      export const v1 = { ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._201,
        ..._206
      };
    }
    export namespace commitment {
      export const v1 = { ..._115
      };
    }
    export namespace connection {
      export const v1 = { ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._202,
        ..._207
      };
    }
    export namespace port {
      export const v1 = { ..._120,
        ..._203
      };
    }
    export namespace types {
      export const v1 = { ..._121
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._122
      };
    }
    export namespace solomachine {
      export const v1 = { ..._123
      };
      export const v2 = { ..._124
      };
    }
    export namespace tendermint {
      export const v1 = { ..._125
      };
    }
  }
  export const ClientFactory = { ..._222,
    ..._223
  };
}