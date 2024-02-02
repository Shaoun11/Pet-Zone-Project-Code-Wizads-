import React from 'react';
import Dashboard from "../page";

const Page = () => {


    return (
        <Dashboard>
             <div>
             
             <div className="lg:flex   md:flex items-center justify-center">
             <div>
                 <img className="h-[350px]" src="https://i.ibb.co/HnP9Qdj/360-F-254878309-P62oik-Pc8zu9-TQjr4j2-Xp-Ekl5d-FBa6ep-removebg-preview.png" alt="" />
             </div>
               <div className="flex  items-center justify-center p-12">
     
     <div className="mx-auto w-full max-w-[550px]">
     <h1 className="text-3xl text-center font-semibold">Add Your New <span className='text-red-500'>Pet</span> For <span className='text-red-500'>Sale</span> </h1>
       <form  >
         <div className="mb-5 mt-6">
           <label
             for="name"
             className="mb-3 block text-base font-medium text-[#07074D]"
           >
        Type Your Pet Name
           </label>
           <input
             type="text"
             name="contestName"
             id="name"
             placeholder="Type Your Pet Name"
             className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
           />
         </div>
         <div className="mb-5">
           <label
             for="img"
             className="mb-3 block text-base font-medium text-[#07074D]"
           >
           Image URL
           </label>
           <input
             type="text"
             name="contestImage"
             id="img"
             placeholder=" Pet Image URL"
             className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
           />
         </div>
         <div className="-mx-3 flex flex-wrap">
           <div className="w-full px-3 sm:w-1/2">
             <div className="mb-5">
               <label
                 for="fName"
                 className="mb-3 block text-base font-medium text-[#07074D]"
               >
               Gender
               </label>
               <input
                 type="text"
                 name="startdate"
                 id="fName"
                 placeholder="Pet Gender"
                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
               />
             </div>
           </div>
           
             <div className="mb-5">
               <label
                 for="fName"
                 className="mb-3 block text-base font-medium text-[#07074D]"
               >
                Age
               </label>
               <input
                 type="text"
                 name="enddate"
                 id="fName"
                 placeholder="Pet Age "
                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
               />
             </div>
     
           <div className="w-full px-3 sm:w-1/2">
             <div className="mb-5">
               <label
                 for="lName"
                 className="mb-3 block text-base font-medium text-[#07074D]"
               >
                Price
               </label>
               <input
                 type="number"
                 name="participants"
                 id="price"
                 placeholder="Pet Price"
                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
               />
             </div>
             <div className="mb-5">
               <label
                 for="lName"
                 className="mb-3 block text-base font-medium text-[#07074D]"
               >
                Available
               </label>
               <input
                 type="text"
                 name="Pet Available"
                 id="price"
                 placeholder="Entry Free"
                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
               />
             </div>
           </div>
           <div className="w-full px-3 sm:w-1/2">
             <div className="mb-5">
               <label
                 for="lName"
                 className="mb-3 block text-base font-medium text-[#07074D]"
               >
              Species
               </label>
               <input
                 type="number"
                 name="Prize"
                 id="price"
                 placeholder="Pet Species "
                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
               />
             </div>
           </div>
           
           
          
         </div>
         <div className="mb-5">
           <label
             for="message"
             className="mb-3 block text-base font-medium text-[#07074D]"
           >
          Short Descriptin
           </label>
           <textarea
             rows="4"
            name="description"
             id="description"
             placeholder="Type your description"
             className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
           ></textarea>
         </div>
         <div>
           <button 
          
             className="hover:shadow-form rounded-md bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none"
           >
            Add Contest
           </button>
         </div>
       </form>
     </div>
     
     </div>
     
           </div>
     
     
      </div>
        </Dashboard>
    );
};

export default Page;