"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navItems } from "../../lib/componentsData";

// Sample navigation data with Persian text

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 w-full bg-gradient-to-b from-green-900 to-emerald-700 backdrop-blur-md z-50 shadow-lg rtl rounded-full "
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        {/* Navigation - Desktop */}
        <nav className="hidden md:block py-3 border-t border-green-700/30">
          <ul className="flex justify-center gap-6">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative"
              >
                <Link href={item.href}>
                  <span className="text-green-100 hover:text-emerald-300 font-medium transition-colors py-2 px-3 block">
                    {item.title}
                  </span>
                </Link>
                {hoveredItem === item.id && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute bottom-0 right-0 left-0 h-0.5 bg-emerald-400"
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
      </div>
    </motion.header>
  );
};

// SVG Icons with enhanced styling

export default Header;
