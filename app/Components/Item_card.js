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
        <div className="group w-full h-[340px] p-2 bg-white rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-lg">
            <ToastContainer />

            {/* IMAGE WRAPPER */}
            <div className="relative h-[70%] flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                    src={`/${item.image}.webp`}
                    alt={item.name}
                    height={400}
                    width={400}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* HOVER OVERLAY (for smoothness) */}
                <div
                    className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                />

                {/* ADD TO CART */}
                <button
                    onClick={onClickHandler}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2
                                w-[90%] h-10
                                bg-green-700 text-white font-semibold rounded-lg
                                transition-all duration-300 ease-out
                                opacity-0 translate-y-4
                                group-hover:opacity-100 group-hover:translate-y-0
                                hover:bg-green-800
                            "
                >
                    Add to Cart
                </button>
            </div>

            {/* DETAILS */}
            <div className="flex-1 px-2 py-2 flex flex-col justify-center">
                <h3 className="text-black font-semibold text-sm line-clamp-2 leading-tight">
                    {item.name}
                </h3>

                <div className="flex justify-between items-center text-sm mt-1">
                    <p className="text-gray-600">${item.price}</p>
                    <p className="text-yellow-500">⭐ {item.rating}</p>
                </div>
            </div>
        </div>
    );



}

export default Item_card
