import React from 'react';

const GetUpdate = () => {
    return (
        <div className="relative">
        <img
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-main bg-opacity-80 text-white">
          <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-10 mx-auto md:p-10">
                <h1 className="text-[33px] sm:text-5xl antialiased font-semibold leading-none text-center ">Get Our Updates</h1>
                <p className="pt-2 pb-5 text-xl antialiased text-center ">Find out about events and other news</p>
                <div className="flex flex-row md:w-8/12 lg:w-6/12 m-auto">
                    <input type="text" placeholder="Enter your email" className="text-gray-600 outline-none px-5 p-3 rounded-l-lg sm:w-2/3" />
                    <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3  bg-gradient-to-r from-[#ff8b67] to-[#ff0844] hover:to-[#ff8b67] hover:from-[#ff0844] text-white">Subscribe</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default GetUpdate;