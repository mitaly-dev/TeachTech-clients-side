import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider';

const UpdataModal = () => {
    const {
        userProfileUpdate,
        setLoading,
    } = useContext(AuthContext)
    
    let navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const [name,setName] = useState()
    const [photoURL,setPhotoURL] = useState() 

    // user formdata handle
    const handleName=(event)=>{
        setName(event.target.value)
    }
    
    const handlePhotoURL=(event)=>{
      setPhotoURL(event.target.value)
    }

   
        // update profile
        const updateProfileHandle=(event)=>{
            event.preventDefault()
            const form = event.target
            if(name && photoURL){
                profileUpdate()
                navigate(from,{replace:true})
                setLoading(false)
            }
            else{
                toast.error('Please provide us all valid information',{autoClose:1000})
            }
        }

    const profileUpdate=()=>{
        const profile={
            displayName:name,
            photoURL:photoURL
        }
        userProfileUpdate(profile)
        .then(()=>console.log('profile updated'))
    }

    return (
    <div>
    <input type="checkbox" id="updateModal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h1 className="text-2xl font-bold text-center font-barlow text-main uppercase">Update Profile</h1>
            <form onSubmit={updateProfileHandle} className="space-y-4 ng-untouched ng-pristine ng-valid font-lato">
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block text-gray-600">Full Name<span className='text-main text-[19px] font-bold'>*</span></label>
                    <input
                    onBlur={handleName}
                    type="text" name="name" id="name" placeholder="Enter your name" className="border border-[d5d5d5] w-full px-4 py-3 rounded-md outline-none text-gray-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photoURL" className="block text-gray-600">PhotoURL<span className='text-main text-[19px] font-bold'>*</span></label>
                    <input
                    onBlur={handlePhotoURL}
                    type="text" name="photoURL" id="photoURL" placeholder="Enter your photoURL" className="border border-[d5d5d5] w-full px-4 py-3 rounded-md outline-none text-gray-600" />
                </div>
                <div className="modal-action">
                    <label htmlFor="updateModal" className='cursor-pointer mr-2 px-5 className="disabled block p-3 text-center rounded-xl bg-gradient-to-r from-[#ff8b67] to-[#ff0844] hover:from-[#ff0844] hover:to-[#ff8b67] text-white font-semibold text-[18px]'>
                    X
                    </label>
                    <button type='submit' 
                    className="disabled block p-3 text-center rounded-xl bg-gradient-to-r from-[#ff8b67] to-[#ff0844] hover:from-[#ff0844] hover:to-[#ff8b67] text-white font-semibold text-[18px]">
                        Update
                    </button>
                </div>
            </form>
        </div>
        </div> 
    </div>
    );
};

export default UpdataModal;

