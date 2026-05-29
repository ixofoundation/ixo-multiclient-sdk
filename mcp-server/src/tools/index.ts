import type { ToolDefinition } from "../utils/tool";
import { composeTools } from "./compose";
import { queryTools } from "./query";
import { transactionTools } from "./transaction";

/** Every MCP tool the server exposes. Add a new file here to extend the surface. */
export const allTools: ToolDefinition<any>[] = [
  ...queryTools,
  ...composeTools,
  ...transactionTools,
];
