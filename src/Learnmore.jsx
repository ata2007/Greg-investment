import React from "react";
import { FaLeaf, FaGem, FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Learnmore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-white flex flex-col items-center py-12">
      <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-14 max-w-4xl w-full border-t-8 border-green-400">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4 text-center drop-shadow-lg">
          Learn More About <span className="text-teal-500">Greg Investments</span>
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
          At Greg Investments, we empower you to grow your wealth with confidence. Our plans are designed for every stage of your financial journey, from your first investment to advanced portfolio growth. Explore our unique offerings below!
        </p>
        <div className="grid gap-8 md:grid-cols-3 mb-10">
          <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl shadow-lg p-7 flex flex-col items-center hover:scale-105 transition-transform">
            <FaLeaf className="text-green-400 text-5xl mb-3 drop-shadow" />
            <h2 className="text-xl font-bold text-green-700 mb-2">Basic Plan</h2>
            <p className="text-gray-700 text-center text-sm mb-2">
              Perfect for beginners. Start small and watch your investment grow with minimal risk.
            </p>
            <span className="text-green-600 font-semibold">Low Risk</span>
          </div>
          <div className="bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl shadow-lg p-7 flex flex-col items-center hover:scale-105 transition-transform">
            <FaGem className="text-teal-400 text-5xl mb-3 drop-shadow" />
            <h2 className="text-xl font-bold text-teal-700 mb-2">Premium Plan</h2>
            <p className="text-gray-700 text-center text-sm mb-2">
              For those ready to take the next step. Enjoy higher returns with moderate risk.
            </p>
            <span className="text-teal-600 font-semibold">Moderate Risk</span>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-teal-100 rounded-2xl shadow-lg p-7 flex flex-col items-center hover:scale-105 transition-transform">
            <FaCrown className="text-yellow-400 text-5xl mb-3 drop-shadow" />
            <h2 className="text-xl font-bold text-yellow-700 mb-2">Elite Plan</h2>
            <p className="text-gray-700 text-center text-sm mb-2">
              Designed for experienced investors seeking maximum returns and portfolio diversity.
            </p>
            <span className="text-yellow-600 font-semibold">High Risk</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <Link
            to="/investment"
            className="inline-block bg-gradient-to-r from-green-400 to-teal-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            View All Investment Plans
          </Link>
          <Link
            to="/"
            className="inline-block mt-2 text-teal-600 font-semibold underline hover:text-green-600 transition"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Learnmore;