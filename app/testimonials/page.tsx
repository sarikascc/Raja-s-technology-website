"use client";

import {
  CheckCircle2,
  Star,
  Users,
  Package,
  ThumbsUp,
  Headphones,
  Settings,
  Zap,
  Sparkle,
  Calendar,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThreeDTilt } from '@/components/ui/three-d-tilt';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { TestimonialStack, type Testimonial } from '@/components/ui/glass-testimonial-swiper';


const testimonials = [
  {
    name: "Rajesh Patel",
    company: "Shree Foods Packaging",
    industry: "Food Packaging",
    review: "The print quality and adhesive strength are excellent. Raja’s Technology always delivers on time and supports us with custom label requirements.",
    rating: 5,
    location: "Ahmedabad, Gujarat",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Neha Shah",
    company: "Glow Cosmetics",
    industry: "Cosmetics",
    review: "We needed premium labels for our cosmetic products, and the final output exceeded our expectations. Highly recommended for branding.",
    rating: 5,
    location: "Surat, Gujarat",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Amit Verma",
    company: "FreshMart Retail",
    industry: "Retail Products",
    review: "Very professional service and affordable pricing. Their barcode and product labels are sharp, durable, and easy to scan.",
    rating: 5,
    location: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Pooja Mehta",
    company: "Herbal Care India",
    industry: "Healthcare",
    review: "Their team understands custom requirements perfectly. We received waterproof and long-lasting labels exactly as requested.",
    rating: 5,
    location: "Vadodara, Gujarat",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

void testimonials;

const stackTestimonialsData: Testimonial[] = [
  {
    id: 1,
    initials: "RP",
    name: "Rajesh Patel",
    role: "Shree Foods Packaging | Ahmedabad",
    quote: "The print quality and adhesive strength are excellent. Raja's Technology always delivers on time and supports us with custom label requirements.",
    tags: [
      { text: "FEATURED", type: "featured" },
      { text: "Food Packaging", type: "default" }
    ],
    stats: [
      { icon: Package, text: "Bulk labels" },
      { icon: Calendar, text: "2 years" }
    ],
    avatarGradient: "linear-gradient(135deg, #e11d48, #f97316)"
  },
  {
    id: 2,
    initials: "NS",
    name: "Neha Shah",
    role: "Glow Cosmetics | Surat",
    quote: "We needed premium labels for our cosmetic products, and the final output exceeded our expectations. Highly recommended for branding.",
    tags: [
      { text: "Cosmetics", type: "default" },
      { text: "Premium Finish", type: "featured" }
    ],
    stats: [
      { icon: Star, text: "5 star" },
      { icon: CheckCircle2, text: "Verified" }
    ],
    avatarGradient: "linear-gradient(135deg, #ec4899, #d946ef)"
  },
  {
    id: 3,
    initials: "AV",
    name: "Amit Verma",
    role: "FreshMart Retail | Mumbai",
    quote: "Very professional service and affordable pricing. Their barcode and product labels are sharp, durable, and easy to scan.",
    tags: [
      { text: "Retail", type: "default" },
      { text: "Barcode", type: "default" }
    ],
    stats: [
      { icon: ThumbsUp, text: "Helpful" },
      { icon: ShieldCheck, text: "Durable" }
    ],
    avatarGradient: "linear-gradient(135deg, #2563eb, #06b6d4)"
  },
  {
    id: 4,
    initials: "PM",
    name: "Pooja Mehta",
    role: "Herbal Care India | Vadodara",
    quote: "Their team understands custom requirements perfectly. We received waterproof and long-lasting labels exactly as requested.",
    tags: [
      { text: "Healthcare", type: "default" },
      { text: "Waterproof", type: "featured" }
    ],
    stats: [
      { icon: Users, text: "Custom support" },
      { icon: Headphones, text: "Quick response" }
    ],
    avatarGradient: "linear-gradient(135deg, #10b981, #059669)"
  }
];

const stats = [
  { label: "Happy Clients", value: "500+", icon: <Users size={24} /> },
  { label: "Label Orders Completed", value: "10,000+", icon: <Package size={24} /> },
  { label: "Client Satisfaction", value: "98%", icon: <ThumbsUp size={24} /> },
  { label: "Customer Support", value: "24/7", icon: <Headphones size={24} /> }
];

export default function TestimonialPage() {


  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-[8%] py-[4%] bg-[#020617] overflow-hidden">
       {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          {/* Animated Glows */}
          <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-red-600/10 rounded-full blur-[100px] animate-pulse animation-delay-800"></div>
           <AnimatedBackground interactive={true} density={80} />
        </div>


        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Gear in top-left */}
          <div className="absolute bottom-[15%] right-[3%] text-rose-600/20 animate-spin-slow" >
            <Settings size={100} />
          </div>
          {/* Zap in bottom-center */}
          <div
            className="absolute top-[40%] left-[2%] text-rose-600/20 animate-floatFast z-[0]">
            <Zap size={100} />
          </div>

        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#e11d48_0%,transparent_50%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-8"
            >
              Trusted by Businesses <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-orange-400">Across Industries</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm text-gray-400 max-w-3xl mx-auto mb-12 font-medium"
            >
              See what our clients say about the quality, durability, and service of Raja’s Technology <br />label solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* Featured Testimonials (Glass Stack) */}
      <section className="py-20 bg-gradient-to-br from-white via-rose-30 to-orange-20 overflow-hidden relative">
       {/* Immersive Background */}
    
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-28 -left-20 w-80 h-80 bg-red-300/35 rounded-full blur-[110px]" />
          <div className="absolute top-1/3 -right-24 w-96 h-96 bg-orange-300/30 rounded-full blur-[110px]" />
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-300/25 rounded-full blur-[110px]" />
        </div>

        {/* Decorative Icons for White Space - Subtle & Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Sparkles scattered */}
          <div className="absolute top-[5%] left-[5%] text-yellow-600/10 animate-floatSlow z-[1]">
            <Sparkles size={80} />
          </div>

          <div className="absolute bottom-[10%] right-[15%] w-20 h-20 bg-blue-100/30 rounded-[15px] -rotate-[30deg]" />

          {/* Soft Green Rectangle */}
          <div className="absolute bottom-[15%] left-[18%] w-20 h-20 bg-green-300/20 rounded-[15px] -rotate-[20deg] animate-floatFast" />

          <div className="absolute top-[15%] right-[1%] w-20 h-20 bg-purple-100/50 rounded-[20px] animate-floatSlow" />

          {/* Small Peach Circle */}
          <div className="absolute top-[10%] left-[40%] w-20 h-10 bg-pink-100/50 rounded-full animate-floatSlow" />

        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-3 relative z-10">
          <div className="grid grid-cols-1  gap-12 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex justify-center"
            >

              <div className="relative z-10 w-full flex justify-center">
                <TestimonialStack
                  testimonials={stackTestimonialsData}
                  autoplay
                  autoplayDelay={2000}
                  pauseOnHover
                />

              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Statistics Section */}
      <section className="py-20 bg-[#111827] text-white relative overflow-hidden">
       <div className="absolute inset-0 z-0">

          {/* Dynamic Interactive Canvas Particles & Glow Orbs */}
          <AnimatedBackground interactive={true} density={80} />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Gear in top-left */}
          <div className="absolute top-[15%] left-[3%] text-rose-600/15 animate-spin-slow" >
            <Settings size={100} />
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-4">Our Customer Satisfaction</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <ThreeDTilt maxTilt={15} scale={1.05} className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-red-600/10 hover:border-red-500/50 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 mx-auto bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-black mb-2">{stat.value}</div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{stat.label}</div>
                  </div>
                </ThreeDTilt>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 bg-gray-50 px-4 relative overflow-hidden">
     
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

        
          <div className="absolute top-[10%] right-[5%] text-rose-600/10 animate-floatSlow" >
            <CheckCircle2 size={80} />
          </div>
          <div
            className="absolute bottom-[15%] left-[3%] w-20 h-10 bg-green-300/20 rounded-[10px] -rotate-[10deg] animate-floatFast  "
          />

      
          <div
            className="absolute top-[10%] left-[45%] w-40 h-10 bg-yellow-100/50 rounded-full  animate-floatFast  z-[1]"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl border border-gray-100"
        >
         

          <h2 className="text-3xl md:text-3xl font-black text-gray-900 mb-6 relative z-10 uppercase tracking-wider">
            Need Premium Printed Labels <br className="hidden md:block" /> for Your Business?
          </h2>
          <p className="text-gray-600 text-md mb-10 max-w-xl mx-auto relative z-10 font-medium leading-relaxed">
            Get customized label solutions with high-quality printing, strong adhesive materials, and attractive finishing.
          </p>

          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link href="/contact" className="px-8 py-4 bg-red-600 text-white font-black rounded-xl hover:bg-red-700 hover:scale-105 transition-all shadow-xl uppercase tracking-wide text-sm">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
