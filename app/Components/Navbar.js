import React from 'react'
import Link from 'next/link'
import Cart_icon from './Cart_icon'

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-white text-black shadow-md">
            <div className='flex justify-around items-center bg-green-800 text-white text-sm py-2 px-4'>
                <p>Call us: +123-456-789</p>
                <p><Link className='underline hover:text-green-500' href={'*'}>Sign up</Link> and get 25% OFF on your first Order</p>
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
                    <Link href="/cart" className="hover:underline">Shop</Link>
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
