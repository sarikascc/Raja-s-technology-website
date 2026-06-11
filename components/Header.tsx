"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Applications', href: '/applications' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    // { name: 'Contact', href: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
        ? "bg-white/10 backdrop-blur-lg shadow-xl"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-full mx-auto px-6 lg:px-10">

        {/* Main Header */}
        <div className="relative flex items-center justify-between h-[80px]">


          {/* Center Menu */}
          <nav className="hidden lg:flex items-center  gap-2 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative group px-5 py-3 text-[14px] font-semibold
                    uppercase tracking-[1px] 
                    transition-all duration-200 hover:scale-105
                    ${isActive
                      ? "text-red-500"
                      : scrolled
                        ? "text-gray-900 hover:text-red-500"
                        : "text-white hover:text-red-400"
                    }
                  `}
                >
                  {/* Animated underline on hover */}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-red-500 rounded-full transition-all duration-300 group-hover:w-4/5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          {/* Left Logo */}
          <div className="flex items-center">
            <Link href="/" className="group relative ">


              {/* Logo Box */}
              <div className="relative bg-white px-6 py-2 rounded-[10px] shadow-lg shadow-red-200 border-b-4 border-red-500 top-[42px] ">
                <img
                  src="/logo.png"
                  alt="Raja's Technology"
                  className="h-[70px] w-auto object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* Right Button */}
          <div className="flex items-center">
            <Link
              href="/contact"
              className="px-7 py-3 text-sm font-bold bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Get a Quote
            </Link>
          </div>

        </div>
      </div>
    </motion.header>
  );
}
