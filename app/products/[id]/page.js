"use client";
import React, { useState, useEffect } from "react";

export default function ProductPage({ params }) {
    const unwrapped = React.use(params)
    const id = unwrapped.id

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
            <div className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src={productDetails.image} alt={productDetails.title} className="h-80 object-contain" />
                <div>
                    <h1 className="text-3xl font-bold mb-2">{productDetails.title}</h1>
                    <p className="text-xl text-[#64FFDA] font-semibold mb-4">${productDetails.price}</p>
                    <p className="mb-4">{productDetails.description}</p>
                    <p className="italic text-gray-600">Category: {productDetails.category}</p>
                </div>
            </div>
        </main>
    );
}
