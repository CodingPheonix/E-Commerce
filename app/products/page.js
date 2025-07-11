import ProductCard from "../Components/ProductCard";
import Link from "next/link";

// Fetch all products
async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}

// Fetch all categories
async function getCategories() {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    if (!res.ok) throw new Error("Failed to fetch categories");
    return res.json();
}

// Icons
const ArrowLeftDoubleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"#000000"} fill={"white"} {...props}>
        <path d="M11.5 18C11.5 18 5.50001 13.5811 5.5 12C5.49999 10.4188 11.5 6 11.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M18.5 18C18.5 18 12.5 13.5811 12.5 12C12.5 10.4188 18.5 6 18.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

export default async function ProductsPage({ searchParams }) {
    const selectedCategory = searchParams?.category;
    const [products, categories] = await Promise.all([
        getProducts(),
        getCategories(),
    ]);


    const filteredProducts = selectedCategory
        ? products.filter((p) => p.category === selectedCategory)
        : products;

    return (
        <main className="flex flex-col md:flex-row p-6 gap-6">
            {/* Sidebar Category List */}
            <aside className="md:w-1/4 w-full">
                <div className="flex justify-start gap-4">
                    <Link href={'/'}><span><ArrowLeftDoubleIcon /></span></Link>
                    <h2 className="text-xl font-semibold mb-4">Categories</h2>
                </div>
                <ul className="space-y-2">
                    <li>
                        <Link
                            href="/products"
                            className={`block px-4 py-2 rounded-md ${!selectedCategory
                                ? "bg-[#64FFDA] text-[#0A192F] font-bold"
                                : "hover:bg-gray-200 hover:text-[#0A192F] hover:font-semibold"
                                }`}
                        >
                            All
                        </Link>
                    </li>
                    {categories.map((cat) => (
                        <li key={cat}>
                            <Link
                                href={`/products?category=${encodeURIComponent(cat)}`}
                                className={`block px-4 py-2 rounded-md capitalize ${selectedCategory === cat
                                    ? "bg-[#64FFDA] text-[#0A192F] font-bold"
                                    : "hover:bg-gray-200 hover:text-[#0A192F] hover:font-semibold"
                                    }`}
                            >
                                {cat}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Product Grid */}
            <section className="md:w-3/4 w-full">
                <h1 className="text-2xl font-bold mb-4 capitalize">
                    {selectedCategory ? selectedCategory : "All Products"}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                {filteredProducts.length === 0 && (
                    <p className="mt-4 text-gray-500">No products found.</p>
                )}
            </section>
        </main>
    );
}
