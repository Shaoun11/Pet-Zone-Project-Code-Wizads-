import React from 'react';

const PetCare = () => {
    return (
        <div>
               
           
               <div className="w-full mt-14 mb-20 flex justify-center items-end">
            <h1 className="text-2xl md:text-4xl font-bold">Find Your Nerest Veterinary Clinic </h1>
            <div className="w-2 h-2 rounded-full ml-1 bg-red-500 mb-1"></div>
             
          </div>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-2">
       
          <h2 className="max-w-lg mb-6 text text-red-500 font-sans text-3xl font-bold tracking-tight  sm:text-xl sm:leading-none">
            Your pet's health is our utmost priority!
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            The best way to ensure your pet lives a healthy, happy life out here is to take a proactive approach to their health and wellness. Every dog and cat has unique needs, and PetVet offers you a wide variety of ways to get them the necessary, non-emergency care that’s right for you and for them.
            </p>
            <a
              href="/petcare"
              aria-label=""
              className="inline-flex text-red-500 items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn More
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
         
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://t3.ftcdn.net/jpg/02/85/47/46/360_F_285474697_wUYkolUeKbqwBBUTPi3WXZ7QisyCFU02.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
        </div>
    );
};

export default PetCare;