import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';



export const AuthContext = createContext()



const auth = getAuth(app)

const AuthProvider = ({children}) => {


    const [user, setUser] = useState()
   
    
// console.log(user);



    //! Email And Password Authentication
    const createSignUp = (email , password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    };





   const userprofile = (name, photoURL) => {
    updateProfile(auth.currentUser,
         {
            displayName:name,
            photoURL:photoURL,
    }
    )
   }














    useEffect (() => {
      const unSubscription = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });
        return () => {
            unSubscription();
        }
    },[])










    const AuthInfo = {
        createSignUp,
        user,
        userprofile,
       }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;