import * as _156 from "./abci/types";
import * as _157 from "./crypto/keys";
import * as _158 from "./crypto/proof";
import * as _159 from "./libs/bits/types";
import * as _160 from "./p2p/types";
import * as _161 from "./types/block";
import * as _162 from "./types/evidence";
import * as _163 from "./types/params";
import * as _164 from "./types/types";
import * as _165 from "./types/validator";
import * as _166 from "./version/types";
export namespace tendermint {
  export const abci = { ..._156
  };
  export const crypto = { ..._157,
    ..._158
  };
  export namespace libs {
    export const bits = { ..._159
    };
  }
  export const p2p = { ..._160
  };
  export const types = { ..._161,
    ..._162,
    ..._163,
    ..._164,
    ..._165
  };
  export const version = { ..._166
  };
}