import React from 'react';
import BlogForm from './BlogForm';

const UploadBlog = () => {
    return (
        <div>
            <h1 className='text-xl mb-5'>Let's write a new blog post! 🎉</h1>
            <BlogForm/>
        </div>
    );
};

export default UploadBlog;