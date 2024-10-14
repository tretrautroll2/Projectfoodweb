import { createContext, useContext, useEffect, useState } from "react";
import { Allitems } from "./Allitems";
import { firestore } from "./Config/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth } from "./Config/firebase";


const CartContext = createContext();

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < Allitems.length + 1; i++) {
        cart[i] = 0;
    }
    return cart
}

export const useCart = () => {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());  // used to be useState(cartFromLocalStorage)
    const userId = auth.currentUser ? auth.currentUser.uid : null;
    
    // const cartFromLocalStorage = JSON.parse(localStorage.getItem("cartItems")) || getDefaultCart();
    // useEffect(() => {
    //     localStorage.setItem("cartItems", JSON.stringify(cartItems))
    // }, [cartItems])


    useEffect(() => {
        const fetchCartData = async () => {
            if (userId) {
                const cartDocRef = doc(firestore, 'carts', userId)
                const cartDoc = await getDoc(cartDocRef);
                if (cartDoc.exists()) {
                    setCartItems(cartDoc.data().items);
                }
            } 
        }; 
        fetchCartData();

    }, [userId])

    useEffect(() => {
        const saveCartToFirestore = async () => {
            if (userId) {
                const cartDocRef = doc(firestore, 'carts', userId)
                await setDoc(cartDocRef, { items: cartItems })
            }
        };
        saveCartToFirestore();
    }, [cartItems, userId])


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
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }))
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }))
    };

    const updateCartItems = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }

    const clearCart = () => {
        setCartItems(() => getDefaultCart())
    }

    console.log(cartItems)
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItems, getTotal, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}