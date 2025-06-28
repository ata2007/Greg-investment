import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import SideNav from "./SideNav";

function Header() {
  const [myNav, setMyNav] = useState(false);

  function showNav() {
    setMyNav(!myNav);
  }

  return (
    <header className="bg-gradient-to-r from-green-400 via-green-500 to-teal-400 shadow-2xl relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
        {/* Decorative SVG waves for extra coolness */}
        <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#fff"
            fillOpacity="0.3"
            d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,101.3C672,107,768,85,864,74.7C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto flex items-center justify-between h-[90px] px-4 z-10">
        <Link to="/" className="flex items-center gap-3 group">
          {/* Ultra-cool SVG Logo */}
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-teal-400 shadow-xl border-4 border-white group-hover:scale-110 transition-transform">
            <svg
              className="w-9 h-9"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="24" cy="24" rx="22" ry="22" fill="url(#logo-cool-gradient)" />
              <path
                d="M14 32c3-6 17-6 20 0"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <rect x="19" y="16" width="3" height="8" rx="1.5" fill="#fff" />
              <rect x="26" y="13" width="3" height="11" rx="1.5" fill="#fff" />
              <circle cx="20" cy="21" r="1.5" fill="#10b981" />
              <circle cx="28" cy="18" r="1.5" fill="#14b8a6" />
              <defs>
                <radialGradient id="logo-cool-gradient" cx="0.5" cy="0.5" r="0.8">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </radialGradient>
              </defs>
            </svg>
          </span>
          <span className="text-white font-extrabold text-2xl md:text-3xl tracking-wide drop-shadow-lg group-hover:text-yellow-200 transition-colors">
            Greg Investments
          </span>
        </Link>
        {/* Navigation */}
        <nav className="hidden md:block">
          <ol className="flex gap-9 font-medium">
            <li>
              <Link to="/" className="text-white hover:text-yellow-200 transition font-semibold">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-yellow-200 transition font-semibold">About</Link>
            </li>
            <li>
              <Link to="/investment" className="text-white hover:text-yellow-200 transition font-semibold">Investment</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-yellow-200 transition font-semibold">Contact</Link>
            </li>
          </ol>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={showNav} className="text-white text-3xl hover:text-yellow-200 transition">
            <RiMenu3Line />
          </button>
        </div>
        <SideNav myNav={myNav} setMyNav={setMyNav} />
      </div>
    </header>
  );
}

export default Header;