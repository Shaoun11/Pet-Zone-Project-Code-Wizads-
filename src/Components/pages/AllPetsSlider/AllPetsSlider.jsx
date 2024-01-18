// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AllPetsSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-row justify-center items-center gap-4 my-4">
            {/* card 1 */}
          <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
            <figure>
              <img
                src="https://i.imgur.com/KnXc4F0.jpg"
                alt="Dog"
                className="w-[450px] h-[500px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Buddy</h2>
              <p>Golden Retriever</p>
            </div>
          </div>
          {/* card 2 */}
          <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
            <figure>
              <img
                src="https://i.imgur.com/oG6j5dF.jpg"
                alt="Cat"
                className="w-[450px] h-[500px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Whiskers</h2>
              <p>Siamese</p>
            </div>
          </div>
          {/* card 3 */}
          <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
            <figure>
              <img
                src="https://i.imgur.com/4KaXcq8.jpg"
                alt="Rabbit"
                className="w-[450px] h-[500px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Snowball</h2>
              <p>Dwarf Hotot</p>
              
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-row justify-center items-center gap-4 my-4">
            {/* card 1 */}
          <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
            <figure>
              <img
                src="https://i.imgur.com/wpuiLrc.jpg"
                alt="Bird"
                className="w-[450px] h-[500px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Sunny</h2>
              <p>Cockatiel</p>
            </div>
          </div>
          {/* card 2 */}
          <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
            <figure>
              <img
                src="https://i.imgur.com/w66tVzm.jpg"
                alt="Dog"
                className="w-[450px] h-[500px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Rocky</h2>
              <p>German Shepherd</p>
            </div>
          </div>
          {/* card 3 */}
          <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
            <figure>
              <img
                src="https://i.imgur.com/fC0GJ1H.jpg"
                alt="Cat"
                className="w-[450px] h-[500px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Mittens</h2>
              <p>Domestic Shorthair</p>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-row justify-center items-center gap-4 my-4">
            {/* card 1 */}
          <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
            <figure>
              <img
                src="https://i.imgur.com/F3rTc1N.jpg"
                alt="Rabbit"
                className="w-[450px] h-[500px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Thumper</h2>
              <p>Holland Lop</p>
            </div>
          </div>
          {/* card 2 */}
          <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
            <figure>
              <img
                src="https://i.imgur.com/lBReioC.jpg"
                alt="Bird"
                className="w-[450px] h-[500px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Rio</h2>
              <p>Lovebird</p>
            </div>
          </div>
          {/* card 3 */}
          <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
            <figure>
              <img
                src="https://i.imgur.com/ITfBRAd.jpg"
                alt="Dog"
                className="w-[450px] h-[500px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Luna</h2>
              <p>Labrador Retriever</p>
            </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AllPetsSlider;
