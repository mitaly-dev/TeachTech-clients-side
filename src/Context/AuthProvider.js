import React, { createContext, useContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
import { toast } from 'react-toastify';

export const AuthContext = createContext()

 const AuthProvider = ({children}) => {
    const [courses,setCourses] = useState([])
    const [light,setLight] = useState(true)
    const auth = getAuth(app)
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    // create user
    const createUser=(email,password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    // user sign up
    const userSignIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // email verification
    const emailVerification=()=>{
        setLoading(true)
        sendEmailVerification(auth.currentUser)
        .then(()=>toast.success('Please verify your email',{autoClose:1000}))
    }

    // update profile
    const userProfileUpdate=(profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,profile)
    }

    // resetEmail
    const emailReset=(email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }

    // sign in socialprovider
    const signWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signWithGithub=()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    // logout handle
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            return
        })
        return ()=>unsubscribe()
    },[])

    // const get course data
    useEffect(()=>{
        fetch(`https://teach-tech-server.vercel.app/courses`)
        .then(res=>res.json())
        .then(data=>setCourses(data))
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
        logOut,
        courses,
        loading,
        setLoading,
        light,setLight
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