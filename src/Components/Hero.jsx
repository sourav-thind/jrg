import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  useGSAP(()=>{
    gsap.to('.hero-title',{opacity:1, delay:1})
  },[])

  return (
   <section  className='w-full nav-height bg-white relative '>
    <div className='h-5/6 w-full flex-center flex-col '>
      <p className='hero-title'>   
        J R G Birmingham
      </p>
      <p>
        We Build your house, So you can make it a home.
      </p>
    </div>
   </section>
  )
}

export default Hero