import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function SideNav({ myNav, setMyNav }) {
  return (
    <div
      className={`fixed top-[80px] right-4 z-50 w-64 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden
        ${myNav ? "h-80 opacity-100" : "h-0 opacity-0 pointer-events-none"}
        bg-gradient-to-br from-green-400 via-green-500 to-teal-400 border border-white/30`}
      style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
    >
      {/* Close Button */}
      <button
        onClick={() => setMyNav(false)}
        className="absolute top-3 right-3 text-white text-2xl hover:bg-white/20 rounded-full p-1 transition"
        aria-label="Close menu"
      >
        <IoMdClose />
      </button>
      <nav>
        <ol className="flex flex-col items-center gap-6 py-10 font-semibold">
          <li>
            <Link
              to="/"
              onClick={() => setMyNav(false)}
              className="flex items-center gap-3 text-white hover:bg-white/20 px-6 py-2 rounded-lg w-full transition text-lg"
            >
              <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setMyNav(false)}
              className="flex items-center gap-3 text-white hover:bg-white/20 px-6 py-2 rounded-lg w-full transition text-lg"
            >
              <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/investment"
              onClick={() => setMyNav(false)}
              className="flex items-center gap-3 text-white hover:bg-white/20 px-6 py-2 rounded-lg w-full transition text-lg"
            >
              <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
              Investment
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setMyNav(false)}
              className="flex items-center gap-3 text-white hover:bg-white/20 px-6 py-2 rounded-lg w-full transition text-lg"
            >
              <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
                 Investment
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setMyNav(false)}
              className="flex items-center gap-3 text-white hover:bg-white/20 px-6 py-2 rounded-lg w-full transition text-lg"
            >
              <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
              Contact
            </Link>
          </li>
        </ol>
      </nav>
      </div>
  );
}

export default SideNav