"use client"
import React, { useContext } from 'react';

import { AuthContext } from '@/app/Provider/AuthProvider';
import { Fade } from 'react-awesome-reveal';
import Dashboard from "../page"

const Page = () => {
    const { user } = useContext(AuthContext);
    return (
    
      <Dashboard>
          <div >
    

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
          <p className="text-2xl">{user?.displayName}</p>
          <span className="bg-blue-500 rounded-full p-1" title="Verified">
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
                        className="grid px-7 mt-14 py-2  items-center justify-around grid-cols-3 gap-4 divide-x divide-solid ">
                        <div className="col-span-1 flex flex-col items-center ">
                            <span className="text-2xl font-bold dark:text-gray-500">4</span>
                            <span className="text-lg font-medium 0">Your Cart</span>
                        </div>
                        <div className="col-span-1 px-3 flex flex-col items-center ">
                            <span className="text-2xl font-bold dark:text-gray-500">
                                2</span>
                            <span className="text-lg font-medium">Total Purches</span>
                        </div>
                        <div className="col-span-1 px-3 flex flex-col items-center ">
                            <span className="text-2xl font-bold dark:text-gray-500">
                                546</span>
                            <span className="text-lg font-medium">Points</span>
                        </div>
                    </div>

        
      </div>
     
 
                    
            </div>
    </div>
    </Dashboard>

    );
};

export default Page;