"use client"
import React from 'react'
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center gradient-hero overflow-hidden bg-slate-100">

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
  )
}

export default Hero
