"use client";

import { useEffect, useState } from "react";

const HelpDeskPost = () => {

  const [alldata, setAlldata] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(
                'https://pet-zone-project-next-js.vercel.app/petdata'
            );
            const data = await response.json();
            setAlldata(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
}, []);
  return (
    <div className="gap-5">
     {
      alldata.map((helpdesk, index) => <div key={helpdesk._id} className="bg-white p-5 lg:p-1  mb-4 rounded-lg shadow-md">
      <div key={helpdesk._id} className="flex items-center pl-5 justify-between mb-2">
        <div className="flex items-center">
          <img
            src="https://placekitten.com/150/150"
            alt="Profile Picture"
            className="w-12 h-12 object-cover rounded-full mr-4"
          />
          <div>
            <h2 className="text-lg font-bold">Jane Doe</h2>
            <p className="text-gray-600 text-sm flex"> Jan 29, 2024</p>
          </div>
        </div>
         <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4 mr-3">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
      </div>
      <p className="text-lg pl-5 pr-5 leading-tight mb-4">
      {helpdesk?.description}
      </p>
      <img
        src={helpdesk?.image}
        alt="Posted Image"
        className="w-full pl-5 object-cover pr-3  mb-4"
      />
      <div className="flex items-center pl-3 pb-3 pr-3 justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center focus:outline-none"></button>
          <button className="flex items-center focus:outline-none">
            <svg
              className="w-5 h-5 text-gray-500 hover:text-blue-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 21l-7-7-7 7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
            <span className="ml-1 text-sm text-gray-600">Comment</span>
          </button>
        </div>
        <span className="text-sm text-gray-600">12 likes | 5 comments</span>
      </div>
    </div>)
     }
    </div>
  );
};

export default HelpDeskPost;
