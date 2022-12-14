import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider';

const ResetPasswordModal = () => {
    const [email,setEmail] = useState()
    const {emailReset,light} = useContext(AuthContext)

    const getEmail=(event)=>{
        setEmail(event.target.value)
    }

    const resetPasswordHandle=(event)=>{
        if(email){
           emailReset(email)
           .then(()=>{
            toast.success('Pleace check your email and reset your password',{autoClose:1500})
           })
           .catch(error=> toast.error(error.message,{autoClose:1000}))
        }
        else{
            toast.error('Provide us a valid email',{autoClose:1000})
        }
    }

    return (
       <div>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className={`modal-box ${light ? "bg-white border-[#ddd]  text-gray-800 " : " text-white bg-black border-black"}`}>
                <h3 className="font-bold text-lg">Type your email address :</h3>
                <input onChange={getEmail} type="email" className='text-black py-3 px-3 border outline-none border-[#d87033] rounded-lg mt-5 w-full'/>
                <div className="modal-action">
                    <div className='flex items-center'>
                        <label htmlFor="my-modal-6" className="cursor-pointer text-white font-semibold bg-gradient-to-r from-[#ff8b67] to-[#ff0844] py-2 px-5 rounded-lg border-none mr-2">X</label>
                        <label  onClick={resetPasswordHandle} htmlFor="my-modal-6" className="cursor-pointer text-white font-semibold bg-gradient-to-r from-[#ff8b67] to-[#ff0844] py-2 px-7 rounded-lg border-none">Reset</label>
                    </div>
                </div>
            </div>
            </div>
       </div>
    );
};

export default ResetPasswordModal;