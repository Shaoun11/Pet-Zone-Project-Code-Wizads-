import Navber from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Slider from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Slider></Slider>
            
            <div className="max-w-7xl mx-auto">
            <Gallery></Gallery>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;