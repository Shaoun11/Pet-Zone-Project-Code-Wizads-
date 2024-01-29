"use client"

import Link from 'next/link';
import BestCard from './BestCard';

const BestPet = async() => {
    const response =await fetch(`https://pet-zone-project-next-js.vercel.app/petdata`)
    const data =await response.json();
    const slicedData = data.slice(0, 5);

  
    return (
        <div>
        <div className="w-full mt-14 mb-20 flex justify-center items-end">
            <h1 className="text-2xl md:text-4xl font-bold">Our Best Selling Pet</h1>
            <div className="w-2 h-2 rounded-full ml-1 bg-secondary mb-1"></div>
             
          </div>
          <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6'>
                {
                   slicedData.map(pet=><BestCard key={pet._id} petdata={pet}></BestCard>)
                }
                 
               </div>
               <div className='flex items-center justify-center  my-14'>
                    <Link href={"/AllPet"}><button className='btn btn-outline btn-secondary text-white  '>See All Pet</button></Link>
                
                </div>
        </div>
    );
};

export default BestPet;