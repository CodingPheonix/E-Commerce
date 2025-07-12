"use client";
import { useEffect, useState } from "react";
import CartItemCard from "../Components/CartItemCard";
import { useCart } from "../context/CartContext";

export default function CartPage() {
    const { cart } = useCart();
    const [cartList, setCartList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const productPromises = cart.map(async (productId) => {
                    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
                    const product = await res.json();
                    return { ...product, quantity: 1 }; 
                });
                const detailedItems = await Promise.all(productPromises);
                setCartList(detailedItems);
            } catch (err) {
                console.error("Failed to fetch cart products", err);
            } finally {
                setLoading(false);
            }
        };

        if (cart.length > 0) {
            fetchCartItems();
        } else {
            setCartList([]);
            setLoading(false);
        }
    }, [cart]);

    const total = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (loading) return <div className="p-6 text-center">Loading your cart...</div>;

    return (
        <main className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

            {cartList.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <>
                    <div className="space-y-4">
                        {cartList.map((item, index) => (
                            <CartItemCard key={index} item={item} />
                        ))}
                    </div>

                    <div className="text-right mt-8">
                        <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
                        <button className="mt-4 bg-[#64FFDA] px-6 py-3 rounded-xl text-[#0A192F] font-semibold shadow-md hover:bg-[#52e5c6] transition">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </main>
    );
}
