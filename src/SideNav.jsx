import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiDashboardFill,
  RiWalletFill,
  RiStockFill,
  RiArticleFill,
  RiSettings4Fill,
  RiLogoutBoxRFill,
  RiMenu3Line,
  RiCloseLine,
  RiUserFill,
  RiNotificationFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMoonFill,
  RiSunFill,
} from "react-icons/ri";

const navLinks = [
  { href: "#dashboard", label: "Dashboard", icon: <RiDashboardFill /> },
  { href: "#portfolio", label: "Portfolio", icon: <RiWalletFill /> },
  { href: "#market", label: "Market", icon: <RiStockFill /> },
  { href: "#articles", label: "Articles", icon: <RiArticleFill /> },
  { href: "#settings", label: "Settings", icon: <RiSettings4Fill /> },
];

function SideNav({ open, setOpen }) {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [setOpen]);

  if (!isMobile) return null;

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-2.5 rounded-xl shadow-lg"
        >
          {open ? <RiCloseLine size={22} /> : <RiMenu3Line size={22} />}
        </motion.button>
      </div>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {open && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* SideNav */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ 
          x: open ? 0 : (isMobile ? -280 : collapsed ? -220 : 0)
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={`fixed top-0 left-0 h-full ${
          collapsed ? "w-20" : "w-64"
        } bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 shadow-2xl z-40 flex flex-col transition-width duration-300`}
      >
        {/* Logo and Toggle */}
        <div className="p-5 border-b border-gray-700 flex items-center justify-between">
          <AnimatePresence>
            {!collapsed && (
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xl font-bold text-white"
              >
                Invest<span className="text-orange-500">X</span>
              </motion.h1>
            )}
          </AnimatePresence>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg bg-gray-700 hover:bg-gray-600 text-white"
          >
            {collapsed ? <RiArrowRightSLine /> : <RiArrowLeftSLine />}
          </motion.button>
        </div>

        {/* User Profile */}
        <div className="p-5 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <AnimatePresence>
              {!collapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="overflow-hidden"
                >
                  <p className="text-white font-medium">John Doe</p>
                  <p className="text-xs text-gray-400">Premium Investor</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-1">
          {navLinks.map((link) => (
            <motion.button
              key={link.label}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setActive(link.label);
                if (isMobile) setOpen(false);
              }}
              className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-xl transition-all ${
                active === link.label
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "hover:bg-gray-700 hover:text-white"
              }`}
            >
              <span className={`text-lg ${active === link.label ? 'text-white' : 'text-gray-400'}`}>
                {link.icon}
              </span>
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-medium"
                  >
                    {link.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="p-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors"
          >
            <span className="text-lg">
              {darkMode ? <RiSunFill /> : <RiMoonFill />}
            </span>
            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-700">
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-red-400 hover:bg-red-600 hover:text-white transition-colors"
          >
            <RiLogoutBoxRFill className="text-lg" />
            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-medium"
                >
                  Logout
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Collapsed Indicator */}
        {collapsed && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="w-1 h-1 rounded-full bg-gray-600"></div>
          </div>
        )}
      </motion.aside>

      {/* Main content adjustment for sidebar */}
      <div 
        className={`transition-all duration-300 ${
          collapsed ? "md:ml-20" : "md:ml-64"
        }`}
      />
    </>
  );
}

export default SideNav;