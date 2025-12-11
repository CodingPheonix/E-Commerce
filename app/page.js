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

      <section className="h-[30vh] flex justify-around items-center">
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


      {/* OUR PRODUCTS  */}
      <section>
        <h2 className="text-center text-4xl p-4 font-bold">Our Products</h2>

        <div className="w-full h-[60vh] flex justify-around gap-3 items-center">

          <span className="h-[40vh]">
            <Image
              src={"/w-accessories-6.webp"}
              alt="Left Image"
              width={500}
              height={500}
              className="object-contain h-[60%] w-[12vw]" />
            <div className="flex w-full justify-between items-center">
              <span>Hand Bags</span>
              <span>⭐ 4.9</span>
            </div>
            <p>Classic Hand Bags</p>
            <p><del>$120</del> $80</p>
          </span>

          <span className="h-[40vh]">
            <Image
              src={"/w-accessories-5.webp"}
              alt="Left Image"
              width={500}
              height={500}
              className="object-contain h-[60%] w-[12vw]" />
            <div className="flex w-full justify-between items-center">
              <span>Designer Shoes</span>
              <span>⭐ 4.7</span>
            </div>
            <p>Classic Women's Shoes</p>
            <p><del>$122</del> $90</p>
          </span>

          <span className="h-[40vh]">
            <Image
              src={"/pants-6.webp"}
              alt="Left Image"
              width={500}
              height={500}
              className="object-contain h-[60%] w-[12vw]" />
            <div className="flex w-full justify-between items-center">
              <span>Pants</span>
              <span>⭐ 4.5</span>
            </div>
            <p>Cotton Pants</p>
            <p><del>$150</del> $100</p>
          </span>

          <span className="h-[40vh]">
            <Image
              src={"/television-9.webp"}
              alt="Left Image"
              width={500}
              height={500}
              className="object-contain h-[60%] w-[12vw]" />
            <div className="flex w-full justify-between items-center">
              <span>Television</span>
              <span>⭐ 4.3</span>
            </div>
            <p>Smart Television</p>
            <p><del>$220</del> $150</p>
          </span>

          <span className="h-[40vh]">
            <Image
              src={"/mobile-10.webp"}
              alt="Left Image"
              width={500}
              height={500}
              className="object-contain h-[60%] w-[12vw]" />
            <div className="flex w-full justify-between items-center">
              <span>Mobile</span>
              <span>⭐ 4.8</span>
            </div>
            <p>Smart Mobile</p>
            <p><del>$120</del> $80</p>
          </span>

        </div>
      </section>

      {/* RATING  */}
      <section className="py-5 bg-slate-200">
        <h3 className="text-center text-4xl font-bold p-6">Ratings</h3>

        <div class="max-w-4xl mx-auto bg-white rounded-2xl p-6 my-8 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div class="flex flex-col items-center justify-center text-center">
            <div class="text-6xl font-bold text-gray-900">4.5</div>
            <div class="text-gray-500 text-sm">out of 5</div>

            <div class="flex justify-center gap-1 mt-2 text-yellow-400">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896 4.664 23.175l1.402-8.178L.132 9.21l8.2-1.192z" /></svg>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896 4.664 23.175l1.402-8.178L.132 9.21l8.2-1.192z" /></svg>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896 4.664 23.175l1.402-8.178L.132 9.21l8.2-1.192z" /></svg>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896 4.664 23.175l1.402-8.178L.132 9.21l8.2-1.192z" /></svg>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896 4.664 23.175l1.402-8.178L.132 9.21l8.2-1.192z" /></svg>
            </div>

            <div class="text-gray-500 text-sm mt-1">1,234 ratings</div>
          </div>

          <div class="flex flex-col gap-3 justify-center">
            <div class="flex items-center gap-3">
              <span class="w-6 text-right font-semibold text-gray-800">5</span>
              <div class="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div class="bg-green-900 h-full w-[60%]"></div>
              </div>
              <span class="w-12 text-right text-gray-500 text-sm">743</span>
            </div>

            <div class="flex items-center gap-3">
              <span class="w-6 text-right font-semibold text-gray-800">4</span>
              <div class="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div class="bg-green-800 h-full w-[30%]"></div>
              </div>
              <span class="w-12 text-right text-gray-500 text-sm">312</span>
            </div>

            <div class="flex items-center gap-3">
              <span class="w-6 text-right font-semibold text-gray-800">3</span>
              <div class="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div class="bg-green-700 h-full w-[12%]"></div>
              </div>
              <span class="w-12 text-right text-gray-500 text-sm">98</span>
            </div>

            <div class="flex items-center gap-3">
              <span class="w-6 text-right font-semibold text-gray-800">2</span>
              <div class="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div class="bg-green-600 h-full w-[5%]"></div>
              </div>
              <span class="w-12 text-right text-gray-500 text-sm">47</span>
            </div>

            <div class="flex items-center gap-3">
              <span class="w-6 text-right font-semibold text-gray-800">1</span>
              <div class="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div class="bg-green-500 h-full w-[3%]"></div>
              </div>
              <span class="w-12 text-right text-gray-500 text-sm">34</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}