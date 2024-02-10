"use client"
import React from 'react';
import Dashboard from "../page";
import useAxiosPublic from '@/app/hooks/useAxiosPublic';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    const axiosPublic = useAxiosPublic();

    const notify = () => toast("Product Added!");
    const handleAddProducts = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const animal = form.animal.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const newProducts = { name, image, animal, category, price, description };
        console.log(newProducts);
    
        // const productInfo = {
        //     productTitle: name,
        //     productDescription: description,
        //     productDetails: image,
        //     productCategory: category,
        //     productPrice: price,
        //     productAnimal: animal,
    
        //   }

    //       // Sending product to the server
    // fetch('http://localhost:5001/petshop',{
    //     method: 'POST',
    //     headers: {
    //       'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(productInfo)
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //     if(data.insertedId){
    //         console.log('Product Added to Database')
    //         notify();
  
    //     }
    //   })
          axiosPublic.post('/petshop',newProducts)
          .then(res => {
            if(res.data.insertedId){
              console.log('Product Added to Database')
              notify();
            }
          })
          .catch(error => console.log(error))
        
      };


    return (
        <Dashboard>
            <div>
                <div className="lg:flex   md:flex items-center justify-center">
             <div>
                 <img className="h-[350px]" src="https://i.ibb.co/HnP9Qdj/360-F-254878309-P62oik-Pc8zu9-TQjr4j2-Xp-Ekl5d-FBa6ep-removebg-preview.png" alt="" />
             </div>
               <div className="flex  items-center justify-center p-12">
     
     <div className="mx-auto w-full max-w-[550px]">
     <h1 className="text-3xl text-center font-semibold">Add New <span className='text-red-500'>Accessories</span> For <span className='text-red-500'>Sale</span> </h1>
       <form onSubmit={handleAddProducts} >
         <div className="mb-5 mt-6">
           <label
             for="name"
             className="mb-3 block text-base font-medium text-[#07074D]"
           >
        Product Name
           </label>
           <input
             type="text"
             name="name"
             id="name"
             placeholder="Product Name"
             className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
           />
         </div>
         <div className="mb-5">
           <label
             for="img"
             className="mb-3 block text-base font-medium text-[#07074D]"
           >
          Product Image URL
           </label>
           <input
             type="text"
             name="image"
             id="img"
             placeholder="Product Image URL"
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
               Animal Type
               </label>
               <input
                 type="text"
                 name="animal"
                 id="fName"
                 placeholder="Animal Type"
                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
               />
             </div>
           </div>
           
             <div className="mb-5">
               <label
                 for="fName"
                 className="mb-3 block text-base font-medium text-[#07074D]"
               >
                Product Category
               </label>
               <input
                 type="text"
                 name="category"
                 id="fName"
                 placeholder="Product Category"
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
                 name="price"
                 id="price"
                 placeholder="Pet Price"
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
          Short Description
           </label>
           <textarea
             rows="4"
            name="description"
             id="description"
             placeholder="Describe the Product"
             className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
           ></textarea>
         </div>
         <div>
           <button 
          
             className="hover:shadow-form rounded-md bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none"
           >
            Add Product
           </button>
         </div>
       </form>
       <ToastContainer position="top-right"  />
     </div>
     
     </div>
     
           </div>
            </div>
        </Dashboard>

    );
};

export default Page;