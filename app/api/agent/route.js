import { ai_agent } from "@/app/utils/graph";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        console.log(body)

        if (!body.text || !body.id) {
            return NextResponse.json(
                { message: "Missing input or thread_id" },
                { status: 400 }
            );
        }

        const response = await ai_agent.invoke(
            {
                messages: [
                    {
                        role: 'user',
                        content: body.text,
                    },
                ],
            },
            {
                configurable: {
                    thread_id: body.id,
                },
            }
        );

        return NextResponse.json({
            message: "ai_response fetched",
            data: response,
        });
    } catch (error) {
        console.error("Error invoking AI agent:", error);
        return NextResponse.json(
            {
                message: "Failed to fetch AI response",
                error: (error).message,
            },
            { status: 500 }
        );
    }
}
