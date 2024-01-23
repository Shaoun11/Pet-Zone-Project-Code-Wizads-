"use client";

import Link from "next/link"; 

const Accessories = () => {
   
  return (
    <div>
     <div className="w-full mt-14 mb-20 flex justify-center items-end">
            <h1 className="text-2xl md:text-4xl font-bold">Accessories for Pets</h1>
            <div className="w-2 h-2 rounded-full ml-1 bg-secondary mb-1"></div>
             
          </div>
    <div className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto my-4">
      {/* card 1 */}
      <div className="card w-96 bg-orange-50 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/fQTgeyD.jpg"
            alt="Dog"
            className="rounded-xl h-[300px] w-[400px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">DreamCushion Orthopedic Dog Mattress</h2>
          <p>Provide your furry friend with orthopedic support for a good night's sleep.</p>
         
        </div>
      </div>
      {/* card 2 */}
      <div className="card w-96 bg-orange-50 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/wKmOG0Y.jpg"
            alt="Cats"
            className="rounded-xl h-[300px] w-[400px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">PurrPillow Plush Cat Bed</h2>
          <p>A luxurious plush cat bed for your feline friend's comfort.</p>
          
        </div>
      </div>
      {/* card 3 */}
      <div className="card w-96 bg-orange-50 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/0nzg6gZ.jpg"
            alt="Rabbit"
            className="rounded-xl h-[300px] w-[400px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">BunnyBoudoir Soft Rabbit Bedding</h2>
          <p>Provide your rabbit with cozy and soft bedding for a comfortable rest.</p>
         
        </div>
      </div>
      {/* card 4 */}
      <div className="card w-96 bg-orange-50 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.imgur.com/RcoRcEF.jpg"
            alt="Birds"
            className="rounded-xl h-[300px] w-[400px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">FeatherFiesta Colorful Bird Perch</h2>
          <p>Provide your bird with a vibrant and comfortable perch for play and relaxation.</p>
         
        </div>
      </div>
    </div>
    <div className='flex items-center justify-center  my-14'>
                    <Link href={"/AllAccessories"}><button className='btn btn-outline btn-secondary text-white'>See All Accessories</button></Link>
                
                </div>

    </div>
  );
};

export default Accessories;
