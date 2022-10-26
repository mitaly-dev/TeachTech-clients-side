import React from 'react';

const BlogItem = ({blog}) => {
    return (
        <div className='p-6 border rounded-lg bg-white text-gray-600 mb-3 w-11/12 md:w-10/12 lg:w-7/12  m-auto'>
            <h3 className='font-semibold text-xl capitalize mb-2'> {blog?.question}</h3>
            <p className='text-lg'>{blog?.answer}</p>
        </div>
    );
};

export default BlogItem;

               