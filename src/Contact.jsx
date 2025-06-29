import React, { useEffect, useState } from 'react'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center"
      style={{
        background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #0f172a 100%)",
      }}
    >
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <section
          id="contact"
          className={`relative w-full max-w-4xl mx-auto py-20 px-6 text-center flex flex-col items-center justify-center transition-all duration-1000 ${
            fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            minHeight: "70vh",
          }}
        >
          {/* Full background image with blue overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/build.jpeg"
              alt="Greg Investments Building"
              className="w-full h-full object-cover object-center rounded-3xl shadow-2xl"
              style={{ filter: "brightness(0.7) blur(0.5px)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/70 via-blue-700/60 to-blue-900/80 rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-radial from-cyan-400/30 via-transparent to-transparent rounded-3xl" />
          </div>
          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl tracking-tight animate-pulse">
              Contact <span className="text-cyan-300">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 font-medium drop-shadow-lg">
              We’re here to help you with your investment journey.<br />
              Reach out to us for any inquiries, support, or partnership opportunities.
            </p>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="bg-gradient-to-br from-blue-100/80 to-cyan-100/80 rounded-2xl shadow-xl p-8 border-t-4 border-cyan-400 flex flex-col items-center">
                <FaWhatsapp className="text-green-400 text-3xl mb-3" />
                <h2 className="text-xl font-bold text-blue-700 mb-2">WhatsApp</h2>
                <a
                  href="https://wa.me/2348142720641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 font-medium hover:text-green-600 transition"
                >
                  08142720641
                </a>
              </div>
              <div className="bg-gradient-to-br from-cyan-100/80 to-blue-100/80 rounded-2xl shadow-xl p-8 border-t-4 border-blue-400 flex flex-col items-center">
                <FaEnvelope className="text-cyan-400 text-3xl mb-3" />
                <h2 className="text-xl font-bold text-cyan-700 mb-2">Email</h2>
                <a
                  href="mailto:atemaga@gmail.com"
                  className="text-blue-900 font-medium hover:text-cyan-600 transition"
                >
                  atemaga@gmail.com
                </a>
              </div>
              <div className="bg-gradient-to-br from-blue-200/80 to-cyan-200/80 rounded-2xl shadow-xl p-8 border-t-4 border-cyan-600 flex flex-col items-center">
                <FaMapMarkerAlt className="text-yellow-400 text-3xl mb-3" />
                <h2 className="text-xl font-bold text-blue-700 mb-2">Location</h2>
                <span className="text-blue-900 font-medium">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
              </section>
      </main>
    </div>
  );
}

export default Contact;