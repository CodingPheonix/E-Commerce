"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function CartItemCard({ item, setTotal }) {

  const [quantity, setQuantity] = useState(item.quantity || 1);

  useEffect(() => {
    item.quantity = quantity;
    item.subtotal = item.price * quantity;
  }, [quantity])

  console.log("CartItemCard item:", item);


  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 gap-4">
      <div className="flex gap-10">
        <Image src={`/${item.image}.webp`} alt={item.name} width={96} height={96} className="object-cover" />
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1 truncate text-black">{item.name}</h3>
          <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>
          <p className="font-bold text-md mt-1">Subtotal: $ <span className="text-green-600">{(item.price * quantity).toFixed(2)}</span></p>
        </div>
      </div>

      {/* COUNTER  */}
      <div className="flex gap-6 items-center">
        <FaArrowUp
          className="cursor-pointer text-gray-600 hover:text-gray-800 text-2xl"
          onClick={() => {setQuantity(quantity + 1); setTotal((prev) => prev + Number(item.price))}}
        />
        <span className="mx-2 text-black text-2xl border border-black rounded-2xl p-5">{quantity}</span>
        <FaArrowDown
          className="cursor-pointer text-gray-600 hover:text-gray-800 text-2xl"
          onClick={() => {setQuantity(quantity > 1 ? quantity - 1 : 1); setTotal((prev) => quantity > 1 ? prev - Number(item.price) : prev)}}
        />
      </div>
    </div>
  );
}
