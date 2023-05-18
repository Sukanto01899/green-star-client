import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import PopupBG from '../../../components/Popup/PopupBG';
import BlogCard from './BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(()=>{
        axios.get('https://green-star.onrender.com/blogs')
        .then(res => setBlogs(res.data))
        .catch(err => toast.error(err.message))
    }, [])

    return (
        <div>
            <h1 className='text-2xl text-center mt-12'>Read Blogs</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:w-25 m-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-12 lg:px-0'>
                {blogs ? blogs.map(blog => <BlogCard blog={blog}/>) : <PopupBG>
                <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
                    </PopupBG>}
            </div>
        </div>
    );
};

export default Blogs;