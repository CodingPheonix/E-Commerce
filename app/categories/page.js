"use client"
import Link from "next/link";
import { useState } from "react";
import men from "../json/men's_clothing.json"
import women from "../json/women's_clothing.json"
import electronics from "../json/electronics.json"
import { CustomSelect } from "../Components/CustomDropdown";
import Item_card from "../Components/Item_card";

export default function CategoriesPage() {
  const categories = [...men, ...women, ...electronics];

  // State List
  const [current_category, setCurrent_category] = useState({ label: "Men's Clothing", options: '' })

  console.log("current_category", current_category);

  // Filtered Category List
  const category_list = categories.filter(category =>
    current_category.options ?
      category.type === current_category.label.toLowerCase() && category.category === current_category.options.toLowerCase() :
      category.type === current_category.label.toLowerCase()
  );
  console.log(category_list);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Categories</h1>

      <div className="flex">

        {/* Category Index  */}
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


        {/* Category Items */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 overflow-y-scroll">
          {category_list.map(item => (
            <li key={item.id}>
              <Link href={`/products?type=${item.type}&id=${item.id}`}>
                <Item_card item={item} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
