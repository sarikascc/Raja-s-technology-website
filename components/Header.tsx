"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Applications', href: '/applications' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled || mobileOpen
            ? "bg-white/10 backdrop-blur-lg shadow-xl"
            : "bg-transparent"
          }`}
      >
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-10">
          {/* Header Row */}
          <div className="relative flex h-[70px] lg:h-[80px] items-center justify-between">

            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="group relative">
                <div
                  className="
                    relative bg-white
                    px-3 sm:px-4 lg:px-6
                    py-2
                    rounded-xl
                    border-b-4 border-red-500
                    shadow-lg shadow-red-200/50
                    top-0
                    lg:translate-y-10
                    transition-all duration-300
                    group-hover:-translate-y-1
                    group-hover:shadow-xl
                  "
                >
                  <img
                    src="/logo.png"
                    alt="Raja's Technology"
                    className="
                      h-10
                      sm:h-12
                      md:h-14
                      lg:h-[70px]
                      w-auto
                      object-contain
                      transition-transform duration-300
                      group-hover:scale-105
                    "
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:flex">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      relative group px-5 py-3 text-[14px]
                      font-semibold uppercase tracking-[1px]
                      transition-all duration-200 hover:scale-105
                      ${isActive
                        ? "text-red-500"
                        : scrolled
                          ? "text-gray-900 hover:text-red-500"
                          : "text-white hover:text-red-400"
                      }
                    `}
                  >
                    <span
                      className="
                        absolute bottom-1 left-1/2
                        h-[2px] w-0
                        -translate-x-1/2
                        rounded-full bg-red-500
                        transition-all duration-300
                        group-hover:w-4/5
                      "
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Desktop Button */}
              <Link
                href="/contact"
                className="
                  hidden lg:inline-flex
                  px-7 py-3
                  text-sm font-bold
                  bg-red-600 text-white
                  rounded-full
                  shadow-lg
                  transition-all duration-300
                  hover:bg-red-700
                  hover:shadow-xl
                  hover:scale-105
                  active:scale-95
                "
              >
                Get a Quote
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="
                  flex lg:hidden
                  h-10 w-10 items-center justify-center
                  rounded-lg border border-white/30
                  bg-red-600/50 backdrop-blur-md
                  transition-all duration-200
                  hover:bg-red-600/70
                  active:scale-95
                "
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.svg
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay + Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-in Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 35 }}
              className="
                fixed top-0 right-0 z-50
                h-full w-[75vw] max-w-[320px]
                flex flex-col
                bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950
                shadow-2xl
                lg:hidden
              "
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <img src="/logo.png" alt="Raja's Technology" className="h-9 w-auto object-contain brightness-0 invert" />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-lg bg-white/10
                    text-white
                    hover:bg-white/20
                    transition-colors duration-200
                  "
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col px-4 pt-4 pb-2 gap-1 flex-1 overflow-y-auto">
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.07 * i, duration: 0.25 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`
                          flex items-center gap-3
                          px-4 py-3.5 rounded-xl
                          text-[15px] font-semibold uppercase tracking-wide
                          transition-all duration-200
                          ${isActive
                            ? "bg-red-600/20 text-red-400 border border-red-500/30"
                            : "text-white/80 hover:bg-white/8 hover:text-white border border-transparent hover:border-white/10"
                          }
                        `}
                      >
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-red-500 flex-shrink-0" />
                        )}
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.25 }}
                className="px-6 py-6 border-t border-white/10"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex w-full items-center justify-center
                    px-6 py-3.5
                    text-sm font-bold uppercase tracking-wider
                    bg-red-600 text-white
                    rounded-full
                    shadow-lg shadow-red-900/40
                    transition-all duration-300
                    hover:bg-red-700 hover:shadow-xl
                    active:scale-95
                  "
                >
                  Get a Quote
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
