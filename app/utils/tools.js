import { DynamicStructuredTool } from "langchain/tools";
import { gemini } from "./agent";
import { z } from "zod";
import { getCategories } from "../Components/api_calls";

// Initialise model
// const model = new ChatGoogleGenerativeAI({
//     apiKey: process.env.GEMINI_API_KEY,
//     model: "gemini-2.0-flash"
// });

// get categories list
const get_category_routes = async () => {
    const category_routes = []
    const categories = await getCategories()
    for (const category of categories) {
        const modified_category = encodeURIComponent(category)
        category_routes.push(`/products?category=${modified_category}`)
    }
    console.log(category_routes)
    return category_routes
}

// const keywordToRouteMap = {
//     mens_pants: "/mens/pants",
//     mens_shirts: "/mens/shirts",
//     mens_shoes: "/mens/shoes",
//     ladies_pants: "/ladies/pants",
//     ladies_sweater: "/ladies/sweater",
//     ladies_tops: "/ladies/tops",
// };

export const getNavigation = new DynamicStructuredTool({
    name: "getPerfectLocation",
    description: "Determines the route based on what user wants to browse.",
    schema: z.object({
        input: z.string().describe("A sentence from the user describing what they want to browse"),
    }),
    func: async ({ input }) => {
        const category_routes = await get_category_routes();

        const prompt = `You are a smart router system. You are given a prompt that contains a target user and a target destination. Figure out what is the required route you are supposed to return.

        The available routes are:
        ${category_routes.join("\n")}

        Respond ONLY with the matching route. User's input is:
        ${input}

        Examples:
        "user: i want to buy some men's pants" → "/products?category=men's clothing"
        "user: i want some sweater for my daughter" → "/products?category=women's clothing"
        "user: i want to buy a monitor" → "/products?category=electronics"`;

        const response = await gemini.invoke(prompt);
        const route = response.content?.trim();

        return category_routes.includes(route)
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
