import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    const {id,title,picture,price,rating,description,lectures} = course

    const ratingStar=[]

    const ratingHandle=(rating)=>{
        for(let i=1;i<=rating;i++){
            ratingStar.push(<FaStar className='text-[#f83600] text-[16px]'></FaStar>)
        }
    }
    ratingHandle(rating)

    return (
        <div className='shadow-md py-7 rounded-xl bg-white font-lato '>
            <div className='flex justify-between px-5 '>
                <div><img src={picture} alt="course_img" className='w-[120px] h-[50px] object-cover'/></div>
                <div className='ml-3'>
                    <h3 className='font-semibold text-2xl font-barlow leading-7 text-[#2b3543]'>{title}</h3>
                    <div className='flex space-x-2 my-2'>
                        {
                            ratingStar.map(star=>star)
                        }
                    </div>
                    <span className='text-[#868686] font-bold text-[15px]'>by TeachTech school</span>
                    <h3 className='font-extrabold text-[17px] text-main'><span>{lectures}</span> lectures (<span>{lectures*5}</span>Hours )</h3>
                </div>
            </div>
            <div className='bg-[#e9f1fe] py-4 text-center my-6 font-semibold text-xl font-barlow'>
                <h3>$<span>{price}</span> all course / ${price/5} per month</h3>
            </div>
           <div className='px-5 text-center'>
           <Link to={`/courses/${id}`} className='w-full text-main border rounded-lg border-[#ededed] transition font-bold bg-[#f1f0f0] hover:bg-main hover:text-white hover:border-main text-center py-3 flex justify-center items-center'>
            <span className='mr-2 font-bold text-lg'>Course Details</span>   
            <FaArrowRight></FaArrowRight></Link>
           </div>
        </div>
    );
};

export default CourseCard;
