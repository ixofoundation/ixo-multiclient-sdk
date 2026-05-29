import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { McpAgent } from "agents/mcp";
import { Env, isServerSigningEnabled, resolveConfig } from "./config";
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

    // The optional custodial server-signing tools are only exposed when a
    // mnemonic is configured; otherwise the server stays purely non-custodial.
    const tools: ToolDefinition<any>[] = isServerSigningEnabled(this.env)
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
      return mcpHandler.fetch(request, env, ctx);
    }

    if (url.pathname === "/sse" || url.pathname.startsWith("/sse/")) {
      return sseHandler.fetch(request, env, ctx);
    }

    return new Response("Not found", { status: 404 });
  },
};
