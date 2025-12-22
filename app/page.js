"use client"
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import { FaLongArrowAltRight } from "react-icons/fa";

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function HomePage() {

  return (
    <main>
      {/* <section className="h-[calc(100vh-5rem)] flex justify-around items-center">

        <div className=" bg-slate-100 w-full h-full p-23 flex flex-col justify-around items-center gap-6">
          <p className="py-1 px-2 border border-green-500 bg-white rounded-full"><b>50% OFF</b> Summer Super Sale</p>
          <p className="text-4xl font-semibold">Step into Style - Your Ultimate Fashion Destination</p>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi esse necessitatibus dolores quos repellendus in fugiat aliquid, quam, voluptatem quis cupiditate? Voluptatum, quis?</p>
          <button className="flex gap-2 items-center bg-green-600 py-2 px-4 text-white font-semibold">Shop Now <FaLongArrowAltRight /></button>
        </div>

      </section> */}

      <section className="relative min-h-[80vh] flex items-center gradient-hero overflow-hidden bg-slate-100">
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-green-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-200 rounded-full blur-3xl" />
        </div> */}

        <div className="container mx-auto px-4 relative z-10 ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4 py-8">
                <span className="text-sm font-medium tracking-widest text-primary uppercase">
                  New Collection 2024
                </span>
                <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
                  Discover Your
                  <br />
                  <span className="text-primary">Signature Style</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Explore our curated collection of premium fashion and electronics.
                  Elegance redefined for the modern lifestyle.
                </p>
              </div>
              <div className="flex flex-wrap gap-5">
                <button size="lg" className="group">
                  <Link href="/categories" className="flex gap-3 items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                    Shop Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </button>
                <button variant="outline" size="lg" className="bg-white py-2 px-4 rounded-xl">
                  <Link href="/categories?type=women's clothing">
                    Women's Collection
                  </Link>
                </button>
              </div>
            </motion.div>

            {/* Hero Images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block p-8"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-elevated aspect-[3/4]">
                    <img
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop"
                      alt="Fashion collection"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-elevated aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=400&fit=crop"
                      alt="Shopping experience"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-elevated aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop"
                      alt="Electronics"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-elevated aspect-[3/4]">
                    <img
                      src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=600&fit=crop"
                      alt="Men's fashion"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES  */}
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
      {/* <section>
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
      </section> */}

      <section className="py-20">
        <div className="mx-auto max-w-[90vw] px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Curated For You
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2">
                Featured Products
              </h2>
            </div>

            <Link
              href="/products"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              {
                img: "/w-accessories-6.webp",
                title: "Hand Bags",
                desc: "Classic Hand Bags",
                rating: "4.9",
                price: "$80",
                old: "$120",
              },
              {
                img: "/w-accessories-5.webp",
                title: "Designer Shoes",
                desc: "Classic Women's Shoes",
                rating: "4.7",
                price: "$90",
                old: "$122",
              },
              {
                img: "/pants-6.webp",
                title: "Pants",
                desc: "Cotton Pants",
                rating: "4.5",
                price: "$100",
                old: "$150",
              },
              {
                img: "/television-9.webp",
                title: "Television",
                desc: "Smart Television",
                rating: "4.3",
                price: "$150",
                old: "$220",
              },
              {
                img: "/mobile-10.webp",
                title: "Mobile",
                desc: "Smart Mobile",
                rating: "4.8",
                price: "$80",
                old: "$120",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-background p-4 transition hover:shadow-lg"
              >
                <div className="aspect-square flex items-center justify-center bg-muted rounded-xl mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="object-contain h-40 w-full group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="flex items-center justify-between text-sm font-medium">
                  <span>{item.title}</span>
                  <span className="text-yellow-500">⭐ {item.rating}</span>
                </div>

                <p className="text-sm text-muted-foreground mt-1">
                  {item.desc}
                </p>

                <p className="mt-2 text-sm font-semibold">
                  <del className="text-muted-foreground mr-2">{item.old}</del>
                  {item.price}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-10 text-center md:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* SHOP BY CATEGORY  */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Explore
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2">
              Shop by Category
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Men's Collection",
                image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=800&fit=crop",
                link: "/products?type=men's clothing"
              },
              {
                name: "Women's Collection",
                image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop",
                link: "/products?type=women's clothing"
              },
              {
                name: "Electronics",
                image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=800&fit=crop",
                link: "/products?type=electronics"
              }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={category.link}
                  className="group block relative aspect-[3/4] overflow-hidden rounded-2xl"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-semibold text-background">
                      {category.name}
                    </h3>
                    <span className="text-sm text-background/80 mt-1 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Shop Now →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* RATING  */}
      <section className="py-5 bg-slate-200">
        <h3 className="text-center text-4xl font-bold p-6">Ratings</h3>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 my-8 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-6xl font-bold text-gray-900">4.5</div>
            <div className="text-gray-500 text-sm">out of 5</div>

            <div className="flex justify-center gap-1 mt-2 text-yellow-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896 4.664 23.175l1.402-8.178L.132 9.21l8.2-1.192z" /></svg>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896 4.664 23.175l1.402-8.178L.132 9.21l8.2-1.192z" /></svg>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896 4.664 23.175l1.402-8.178L.132 9.21l8.2-1.192z" /></svg>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896 4.664 23.175l1.402-8.178L.132 9.21l8.2-1.192z" /></svg>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896 4.664 23.175l1.402-8.178L.132 9.21l8.2-1.192z" /></svg>
            </div>

            <div className="text-gray-500 text-sm mt-1">1,234 ratings</div>
          </div>

          <div className="flex flex-col gap-3 justify-center">
            <div className="flex items-center gap-3">
              <span className="w-6 text-right font-semibold text-gray-800">5</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-green-900 h-full w-[60%]"></div>
              </div>
              <span className="w-12 text-right text-gray-500 text-sm">743</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-6 text-right font-semibold text-gray-800">4</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-green-800 h-full w-[30%]"></div>
              </div>
              <span className="w-12 text-right text-gray-500 text-sm">312</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-6 text-right font-semibold text-gray-800">3</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-green-700 h-full w-[12%]"></div>
              </div>
              <span className="w-12 text-right text-gray-500 text-sm">98</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-6 text-right font-semibold text-gray-800">2</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-green-600 h-full w-[5%]"></div>
              </div>
              <span className="w-12 text-right text-gray-500 text-sm">47</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-6 text-right font-semibold text-gray-800">1</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-green-500 h-full w-[3%]"></div>
              </div>
              <span className="w-12 text-right text-gray-500 text-sm">34</span>
            </div>
          </div>
        </div>
      </section>

      {/* Links  */}
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
    </main>
  );
}