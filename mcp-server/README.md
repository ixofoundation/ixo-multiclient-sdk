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

## 🔑 Non-custodial signing model

**This server never holds private keys and never signs.** The agent signs with its own
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
`ixo_compose_send`, `ixo_compose_delegate`, `ixo_compose_undelegate`,
`ixo_compose_redelegate`, `ixo_compose_withdraw_rewards`, `ixo_compose_vote`,
`ixo_compose_wasm_execute`, `ixo_compose_create_iid`, and `ixo_compose_message`
(generic passthrough/validator for any registered Cosmos/IXO message type).

### Transaction
`ixo_build_transaction` (→ SignDoc), `ixo_simulate_transaction` (→ gas estimate),
`ixo_broadcast_transaction` (← your signed TxRaw).

## Configuration

Set via `wrangler.jsonc` `vars` (or the dashboard / `wrangler secret`). All optional.

| Var | Default | Notes |
| --- | --- | --- |
| `IXO_NETWORK` | `mainnet` | `mainnet` (`ixo-5`), `testnet` (`pandora-8`), `devnet` (`devnet-1`) |
| `IXO_RPC_URL` | network preset | Override the RPC endpoint |
| `IXO_CHAIN_ID` | network preset | Override the chain id |
| `IXO_GAS_PRICE` | `0.025uixo` | Gas price used to compute fees |

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

## Architecture

```
src/
  index.ts        Worker entry: McpAgent (Durable Object) + /mcp, /sse, /health routes
  config.ts       Resolve network/RPC/chain-id/gas from env bindings
  networks.ts     mainnet / testnet / devnet presets (verified vs chain-registry)
  clients.ts      Memoized query client + read-only Stargate client (broadcast)
  tools/
    query.ts        read tools
    compose.ts      message builders -> { typeUrl, value }
    transaction.ts  build SignDoc / simulate / broadcast
    index.ts        aggregated tool list
  utils/
    tool.ts        defineTool() + tool context
    format.ts      bigint/Uint8Array-safe JSON, uixo<->IXO display
    tx.ts          sign-doc / simulate / TxRaw encode helpers (no keys)
```

Notes:
- Requires the `nodejs_compat` compatibility flag (CosmJS uses Node built-ins).
- The Durable Object (`IxoMcpAgent`) is the MCP session host required by the Agents SDK.
- `@ixo/impactxclient-sdk` also ships a `SequenceManagerDO` (`/cloudflare` subpath) for
  the *server-signs* model; this server does not use it because signing is client-side.
