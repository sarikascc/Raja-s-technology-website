"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Tag,
  Search,
  ArrowRight,
  ExternalLink,
  Layers,
  CheckCircle2,
  ChevronRight,
  Filter,
  Maximize2,
  Settings,
  Zap,
  Sparkles,
  Sparkle
} from 'lucide-react';
import { AnimatedBackground } from '@/components/ui/animated-background';

const categories = [
  "All",
  "Pharmaceutical",
  "Garment",
  "Food & Beverage",
  "Industrial",
  "Cosmetic",
  "Barcode"
];

const portfolioItems = [
  {
    id: 1,
    title: "Eco-Friendly Garment Labels",
    category: "Garment",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
    description: "Sustainable cotton-based labels for garment .",
    tags: ["Sustainable", "Cotton", "Premium"]
  },
  {
    id: 2,
    title: "High-Res Barcode Labels",
    category: "Barcode",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800",
    description: "Ultra-sharp scanning reliability for inventory management.",
    tags: ["Tracking", "Precision", "Industrial"]
  },
  {
    id: 3,
    title: "Medical Grade Phrama Labels",
    category: "Pharmaceutical",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    description: "Compliant and durable labels for sensitive medical products.",
    tags: ["Safety", "Compliance", "Durable"]
  },
  {
    id: 4,
    title: "Luxury Cosmetic Packaging",
    category: "Cosmetic",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    description: "Gold-foiled, water-resistant labels for beauty products.",
    tags: ["Luxury", "Foil", "Waterproof"]
  },
  {
    id: 5,
    title: "Frozen Food Safety Labels",
    category: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    description: "Temperature-resistant labeling for cold storage environments.",
    tags: ["Cold Storage", "Food Safety"]
  },
  {
    id: 6,
    title: "Heavy Duty Industrial Labels",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
    description: "Chemical-resistant labels for machinery and equipment.",
    tags: ["Chemical Proof", "Engineered"]
  },
  {
    id: 7,
    title: "Interactive QR Code Labels",
    category: "Barcode",
    image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800",
    description: "Dynamic QR codes for digital product authentication.",
    tags: ["Smart Labels", "QR Tech"]
  },
  {
    id: 8,
    title: "Premium Wine Bottle Labels",
    category: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=800",
    description: "Textured paper labels with metallic finishes.",
    tags: ["Textured", "Metallic", "Bottle"]
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#020617] overflow-hidden">
  {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          {/* Animated Glows */}
          <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-red-600/10 rounded-full blur-[100px] animate-pulse animation-delay-800"></div>
           <AnimatedBackground interactive={true} density={80} />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          {/* Zap in bottom-center */}
          <div
            className="absolute bottom-[10%] right-[40%] text-rose-600/15 animate-floatFast z-[0]">
            <Zap size={100} />
          </div>


        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#e11d48_0%,transparent_50%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
           
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Portfolio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-400 text-sm max-w-2xl mx-auto font-medium"
            >
              Explore our diverse range of high-performance labeling solutions across industries.
              Precision, quality, and innovation in every sticker.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40  backdrop-blur-md border-b border-gray-100 py-6">

        {/* Decorative Icons for White Space - Subtle & Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">


          <div className="absolute bottom-[5%] right-[15%] w-20 h-16 bg-red-200/30 rounded-[10px] -rotate-[-25deg] " />
          <div
            className="absolute top-[55%] left-[30%] w-30 h-30 bg-blue-100/30 rounded-full  animate-floatSlow "
          />

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap ${activeCategory === cat
                    ? 'bg-red-600 text-white  shadow-red-600/20'
                    : 'text-gray-500 hover:text-red-600 hover:bg-red-50'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white relative">
         <div className="absolute inset-0 z-0">

          {/* Dynamic Interactive Canvas Particles & Glow Orbs */}
          <AnimatedBackground interactive={true} density={80} />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

        

          {/* Soft Green Rectangle */}
          <div

            className="absolute top-[20%] left-[5%] w-12 h-28 bg-green-100/60 rounded-[20px] -rotate-[10deg] animate-floatFast  "
          />

          {/* Small Peach Circle */}
          <div
            className="absolute top-[10%] right-[30%] w-22 h-22 bg-orange-100/50 rounded-full  animate-floatSlow "
          />

          <div
            className="absolute top-[40%] left-[90%] w-20 h-20 bg-pink-200/30 rounded-full  animate-floatSlow "
          />
   
        

          <div className="absolute bottom-60 left-[10%] text-yellow-500/20 animate-floatSlow" >
            <Sparkles size={80} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                  
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                      <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em]">{item.category}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-black text-slate-950 uppercase tracking-wider mb-3 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                    {/* <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-red-500" />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">ISO Certified</span>
                      </div>
                      <ArrowRight size={20} className="text-gray-300 group-hover:text-red-500 group-hover:translate-x-2 transition-all" />
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-40">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-6">
                <Search size={40} className="text-gray-300" />
              </div>
              <h3 className="text-2xl font-black text-slate-950 uppercase mb-2">No items found</h3>
              <p className="text-gray-500">Try adjusting your filters or search keywords.</p>
              <button
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="mt-8 text-red-600 font-bold uppercase tracking-widest hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Floating Decorative Icons for White Space - Subtle & Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div
            className="absolute top-[10%] left-[45%] w-40 h-10 bg-yellow-100/50 rounded-full  animate-floatFast  z-[1]"
          />
        </div>
        

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[4rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden group border border-gray-100"
          >
         

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-wider mb-8 relative z-10 "
            >
              Inspired by our <span className="text-red-500">Work?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-600 text-md mb-10 max-w-2xl mx-auto relative z-10 font-medium leading-relaxed"
            >
              Let's create something exceptional for your brand. Get a custom quote for your labeling needs today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 relative z-10"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-red-600 text-white text-sm font-black uppercase tracking-wide rounded-xl hover:bg-red-700 transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                Start a Project
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 bg-gray-100 text-gray-900 text-sm font-black uppercase tracking-wide rounded-xl hover:bg-gray-200 transition-all"
              >
                Our Process
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Decorative Shapes - Similar to Homepage */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[-5%] w-64 h-64 bg-red-100/30 rounded-full blur-3xl animate-floatSlow"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-64 h-64 bg-blue-100/20 rounded-full blur-3xl animate-floatFast"></div>
      </div>
    </main>
  );
}
