import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import ConfirmPopup from '../../../../components/Popup/ConfirmPopup';
import PopupBG from '../../../../components/Popup/PopupBG';
import auth from '../../../../firebase.init';

const BlogCard = ({blog}) => {
    const [user] = useAuthState(auth)
    const [blogDeletePopup, setBlogDeletePopup] = useState(false)

    const handleDeleteBlog = ()=>{
        const loadingToast = toast.loading('Please wait...')
        axios.delete(`http://localhost:5000/blog/delete/${user.email}/${blog._id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => {
            if(res.data.acknowledged){
                toast.success('Successfully deleted', {id: loadingToast})
                setBlogDeletePopup(false)
            }
        })
        .catch(err => toast.error(err.message, {id: loadingToast}))
    }

    return (
        <article className="flex bg-white transition hover:shadow-xl">
  <div className="hidden sm:block sm:basis-56">
    <img
      alt="BlogImage"
      src={blog.image}
      className="aspect-square  w-full object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <a href="#">
        <h3 className="font-bold uppercase text-gray-900">
          {blog.title}
        </h3>
      </a>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end ">
      <button
        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
      >
        Edit Blog
      </button>
      <button
      onClick={()=> setBlogDeletePopup(true)}
        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400 sm:ml-2"
      >
        Delete
      </button>
    </div>
  </div>
{/* Popup */}
{blogDeletePopup && <PopupBG><ConfirmPopup confirmFunc={handleDeleteBlog} popupCloseFunc={setBlogDeletePopup}/></PopupBG>}
</article>
    );
};

export default BlogCard;