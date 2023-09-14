import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import axios from "axios";
import { baseUrl } from "../config/server";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log("User", user);
  console.log("Is admin", isAdmin);

  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // create user
  const registration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // send verification email
  const verifyEmail = (currentUser) => {
    return sendEmailVerification(currentUser);
  };

  // reset email
  const resetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // backend user
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (!storedToken) {
      setUser(null);
    }
    if (storedToken) {
      axios
        .get(`${baseUrl}/profileMonitor`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then((res) => {
          if (res.data) {
            setUser(res.data.result);
            setIsAdmin(res.data.isAdmin);
          } else {
            localStorage.removeItem("authToken");
            setUser(null);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const logout = (user) => {
    console.log("Logout called");
    if (!user) {
      return;
    }
    localStorage.removeItem("authToken");
    setUser(null);
  };

  // logout
  // const logout = () => {
  //     signOut(auth)
  // }

  //
  // useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //         setUser(currentUser);
  //         setLoading(false)
  //     })
  //     return () => {
  //         return unsubscribe();
  //     }
  // }, [])

  const authInfo = {
    user,
    loading,
    setLoading,
    setUser,
    isAdmin,
    setIsAdmin,
    googleSignIn,
    registration,
    verifyEmail,
    resetEmail,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
