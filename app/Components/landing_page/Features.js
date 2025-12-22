import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

const Features = () => {
    return (
        <section className="h-[30vh] flex justify-around items-center">
            <ul className="w-screen flex justify-around items-center">

                <li className="flex justify-center gap-3 items-center w-1/3">
                    <span className="text-4xl h-6 w-6 rounded-full bg-green-600 -translate-x-3 -translate-y-3"><LiaShippingFastSolid /></span>
                    <span>
                        <h3>Free Shipping</h3>
                        <p>On all orders over $50</p>
                    </span>
                </li>

                <li className="flex justify-center gap-3 items-center w-1/3">
                    <span className="text-4xl h-6 w-6 rounded-full bg-green-600 -translate-x-3 -translate-y-3"><MdOutlinePayment /></span>
                    <span>
                        <h3>Flexible Payment</h3>
                        <p>Multiple Sucure Payment Options</p>
                    </span>
                </li>

                <li className="flex justify-center gap-3 items-center w-1/3">
                    <span className="text-4xl h-6 w-6 rounded-full bg-green-600 -translate-x-3 -translate-y-3"><MdSupportAgent /></span>
                    <span>
                        <h3>24/7 Support</h3>
                        <p>We support online all days</p>
                    </span>
                </li>
            </ul>
        </section>
    )
}

export default Features
