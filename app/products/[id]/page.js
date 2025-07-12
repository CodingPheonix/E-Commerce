"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Cancel01Icon } from "@/app/Components/SVGs";

export default function ProductPage({ params }) {
    const unwrapped = React.use(params)
    const id = unwrapped.id
    const router = useRouter()

    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const result = await res.json();
                setProductDetails(result);
            } catch (err) {
                console.error("Error fetching product:", err);
            } finally {
                setLoading(false);
            }
        };

        getProduct();
    }, [id]);

    if (loading) return <div className="p-6 text-center">Loading...</div>;
    if (!productDetails) return <div className="p-6 text-center text-red-600">Product not found.</div>;

    return (
        <main className="p-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-6">
                <div onClick={() => {router.back()}} className="w-full my-1 flex justify-end">
                    <Cancel01Icon />
                </div>
                <div className="flex gap-7">
                    <img src={productDetails.image} alt={productDetails.title} className="h-80 object-contain mx-auto" />
                    <div className="flex flex-col">
                        <div>
                            <h1 className="text-3xl font-bold mb-2 text-black">{productDetails.title}</h1>
                            <p className="text-xl text-[#64FFDA] font-semibold mb-4">${productDetails.price}</p>
                            <p className="mb-4 text-black">{productDetails.description}</p>
                            <p className="italic text-gray-600">Category: {productDetails.category}</p>
                        </div>
                        <footer className="text-black my-1 flex gap-3">
                            <button className="px-4 py-2 rounded-md bg-[#64FFDA] font-semibold text-white hover:bg-[#03e4b0]">Add to Cart</button>
                            <button className="px-4 py-2 rounded-md bg-[#64FFDA] font-semibold text-white hover:bg-[#03e4b0]">Buy now</button>
                        </footer>
                    </div>
                </div>
            </div>
        </main>


    );
}
