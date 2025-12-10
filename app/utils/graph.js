import { Graph, END, MemorySaver } from "@langchain/langgraph";
import { gemini } from "./agent";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { getNavigation, ManageCart } from "./tools";

const agentTools = [getNavigation, ManageCart];
const agentCheckpointer = new MemorySaver();


export const ai_agent = createReactAgent({
  llm: gemini,
  tools: agentTools,
  checkpointSaver: agentCheckpointer,
});
