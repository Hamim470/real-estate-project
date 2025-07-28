import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider=new GoogleAuthProvider();


    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                console.log(currentUser);
                setLoading(false);
            }
            else {
                setUser(null);
                console.log('user missing')
                setLoading(false);
            }
        });
    }, [])

    const allValue = {
        register,
        logIn,
        user,
        logOut,
        signInWithGoogle,
        setLoading
    }
    return (
        <AuthContext.Provider value={allValue}>
            {
                loading ?
                    (
                        <div className="h-screen w-screen flex justify-center items-center">
                            <span className="loading loading-dots loading-xl"></span>
                        </div>
                    )
                    :
                    children
            }
        </AuthContext.Provider >
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}