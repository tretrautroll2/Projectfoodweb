import { createContext, useContext, useEffect, useState } from "react";
import { Allitems } from "./components/cart-item";

const CartContext = createContext();

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < Allitems.length + 1; i++) {
        cart[i] = 0;
    }
    return cart
}
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cartItems")) || getDefaultCart();

export const useCart = () => {
    return useContext(CartContext);
}



export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(cartFromLocalStorage);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])




    const getTotal = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = Allitems.find((product) => product.id === Number(item));
                total += cartItems[item] * itemInfo.price
            }
        }
        return total;
    };


    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    };

    const updateCartItems = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }

    const clearCart = () => {
        setCartItems(() => getDefaultCart())
    }

    console.log(getDefaultCart())
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItems, getTotal, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}