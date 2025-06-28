import React from 'react'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-green-400 via-green-500 to-teal-400 pt-10 pb-4 px-4 text-center shadow-inner overflow-hidden">
      {/* Decorative SVG wave */}
      <div className="absolute top-0 left-0 w-full h-8 pointer-events-none select-none opacity-30">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#fff"
            fillOpacity="0.4"
            d="M0,32L48,37.3C96,43,192,53,288,53.3C384,54,480,44,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,54,1344,44,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand and Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link to="/" className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow">
              <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none">
                <rect x="7" y="22" width="4" height="11" rx="2" fill="#10b981"/>
                <rect x="16" y="16" width="4" height="17" rx="2" fill="#14b8a6"/>
                <rect x="25" y="10" width="4" height="23" rx="2" fill="#22d3ee"/>
                <circle cx="20" cy="20" r="18" stroke="url(#footer-logo-gradient)" strokeWidth="2"/>
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#34d399" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="text-white font-extrabold text-xl tracking-wide drop-shadow">Greg Investments</span>
          </Link>
          <div className="flex gap-4 text-white text-sm font-semibold">
            <Link to="/" className="hover:text-yellow-200 transition">Home</Link>
            <Link to="/about" className="hover:text-yellow-200 transition">About</Link>
            <Link to="/investment" className="hover:text-yellow-200 transition">Investment</Link>
            <Link to="/contact" className="hover:text-yellow-200 transition">Contact</Link>
          </div>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-end gap-2 text-white text-sm">
          <a
            href="https://wa.me/2348142720641"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-200 transition"
          >
            <FaWhatsapp className="text-green-100 text-lg" />
            08142720641
          </a>
          <a
            href="mailto:atemaga@gmail.com"
            className="flex items-center gap-2 hover:text-teal-200 transition"
          >
            <FaEnvelope className="text-teal-100 text-lg" />
            atemaga@gmail.com
          </a>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-100 text-lg" />
            Lagos, Nigeria
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="my-4 border-t border-white/30 w-full max-w-4xl mx-auto"></div>
      {/* Copyright */}
      <p className="text-white font-semibold text-xs relative z-10">
        &copy; 2025 Greg Investments. All Rights Reserved. <span className="text-yellow-200">@ata</span>
      </p>
      {/* Animated gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-gradient-to-r from-yellow-200/30 via-green-200/30 to-teal-200/30 blur-2xl opacity-70 pointer-events-none"></div>
    </footer>
  )
}

export default Footer;