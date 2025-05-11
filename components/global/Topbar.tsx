"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "../../lib/componentsData";

const Topbar = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!setIsSidebarOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-between py-4 mx-16" dir="rtl">
        {/* Logo - Now on the right for RTL */}
        <motion.div
          className="flex-shrink-0 order-2 md:order-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">
            <div className="flex items-center">
              <span className="text-xl font-bold text-green-900 ml-2">
                حسابرو
              </span>
            
            </div>
          </Link>
        </motion.div>

        {/* Search and User - Desktop - Now on the left for RTL */}
        <div className="hidden md:flex items-center space-x-reverse space-x-4 order-1 md:order-2">
          {/* User Icon */}
          <motion.button
            className="p-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <UserIcon />
          </motion.button>

          {/* Search Bar */}
          <motion.div
            className="relative"
            initial={{ width: "200px" }}
            whileFocus={{ width: "300px" }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              placeholder="جستجو..."
              className="w-full pr-10 pl-4 py-2 rounded-full border text-gray-700 border-green-900 transition-all duration-300"
            />
            <div className="absolute right-3 top-2.5">
              <SearchIcon />
            </div>
          </motion.div>
        </div>

        {/* Burger Menu - Mobile - Now on the left for RTL */}
        <div className="md:hidden order-1">
          <motion.button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-green-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <BurgerIcon />
          </motion.button>
        </div>
      </div>
      {/* Mobile Sidebar - Now slides from left for RTL */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={toggleSidebar}
            />

            {/* Sidebar - Now on the left side */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-emerald-900/95 to-green-800/95 backdrop-blur-md z-50 shadow-xl"
              dir="rtl"
            >
              <div className="p-4 flex justify-start">
                <motion.button
                  onClick={toggleSidebar}
                  className="p-2 rounded-full bg-green-800/40 hover:bg-green-700/60 text-green-100"
                  whileHover={{ scale: 1.1, rotate: -90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CloseIcon />
                </motion.button>
              </div>

              <div className="px-6 py-4">
                {/* Search Bar - Mobile */}
                <div className="relative mb-8">
                  <input
                    type="text"
                    placeholder="جستجو..."
                    className="w-full pr-10 pl-4 py-3 rounded-full border border-green-700 bg-green-800/30 text-green-50 placeholder-green-200/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-3.5">
                    <SearchIcon />
                  </div>
                </div>

                {/* User - Mobile */}
                <motion.div
                  className="flex items-center space-x-reverse space-x-3 mb-8 p-3 rounded-lg bg-green-800/40 hover:bg-green-700/60 text-green-100"
                  whileHover={{ x: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <UserIcon />
                  <span className="text-green-100 font-medium">
                    حساب کاربری
                  </span>
                </motion.div>

                {/* Navigation - Mobile */}
                <nav>
                  <motion.ul
                    className="space-y-1"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    initial="hidden"
                    animate="show"
                  >
                    {navItems.map((item) => (
                      <motion.li
                        key={item.id}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          show: { opacity: 1, x: 0 },
                        }}
                      >
                        <Link href={item.href}>
                          <motion.span
                            className="block py-3 px-4 text-green-100 hover:text-white rounded-lg hover:bg-green-700/40 transition-colors text-right"
                            whileHover={{ x: -5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {item.title}
                          </motion.span>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </nav>

                {/* Footer in sidebar */}
                <motion.div
                  className="mt-12 pt-6 border-t border-green-700/30 text-green-300/70 text-sm text-right"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p>© ۱۴۰۲ حسابرو</p>
                  <p className="mt-1">لوکس در خدمت شما</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-emerald-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-emerald-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const BurgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-emerald-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-emerald-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default Topbar;
