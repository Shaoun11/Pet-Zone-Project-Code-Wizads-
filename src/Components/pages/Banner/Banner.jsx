import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Slider = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
},[])
  return (
      <div>
        
           <div >
          <div className="carousel sm:w-full w-[410px] h-[500px] sm:h-[800px] ">
<div id="slide1" className="carousel-item relative sm:w-full w-[410px] h-[500px] sm:h-[800px] ">
  <img src='https://i.ibb.co/80FtTY9/pexels-pixabay-208773.jpg' className="sm:w-full object-cover w-[410px] h-[500px] sm:h-[800px]  " />
  <div className="absolute bg-gradient-to-r from-[#0e0c0cc7] to-rgba(21, 21, 25, 0.00) 100%)  flex h-full  top-0 left-0 items-center  ">
  <div className=' pl-16 lg:space-y-7 md:space-y-5  space-y-3 w-1/2'>
  <h2 data-aos="fade-right" className='lg:text-6xl md:text-4xl  text-white font-bold ' >Pet Adoption Website</h2>
   <p className='lg:text-lg md:text-base text-xs  font-light  text-[#FFF]'>Welcome to  Family. We feel proud to be an ex-student BCBHS.We are honored to have such a committed community of alumni and friends.</p>
   <button className='btn mr-5 text-white border-red-500 btn-warning bg-red-500' >Discover More </button>
   <button className='btn btn-outline text-white border-yellow-400 btn-warning ' >Leatest Notice</button>
  </div>
  </div>
  <div className="absolute flex bottom-0 justify-end gap-5 transform -translate-y-1/2 left-5 right-5 ">
    <a href="#slide3" className="btn btn-circle">❮</a> 
    <a href="#slide2" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide2" className="carousel-item relative sm:w-full w-[410px] h-[500px] sm:h-[800px] ">
  <img src='https://i.ibb.co/80FtTY9/pexels-pixabay-208773.jpg' className="sm:w-full object-cover w-[410px] h-[500px] sm:h-[800px] " />
  
  <div className="absolute bg-gradient-to-r from-[#0e0c0ccd] to-rgba(21, 21, 21, 0.00) 100%)  flex h-full  top-0 left-0 items-center  ">
    
  <div className=' pl-16 lg:space-y-7 md:space-y-5  space-y-3 w-1/2'>
    
  <h2 className='lg:text-6xl md:text-4xl text-white  font-bold' >BCBHS Alumni Association</h2>
   <p className='lg:text-lg md:text-base text-xs font-light text-[#FFF]'>Welcome to BCBHS Alumni Family. We feel proud to be an ex-student BCBHS.We are honored to have such a committed community of alumni and friends.</p>
   <button className='btn mr-5 text-white border-red-500 btn-warning bg-red-500' >Discover More </button>
   <button className='btn btn-outline text-white border-yellow-400 btn-warning ' >Leatest Notice</button>
  </div>
  </div>
  <div className="absolute flex bottom-0 justify-end gap-5 transform -translate-y-1/2 left-5 right-5 ">
    <a href="#slide1" className="btn btn-circle">❮</a> 
    <a href="#slide3" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide3" className="carousel-item relative sm:w-full w-[410px] h-[500px] sm:h-[800px] ">
  <img src='https://i.ibb.co/4pSXHp7/IMG-20211030-154238.jpg' className="sm:w-full object-cover w-[410px] h-[500px] sm:h-[800px] " />
  <div className="absolute bg-gradient-to-r from-[#0e0c0cc7] to-rgba(21, 21, 21, 0.00) 100%)  flex h-full  top-0 left-0 items-center  ">
  <div className=' pl-16 lg:space-y-7 md:space-y-5  space-y-3 w-1/2'>
  <h2 className='lg:text-6xl md:text-4xl text-white font-bold ' >Pet Adoption Website</h2>
   <p className='lg:text-lg md:text-base text-xs  font-light text-[#FFF]'>Welcome to Pet Adoption Website. We feel proud to be an ex-student of BCBHS.We are honored to have such a committed community of alumni and friends.</p>
   <button className='btn mr-5 text-white border-red-500 btn-warning bg-red-500' >Discover More </button>
   <button className='btn btn-outline text-white border-yellow-400 btn-warning ' >Leatest Notice</button>
  </div>
  </div>
  <div className="absolute flex bottom-0 justify-end gap-5 transform -translate-y-1/2 left-5 right-5 ">
    <a href="#slide2" className="btn btn-circle">❮</a> 
    <a href="#slide1" className="btn btn-circle">❯</a>
  </div>

</div> 

</div>
          </div>
      </div>
  );
};

export default Slider;