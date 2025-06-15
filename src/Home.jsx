import React from 'react'

// sm = 640px above
// md = 768px above
// lg = 1024px above
// xl = 1280px above

function Home() {
  return (
   

 <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-green-50 via-teal-50 to-white">
      <main className="flex-1">
        <section
          id="home"
          className="max-w-4xl mx-auto py-20 px-4 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
            Secure Your Future with{' '}
            <span className="text-teal-500">Greg Investments</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Your trusted partner in financial growth and investments management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="bg-gradient-to-r from-green-400 to-teal-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
              Get Started
            </button>
            <a
              href="Learn More.html"
              className="bg-white border border-teal-400 text-teal-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-teal-50 transition"
            >
              Learn More
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-10 mt-10">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-teal-400 shadow-lg mb-2">
                <h2 className="text-3xl font-bold text-white">56,580</h2>
              </div>
              <p className="text-gray-700 font-medium">Clients Served</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-teal-400 shadow-lg mb-2">
                <h2 className="text-3xl font-bold text-white">26,170</h2>
              </div>
              <p className="text-gray-700 font-medium">Successful Plans</p>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  )
}

export default Home