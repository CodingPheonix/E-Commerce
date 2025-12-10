import React from 'react'
import Image from 'next/image';

const Item_card = ({ item }) => {
    return (
        <div className="relative w-5/6 h-5/6 p-2 hover:shadow-lg transition overflow-hidden flex flex-col">

            {/* IMAGE — 70% height */}
            <div className="h-[60%] w-full">
                <Image
                    src={`/${item.image}.webp`}
                    alt={item.name}
                    height={500}
                    width={500}
                    loading='lazy'
                    className="w-full h-full object-cover p-3 bg-slate-100"
                />
            </div>

            {/* DETAILS — 20% height */}
            <div className="h-[25%] px-4 py-2 flex flex-col justify-center">
                <h3 className="text-black font-semibold adjust_text">{item.name}</h3>
                <div className='flex justify-between items-center'>
                    <p className="text-gray-600 adjust_text">${item.price}</p>
                    <p className="text-yellow-500 adjust_text">⭐ {item.rating}</p>
                </div>
            </div>

            {/* ADD TO CART — 15% height */}
            <button className="h-[15%] border text-white font-semibold bg-green-700 mx-auto my-2 w-[90%] flex items-center justify-center transition">
                Add to Cart
            </button>

        </div>
    );
}

export default Item_card
