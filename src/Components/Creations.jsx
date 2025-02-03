import React, {useState} from 'react'
import { Cupboard } from '../Utils';
const categories = {
    Bedrooms: [
      "/images/bedroom1.jpg",
      "/images/bedroom2.jpg",
      "/images/bedroom3.jpg",
    ],
    Cupboards : Cupboard,

    Kitchens: [
      "/images/kitchen1.jpg",
      "/images/kitchen2.jpg",
      "/images/kitchen3.jpg",
    ],
  };
const Creations = () => {

  const [selectedCategory, setSelectedCategory] = useState("Cupboards");
  return (
   <section className='h-screen w-screen bg-Color2'>
              <h1 className="text-6xl font-extrabold text-gray-800">Creations</h1>
      <p className="text-xl text-gray-600 mt-2">- Designed by us and built by us -</p>

      {/* Tabs */}
      <div className="flex justify-center mt-8 space-x-4">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`px-6 py-2 text-lg font-semibold rounded-lg transition-colors ${
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

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {categories[selectedCategory].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={selectedCategory}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        ))}
      </div>
   </section>
  )
}

export default Creations