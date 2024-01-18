import AllPetsSlider from '../AllPetsSlider/AllPetsSlider';
import Headings from '../../Headings/Headings';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            
            <div className='mt-52 mb-52'>
                Banner
            </div>
            <div className='max-w-screen-2xl mx-auto my-4'>
                <Headings mainHeading={"Looking for a Pet?"} subHeading={"Adopt one today!!"}></Headings>
                <AllPetsSlider></AllPetsSlider>
                <div className='flex items-center justify-center my-4'>
                    <Link to={"/allPets"}><button className='btn btn-outline btn-success'>See All</button></Link>
                
                </div>
            </div>
            
        </div>
    );
};

export default Home;