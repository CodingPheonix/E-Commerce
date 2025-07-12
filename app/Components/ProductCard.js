import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <Link href={`/products/${product.id}`} className="block bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto mb-4" />
            <h2 className="font-semibold text-lg mb-2 truncate text-black">{product.title}</h2>
            <p className="text-sm text-gray-600">${product.price}</p>
        </Link>
    );
}