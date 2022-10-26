import React from 'react';
import Lottie from 'lottie-react'
import education from '../../assets/Lottie-animation/banner.json'
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import ProfessionOnline from './ProfessionOnline';
import HowDoesWork from './HowDoesWork';
import GetUpdate from './GetUpdate';


const Home = () => {
    return (
        <>
        <section className="bg-main text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="font-lato flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl font-lato capitalize">
                    Large educational programs
                    </h1>
                    <div className='md:flex my-5 text-[17px]'>
                    <span className='text-white font-bold'>Our course is rated excellent by over 42,000 people</span>
                    <div className='flex space-x-2 mt-1 justify-center'>
                    <FaStar className='text-[#f83600] text-[16px]'></FaStar>
                    <FaStar className='text-[#f83600] text-[16px]'></FaStar>
                    <FaStar className='text-[#f83600] text-[16px]'></FaStar>
                    <FaStar className='text-[#f83600] text-[16px]'></FaStar>
                    <FaStar className='text-[#f83600] text-[16px]'></FaStar>
                    </div>
                    </div>
                    <p className="mt-2 mb-8 text-lg sm:mb-10 text-gray-100">Today, more than 48,000 people have already studied at our Institute
                        <br className="hidden md:inline lg:hidden"/>in various fields: programming, photography, marketing and management
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link rel="noopener noreferrer" href="#" className="px-8 py-3 rounded-lg  bg-gradient-to-r from-[#ff8b67] to-[#ff0844] border-[#ff0844] text-white uppercase">Try for fee</Link>
                        <Link rel="noopener noreferrer" href="#" className="px-8 py-3 border rounded-lg hover:bg-gradient-to-r from-[#ff8b67] to-[#ff0844]  text-white hover:text-white hover:border-[#ff0844] border-white uppercase">See pricing plans</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                {<Lottie animationData={education} loop={true}></Lottie>}
                </div>
            </div>
        </section>
        <main className='bg-[#fbf8fe] px-4 sm:px-10 md:px-14 lg:px-28 pb-10'>
            <ProfessionOnline></ProfessionOnline>
            <HowDoesWork></HowDoesWork>
        </main>
        <GetUpdate></GetUpdate>
    </>
    );
};

export default Home;
