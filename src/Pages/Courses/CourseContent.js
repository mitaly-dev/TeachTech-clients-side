import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Title from '../Shared/Title';
import CourseCard from './CourseCard';

const CourseContent = () => {
    const {courses} =useContext(AuthContext)
    return (
        <div>
            <Title></Title>
            <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    courses.map(course=><CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default CourseContent;