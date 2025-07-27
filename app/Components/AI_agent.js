'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { SendHorizonal } from 'lucide-react';

const AIChatAssistant = () => {

    // STATE LIST
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [chatList, setChatlist] = useState([
        {
            role: 'user' | 'assistant',
            content: ""
        }
    ]);

    // FUNCTIONS

    // Send Prompt to AI
    const Ai_assistance = async (prompt) => {
        const response = await fetch(`/api/agent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prompt)
        });
        const result = await response.json();
        console.log(result);
        
        return { response, result };
    };
    

    return (
        <>
            {/* Floating Agent Icon */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    className="w-16 h-16 rounded-full shadow-lg bg-white border hover:scale-105 transition"
                    onClick={() => setOpen(true)}
                >
                    <Image
                        src="/AI_agent.png"
                        alt="AI Agent"
                        width={64}
                        height={64}
                        className="rounded-full p-2 bg-black border-white border-2"
                    />
                </button>
            </div>

            {/* Chat Panel */}
            {open && (
                <div className="fixed bottom-0 right-0 w-full max-w-sm h-[70vh] sm:h-[80vh] bg-white shadow-2xl border-l border-t z-50 flex flex-col rounded-tl-2xl">
                    {/* Header */}
                    <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-tl-2xl">
                        <h2 className="font-semibold">AI Assistant</h2>
                        <button onClick={() => setOpen(false)} className="text-sm hover:opacity-70">✕</button>
                    </div>

                    {/* Chat Body */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm text-gray-700">
                        {Array.isArray(chatList) && chatList.length === 0 ? (
                            <div className="text-center text-gray-400">Ask me anything...</div>
                        ) : (
                            chatList.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`px-4 py-2 rounded-xl max-w-[75%] ${msg.role === 'user'
                                                ? 'bg-blue-500 text-white rounded-br-none'
                                                : 'bg-gray-200 text-black rounded-bl-none'
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>


                    {/* Input Box */}
                    <div className="p-3 border-t flex items-center gap-2 bg-gray-50">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            className="text-black flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition"
                            onClick={() => {
                                // TODO: Send message logic
                                // console.log('Sending:', input);

                                setChatlist(prev => [...prev, {
                                    role: 'user',
                                    content: input
                                }])

                                Ai_assistance(input)

                                setInput('');
                            }}
                        >
                            <SendHorizonal className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIChatAssistant;
