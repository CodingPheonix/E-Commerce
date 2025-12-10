"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import electronics from "../json/electronics.json"
import men from "../json/men's_clothing.json"
import women from "../json/women's_clothing.json"

export default function ProductsPage() {

    const searchParams = useSearchParams();
    const type = decodeURIComponent(searchParams.get("type"));
    const id = searchParams.get("id");

    console.log("type", type);
    console.log("id", id);

    // Fallback
    if (!type || !id) {
        return <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-2xl font-semibold">Product not found</h2>
            <p className="mt-4">Please check the product link or go back to the <a href="/categories" className="text-green-600 underline">Categories page</a>.</p>
        </div>
    }

    let product = null;

    console.log(electronics, men, women)

    if (type === "electronics") {
        product = electronics.filter(item => item.id == id)[0];
    }
    else if (type === "men's clothing") {
        product = men.filter(item => item.id == id)[0];
    }
    else if (type === "women's clothing") {
        product = women.filter(item => item.id == id)[0];
    }

    console.log("product", product);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-8">

                {/* LEFT — BIG IMAGE */}
                <div className="w-full md:w-1/2 rounded-xl overflow-hidden h-[40vh] md:h-[45vh]">
                    <Image
                        height={300}
                        width={300}
                        src={`/${product.image}.webp`}
                        alt={product.name}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* RIGHT — PRODUCT INFO */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                        <p className="text-gray-500 capitalize">{product.category}</p>

                        <p className="text-yellow-500 font-medium mt-1">⭐ {product.rating}</p>

                        <p className="text-3xl font-semibold mt-4">${product.price}</p>

                        <p className="text-gray-700 mt-4 leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <button className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                            Add to Cart
                        </button>

                        <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                            Buy Now
                        </button>
                    </div>
                </div>

            </div>
        </div>

    );
}
