import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseItem = ({course}) => {
    const {title,id} = course
    return (
        <li >
            <Link to={`/courses/${id}`}  className='text-slate-50 font-lato font-medium mb-4 text-[18px] flex items-center hover:text-black'><FaArrowAltCircleRight className='mr-2'></FaArrowAltCircleRight>{title}</Link>
        </li>
    );
};

export default CourseItem;