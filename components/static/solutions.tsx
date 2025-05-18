"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaPlane,
  FaSeedling,
  FaCar,
  FaUniversity,
  FaFlask,
  FaShoppingCart,
  FaBuilding,
  FaShieldAlt,
  FaLandmark,
  FaMicrochip,
  FaGraduationCap,
  FaIndustry,
  FaUmbrella,
  FaMedkit,
  FaFilm,
  FaTree,
  FaMountain,
  FaOilCan,
  FaBriefcase,
  FaStore,
  FaSatelliteDish,
  FaPlaneArrival,
  FaBolt,
  FaWarehouse,
} from "react-icons/fa";

// Define industry solutions data

const industrySolutions = [
  {
    id: 1,
    title: "هوافضا و دفاع",
    description:
      "مدیریت شبکه‌های تأمین، مدیریت ریسک، تضمین پیوستگی و انطباق دیجیتال.",
    icon: <FaPlane />,
    href: "/solutions/aerospace-defense",
  },
  {
    id: 2,
    title: "کشاورزی",
    description:
      "تعامل با کشاورزان، ایجاد کشاورزی پایدار و زنجیره‌های تأمین انعطاف‌پذیر.",
    icon: <FaSeedling />,
    href: "/solutions/agribusiness",
  },
  {
    id: 3,
    title: "خودروسازی",
    description:
      "تحول در عملیات، افزایش چابکی و پاسخگویی به تقاضای متغیر مشتریان در حوزه حمل و نقل.",
    icon: <FaCar />,
    href: "/solutions/automotive",
  },
  {
    id: 4,
    title: "بانکداری",
    description: "بهبود عملیات، انعطاف‌پذیری و سودآوری، و ارتقای تجربه مشتری.",
    icon: <FaUniversity />,
    href: "/solutions/banking",
  },
  {
    id: 5,
    title: "صنایع شیمیایی",
    description:
      "پاسخگویی به پویایی‌های بازار با زنجیره‌های ارزش پایدار و چابکی استراتژیک.",
    icon: <FaFlask />,
    href: "/solutions/chemicals",
  },
  {
    id: 6,
    title: "محصولات مصرفی",
    description: "تسریع نوآوری برای جذب مصرف‌کنندگان و رشد سودآور و پایدار.",
    icon: <FaShoppingCart />,
    href: "/solutions/consumer-products",
  },
  {
    id: 7,
    title: "ساخت و ساز و املاک",
    description:
      "به حداکثر رساندن کارایی، دید و انعطاف‌پذیری برای ارائه پروژه‌های عالی.",
    icon: <FaBuilding />,
    href: "/solutions/construction-real-estate",
  },
  {
    id: 8,
    title: "دفاع و امنیت",
    description:
      "افزایش آمادگی ماموریت، تقویت زنجیره‌های تأمین و مدیریت ریسک‌های بحرانی.",
    icon: <FaShieldAlt />,
    href: "/solutions/defense-security",
  },
  {
    id: 9,
    title: "دولت",
    description:
      "بهینه‌سازی عملیات، بهبود انعطاف‌پذیری و دستیابی کارآمد به اهداف ماموریت.",
    icon: <FaLandmark />,
    href: "/solutions/government",
  },
  {
    id: 10,
    title: "فناوری پیشرفته",
    description:
      "پیشبرد نوآوری‌های اختلال‌زا، جریان‌های درآمدی پایدار و انعطاف‌پذیری عملیاتی.",
    icon: <FaMicrochip />,
    href: "/solutions/high-tech",
  },
  {
    id: 11,
    title: "آموزش عالی و تحقیقات",
    description:
      "ارائه انعطاف‌پذیری عملیاتی، بینش‌های داده‌محور و تجربیات نوآورانه.",
    icon: <FaGraduationCap />,
    href: "/solutions/higher-education",
  },
  {
    id: 12,
    title: "تولید صنعتی",
    description:
      "ارائه راه‌حل‌های نوآورانه، هماهنگ‌سازی شبکه‌های تأمین چابک و مقیاس‌پذیری عملیات.",
    icon: <FaIndustry />,
    href: "/solutions/industrial-manufacturing",
  },
  {
    id: 13,
    title: "بیمه",
    description:
      "ساده‌سازی عملیات، بهبود تجربه مشتری و محافظت بهتر از مشتریان.",
    icon: <FaUmbrella />,
    href: "/solutions/insurance",
  },
  {
    id: 14,
    title: "علوم زیستی و مراقبت‌های بهداشتی",
    description:
      "تسریع زمان ورود به بازار، زنجیره‌های تأمین انعطاف‌پذیر، انطباق و بینش‌های هوشمندتر.",
    icon: <FaMedkit />,
    href: "/solutions/life-science-healthcare",
  },
  {
    id: 15,
    title: "رسانه، ورزش و سرگرمی",
    description:
      "آزادسازی پتانسیل محتوا، افزایش رشد درآمد و ایجاد تعامل به یادماندنی.",
    icon: <FaFilm />,
    href: "/solutions/media-sports-entertainment",
  },
  {
    id: 16,
    title: "محصولات کارخانه‌ای",
    description:
      "اجرای زنجیره‌های تأمین انعطاف‌پذیر، بهینه‌سازی تولید، ارائه راه‌حل‌های متمایز.",
    icon: <FaTree />,
    href: "/solutions/mill-products",
  },
  {
    id: 17,
    title: "معدن",
    description:
      "افزایش انعطاف‌پذیری، کارایی، پایداری و رشد از معدن تا هیئت مدیره.",
    icon: <FaMountain />,
    href: "/solutions/mining",
  },
  {
    id: 18,
    title: "نفت، گاز و انرژی",
    description:
      "مدیریت بازارهای متنوع انرژی، مشارکت‌های پیچیده و دستیابی به انتشار صفر خالص.",
    icon: <FaOilCan />,
    href: "/solutions/oil-gas-energy",
  },
  {
    id: 19,
    title: "خدمات حرفه‌ای",
    description:
      "بهینه‌سازی عملیات و کارکنان، بهبود انعطاف‌پذیری و افزایش سودآوری.",
    icon: <FaBriefcase />,
    href: "/solutions/professional-services",
  },
  {
    id: 20,
    title: "خرده‌فروشی",
    description: "پیشبرد فروش مشتری‌محور، شبکه‌های تأمین شفاف و تجارت یکپارچه.",
    icon: <FaStore />,
    href: "/solutions/retail",
  },
  {
    id: 21,
    title: "مخابرات",
    description:
      "گسترش فراتر از اتصال، افزایش رشد درآمد و تقویت انعطاف‌پذیری عملیاتی.",
    icon: <FaSatelliteDish />,
    href: "/solutions/telecommunications",
  },
  {
    id: 22,
    title: "سفر و حمل و نقل",
    description:
      "انعطاف‌پذیری و سودآوری بیشتر، خشنودی مشتریان و کاهش هزینه‌های حمل و نقل.",
    icon: <FaPlaneArrival />,
    href: "/solutions/travel-transportation",
  },
  {
    id: 23,
    title: "خدمات شهری",
    description:
      "پشتیبانی از گذار انرژی، مدل‌های جدید و نیازهای مشتری و بهینه‌سازی عملیات.",
    icon: <FaBolt />,
    href: "/solutions/utilities",
  },
  {
    id: 24,
    title: "توزیع عمده",
    description:
      "فعال‌سازی رشد سودآور و زنجیره‌های تأمین انعطاف‌پذیر از طریق تحول.",
    icon: <FaWarehouse />,
    href: "/solutions/wholesale-distribution",
  },
];

