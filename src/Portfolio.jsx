import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  FaArrowUp, 
  FaArrowDown, 
  FaPlusCircle, 
  FaMinusCircle, 
  FaCoins,
  FaChartPie,
  FaHistory,
  FaRocket,
  FaChevronRight,
  FaInfoCircle,
  FaSync
} from "react-icons/fa";

// Sample chart data
const chartData = [
  { month: "Jan", value: 10000, benchmark: 9500 },
  { month: "Feb", value: 12000, benchmark: 11000 },
  { month: "Mar", value: 15000, benchmark: 13000 },
  { month: "Apr", value: 17000, benchmark: 15000 },
  { month: "May", value: 16000, benchmark: 15500 },
  { month: "Jun", value: 19000, benchmark: 17000 },
  { month: "Jul", value: 21000, benchmark: 18500 },
  { month: "Aug", value: 23500, benchmark: 20000 },
  { month: "Sep", value: 25500, benchmark: 21500 },
];

// Sample holdings with more details
const holdings = [
  { asset: "ABC Growth Fund", allocation: 40, value: 8400, return: 12.3, type: "Equity", risk: "Medium" },
  { asset: "XYZ Tech Stock", allocation: 30, value: 6300, return: 8.7, type: "Equity", risk: "High" },
  { asset: "Global Bond ETF", allocation: 20, value: 4200, return: 4.2, type: "Fixed Income", risk: "Low" },
  { asset: "Crypto Index", allocation: 10, value: 2100, return: -3.2, type: "Crypto", risk: "Very High" },
];

// Sample transactions
const transactions = [
  { id: 1, action: "Invested", amount: 2000, date: "Sep 5, 2025", type: "investment", asset: "ABC Growth Fund" },
  { id: 2, action: "Withdrawn", amount: 500, date: "Aug 22, 2025", type: "withdrawal", asset: "XYZ Tech Stock" },
  { id: 3, action: "Dividend", amount: 120, date: "Aug 15, 2025", type: "dividend", asset: "Global Bond ETF" },
  { id: 4, action: "Invested", amount: 1500, date: "Jul 30, 2025", type: "investment", asset: "Crypto Index" },
];

// Colors for pie chart
const COLORS = ['#3457d5', '#ff7a18', '#10b981', '#8b5cf6'];

