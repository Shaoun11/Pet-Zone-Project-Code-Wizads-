// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import required modules
// import { EffectCoverflow, Pagination } from "swiper/modules";
import Link from "next/link";

const BookingAccouncement = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
    {/* Headings */}
    <div className="w-full mt-14 mb-20 flex justify-center items-end">
            <h1 className="text-2xl md:text-4xl font-bold">Advance Reservation Lounge </h1>
            <div className="w-2 h-2 rounded-full ml-1 bg-red-500 mb-1"></div>
             
          </div>
      {/* <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      > */}
      {/* Booking Card 1 */}
        {/* <SwiperSlide>
          <div className="p-7 flex justify-center items-center">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-1000 hover:shadow-primary-400  ring-4 ring-white ring-opacity-40 hover:ring-red-400 hover:ring-opacity-40 max-w-sm ">
              <div className="relative">
                <img
                  className=" w-96 h-60 object-cover"
                  src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
                  alt="Product Image"
                />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                  Pre-Order
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Labrador Retriever Puppies</h3> */}
                {/* <p className="text-gray-600 text-sm mb-4">
                {description.slice(0, 70)}
              </p> */}
                {/* <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">$ 12000</span>
                  <Link href={`/BookingsDetails`}>
                    {" "}
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                      Pre-Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      {/* Booking Card 2 */}
        {/* <SwiperSlide>
          <div className="p-7 flex items-center justify-center">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-1000 hover:shadow-primary-400  ring-4 ring-white ring-opacity-40 hover:ring-red-400 hover:ring-opacity-40 max-w-sm ">
              <div className="relative">
                <img
                  className=" w-96 h-60 object-cover"
                  src="https://weareallaboutcats.com/wp-content/uploads/2022/05/10-Fascinating-Facts-About-Persian-Cats-.png"
                  alt="Product Image"
                />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                  Coming Soon
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Persian Cats</h3> */}
                {/* <p className="text-gray-600 text-sm mb-4">
                {description.slice(0, 70)}
              </p> */}
                {/* <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">$ 10000</span>
                  
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded disabled">
                      Booking Starts 27 Feb
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      {/* Booking Card 3 */}
        {/* <SwiperSlide>
          <div className="p-7 flex items-center justify-center">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-1000 hover:shadow-primary-400  ring-4 ring-white ring-opacity-40 hover:ring-red-400 hover:ring-opacity-40 max-w-sm ">
              <div className="relative">
                <img
                  className=" w-96 h-60 object-cover"
                  src="https://cdn.shopify.com/s/files/1/0572/4097/7617/files/guinea-pig-talking-blog_1024x1024.jpg?v=1659648480"
                  alt="Product Image"
                />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                  Coming Soon
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Guinea Pigs</h3> */}
                {/* <p className="text-gray-600 text-sm mb-4">
                {description.slice(0, 70)}
              </p> */}
                {/* <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">$ 2000</span>
                  
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                    Coming Soon
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      {/* </Swiper> */}
    <div>
    <div className="hero relative lg:h-[500px] bg-white rounded-lg overflow-hidden shadow-lg transition duration-1000 hover:shadow-primary-400  ring-4 ring-white ring-opacity-40 hover:ring-red-400 hover:ring-opacity-40" style={{backgroundImage: 'url(https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg)'}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                  Pre-Order
                </div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">Labrador Retriever Puppies</h1>
      <p className="mb-5 text-white">Labrador Retriever puppies embody the perfect blend of affection, intelligence, and playfulness. From their wagging tails to their soulful eyes, these adorable pups captivate hearts with their friendly and outgoing nature.</p>
      <div className="flex flex-col items-center justify-around">
                  <span className="font-bold my-4 text-lg text-white">$ 12000</span>
                  <Link href={`/BookingsDetails`}>
                    {" "}
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                      Pre-Book Now
                    </button>
                  </Link>
                </div>
    </div>
  </div>
</div>
    </div>
    <div className="flex max-lg:flex-col lg:flex-row gap-2 mt-2">
    <div className="hero relative lg:h-[400px] bg-white rounded-lg overflow-hidden shadow-lg transition duration-1000 hover:shadow-primary-400  ring-4 ring-white ring-opacity-40 hover:ring-red-400 hover:ring-opacity-40" style={{backgroundImage: 'url(https://weareallaboutcats.com/wp-content/uploads/2022/05/10-Fascinating-Facts-About-Persian-Cats-.png)'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                  Coming Soon
                </div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-semibold text-white">Persian Cats</h1>
      <p className="mb-5 text-white">Persian cats are renowned for their luxurious long fur, expressive faces, and calm demeanor. With their elegant appearance and affectionate nature, they make wonderful companions for families and individuals alike.</p>
      <div className="flex items-center justify-around">
                  <span className="font-bold text-lg text-white">$ 10000</span>
                  
                    {" "}
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                      Booking Starts March 7
                    </button>
                  
                </div>
    </div>
  </div>
</div>
      <div className="hero relative lg:h-[400px] bg-white rounded-lg overflow-hidden shadow-lg transition duration-1000 hover:shadow-primary-400  ring-4 ring-white ring-opacity-40 hover:ring-red-400 hover:ring-opacity-40" style={{backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0572/4097/7617/files/guinea-pig-talking-blog_1024x1024.jpg?v=1659648480)'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                  Coming Soon
                </div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-semibold text-white">Guinea Pigs</h1>
      <p className="mb-5 text-white">Guinea pigs, also known as cavies, are small, sociable rodents cherished for their friendly personalities and gentle nature. These adorable pets are characterized by their round bodies, short legs, and distinctive squeaks, which they use to communicate with their owners.</p>
      <div className="flex items-center justify-around">
                  <span className="font-bold text-lg text-white">$ 2000</span>
                  
                    {" "}
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                      Coming Soon
                    </button>
                  
                </div>
    </div>
  </div>
</div>
    </div>
      
    </div>
      
  );
};

export default BookingAccouncement;
