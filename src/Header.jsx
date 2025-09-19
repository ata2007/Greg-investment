import React, { useState, useEffect } from 'react';
import { 
  FaBell, 
  FaSearch, 
  FaUserCircle, 
  FaCaretDown, 
  FaHome, 
  FaChartLine, 
  FaWallet, 
  FaNewspaper, 
  FaCog,
  FaSignOutAlt
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ onOpenSideNav }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notifications] = useState(3);
  const [activeNav, setActiveNav] = useState('dashboard');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set activeNav based on current location
  useEffect(() => {
    const path = location.pathname.replace('/', '') || 'dashboard';
    setActiveNav(path);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 
      bg-gradient-to-r from-white to-blue-50 backdrop-blur-md bg-opacity-95
      transition-all duration-300 ease-in-out
      ${scrolled ? 'py-3 shadow-lg' : 'py-4 shadow-md'}`}>
      
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center 
            bg-gradient-to-br from-blue-600 to-orange-500 
            rounded-xl mr-3 transition-all duration-300 hover:rotate-12 hover:scale-110
            shadow-lg shadow-blue-500/30">
            <span className="text-white font-bold text-lg">I</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">
            Invest<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-500">X</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-1">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: <FaHome className="mr-2" />, to: '/' },
            { id: 'portfolio', label: 'Portfolio', icon: <FaChartLine className="mr-2" />, to: '/portfolio' },
            { id: 'market', label: 'Market', icon: <FaWallet className="mr-2" />, to: '/market' },
            { id: 'articles', label: 'Articles', icon: <FaNewspaper className="mr-2" />, to: '/articles' },
          ].map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300
                ${activeNav === item.id 
                  ? 'bg-blue-100 text-blue-700 shadow-inner' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}
              onClick={() => setActiveNav(item.id)}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden lg:flex relative mr-4">
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-gray-400 z-10" />
            <input
              type="text"
              placeholder="Search stocks, funds..."
              className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-200 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all duration-300 shadow-sm hover:shadow-md"
            />
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100 
            transition-colors duration-300 group">
            <FaBell className="text-gray-600 text-xl group-hover:text-blue-600" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs 
                rounded-full h-5 w-5 flex items-center justify-center
                animate-pulse shadow-lg shadow-orange-500/40">
                {notifications}
              </span>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 
                transition-colors duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-orange-500 
                flex items-center justify-center text-white font-semibold text-sm">
                JD
              </div>
              {/* Only show name and caret on md+ screens */}
              <span className="hidden md:inline-block text-gray-700 font-medium">John Doe</span>
              <FaCaretDown className={`text-gray-500 transition-transform duration-300 ${menuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 
                border border-gray-100 animate-fadeIn">
                <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 
                  transition-colors duration-300">
                  <FaUserCircle className="mr-3 text-blue-500" />
                  Profile
                </button>
                <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 
                  transition-colors duration-300">
                  <FaCog className="mr-3 text-blue-500" />
                  Settings
                </button>
                <div className="border-t border-gray-100 my-1"></div>
                <button className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 
                  transition-colors duration-300">
                  <FaSignOutAlt className="mr-3" />
                  Logout
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;