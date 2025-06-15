import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function SideNav({ myNav, setMyNav }) {
  return (
    <div
      className={`fixed top-[80px] right-4 z-50 h-[300px] w-56 rounded-xl shadow-2xl transition-all duration-300 overflow-hidden
        ${myNav ? "h-64 opacity-100" : "h-0 opacity-0 pointer-events-none"}
        bg-gradient-to-br from-green-400 via-green-500 to-teal-400`}
    >
      {/* Close Button */}
      <button
        onClick={() => setMyNav(false)}
        className="absolute top-2 right-2 text-white text-2xl hover:bg-white/20 rounded-full p-1 transition"
        aria-label="Close menu"
      >
        <IoMdClose />
      </button>
      <nav>
        <ol className="flex flex-col items-center gap-7 py-8 font-semibold">
          <li>
            <Link
              to="/"
              onClick={() => setMyNav(false)}
              className="text-white hover:bg-white/20 px-6 py-2 rounded-lg w-full block transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setMyNav(false)}
              className="text-white hover:bg-white/20 px-6 py-2 rounded-lg w-full block transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/investment"
              onClick={() => setMyNav(false)}
              className="text-white hover:bg-white/20 px-6 py-2 rounded-lg w-full block transition"
            >
              Investment
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setMyNav(false)}
              className="text-white hover:bg-white/20 px-6 py-2 rounded-lg w-full block transition"
            >
              Contact
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default SideNav