"use client"
import React, { useRef, useState } from "react";



const Banner = () => {
  return (
    <section className="pb-20 pt-32">
      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="leading-relaxed opacity-50 ">
              Are You Looking For A Pet ?
            </p>
            <h1 className="title-font tracking-wide sm:text-3xl md:text-6xl xl:text-7xl mb-4 font-bold ">
              Pet Zone
            </h1>
            <p className="mb-8 leading-relaxed opacity-50 ">
              Pet adoption is the process of taking responsibility for a pet
              that needs a home and providing it with a caring and loving
              environment.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#ef4444] py-2 px-4 focus:outline-none hover:bg-opacity-80 rounded text-sm">
                Shoping
              </button>
            </div>
          </div>
          <div
            id="pattern"
            className="w-32 sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16"
          >
            <div className="w-full flex gap-3 justify-center ">
              <img
                className="object-cover w-52 h-36 object-center rounded-xl "
                alt="hero"
                src="https://i.ibb.co/80FtTY9/pexels-pixabay-208773.jpg"
              />
              <img
                className="object-cover w-52 h-36 object-center rounded-xl "
                alt="hero"
                src="https://i.ibb.co/7QRB9mJ/pexels-nataliya-vaitkevich-5122186-1.jpg"
              />
            </div>
            <div className="w-full h- flex gap-2 justify-center items-center my-2">
              <img
                className="object-cover w-52 h-36 object-center rounded-xl "
                alt="hero"
                src="https://i.ibb.co/dQhWWTg/pexels-photo-4016992.jpg"
              />
              <img
                className="object-cover w-52 h-36 object-center rounded-xl "
                alt="hero"
                src="https://i.ibb.co/Yp0stTh/pexels-damir-14815030.jpg"
              />
              <img
                className="object-cover w-52 h-36 object-center rounded-xl "
                alt="hero"
                src="https://i.ibb.co/JtvCsbc/pexels-valeria-boltneva-9157283.jpg"
              />
            </div>
            <div className="w-full flex gap-3 justify-center">
              <img
                className="object-cover w-52 h-36 object-center rounded-xl "
                alt="hero"
                src="https://i.ibb.co/Ms9WzZQ/pexels-caio-56733.jpg"
              />
              <img
                className="object-cover w-52 h-36 object-center rounded-xl "
                alt="hero"
                src="https://i.ibb.co/n6zRZDC/pexels-luciann-photography-3874703.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Banner;