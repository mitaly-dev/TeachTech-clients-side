import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FreeTrialRegister from '../User/FreeTrialRegister/FreeTrialRegister';

const Topbar = () => {
    return (
        <div className="py-3 bg-main px-4 md:px-24 lg:px-28 justify-between hidden md:flex">
            <div className='flex text-white items-center space-x-4'>
                <Link to=""><FaFacebook></FaFacebook></Link>
                <Link to=""><FaTwitter></FaTwitter></Link>
                <Link to=""><FaLinkedin></FaLinkedin></Link>
            </div>
            <div className='text-white'>
                <span className='font-semibold mr-3'>Try for free! 30 day Trial and Free Lectures</span>
                <label htmlFor="my-modal-3" className="underline cursor-pointer">Sign up</label>
                <FreeTrialRegister></FreeTrialRegister>
            </div>
        </div>
    );
};

export default Topbar;