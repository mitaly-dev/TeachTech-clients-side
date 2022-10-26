import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogItem from './BlogItem';
import Title from '../Shared/Title';

const Blog = () => {
    const blogs = useLoaderData()
    return (
      <div className="relative bg-main">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
           <div className="max-w-screen-xl sm:mx-auto">
            <Title title="Blog"></Title>
                <div className="">
                {
                    blogs.map(blog=><BlogItem key={blog.id} blog={blog}></BlogItem>)
                }
                </div>
            </div>
        </div>
      </div>
    );
};

export default Blog;
