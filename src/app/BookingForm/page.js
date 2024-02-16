"use client";
import React, { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Header";
import Footer from "../Components/Footer";
import useAxiosPublic from "../hooks/useAxiosPublic";
import HOCAuth from "@/utils/HOCAuth";
import { AuthContext } from "../Provider/AuthProvider";

const Page = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const notify = () => toast("Product Added!");
    const handleAddBookings = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const submittedBy = user.email;
        const status = 'Pending';
        const payment = 'Pending';
        
        const newBooking = { name, email, phone, address, status, payment, submittedBy };
        console.log(newBooking);
    
          axiosPublic.post('/bookings',newBooking)
          .then(res => {
            if(res.data.insertedId){
              console.log('Booking Added to Database')
              notify();
            }
          })
          .catch(error => console.log(error))
        
      };


  return (
    <div>
    <Navbar></Navbar>
      <div>
        <div className="lg:flex   md:flex items-center justify-center">
          <div>
            <img
              className="h-[350px]"
              src="https://i.ibb.co/HnP9Qdj/360-F-254878309-P62oik-Pc8zu9-TQjr4j2-Xp-Ekl5d-FBa6ep-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="flex  items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
              <h1 className="text-3xl text-center font-semibold">
                Fill Up <span className="text-red-500">Booking</span> Form{" "}
                <span className="text-red-500">.</span>{" "}
              </h1>
              <form onSubmit={handleAddBookings} >
              {/* <form> */}
                <div className="mb-5 mt-6 lg:w-[400px]">
                  <label
                    for="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Write Your Full Name Here..."
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5 mt-6 lg:w-[400px]">
                  <label
                    for="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email Address"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5 mt-6 lg:w-[400px]">
                  <label
                    for="phone"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Contact No.
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Your Contact Number"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5 mt-6 lg:w-[400px]">
                  <label
                    for="address"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Address
                  </label>
                  <textarea
                    rows="2"
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Your Full Address"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div>
                  <button className="hover:shadow-form rounded-md bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none">
                    Confirm Booking
                  </button>
                </div>
              </form>
              <ToastContainer position="top-right" />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HOCAuth(Page);
