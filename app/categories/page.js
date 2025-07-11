import Link from "next/link";

async function getCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  return res.json();
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Categories</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map(cat => (
          <li key={cat}>
            <Link
              href={`/products?category=${cat}`}
              className="block bg-[#0A192F] text-white p-4 rounded-xl shadow-md text-center hover:bg-[#142e4c] transition"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
