import React from 'react';

const SingleSlide = ({slide}) => {
    return (
        <div className='w-full h-[400px] md:h-[450px] lg:h-[550px]'>
            <div className='bg-cover bg-no-repeat h-full' style={{backgroundImage: `url(${slide.img})`}}>
                <div className='h-full space-y-8 flex flex-col justify-center items-center backdrop-blur-sm'>
                 <h1 className=' font-bold text-2xl lg:text-5xl text-universal'>{slide.title}</h1>
                 <p className='text-white text-lg text-center'>{slide.des}</p>
                 <button className='bg-white text-sm lg:text-xl text-universal px-8 py-2 border-2 border-white hover:bg-black hover:text-white'>{slide.btnText}</button>
                </div>
            </div>
        </div>
    );
};

export default SingleSlide;