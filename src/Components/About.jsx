import React from 'react'
import { Estimate } from '../Utils'

const About = () => {
    return (
        <section className="relative h-screen w-screen bg-cover bg-center"
        >
        <div 
            className="fixed top-8 left-0 w-screen h-screen bg-cover bg-center -z-10"
            style={{ backgroundImage: `url(${Estimate})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>

    <div className="py-8 px-8  text-center bg-Color2 relative">
        <h1 className="text-4xl font-extrabold mb-4 text-Color3">About Us</h1>
        <p className="text-lg max-w-3xl mx-auto text-Color3 font-semibold">
            With decades of professional experience, we bring your dreams to life through unparalleled craftsmanship and attention to detail. With over 20 years in the industry, we’ve perfected the art of construction and customer satisfaction.
        </p>

        <div className="py-8 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2 md:md-6 mx-auto">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-[95%] md:max-w-[80%] mx-auto">
                <div className="bg-Color1 text-white shadow-lg p-2 md:p-6 rounded-lg text-center">
                    <h3 className="text-xl font-semibold mb-2 md:mb-8">Top-Notch Quality</h3>
                    <p>
                        We deliver projects with exceptional precision and use only the finest materials to ensure long-lasting results.
                    </p>
                </div>

                <div className="bg-white shadow-lg  p-2 md:p-6  rounded-lg text-center text-Color1">
                    <h3 className="text-xl font-semibold mb-2 md:mb-8">Professionalism</h3>
                    <p>
                        Our team is dedicated to providing a seamless, stress-free experience from consultation to completion.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="relative py-6 px-6 text-center bg-transparent">
        <h2 className="text-3xl font-bold mb-4 text-white">Start Your Dream Project Today</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6 text-white">
            Let us help you build the home, office, or structure you’ve always envisioned. Contact us today and let’s bring your ideas to life.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-200 transition">
            Contact Us
        </button>
    </div>
</section>

    )
}

export default About