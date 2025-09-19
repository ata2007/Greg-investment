import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FaSearch, 
  FaArrowUp, 
  FaArrowDown, 
  FaFilter,
  FaStar,
  FaChartLine,
  FaCoins,
  FaFire,
  FaRocket,
  FaRegHeart,
  FaHeart,
  FaInfoCircle,
  FaSync,
  FaCog
} from "react-icons/fa";

// Sample chart data
const chartData = [
  { time: "Jan", portfolioA: 100, portfolioB: 120, market: 110 },
  { time: "Feb", portfolioA: 130, portfolioB: 150, market: 135 },
  { time: "Mar", portfolioA: 125, portfolioB: 160, market: 140 },
  { time: "Apr", portfolioA: 150, portfolioB: 180, market: 160 },
  { time: "May", portfolioA: 170, portfolioB: 190, market: 175 },
  { time: "Jun", portfolioA: 200, portfolioB: 210, market: 200 },
  { time: "Jul", portfolioA: 220, portfolioB: 230, market: 215 },
  { time: "Aug", portfolioA: 240, portfolioB: 250, market: 230 },
  { time: "Sep", portfolioA: 260, portfolioB: 270, market: 250 },
];

// Sample market data
const marketAssets = [
  { 
    id: 1, 
    name: "Tech Growth Fund", 
    ticker: "TGF", 
    return: 12.5, 
    risk: "High", 
    price: 120.50, 
    change: 2.3, 
    favorite: false,
    category: "Equity",
    volume: "2.5M"
  },
  { 
    id: 2, 
    name: "BlueChip ETF", 
    ticker: "BCEF", 
    return: 6.2, 
    risk: "Medium", 
    price: 85.30, 
    change: 0.8, 
    favorite: true,
    category: "ETF",
    volume: "1.8M"
  },
  { 
    id: 3, 
    name: "Green Energy Stock", 
    ticker: "GES", 
    return: -3.4, 
    risk: "High", 
    price: 45.10, 
    change: -1.2, 
    favorite: false,
    category: "Equity",
    volume: "3.1M"
  },
  { 
    id: 4, 
    name: "Bond Index", 
    ticker: "BNDX", 
    return: 2.1, 
    risk: "Low", 
    price: 102.00, 
    change: 0.3, 
    favorite: false,
    category: "Fixed Income",
    volume: "0.9M"
  },
  { 
    id: 5, 
    name: "Real Estate Trust", 
    ticker: "RET", 
    return: 8.7, 
    risk: "Medium", 
    price: 78.40, 
    change: 1.5, 
    favorite: true,
    category: "REIT",
    volume: "1.2M"
  },
  { 
    id: 6, 
    name: "Healthcare Fund", 
    ticker: "HCF", 
    return: 14.2, 
    risk: "High", 
    price: 135.20, 
    change: 3.1, 
    favorite: false,
    category: "Equity",
    volume: "1.7M"
  },
];

// Sample recommendations
const recommendations = [
  { 
    id: 1, 
    name: "Healthcare Growth Fund", 
    return: 14.2, 
    desc: "Strong 1Y growth, steady performance", 
    risk: "Medium",
    rating: 4.8
  },
  { 
    id: 2, 
    name: "Global Tech ETF", 
    return: 9.3, 
    desc: "Diversified global technology exposure", 
    risk: "High",
    rating: 4.5
  },
  { 
    id: 3, 
    name: "Sustainable Energy Fund", 
    return: 18.6, 
    desc: "Focus on renewable energy companies", 
    risk: "High",
    rating: 4.7
  },
];

// Colors for charts
const COLORS = ['#3457d5', '#ff7a18', '#10b981', '#8b5cf6', '#ec4899', '#06b6d4'];

