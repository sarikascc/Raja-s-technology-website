"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Sparkle,
  Sparkles,
  Settings,
  Zap,
  CheckCircle,
  Tag,
  Package,
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/blogData';

export default function BlogDetailPage() {
  const params = useParams();
  const postId = params ? Number(params.id) : null;
  const post = blogPosts.find((p) => p.id === postId);

  // Fallback if post is not found
  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-slate-950 text-white p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md p-10 bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl"
        >
          <BookOpen size={64} className="text-red-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl font-black uppercase mb-4 tracking-tight">Story Not Found</h2>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed">
            The blog story you are looking for might have been moved or is currently unavailable.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </motion.div>
      </div>
    );
  }

  // Get related/other posts (excluding the current one)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Premium Hero Header Section */}
      <section className="relative py-20 pb-28 bg-[#020617] overflow-hidden ">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[8%] text-rose-600/20 animate-spin-slow">
            <Settings size={90} />
          </div>
          <div className="absolute bottom-[15%] right-[10%] text-rose-600/25 animate-floatFast">
            <Zap size={80} />
          </div>
          <div className="absolute top-[10%] right-[30%] text-yellow-500/10 animate-floatSlow">
            <Sparkles size={60} />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#e11d48_0%,transparent_50%)] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Animated Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-lg text-xs font-black uppercase tracking-wider border border-white/10 transition-all group duration-300"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </motion.div>

        

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-4xl font-black text-white leading-tight tracking-tight uppercase max-w-5xl mb-8 justi"
          >
            {post.title}
          </motion.h1>

          {/* Article Info Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6 text-gray-400 text-xs font-bold uppercase tracking-wider border-t border-white/10 pt-6 max-w-5xl"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center font-black text-xs">
                {post.authorInitials}
              </div>
              <span className="text-white">{post.author}</span>
            </div>
            <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-red-500" />
              <span>{post.date}</span>
            </div>
            <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-red-500" />
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 relative bg-gray-50/50">
        {/* Subtle Decorative Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-14 h-38 bg-blue-100/40 rounded-[20px] -rotate-[30deg] pointer-events-none" />
          <div className="absolute top-[40%] right-[3%] w-22 h-32 bg-orange-100/50 rounded-[20px] animate-floatSlow -rotate-[60deg]" />
          <div className="absolute bottom-[30%] left-[8%] text-red-600/10 animate-floatSlow">
            <Sparkles size={80} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Post Contents */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              
              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full h-[280px] sm:h-[450px] overflow-hidden rounded-[2rem] shadow-xl border border-gray-200/60 relative group"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
              </motion.div>

              {/* Story Content Block */}
              <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white p-8 sm:p-12 rounded-[2rem] border border-gray-100 shadow-sm text-slate-700 text-md sm:text-lg leading-relaxed flex flex-col gap-6"
              >
                {post.content.map((paragraph, index) => {
                  if (index === 0) {
                    return (
                      <p key={index} className="first-letter:text-5xl first-letter:font-black first-letter:text-red-600 first-letter:mr-3 first-letter:float-left first-letter:h-12 font-medium text-slate-800 text-[1.05rem]">
                        {paragraph}
                      </p>
                    );
                  }
                  return (
                    <p key={index}>
                      {paragraph}
                    </p>
                  );
                })}

                {/* Interactive Quote Block */}
                <div className="my-6 p-6 sm:p-8 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 rounded-r-[1.5rem]">
                  <p className="italic text-slate-900 font-bold text-base sm:text-lg leading-relaxed">
                    "Precision label engineering is the invisible thread that binds supply chain integrity, consumer security, and visual branding."
                  </p>
                  <span className="block mt-4 text-xs font-black text-red-600 uppercase tracking-widest">
                    — Raja's Technology
                  </span>
                </div>

                <p className="text-slate-600 text-sm italic border-t border-gray-100 pt-8 mt-4">
                  For tailored label consultation or volume printing assessments, get in touch with our expert packaging design desk.
                </p>
              </motion.article>

       
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-10">
              
              {/* Author Details Block */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm text-center flex flex-col items-center gap-4 group"
              >
                <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center text-white font-black text-lg shadow-md border-2 border-red-500 group-hover:scale-105 transition-transform duration-300">
                  {post.authorInitials}
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-950 uppercase tracking-tight">{post.author}</h4>
                  <p className="text-xs text-red-600 font-bold uppercase tracking-wider mt-1">{post.authorRole}</p>
                </div>
                <div className="h-px w-full bg-gray-100 my-2"></div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Regular contributor and domain specialist focused on technical innovation, standards alignment, and industrial integration at Raja's Technology.
                </p>
              </motion.div>

              {/* Highlights Block */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-[2rem] border border-slate-800 shadow-xl text-white relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 text-rose-500/10 pointer-events-none">
                  <Package size={150} />
                </div>
                <h4 className="text-base font-black uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                  <CheckCircle size={18} className="text-red-500" /> Key Highlights
                </h4>
                <ul className="flex flex-col gap-4">
                  {post.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-3 items-start text-xs text-gray-300 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Related/Other Stories */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm"
              >
                <h4 className="text-base font-black text-slate-950 uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
                  <BookOpen size={18} className="text-red-600" /> Read More
                </h4>
                <div className="flex flex-col gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="group/item flex gap-4 items-center focus:outline-none"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] text-red-600 font-bold uppercase tracking-widest">
                          {relatedPost.category}
                        </span>
                        <h5 className="text-xs font-black text-slate-950 line-clamp-2 leading-snug group-hover/item:text-red-600 transition-colors">
                          {relatedPost.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Conversion Focus CTA Section */}
      <section className="py-20 bg-gray-50 px-4 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-[-5%] left-[10%] text-rose-600/10 animate-floatFast">
            <Zap size={100} />
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
            <h2 className="text-3xl md:text-3xl font-black text-gray-900 mb-6 relative z-10 uppercase tracking-wider">
              Need Custom Labeling Solutions?
            </h2>
            <p className="text-gray-600 text-md mb-10 max-w-xl mx-auto relative z-10 font-medium leading-relaxed">
              Join 500+ global brands that trust Raja's Technology for precision printing, durable manufacturing, and next-generation smart tracking.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-wide text-xs rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
              >
                Get a Quote
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/applications"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-bold uppercase tracking-wide text-xs rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
              >
                Our Industries
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
