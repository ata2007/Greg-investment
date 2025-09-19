import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaArrowRight } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Simulate API call
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Invest<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">X</span>
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Building your financial future with smart, secure investments.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center hover:scale-110 transform transition duration-300 shadow-lg"
            >
              <FaTwitter className="text-white" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center hover:scale-110 transform transition duration-300 shadow-lg"
            >
              <FaLinkedin className="text-white" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center hover:scale-110 transform transition duration-300 shadow-lg"
            >
              <FaGithub className="text-white" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg border-l-4 border-orange-500 pl-2">Navigation</h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="#dashboard" 
                className="flex items-center text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 group"
              >
                <FaArrowRight className="mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={12} />
                Dashboard
              </a>
            </li>
            <li>
              <a 
                href="#portfolio" 
                className="flex items-center text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 group"
              >
                <FaArrowRight className="mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={12} />
                Portfolio
              </a>
            </li>
            <li>
              <a 
                href="#market" 
                className="flex items-center text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 group"
              >
                <FaArrowRight className="mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={12} />
                Market
              </a>
            </li>
            <li>
              <a 
                href="#articles" 
                className="flex items-center text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 group"
              >
                <FaArrowRight className="mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={12} />
                Articles
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg border-l-4 border-blue-500 pl-2">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-white" size={14} />
              </div>
              <span>support@investx.com</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <span>123 Finance Street, New York, USA</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg border-l-4 border-green-500 pl-2">Stay Updated</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to get investment tips and platform updates.
          </p>
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-700 text-white placeholder-gray-400"
              required
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-1 rounded-md transition-all duration-300 flex items-center justify-center"
            >
              <FaArrowRight />
            </button>
          </form>
          
          {subscribed && (
            <div className="mt-3 p-2 bg-green-900 bg-opacity-30 text-green-300 rounded-lg text-sm border border-green-800 transition-all duration-300">
              Thanks for subscribing!
            </div>
          )}
          
          <div className="mt-6 bg-gradient-to-r from-blue-900 to-blue-800 p-4 rounded-lg border border-blue-700">
            <h4 className="text-white font-medium mb-2">Market Update</h4>
            <p className="text-xs text-blue-200">S&P 500 gained 1.2% today. Tech stocks lead the rally.</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} InvestX. All rights reserved.
        </p>
        <div className="flex space-x-2 mt-3 md:mt-0">
          <a href="#" className="text-xs text-gray-400 hover:text-orange-400 transition-colors duration-300 mx-2">
            Privacy Policy
          </a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-xs text-gray-400 hover:text-orange-400 transition-colors duration-300 mx-2">
            Terms of Service
          </a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-xs text-gray-400 hover:text-orange-400 transition-colors duration-300 mx-2">
            Compliance
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;