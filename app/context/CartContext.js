// app/context/CartContext.js
"use client";
import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {

    if (cart.find((cart_item) => cart_item.id === item.id)) {
      return; // Item already in cart, do not add again
    }

    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (item) => {

    if (!cart.find((cart_item) => cart_item.id === item.id)) {
      return; // Item not in cart, nothing to remove
    }

    setCart((prev) => prev.filter((prev_item) => prev_item.id !== item.id));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
