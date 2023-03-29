import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import axiosApi from '../../api/axiosApi';
import { StarIconFill, StarIconHole } from '../../assets/icons/icons';

const Reviews = ({id}) => {
  const [reviews, setReviews] = useState(null)
  useEffect(()=>{
    axiosApi(`/review/${id}`)
    .then(res => setReviews(res.data))
    .catch(err => toast.error(err.message))
  }, [id])

    return (
        <section id='reviews'>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg-white">
    <h2 class="text-xl font-bold sm:text-2xl">Customer Reviews</h2>

    {!reviews?.length ? "No review yet" : <div class="mt-4 flex items-center gap-4">
      <p class="text-3xl font-medium">
        3.8
        <span class="sr-only"> Average review score </span>
      </p>

      <div>
        <div class="flex">
          <StarIconFill/>
          <StarIconFill/>
          <StarIconFill/>
          <StarIconFill/>
          <StarIconHole/>
        </div>

        <p class="mt-0.5 text-xs text-gray-500">Based on {reviews?.length} reviews</p>
      </div>
    </div>}

    {/* Review grid */}
    <div class="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">

      {reviews?.map(review => (
        <blockquote key={review._id}>
        <header class="sm:flex sm:items-center sm:gap-4">
          <div class="flex">
            <StarIconFill/>
            <StarIconFill/>
            <StarIconFill/>
            <StarIconFill/>
            <StarIconFill/>
          </div>

          <p class="mt-2 font-medium sm:mt-0">{review.title}</p>
        </header>

        <p class="mt-2 text-gray-700">
         {review.desc}
        </p>

        <footer class="mt-4">
          <p class="text-xs text-gray-500">{review.user}-{review.date}</p>
        </footer>
      </blockquote>
      ))}

    </div>
  </div>
</section>
    );
};

export default Reviews;