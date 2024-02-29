/* eslint-disable @next/next/no-img-element */
import React from 'react';

const FeturedAccecories = () => {
    return (
        <div>
            
<section>
  <div className="mx-auto  max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
        <div className="mx-auto bg-[#f3f4f6] max-w-md text-center lg:text-left">
          <header>
          <div className="w-full flex -ml-8 justify-center items-end">
        <h1 className="text-2xl md:text-4xl font-bold">Our Accessories</h1>
        <div className="w-2 h-2 rounded-full bg-red-500 mb-1 ml-1"></div>
      </div>

            <p className="mt-4 text-gray-500">
            Choose the best quality products for your best friend
            </p>
          </header>

          <a
            href="/AllAccessories"
            className="mt-8 inline-block rounded  border-gray-900 bg-red-500 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
          >
            Shop All
          </a>
        </div>
      </div>

      <div className="lg:col-span-2 lg:py-8">
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <a href="#" className="group block">
              <img
                src="https://i.ibb.co/HNwvhZB/cat-fish-15-2.jpg"
                alt=""
                className="aspect-square w-full rounded object-cover"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                CatPlus Food
                </h3>

                <p className="mt-1 text-sm text-red-500 text-gray-700">$150</p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block">
              <img
                src="https://i.ibb.co/7zFDtnh/525-525-62fa40365bb67.jpg"
                alt=""
                className="aspect-square w-full rounded object-cover"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Jungle Food
                </h3>

                <p className="mt-1 text-sm text-red-500">$150</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default FeturedAccecories;