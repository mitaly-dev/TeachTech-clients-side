import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import CourseContent from './CourseContent';
import CourseSidebar from './CourseSidebar';
const Courses = () => {
    return (
        <div className='grid grid-cols-10 bg-main'>
          <div className='col-span-2'>
           <CourseSidebar></CourseSidebar>
          </div>
          <div className='py-14 col-span-8 lg:px-14 px-5 md:px-10 '>
           <CourseContent></CourseContent>
          </div>
        </div>
    );
};

export default Courses;