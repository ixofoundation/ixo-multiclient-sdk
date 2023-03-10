import * as _163 from "./abci/types";
import * as _164 from "./crypto/keys";
import * as _165 from "./crypto/proof";
import * as _166 from "./libs/bits/types";
import * as _167 from "./p2p/types";
import * as _168 from "./types/block";
import * as _169 from "./types/evidence";
import * as _170 from "./types/params";
import * as _171 from "./types/types";
import * as _172 from "./types/validator";
import * as _173 from "./version/types";
export namespace tendermint {
  export const abci = { ..._163
  };
  export const crypto = { ..._164,
    ..._165
  };
  export namespace libs {
    export const bits = { ..._166
    };
  }
  export const p2p = { ..._167
  };
  export const types = { ..._168,
    ..._169,
    ..._170,
    ..._171,
    ..._172
  };
  export const version = { ..._173
  };
}