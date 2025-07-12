export default function CartItemCard({ item }) {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-4 gap-4">
      <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
      <div className="flex-1">
        <h3 className="font-semibold text-lg mb-1 truncate text-black">{item.title}</h3>
        <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>
        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
        <p className="font-bold text-md mt-1 text-[#64FFDA]">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}
