import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import SideNav from './SideNav';

function Header() {
  const [myNav, setMyNav] = useState(false)

  function showNav() {
    setMyNav(!myNav)
  }

  return (
    <header className="bg-gradient-to-r from-green-400 via-green-500 to-teal-400 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[90px] px-4">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center gap-3">
          {/* Example SVG Logo */}
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" />
              <path d="M8 14s1.5-2 4-2 4 2 4 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M9 10h.01M15 10h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-white font-extrabold text-2xl md:text-3xl tracking-wide drop-shadow-lg">
            Greg Investments
          </span>
        </Link>
        {/* Navigation */}
        <nav className="hidden md:block">
          <ol className="flex gap-9 font-medium">
            <li>
              <Link to="/" className="text-white hover:text-teal-100 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-teal-100 transition">About</Link>
            </li>
            <li>
              <Link to="/investment" className="text-white hover:text-teal-100 transition">Investment</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-teal-100 transition">Contact</Link>
            </li>
          </ol>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={showNav} className="text-white text-3xl">
            <RiMenu3Line />
          </button>
        </div>
        <SideNav myNav={myNav} />
      </div>
    </header>
  )
}

export default Header