"use client"
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useEffect} from "react";


const Banner = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-[#ef4444] font-medium">
          Are You Looking For A Pet ?
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">Pet Zone</h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Pet adoption is the process of taking responsibility for a pet that
          needs a home and providing it with a caring and loving environment.
        </p>
        <button className="bg-[#ef4444] text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg",
  },
  {
    id: 3,
    src: "https://i.ibb.co/C65KJsn/pexels-blue-bird-7210349.jpg",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1555955924-a8c17aa846b2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1555955924-a8c17aa846b2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    src: "https://i.ibb.co/8DrV9SX/pexels-photo-3935361.webp",
  },
  {
    id: 6,
    src: "https://i.ibb.co/qMSbbZP/pexels-los-muertos-crew-10041686.jpg",
  },
  {
    id: 7,
    src: "https://i.ibb.co/n6zRZDC/pexels-luciann-photography-3874703.jpg",
  },
  {
    id: 8,
    src: "https://cdn.pixabay.com/photo/2021/10/07/07/34/woman-6687637_1280.jpg",
  },
  {
    id: 9,
    src: "https://i.ibb.co/2gLHXP6/pexels-baris-selcen-12011932.jpg",
  },
  {
    id: 10,
    src: "https://i.ibb.co/rvP8Knt/pexels-katya-wolf-9428244.jpg",
  },
  {
    id: 11,
    src: "https://i.ibb.co/R70DgNr/pexels-pavel-danilyuk-7055937.jpg",
  },
  {
    id: 12,
    src: "https://cdn.pixabay.com/photo/2020/04/11/00/22/animals-5028249_1280.jpg",
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/8738357/pexels-photo-8738357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1496284427489-f59461d8a8e6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    src: "https://i.ibb.co/L8rh2Hh/pexels-photo-5748671.jpg",
  },
  {
    id: 16,
    src: "https://i.ibb.co/qkfCM40/pexels-photo-4087386.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
  
};

export default Banner;