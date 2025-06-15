import React from 'react'

function About() {
  return (
    <>
       <main className="flex-1">
        <section id="about" className="max-w-4xl mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">About Us</h1>
          <p className="text-lg text-gray-700 mb-10">
            At Greg Investments, we are committed to helping you secure your financial future.
            With decades of experience and a proven track record, we provide expert guidance
            and innovative solutions tailored to meet your financial goals.
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-400">
              <h2 className="text-xl font-bold text-teal-600 mb-2">Our Mission</h2>
              <p className="text-gray-700">
                To empower individuals and businesses to grow their wealth responsibly and sustainably.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-400">
              <h2 className="text-xl font-bold text-teal-600 mb-2">Our Vision</h2>
              <p className="text-gray-700">
                To be the leading provider of trusted financial services worldwide.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-400">
              <h2 className="text-xl font-bold text-teal-600 mb-2">Our Values</h2>
              <p className="text-gray-700">
                Integrity, Innovation, and Client Success are the core of everything we do.
              </p>
            </div>
          </div>
        </section>
      </main>

    
  
    </>
  )
}

export default About