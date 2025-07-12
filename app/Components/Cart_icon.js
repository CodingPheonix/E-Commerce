"use client"
import React from 'react'
import { useCart } from "../context/CartContext";

const Cart_icon = () => {

    const {cart} = useCart()
    const number_of_items = cart.length

    return (
        <>
            <span className='py-2 px-4 border-2 border-black rounded-md relative'>
                <div className='absolute w-5 h-5 text-center text-[12px] bg-red-700 rounded-full -top-2 -right-2'>
                    {number_of_items}
                </div>
                Cart
            </span>
        </>
    )
}

export default Cart_icon
