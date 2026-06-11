"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { AnimatedBackground } from './ui/animated-background';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-t border-white/5"
    >
      <div className="absolute inset-0 z-0">

        {/* Glow Orbs */}
        <AnimatedBackground interactive={true} density={100} />
      </div>
      {/* Background Effects */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-120px] left-[-120px] w-[280px] h-[280px] bg-red-500/20 rounded-full blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[-140px] right-[-100px] w-[320px] h-[320px] bg-pink-500/10 rounded-full blur-[120px]"
      />

      {/* Top Accent Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="h-[3px] bg-gradient-to-r from-red-600 via-pink-500 to-red-600"
      />

      <div className="relative max-w-full mx-auto px-6 lg:px-10 py-10 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">

          {/* Company Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1"
          >
            <div className="flex items-center">
              <Link href="/" className="group relative">

                {/* Glow */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-all duration-500"
                />

                {/* Logo */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                  className="relative bg-white px-5 py-3 rounded-[14px] shadow-md shadow-red-200 border-b-4 border-red-500"
                >
                  <img
                    src="/logo.png"
                    alt="Raja's Technology"
                    className="h-[70px] w-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-7 max-w-[440px]"
            >
              <p className="text-gray-400 text-[15px] leading-[25px]">
                Raja&apos;s Technology is a trusted manufacturer of premium printed labels,
                delivering innovative, durable, and high-quality labeling solutions for
                packaging, branding, barcode systems, garments, pharmaceuticals, food,
                cosmetics, and industrial applications worldwide.
              </p>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Applications', href: '/applications' },
                { name: 'About Us', href: '/about' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-red-500 transition-all duration-300 group-hover:w-3" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">
              Contact Us
            </h4>

            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex gap-3 text-sm text-gray-400"
              >
                <MapPin size={17} className="text-red-500 shrink-0 mt-0.5" />
                <span>
                  Plot No 18, Basement, Anant Business Park,
                  Kiran Chowk Rd, Shivshakti Society, Punagam,
                  Varachha, Surat, Gujarat 395010, India
                </span>
              </motion.li>

              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm text-gray-400"
              >
                <Phone size={17} className="text-red-500 shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-red-400 transition-colors"
                >
                  +91 98765 43210
                </a>
              </motion.li>

              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm text-gray-400"
              >
                <Mail size={17} className="text-red-500 shrink-0" />
                <a
                  href="mailto:info@rajastechnology.co.in"
                  className="hover:text-red-400 transition-colors"
                >
                  info@rajastechnology.co.in
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">
              Follow Us
            </h4>

            <ul className="flex gap-3 flex-wrap">
              {[
                {
                  icon: <FaFacebook size={17} />,
                  href: 'https://www.facebook.com/',
                  label: 'Facebook',
                  color: 'hover:bg-[#1877F2] hover:border-[#1877F2]',
                },
                {
                  icon: <BsInstagram size={17} />,
                  href: 'https://www.instagram.com/',
                  label: 'Instagram',
                  color:
                    'hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:border-pink-500',
                },
              ].map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    className={`group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white ${link.color} shadow-md hover:shadow-lg transition-all duration-300`}
                  >
                    <motion.span
                      whileHover={{
                        scale: 1.2,
                        rotate: 6,
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {link.icon}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3"
        >
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Raja&apos;s Technology. All rights reserved.
          </p>

          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-gray-500 text-xs italic"
          >
            Crafting Identity with Precision
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}