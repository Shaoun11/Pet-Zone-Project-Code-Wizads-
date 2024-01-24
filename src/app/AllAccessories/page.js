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
      <div className="w-full  mt-10 mb-20 flex flex-col justify-center items-center">
        <div className="flex justify-center items-end my-10">
          <h1 className="text-2xl md:text-4xl font-bold">Available Accessories</h1>
          <div className="w-2 h-2 rounded-full ml-1 bg-secondary mb-1"></div>
        </div>
        <div className="join">
          <button onClick={() => handleTypeChange('All Items')} className="btn join-item">
            All Items
          </button>
          <button onClick={() => handleTypeChange('dog')} className="btn join-item">
            Dog Items
          </button>
          <button onClick={() => handleTypeChange('bird')} className="btn join-item">
            Bird Items
          </button>
          <button onClick={() => handleTypeChange('cat')} className="btn join-item">
            Cat Items
          </button>
          <button onClick={() => handleTypeChange('rabbit')} className="btn join-item">
            Rabbit Items
          </button>
        </div>
      </div>

      <div className="grid mt-16 mb-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
        {filteredAccessories.map(accessory => (
          <AccessoriesCard key={accessory._id} accessory={accessory}></AccessoriesCard>
        ))}
      </div>
    </div>
  );
};

export default AllAccessories;
