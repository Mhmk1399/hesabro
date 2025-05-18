import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  // Define all link arrays for better organization
  const quickLinks = [
    "مرکز اعتماد حسابرو",
    "یافتن راه حل",
    "صنایع",
    "یافتن شریک تجاری",
    "نسخه‌های آزمایشی و دمو",
    "یافتن خدمات",
  ];

  const trendingLinks = [
    "حسابرو سفیر",
    "مجموعه تجاری حسابرو",
    "ابر داده تجاری حسابرو",
    "هوش مصنوعی تجاری حسابرو",
    "پایداری",
    "اکوسیستم شرکا",
  ];

  const aboutLinks = [
    "اطلاعات شرکت",
    "دایرکتوری جهانی",
    "روابط سرمایه‌گذاران",
    "فرصت‌های شغلی",
    "اخبار و مطبوعات",
    "رویدادها",
    "داستان‌های مشتریان",
    "خبرنامه",
  ];

  const siteInfoLinks = [
    "حریم خصوصی",
    "شرایط استفاده",
    "اطلاعیه قانونی",
    "حق نشر",
    "علامت تجاری",
    "بیانیه کوکی",
    "تنظیمات کوکی",
  ];

  return (
    <footer className="bg-gray-100 text-gray-800 text-sm font-sahel" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* اطلاعات تماس */}
        <div className="space-y-4">
          <Image
            src="/logo/sap.svg"
            alt="لوگوی حسابرو"
            className="h-6"
            width={50}
            height={50}
          />
          <div>
            <p className="font-semibold">آلمان</p>
            <p>۰۸۰۰/۵ ۳۴ ۳۴ ۲۴</p>
          </div>
          <div>
            <p className="font-semibold">ایالات متحده</p>
            <p>۱-۸۰۰-۸۷۲-۱۷۲۷+</p>
            <Link href="#" className="text-blue-600 underline">
              شماره‌های محلی کشورها
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail className="text-xl" />
            <Link href="#" className="hover:underline">
              تماس با ما
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z" />
            </svg>
            <Link href="#" className="hover:underline">
              گفتگوی آنلاین
            </Link>
          </div>
        </div>

        {/* لینک‌های سریع */}
        <div>
          <h4 className="font-semibold mb-2">لینک‌های سریع</h4>
          <ul className="space-y-1">
            {quickLinks.map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* پرطرفدار */}
        <div>
          <h4 className="font-semibold mb-2">پرطرفدار</h4>
          <ul className="space-y-1">
            {trendingLinks.map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* درباره حسابرو */}
        <div>
          <h4 className="font-semibold mb-2">درباره حسابرو</h4>
          <ul className="space-y-1">
            {aboutLinks.map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* اطلاعات سایت */}
        <div>
          <h4 className="font-semibold mb-2">اطلاعات سایت</h4>
          <ul className="space-y-1">
            {siteInfoLinks.map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* نوار پایین */}
      <div className="bg-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center text-xs">
          <p>© ۱۴۰۴ حسابرو یا شرکت‌های وابسته. تمامی حقوق محفوظ است.</p>
          <div className="flex space-x-3 mt-2 md:mt-0">
            <Link href="#">
              <FaFacebookF className="hover:text-blue-600 mx-1" />
            </Link>
            <Link href="#">
              <FaYoutube className="hover:text-red-600 mx-1" />
            </Link>
            <Link href="#">
              <FaLinkedinIn className="hover:text-blue-700 mx-1" />
            </Link>
            <Link href="#">
              <FaInstagram className="hover:text-pink-600 mx-1" />
            </Link>
            <Link href="#">
              <MdEmail className="hover:text-gray-600 mx-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* دکمه شناور چت */}
      <div className="fixed bottom-4 left-4">
        <button className="bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 hover:bg-green-700 transition-all">
          تماس با ما
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
