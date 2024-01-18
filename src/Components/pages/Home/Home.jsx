import React from 'react';
import Navber from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <div className='mt-52 mb-52'>
                Banner
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;