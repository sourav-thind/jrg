import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo } from '../Utils';

const Hero = () => {
  useGSAP(()=>{
    gsap.to('.hero-title',{opacity:1, delay:1})
  },[])
  return (
    <section>
<div className="absolute top-0 left-0 w-[100vw] h-[100vh] z-1 ">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={heroVideo} />
      </video>
    </div>
  
    <div className="h-screen hero-title w-full flex-center flex-col relative z-10 text-white text-center">
      <div className='bg-black bg-opacity-70 w-[60%] p-16 rounded-md'>

      <h1 className=" text-5xl font-bold mb-4">
        J R G Birmingham
      </h1>
      <p className="text-lg mb-6">
        We Build your house, So you can make it a home.
      </p>
      <button className="px-6 py-3 bg-blue-600 rounded-md hover:bg-blue-700">
        Learn More
      </button>
      </div>
    </div>

    </section>
  )
}

export default Hero