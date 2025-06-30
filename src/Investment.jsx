import React, { useEffect, useState } from 'react';
import { FaLeaf, FaGem, FaCrown } from "react-icons/fa";
import Basicplan from "./Basicplan";
import Premiumplan from "./Premiumplan";
import Eliteplan from "./Eliteplan";

function Investment() {
  const [fadeIn, setFadeIn] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
    const img = new window.Image();
    img.src = "/build.jpeg";
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-all duration-1000 relative overflow-hidden ${
        fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #0f172a 100%)",
      }}
    >
      {/* Full background image with overlays */}
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
      {/* Animated blobs */}
      <div className="absolute -bottom-10 left-10 w-40 h-40 bg-cyan-400/40 rounded-full blur-2xl animate-pulse pointer-events-none z-10"></div>
      <div className="absolute -top-8 right-10 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl animate-bounce pointer-events-none z-10"></div>
      <main className="flex-1 relative z-20">
        <section id="investments" className="max-w-5xl mx-auto px-4">
          <div className="absolute inset-0 bg-white/70 md:bg-white/60 rounded-3xl pointer-events-none -z-10" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 text-center drop-shadow-xl animate-pulse">
            Our <span className="text-cyan-500">Investment</span> Plans
          </h1>
          <p className="text-lg text-blue-800 mb-10 text-center font-semibold drop-shadow">
            Explore our diverse investment plans designed to help you achieve your financial goals.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Basic Plan */}
            <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-white rounded-2xl shadow-2xl p-8 border-t-8 border-green-400 flex flex-col items-center hover:scale-105 transition-transform duration-300 transform-gpu will-change-transform overflow-hidden">
              <FaLeaf className="text-green-400 text-5xl mb-4 drop-shadow" />
              <Basicplan />
              <p className="text-blue-900 mb-2 font-semibold">Starting from <span className="font-bold">₦7,000</span></p>
              <ul className="text-blue-700 mb-4 space-y-1 text-sm">
                <li>Payable Amount: <span className="font-bold">3x start</span></li>
                <li>Risk: <span className="text-green-500 font-bold">Low</span></li>
                <li>Best for Beginners</li>
              </ul>
              <p className="font-bold text-green-700 mb-4">Payable after 1 month: <span className="text-teal-500">₦21,000</span></p>
            </div>
            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-white rounded-2xl shadow-2xl p-8 border-t-8 border-teal-400 flex flex-col items-center hover:scale-105 transition-transform duration-300 transform-gpu will-change-transform overflow-hidden">
              <FaGem className="text-teal-400 text-5xl mb-4 drop-shadow" />
              <h2 className="text-2xl font-bold text-teal-700 mb-2">Premium Plan</h2>
              <Premiumplan />
              <p className="text-blue-900 mb-2 font-semibold">Starting from <span className="font-bold">₦20,000</span></p>
              <ul className="text-blue-700 mb-4 space-y-1 text-sm">
                <li>Payable: <span className="font-bold">3x start</span></li>
                <li>Risk: <span className="text-teal-500 font-bold">Moderate</span></li>
                <li>Best for Intermediate Investors</li>
              </ul>
              <p className="font-bold text-teal-700 mb-4">Payable after 1 month: <span className="text-green-500">₦60,000</span></p>
            </div>
            {/* Elite Plan */}
            <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-white rounded-2xl shadow-2xl p-8 border-t-8 border-yellow-400 flex flex-col items-center hover:scale-105 transition-transform duration-300 transform-gpu will-change-transform overflow-hidden">
              <FaCrown className="text-yellow-400 text-5xl mb-4 drop-shadow" />
              <h2 className="text-2xl font-bold text-yellow-700 mb-2">Elite Plan</h2>
              <Eliteplan />
              <p className="text-blue-900 mb-2 font-semibold">Starting from <span className="font-bold">₦50,000</span></p>
              <ul className="text-blue-700 mb-4 space-y-1 text-sm">
                <li>Payable Amount: <span className="font-bold">3x start</span></li>
                <li>Risk: <span className="text-yellow-500 font-bold">High</span></li>
                <li>Best for Experienced Investors</li>
              </ul>
              <p className="font-bold text-yellow-700 mb-4">Payable after 1 month: <span className="text-teal-500">₦150,000</span></p>
            </div>
          </div>
        </section>

        {/* Payment Section */}
        <section id="payment" className="max-w-2xl mx-auto mt-16 px-4">
          <div className="absolute inset-0 bg-white/70 md:bg-white/60 rounded-3xl pointer-events-none -z-10" />
          <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center drop-shadow-xl animate-pulse">
            Why Choose <span className="text-cyan-500">Greg Investments?</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center bg-gradient-to-br from-cyan-50 via-blue-50 to-white rounded-xl shadow-xl p-6 border-t-4 border-cyan-400">
              <h3 className="text-xl font-bold text-cyan-700 mb-2">Trusted Expertise</h3>
              <p className="text-blue-800 text-center font-semibold drop-shadow">
                Decades of experience and a proven track record in helping clients achieve their financial dreams.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gradient-to-br from-blue-50 via-cyan-50 to-white rounded-xl shadow-xl p-6 border-t-4 border-blue-400">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Tailored Solutions</h3>
              <p className="text-blue-800 text-center font-semibold drop-shadow">
                We offer personalized investment plans and support, designed to fit your unique goals and risk  profile.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Investment;