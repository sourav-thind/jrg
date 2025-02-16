import React from 'react'
import { Estimate } from '../Utils'

const About = () => {
    return (
        <section className="relative h-screen w-screen bg-cover bg-center">
            <div className='bg-black bg-opacity-40 h-screen'>

        <div 
            className="fixed top-8 left-0 w-screen h-screen bg-cover bg-center -z-10"
            style={{ backgroundImage: `url(${Estimate})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>

    <div className=" relative bg-Color2">
        <div className='py-8 md:px-8 lg:p-6 px-2 text-center   bg-Color2 h-[25vh]'>
        <h1 className="text-4xl font-extrabold mt-0 lg:mt-4 text-Color3">About Us</h1>
        <p className="text-md md:text-lg max-w-3xl mx-auto mt-2 md:mt-12 lg:mt-6 text-Color3 font-semibold">
            With over 8 years of professional experience, we bring your dreams to life through unparalleled craftsmanship and attention to detail. <span> We not only focus on our work being perfect, but also on customer satisfaction.</span>
        </p>
        </div>
            

        <div className="py-8 md:py-12 md:px-6 h-[45vh] mx-auto">
            <h2 className="text-3xl font-bold text-center mt-2 md:md-6 mx-auto">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-2 md:gap-8 mt-1 lg:mt-6 max-w-[95%] md:max-w-[80%] mx-auto">
                <div className="bg-Color1 text-white text-sm md:text-base shadow-lg p-1 md:p-6 rounded-lg text-center">
                    <h3 className="text-xl font-semibold mb-2 md:mb-4">Top-Notch Quality</h3>
                    <p>
                        We deliver projects with exceptional precision and use only the finest materials to ensure long-lasting results.
                    </p>
                </div>

                <div className="bg-white relative shadow-lg  text-sm md:text-base  p-1 md:p-6  rounded-lg text-center text-Color1">
                    <h3 className="text-xl font-semibold mb-2 md:mb-4">Professionalism</h3>
                    <p>
                        Our team is dedicated to providing a seamless, stress-free experience from consultation to the completion of projects.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="relative h-[20vh]  text-center bg-transparent  ">
        <div className=' py-3 px-4 md:px-6 overflow-visible'>

        <h2 className=" text-xl md:text-3xl font-extrabold md:font-bold mb-4 text-white">Start Your Dream Project Today</h2>
        <p className="md:text-lg max-w-2xl mx-auto mb-2 md:mb-6 text-white">
            Let us help you build the home you’ve always envisioned. Contact us today and let’s bring your ideas to life.
        </p>
        <a href='#Contact' className="px-2 py-1 md:px-6 md:py-3 bg-white text-blue-600 font-semibold md:font-bold rounded-lg hover:bg-gray-200 transition">
            Contact Us
        </a>
        </div>
    </div>
    
    </div>
</section>

    )
}

export default About