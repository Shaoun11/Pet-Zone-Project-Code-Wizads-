/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client"
import React, { useContext } from 'react';
import Dashboard from "../page";
import { AuthContext } from '@/app/Provider/AuthProvider';


const Page = () => {
    const { user } = useContext(AuthContext);
    return (
        <Dashboard>
        <div className=' lg:ml-64' >
  

    <div
          className="h-full flex flex-col  overflow-y-scroll">
       
       
    <div className="w-full h-[250px]">
      <img
        src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
        className="w-full h-full rounded-tl-lg rounded-tr-lg object-cover"
      />
    </div>
    <div className="flex flex-col items-center -mt-20">
      <img
        src={user?.photoURL}
        className="w-40 h-40 border-4 border-white rounded-full"
      />
      <div className="flex items-center space-x-2 mt-2">
        <p className="text-2xl">{user?.displayName}<span className='text-blue-500'>(Admin)</span></p>
        <span className="bg-red-500 rounded-full p-1" title="Verified">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-100 h-2.5 w-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </span>
      </div>
      <div
                      className="grid px-10 mt-14 py-2  items-center justify-around grid-cols-6 gap-2 divide-x divide-solid ">
                      <div className="col-span-1 flex flex-col items-center ">
                          <span className="text-2xl font-bold dark:text-gray-500">12</span>
                          <span className="text-lg font-medium 0">Total Pet Accept</span>
                      </div>
                      <div className="col-span-1 px-3 flex flex-col items-center ">
                          <span className="text-2xl font-bold dark:text-gray-500">
                            648
                              </span>
                          <span className="text-lg font-medium">Total Order </span>
                      </div>
                      <div className="col-span-1 px-3 flex flex-col items-center ">
                          <span className="text-2xl font-bold dark:text-gray-500">
                              546</span>
                          <span className="text-lg font-medium"> Order Accept</span>
                      </div>
                      <div className="col-span-1 px-3 flex flex-col items-center ">
                          <span className="text-2xl font-bold dark:text-gray-500">
                              46</span>
                          <span className="text-lg font-medium">Order canceled </span>
                      </div>
                      <div className="col-span-1 px-3 flex flex-col items-center ">
                          <span className="text-2xl font-bold dark:text-gray-500">
                              146</span>
                          <span className="text-lg font-medium">Total Client</span>
                      </div>
                      <div className="col-span-1 px-3 flex flex-col items-center ">
                          <span className="text-2xl font-bold dark:text-gray-500">
                              23146$</span>
                          <span className="text-lg font-medium">Total Sell</span>
                      </div>
                  </div>

      
    </div>
   

                  
          </div>
  </div>
  </Dashboard>
    );
};

export default Page;