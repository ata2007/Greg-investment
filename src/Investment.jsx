import React from 'react'
import { FaLeaf, FaGem, FaCrown } from "react-icons/fa";

function Investment() {
  return (
    <div className="bg-gradient-to-br from-green-50 via-teal-50 to-white min-h-screen py-10">
      <section id="investments" className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4 text-center">Our Investment Plans</h1>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Explore our diverse investment plans designed to help you achieve your financial goals.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-8 border-green-400 flex flex-col items-center">
            <FaLeaf className="text-green-400 text-5xl mb-4" />
            <h2 className="text-2xl font-bold text-green-700 mb-2">Basic Plan</h2>
            <p className="text-gray-700 mb-2">Starting from <span className="font-semibold">₦7,000</span></p>
            <ul className="text-gray-600 mb-4 space-y-1 text-sm">
              <li>Payable Amount: <span className="font-semibold">3x start</span></li>
              <li>Risk: <span className="text-green-500 font-semibold">Low</span></li>
              <li>Best for Beginners</li>
            </ul>
            <p className="font-bold text-green-700 mb-4">Payable after 1 month: <span className="text-teal-500">₦21,000</span></p>
            <button className="bg-gradient-to-r from-green-400 to-teal-400 text-white font-bold px-6 py-2 rounded-full shadow hover:scale-105 transition">
              Get Started
            </button>
          </div>
          {/* Premium Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-8 border-teal-400 flex flex-col items-center">
            <FaGem className="text-teal-400 text-5xl mb-4" />
            <h2 className="text-2xl font-bold text-teal-700 mb-2">Premium Plan</h2>
            <p className="text-gray-700 mb-2">Starting from <span className="font-semibold">₦20,000</span></p>
            <ul className="text-gray-600 mb-4 space-y-1 text-sm">
              <li>Payable: <span className="font-semibold">3x start</span></li>
              <li>Risk: <span className="text-teal-500 font-semibold">Moderate</span></li>
              <li>Best for Intermediate Investors</li>
            </ul>
            <p className="font-bold text-teal-700 mb-4">Payable after 1 month: <span className="text-green-500">₦60,000</span></p>
            <button className="bg-gradient-to-r from-teal-400 to-green-400 text-white font-bold px-6 py-2 rounded-full shadow hover:scale-105 transition">
              Get Started
            </button>
          </div>
          {/* Elite Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-8 border-yellow-400 flex flex-col items-center">
            <FaCrown className="text-yellow-400 text-5xl mb-4" />
            <h2 className="text-2xl font-bold text-yellow-700 mb-2">Elite Plan</h2>
            <p className="text-gray-700 mb-2">Starting from <span className="font-semibold">₦50,000</span></p>
            <ul className="text-gray-600 mb-4 space-y-1 text-sm">
              <li>Payable Amount: <span className="font-semibold">3x start</span></li>
              <li>Risk: <span className="text-yellow-500 font-semibold">High</span></li>
              <li>Best for Experienced Investors</li>
            </ul>
            <p className="font-bold text-yellow-700 mb-4">Payable after 1 month: <span className="text-teal-500">₦150,000</span></p>
            <button className="bg-gradient-to-r from-yellow-400 to-teal-400 text-white font-bold px-6 py-2 rounded-full shadow hover:scale-105 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="max-w-2xl mx-auto mt-16 px-4">
        <h2 className="text-2xl font-bold text-green-700 mb-2 text-center">Make a Payment</h2>
        <p className="text-gray-700 mb-4 text-center">
          To begin your investment journey, make your payment to the account below:
        </p>
        <div className="bg-white rounded-xl shadow p-6 mb-4 flex flex-col items-center">
          <p className="font-bold text-lg mb-1">Account Number: <span className="text-teal-600">8142720641</span></p>
          <p className="font-bold">Account Name: <span className="text-teal-600">MoMo PSB</span></p>
        </div>
        <p className="text-gray-700 text-center">
          Once the payment is made, please contact us to confirm and activate your plan.
        </p>
      </section>
    </div>
  )
}

export default Investment