"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const insights = [
  {
    id: 1,
    title: "آینده بانکداری دیجیتال در ایران",
    description:
      "بررسی روندهای نوظهور در صنعت بانکداری و چگونگی آماده‌سازی بانک‌ها برای تحول دیجیتال.",
    href: "/insights/digital-banking-future",
    image: "/assets/images/sap1.jpg",
  },
  {
    id: 2,
    title: "چالش‌های زنجیره تأمین در صنعت خودروسازی",
    description:
      "راهکارهای نوین برای غلبه بر چالش‌های زنجیره تأمین در صنعت خودروسازی ایران.",
    href: "/insights/automotive-supply-chain",
    image: "/assets/images/sap2.jpg",
  },
  {
    id: 3,
    title: "هوش مصنوعی در صنعت نفت و گاز",
    description:
      "کاربردهای هوش مصنوعی در بهینه‌سازی عملیات و کاهش هزینه‌ها در صنعت نفت و گاز.",
    href: "/insights/ai-in-oil-gas",
    image: "/assets/images/sap3.webp",
  },
];

const IndustryInsights = () => {
  return (
    <motion.div
      className="mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      dir="rtl"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-12 text-center">
        بینش‌های صنعتی
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2">
        {insights.map((insight) => (
          <motion.div
            key={insight.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group"
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={insight.image}
                alt={insight.title}
                width={2000}
                height={2000}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
            </div>

            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                {insight.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {insight.description}
              </p>
              <Link href={insight.href}>
                <span className="text-green-600 hover:text-green-800 text-sm font-medium inline-flex items-center group-hover:underline">
                  <span>ادامه مطلب</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4  transform rotate-180 transition-transform group-hover:-translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <motion.button
          className="px-6 py-3 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          مشاهده همه بینش‌ها
        </motion.button>
      </div>
    </motion.div>
  );
};

export default IndustryInsights;
