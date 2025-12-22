import React from 'react'
import Link from 'next/link';

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Links = () => {
    return (
        <section className="flex justify-between items-center m-10">

            <div className="w-1/5 p-4 flex flex-col gap-4">
                <h3 className="font-semibold text-2xl">E-Commerce</h3>
                <p>We have clothes that suits your style and you are proud to wear. From men to women</p>
                <ul className='flex gap-4'>
                    <li className='hover: cursor-pointer p-2 border border-green-600 hover:bg-green-600 hover:text-white rounded-full'><FaFacebook /></li>
                    <li className='hover: cursor-pointer p-2 border border-green-600 hover:bg-green-600 hover:text-white rounded-full'><RiInstagramFill /></li>
                    <li className='hover: cursor-pointer p-2 border border-green-600 hover:bg-green-600 hover:text-white rounded-full'><FaXTwitter /></li>
                    <li className='hover: cursor-pointer p-2 border border-green-600 hover:bg-green-600 hover:text-white rounded-full'><FaYoutube /></li>
                </ul>
            </div>

            <div className="w-1/5 p-4 flex flex-col gap-4">
                <h4 className="text-xl font-semibold">Company</h4>
                <Link href={'#'} className="text-sm text-slate-600">About</Link>
                <Link href={'#'} className="text-sm text-slate-600">Features</Link>
                <Link href={'#'} className="text-sm text-slate-600">Work</Link>
                <Link href={'#'} className="text-sm text-slate-600">Career</Link>
            </div>

            <div className="w-1/5 p-4 flex flex-col gap-4">
                <h4 className="text-xl font-semibold">Help</h4>
                <Link href={'#'} className="text-sm text-slate-600">Customer Support</Link>
                <Link href={'#'} className="text-sm text-slate-600">Delivery Details</Link>
                <Link href={'#'} className="text-sm text-slate-600">Terms and Conditions</Link>
                <Link href={'#'} className="text-sm text-slate-600">Privacy Policy</Link>
            </div>

            <div className="w-1/5 p-4 flex flex-col gap-4">
                <h4 className="text-xl font-semibold">FAQ</h4>
                <Link href={'#'} className="text-sm text-slate-600">Account</Link>
                <Link href={'#'} className="text-sm text-slate-600">Manage Deliveries</Link>
                <Link href={'#'} className="text-sm text-slate-600">Orders</Link>
                <Link href={'#'} className="text-sm text-slate-600">Payments</Link>
            </div>

            <div className="w-1/5 p-4 flex flex-col gap-4">
                <h4 className="text-xl font-semibold">Resourses</h4>
                <Link href={'#'} className="text-sm text-slate-600">Free Ebooks</Link>
                <Link href={'#'} className="text-sm text-slate-600">Development Tutorial</Link>
                <Link href={'#'} className="text-sm text-slate-600">Blog</Link>
                <Link href={'#'} className="text-sm text-slate-600">Youtube Channel</Link>
            </div>
        </section>
    )
}

export default Links
