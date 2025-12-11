"use client"
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import { FaLongArrowAltRight } from "react-icons/fa";

import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

export default function HomePage() {

  return (
    <main>
      <section className="h-[calc(100vh-5rem)] flex justify-around items-center">

        <div className=" bg-slate-100 w-full h-full p-23 flex flex-col justify-around items-center gap-6">
          <p className="py-1 px-2 border border-green-500 bg-white rounded-full"><b>50% OFF</b> Summer Super Sale</p>
          <p className="text-4xl font-semibold">Step into Style - Your Ultimate Fashion Destination</p>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi esse necessitatibus dolores quos repellendus in fugiat aliquid, quam, voluptatem quis cupiditate? Voluptatum, quis?</p>
          <button className="flex gap-2 items-center bg-green-600 py-2 px-4 text-white font-semibold">Shop Now <FaLongArrowAltRight /></button>
        </div>

      </section>

      <section className="h-[20vh] flex justify-center items-center">
        <ul className="w-screen flex justify-around items-center">

          <li className="flex justify-center gap-3 items-center w-1/3">
            <span className="text-4xl h-6 w-6 rounded-full bg-green-600 -translate-x-3 -translate-y-3"><LiaShippingFastSolid /></span>
            <span>
              <h3>Free Shipping</h3>
              <p>On all orders over $50</p>
            </span>
          </li>

          <li className="flex justify-center gap-3 items-center w-1/3">
            <span className="text-4xl h-6 w-6 rounded-full bg-green-600 -translate-x-3 -translate-y-3"><MdOutlinePayment /></span>
            <span>
              <h3>Flexible Payment</h3>
              <p>Multiple Sucure Payment Options</p>
            </span>
          </li>

          <li className="flex justify-center gap-3 items-center w-1/3">
            <span className="text-4xl h-6 w-6 rounded-full bg-green-600 -translate-x-3 -translate-y-3"><MdSupportAgent /></span>
            <span>
              <h3>24/7 Support</h3>
              <p>We support online all days</p>
            </span>
          </li>
        </ul>
      </section>

      <section className="w-full h-[80vh] flex justify-center gap-3 items-center">
        <div className="h-full w-[45%] bg-red-500">

        </div>
        <div className="h-full w-[45%] flex flex-col justify-center gap-3">
          <div className="w-full h-[50%] bg-green-500"></div>
          <div className="w-full h-[50%] bg-green-500"></div>
        </div>
      </section>
    </main>
  );
}