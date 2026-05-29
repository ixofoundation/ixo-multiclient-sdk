# IXO Blockchain MCP Server

A [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server that gives
AI agents conversational access to the [IXO blockchain](https://www.ixo.world) — the
Cosmos-based chain for verifiable impact (decentralized identifiers, entities, claims,
tokens, bonds) plus standard Cosmos modules (bank, staking, gov, distribution,
CosmWasm, …).

It is built on [`@ixo/impactxclient-sdk`](https://github.com/ixofoundation/ixo-multiclient-sdk)
and deployed as a **Cloudflare Worker** exposing remote MCP over **Streamable HTTP**
(and SSE), so any MCP client — Claude, Cursor, ChatGPT — can connect over the network.

Inspired by [Base MCP](https://github.com/base/base-mcp): onchain tools for agents,
**non-custodial by design**.

## 🔑 Signing modes

The server supports two modes. **The default is non-custodial** and is recommended.

### 1. Non-custodial (default) — the agent signs

**The server never holds private keys and never signs.** The agent signs with its own
wallet. The flow is:

```
1. compose   → ixo_compose_*            build a { typeUrl, value } message
2. build     → ixo_build_transaction    server fetches account #/sequence, simulates
                                         gas, and returns an unsigned SignDoc
3. sign      → (the AGENT, locally)      sign the SignDoc with your secp256k1 key
4. broadcast → ixo_broadcast_transaction send the signed TxRaw; server relays it
```

Steps 1, 2, 4 run on the server (read-only chain access). Step 3 happens entirely on
the agent side. No mnemonic or secret is configured on the Worker.

### 2. Server-signing (optional, custodial) — the server signs

A custodial mode in which the **server** signs with its own wallet and broadcasts
directly. Useful when the server itself is the authorized actor — e.g. an oracle,
relayer, or service agent operating its own account. Enabling it requires **two**
secrets:

- **`IXO_MCP_AUTH_TOKEN`** — gates the endpoint (see [Endpoint authentication](#endpoint-authentication)).
- **`IXO_MNEMONIC`** — the server wallet.

```bash
wrangler secret put IXO_MCP_AUTH_TOKEN
wrangler secret put IXO_MNEMONIC
```

When both are set, two extra tools appear:
- `ixo_server_get_signer` — the server wallet's address / did / pubkey.
- `ixo_server_sign_and_broadcast` — server signs the given messages and broadcasts
  (`gas` defaults to `'auto'`, i.e. simulated).

Concurrent broadcasts need monotonic sequence numbers. The server uses the SDK's
`SequenceManagerDO` Durable Object (bound as `SEQUENCE_MANAGER`) to allocate
sequences atomically; tune the stagger with `IXO_CLIENT_SEQUENCE_MIN_DELAY_MS`.

> ⚠️ In server-signing mode the Worker custodies a key. The signing tools are
> registered **only when `IXO_MCP_AUTH_TOKEN` is also set**, so the custodial wallet
> is never reachable on an unauthenticated endpoint — if `IXO_MNEMONIC` is set
> without a token, the tools stay disabled and a warning is logged. Treat both as
> high-value secrets, scope the wallet's funds, and prefer the non-custodial mode
> otherwise.

### Endpoint authentication

Set the **`IXO_MCP_AUTH_TOKEN`** secret to require a bearer token on `/mcp` and
`/sse`. Every request must then send `Authorization: Bearer <token>` (or
`X-API-Key: <token>`); the token is compared over SHA-256 digests. Without the
secret the transport endpoints are open — appropriate for a public, read-only /
non-custodial deployment, but **required** before enabling server-signing.

## Tools

### Query (read-only)
| Tool | Purpose |
| --- | --- |
| `ixo_network_info` | Connected network, chain id, RPC, denom, height |
| `ixo_get_account` | Account number, sequence, pubkey for an address |
| `ixo_get_balances` | Token balances (uixo annotated as IXO) |
| `ixo_list_validators` | Staking validators by bonding status |
| `ixo_get_delegations` | Delegations for a delegator |
| `ixo_get_rewards` | Outstanding staking rewards |
| `ixo_list_proposals` / `ixo_get_proposal` | Governance proposals |
| `ixo_get_iid_document` | IID / DID document by did |
| `ixo_query_entity` | IXO entity by did |
| `ixo_query_claims_collection` | Claims collection by id |
| `ixo_query_token` | Token metadata by id |
| `ixo_query_bond` | Bonding-curve bond by did |
| `ixo_wasm_query_contract` | CosmWasm smart query |
| `ixo_get_tx` | Transaction result by hash |

### Compose (build a message, JSON-safe)
Cosmos: `ixo_compose_send`, `ixo_compose_delegate`, `ixo_compose_undelegate`,
`ixo_compose_redelegate`, `ixo_compose_withdraw_rewards`, `ixo_compose_vote`,
`ixo_compose_wasm_execute`.

IXO modules: `ixo_compose_create_iid`, `ixo_compose_create_entity`,
`ixo_compose_transfer_entity`, `ixo_compose_create_claim_collection`,
`ixo_compose_submit_claim`, `ixo_compose_evaluate_claim`,
`ixo_compose_create_token`.

Generic: `ixo_compose_message` (passthrough/validator for any registered
Cosmos/IXO message type — use its `extra`-style raw value for modules without a
dedicated tool). Compose tools that take complex messages accept an `extra`
object that is merged into the message for advanced fields.

### Transaction
`ixo_build_transaction` (→ SignDoc), `ixo_simulate_transaction` (→ gas estimate),
`ixo_broadcast_transaction` (← your signed TxRaw).

### Server-signing tools (optional, custodial — only when `IXO_MNEMONIC` is set)
`ixo_server_get_signer`, `ixo_server_sign_and_broadcast`. See
[Signing modes](#-signing-modes).

## Configuration

Set via `wrangler.jsonc` `vars` (or the dashboard / `wrangler secret`). All optional.

| Var | Default | Notes |
| --- | --- | --- |
| `IXO_NETWORK` | `mainnet` | `mainnet` (`ixo-5`), `testnet` (`pandora-8`), `devnet` (`devnet-1`) |
| `IXO_RPC_URL` | network preset | Override the RPC endpoint |
| `IXO_CHAIN_ID` | network preset | Override the chain id |
| `IXO_GAS_PRICE` | `0.025uixo` | Gas price used to compute fees |
| `IXO_MCP_AUTH_TOKEN` | _unset_ | **Secret.** Requires `Authorization: Bearer <token>` on `/mcp` + `/sse`. Required to enable server-signing. |
| `IXO_MNEMONIC` | _unset_ | **Secret.** Enables optional custodial server-signing (also needs `IXO_MCP_AUTH_TOKEN`). See [Signing modes](#-signing-modes). |
| `IXO_CLIENT_SEQUENCE_MIN_DELAY_MS` | `400` | Server-signing only: stagger between sequence allocations |

## Develop & deploy

```bash
npm install
npm run typecheck        # tsc --noEmit
npm run dev              # wrangler dev (local Worker at http://localhost:8787)
npm run deploy           # wrangler deploy (to your *.workers.dev)
```

Inspect / exercise the tools locally:

```bash
npx @modelcontextprotocol/inspector
# connect to http://localhost:8787/mcp (Streamable HTTP)
```

## Connect from an MCP client

Point a remote-MCP-capable client at `https://<your-worker>.workers.dev/mcp`
(Streamable HTTP) or `/sse`. For stdio-only clients, bridge with `mcp-remote`:

```jsonc
{
  "mcpServers": {
    "ixo": {
      "command": "npx",
      "args": ["mcp-remote", "https://<your-worker>.workers.dev/mcp"]
    }
  }
}
```

If `IXO_MCP_AUTH_TOKEN` is set, pass the bearer token:

```jsonc
{
  "mcpServers": {
    "ixo": {
      "command": "npx",
      "args": [
        "mcp-remote", "https://<your-worker>.workers.dev/mcp",
        "--header", "Authorization: Bearer ${IXO_MCP_AUTH_TOKEN}"
      ],
      "env": { "IXO_MCP_AUTH_TOKEN": "your-token" }
    }
  }
}
```

## Architecture

```
src/
  index.ts        Worker entry: McpAgent (Durable Object) + /mcp, /sse, /health routes
  config.ts       Resolve network/RPC/chain-id/gas from env bindings
  networks.ts     mainnet / testnet / devnet presets (verified vs chain-registry)
  clients.ts      Memoized query client + read-only Stargate client (broadcast)
  signing.ts      optional server-signing: wallet + signing client (+ DO sequencing)
  tools/
    query.ts        read tools
    compose.ts      message builders -> { typeUrl, value }
    transaction.ts  build SignDoc / simulate / broadcast (non-custodial)
    server.ts       server-signing tools (only registered when IXO_MNEMONIC set)
    index.ts        aggregated tool list
  utils/
    tool.ts        defineTool() + tool context (config + env)
    format.ts      bigint/Uint8Array-safe JSON, uixo<->IXO display
    tx.ts          sign-doc / simulate / TxRaw encode helpers (no keys)
```

Notes:
- Requires the `nodejs_compat` compatibility flag (CosmJS uses Node built-ins).
- Two Durable Objects: `IxoMcpAgent` (the MCP session host required by the Agents SDK)
  and `SequenceManagerDO` (re-exported from `@ixo/impactxclient-sdk/cloudflare`, used
  only by the optional server-signing mode for atomic sequence allocation).
