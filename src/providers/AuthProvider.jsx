import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { app } from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // console.log(user)
    const [loading, setLoading] = useState(true);

    // google sign in
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // create user
    const registration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // send verification email
    const verifyEmail = (currentUser) => {
        return sendEmailVerification(currentUser)
    }

    // reset email
    const resetEmail = (email) => {
        return sendPasswordResetEmail(auth, email)
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
        googleSignIn,
        registration,
        verifyEmail,
        resetEmail,
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