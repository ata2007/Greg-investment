import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-white flex flex-col justify-center items-center py-12">
      <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-lg w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-6 text-center">Contact Us</h1>
        <p className="text-gray-700 mb-8 text-center">
          We’d love to hear from you! Reach out to us using any of the methods below.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/2348142720641"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-semibold text-gray-800 hover:text-green-600 transition"
            >
              <FaWhatsapp className="text-green-500 text-2xl" />
              <span>08142720641</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:atemaga@gmail.com"
              className="flex items-center gap-2 text-lg font-semibold text-gray-800 hover:text-teal-600 transition"
            >
              <FaEnvelope className="text-teal-500 text-2xl" />
              <span>atemaga@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-teal-500 text-2xl" />
            <span className="text-lg font-semibold text-gray-800">Lagos, Nigeria</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact