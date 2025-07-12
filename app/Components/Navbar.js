import React from 'react'
import Link from 'next/link'
import Cart_icon from './Cart_icon'

const Navbar = () => {
    return (
        <nav className="bg-[#0A192F] text-white p-4 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">FakeStore</Link>
                <div className="space-x-6">
                    <Link href="/products" className="hover:underline">Products</Link>
                    <Link href="/categories" className="hover:underline">Categories</Link>
                    <Link href="/cart">
                        <Cart_icon />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
