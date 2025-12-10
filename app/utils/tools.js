import { DynamicStructuredTool } from "langchain/tools";
import { gemini } from "./agent";
import { z } from "zod";
import { getCategories, getProducts } from "../Components/api_calls";

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

export const getNavigation = new DynamicStructuredTool({
    name: "getPerfectLocation",
    description: "Use this tool ONLY when a user is expressing interest in browsing or buying items (e.g., they say 'I want to buy', 'looking for', or 'need to shop for'). Returns the appropriate category page route based on intent.",
    schema: z.object({
        input: z.string().describe("A user sentence describing what they want to browse or shop for. For example: 'I want to buy a phone', 'Looking for men’s shirts', or 'Need to browse kids wear'."),
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

export const ManageCart = new DynamicStructuredTool({
    name: 'Cart_Manager',
    description: "Use this tool only when the user wants to manage their shopping cart. This includes actions such as adding products to the cart, removing items, updating quantities, or viewing the contents of the cart. Do not use this tool for product browsing, searching, or category navigation.",
    schema: z.object({
        input: z.string().describe("The cart-related action to perform. 'add' to add a product, 'remove' to remove it"),
    }),
    func: async ({ input }) => {

        const all_products = await getProducts()

        const prompt = `
            You are a smart shopping assistant.

            Your task:
            - Understand if the user wants to add or remove a product from their cart.
            - Match the intended product name from the list of products.
            - Only use products from the list provided.
            - Use partial or approximate matching if needed.

            📦 All available products:
            ${JSON.stringify(all_products)}

            🗣️ User Message:
            "${input}"

            Return ONLY a JSON object:
            - { "action": "add", "product_id": 7 }
            - { "action": "remove", "product_id": 12 }

            If no match is found:
            { "action": "none", "product_id": null }

            No other explanation.
        `;

        const response = await gemini.invoke(prompt);
        const result = response.content?.trim();

        return result

    },
})