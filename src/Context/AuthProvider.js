import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext()

 const AuthProvider = ({children}) => {
    const [user,setUser] = useState()

    const value= {
        user,
        setUser
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