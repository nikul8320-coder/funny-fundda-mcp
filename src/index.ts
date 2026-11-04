
import { McpServer } from "@modelcontextprotocol/server";
import { createMcpHandler } from "agents/mcp/server";

function createServer() {
  const server = new McpServer({
    name: "funny-fundda-mcp",
    version: "1.0.0",
  });

  server.registerTool(
    "check_server",
    {
      description: "Check if Funny Fundda MCP server is working",
    },
    async () => ({
      content: [
        {
          type: "text",
          text: "Funny Fundda MCP Server is working!",
        },
      ],
    })
  );

  return server;
}

const handler = createMcpHandler(createServer);

export default {
  fetch(request, env, ctx) {
    return handler(request, env, ctx);
  },
};
