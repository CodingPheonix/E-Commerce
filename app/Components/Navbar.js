"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link'

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useCart } from '../context/CartContext';

const Navbar = () => {

    const { cart } = useCart();

    const [count, setCount] = useState(cart.length);

    useEffect(() => {
        setCount(cart.length);
    }, [cart])


    return (
        <nav className="bg-white text-black shadow-md">
            <div className='flex justify-around items-center bg-green-800 text-white text-sm py-2 px-4'>
                <p>Call us: +123-456-789</p>
                <p><Link className='underline hover:text-green-500' href={'#'}>Sign up</Link> and get 25% OFF on your first Order</p>
                <ul className='flex gap-4'>
                    <li className='hover: cursor-pointer'><FaFacebook /></li>
                    <li className='hover: cursor-pointer'><RiInstagramFill /></li>
                    <li className='hover: cursor-pointer'><FaXTwitter /></li>
                    <li className='hover: cursor-pointer'><FaYoutube /></li>
                </ul>
            </div>
            <div className="max-w-6xl mx-auto flex justify-between items-center py-2">
                <Link href="/" className="text-xl font-bold">E-Commerce</Link>
                <div className="space-x-6">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/cart" className="hover:underline relative pt-2 pr-2">Shop
                        <span className={`absolute top-0 right-0 h-4 w-4 text-center rounded-full bg-green-500 text-white text-xs ${count == 0 ? 'hidden' : 'block'}`}>
                            {count}
                        </span>
                    </Link>
                    <Link href="/categories" className="hover:underline">Categories</Link>
                    <Link href="/about" className="hover:underline">About Us</Link>
                    <Link href="https://www.iamsayan.com/Contact" className="hover:underline">Contact</Link>
                </div>
                <div className='space-x-3'>
                    <button className='px-4 py-2 rounded-2xl bg-white border-green-600 border-2 hover:bg-green-600 hover:text-white active:bg-green-700'>Log In</button>
                    <button className='px-4 py-2 rounded-2xl bg-green-600 border-green-600 border-2 text-white font-semibold hover:bg-green-700 active:bg-green-800'>Sign In</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
