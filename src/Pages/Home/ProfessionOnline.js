import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import learnImg from '../../assets/images/professionOnline.png'
import { AuthContext } from '../../Context/AuthProvider';

const ProfessionOnline = () => {
    const {light} = useContext(AuthContext)
    return (
        <section>
            <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={learnImg} alt="images" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className={`text-3xl font-bold leading-none sm:text-5xl font-barlow ${light ? "text-gray-800 " : " text-white"}`}>
                        <span>Learn and get a </span>profession from online
                    </h1>
                    <p className="mt-6 mb-8 text-gray-500 sm:mb-12">From Art to Zoology, Alison has thousands of free online courses and is adding more all the time.
                        <br className="hidden md:inline lg:hidden"/> We seek out experts in their field to design learning material that is comprehensive, broken down into manageable chunks and gives you a series of achievable learning outcomes.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to="/register" className="bg-gradient-to-r from-[#ff8b67] to-[#ff0844] hover:bg-gradient-to-r hover:from-[#ff0844] hover:to-[#ff8b67] px-8 py-3 font-semibold rounded-lg text-white uppercase">Try For Free</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfessionOnline;