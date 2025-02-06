import React, { useState } from "react";
import { Bedrooms, Cupboard, Kitchens, MediaBars } from "../Utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = {
  Bedrooms: Bedrooms,
  Cupboards: Cupboard,
  Kitchens: Kitchens,
  MediaBars: MediaBars,
};

const Creations = () => {
  const [selectedCategory, setSelectedCategory] = useState("Cupboards");
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = categories[selectedCategory];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="h-screen w-screen bg-Color2 flex flex-col items-center px-6 mt-6">
      <h1 className="text-5xl font-extrabold text-gray-800">Creations</h1>
      <p className="text-md text-gray-600 mt-2">- Designed by us and built by us -</p>

      <div className="flex justify-center mt-1 space-x-4 bg-Color1 w-screen py-2">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`px-6 py-2 text-lg font-semibold rounded-lg transition-colors ${
              selectedCategory === category
                ? "bg-gray-800 text-white"
                : "bg-Color2 text-gray-800 hover:bg-gray-400"
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentIndex(0);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative w-full  mt-8 ">
        <div
          className="flex "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {images.map((image, index) => (
           
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className=" max-h-[70vh] w-[80vw] flex-shrink-0 mx-[10vh] rounded-lg"
            />
            
          ))}
        </div>

        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Tracking Dots */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Creations;
