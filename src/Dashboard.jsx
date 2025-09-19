import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaChartLine,
  FaPiggyBank,
  FaGraduationCap,
  FaPlus,
  FaArrowUp,
  FaArrowDown,
  FaCoins,
  FaNewspaper,
  FaEye,
  FaMoneyBillWave,
  FaDollarSign,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaCaretDown,
  FaCog,
  FaSignOutAlt,
  FaHome,
  FaWallet
} from 'react-icons/fa';

function Dashboard() {
  const [portfolios] = useState([
    {
      id: "education",
      title: "Education Fund",
      value: 12000,
      goal: 20000,
      icon: <FaGraduationCap className="text-2xl" />,
      accent: "bg-gradient-to-r from-blue-500 to-blue-700",
      growth: 4.2
    },
    {
      id: "retirement",
      title: "Retirement Fund",
      value: 35000,
      goal: 50000,
      icon: <FaPiggyBank className="text-2xl" />,
      accent: "bg-gradient-to-r from-orange-400 to-orange-600",
      growth: 7.8
    },
    {
      id: "growth",
      title: "Growth Portfolio",
      value: 18000,
      goal: 30000,
      icon: <FaChartLine className="text-2xl" />,
      accent: "bg-gradient-to-r from-green-400 to-green-600",
      growth: 12.4
    },
  ]);

  const [transactions, setTransactions] = useState([
    { id: 1, type: "invest", fund: "Education Fund", amount: 1000, date: "2025-09-10" },
    { id: 2, type: "withdraw", fund: "Retirement Fund", amount: -200, date: "2025-09-07" },
    { id: 3, type: "dividend", fund: "Growth Portfolio", amount: 50, date: "2025-09-03" },
    { id: 4, type: "invest", fund: "Child Fund", amount: 500, date: "2025-08-22" },
  ]);

  const [marketData] = useState([
    { id: "fund-a", name: "Alpha Growth Fund", ret1y: 18.4, risk: "High" },
    { id: "fund-b", name: "Stable Income Fund", ret1y: 7.2, risk: "Low" },
    { id: "stock-x", name: "TechX Corp.", ret1y: -3.6, risk: "Medium" },
  ]);

  const [articles] = useState([
    { id: 1, title: "How to build a diversified portfolio", excerpt: "Start with your goals and timeline..." },
    { id: 2, title: "Understanding risk vs reward", excerpt: "Why volatility matters in long-term investing..." },
  ]);

  const totalValue = portfolios.reduce((sum, portfolio) => sum + portfolio.value, 0);
  const totalGrowth = portfolios.reduce((sum, portfolio) => sum + portfolio.growth, 0) / portfolios.length;

  // Simulate incoming transaction
  useEffect(() => {
    const interval = setInterval(() => {
      const newTx = { 
        id: Date.now(), 
        type: 'dividend', 
        fund: 'Retirement Fund', 
        amount: 85, 
        date: new Date().toISOString().slice(0,10) 
      };
      setTransactions(prev => [newTx, ...prev.slice(0, 4)]);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="pt-24 px-4">
      {/* Welcome Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Armstrong!</h1>
        <p className="text-gray-600">Here's an overview of your investment portfolio</p>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Portfolio Value</p>
              <h2 className="text-3xl font-bold text-gray-800 mt-1">${totalValue.toLocaleString()}</h2>
            </div>
            <div className="p-3 rounded-lg bg-blue-100">
              <FaDollarSign className="text-2xl text-blue-600" />
            </div>
          </div>
          <div className={`flex items-center mt-4 text-sm ${totalGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {totalGrowth >= 0 ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
            <span>{Math.abs(totalGrowth).toFixed(1)}% this month</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Monthly Deposits</p>
              <h2 className="text-3xl font-bold text-gray-800 mt-1">$1,200</h2>
            </div>
            <div className="p-3 rounded-lg bg-green-100">
              <FaMoneyBillWave className="text-2xl text-green-600" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm text-green-600">
            <FaArrowUp className="mr-1" />
            <span>On track for goals</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Recommended Action</p>
              <h2 className="text-xl font-bold text-gray-800 mt-1">Alpha Growth Fund</h2>
            </div>
            <div className="p-3 rounded-lg bg-orange-100">
              <FaChartLine className="text-2xl text-orange-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">18.4% 1Y return</span>
          </div>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Portfolio Cards */}
        <div className="lg:col-span-2 space-y-6">
          {/* Portfolio Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Your Portfolios</h2>
              <button className="flex items-center text-blue-600 font-medium">
                <FaPlus className="mr-2" />
                Create New
              </button>
            </div>

            <div className="space-y-4">
              {portfolios.map((portfolio, index) => {
                const progress = Math.min(100, (portfolio.value / portfolio.goal) * 100);
                return (
                  <motion.div 
                    key={portfolio.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${portfolio.id === "education" ? "bg-blue-100 text-blue-600" : portfolio.id === "retirement" ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"}`}>
                          {portfolio.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{portfolio.title}</h3>
                          <p className="text-gray-600 text-sm">Goal: ${portfolio.goal.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-800">${portfolio.value.toLocaleString()}</p>
                        <p className={`text-sm ${portfolio.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {portfolio.growth >= 0 ? '+' : ''}{portfolio.growth.toFixed(1)}%
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                        <span>{progress.toFixed(0)}% funded</span>
                        <span>${portfolio.value.toLocaleString()} of ${portfolio.goal.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${portfolio.accent}`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium flex items-center">
                          <FaEye className="mr-1" /> View
                        </button>
                        <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium">
                          Top Up
                        </button>
                      </div>
                      <button className="text-sm text-blue-600 font-medium">Details</button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Transactions Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Recent Transactions</h2>
              <button className="text-blue-600 font-medium">View All</button>
            </div>

            <div className="space-y-4">
              <AnimatePresence>
                {transactions.map((transaction, index) => (
                  <motion.div 
                    key={transaction.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${transaction.amount > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {transaction.amount > 0 ? <FaArrowUp /> : <FaArrowDown />}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{transaction.fund}</p>
                        <p className="text-sm text-gray-600">{transaction.date}</p>
                      </div>
                    </div>
                    <p className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Market and Articles */}
        <div className="space-y-6">
          {/* Market Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-6">Market Highlights</h2>
            
            <div className="space-y-4">
              {marketData.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">Risk: {item.risk}</p>
                    </div>
                    <p className={`font-bold ${item.ret1y >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.ret1y >= 0 ? '+' : ''}{item.ret1y}%
                    </p>
                  </div>
                  <button className="w-full mt-3 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                    Invest Now
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Educational Articles */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Learning Center</h2>
              <button className="text-blue-600 font-medium">View All</button>
            </div>
            
            <div className="space-y-4">
              {articles.map((article, index) => (
                <motion.div 
                  key={article.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                  className="p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <FaNewspaper className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{article.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{article.excerpt}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 text-sm font-medium mt-3">Read Article</button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Notifications */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Notifications</h2>
            
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                <p className="text-sm text-blue-800">Your Education Fund is 60% funded 🎉</p>
              </div>
              <div className="p-3 rounded-lg bg-green-50 border border-green-100">
                <p className="text-sm text-green-800">XYZ Fund gained +12% this week</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50 border border-orange-100">
                <p className="text-sm text-orange-800">New investment opportunities available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;