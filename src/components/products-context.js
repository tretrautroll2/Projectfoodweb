import { firestore } from "../Config/firebase";
import { getDocs, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useContext,createContext, useState } from "react";

const ItemContext = createContext();

export const ItemContextProvider = ({children}) => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        const unsubcribe = onSnapshot(collection(firestore, 'items'), (querySnapshot) => {
            const productArray = [];
            querySnapshot.forEach((doc) => {
                productArray.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setProducts(productArray);
        })
        return () => unsubcribe();
    }, [])
 
    return(
        <ItemContext.Provider value={{products}}>
        {children}
        </ItemContext.Provider>
    )
}

export const useItem = () => {
    return useContext(ItemContext);
}