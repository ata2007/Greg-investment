import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaHome, FaInfoCircle, FaChartLine, FaEnvelope } from "react-icons/fa";

function SideNav({ myNav, setMyNav }) {
  const navRef = useRef();

  // Close SideNav when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (myNav && navRef.current && !navRef.current.contains(event.target)) {
        setMyNav(false);
      }
    }
    if (myNav) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [myNav, setMyNav]);

  return (
    <>
      {/* Overlay for crazy effect and click-outside close */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          myNav ? "bg-cyan-900/40 backdrop-blur-[2px] opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMyNav(false)}
        aria-hidden="true"
      ></div>
      <div
        ref={navRef}
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-full rounded-l-3xl shadow-2xl transition-all duration-500
          ${myNav ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
          bg-gradient-to-br from-blue-700 via-cyan-700 to-blue-900 border-l-4 border-cyan-200/30
          backdrop-blur-xl overflow-hidden`}
        style={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-l-3xl pointer-events-none z-0 animate-pulse bg-gradient-to-br from-cyan-400/10 via-blue-400/10 to-blue-900/10"></div>
        {/* Close Button */}
        <button
          onClick={() => setMyNav(false)}
          className="absolute top-6 right-6 text-white text-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-900 shadow-lg hover:shadow-cyan-200/60 hover:scale-110 rounded-full p-2 transition-all duration-200 border-2 border-white z-10"
          aria-label="Close menu"
        >
          <IoMdClose />
        </button>
        <nav className="relative z-10 pt-24">
          <ol className="flex flex-col items-center gap-8 font-semibold">
            <li>
              <Link
                to="/"
                onClick={() => setMyNav(false)}
                className="flex items-center gap-4 text-white hover:bg-cyan-400/20 px-10 py-4 rounded-xl w-full transition text-lg font-bold tracking-wide shadow hover:shadow-lg"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-md animate-spin-slow">
                  <FaHome className="text-white text-2xl" />
                </span>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMyNav(false)}
                className="flex items-center gap-4 text-white hover:bg-cyan-400/20 px-10 py-4 rounded-xl w-full transition text-lg font-bold tracking-wide shadow hover:shadow-lg"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-md animate-bounce">
                  <FaInfoCircle className="text-white text-2xl" />
                </span>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/investment"
                onClick={() => setMyNav(false)}
                className="flex items-center gap-4 text-white hover:bg-cyan-400/20 px-10 py-4 rounded-xl w-full transition text-lg font-bold tracking-wide shadow hover:shadow-lg"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-md animate-pulse">
                  <FaChartLine className="text-white text-2xl" />
                </span>
                Investment
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMyNav(false)}
                className="flex items-center gap-4 text-white hover:bg-cyan-400/20 px-10 py-4 rounded-xl w-full transition text-lg font-bold tracking-wide shadow hover:shadow-lg"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-md animate-pulse">
                  <FaEnvelope className="text-white text-2xl" />
                </span>
                Contact
              </Link>
            </li>
          </ol>
        </nav>
        {/* Extra animated blue blobs for crazy effect */}
        <div className="absolute -bottom-10 left-10 w-32 h-32 bg-cyan-400/30 rounded-full blur-2xl animate-pulse pointer-events-none z-0"></div>
        <div className="absolute -top-8 right-8 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-bounce pointer-events-none z-0"></div>
        <div className="absolute bottom-1/3 right-0 w-20 h-20 bg-cyan-300/20 rounded-full blur-2xl animate-spin pointer-events-none z-0"></div>
      </div>
    </>
  );
}

export default SideNav;