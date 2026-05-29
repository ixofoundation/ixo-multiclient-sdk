import { toBase64 } from "@cosmjs/encoding";

export interface ToolResult {
  content: { type: "text"; text: string }[];
  isError?: boolean;
  // MCP's CallToolResult carries an open index signature; mirror it so our
  // handlers are structurally assignable when registered on the server.
  [key: string]: unknown;
}

/** JSON.stringify that is safe for the bigint / Uint8Array values pervasive in CosmJS codegen. */
export function stringify(value: unknown): string {
  return JSON.stringify(
    value,
    (_key, val) => {
      if (typeof val === "bigint") return val.toString();
      if (val instanceof Uint8Array) return toBase64(val);
      return val;
    },
    2,
  );
}

export function textResult(data: unknown): ToolResult {
  return {
    content: [
      { type: "text", text: typeof data === "string" ? data : stringify(data) },
    ],
  };
}

export function errorResult(error: unknown): ToolResult {
  const message = error instanceof Error ? error.message : String(error);
  return { content: [{ type: "text", text: `Error: ${message}` }], isError: true };
}

const MICRO = 1_000_000n;

/** Convert a uixo (micro-IXO) integer string to a human IXO display string. */
export function uixoToIxo(amount: string | number | bigint): string {
  const micro = BigInt(amount);
  const negative = micro < 0n;
  const abs = negative ? -micro : micro;
  const whole = abs / MICRO;
  const frac = (abs % MICRO).toString().padStart(6, "0").replace(/0+$/, "");
  const text = frac ? `${whole}.${frac}` : `${whole}`;
  return negative ? `-${text}` : text;
}

export interface Coin {
  denom: string;
  amount: string;
}

/** Annotate coins with a human-readable IXO value for the uixo denom. */
export function describeCoins(coins: readonly Coin[]): Array<Coin & { display?: string }> {
  return coins.map((c) => ({
    denom: c.denom,
    amount: c.amount,
    display: c.denom === "uixo" ? `${uixoToIxo(c.amount)} IXO` : undefined,
  }));
}
