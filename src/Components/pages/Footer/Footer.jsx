import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#1d1d1d] pt-16 ">
      <div className="max-container flex flex-col md:flex-row px-4 md:px-0 gap-10 md:gap-0">
        <div className="text-center md:w-1/2">
          <img src="https://i.ibb.co/KhNtLH5/download-removebg.png?fbclid=IwAR3XJJCr1a7JQuPF46qQIjy5Kw5kwGZ-LmKdeHAFoy6yyi-g96C-OBjM85g" alt="logo" className="md:w-[250px] mx-auto h-auto" />
          <p className="text-slate-300 font-medium">
            Sit amet conse ctetur adipisicing elit, sed doe eiusmod tempor
            incididunt ut laborea aaaeht dolore magna aliqua.
          </p>
          <div className="flex gap-2 md:gap-3 w-full justify-center mt-5">
            <a href="https://www.facebook.com/ahmed.nahid.7127">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600">
                  <FaFacebookF className="w-5 h-5 text-white"></FaFacebookF>
              </div>
            </a>
            <a href="https://www.instagram.com/ahmed_nahid47/">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C8347D]">
                  <FaInstagram className="w-5 h-5 text-white"></FaInstagram>
              </div>
            </a>
            <a href="#">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0073AF]">
                <FaLinkedinIn className="w-5 h-5 text-white"></FaLinkedinIn>
              </div>
            </a>
            <a href="https://github.com/NahidAhmed47">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#171515]">
                <FaGithub className="w-5 h-5 text-white"></FaGithub>
              </div>
            </a>
          </div>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-5 w-full  content-center justify-items-center">
          <div className="text-white">
            <h1 className="text-white font-bold text-lg">Quick Links</h1>
            <hr className="w-full border border-secondary" />
            <p className="text-base font-medium text-slate-200 mt-5 cursor-pointer">All Pets</p>
            <p className="text-base font-medium text-slate-200 cursor-pointer mt-1">My Pets</p>
            <p className="text-base font-medium text-slate-200 cursor-pointer mt-1">Add Pets</p>
            <p className="text-base font-medium text-slate-200 cursor-pointer mt-1">Blogs</p>
          </div>
          <div className="text-white">
            <h1 className="text-white font-bold text-lg">Our Company</h1>
            <hr className="w-full border border-secondary" />
            <p className="cursor-pointer mt-5 text-base font-medium text-slate-200">About Us</p>
            <p className="cursor-pointer mt-1 text-base font-medium text-slate-200">FAQ</p>
            <p className="cursor-pointer mt-1 text-base font-medium text-slate-200">Contract</p>
            <p className="cursor-pointer mt-1 text-base font-medium text-slate-200">Location</p>
          </div>
          <div className="text-white w-full md:w-fit text-center md:text-start col-span-2 md:col-auto">
            <h1 className="text-white font-bold text-lg">Subscribe</h1>
            <hr className="w-full border border-secondary" />
            <div className="mt-8">
                <input type="email" className="w-full outline-none h-8 rounded-full px-4 text-black" placeholder="Enter email"/>
                <button className="btn btn-sm btn-secondary mt-3">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1d1d1d] h-10 mt-10">
        <div className="max-container flex items-center justify-center h-full px-5 py-3 md:p-0">
            <p className="text-white font-medium text-sm">© 2024, All Right Reserved by Pet Zone.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
