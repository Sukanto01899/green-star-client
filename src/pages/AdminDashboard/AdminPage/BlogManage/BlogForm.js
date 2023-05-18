import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import auth from '../../../../firebase.init';
import '../ManageProduct/manageproduct.css';


const BlogForm = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const [description, setDescription] = useState('')
    const imageStorageApi = process.env.REACT_APP_imageStorageApi;

    const handleAddProduct = (data)=>{
        const {blogTitle, image} = data;
        const file = image[0];
        const dateObj = new Date()
        const url = `https://www.filestackapi.com/api/store/S3?key=${imageStorageApi}`;

        const blogObj = {
            title: blogTitle,
            description: description,
            author: user.displayName,
            time: dateObj.getDate()+'-'+dateObj.getMonth() + '-'+ dateObj.getFullYear()
        }

      const loadingToast = toast.loading('Please wait...')

       fetch(url, {
        method: 'POST',
        body: file
       })
       .then(res => res.json())
       .then(data => {
         if(data.url){
            const blog = {...blogObj, image: data.url}
            axios.post(`https://green-star.onrender.com/blog/add/${user.email}`, {blog}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access-token')}`
                }
            })
            .then(res => {
                if(res.data.acknowledged){
                    toast.success('Post successfully added', {id: loadingToast})
                }
            })
            .catch(err => toast.error(err.message, {id: loadingToast}))
         }
       })
       .catch(err => toast.error(err.message, {id: loadingToast}))
    }

   
   
    
    return (
        
             <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="title">Blog title</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Blog Title"
              type="text"
              id="title"
              {...register('blogTitle', {required: true})}
            />
          </div>

          {/* Description */}
          <div>
            <label className="sr-only" htmlFor="blogs">blogs</label>
            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Write Blog..."
              rows="10"
              id="blogs"
              onChange={(e)=> setDescription(e.target.value)}
            ></textarea>
          </div>

            {/* Image upload */}
            <div>
            <label className="sr-only" htmlFor="image">Minimum Buy</label>
              <input
                className="w-full rounded-lg border-2 border-gray-200 p-1 text-md"
                placeholder="Upload File"
                type="file"
                id="image"
                {...register('image', {required: true})}
              />
            </div>
          

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-universal px-5 py-3 font-medium text-white sm:w-auto"
            >
             Post Now
            </button>
          </div>
        </form>
      </div>
        
    );
};

export default BlogForm;