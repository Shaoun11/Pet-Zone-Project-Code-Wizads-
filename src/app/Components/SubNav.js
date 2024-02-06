import React from "react";
import {
    FaHeadphonesAlt,
    FaRegEnvelope,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
    FaFacebookF,  
  } from "react-icons/fa";
  import { BsStopwatch } from "react-icons/bs";

const SubNavbar = () => {
  return (
    <div className="hidden max-w-[1520px] bg-[#f0f8ff] mx-auto py-3 md:flex px-4 2xl:px-0 justify-between items-center font-kanit">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <FaHeadphonesAlt className="icons text-red-500"></FaHeadphonesAlt>{" "}
          <p className="text-base font-medium text-[#000000] transition-colors duration-500 hover:text-primary">
            123456789
          </p>
        </div>
        <div className="flex items-center gap-2">
          <BsStopwatch className="icons text-red-500"></BsStopwatch>{" "}
          <p className="text-base font-medium text-[#000000] transition-colors duration-500 hover:text-primary">
            Mon-Fri 8:00 to 2:00
          </p>  
        </div>
        <div className="flex items-center gap-2">
          <FaRegEnvelope className="icons text-red-500"></FaRegEnvelope>{" "}
          <p className="text-base font-medium text-[#000000] transition-colors duration-500 hover:text-primary">
            PetZoneOfficial@gamil.com
          </p>
        </div>
      </div>
      {/* icon div start from here */}
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-red-500  relative flex justify-center items-center group hover:bg-primary duration-500">
          <a href="">
            <FaFacebookF className="w-3 h-3 text-[#ffffff] group-hover:text-white"></FaFacebookF>
          </a>
        </div>
        <div className="w-7 h-7 rounded-full bg-red-500  relative flex justify-center items-center group hover:bg-primary duration-500">
          <a href="">
            <FaTwitter className="w-3 h-3 text-[#ffffff] group-hover:text-white"></FaTwitter>
          </a>
        </div>
        <div className="w-7 h-7 rounded-full bg-red-500  relative flex justify-center items-center group hover:bg-primary duration-500">
          <a href="">
            <FaInstagram className="w-3 h-3 text-[#ffffff] group-hover:text-white"></FaInstagram>
          </a>
        </div>
        <div className="w-7 h-7 rounded-full bg-red-500 relative flex justify-center items-center group hover:bg-primary duration-500">
          <a href="">
            <FaLinkedinIn className="w-3 h-3 text-[#ffffff] group-hover:text-white"></FaLinkedinIn>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
