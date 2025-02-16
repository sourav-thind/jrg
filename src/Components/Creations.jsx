import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Bedroom, Cupboard, Kitchen, MediaBar } from "../Utils";
const categories = {
  Bedroom: Bedroom,
  Kitchen: Kitchen,
  MediaBar: MediaBar,
};

const Creations = () => {
  const [selectedCategory, setSelectedCategory] = useState("Kitchen");

  return (
    <section className="h-screen w-screen bg-Color2 flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-extrabold text-gray-800 md:mt-4">Creations</h1>
      <p className="text-xl text-gray-600 mt-2 md:mt-1">- Designed by us and built by us -</p>

      <div className="flex  flex-initial gap-2 justify-center mt-8 md:mt-2 px-0 py-0 space-x-2 md:space-x-4 max-w-screen overflow-hidden">
        {Object.keys(categories).map((category) => (
          <button
          key={category}
          className={`p-2 md:px-6 md:py-2 mx-auto my-auto text-md md:text-lg font-semibold rounded-lg ${
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
          1024: { slidesPerView: 1 },
        }}
        className="w-full  mt-2"
      >
        {categories[selectedCategory].map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-[90vw] md:w-[60vw] mx-auto mt-16 md:mt-4 h-[50vh] md:h-[60vh] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      </section>
  );
};

export default Creations;