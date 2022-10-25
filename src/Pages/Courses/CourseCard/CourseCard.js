import React from 'react';

const CourseCard = ({course}) => {
    const {id,title,picture,price,rating,description,lectures} = course
    return (
        <div className='border py-7 rounded-lg bg-white font-lato'>
            <div className='flex justify-between px-5 '>
                <div><img src={picture} alt="course_img" className='w-[120px] object-cover'/></div>
                <div className='ml-3'>
                    <h3 className='font-semibold text-2xl font-barlow leading-7 text-[#2b3543]'>{title}</h3>
                    <p>{rating}</p>
                    <span className='text-[#868686] font-bold text-[15px]'>by Adrian Dawson school</span>
                    <h3 className='font-extrabold text-[17px] text-main'><span>{lectures}</span>lectures (<span>{lectures*5}</span>Hours )</h3>
                </div>
            </div>
            <div className='bg-[#e9f1fe] py-3 text-center'>
                <h3>$<span>{price}</span> all course / ${price/5} per month</h3>
            </div>
            <button className='px-5'>Access for premium</button>
        </div>
    );
};

export default CourseCard;