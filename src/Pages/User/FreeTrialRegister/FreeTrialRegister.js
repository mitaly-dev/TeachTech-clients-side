import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const FreeTrialRegister = () => {
    
    const {
        light
    } = useContext(AuthContext)
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className={`modal-box relative overflow-visible py-10  ${light ? "bg-white border-[#ddd]  text-gray-600 " : " text-white bg-black border-black"}`}>
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='font-lato text-center'>
                        <h3 className='font-barlow text-4xl font-bold mb-2'>Registration</h3>
                        <p>The intensive course is now open, which starts on January 8. You will receive detailed information on admission by mail immediately after registration</p>
                        <h3 className='font-barlow text-main text-xl font-semibold py-3'>30 day Free Trial for Lessons and Library</h3>
                        <p className='mb-7'>our consultant will contact you to clarify further details</p>
                        <Link to='/register' className="block w-full p-3 text-center rounded-xl bg-gradient-to-r from-[#ff8b67] to-[#ff0844] hover:from-[#ff0844] hover:to-[#ff8b67] text-white  font-semibold text-[18px] ">
                            <label htmlFor="my-modal-3">Registration</label>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeTrialRegister;