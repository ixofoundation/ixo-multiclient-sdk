import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { McpAgent } from "agents/mcp";
import { canServerSign, Env, hasAuthToken, isServerSigningEnabled, resolveConfig } from "./config";
import { allTools } from "./tools";
import { serverSigningTools } from "./tools/server";
import { errorResult } from "./utils/format";
import type { ToolContext, ToolDefinition } from "./utils/tool";

// Re-exported so Cloudflare can bind the Durable Object used for atomic sequence
// allocation in the optional server-signing mode. Imported from the /cloudflare
// subpath to avoid loading crypto at module-eval time.
export { SequenceManagerDO } from "@ixo/impactxclient-sdk/cloudflare";

/**
 * IXO blockchain MCP server, deployed as a Cloudflare Worker (Durable Object per
 * session). Exposes query + transaction tools over remote MCP. Non-custodial:
 * the agent signs; this server only builds sign-docs and broadcasts signed txs.
 */
export class IxoMcpAgent extends McpAgent<Env> {
  server = new McpServer({
    name: "ixo-mcp",
    version: "0.1.0",
  });

  async init() {
    const ctx: ToolContext = { config: resolveConfig(this.env), env: this.env };

    // The optional custodial server-signing tools are only exposed when BOTH a
    // mnemonic AND an endpoint auth token are configured, so a custodial wallet
    // is never reachable on an unauthenticated public endpoint. The fetch
    // handler additionally enforces the token on /mcp and /sse.
    if (isServerSigningEnabled(this.env) && !hasAuthToken(this.env)) {
      console.error(
        "[ixo-mcp] IXO_MNEMONIC is set but IXO_MCP_AUTH_TOKEN is not. " +
          "Server-signing tools are DISABLED to avoid exposing a custodial wallet " +
          "on an unauthenticated endpoint. Set IXO_MCP_AUTH_TOKEN to enable them.",
      );
    }
    const tools: ToolDefinition<any>[] = canServerSign(this.env)
      ? [...allTools, ...serverSigningTools]
      : allTools;

    for (const tool of tools) {
      this.server.registerTool(
        tool.name,
        {
          title: tool.title ?? tool.name,
          description: tool.description,
          inputSchema: tool.inputSchema,
        },
        async (args: Record<string, unknown>) => {
          try {
            return await tool.handler(args as never, ctx);
          } catch (err) {
            console.error(`Tool ${tool.name} failed:`, err);
            return errorResult(err);
          }
        },
      );
    }
  }
}

const mcpHandler = IxoMcpAgent.serve("/mcp", { binding: "MCP_OBJECT" });
const sseHandler = IxoMcpAgent.serveSSE("/sse", { binding: "MCP_OBJECT" });

function extractBearer(request: Request): string | undefined {
  const auth = request.headers.get("authorization");
  if (auth && auth.toLowerCase().startsWith("bearer ")) return auth.slice(7).trim();
  const apiKey = request.headers.get("x-api-key");
  return apiKey ? apiKey.trim() : undefined;
}

/**
 * Authorize a request to the MCP transport endpoints. When no auth token is
 * configured the endpoint is open (public read-only / non-custodial use). When
 * a token IS configured (required for server-signing), the request must present
 * it. Compared over SHA-256 digests to avoid length/timing leaks.
 */
async function isAuthorized(request: Request, env: Env): Promise<boolean> {
  if (!hasAuthToken(env)) return true;
  const provided = extractBearer(request);
  if (!provided) return false;
  const enc = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest("SHA-256", enc.encode(provided)),
    crypto.subtle.digest("SHA-256", enc.encode(env.IXO_MCP_AUTH_TOKEN!)),
  ]);
  const av = new Uint8Array(a);
  const bv = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < av.length; i++) diff |= av[i] ^ bv[i];
  return diff === 0;
}

function unauthorized(): Response {
  return new Response(JSON.stringify({ error: "unauthorized" }), {
    status: 401,
    headers: { "content-type": "application/json", "www-authenticate": "Bearer" },
  });
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "/health") {
      const config = resolveConfig(env);
      return Response.json({
        name: "ixo-mcp",
        status: "ok",
        network: config.network,
        chainId: config.chainId,
        rpcUrl: config.rpcUrl,
        endpoints: { streamableHttp: "/mcp", sse: "/sse" },
      });
    }

    if (url.pathname === "/mcp") {
      if (!(await isAuthorized(request, env))) return unauthorized();
      return mcpHandler.fetch(request, env, ctx);
    }

    if (url.pathname === "/sse" || url.pathname.startsWith("/sse/")) {
      if (!(await isAuthorized(request, env))) return unauthorized();
      return sseHandler.fetch(request, env, ctx);
    }

    return new Response("Not found", { status: 404 });
  },
};
