import { Graph, END, MemorySaver } from "@langchain/langgraph";
import { gemini } from "./agent";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { getNavigation } from "./tools";

const agentTools = [getNavigation];
const agentCheckpointer = new MemorySaver();

export const ai_agent = createReactAgent({
  llm: gemini,
  tools: agentTools,
  checkpointSaver: agentCheckpointer,
});
