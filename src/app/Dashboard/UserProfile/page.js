"use client"
import React, { useContext } from 'react';

import { AuthContext } from '@/app/Provider/AuthProvider';
import Dashboard from "../page"
import { AiOutlineFileDone } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoWalletOutline } from 'react-icons/io5';
import { IoCartOutline } from "react-icons/io5";

const Page = () => {
    const { user } = useContext(AuthContext);
    return (
    
      <Dashboard>
          <div className='lg:ml-72' >
    

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
        <div className="max-w-7xl mt-8 mx-auto">
        <div className="p-6 bg text-white rounded-lg">
          <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-[#FF407D]">
              <div className="flex justify-center p-2 rounded-lg sm:p-4  border-2">
                <h1 className="text-4xl">
                  <IoCartOutline />
                </h1>
              </div>
              <div>
                <p className="capitalize">Your Cart</p>
                <p className="text-3xl font-semibold leadi">3</p>
              </div>
            </div>

            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-red-500">
              <div className="flex justify-center p-2 rounded-lg sm:p-4 border-2">
                <h1 className="text-4xl">
                  <IoWalletOutline />
                </h1>
              </div>
              <div>
                <p className="capitalize">Unpaid</p>
                <p className="text-3xl font-semibold leadi">7500</p>
              </div>
            </div>

            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-[#FF407D]">
              <div className="flex justify-center p-2 rounded-lg sm:p-4 border-2">
                <h1 className="text-4xl">
                  <TbTruckDelivery />
                </h1>
              </div>
              <div>
                <p className="capitalize">Total order</p>
                <p className="text-3xl font-semibold leadi">12</p>
              </div>
            </div>

            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-red-500">
              <div className="flex justify-center p-2 rounded-lg sm:p-4 border-2">
                <h1 className="text-4xl">
                  <AiOutlineFileDone />
                </h1>
              </div>
              <div>
                <p className="capitalize">Completed</p>
                <p className="text-3xl font-semibold leadi">17</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        
      </div>
     
 
                    
            </div>
    </div>
    </Dashboard>

    );
};

export default Page;