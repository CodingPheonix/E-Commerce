import { DynamicStructuredTool } from "langchain/tools";
import { z } from "zod";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
    model: "gemini-2.0-flash"
});

const keywordToRouteMap = {
    mens_pants: "/mens/pants",
    mens_shirts: "/mens/shirts",
    mens_shoes: "/mens/shoes",
    ladies_pants: "/ladies/pants",
    ladies_sweater: "/ladies/sweater",
    ladies_tops: "/ladies/tops",
};

export const getNavigation = new DynamicStructuredTool({
    name: "getPerfectLocation",
    description: "Determines the route based on what user wants to browse.",
    schema: z.object({
        input: z.string().describe("A sentence from the user describing what they want to browse"),
    }),
    func: async ({ input }) => {
        const routeOptions = Object.entries(keywordToRouteMap)
            .map(([key, route]) => `${key} : ${route}`)
            .join("\n");

        const prompt = `You are a smart router system. You are given a prompt that contains a target user and a target destination. Figure out what is the required route you are supposed to return.
    
        The available routes are:
        ${routeOptions}

        Respond ONLY with the matching route. User's input is:
        ${input}

        Examples:
        "user: i want to buy some men's pants" → "/mens/pants"
        "user: i want some sweater for my daughter" → "/ladies/sweater"
        "user: i want to get some men's shoes" → "/mens/shoes"`;

        const response = await model.invoke(prompt);
        const route = response.content?.trim();

        return Object.values(keywordToRouteMap).includes(route)
            ? {
                route,
                message: `Routing to ${route}`,
            }
            : {
                route: "/not-found",
                message: "Destination not found",
            };
    },
});
