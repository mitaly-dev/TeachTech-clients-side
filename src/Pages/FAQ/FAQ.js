import React from 'react';
import blog from '../../assets/Lottie-animation/blog.json'
import Lottie from 'lottie-react'

const FAQ = () => {
    return (
      <div className="relative bg-main">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
          <section className=" text-white">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is react js?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is server?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">In computing, a server is a piece of computer hardware or software that provides functionality for other programs or devices, called "clients". </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Why React is a framework?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">React is an open source JavaScript framework, that isn't actually a framework. But it is currently the most commonly used front-end development technology in the world. React, originally developed by and still maintained by Facebook and supported by an active open source community, is in fact a JS 'library' </p>
                        </details>
                    </div>
                </div>
            </section>
            <div>
            {<Lottie animationData={blog} loop={true}></Lottie>}
            </div>
          </div>
        </div>
      </div>
    );
};

export default FAQ;