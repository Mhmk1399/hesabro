"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiChevronDown } from "react-icons/fi";

export default function ScrollNav() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Navigation items corresponding to components in app/page.tsx
  const navItems = [
    { id: "industry-solutions", label: "راهکارهای صنعتی" },
    { id: "solutions", label: "راهکارها" },
    { id: "innovation-section", label: "بخش نوآوری" },
    { id: "industry-insights", label: "بینش‌های صنعتی" },
  ];

  // Check if scroll arrows should be shown
  const checkScrollArrows = () => {
    if (!scrollContainerRef.current || isMobile) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  // Check if device is mobile
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    // Initial mobile check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    // Function to handle scroll
    const handleScroll = () => {
      // Show nav when scrolled past 20px
      if (window.scrollY > 20) {
        setVisible(true);
      } else {
        setVisible(false);
        // Close dropdown when scrolling back to top
        setIsDropdownOpen(false);
      }

      // Determine active section based on scroll position
      const sections = navItems
        .map((item) => {
          const element = document.getElementById(item.id);
          if (element) {
            return {
              id: item.id,
              offsetTop: element.offsetTop - 100, // Offset for better highlighting
              height: element.offsetHeight,
            };
          }
          return null;
        })
        .filter(Boolean);

      const currentPosition = window.scrollY + 100;

      for (const section of sections) {
        if (
          section &&
          currentPosition >= section.offsetTop &&
          currentPosition < section.offsetTop + section.height
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();
    checkScrollArrows();

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Add scroll event listener to the horizontal scroll container
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer && !isMobile) {
      scrollContainer.addEventListener("scroll", checkScrollArrows);
      // Initial check
      checkScrollArrows();

      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollArrows);
      };
    }
  }, [isMobile]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120, // Offset to account for navbar height
        behavior: "smooth",
      });

      // Close dropdown after selection on mobile
      if (isMobile) {
        setIsDropdownOpen(false);
      }
    }
  };

  // Scroll the nav horizontally
  const scrollNav = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 200;
    const currentScroll = scrollContainerRef.current.scrollLeft;

    scrollContainerRef.current.scrollTo({
      left:
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

  // Get active section label
  const getActiveSectionLabel = () => {
    const activeItem = navItems.find((item) => item.id === activeSection);
    return activeItem ? activeItem.label : "انتخاب بخش";
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 right-0 left-0 z-40 bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100"
          dir="rtl"
        >
          <div className="container max-w-7xl mx-auto px-4 relative">
            {/* Mobile Dropdown */}
            {isMobile ? (
              <div ref={dropdownRef} className="py-3 relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between bg-green-50 text-green-800 px-5 py-3 rounded-lg shadow-sm"
                >
                  <span className="font-medium">{getActiveSectionLabel()}</span>
                  <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 left-0 mt-1 bg-white rounded-lg shadow-xl border border-green-100 z-50 overflow-hidden"
                    >
                      {navItems.map((item) => (
                        <motion.button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-right px-5 py-3 transition-colors ${
                            activeSection === item.id
                              ? "bg-green-100 text-green-800 font-medium"
                              : "hover:bg-green-50 text-gray-700"
                          }`}
                          whileTap={{ backgroundColor: "rgba(0, 128, 0, 0.2)" }}
                        >
                          {item.label}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              // Desktop Horizontal Scroll
              <>
                {/* Left Arrow */}
                <AnimatePresence>
                  {showLeftArrow && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-green-50 text-green-700 rounded-full p-1 shadow-md z-10"
                      onClick={() => scrollNav("left")}
                      aria-label="Scroll left"
                    >
                      <FiChevronLeft size={24} />
                    </motion.button>
                  )}
                </AnimatePresence>

                {/* Right Arrow */}
                <AnimatePresence>
                  {showRightArrow && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-50 text-green-700 rounded-full p-1 shadow-md z-10"
                      onClick={() => scrollNav("right")}
                      aria-label="Scroll right"
                    >
                      <FiChevronRight size={24} />
                    </motion.button>
                  )}
                </AnimatePresence>

                <div
                  ref={scrollContainerRef}
                  className="flex items-center justify-start overflow-x-auto py-3 scrollbar-hide px-6"
                >
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={` px-5 py-2.5 mx-1.5 text-sm font-medium ${
                        activeSection === item.id
                          ? "border-green-600 border-b text-green-500"
                          : " text-green-800 "
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>

                {/* Gradient fades for better scroll indication */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/95 to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/95 to-transparent pointer-events-none"></div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
