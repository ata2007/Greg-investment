import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Home() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = "/build.jpeg"; // Place build.jpeg in your public folder
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-between transition-all duration-700 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #0f172a 100%)",
      }}
    >
      {/* Full background image with crazy blue overlays */}
      <div className="absolute inset-0 z-0">
        {bgLoaded && (
          <>
            <img
              src="/build.jpeg"
              alt="Greg Investments Building"
              className="w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.6) blur(1px)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/70 via-blue-900/80 to-cyan-700/80" />
            <div className="absolute inset-0 bg-gradient-radial from-cyan-400/30 via-transparent to-transparent" />
          </>
        )}
      </div>
      {/* Animated blue blobs for extra crazy effect */}
      <div className="absolute -bottom-10 left-10 w-40 h-40 bg-cyan-400/40 rounded-full blur-2xl animate-pulse pointer-events-none z-10"></div>
      <div className="absolute -top-8 right-10 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl animate-bounce pointer-events-none z-10"></div>
      <main className="flex-1 relative z-20">
        <section
          id="home"
          className={`relative max-w-4xl mx-auto py-20 px-4 text-center transition-all duration-700 ${
            bgLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/70 md:bg-white/60 rounded-3xl pointer-events-none -z-10" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 transition-all duration-700 delay-100 drop-shadow-xl tracking-tight animate-pulse">
            Secure Your Future with{' '}
            <span className="text-cyan-500">Greg Investments</span>
          </h1>
          <p className="text-2xl text-blue-800 mb-10 transition-all duration-700 delay-200 font-semibold drop-shadow-lg">
            Your trusted partner in financial growth and investments management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-14 transition-all duration-700 delay-300">
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold px-10 py-4 rounded-full shadow-xl hover:scale-105 hover:from-blue-400 hover:to-cyan-500 transition text-lg">
              Get Started
            </button>
            <Link
              to="/investment"
              className="bg-white border-2 border-cyan-400 text-cyan-700 font-bold px-10 py-4 rounded-full shadow hover:bg-cyan-50 transition text-lg"
            >
              Learn More
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-12 mt-12 transition-all duration-700 delay-500">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-2xl mb-3 animate-pulse">
                <h2 className="text-4xl font-extrabold text-white drop-shadow">56,580</h2>
              </div>
              <p className="text-blue-900 font-bold drop-shadow text-lg">Clients Served</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 shadow-2xl mb-3 animate-pulse">
                <h2 className="text-4xl font-extrabold text-white drop-shadow">26,170</h2>
              </div>
              <p className="text-blue-900 font-bold drop-shadow text-lg">Successful Plans</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;