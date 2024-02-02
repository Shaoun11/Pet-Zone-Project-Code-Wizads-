import React from 'react';
import Dashboard from "../page";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Link from 'next/link';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
const Page = async() => {
    const response =await fetch(`https://pet-zone-project-next-js.vercel.app/petshop`)
    const data =await response.json();

    return (
        <Dashboard>
            <div>
             
             <div>
                 <h1 className='text-5xl font-semibold mt-5 text-center'>My <span className='text-red-500'>Cart</span></h1>
             </div>
             <div className='max-w-5xl mx-auto  mb-28  grid md:grid-cols-2 lg:grid-cols-1 grid-cols-1 gap-6'>
                
             </div>
             <div className="overflow-x-auto ">
                 <table className="table  w-full">
                     {/* head */}
                     <thead>
                         <tr className='text-gray-900'>
                             <th></th>
                             <th>Pet Name</th>
                             <th>Pet  Image</th>
                             <th>Buy Now</th>
                             <th>Action</th>
                         </tr>
                     </thead>
                     <tbody className=''>
                     {
                     data.map((contest,index)=> <tr key={contest._id}>
                         <th>{index + 1}</th>
                         <td className='text-lg font-semibold'>{contest.name}</td>
                         <td><img className='w-20 h-20 rounded-md object-cover' src={contest.image} alt="" /></td>
                         <td>
                         <Link href={""} ><button
                               
                               className="btn btn-ghost btn-lg">
                               <MdOutlineShoppingCartCheckout className="text-green-500 text-2xl -ml-5" ></MdOutlineShoppingCartCheckout>
                           </button></Link>
                            
                         </td>
                         <td>
                             <button
                               
                                 className="btn btn-ghost btn-lg">
                                 <FaTrashAlt className="text-red-500"></FaTrashAlt>
                             </button>
                         </td>
                     </tr>)
                 }
 
                     </tbody>
                 </table>
             </div>
         </div>
        </Dashboard>

    );
};

export default Page;