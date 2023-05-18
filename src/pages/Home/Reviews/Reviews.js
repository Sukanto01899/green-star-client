import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { A11y, Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewSlider from './ReviewSlider';


const Reviews = () => {
    const [reviews, setREviews] = useState([]);

    useEffect(()=>{
        axios(`https://green-star.onrender.com/reviews/get`)
        .then(res => setREviews(res.data))
    }, [])

    return (
<section className="bg-gray-100">
  <div
    className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:px-8 sm:py-16 lg:me-0 lg:pe-0 lg:ps-8"
  >
    <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
      <h2 className="max-w-xl text-3xl font-bold sm:text-4xl text-universal">
        Read trusted reviews from our customers
      </h2>
    </div>

    <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
      <div className="swiper-container !overflow-hidden">
        <div className="swiper-wrapper">

        <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={32}
      slidesPerView={1}
      navigation={true}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      }}}
    >
      
      {reviews ? reviews.map(review => <SwiperSlide key={review._id}><ReviewSlider review={review}/></SwiperSlide>) : null}
    </Swiper>

                    
{/*  */}
        </div>
      </div>
    </div>
  </div>
</section>

    );
};

export default Reviews;