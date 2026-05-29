import type { z, ZodRawShape } from "zod";
import type { Env, IxoConfig } from "../config";
import type { ToolResult } from "./format";

export interface ToolContext {
  config: IxoConfig;
  /** Raw Worker env bindings — used by the optional server-signing tools. */
  env: Env;
}

export interface ToolDefinition<Shape extends ZodRawShape = ZodRawShape> {
  name: string;
  title?: string;
  description: string;
  inputSchema: Shape;
  handler: (
    args: z.infer<z.ZodObject<Shape>>,
    ctx: ToolContext,
  ) => Promise<ToolResult> | ToolResult;
}

/** Identity helper that preserves the precise zod shape for handler arg inference. */
export function defineTool<Shape extends ZodRawShape>(
  def: ToolDefinition<Shape>,
): ToolDefinition<Shape> {
  return def;
}
