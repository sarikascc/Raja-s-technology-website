
"use client";


import React from 'react';
import Link from 'next/link';
import {
  Search,
  ChevronRight,
  Calendar,
  Clock,
  User,
  ArrowRight,
  ChevronDown,
  Tag,
  Mail,
  Package,
  Sparkle,
  Sparkles,
  Settings,
  Zap,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ThreeDTilt } from '@/components/ui/three-d-tilt';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { blogPosts } from '@/lib/blogData';

export default function BlogPage() {


  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-[8%] pb-20 bg-[#020617] overflow-hidden relative ">
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          {/* Animated Glows */}
          <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-red-600/10 rounded-full blur-[100px] animate-pulse animation-delay-800"></div>
           <AnimatedBackground interactive={true} density={80} />
        </div>

        {/* Decorative Icons for Light Space - Subtle & Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Gear in top-left */}
          <div className="absolute top-[15%] left-[10%] text-rose-600/20 animate-spin-slow" >
            <Settings size={100} />
          </div>
          {/* Zap in bottom-center */}
          <div
            className="absolute bottom-[10%] right-[6%] text-rose-600/20 animate-floatFast z-[0]">
            <Zap size={100} />
          </div>

        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#e11d48_0%,transparent_50%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-white uppercase leading-tight tracking-tight"
          >
            Blog of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-orange-400">
              Raja's Technology
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base md:text-md text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Expert knowledge, industry updates, and innovative labeling solutions to help your <br /> business stay ahead.
          </motion.p>
        </div>


      </section>

      {/* Featured Blog Post */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
       <div className="absolute inset-0 z-0">

          {/* Dynamic Interactive Canvas Particles & Glow Orbs */}
          <AnimatedBackground interactive={true} density={80} />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
       
         

          <div className="absolute bottom -[5%] right-[5%] w-10 h-26 bg-blue-100/80 rounded-[10px] -rotate-[50deg] " />

          {/* Soft Green Rectangle */}
          <div

            className="absolute bottom-[5%] left-[15%] w-12 h-28 bg-green-100/60 rounded-[10px] -rotate-[40deg] animate-floatFast  "
          />

          {/* Small Peach Circle */}
          <div

            className="absolute top-[10%] left-[10%] w-12 h-22 bg-orange-100/50 rounded-[20px]  animate-spin-slow"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-black text-slate-950 uppercase tracking-tight">Featured Story</h2>
            <div className="h-1 flex-grow mx-8 bg-gray-200 rounded-full hidden md:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="w-full lg:w-1/2 h-[300px] lg:h-[500px] overflow-hidden relative">
              <Link href={`/blog/${blogPosts[0].id}`} className="block w-full h-full">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="absolute top-6 left-6 pointer-events-none">
                <span className="px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-lg">
                  {blogPosts[0].category}
                </span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <div className="flex items-center gap-4 text-gray-400 text-xs mb-4 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><Calendar size={14} className="text-red-600" /> {blogPosts[0].date}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} className="text-red-600" /> {blogPosts[0].readTime}</span>
              </div>
              <Link href={`/blog/${blogPosts[0].id}`}>
                <h3 className="text-3xl lg:text-4xl font-black text-slate-950 mb-6 leading-tight group-hover:text-red-600 transition-colors">
                  {blogPosts[0].title}
                </h3>
              </Link>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center text-white font-bold text-xs uppercase tracking-tighter">
                    RK
                  </div>
                  <span className="text-sm font-black text-slate-950 uppercase">{blogPosts[0].author}</span>
                </div>
                <Link href={`/blog/${blogPosts[0].id}`} className="inline-flex items-center gap-2 text-slate-950 font-black uppercase text-[10px] tracking-widest group/btn border-b-2 border-red-600 pb-1 hover:text-red-600 transition-colors">
                  Read Story <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Blog Content Grid */}
      <section className="py-20 relative overflow-hidden">
     
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          {/* Soft Green Rectangle */}
          <div
            className="absolute bottom-[10%] left-[15%] w-12 h-28 bg-green-100/60 rounded-[10px] -rotate-[20deg] animate-floatFast  "
          />
          <div
            className="absolute top-[30%] left-[90%] w-20 h-10 bg-pink-200/30 rounded-[5px]  animate-floatSlow "
          />
       
          <div
            className="absolute top-[30%] left-[10%] w-20 h-20 bg-blue-300/20 rounded-full  animate-floatSlow  "
          />
        
          <div className="absolute bottom-60 right-[10%] text-yellow-500/20 animate-floatSlow" >
            <Sparkles size={80} />
          </div>
        </div>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">


            {/* Articles Grid */}
            <div className="w-full ">
              <div

                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {blogPosts.slice(1).map((post) => (
                  <ThreeDTilt
                    key={post.id}
                    maxTilt={12}
                    scale={1.03}
                    className="group bg-white rounded-[10px] overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-56 overflow-hidden relative">
                        <Link href={`/blog/${post.id}`} className="block w-full h-full">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </Link>
                        <div className="absolute top-4 left-4 pointer-events-none">
                          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-red-600 text-[10px] font-black uppercase tracking-widest rounded-lg shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-4 text-gray-400 text-[10px] mb-4 font-black uppercase tracking-[0.2em]">
                          <span className="flex items-center gap-1.5"><Calendar size={12} className="text-red-600" /> {post.date}</span>
                          <span className="flex items-center gap-1.5"><Clock size={12} className="text-red-600" /> {post.readTime}</span>
                        </div>
                        <Link href={`/blog/${post.id}`}>
                          <h3 className="text-xl font-black text-slate-950 mb-4 leading-tight group-hover:text-red-600 transition-colors">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-gray-500 text-xs mb-6 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-slate-950 font-black uppercase text-[10px] tracking-widest group/btn border-b-2 border-red-600 pb-1 hover:text-red-600 transition-colors">
                          Read Story <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </ThreeDTilt>
                ))}
              </div>

                
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 px-4 relative overflow-hidden">
        {/* Dynamic floating particles */}
        <AnimatedBackground interactive={true} density={40} />
            {/* Floating Decorative Icons for White Space - Subtle & Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

         
          <div className="absolute top-[10%] right-[5%] text-rose-600/10 animate-floatSlow" >
            <CheckCircle size={70} />
          </div>
      
      
          <div
            className="absolute top-[10%] left-[45%] w-40 h-10 bg-yellow-100/50 rounded-full  animate-floatFast  z-[1]"
          />
        </div>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden group border border-gray-100"
          >
         

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-3xl font-black text-gray-900 mb-6 relative z-10 uppercase tracking-wider"
            >
              Need Custom Labeling Solutions?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-600 text-md mb-10 max-w-xl mx-auto relative z-10 font-medium leading-relaxed"
            >
              Join 500+ global brands trust Raja's Technology for precision printing and quality manufacturing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 relative z-10"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white font-bold uppercase tracking-wide text-[12px] rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
              >
                Get a Quote
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/applications"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-900 font-bold uppercase tracking-wide text-[12px] rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
              >
                Our Industries
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
