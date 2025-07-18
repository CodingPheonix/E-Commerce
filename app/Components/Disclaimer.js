import React from 'react';

const Disclaimer = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center p-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-white/30 text-white rounded-3xl shadow-2xl w-[90%] md:w-[500px] h-[400px] animate-fade-in">
            <h2 className="text-5xl font-extrabold mb-4 text-[#64FFDA] drop-shadow-lg">Buy Me a Coffee ☕</h2>
            <p className="text-base md:text-lg text-black mb-6 px-4">
                This project demonstrates payment integration. No real products will be delivered upon purchase.
            </p>
            <button className="px-6 py-3 rounded-xl bg-[#64FFDA] text-black font-semibold transition-all duration-300 hover:bg-[#03e4b0] hover:scale-105 shadow-md">
                Support Now
            </button>
        </div>
    );
};

export default Disclaimer;
