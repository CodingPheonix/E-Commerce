import React from 'react'
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { toast, ToastContainer } from 'react-toastify'

const Item_card = ({ item }) => {

    const { addToCart } = useCart();

    const onClickHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(item);

        toast.success("Item added to cart!", {
            position: "top-right",
            autoClose: 2000,
        });
    }

    return (
        <div className="relative w-full h-[340px] p-2 hover:shadow-lg transition overflow-hidden flex flex-col bg-white rounded-xl">
            <ToastContainer />

            {/* IMAGE */}
            <div className="h-40 w-full flex-shrink-0">
                <Image
                    src={`/${item.image}.webp`}
                    alt={item.name}
                    height={400}
                    width={400}
                    loading="lazy"
                    className="w-full h-full object-contain p-2 bg-slate-100 rounded-lg"
                />
            </div>

            {/* DETAILS */}
            <div className="flex-1 px-2 py-1 flex flex-col justify-center">
                <h3 className="text-black font-semibold text-sm line-clamp-2 leading-tight">
                    {item.name}
                </h3>

                <div className="flex justify-between items-center text-sm mt-1">
                    <p className="text-gray-600">${item.price}</p>
                    <p className="text-yellow-500">⭐ {item.rating}</p>
                </div>
            </div>

            {/* ADD TO CART */}
            <button
                onClick={onClickHandler}
                className="h-10 flex-shrink-0 bg-green-700 text-white font-semibold rounded-lg w-full transition hover:bg-green-800"
            >
                Add to Cart
            </button>
        </div>
    );


}

export default Item_card
