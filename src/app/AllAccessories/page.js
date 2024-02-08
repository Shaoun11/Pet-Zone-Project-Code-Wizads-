
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
    setSearchQuery('');
    document.getElementById('table-search1').value = '';
    document.getElementById('table-search2').value = '';
    setSelectedAnimalTypes([]);
    setSelectedCategoryTypes([]);
    document.querySelectorAll('.animal-checkbox, .category-checkbox').forEach(checkbox => {
      checkbox.checked = false;
    });
  };

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredAccessories = accessories.filter(accessory => {
    const matchesAnimal = selectedAnimalTypes.length === 0 || selectedAnimalTypes.includes(accessory.animal);
    const matchesCategory = selectedCategoryTypes.length === 0 || selectedCategoryTypes.includes(accessory.category);
    const matchesSearch = accessory.animal.toLowerCase().includes(searchQuery) ||
      accessory.name.toLowerCase().includes(searchQuery) || accessory.category.toLowerCase().includes(searchQuery);

    return matchesAnimal && matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navber></Navber>
      <div className='flex flex-col md:flex-row'>

        {/* For Mobile Device */}
        <div className="py-4 mx-auto md:hidden lg:hidden">
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"></path>
              </svg>
            </div>
            <input type="text" id="table-search1" className="bg-[#ffffff1e] border border-black text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Search for items" onChange={handleSearchChange} />
          </div>
        </div>


        <div className='h-full hidden md:block w-1/6 md:w-2/6 lg:w-1/5'>
          <div className='pl-10'>
            {/* Search Functionality for MD & LG*/}
            <div className="pt-7">
              <div className="relative mt-1 mr-10">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
                <input type="text" id="table-search2" className="bg-[#ffffff1e] border border-black text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 table-search"
                  placeholder="Search for items" onChange={handleSearchChange} />
              </div>
            </div>


            {/* Animal checkbox Items */}
            <div className='flex justify-between md:flex-wrap'>
              <h2 className='font-semibold text-2xl mt-7'>Animals</h2>
              <h2 onClick={handleReset} className='lg:mt-7 md:my-3 mr-10 btn btn-sm btn-outline cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-[#ef4444] hover:text-white'>
                reset
              </h2>
            </div>
            <hr className='w-32 border border-black my-2 -mt-[3px]' />
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


          {/* Categories checkbox Item */}
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


