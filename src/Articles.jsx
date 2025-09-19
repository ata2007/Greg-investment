import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaArrowRight,
  FaBookmark,
  FaRegBookmark,
  FaShare,
  FaClock,
  FaUser,
  FaFilter,
  FaChartLine,
  FaPiggyBank,
  FaGlobe,
  FaBitcoin,
  FaUserTie
} from "react-icons/fa";

// Sample articles with more details
const articles = [
  {
    id: 1,
    title: "Top 10 Investment Strategies for 2025",
    category: "Investing",
    desc: "Discover the proven strategies investors are using to grow wealth in 2025. Learn how to diversify your portfolio effectively.",
    image: "https://source.unsplash.com/600x400/?finance,stocks",
    readTime: "8 min read",
    author: "Sarah Johnson",
    date: "Sep 15, 2025",
    featured: true,
    saved: false
  },
  {
    id: 2,
    title: "The Rise of Green Energy Funds",
    category: "Sustainable Investing",
    desc: "How eco-friendly investments are reshaping global markets and creating new opportunities for conscious investors.",
    image: "https://source.unsplash.com/600x400/?green,energy,solar",
    readTime: "6 min read",
    author: "Michael Chen",
    date: "Sep 12, 2025",
    featured: false,
    saved: true
  },
  {
    id: 3,
    title: "Crypto vs Stocks: Where to Invest in 2025?",
    category: "Cryptocurrency",
    desc: "A deep dive into the pros and cons of crypto vs. traditional markets. Expert analysis on risk management.",
    image: "https://source.unsplash.com/600x400/?crypto,bitcoin,blockchain",
    readTime: "10 min read",
    author: "David Martinez",
    date: "Sep 10, 2025",
    featured: false,
    saved: false
  },
  {
    id: 4,
    title: "Retirement Planning Made Simple",
    category: "Retirement",
    desc: "A step-by-step guide to securing your financial future. Essential strategies for every age group.",
    image: "https://source.unsplash.com/600x400/?retirement,planning",
    readTime: "7 min read",
    author: "Emily Wilson",
    date: "Sep 8, 2025",
    featured: false,
    saved: false
  },
  {
    id: 5,
    title: "Understanding Market Volatility",
    category: "Market Analysis",
    desc: "How to navigate turbulent markets and turn volatility into opportunity with smart strategies.",
    image: "https://source.unsplash.com/600x400/?chart,graph,analysis",
    readTime: "9 min read",
    author: "Robert Kim",
    date: "Sep 5, 2025",
    featured: false,
    saved: true
  },
  {
    id: 6,
    title: "The Future of AI in Investment",
    category: "Technology",
    desc: "How artificial intelligence is revolutionizing portfolio management and investment decisions.",
    image: "https://source.unsplash.com/600x400/?ai,robot,technology",
    readTime: "11 min read",
    author: "Jennifer Lee",
    date: "Sep 3, 2025",
    featured: false,
    saved: false
  },
];

// Categories for filtering
const categories = [
  { id: "all", name: "All Topics", icon: <FaFilter /> },
  { id: "investing", name: "Investing", icon: <FaChartLine /> },
  { id: "sustainable", name: "Sustainable", icon: <FaGlobe /> },
  { id: "crypto", name: "Crypto", icon: <FaBitcoin /> },
  { id: "retirement", name: "Retirement", icon: <FaUserTie /> },
  { id: "technology", name: "Technology", icon: <FaPiggyBank /> },
];

function Articles() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [savedArticles, setSavedArticles] = useState([2, 5]);
  const [showFilters, setShowFilters] = useState(false);

  // Toggle saved article
  const toggleSaveArticle = (id) => {
    if (savedArticles.includes(id)) {
      setSavedArticles(savedArticles.filter(articleId => articleId !== id));
    } else {
      setSavedArticles([...savedArticles, id]);
    }
  };

  // Filter articles based on search and category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase()) ||
                         article.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "all" || 
                          article.category.toLowerCase().includes(activeCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  // Get featured article
  const featuredArticle = articles.find(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Knowledge Center <span className="text-blue-600">📚</span>
            </h1>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Expert insights, market analysis, and investment strategies to help you make informed decisions.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles, topics, or authors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="absolute right-3 top-3 text-gray-400 hover:text-blue-600 transition-colors"
            >
              <FaFilter />
            </button>
          </div>
        </motion.div>

        {/* Category Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-2xl shadow-lg p-4 overflow-hidden"
            >
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                      activeCategory === category.id
                        ? "bg-blue-100 text-blue-700 shadow-inner"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category.icon}
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured Article */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white shadow-xl rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-72 md:h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold mb-2">
                  {featuredArticle.category}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-600 mb-6">{featuredArticle.desc}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <FaUser className="text-gray-400" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="text-gray-400" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  <span>{featuredArticle.date}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-md"
                  >
                    Read Article <FaArrowRight />
                  </motion.button>
                  
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => toggleSaveArticle(featuredArticle.id)}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      {savedArticles.includes(featuredArticle.id) ? 
                        <FaBookmark className="text-blue-600" /> : 
                        <FaRegBookmark />
                      }
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <FaShare />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Articles Grid Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-between"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Latest Articles
          </h2>
          <span className="text-gray-500">
            {filteredArticles.length} articles found
          </span>
        </motion.div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredArticles.filter(a => !a.featured).map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white shadow-lg rounded-2xl overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-blue-600 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                      {article.category}
                    </span>
                  </div>
                  <button 
                    onClick={() => toggleSaveArticle(article.id)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {savedArticles.includes(article.id) ? 
                      <FaBookmark className="text-blue-600" /> : 
                      <FaRegBookmark />
                    }
                  </button>
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.desc}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <FaUser className="text-gray-400" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock className="text-gray-400" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <span>{article.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="text-blue-600 font-medium flex items-center gap-1 group-hover:text-blue-700 transition-colors"
                    >
                      Read More <FaArrowRight className="text-xs mt-0.5" />
                    </motion.button>
                    
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <FaShare size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 text-center shadow-xl"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Stay Informed with Our Weekly Digest</h3>
            <p className="text-blue-100 mb-6">
              Get the latest market insights, investment strategies, and exclusive content delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 rounded-xl text-gray-800 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-3 rounded-xl font-semibold shadow-md"
              >
                Subscribe Now
              </motion.button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Articles;