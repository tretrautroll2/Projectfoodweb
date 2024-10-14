import React, { useState, useEffect, useContext, createContext } from 'react';
import { onAuthStateChanged} from "firebase/auth";
import { auth } from '../Config/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { firestore } from '../Config/firebase';


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setCurrentUser(user);
            if (user) {
                const userDocRef = doc(firestore, 'users', user.uid)
                const userDoc = await getDoc(userDocRef)
                if(userDoc.exists()) {
                    setUsername(userDoc.data().username);
                } else {
                    console.log('no data found')
                }
            } else {
                setUsername('');
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);



    return (
        <AuthContext.Provider value={{ currentUser, username, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}