import Navber from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Slider from '../Banner/Banner';
import Message from '../Message/Message';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Slider></Slider>
            
            <div className="max-w-7xl mx-auto">
            <Gallery></Gallery>
            </div>
            <Message></Message>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;