import React, { createContext, useContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
import { toast } from 'react-toastify';

export const AuthContext = createContext()

 const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState()
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    // create user
    const createUser=(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password)
    }

    // user sign up
    const userSignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // email verification
    const emailVerification=()=>{
        sendEmailVerification(auth.currentUser)
        .then(()=>toast.success('Please verify your email',{autoClose:1000}))
    }

    // update profile
    const userProfileUpdate=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    // resetEmail
    const emailReset=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }

    // sign in socialprovider
    const signWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const signWithGithub=()=>{
        return signInWithPopup(auth,githubProvider)
    }

    // logout handle
    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            return
        })
        return ()=>unsubscribe()
    },[])


    const value= {
        user,
        createUser,
        userSignIn,
        emailVerification,
        userProfileUpdate,
        emailReset,
        signWithGoogle,
        signWithGithub,
        logOut
    }

    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;