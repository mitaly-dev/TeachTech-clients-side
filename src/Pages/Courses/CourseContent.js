import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Title from '../Shared/Title';
import CourseCard from './CourseCard';

const CourseContent = () => {
    const {courses} =useContext(AuthContext)
    const content = 'Here are some of our popular courses, and most of our students are successful today by doing these courses. Now these courses are in demand all over the world.'
    return (
        <div>
            <Title title="Polular course" content={content}></Title>
            <div className='sm:grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7'>
                {
                    courses.map(course=><CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default CourseContent;