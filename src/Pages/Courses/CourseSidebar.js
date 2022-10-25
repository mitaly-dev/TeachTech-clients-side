import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import CourseItem from './CourseItem';

const CourseSidebar = () => {
    const {courses} =useContext(AuthContext)

    return (
        <div className='py-10 px-5'>
            <h3 className='font-barlow mb-5 font-semibold text-3xl text-center text-[#f9d423]'>Total Course : {courses.length}</h3>
            <ul className='ml-5'>
                {
                    courses.map(course=><CourseItem key={course.id} course={course}></CourseItem>)
                }
            </ul>
        </div>
    );
};

export default CourseSidebar;