// components/Slider.js
import Image from "next/image";
import React, { useState } from "react";

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-md focus:outline-none transition duration-300 hover:bg-opacity-75 z-10" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-md focus:outline-none transition duration-300 hover:bg-opacity-75 z-10" onClick={nextSlide}>
        &#8250;
      </button>
      <div className="overflow-hidden relative w-full h-auto rounded-xl">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((image, idx) => (
            <Image key={idx} src={image} alt={`Slide ${idx + 1}`} width={500} height={500} style={{ minWidth: "100%" }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