function Market() {
  const [timeFilter, setTimeFilter] = useState("1Y");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [riskFilter, setRiskFilter] = useState("All");
  const [assets, setAssets] = useState(marketAssets);
  const [activeTab, setActiveTab] = useState("all");
  const [sortBy, setSortBy] = useState("return");

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setAssets(assets.map(asset => 
      asset.id === id ? { ...asset, favorite: !asset.favorite } : asset
    ));
  };

  // Filter assets based on search and filters
  const filteredAssets = assets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         asset.ticker.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "All" || asset.category === categoryFilter;
    const matchesRisk = riskFilter === "All" || asset.risk === riskFilter;
    
    return matchesSearch && matchesCategory && matchesRisk;
  });

  // Sort assets
  const sortedAssets = [...filteredAssets].sort((a, b) => {
    if (sortBy === "return") return b.return - a.return;
    if (sortBy === "price") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  // Categories for filter
  const categories = ["All", "Equity", "ETF", "Fixed Income", "REIT"];
  const riskLevels = ["All", "Low", "Medium", "High"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Market Overview 📊</h1>
            <p className="text-gray-600 mt-2">Explore investment opportunities and market trends</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search funds, stocks..."
                className="pl-10 pr-4 py-3 w-full md:w-64 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
              />
            </div>
            <div className="hidden md:block">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-xl px-4 py-3 text-sm bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="return">Sort by Return</option>
                <option value="price">Sort by Price</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Market Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold">Top Gainer 🚀</h2>
                <p className="text-2xl font-bold mt-2">Healthcare Fund</p>
                <p className="text-green-100">+14.2%</p>
              </div>
              <div className="text-3xl">
                <FaRocket />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold">Top Loser 📉</h2>
                <p className="text-2xl font-bold mt-2">Green Energy Stock</p>
                <p className="text-red-100">-3.4%</p>
              </div>
              <div className="text-3xl">
                <FaArrowDown />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold">Most Active 🔥</h2>
                <p className="text-2xl font-bold mt-2">Tech Growth Fund</p>
                <p className="text-blue-100">2.5M volume</p>
              </div>
              <div className="text-3xl">
                <FaFire />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-4"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex overflow-x-auto scrollbar-hide">
              {["all", "equity", "etf", "fixed", "reit", "favorites"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap mr-2 ${
                    activeTab === tab
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab === "all" ? "All Assets" : 
                   tab === "favorites" ? "Favorites" : 
                   tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <FaFilter className="text-gray-400" />
                <select 
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              
              <select 
                value={riskFilter}
                onChange={(e) => setRiskFilter(e.target.value)}
                className="border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white"
              >
                {riskLevels.map(risk => (
                  <option key={risk} value={risk}>{risk} Risk</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Market Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white shadow-lg rounded-2xl overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <FaCoins className="text-blue-600" /> Market Assets
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 uppercase text-xs">
                    <th className="px-4 py-3 text-left"></th>
                    <th className="px-4 py-3 text-left">Name</th>
                    <th className="px-4 py-3 text-left">Ticker</th>
                    <th className="px-4 py-3 text-left">Category</th>
                    <th className="px-4 py-3 text-right">1Y Return</th>
                    <th className="px-4 py-3 text-center">Risk</th>
                    <th className="px-4 py-3 text-right">Price</th>
                    <th className="px-4 py-3 text-right">Change</th>
                    <th className="px-4 py-3 text-center">Volume</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {sortedAssets.map((asset, i) => (
                      <motion.tr
                        key={asset.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, delay: i * 0.05 }}
                        className="border-b hover:bg-blue-50 transition-colors duration-200"
                      >
                        <td className="px-4 py-3">
                          <button 
                            onClick={() => toggleFavorite(asset.id)}
                            className="text-lg text-gray-400 hover:text-red-500 transition-colors"
                          >
                            {asset.favorite ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                          </button>
                        </td>
                        <td className="px-4 py-3 font-medium">{asset.name}</td>
                        <td className="px-4 py-3 text-gray-500">{asset.ticker}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                            {asset.category}
                          </span>
                        </td>
                        <td className={`px-4 py-3 text-right font-semibold ${
                          asset.return >= 0 ? "text-green-600" : "text-red-600"
                        }`}>
                          {asset.return >= 0 ? "+" : ""}{asset.return}%
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            asset.risk === "Low"
                              ? "bg-green-100 text-green-700"
                              : asset.risk === "Medium"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}>
                            {asset.risk}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">${asset.price.toFixed(2)}</td>
                        <td className={`px-4 py-3 text-right font-semibold ${
                          asset.change >= 0 ? "text-green-600" : "text-red-600"
                        }`}>
                          {asset.change >= 0 ? "+" : ""}{asset.change}%
                        </td>
                        <td className="px-4 py-3 text-right text-gray-500">{asset.volume}</td>
                        <td className="px-4 py-3 text-right">
                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-md"
                          >
                            Invest
                          </motion.button>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Charts and Recommendations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Market Trends Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white shadow-lg rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FaChartLine className="text-blue-600" /> Market Trends
              </h2>
              <div className="flex gap-2">
                {["1D", "1W", "1M", "1Y", "All"].map((filter) => (
                  <motion.button
                    key={filter}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setTimeFilter(filter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
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
                <XAxis dataKey="time" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '8px', 
                    border: 'none', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    backgroundColor: '#fff'
                  }}
                />
                <Area type="monotone" dataKey="market" stroke="#9ca3af" fill="#f3f4f6" fillOpacity={0.2} />
                <Line
                  type="monotone"
                  dataKey="portfolioA"
                  stroke="#3457d5"
                  strokeWidth={3}
                  dot={{ r: 4, strokeWidth: 2, stroke: "#3457d5", fill: "#fff" }}
                  activeDot={{ r: 8, stroke: "#3457d5", strokeWidth: 2, fill: "#fff" }}
                />
                <Line
                  type="monotone"
                  dataKey="portfolioB"
                  stroke="#ff7a18"
                  strokeWidth={3}
                  dot={{ r: 4, strokeWidth: 2, stroke: "#ff7a18", fill: "#fff" }}
                  activeDot={{ r: 8, stroke: "#ff7a18", strokeWidth: 2, fill: "#fff" }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-blue-600"></div>
                <span>Portfolio A</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-orange-500"></div>
                <span>Portfolio B</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-gray-400"></div>
                <span>Market Average</span>
              </div>
            </div>
          </motion.div>

          {/* Recommendations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <FaStar className="text-yellow-500" /> Recommended Investments
            </h2>
            
            {recommendations.map((rec, i) => (
              <motion.div
                key={rec.id}
                whileHover={{ y: -5 }}
                className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-orange-500"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{rec.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{rec.desc}</p>
                    
                    <div className="flex items-center gap-4 mt-3">
                      <span className={`text-lg font-bold ${
                        rec.return >= 0 ? "text-green-600" : "text-red-600"
                      }`}>
                        {rec.return >= 0 ? "+" : ""}{rec.return}%
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        rec.risk === "Low"
                          ? "bg-green-100 text-green-700"
                          : rec.risk === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}>
                        {rec.risk} Risk
                      </span>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400" />
                        <span className="text-sm text-gray-600 ml-1">{rec.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-md"
                  >
                    Invest Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Market Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-6 shadow-xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Market Summary</h2>
              <p className="text-blue-100 mt-2">S&P 500 gained 1.2% today. Tech stocks lead the rally.</p>
            </div>
            <button className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-xl transition-all">
              <FaSync className="mr-1" /> Refresh Data
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Market;