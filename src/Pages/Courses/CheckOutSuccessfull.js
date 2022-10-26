import React from 'react';
import checkout from '../../assets/Lottie-animation/checkout.json'
import Lottie from 'lottie-react'

const CheckOutSuccessfull = () => {
    return (
        <div className="relative">
        <img
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-main bg-opacity-90 min-h-screen flex items-center justify-center">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
             <div className='bg-gradient-to-r from-[#ff8b67] to-[#ff0844] px-10 md:px-20 py-5 rounded-lg m-auto'>
             {<Lottie animationData={checkout} loop={true} className="h-[150px] "></Lottie>}
             <h3 className='text-xl sm:text-4xl font-bold font-lato text-white pb-10'>Checkout Successfull</h3>
             </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CheckOutSuccessfull;