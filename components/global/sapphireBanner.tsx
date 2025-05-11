"use client";

import { FaCalendarAlt } from "react-icons/fa";

export default function SapphireBanner() {
  return (
    <div
      dir="rtl"
      className={`border-emerald-700 border rounded-xl px-6 py-4 md:py-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white `}
    >
      {/* Left Section: Title + Text */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-center md:text-right w-full md:w-auto">
        <h3 className="text-xl font-semibold text-green-700">SAP سفایر</h3>
        <p className="text-sm md:text-base max-w-xl text-green-700">
          کاوش کنید که چگونه راه‌حل‌ها و خدمات تحول کسب‌وکار SAP به تسریع پذیرش
          فناوری و حداکثرسازی بازگشت سرمایه کمک می‌کند.
        </p>
      </div>

      {/* Right Section: CTA */}
      <button className="flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
        <FaCalendarAlt size={18} />
        ثبت‌نام اکنون
      </button>
    </div>
  );
}
