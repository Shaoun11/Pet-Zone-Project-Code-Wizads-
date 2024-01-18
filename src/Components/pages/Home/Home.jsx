import React from 'react';
import Navber from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Slider from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Slider></Slider>
            
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;