import React from 'react'

const About = () => {
  return (
    <section className="bg-logoC1 min-h-screen w-screen left-0 *:">

    <div className="  py-8 px-8 text-center">
      <h1 className="text-4xl font-extrabold mb-4 text-logoC4">About Us</h1>
      <p className="text-lg max-w-3xl mx-auto text-logoC3 font-semibold">
        With decades of professional experience, we bring your dreams to life through unparalleled craftsmanship and attention to detail. With over 20 years in the industry, we’ve perfected the art of construction and customer satisfaction
      </p>
    
    <div className="py-8 px-6 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 mx-auto">Why Choose Us?</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-[80%] mx-auto">
        <div className=" bg-logoC3 text-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-8">Top-Notch Quality</h3>
          <p>
            We deliver projects with exceptional precision and use only the finest materials to ensure long-lasting results.
          </p>
        </div>
        
        {/* Professionalism */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4 text-green-600">Professionalism</h3>
          <p>
            Our team is dedicated to providing a seamless, stress-free experience from consultation to completion.
          </p>
        </div>
      </div>
    </div>
    </div>
   

    {/* Call-to-Action Section */}
    <div className="py-6 px-6 text-center bg-blue-600 text-black">
      <h2 className="text-3xl font-bold mb-4">Start Your Dream Project Today</h2>
      <p className="text-lg max-w-2xl mx-auto mb-6">
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