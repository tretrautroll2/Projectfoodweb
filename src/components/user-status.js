import React, { useState, useEffect, useContext, createContext } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../Config/firebase';


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}