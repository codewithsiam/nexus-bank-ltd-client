import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { app } from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const registration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logout = () => {
        signOut(auth)
    }

    // 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        registration,
        login,
        logout
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;