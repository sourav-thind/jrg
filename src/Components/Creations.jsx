import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Bedrooms, Cupboard, Kitchens, MediaBars } from "../Utils";
const categories = {
  Bedrooms: Bedrooms,
  Cupboards: Cupboard,
  Kitchens: Kitchens,
  MediaBars: MediaBars,
};

const Creations = () => {
  const [selectedCategory, setSelectedCategory] = useState("Bedrooms");

  return (
    <section className="h-screen w-screen bg-Color2 flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-extrabold text-gray-800">Creations</h1>
      <p className="text-xl text-gray-600 mt-2">- Designed by us and built by us -</p>

      <div className="flex justify-center mt-8 space-x-1 md:space-x-4">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`p-2 text-md font-mono md:px-6 md:py-2 md:text-lg md:font-semibold rounded-lg transition-colors ${
              selectedCategory === category
                ? "bg-gray-800 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true} 
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="w-full  mt-2"
      >
        {categories[selectedCategory].map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-[90vw] md:w-[60vw] mt-16 md:mt-12 h-[50vh] m:h-[70vh] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      </section>
  );
};

export default Creations;