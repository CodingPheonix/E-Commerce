"use client"
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Products = () => {
    return (
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
    )
}

export default Products
