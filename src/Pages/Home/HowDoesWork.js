import React from 'react';
import Title from '../Shared/Title';
import Lottie from 'lottie-react'
import courseAnimation from '../../assets/Lottie-animation/blog.json'

const HowDoesWork = () => {
    return (
           <section className="bg-gradient-to-b from-[#6a11cb] to-[#2575fc] text-white rounded-xl">
                <div className="container max-w-xl py-10 mx-auto lg:px-8 lg:max-w-7xl">
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className='pr-3'>
                        <Title title="How does it work?"></Title>
                            <div className=" space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ff0844" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-2xl font-medium leading-8 font-barlow dark:text-gray-50">4 on-line lectures with a teacher</h4>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ff0844" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-2xl font-medium leading-8 font-barlow dark:text-gray-50">Subscription gives access to education materials and videos</h4>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ff0844" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-2xl font-medium leading-8 font-barlow dark:text-gray-50">After completing the course and completing the tasks, you will receive a certificate</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            {<Lottie animationData={courseAnimation} loop={true}></Lottie>}
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default HowDoesWork;