import React from 'react';
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleSlide from './SingleSlide';

const HeaderSlide = () => {
    const slides = [
        {
            title: 'Global Press Conference 2023',
            des: 'Explore the new balance recently announced sustainably designed devices, gaming laptops, and more.',
            img: 'https://i.ibb.co/Z23kZ3x/Wallpaper-Dog-20521096.jpg',
            btnText: 'Find Out What New'
        },
        {
            title: 'Make Your Green Mark',
            des: 'We aim to create a more responsible, inclusive, and sustainable world.',
            img: 'https://i.ibb.co/HxwWGCy/Wallpaper-Dog-20521117.jpg',
            btnText: 'Start Today'
        },
        {
            title: 'POWER ON',
            des: 'With Intel EVO',
            img: 'https://i.ibb.co/7NgfQqY/Wallpaper-Dog-20521262.png',
            btnText: 'Explore'
        },
        {
            title: 'Barrier Breakers',
            des: 'Be inspired by incredible people closing the digital divide and building a more sustainable world.',
            img: 'https://i.ibb.co/BfTvygP/Wallpaper-Dog-20521245.jpg',
            btnText: 'Meet Now'
        },
        {
            title: 'Shop All Deals Now',
            des: 'Explore exclusive offers available on the Acer Store. ',
            img: 'https://i.ibb.co/YBybkFZ/Wallpaper-Dog-20521250.jpg',
            btnText: 'Shop Now'
        },
        {
            title: 'Acer Value Picks',
            des: 'Discover exceptional everyday pricing on laptops and monitors.',
            img: 'https://i.ibb.co/Wysx64V/Wallpaper-Dog-20521448.jpg',
            btnText: 'Shop Now'
        },
        {
            title: 'Browse Popular Categories',
            des: 'Explore exclusive offers available on the Acer Store.',
            img: 'https://i.ibb.co/mhFtbcm/Wallpaper-Dog-20344092.jpg',
            btnText: 'Explore More'
        },
    ];

    return (
        <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        {slides.map((slide, i) => <SwiperSlide key={i}><SingleSlide slide={slide}/></SwiperSlide>)}

      </Swiper>
        </div>
    );
};

export default HeaderSlide;