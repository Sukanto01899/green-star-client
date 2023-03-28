import React from 'react';
import About from '../About/About';
import Business from '../Business/Business';
import Header from './Header/Header';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Header/>
            <Products/>
            <Business/>
            <About/>
        </div>
    );
};

export default Home;