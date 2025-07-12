"use client"
import Link from "next/link";
import Navbar from "./Components/Navbar";

export default function HomePage() {

  return (
    <main>
        <section className="min-h-screen flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-5xl font-bold text-[#0A192F] mb-6">FakeStore</h1>
          <p className="mb-8 max-w-xl">
            Discover great products at great prices, powered by Fake Store API.
          </p>
          <Link href="/products" className="bg-[#64FFDA] px-6 py-3 rounded-xl text-[#0A192F] font-semibold shadow-md hover:bg-[#52e5c6] transition">
            Browse Products
          </Link>
        </section>
    </main>
  );
}