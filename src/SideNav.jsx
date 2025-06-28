import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function SideNav({ myNav, setMyNav }) {
  return (
    <div
      className={`fixed top-[80px] right-4 z-50 w-72 rounded-3xl shadow-2xl transition-all duration-300 overflow-hidden
        ${myNav ? "h-[370px] opacity-100" : "h-0 opacity-0 pointer-events-none"}
        bg-gradient-to-br from-green-400 via-green-500 to-teal-400 border-2 border-white/20
        backdrop-blur-xl`}
      style={{
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      }}
    >
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none z-0 animate-pulse bg-gradient-to-br from-yellow-200/10 via-green-200/10 to-teal-200/10"></div>
      {/* Close Button */}
      <button
        onClick={() => setMyNav(false)}
        className="absolute top-4 right-4 text-white text-3xl bg-gradient-to-br from-yellow-300 via-green-400 to-teal-400 shadow-lg hover:shadow-yellow-200/60 hover:scale-110 rounded-full p-2 transition-all duration-200 border-2 border-white z-10"
        aria-label="Close menu"
      >
        <IoMdClose />
      </button>
      <nav className="relative z-10">
        <ol className="flex flex-col items-center gap-7 py-12 font-semibold">
          <li>
            <Link
              to="/"
              onClick={() => setMyNav(false)}
              className="flex items-center gap-4 text-white hover:bg-white/20 px-8 py-3 rounded-xl w-full transition text-lg font-bold tracking-wide shadow hover:shadow-lg"
            >
              <span className="inline-block w-3 h-3 bg-gradient-to-br from-green-300 to-teal-400 rounded-full shadow-md animate-pulse"></span>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setMyNav(false)}
              className="flex items-center gap-4 text-white hover:bg-white/20 px-8 py-3 rounded-xl w-full transition text-lg font-bold tracking-wide shadow hover:shadow-lg"
            >
              <span className="inline-block w-3 h-3 bg-gradient-to-br from-green-300 to-teal-400 rounded-full shadow-md animate-pulse"></span>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/investment"
              onClick={() => setMyNav(false)}
              className="flex items-center gap-4 text-white hover:bg-white/20 px-8 py-3 rounded-xl w-full transition text-lg font-bold tracking-wide shadow hover:shadow-lg"
            >
              <span className="inline-block w-3 h-3 bg-gradient-to-br from-green-300 to-teal-400 rounded-full shadow-md animate-pulse"></span>
              Investment
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setMyNav(false)}
              className="flex items-center gap-4 text-white hover:bg-white/20 px-8 py-3 rounded-xl w-full transition text-lg font-bold tracking-wide shadow hover:shadow-lg"
            >
              <span className="inline-block w-3 h-3 bg-gradient-to-br from-green-300 to-teal-400 rounded-full shadow-md animate-pulse"></span>
              Contact
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default SideNav;