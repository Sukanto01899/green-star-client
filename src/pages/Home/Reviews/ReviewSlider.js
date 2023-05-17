import React from 'react';
import { StarIconBox } from '../../../assets/icons/icons';

const ReviewSlider = ({review}) => {
    return (
        <div class="swiper-slide">
            <blockquote
              class="flex h-full flex-col justify-between bg-white p-12"
            >
              <div>
                <div class="flex gap-0.5 text-white">
                  {[...Array(review.rating)].map(rate => <span class="bg-yellow-400 p-0.5">
                    <StarIconBox/>
                  </span>)}
                  
                </div>

                <div class="mt-4">
                  <h3 class="text-2xl font-bold text-universal sm:text-3xl">
                    {review?.title}
                  </h3>

                  <p class="mt-4 text-lg text-gray-600">
                    {review?.desc}
                  </p>
                </div>
              </div>

              <footer class="mt-8 text-gray-500">- {review.user}</footer>
            </blockquote>
          </div>
    );
};

export default ReviewSlider;