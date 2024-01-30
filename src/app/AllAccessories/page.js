"use client"
import { useState, useEffect } from 'react';
import AccessoriesCard from '../Components/AccessoriesCard';

const AllAccessories = () => {
  const [accessories, setAccessories] = useState([]);
  const [type, setType] = useState('All Items');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://pet-zone-project-next-js.vercel.app/petshop'
        );
        const data = await response.json();
        setAccessories(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 

  const handleTypeChange = (newType) => {
    setType(newType);
  };

  const filteredAccessories =
    type === 'All Items' ? accessories : accessories.filter(accessory => accessory.animal === type);

  return (
    <div>
      <div className="w-full  mt-10 mb-20 flex  flex-col justify-center items-center">
        <div className="flex justify-center items-end my-10">
          <h1 className="text-2xl md:text-4xl font-bold">
            Available Accessories
          </h1>
        </div>
        <div className="join text-black ">
          <button
            onClick={() => handleTypeChange("All Items")}
            className="btn join-item text-black bg-white border-red-500 hover:text-white"
          >
            All Items
          </button>
          <button
            onClick={() => handleTypeChange("dog")}
            className="btn join-item bg-white text-black bg-white border-red-500 hover:text-white"
          >
            Dog Items
          </button>
          <button
            onClick={() => handleTypeChange("bird")}
            className="btn join-item bg-white text-black bg-white border-red-500 hover:text-white"
          >
            Bird Items
          </button>
          <button
            onClick={() => handleTypeChange("cat")}
            className="btn join-item bg-white text-black bg-white border-red-500 hover:text-white"
          >
            Cat Items
          </button>
          <button
            onClick={() => handleTypeChange("rabbit")}
            className="btn join-item bg-white text-black bg-white border-red-500 hover:text-white"
          >
            Rabbit Items
          </button>
        </div>
      </div>

      <div className="grid mt-16 mb-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
        {filteredAccessories.map((accessory) => (
          <AccessoriesCard
            key={accessory._id}
            accessory={accessory}
          ></AccessoriesCard>
        ))}
      </div>
    </div>
  );
};

export default AllAccessories;
