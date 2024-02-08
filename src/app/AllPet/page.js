
"use client"
import { useState, useEffect } from 'react';
import AllpetCard from "../Components/AllpetCard";
import Navber from "../Components/Header";
import Footer from "../Components/Footer";
import { FaSearch } from "react-icons/fa";

const AllPet = () => {
    const [petData, setPetData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pet-zone-project-next-js.vercel.app/petdata`);
                const data = await response.json();
                setPetData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredPetData = petData.filter(pet => pet.species.toLowerCase().includes(searchQuery));

    return (
        <div>
            <Navber></Navber>
            <>
                <div id="slide1" className=" relative sm:w-full w-[410px] h-[500px] sm:h-[600px] ">
                    <img src='https://i.ibb.co/RHgq4v7/image-1.png' className="sm:w-full object-cover w-[410px] h-[500px] sm:h-[600px]  " />

                    <div className="absolute bg-gradient-to-r from-[#151519] to-rgba(21, 21, 21, 0.00) 100%)  flex h-full  top-0 left-0 items-center  ">
                        <div className=' pl-16 lg:space-y-7 md:space-y-5  space-y-3 w-1/2'>
                            <h2 className='lg:text-5xl md:text-4xl  text-white font-bold ' >Find Your best Pet</h2>
                            <p className='lg:text-lg md:text-base text-xs  font-light  text-[#FFF]'>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>

                            <div className="pt-7 ">
                                <div className="relative -mt-4 mr-10">
                                    <div className="absolute inset-y-0 -right-20 md:-right-24 lg:right-4 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input type="text" id="table-search2" className=" text-gray-900 text-lg rounded-lg block w-[200px]  md:w-[400px] lg:w-full pl-5 p-2.5 "
                                        placeholder="Search your pet" onChange={handleSearchChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
            <div className="w-full  mt-10 mb-20 flex justify-center items-end">
                <h1 className="text-2xl md:text-4xl font-bold">Our All Collection</h1>
                <div className="w-2 h-2 rounded-full ml-1 bg-secondary mb-1"></div>
            </div>

            {
                filteredPetData.length === 0 ? <>
                    <p className='text-3xl w-full h-[50vh] flex justify-center items-center -mt-16  '>No item found for this species.</p>
                </> :

                <div className='grid mt-16 mb-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6'>
                        {
                            filteredPetData.map(petdata => <AllpetCard key={petdata._id} data={petdata}></AllpetCard>)
                        }
                </div>
            }

            <Footer></Footer>
        </div>
    );
};

export default AllPet;


