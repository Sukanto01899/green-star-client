import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
    const {id} = useParams()
    const [blog, setBlog] = useState({});

    useEffect(()=> {
        axios(`https://green-star.onrender.com/blog/${id}`)
        .then(res => setBlog(res.data))
    },[id])
    return (
        <div>
            <h1 className='text-2xl text-center mt-12'>{blog?.title}</h1>
            <div className='xl:w-25 m-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-12 lg:px-0'>
                <div className='flex justify-center mb-6'>
                <img className='' src={blog?.image} alt="" />
                </div>
                <p>{blog?.description}</p>
            </div>
        </div>
    );
};

export default BlogPage;