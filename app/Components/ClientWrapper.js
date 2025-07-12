// "use client";
// import { useContext, createContext, useState } from "react";

// const cart_context = createContext()

// export default function ClientWrapper({ children }) {
//     const [cart, setCart] = useState([])
//     return (
//         <>
//             <cart_context.Provider value={{ cart, setCart }}>
//                 {children}
//             </cart_context.Provider>
//         </>
//     );
// }

// export function useCart(){
//     return useContext(cart_context)
// }