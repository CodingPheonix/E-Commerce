"use client";
import { useEffect, useState } from "react";
import CartItemCard from "../Components/CartItemCard";
import { useCart } from "../context/CartContext";
import Disclaimer from "../Components/Disclaimer";

export default function CartPage() {
  const { cart } = useCart();
  const [total, setTotal] = useState(0);
  const [cartList, setCartList] = useState(() =>
    (cart || []).map((item) => ({
      ...item,
      quantity: 1,
      subtotal: (Number(item.price) || 0) * 1,
    }))
  );
  const [isPurchasing, setIsPurchasing] = useState(false);

  // Keep cartList synced with cart
  useEffect(() => {
    setCartList(
      (cart || []).map((item) => ({
        ...item,
        quantity: 1,
        subtotal: (Number(item.price) || 0) * 1,
      }))
    );
  }, [cart]);

  // Recalculate total whenever cartList changes
  useEffect(() => {
    const newTotal = cartList.reduce((sum, item) => {
      const qty = item.quantity ?? 1;
      const price = Number(item.price) || 0;
      const subtotal = Number(item.subtotal ?? price * qty) || price * qty;
      return sum + subtotal;
    }, 0);

    setTotal(newTotal);
  }, [cartList]);

  return (
    <main className="max-w-5xl mx-auto p-6">
      {isPurchasing && <Disclaimer setIsPurchasing={setIsPurchasing} isPurchasing={isPurchasing} />}

      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartList.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartList.map((item, index) => (
              <CartItemCard key={item.id ?? index} item={item} setTotal={setTotal} />
            ))}
          </div>

          <div className="text-right mt-8">
            <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
            <button
              onClick={() => {setIsPurchasing((prev) => !prev)}}
              className="mt-4 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </main>
  );
}
