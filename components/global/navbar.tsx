"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { navItems } from "../../lib/componentsData";
import { ray } from "../../next-persian-fonts/ray";
import {
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaHome,
  FaChartLine,
  FaFileInvoice,
} from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Get icon for nav item
  const getNavIcon = (id: number) => {
    switch (id) {
      case 1:
        return <FaHome className="h-5 w-5" />;
      case 2:
        return <FaChartLine className="h-5 w-5" />;
      case 3:
        return <FaFileInvoice className="h-5 w-5" />;
      default:
        return <FaHome className="h-5 w-5" />;
    }
  };

  // Sidebar animation variants
  const sidebarVariants = {
    closed: { x: "-100%", opacity: 0.5 },
    open: { x: 0, opacity: 1 },
  };

  // Item animation variants
  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <div className={`${ray.variable} font-ray  top-0 z-50`} dir="rtl">
      {/* Main Navbar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-l from-green-900/95 via-green-800/95 to-green-900/95 shadow-lg"
            : "bg-gradient-to-l from-green-900 via-green-800 to-green-900"
        }`}
      >
        <div className=" mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-green-300 ml-2">
                    حسابرو
                  </span>
                  <span className="text-xs text-green-300 hidden sm:inline-block">
                    نسخه ۱.۲
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:block w-full">
              <ul className="flex justify-center items-center gap-2">
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ y: -2 }}
                  >
                    <Link href={item.href}>
                      <span className="text-green-100 hover:text-white font-medium transition-colors py-2 px-3">
                        {item.title}
                      </span>
                    </Link>
                    {hoveredItem === item.id && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute bottom-0 right-0 left-0 h-0.5 bg-green-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Search and User - Desktop */}
            <div className="hidden md:flex items-center space-x-reverse space-x-4">
              {/* Search Bar */}
              <motion.div
                className="relative"
                animate={{ width: searchFocused ? "260px" : "200px" }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="text"
                  placeholder="جستجو..."
                  className="w-full pr-10 pl-4 py-2 rounded-full border text-gray-200 bg-green-800/40 border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <div className="absolute right-3 top-2.5 text-green-400">
                  <FaSearch className="h-5 w-5" />
                </div>
              </motion.div>

              {/* Notifications */}
              <motion.button
                className="p-2 rounded-full bg-green-800/40 hover:bg-green-700/60 text-white relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IoNotifications className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </motion.button>

              {/* User Icon */}
              <motion.button
                className="p-2 rounded-full bg-green-800/40 hover:bg-green-700/60 text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaUser className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Burger Menu - Mobile */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleSidebar}
                className="p-2 rounded-md bg-green-800/40 hover:bg-green-700/60 text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaBars className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Sidebar with AnimatePresence for proper animation handling */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop with animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={toggleSidebar}
            />

            {/* Sidebar with animation */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-green-900 via-green-800/90 to-green-800/90 backdrop-blur-md z-50 shadow-xl overflow-hidden rounded-tr-2xl rounded-br-2xl"
            >
              {/* Scrollable content container */}
              <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-900/30">
                {/* Sidebar Header with animated gradient */}
                <motion.div
                  className="relative h-40 bg-gradient-to-br from-green-600 to-green-800 overflow-hidden"
                  initial={{ opacity: 0.5, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {/* Animated wave background */}
                  <div className="absolute inset-0 opacity-20">
                    <svg
                      className="absolute bottom-0 left-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        fill="none"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="2"
                        d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      />
                    </svg>
                  </div>

                  <div className="absolute top-4 right-4">
                    <motion.button
                      onClick={toggleSidebar}
                      className="p-2 rounded-full bg-green-800/40 hover:bg-green-700/60 text-blue-100"
                      whileHover={{ scale: 1.1, rotate: -90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTimes className="h-5 w-5" />
                    </motion.button>
                  </div>

                  <motion.div
                    className="absolute bottom-6 right-6 text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-green-300">
                      حسابرو
                    </h2>
                    <p className="text-green-200 text-sm">مدیریت مالی هوشمند</p>
                  </motion.div>
                </motion.div>

                <div className="px-6 py-4">
                  {/* User Profile - Mobile */}
                  <motion.div
                    className="flex items-center space-x-reverse space-x-3 mb-8 p-4 rounded-xl bg-green-800/40 hover:bg-green-700/60 text-green-100 border border-green-700/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="bg-green-700 rounded-full p-3">
                      <FaUser className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-green-100 font-medium block">
                        حساب کاربری
                      </span>
                      <span className="text-green-300/70 text-sm">
                        ورود / ثبت نام
                      </span>
                    </div>
                  </motion.div>

                  {/* Search Bar - Mobile */}
                  <motion.div
                    className="relative mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <input
                      type="text"
                      placeholder="جستجو..."
                      className="w-full pr-10 pl-4 py-3 rounded-xl border border-green-700/50 bg-green-800/30 text-green-50 placeholder-green-200/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    />
                    <div className="absolute right-3 top-3.5 text-green-200">
                      <FaSearch className="h-5 w-5" />
                    </div>
                  </motion.div>

                  {/* Navigation - Mobile */}
                  <nav>
                    <ul className="space-y-2">
                      {navItems.map((item, index) => (
                        <motion.li
                          key={item.id}
                          custom={index}
                          variants={itemVariants}
                          initial="closed"
                          animate="open"
                        >
                          <Link href={item.href}>
                            <motion.div
                              className="flex items-center py-3 px-4 text-green-100 hover:text-white rounded-xl hover:bg-green-700/40 transition-colors text-right"
                              whileHover={{
                                x: -5,
                                backgroundColor: "rgba(30, 64, 175, 0.4)",
                              }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="bg-green-800/60 p-2 rounded-lg mr-2">
                                {getNavIcon(item.id)}
                              </div>
                              <span className="mr-3">{item.title}</span>
                            </motion.div>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>

                  {/* Notifications in sidebar */}
                  <motion.div
                    className="mt-8 p-4 rounded-xl bg-green-800/30 border border-green-700/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-green-200 font-medium">اعلان‌ها</h3>
                      <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        3
                      </span>
                    </div>
                    <div className="space-y-2">
                      <motion.div
                        className="p-2 bg-green-800/40 rounded-lg text-sm text-green-100"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <p>گزارش مالی ماهانه آماده شد</p>
                        <span className="text-xs text-green-300/70 mt-1 block">
                          ۱۰ دقیقه پیش
                        </span>
                      </motion.div>
                      <motion.div
                        className="p-2 bg-green-800/40 rounded-lg text-sm text-green-100"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <p>یادآوری پرداخت صورتحساب</p>
                        <span className="text-xs text-green-300/70 mt-1 block">
                          ۲ ساعت پیش
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Quick Actions */}
                  <motion.div
                    className="mt-8 grid grid-cols-2 gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <motion.div
                      className="p-3 bg-green-800/30 rounded-xl border border-green-700/30 flex flex-col items-center justify-center"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(30, 64, 175, 0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaChartLine className="h-6 w-6 text-green-300 mb-2" />
                      <span className="text-sm text-green-100">گزارش مالی</span>
                    </motion.div>
                    <motion.div
                      className="p-3 bg-green-800/30 rounded-xl border border-green-700/30 flex flex-col items-center justify-center"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(30, 64, 175, 0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaFileInvoice className="h-6 w-6 text-green-300 mb-2" />
                      <span className="text-sm text-blue-100">
                        صورتحساب جدید
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Footer in sidebar */}
                  <motion.div
                    className="mt-12 pt-6 border-t border-green-700/30 text-green-300/70 text-sm text-right"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <p>© ۱۴۰۲ حسابرو</p>
                    <p className="mt-1">مدیریت مالی هوشمند در خدمت شما</p>
                    <div className="flex justify-between mt-4">
                      <span className="text-xs text-green-400 hover:text-green-300 cursor-pointer">
                        قوانین
                      </span>
                      <span className="text-xs text-green-400 hover:text-green-300 cursor-pointer">
                        حریم خصوصی
                      </span>
                      <span className="text-xs text-green-400 hover:text-green-300 cursor-pointer">
                        تماس با ما
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
