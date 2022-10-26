import React from 'react';
import blog from '../../assets/Lottie-animation/blog.json'
import Lottie from 'lottie-react'
import { FaArrowRight, FaIndent, FaMoneyCheck, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Title from '../Shared/Title';

const FAQ = () => {
    return (
      <div className="relative bg-main min-h-screen flex items-center">
        <div className="py-16 mx-auto w-full md:px-24 px-5 sm:10 md:14 lg:px-28 lg:py-20">
          <Title title="Frequently Asked Questions"></Title>
          <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-7'>
          <div className="mb-3 flex flex-col py-10 font-barlow  justify-between text-center overflow-hidden transition-shadow duration-200 bg-white rounded-xl shadow-xl shadow-blue-900 group hover:shadow-2xl hover:bg-gradient-to-b from-[#6a11cb] to-[#2575fc] hover:shadow-blue-400 hover:border hover:text-white text-main">
              <div className="p-5 text-center">
                <div className="flex items-center justify-center w-10 h-10 m-auto mb-4 rounded-full bg-indigo-50 ">
                <FaIndent className='text-main text-3xl'></FaIndent>
                </div>
                <p className="mb-2 font-semibold text-2xl ">Getting Started Guide</p>
                <Link className='mt-3 flex items-center text-lg font-semibold justify-center'>Read More 
                <FaArrowRight className='text-[13px] ml-2'></FaArrowRight></Link>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="mb-3 flex flex-col py-10 font-barlow  justify-between text-center overflow-hidden transition-shadow duration-200 bg-white rounded-xl shadow-xl shadow-blue-900 group hover:shadow-2xl hover:bg-gradient-to-b from-[#6a11cb] to-[#2575fc] hover:shadow-blue-400 hover:border hover:text-white text-main">
              <div className="p-5 text-center">
                <div className="flex items-center justify-center w-10 h-10 m-auto mb-4 rounded-full bg-indigo-50 ">
                <FaMoneyCheck className='text-main text-3xl'></FaMoneyCheck>
                </div>
                <p className="mb-2 font-semibold text-2xl ">Payment & Account</p>
                <Link className='mt-3 flex items-center text-lg font-semibold justify-center'>Read More 
                <FaArrowRight className='text-[13px] ml-2'></FaArrowRight></Link>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="mb-3 flex flex-col py-10 font-barlow  justify-between text-center overflow-hidden transition-shadow duration-200 bg-white rounded-xl shadow-xl shadow-blue-900 group hover:shadow-2xl hover:bg-gradient-to-b from-[#6a11cb] to-[#2575fc] hover:shadow-blue-400 hover:border hover:text-white text-main">
              <div className="p-5 text-center">
                <div className="flex items-center justify-center w-10 h-10 m-auto mb-4 rounded-full bg-indigo-50 ">
                <FaUserShield  className='text-main text-3xl'></FaUserShield>
                </div>
                <p className="mb-2 font-semibold text-2xl ">Getting Started Guide</p>
                <Link className='mt-3 flex items-center text-lg font-semibold justify-center'>Read More 
                <FaArrowRight className='text-[13px] ml-2'></FaArrowRight></Link>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          </div>
        </div>
      </div>
    );
};

export default FAQ;