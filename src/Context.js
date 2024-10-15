import { createContext, useContext, useEffect, useState } from "react";
import { Allitems } from "./Allitems";
import { firestore } from "./Config/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useAuth } from "./components/user-status";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    const { currentUser } = useAuth();
    
    useEffect(() => {
        const fetchCartData = async () => {
            if (currentUser) {
                const cartDocRef = doc(firestore, 'carts', currentUser.uid)
                const cartDoc = await getDoc(cartDocRef);
                if(cartDoc.exists()) {
                    setCartItems(cartDoc.data().items);
                    console.log(cartDoc.data().items)

                } else {
                    await setDoc(cartDocRef, { items: {} });
                    setCartItems({});
                }
            } else {
                const cartFromLocalStorage = JSON.parse(localStorage.getItem("cartItems")) || {};
                setCartItems(cartFromLocalStorage);
            }
        };
        fetchCartData();
    }, [currentUser])

    useEffect(() => {
        if (currentUser) {
            const saveCartToFirestore = async () => {
                const cartDocRef = doc(firestore, 'carts', currentUser.uid)
                await setDoc(cartDocRef, { items: cartItems })
            };
            saveCartToFirestore();
        } else {
            localStorage.setItem("cartItems", JSON.stringify(cartItems))

        }

    }, [cartItems])

    console.log('Check', currentUser)
    console.log('Check2', cartItems);

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
        setCartItems({})
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItems, getTotal, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    return useContext(CartContext);
}