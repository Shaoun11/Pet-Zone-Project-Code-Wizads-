/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { FiSearch } from 'react-icons/fi';
import { FaSearch } from "react-icons/fa";
const PetBanner = () => {
    return (
        <div id="slide1" className=" relative sm:w-full w-[410px] h-[500px] sm:h-[650px] ">
        <img src='https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg' className="sm:w-full object-cover w-[410px] h-[500px] sm:h-[650px]  " />
        <div className="absolute bg-gradient-to-r from-[#151519] to-rgba(21, 21, 21, 0.00) 100%)  flex h-full  top-0 left-0 items-center  ">
        <div className=' pl-16 lg:space-y-7 md:space-y-5  space-y-3 w-1/2'>
        <h2 className='lg:text-5xl md:text-4xl  text-white font-bold ' >Find Your best Pet</h2>
         <p className='lg:text-lg md:text-base text-xs  font-light  text-[#FFF]'>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>
        
         <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-2 justify-between">
                                    <input
                                        className="text-base bg-white flex-grow outline-accent-content "
                                        type="text"
                                        name='search'
                                        
                                        // onChange={(e) => setsearch(e.target.value)}
                                        placeholder="Search your Pet  Name"
                                    />
                                    <div className="rounded-full h-8 w-8 mr-1 bg-red-500  flex items-center justify-center">
          <FaSearch className="bg-red-500  text-white w-4 h-4"></FaSearch>
        </div>
                                </div>
        </div>
        </div>
       
      </div>
    );
};

export default PetBanner;