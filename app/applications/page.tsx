"use client";

import {
  Tag,
  Barcode,
  Package,
  Truck,
  Smartphone,
  FlaskConical,
  Coffee,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Settings,
  Zap,
  Bandage,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ThreeDTilt } from '@/components/ui/three-d-tilt';
import { AnimatedBackground } from '@/components/ui/animated-background';

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const itemFade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};


export default function ApplicationsPage() {
  const applications = [
    {
      title: "Product Branding",
      desc: "Enhance product appearance and improve brand recognition with attractive custom labels.",
      icon: <Bandage className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Barcode & Inventory Management",
      desc: "Used for inventory tracking, barcode scanning, and warehouse management.",
      icon: <Barcode className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Packaging Information",
      desc: "Display important product information including ingredients, manufacturing details, pricing, and instructions.",
      icon: <Package className="w-8 h-8" />,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Shipping & Logistics",
      desc: "Used in courier services, shipping boxes, warehouse tracking, and dispatch management.",
      icon: <Truck className="w-8 h-8" />,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Garment Industry",
      desc: "Labels for clothing brands, size tags, washing instructions, and branding.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Pharmaceutical Products",
      desc: "Medicine labels with dosage information, expiry dates, and safety instructions.",
      icon: <FlaskConical className="w-8 h-8" />,
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      title: "Food & Beverage Industry",
      desc: "Food packaging labels with nutritional information and product details.",
      icon: <Coffee className="w-8 h-8" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Cosmetic Products",
      desc: "Used for beauty and cosmetic product branding and packaging.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "bg-rose-50 text-rose-600"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
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

        {/* Decorative Icons for Light Space - Subtle & Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Gear in top-left */}
          <div className="absolute top-[10%] left-[5%] md:top-[15%] md:left-[10%] text-rose-600/10 animate-spin-slow" >
            <Settings className="w-16 h-16 md:w-24 md:h-24" />
          </div>
          {/* Zap in bottom-center */}
          <div
            className="absolute bottom-[10%] right-[5%] md:right-[6%] text-rose-600/10 animate-floatFast z-[0]">
            <Zap className="w-16 h-16 md:w-24 md:h-24" />
          </div>

        </div>


        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#e11d48_0%,transparent_50%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pt-8 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight mb-6 md:mb-8 leading-[1.1]"
          >
            Applications of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-orange-400">
              Printed Labels
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Printed labels are used in multiple industries for branding, identification, packaging, tracking, and product information.
          </motion.p>
        </div>


      </section>

      {/* Grid Section */}
      <section className="relative py-20 bg-white overflow-hidden">

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[10%] left-[4%] text-red-600/10 animate-floatFast"
          >
            <Barcode size={80} />
          </div>

          <div
            className="absolute bottom-[15%] left-[3%] w-20 h-10 bg-green-300/20 rounded-[10px] -rotate-[10deg] animate-floatFast  "
          />
          <div
            className="absolute top-1/2 right-[30%] w-22 h-22 bg-orange-100/50 rounded-full  animate-floatSlow "
          />
          <div className="absolute top-[5%] right-[50%] w-40 h-10 bg-blue-100/30 rounded-[2.5rem] -rotate-[10deg] " />
          <div
            className="absolute bottom-[20%] right-[5%] text-blue-600/10 animate-floatSlow"
          >
            <Package size={80} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div

            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {applications.map((app, i) => (
              <ThreeDTilt
                key={i}
                maxTilt={15}
                scale={1.05}
                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-300 h-full flex flex-col justify-between"
              >
                <div>
                  <div className={`w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {app.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{app.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {app.desc}
                  </p>
                </div>
              </ThreeDTilt>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-20 bg-gray-50 px-4 relative overflow-hidden">

        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div
            className="absolute top-[-5%] left-[10%] text-rose-600/10 animate-floatFast ">
            <Zap size={100} />
          </div>


          <div
            className="absolute top-[10%] left-[45%] w-40 h-10 bg-yellow-100/50 rounded-full  animate-floatFast  z-[1]"
          />
        </div>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden group border border-gray-100"
          >

            <h2 className="text-3xl md:text-3xl font-black text-gray-900 mb-6 relative z-10 uppercase tracking-wider">Need a Specialized Solution?</h2>
            <p className="text-gray-600 mb-10 text-sm max-w-xl mx-auto relative z-10 font-medium leading-relaxed">We provide custom labeling for any unique industry requirement. Let&apos;s build your brand together.</p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-black uppercase tracking-wide text-sm rounded-xl hover:bg-red-700 transition-all shadow-xl hover:scale-105 active:scale-95 relative z-10">
              Discuss Your Project <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
