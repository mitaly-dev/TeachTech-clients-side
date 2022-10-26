import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import CourseContent from './CourseContent';
import CourseSidebar from './CourseSidebar';
const Courses = () => {
    return (
        <div className='md:grid grid-cols-10 bg-main'>
          <div className='md:col-span-4 lg:col-span-3 xl:col-span-2'>
              <CourseSidebar></CourseSidebar>
          </div>
          <div className='py-14 md:col-span-6 lg:col-span-7 xl:col-span-8 lg:px-14 px-5 md:px-10 '>
              <CourseContent></CourseContent>
          </div>
        </div>
    );
};

export default Courses;