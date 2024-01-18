// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";



const Banner = () => {
  return (
    <div>
      <div>
        <div className="carousel sm:w-full w-[410px] h-[500px] sm:h-[800px] ">
          <div
            id="slide1"
            className="carousel-item relative sm:w-full w-[410px] h-[500px] sm:h-[800px] "
          >
            <img
              src=""
              className="sm:w-full object-cover w-[410px] h-[500px] sm:h-[800px]  "
            />
            <div className="absolute bg-gradient-to-r from-[#0e0c0cc7] to-rgba(21, 21, 25, 0.00) 100%)  flex h-full  top-0 left-0 items-center  ">
              <div className=" pl-16 lg:space-y-7 md:space-y-5  space-y-3 w-1/2">
                <h2
                  data-aos="fade-right"
                  className="lg:text-6xl md:text-4xl  text-white font-bold "
                >
                  Pet Adoption Website
                </h2>
                <p className="lg:text-lg md:text-base text-xs  font-light  text-[#FFF]">
                  Pet adoption is the process of taking responsibility for a pet
                  that needs a home and providing it with a caring and loving
                  environment. This typically involves adopting a pet from an
                  animal shelter, rescue organization, or sometimes directly
                  from individuals looking to re-home their pets.
                </p>
                <button className="btn mr-5 text-white border-red-500 btn-warning bg-red-500">
                  Discover More{" "}
                </button>
                <button className="btn btn-outline text-white border-yellow-400 btn-warning ">
                  Leatest Collection
                </button>   
              </div>
            </div>
            <div className="absolute flex bottom-0 justify-end gap-5 transform -translate-y-1/2 left-5 right-5 ">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative sm:w-full w-[410px] h-[500px] sm:h-[800px] "
          >
            <img
              src="https://i.ibb.co/2gLHXP6/pexels-baris-selcen-12011932.jpg"
              className="sm:w-full object-cover w-[410px] h-[500px] sm:h-[800px] "
            />

            <div className="absolute bg-gradient-to-r from-[#0e0c0ccd] to-rgba(21, 21, 21, 0.00) 100%)  flex h-full  top-0 left-0 items-center  ">
              <div className=" pl-16 lg:space-y-7 md:space-y-5  space-y-3 w-1/2">
                <h2 className="lg:text-6xl md:text-4xl text-white  font-bold">
                  Pet Adoption Website
                </h2>
                <p className="lg:text-lg md:text-base text-xs font-light text-[#FFF]">
                  Pet adoption is the process of taking responsibility for a pet
                  that needs a home and providing it with a caring and loving
                  environment. This typically involves adopting a pet from an
                  animal shelter, rescue organization, or sometimes directly
                  from individuals looking to rehome their pets.
                </p>
                <button className="btn mr-5 text-white border-red-500 btn-warning bg-red-500">
                  Discover More{" "}
                </button>
                <button className="btn btn-outline text-white border-yellow-400 btn-warning ">
                  Leatest Collection
                </button>
              </div>
            </div>
            <div className="absolute flex bottom-0 justify-end gap-5 transform -translate-y-1/2 left-5 right-5 ">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative sm:w-full w-[410px] h-[500px] sm:h-[800px] "
          >
            <img
              src="https://i.ibb.co/Bq8jTrv/pexels-helena-lopes-1378849.jpg"
              className="sm:w-full object-cover w-[410px] h-[500px] sm:h-[800px] "
            />
            <div className="absolute bg-gradient-to-r from-[#0e0c0cc7] to-rgba(21, 21, 21, 0.00) 100%)  flex h-full  top-0 left-0 items-center  ">
              <div className=" pl-16 lg:space-y-7 md:space-y-5  space-y-3 w-1/2">
                <h2 className="lg:text-6xl md:text-4xl text-white font-bold ">
                  Pet Adoption Website
                </h2>
                <p className="lg:text-lg md:text-base text-xs  font-light text-[#FFF]">
                  Pet adoption is the process of taking responsibility for a pet
                  that needs a home and providing it with a caring and loving
                  environment. This typically involves adopting a pet from an
                  animal shelter, rescue organization, or sometimes directly
                  from individuals looking to rehome their pets.
                </p>
                <button className="btn mr-5 text-white border-red-500 btn-warning bg-red-500">
                  Discover More{" "}
                </button>
                <button className="btn btn-outline text-white border-yellow-400 btn-warning ">
                  Leatest Collection
                </button>
              </div>
            </div>
            <div className="absolute flex bottom-0 justify-end gap-5 transform -translate-y-1/2 left-5 right-5 ">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;