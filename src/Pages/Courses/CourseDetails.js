import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData()
    const {id,title,picture,price,rating,description,lectures} = course

    const ratingStar=[]
    const ratingHandle=(rating)=>{
        for(let i=1;i<=rating;i++){
            ratingStar.push(<FaStar className='text-[#f83600] text-[16px]'></FaStar>)
        }
    }
    ratingHandle(rating)

    console.log(course)
    return (
        <div className="relative text-lato font-semibold ">
        <img
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-main bg-opacity-75 min-h-screen">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 m-auto text-center">
                <img src={picture} alt="" className='w-[70px] h-[70px] m-auto rounded-full mb-5'/>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                 {title}
                </h2>
                <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                {description?description:undefined}
                </p>
                <div className='grid grid-cols-2 text-white'>
                    <div className='text-right border-r border-white pr-4'>
                        <h3 className='text-[#f9d423] text-2xl font-bold font-barlow'>Start at December 24, 2021</h3>
                        <small>1,152,628 already registered</small>
                    </div>
                    <div className='text-left ml-4'>
                    <div className='flex space-x-2'>{ratingStar.map(star=>star)}</div>
                    <small>more than 99% of students rate this course content and results as Super</small>
                    </div>
                </div>
               <Link to="/" className="py-3 px-14 mt-10 text-center rounded-xl bg-gradient-to-r from-[#ff8b67] to-[#ff0844] hover:from-[#ff0844] hover:to-[#ff8b67] text-white  font-semibold text-[18px] ">Get Premium access</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetails;