import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaHome, FaInfoCircle, FaChartLine, FaEnvelope } from "react-icons/fa";

function SideNav({ myNav, setMyNav }) {
  const navRef = useRef();

  // Trap focus and close on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event) {
      if (myNav && navRef.current && !navRef.current.contains(event.target)) {
        setMyNav(false);
      }
    }
    function handleEscape(event) {
      if (event.key === "Escape") setMyNav(false);
    }
    if (myNav) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [myNav, setMyNav]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          myNav ? "bg-black/40 backdrop-blur-sm opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMyNav(false)}
        aria-hidden="true"
      />
      {/* SideNav Panel */}
      <aside
        ref={navRef}
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-full rounded-l-2xl shadow-2xl transition-transform duration-500
          ${myNav ? "translate-x-0" : "translate-x-full"}
          bg-gradient-to-br from-cyan-900 via-blue-900 to-cyan-700 border-l-4 border-cyan-300/30
          flex flex-col`}
        style={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        {/* Close Button */}
        <button
          onClick={() => setMyNav(false)}
          className="absolute top-5 right-5 text-white text-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-900 shadow-lg hover:shadow-cyan-200/60 hover:scale-110 rounded-full p-2 transition-all duration-200 border-2 border-white z-10"
          aria-label="Close menu"
        >
          <IoMdClose />
        </button>
        {/* Navigation */}
        <nav className="flex-1 flex flex-col justify-center items-center pt-16 pb-10 relative z-10">
          <ul className="w-full flex flex-col gap-6">
            <li>
              <Link
                to="/"
                onClick={() => setMyNav(false)}
                className="flex items-center gap-4 text-white hover:bg-cyan-400/30 px-8 py-3 rounded-lg w-full transition text-lg font-bold tracking-wide shadow hover:shadow-lg"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-md">
                  <FaHome className="text-white text-2xl" />
                </span>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMyNav(false)}
                className="flex items-center gap-4 text-white hover:bg-cyan-400/30 px-8 py-3 rounded-lg w-full transition text-lg font-bold tracking-wide shadow hover:shadow-lg"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 shadow-md">
                  <FaInfoCircle className="text-white text-2xl" />
                </span>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/investment"
                onClick={() => setMyNav(false)}
                className="flex items-center gap-4 text-white hover:bg-cyan-400/30 px-8 py-3 rounded-lg w-full transition text-lg font-bold tracking-wide shadow hover:shadow-lg"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-400 shadow-md">
                  <FaChartLine className="text-white text-2xl" />
                </span>
                Investment
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMyNav(false)}
                className="flex items-center gap-4 text-white hover:bg-cyan-400/30 px-8 py-3 rounded-lg w-full transition text-lg font-bold tracking-wide shadow hover:shadow-lg"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-md">
                  <FaEnvelope className="text-white text-2xl" />
                </span>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Decorative Blobs */}
        <div className="absolute -bottom-10 left-10 w-28 h-28 bg-cyan-400/30 rounded-full blur-2xl animate-pulse pointer-events-none z-0"></div>
        <div className="absolute -top-8 right-8 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl animate-bounce pointer-events-none z-0"></div>
        <div className="absolute bottom-1/3 right-0 w-16 h-16 bg-cyan-300/20 rounded-full blur-2xl animate-spin pointer-events-none z-0"></div>
      </aside>
    </>
  );
}

export default SideNav;