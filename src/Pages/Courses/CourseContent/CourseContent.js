import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import CourseCard from '../CourseCard/CourseCard';

const CourseContent = () => {
    const {courses} =useContext(AuthContext)
    console.log(courses)
    return (
        <div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    courses.map(course=><CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default CourseContent;