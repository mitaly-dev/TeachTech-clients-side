import React from 'react';
import blog from '../../assets/Lottie-animation/blog.json'
import Lottie from 'lottie-react'

const Blog = () => {
    return (
        <div className="relative">
      
      <div className="relative bg-main ">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid grid-cols-2">
            <div>
                <div className='p-6 border rounded-lg bg-white text-gray-600 mb-3'>
                    <h3 className='font-semibold text-xl capitalize mb-2'> what is cors?</h3>
                    <p className='text-lg'>Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.</p>
                </div>
                <div className='p-6 border rounded-lg bg-white text-gray-600 mb-3'>
                    <h3 className='font-semibold text-xl capitalize mb-2'> Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p className='text-lg'>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                    </p>
                    <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
                <div className='p-6 border rounded-lg bg-white text-gray-600 mb-3'>
                    <h3 className='font-semibold text-xl capitalize mb-2'> How does the private route work?</h3>
                    <p className='text-lg'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
                <div className='p-6 border rounded-lg bg-white text-gray-600 mb-3'>
                    <h3 className='font-semibold text-xl capitalize mb-2'>What is Node js?</h3>
                    <p className='text-lg'>Node.js is an open source server environment; Node.js is free ; Node.js can generate dynamic page content.Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.</p>
                </div>
            </div>
            <div>
            {<Lottie animationData={blog} loop={true}></Lottie>}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Blog;

