"use client";
import React, { useEffect, useState } from "react";
import Dashboard from "../../page";
// import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import Swal from "sweetalert2";
import { useSearchParams } from "next/navigation";

// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';

const Page = ({ params }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("msg");
  console.log(id);

  // Fetching Data
  const [accessories, setAccessories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/petshop/${id}`);
        const data = await response.json();
        setAccessories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(accessories);
  const { name, image, animal, category, description, price } = accessories;
  console.log(name, image, animal, description, category, price);

  // handleFunction
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const animal = form.animal.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;

    const updatedProduct = {
      name,
      image,
      animal,
      category,
      price,
      description,
    };
    console.log(updatedProduct);

    // Sending updated assignment to the server
    fetch(`http://localhost:5001/petshop/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Congratulations",
            text: "Product Update Successful!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <Dashboard>
      <div>
        Update Accessories
        <div>
          <div className="lg:flex   md:flex items-center justify-center">
            <div>
              <img className="h-[350px]"
                src="https://i.ibb.co/HnP9Qdj/360-F-254878309-P62oik-Pc8zu9-TQjr4j2-Xp-Ekl5d-FBa6ep-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="flex  items-center justify-center p-12">
              <div className="mx-auto w-full max-w-[550px]">
                <h1 className="text-3xl text-center font-semibold">
                  Update <span className="text-red-500">Your </span> Desired{" "}
                  <span className="text-red-500">Product</span>{" "}
                </h1>
                <form onSubmit={handleUpdateProduct}>
                  {/* <form > */}
                  <div className="mb-5 mt-6">
                    <label
                      for="name"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="contestName"
                      id="name"
                      defaultValue={name}
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
                      defaultValue={image}
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
                          defaultValue={animal}
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
                        defaultValue={category}
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
                          defaultValue={price}
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
                      defaultValue={description}
                      id="description"
                      placeholder="Describe the Product"
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>
                  <div>
                    <button className="hover:shadow-form rounded-md bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none">
                      Update Product
                    </button>
                  </div>
                </form>
                {/* <ToastContainer position="top-right"  /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Page;
