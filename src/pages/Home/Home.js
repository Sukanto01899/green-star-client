import React from 'react';
import About from '../About/About';
import Business from '../Business/Business';
import Header from './Header/Header';
import HeaderSlide from './HeaderSlide/HeaderSlide';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <HeaderSlide/>
            <Header/>
            <Products/>
            <Business/>
            <Reviews/>
            <About/>
        </div>
    );
};

export default Home;