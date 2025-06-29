import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaInfoCircle, FaChartLine, FaEnvelope } from "react-icons/fa";
import SideNav from "./SideNav";

function Header() {
  const [myNav, setMyNav] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
    const img = new window.Image();
    img.src = "/build.jpeg";
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <header
      className={`relative w-full z-30 shadow-lg transition-all duration-1000 ${
        fadeIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
      }`}
      style={{
        background: "linear-gradient(120deg, #0ea5e9 0%, #2563eb 50%, #0f172a 100%)"
      }}
    >
      {/* Background and overlays */}
      <div className="absolute inset-0 z-0">
        {bgLoaded && (
          <>
            <img
              src="/build.jpeg"
              alt="Greg Investments Building"
              className="w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.5) blur(1px)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/70 via-blue-900/80 to-cyan-700/80" />
            <div className="absolute inset-0 bg-gradient-radial from-cyan-400/30 via-transparent to-transparent" />
          </>
        )}
      </div>
      <nav className="relative z-10 max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border-4 border-cyan-400 animate-spin-slow">
            {/* You can put your SVG or logo here */}
            <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
              <rect x="7" y="22" width="4" height="11" rx="2" fill="#0ea5e9"/>
              <rect x="16" y="16" width="4" height="17" rx="2" fill="#2563eb"/>
              <rect x="25" y="10" width="4" height="23" rx="2" fill="#38bdf8"/>
              <circle cx="20" cy="20" r="18" stroke="url(#header-logo-gradient)" strokeWidth="2"/>
              <defs>
                <linearGradient id="header-logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0ea5e9" />
                  <stop offset="1" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="text-white font-extrabold text-2xl tracking-wide drop-shadow-lg">Greg Investments</span>
        </Link>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-cyan-100 text-lg font-semibold items-center">
          <Link to="/" className="flex items-center gap-1 hover:text-yellow-200 transition">
            <FaHome className="text-cyan-200" /> Home
          </Link>
          <Link to="/about" className="flex items-center gap-1 hover:text-yellow-200 transition">
            <FaInfoCircle className="text-cyan-200" /> About
          </Link>
          <Link to="/investment" className="flex items-center gap-1 hover:text-yellow-200 transition">
            <FaChartLine className="text-cyan-200" /> Investment
          </Link>
          <Link to="/contact" className="flex items-center gap-1 hover:text-yellow-200 transition">
            <FaEnvelope className="text-cyan-200" /> Contact
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="flex md:hidden items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg border-2 border-cyan-300 text-white text-2xl hover:scale-110 transition"
          onClick={() => setMyNav(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </nav>
      {/* Attach SideNav here */}
      <SideNav myNav={myNav} setMyNav={setMyNav} />
      {/* Animated blobs */}
      <div className="absolute -bottom-8 left-10 w-24 h-24 bg-cyan-400/40 rounded-full blur-2xl animate-pulse pointer-events-none z-10"></div>
      <div className="absolute -top-8 right-10 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl animate-bounce pointer-events-none z-10"></div>
    </header>
  );
}

export default Header; 