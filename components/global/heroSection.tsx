"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IndustrySolutions() {
  return (
    <section
      className={`py-16 px-6 md:px-12 flex flex-col max-w-7xl mx-auto md:flex-row gap-3 items-center justify-between`}
    >
      {/* Text Content */}
      <motion.div
        className="md:w-1/2 space-y-6 text-center md:text-right"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          راهکارهای صنعتی از SAP
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          راهکارهای صنعتی ما به حل چالش‌های پیچیده کسب و کار و تحول دیجیتال
          شرکت‌ها در سراسر جهان کمک می‌کند
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button className="bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition">
            درخواست نسخه نمایشی
          </button>
          <button className="border border-green-600 text-emerald-600 font-semibold px-6 py-3 rounded-md hover:bg-green-700 hover:text-white transition">
            مشاهده تمام صنایع
          </button>
        </motion.div>
      </motion.div>

      {/* Image with Triangular Mask */}
      <motion.div
        className="mt-10 md:mt-0 md:w-1/2 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <svg
          viewBox="0 0 500 250"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <clipPath id="triangle-clip" clipPathUnits="objectBoundingBox">
              <polygon points="0,0 1,0 0,1" />
            </clipPath>
          </defs>
          <foreignObject
            width="100%"
            height="100%"
            clipPath="url(#triangle-clip)"
          >
            <div className="w-full h-full relative">
              <Image
                src="/assets/images/hero.webp" // replace with your image path
                alt="کارگران صنعتی"
                fill
                className="object-cover"
              />
            </div>
          </foreignObject>
        </svg>
      </motion.div>
    </section>
  );
}
