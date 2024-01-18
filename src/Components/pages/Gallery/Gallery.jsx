import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-marquee-slider";

const galleryImg = [
    "https://i.ibb.co/0QGjV3g/pexels-yana-kangal-17489683.jpg",
  "https://img.freepik.com/premium-photo/dog-cat-are-sitting-heart-shaped-balloon_590200-1470.jpg",
  "https://i.ibb.co/KsWX3WZ/pexels-antoni-shkraba-4498874.jpg",
  
 "https://i.ibb.co/2gLHXP6/pexels-baris-selcen-12011932.jpg",
  "https://i.ibb.co/qMSbbZP/pexels-los-muertos-crew-10041686.jpg",
  
  "https://i.ibb.co/n6zRZDC/pexels-luciann-photography-3874703.jpg",
  "https://i.ibb.co/R70DgNr/pexels-pavel-danilyuk-7055937.jpg",
  "https://i.ibb.co/Yp0stTh/pexels-damir-14815030.jpg",
  "https://i.ibb.co/Bq8jTrv/pexels-helena-lopes-1378849.jpg",
  "https://i.ibb.co/mR7DKFx/pexels-mikhail-nilov-7474090.jpg",

  
];
const galleryImgRevers = [

 "https://i.ibb.co/FxpK8fD/pexels-nng-5402409.jpg",
 "https://i.ibb.co/C65KJsn/pexels-blue-bird-7210349.jpg",
 "https://i.ibb.co/pRSM1L1/pexels-blue-bird-7210339.jpg",
 "https://i.ibb.co/Z8QW1n0/pexels-antoni-shkraba-7524671.jpg",
 "https://i.ibb.co/DMK1kV5/pexels-sourav-dey-16844537.jpg",
 "https://i.ibb.co/4K5YDrV/pexels-brixiv-6528047.jpg",

"https://i.ibb.co/JtvCsbc/pexels-valeria-boltneva-9157283.jpg",
 "https://i.ibb.co/hRFtKjR/pexels-rdne-stock-project-7516109.jpg",

];

const Gallery = () => {
  return (
    <div className="max-container my-10 md:my-20">
      <div className="w-full flex justify-center items-end">
        <h1 className="text-2xl md:text-4xl font-bold">Gallery</h1>
        <div className="w-2 h-2 rounded-full bg-secondary mb-1"></div>
      </div>
      <div className="my-10 relative rounded-xl shadow-xl">
        <div className="h-[200px] w-full px-5 pt-5">
          <Marquee key="" velocity={12} className="w-full h-full">
            {galleryImg?.map((toyImg, index) => (
              <div key={index} className="w-fit h-[200px] overflow-hidden  ">
                <img
                  src={toyImg}
                  className="w-fit h-full border-r hover:scale-[1.2] origin-center duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
        <div className="h-[200px] w-full px-5 pb-5">
          <Marquee key="" velocity={12}>
            {galleryImgRevers?.map((toyImg, index) => (
              <div key={index} className="w-fit h-[200px] overflow-hidden  ">
                <img
                  src={toyImg}
                  className="w-fit h-[200px] border-r hover:scale-[1.2] origin-center duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
