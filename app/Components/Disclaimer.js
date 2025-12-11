import React from 'react';

const Disclaimer = ({setIsPurchasing, isPurchasing}) => {
    return (
        <div className='w-screen h-screen bg-white/50 fixed left-0 top-0 z-40 flex justify-center items-center'>
            <div className="z-50 flex flex-col justify-center items-center text-center p-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-green-500 rounded-3xl shadow-2xl w-[90%] md:w-[500px] h-[400px] animate-fade-in">
                <h2 className="text-5xl font-extrabold mb-4 text-green-600 drop-shadow-lg">Buy Me a Coffee ☕</h2>
                <p className="text-base md:text-lg text-black mb-6 px-4">
                    This project demonstrates a sample E-Commerce Application, AI Agents and payment integration. No real products will be delivered upon purchase.
                </p>
                <div className='flex w-full justify-around items-center'>
                <button onClick={() => {setIsPurchasing(!isPurchasing)}} className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold transition-all duration-300 hover:bg-green-700 hover:scale-105 shadow-md">
                    Go Back
                </button>
                <button className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold transition-all duration-300 hover:bg-green-700 hover:scale-105 shadow-md">
                    Support Now
                </button>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
