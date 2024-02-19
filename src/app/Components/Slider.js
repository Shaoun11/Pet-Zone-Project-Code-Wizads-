"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import AccessoriesCard from './AccessoriesCard';

export default async function Slider() {
    //Fetch all Accessories product data for slider.
    const allPetAccessoriesProduct = await fetch(`https://pet-zone-project-next-js.vercel.app/petshop`)
    const item = await allPetAccessoriesProduct.json();

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className='grid mt-16 mb-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-1'>
                    {
                        item.map(accessory => <SwiperSlide className='pb-10'>
                            <AccessoriesCard key={accessory._id} accessory={accessory}></AccessoriesCard>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    );
};