function Portfolio() {
  const [timeFilter, setTimeFilter] = useState("1Y");
  const [activeTab, setActiveTab] = useState("performance");
  const totalValue = 25500;
  const goal = 30000;
  const progress = (totalValue / goal) * 100;
  const overallReturn = 8.5;

  // Calculate allocation data for pie chart
  const allocationData = holdings.map(holding => ({
    name: holding.asset,
    value: holding.allocation
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-6 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                  <FaCoins className="text-2xl" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Education Fund 🎓</h1>
                  <p className="text-blue-100">Helping you reach your $30,000 target</p>
                </div>
              </div>
              
              <motion.p
                className="text-4xl font-bold mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                ${totalValue.toLocaleString()}
              </motion.p>
              
              <div className="flex items-center gap-4 mt-4">
                <div className={`flex items-center ${overallReturn >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                  {overallReturn >= 0 ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                  <span>{Math.abs(overallReturn)}% overall return</span>
                </div>
                <div className="text-blue-200">
                  Goal Progress: {progress.toFixed(0)}%
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-blue-900 bg-opacity-30 rounded-full h-3 mt-4">
                <motion.div
                  className="h-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 shadow-md"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition"
              >
                <FaPlusCircle /> Invest
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg hover:bg-opacity-30 transition border border-white border-opacity-30"
              >
                <FaMinusCircle /> Withdraw
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 flex">
          {[
            { id: "performance", label: "Performance", icon: <FaChartPie /> },
            { id: "holdings", label: "Holdings", icon: <FaCoins /> },
            { id: "transactions", label: "Transactions", icon: <FaHistory /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all flex-1 justify-center ${
                activeTab === tab.id
                  ? "bg-blue-100 text-blue-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Performance Tab */}
        {activeTab === "performance" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Performance Chart */}
            <div className="bg-white shadow-lg rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <FaChartPie className="text-blue-600" /> Portfolio Performance
                </h2>
                <div className="flex gap-2">
                  {["1M", "6M", "1Y", "All"].map((filter) => (
                    <motion.button
                      key={filter}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setTimeFilter(filter)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        timeFilter === filter
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {filter}
                    </motion.button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" tickFormatter={(value) => `$${value/1000}k`} />
                  <Tooltip 
                    formatter={(value) => [`$${value.toLocaleString()}`, "Portfolio Value"]}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Area type="monotone" dataKey="benchmark" stroke="#9ca3af" fill="#f3f4f6" fillOpacity={0.2} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3457d5"
                    strokeWidth={3}
                    dot={{ r: 4, strokeWidth: 2, stroke: "#3457d5", fill: "#fff" }}
                    activeDot={{ r: 8, stroke: "#3457d5", strokeWidth: 2, fill: "#fff" }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-blue-600"></div>
                  <span>Your Portfolio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-gray-400"></div>
                  <span>Benchmark</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-500 font-medium">Total Return</h3>
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FaArrowUp className="text-blue-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-800 mt-3">{overallReturn}%</p>
                <p className="text-sm text-gray-500 mt-1">Since inception</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-500 font-medium">Best Performer</h3>
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FaArrowUp className="text-green-600" />
                  </div>
                </div>
                <p className="text-xl font-bold text-gray-800 mt-3">ABC Growth Fund</p>
                <p className="text-sm text-green-600 mt-1">+12.3%</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-500 font-medium">Risk Level</h3>
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <FaInfoCircle className="text-orange-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-800 mt-3">Moderate</p>
                <p className="text-sm text-gray-500 mt-1">Balanced growth</p>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Holdings Tab */}
        {activeTab === "holdings" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Allocation Chart */}
              <div className="bg-white shadow-lg rounded-2xl p-6 lg:col-span-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <FaChartPie className="text-blue-600" /> Asset Allocation
                </h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={allocationData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                        labelLine={false}
                      >
                        {allocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, "Allocation"]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Holdings Table */}
              <div className="bg-white shadow-lg rounded-2xl p-6 lg:col-span-2">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <FaCoins className="text-blue-600" /> Your Holdings
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100 text-gray-600 uppercase text-xs">
                        <th className="px-4 py-3 text-left">Asset</th>
                        <th className="px-4 py-3 text-left">Type</th>
                        <th className="px-4 py-3 text-right">Allocation</th>
                        <th className="px-4 py-3 text-right">Value</th>
                        <th className="px-4 py-3 text-right">Return</th>
                      </tr>
                    </thead>
                    <tbody>
                      {holdings.map((holding, i) => (
                        <motion.tr 
                          key={i} 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="border-b hover:bg-blue-50 transition-colors duration-200"
                        >
                          <td className="px-4 py-3 font-medium">{holding.asset}</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              {holding.type}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right">{holding.allocation}%</td>
                          <td className="px-4 py-3 text-right">${holding.value.toLocaleString()}</td>
                          <td className={`px-4 py-3 text-right font-semibold ${
                            holding.return >= 0 ? "text-green-600" : "text-red-600"
                          }`}>
                            {holding.return >= 0 ? "+" : ""}{holding.return}%
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Risk Distribution */}
            <div className="bg-white shadow-lg rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Risk Distribution</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { level: "Very High", percent: 10, color: "bg-red-500" },
                  { level: "High", percent: 30, color: "bg-orange-500" },
                  { level: "Medium", percent: 40, color: "bg-blue-500" },
                  { level: "Low", percent: 20, color: "bg-green-500" },
                ].map((risk, i) => (
                  <div key={i} className="text-center">
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${risk.color} rounded-full`} 
                        style={{ width: `${risk.percent}%` }}
                      ></div>
                    </div>
                    <p className="text-sm font-medium mt-2">{risk.level}</p>
                    <p className="text-xs text-gray-500">{risk.percent}%</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Transactions Tab */}
        {activeTab === "transactions" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white shadow-lg rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FaHistory className="text-blue-600" /> Transaction History
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100 text-gray-600 uppercase text-xs">
                      <th className="px-4 py-3 text-left">Action</th>
                      <th className="px-4 py-3 text-left">Asset</th>
                      <th className="px-4 py-3 text-right">Amount</th>
                      <th className="px-4 py-3 text-right">Date</th>
                      <th className="px-4 py-3 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction, i) => (
                      <motion.tr 
                        key={transaction.id} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="border-b hover:bg-blue-50 transition-colors duration-200"
                      >
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center gap-1 ${
                            transaction.type === 'investment' ? 'text-green-600' : 
                            transaction.type === 'withdrawal' ? 'text-red-600' : 'text-blue-600'
                          }`}>
                            {transaction.type === 'investment' ? <FaPlusCircle size={12} /> : 
                             transaction.type === 'withdrawal' ? <FaMinusCircle size={12} /> : 
                             <FaCoins size={12} />}
                            {transaction.action}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-medium">{transaction.asset}</td>
                        <td className={`px-4 py-3 text-right font-semibold ${
                          transaction.type === 'investment' || transaction.type === 'dividend' ? 
                          'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.type === 'investment' || transaction.type === 'dividend' ? '+' : '-'}${transaction.amount.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-500">{transaction.date}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                            Completed
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Export Section */}
            <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">Export Transactions</h3>
                <p className="text-sm text-gray-500">Download your transaction history as CSV or PDF</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                  CSV
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  PDF
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Recommended Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white bg-opacity-20 rounded-xl">
              <FaRocket className="text-2xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Boost Your Goal 🚀</h2>
              <p className="text-sm text-blue-100">
                You're {progress.toFixed(0)}% towards your target. Add more to reach faster!
              </p>
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-0 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-2"
          >
            Add Investment <FaChevronRight />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;