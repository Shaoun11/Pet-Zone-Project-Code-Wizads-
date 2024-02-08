"use client"
import React from 'react';
import Dashboard from "../page";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
const page = () => {
    const { data: review = [], refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5001/reviews');
            return res.data;
        }
    })


    const handleDeleteUser = reviews => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5001/reviews/${reviews._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
       <Dashboard>
 
       <div>
            <div className="mb-14">
                <p className="text-2xl mt-5 ml-6 font-semibold mb-2">
                    Reviews
                </p>
                <p className="text-sm ml-6">
                    We are glad to see you again!
                </p>
            </div>
            <div>
                {review.map((reviews)=>
                
            <div className="px-8 ml-3 py-5 bg-white mb-3 rounded-2xl">
              
            <div className="p-2 lg:p-6">
                 <div className="flex justify-between">
                     <div className="flex-1">
                         <p className="text-xl font-semibold mb-1">
                             Sunny Birds
                         </p>
     
                         <p className="text-sm mb-4">
                             13 mins ago
                         </p>
                     </div>
     
                     <button onClick={() => handleDeleteUser(reviews)} className="hover:bg-[#f7f7f7] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                         <p className="text-lg">
                             <FaRegTrashAlt />
                         </p>
                     </button>
                 </div>
     
                 <p className="font-medium text-sm md:text-base mb-5">
                     {reviews.details}
                 </p>
     
                 <div className="md:flex justify-between items-center">
                     <div className="md:flex gap-5 mb-2 md:mb-0">
                         <div className="w-14 h-14 rounded-full bg-slate-400 mb-2 md:mb-0">
                             <img src={reviews.userphoto} alt="" className="w-full h-full rounded-full object-cover" />
                         </div>
     
                         <div>
                             <p className="font-semibold mb-1">
                                {reviews.username}
                             </p>
                             <p className="text-sm mb-1">
                                {reviews.useremail}
                             </p>
                             <p className="text-sm">
                                 Bangladesh
                             </p>
                         </div>
                     </div>
     
                     <div className="flex text-[#fdcc0d] text-lg">
                         <MdStar />
                         <MdStar />
                         <MdStar />
                         <MdStar />
                         <MdStar />
                     </div>
                 </div>
             </div>
                 </div>
                )}
            </div>
        </div>


        <hr className="my-10" />
       </Dashboard>
    </div>
    );
};

export default page;