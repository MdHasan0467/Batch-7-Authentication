import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';




export const AuthContext = createContext();


const auth = getAuth(app)



const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null)


// console.log(logUser);




    


  








    //!   Create An User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }



    
    

    //!   LogIn
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }





    //!   logOut
    const logOut = () => {
        return signOut(auth);
    }





    const userprofile = (name, photoURL) => {
        updateProfile(auth.currentUser,
             {
                displayName:name,
                photoURL:photoURL,
        }
        )
       }


    
console.log('user', user);





    // For Observe an user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('currentUser',currentUser);
            setUser(currentUser);
        });


        return () => {
            return unsubscribe()
        }

    },[])




    const authInfo = {user, createUser, signIn,logOut,userprofile, }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;