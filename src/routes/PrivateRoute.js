import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    

    if(loading){
        return <div className='bg-main min-h-screen flex justify-center items-center'>
                <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
                </div>
            </div>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
   
};

export default PrivateRoute;