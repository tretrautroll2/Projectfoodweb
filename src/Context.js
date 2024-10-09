import { createContext, useContext, useState } from "react";
import { Allitems } from "./Pages/Home";
const CartContext = createContext();

const getDefaultCart = () => {
    let cart = {};
    for(let i = 1; i < Allitems.length + 1; i++){
        cart[i] = 0;
    }
    return cart
}

export const useCart = () => {
    return useContext(CartContext);
}


export const CartProvider = ( {children} ) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const getTotal = () => {
        let total = 0;
        for(const item in cartItems){
         if(cartItems[item] > 0) {
            let itemInfo = Allitems.find((product) => product.id === Number(item));
            total += cartItems[item] * itemInfo.price
         }
     }
     return total;
     };
    

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1 }))
    };

    const updateCartItems = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : newAmount}))
    }
//    console.log(cartItems) 
    return(
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, updateCartItems, getTotal}}>
    {children}
    </CartContext.Provider>
    )
}