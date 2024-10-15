import { createContext, useContext, useEffect, useState } from "react";
import { Allitems } from "./Allitems";
import { firestore } from "./Config/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth } from "./Config/firebase";
import { useAuth } from "./components/user-status";


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
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cartItems")) || getDefaultCart();
    const { currentUser } = useAuth();
    const [cartItems, setCartItems] = useState(cartFromLocalStorage);

    
    useEffect(() => {
        const fetchCartData = async () => {
            if (currentUser) {           
                const cartDocRef = doc(firestore, 'carts', currentUser.uid)
                const cartDoc = await getDoc(cartDocRef);
                if (cartDoc.exists()) {
                    setCartItems(cartDoc.data().items);
                    console.log(cartDoc.data().items)
                }else {
                    const newCart = getDefaultCart();
                    await setDoc(cartDocRef, { items: newCart });
                    setCartItems(newCart);
                }
            }
        };
        fetchCartData();
    }, [currentUser])
    
    useEffect(() => {
        if (!currentUser) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems))

        } else {
            const saveCartToFirestore = async () => {
                const cartDocRef = doc(firestore, 'carts', currentUser.uid)
                await setDoc(cartDocRef, { items: cartItems })
            };
            saveCartToFirestore();
        }
        
    }, [cartItems, currentUser])

   

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

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItems, getTotal, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}