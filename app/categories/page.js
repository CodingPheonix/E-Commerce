"use client"
import Link from "next/link";
import { useState } from "react";
import men from "../json/men's_clothing.json"
import women from "../json/women's_clothing.json"
import electronics from "../json/electronics.json"
import { CustomSelect } from "../Components/CustomDropdown";

export default function CategoriesPage() {
  const categories = [...men, ...women, ...electronics];

  const [current_category, setCurrent_category] = useState({label: '', options: ''})

  console.log("current_category", current_category);

  const category_list = categories.filter(category => 
    current_category.options ? 
    category.type === current_category.label.toLowerCase() && category.category === current_category.options.toLowerCase():
    category.type === current_category.label.toLowerCase()
  );
  console.log(category_list);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Categories</h1>

      <div className="flex">

        {/* Index  */}
        <div className="w-1/3 p-6 bg-white flex flex-col gap-6">
          <div className="flex flex-col w-full">
            <CustomSelect
               label="Men's Clothing"
               options={["Shirt", "Pants", "Belt", "Wallet", "Tie"]}
               setCurrent_category={setCurrent_category}
               current_category={current_category}
               />
          </div>

          <div className="flex flex-col">
            <CustomSelect
               label="Women's Clothing"
               options={["Shirt", "Saree", "Pants", "Shoes", "Handbag"]}
               current_category={current_category}
               setCurrent_category={setCurrent_category}
               />
          </div>

          <div className="flex flex-col">
            <CustomSelect
               label="electronics"
               options={["Mobile", "Television"]}
               current_category={current_category}
               setCurrent_category={setCurrent_category}
             />
          </div>
        </div>


        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* {categories.map(cat => (
          <li key={cat}>
            <Link
              href={`/products?category=${cat}`}
              className="block bg-[#0A192F] text-white p-4 rounded-xl shadow-md text-center hover:bg-[#142e4c] transition"
            >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
            </li>
        ))} */}
        </ul>
      </div>
    </main>
  );
}
