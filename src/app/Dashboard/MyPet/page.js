import Link from 'next/link';
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Dashboard from "../page";


const page = async () => {

    const response =await fetch(`http://localhost:5001/petdata`)
    const data =await response.json();
    return (
       <Dashboard>
       
           <div>
             
             <div>
                 <h1 className='text-5xl font-semibold mt-5 text-center'>My Added <span className='text-red-500'>Pet</span></h1>
             </div>
             <div className='max-w-7xl mx-auto  mb-28  grid md:grid-cols-2 lg:grid-cols-1 grid-cols-1 gap-6'>
                
             </div>
             <div className="overflow-x-auto">
                 <table className="table table-zebra w-full">
                     {/* head */}
                     <thead>
                         <tr>
                             <th></th>
                             <th>Pet Name</th>
                             <th>Pet Image</th>
                             <th>Edit</th>
                             <th>Action</th>
                         </tr>
                     </thead>
                   
                 </table>
             </div>
         </div>  
   
       </Dashboard>
    );
};

export default page;