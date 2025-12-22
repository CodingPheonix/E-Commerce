"use client"
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion'

const Shop_by_category = () => {
    return (
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
    )
}

export default Shop_by_category
