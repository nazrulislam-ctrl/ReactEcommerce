import { createContext, useState } from "react"

export const CartCounter = createContext();

export const CartProvider=({children})=> {
    const [counter, setCounter]= useState(0);
    return (<CartCounter.Provider value={{counter, setCounter}}>{children}</CartCounter.Provider>)
}

export default CartCounter;