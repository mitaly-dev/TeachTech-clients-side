import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import CourseCard from '../CourseCard/CourseCard';

const CourseContent = () => {
    const {courses} =useContext(AuthContext)
    console.log(courses)
    return (
        <div>
            <h3 className='text-center text-5xl font-semibold text-slate-600 font-barlow mb-10'>Popular courses</h3>
            <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    courses.map(course=><CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default CourseContent;