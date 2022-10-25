import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import CourseContent from './CourseContent/CourseContent';
import CourseSidebar from './CourseSidebar/CourseSidebar';

const Courses = () => {
    return (
        <div className='py-14 grid grid-cols-5'>
          <div className='col-span-2'>
            <CourseSidebar></CourseSidebar>
          </div>
          <div className='col-span-3'>
            <CourseContent></CourseContent>
          </div>
        </div>
    );
};

export default Courses;