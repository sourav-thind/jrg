import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo } from '../Utils';

const Hero = () => {
  useGSAP(() => {
    gsap.to('.hero-title', { opacity: 1, delay: 1 })
  }, [])
  return (
    <section>
      <div className="absolute left-0 w-[100vw] h-[100vh] z-1 bg-Color2 ">
        <video autoPlay loop muted className="w-full h-[90vh] object-cover">
          <source src={heroVideo} />
        </video>
      </div>

      <div className="h-[90vh] hero-title w-full flex-center flex-col relative z-10 text-white text-center">
        <div className='bg-black bg-opacity-70 w-[80%] md:w-[60%] p-16 rounded-md'>

          <h1 className=" text-3xl md:text-5xl font-bold mb-4">
            J R G Birmingham
          </h1>
          <p className="text-sm md:text-lg mb-6">
            Out of the world quality, in your budget. 
          </p>
          <a href='#Creations'  className=" text-sm px-3 py-3 md:px-6 md:py-3 bg-blue rounded-md hover:bg-blue-700">
           Have a look 
          </a>
        </div>
      </div>
      <div className='h-[10vh] bg-Color2 bottom-0 fixed'></div>

    </section>
  )
}

export default Hero