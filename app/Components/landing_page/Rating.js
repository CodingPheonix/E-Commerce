import React from 'react'

const Rating = () => {
    return (
        <section className="py-5 bg-slate-200">
            <h3 className="text-center text-4xl font-bold p-6">Ratings</h3>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 my-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="flex flex-col items-center justify-center text-center">
                    <div className="text-6xl font-bold text-gray-900">4.5</div>
                    <div className="text-gray-500 text-sm">out of 5</div>

                    <div className="flex justify-center gap-1 mt-2 text-yellow-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896 4.664 23.175l1.402-8.178L.132 9.21l8.2-1.192z" /></svg>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896 4.664 23.175l1.402-8.178L.132 9.21l8.2-1.192z" /></svg>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896 4.664 23.175l1.402-8.178L.132 9.21l8.2-1.192z" /></svg>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896 4.664 23.175l1.402-8.178L.132 9.21l8.2-1.192z" /></svg>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896 4.664 23.175l1.402-8.178L.132 9.21l8.2-1.192z" /></svg>
                    </div>

                    <div className="text-gray-500 text-sm mt-1">1,234 ratings</div>
                </div>

                <div className="flex flex-col gap-3 justify-center">
                    <div className="flex items-center gap-3">
                        <span className="w-6 text-right font-semibold text-gray-800">5</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div className="bg-green-900 h-full w-[60%]"></div>
                        </div>
                        <span className="w-12 text-right text-gray-500 text-sm">743</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="w-6 text-right font-semibold text-gray-800">4</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div className="bg-green-800 h-full w-[30%]"></div>
                        </div>
                        <span className="w-12 text-right text-gray-500 text-sm">312</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="w-6 text-right font-semibold text-gray-800">3</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div className="bg-green-700 h-full w-[12%]"></div>
                        </div>
                        <span className="w-12 text-right text-gray-500 text-sm">98</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="w-6 text-right font-semibold text-gray-800">2</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div className="bg-green-600 h-full w-[5%]"></div>
                        </div>
                        <span className="w-12 text-right text-gray-500 text-sm">47</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="w-6 text-right font-semibold text-gray-800">1</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div className="bg-green-500 h-full w-[3%]"></div>
                        </div>
                        <span className="w-12 text-right text-gray-500 text-sm">34</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rating