const Solutions = () => {
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);

  return (
    <div className={` bg-white py-20`} dir="rtl">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            راه‌حل‌های صنعتی حسابرو
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ببینید چگونه برنامه‌های ERP ابری، هوش تجاری و داده‌های کسب و کار ما
            می‌توانند ارزش استثنایی برای سازمان شما ایجاد کنند.
          </p>
        </motion.div>

        {/* Hero Banner */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-24 bg-gradient-to-r from-green-900 to-green-700 h-96"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-opacity-60 flex items-center">
            <div className="w-full md:w-1/2 p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                راه‌حل‌های هوشمند برای هر صنعت
              </h3>
              <p className="text-blue-100 mb-8">
                با استفاده از راه‌حل‌های تخصصی حسابرو، کسب و کار خود را به سطح
                بالاتری ببرید و از رقبا پیشی بگیرید.
              </p>
              <motion.button
                className="px-8 py-3 bg-white text-green-700 rounded-lg font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                مشاوره رایگان
              </motion.button>
            </div>
          </div>

          {/* Abstract pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 800 800">
              <defs>
                <pattern
                  id="pattern"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="10" cy="10" r="1.5" fill="#fff" />
                </pattern>
              </defs>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#pattern)"
              />
            </svg>
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-gray-800 mb-12 text-center">
            صنایع تخصصی ما
          </h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-8 gap-y-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {industrySolutions.map((solution) => (
              <motion.div
                key={solution.id}
                className="relative group"
                onMouseEnter={() => setHoveredSolution(solution.id)}
                onMouseLeave={() => setHoveredSolution(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: solution.id * 0.03 }}
              >
                <div className="h-full flex flex-col transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-4 w-16 h-16 rounded-full flex items-center justify-center text-green-600 bg-green-50">
                    <div className="text-3xl">{solution.icon}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">
                    {solution.description}
                  </p>

                  {/* Link */}
                  <Link href={solution.href}>
                    <motion.div
                      className="inline-flex items-center text-green-600 hover:text-green-800 text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <span>کاوش راه‌حل‌ها</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1 transform rotate-180"
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
                    </motion.div>
                  </Link>

                  {/* Hover line effect */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300`}
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredSolution === solution.id ? "100%" : 0,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
