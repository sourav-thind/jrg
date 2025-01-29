import React from 'react'

const About = () => {
  return (
    <section className="bg-gray-50 min-h-screen w-screen left-0 *:">

    <div className=" bg-gray text-white  py-16 px-8 text-center">
      <h1 className="text-4xl font-extrabold mb-4 text-black">About Us</h1>
      <p className="text-lg max-w-3xl mx-auto">
        With decades of professional experience, we bring your dreams to life through unparalleled craftsmanship and attention to detail.
      </p>
    </div>

    {/* Why Choose Us Section */}
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Quality */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Top-Notch Quality</h3>
          <p>
            We deliver projects with exceptional precision and use only the finest materials to ensure long-lasting results.
          </p>
        </div>
        {/* Experience */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4 text-purple-600">Years of Expertise</h3>
          <p>
            With over 20 years in the industry, we’ve perfected the art of construction and customer satisfaction.
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

    {/* Mission and Vision Section */}
    <div className="py-16 px-6 bg-gray-100 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Mission & Vision</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Our Mission</h3>
          <p>
            To turn your ideas into reality by delivering high-quality construction services that exceed expectations.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-purple-600">Our Vision</h3>
          <p>
            To become the leading construction company known for innovative solutions, unmatched quality, and sustainable practices.
          </p>
        </div>
      </div>
    </div>

    {/* Team Section */}
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Placeholder team members */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"></div>
          <h3 className="text-lg font-semibold">John Doe</h3>
          <p className="text-sm text-gray-500">CEO & Founder</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"></div>
          <h3 className="text-lg font-semibold">Jane Smith</h3>
          <p className="text-sm text-gray-500">Lead Architect</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"></div>
          <h3 className="text-lg font-semibold">Mike Brown</h3>
          <p className="text-sm text-gray-500">Project Manager</p>
        </div>
      </div>
    </div>

    {/* Call-to-Action Section */}
    <div className="py-16 px-6 text-center bg-blue-600 text-white">
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