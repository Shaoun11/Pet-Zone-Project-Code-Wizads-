"use client";
import { useState, useEffect } from 'react';
import AccessoriesCard from '../Components/AccessoriesCard';
import Navber from '../Components/Header';
import Footer from '../Components/Footer';

const AllAccessories = () => {
  const [accessories, setAccessories] = useState([]);
  const [selectedAnimalTypes, setSelectedAnimalTypes] = useState([]);
  const [selectedCategoryTypes, setSelectedCategoryTypes] = useState([]);

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

  const handleTypeChange = (type, isAnimal) => {
    if (isAnimal) {
      if (selectedAnimalTypes.includes(type)) {
        setSelectedAnimalTypes(selectedAnimalTypes.filter(selectedType => selectedType !== type));
      } else {
        setSelectedAnimalTypes([...selectedAnimalTypes, type]);
      }
    } else {
      if (selectedCategoryTypes.includes(type)) {
        setSelectedCategoryTypes(selectedCategoryTypes.filter(selectedType => selectedType !== type));
      } else {
        setSelectedCategoryTypes([...selectedCategoryTypes, type]);
      }
    }
  };

  const handleReset = () => {
    setSelectedAnimalTypes([]);
    setSelectedCategoryTypes([]);
    document.querySelectorAll('.animal-checkbox, .category-checkbox').forEach(checkbox => {
      checkbox.checked = false;
    });
  };

  const filteredAccessories = accessories.filter(accessory => {
    const matchesAnimal = selectedAnimalTypes.length === 0 || selectedAnimalTypes.includes(accessory.animal);
    const matchesCategory = selectedCategoryTypes.length === 0 || selectedCategoryTypes.includes(accessory.category);
    return matchesAnimal && matchesCategory;
  });

  return (
    <>
    <Navber></Navber>
    <div className='flex'>
      <div className='h-full hidden md:block w-1/6 md:w-2/6 lg:w-1/5'>
        <div className='pl-10'>
          <div className='flex justify-between md:flex-wrap'>
            <h2 className='font-semibold text-2xl mt-10'>Animals</h2>
            <h2 onClick={handleReset} className='lg:mt-10 md:my-3 mr-10 btn btn-sm btn-outline cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-[#ef4444] hover:text-white'>
              reset
            </h2>
          </div>
          <hr className='w-32 border border-black my-2' />
          <div className='grid'>

            <label className="flex">
              <input type="checkbox" onChange={() => handleTypeChange('dog', true)} className="animal-checkbox checkbox mt-2" />
              <div className="pt-2 pl-3">Dog Items</div>
            </label>

            <label className="flex">
              <input type="checkbox" onChange={() => handleTypeChange('bird', true)} className="animal-checkbox checkbox mt-2" />
              <div className="pt-2 pl-3">Bird Items</div>
            </label>

            <label className="flex">
              <input type="checkbox" onChange={() => handleTypeChange('cat', true)} className="animal-checkbox checkbox mt-2" />
              <div className="pt-2 pl-3">Cat Items</div>
            </label>

            <label className="flex">
              <input type="checkbox" onChange={() => handleTypeChange('rabbit', true)} className="animal-checkbox checkbox mt-2" />
              <div className="pt-2 pl-3">Rabbit Items</div>
            </label>
          </div>
        </div>

        <div className='pl-10'>
          <h2 className='font-semibold text-2xl mt-10'>Categories</h2>
          <hr className='w-32 border border-black my-2' />
          <div className='grid'>
            <label className="flex">
              <input type="checkbox" onChange={() => handleTypeChange('Collars', false)} className="category-checkbox checkbox mt-2" />
              <div className="pt-2 pl-3">Collars</div>
            </label>

            <label className="flex">
              <input type="checkbox" onChange={() => handleTypeChange('Toys', false)} className="category-checkbox checkbox mt-2" />
              <div className="pt-2 pl-3">Toys</div>
            </label>

            <label className="flex">
              <input type="checkbox" onChange={() => handleTypeChange('Beds', false)} className="category-checkbox checkbox mt-2" />
              <div className="pt-2 pl-3">Beds</div>
            </label>

            <label className="flex">
              <input type="checkbox" onChange={() => handleTypeChange('Harnesses', false)} className="category-checkbox checkbox mt-2" />
              <div className="pt-2 pl-3">Harnesses</div>
            </label>

            <label className="flex">
              <input type="checkbox" onChange={() => handleTypeChange('Feeders', false)} className="category-checkbox checkbox mt-2" />
              <div className="pt-2 pl-3">Feeders</div>
            </label>

            <label className="flex">
              <input type="checkbox" onChange={() => handleTypeChange('Furniture', false)} className="category-checkbox checkbox mt-2" />
              <div className="pt-2 pl-3">Furniture</div>
            </label>
          </div>
        </div>
      </div>


      <div className='bg-[#8eb1cf33] h-full flex-1'>
        {
          filteredAccessories.length === 0 ? <>
            <p className='text-3xl w-full h-[80vh] flex justify-center items-center'>No item found in this Category for this animal.</p>
          </> : <>
            <div className="grid mt-16 mb-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
              {
                filteredAccessories.map(accessory => (
                  <AccessoriesCard key={accessory._id} accessory={accessory}></AccessoriesCard>
                ))
              }
            </div>
          </>
        }
      </div>
    </div>

    <Footer></Footer>
    </>
  );
};

export default AllAccessories;
