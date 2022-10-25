import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseItem = ({course}) => {
    const {title} = course
    return (
        <li >
            <Link className='text-slate-500 font-lato font-medium mb-4 text-[18px] flex items-center hover:text-main'><FaArrowAltCircleRight className='mr-2'></FaArrowAltCircleRight>{title}</Link>
        </li>
    );
};

export default CourseItem;