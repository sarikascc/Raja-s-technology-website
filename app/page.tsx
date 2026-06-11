"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  Layers,
  Package,
  Tag,
  Truck,
  Zap,
  ShieldCheck,
  Droplets,
  Palette,
  Search,
  FlaskConical,
  Coffee,
  Sparkles,
  Barcode,
  QrCode,
  PackageCheck,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Shirt,
  Utensils,
  Activity,
  Store,
  Factory,
  Settings,
  X
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { ThreeDTilt } from '@/components/ui/three-d-tilt';
import { AnimatedBackground } from '@/components/ui/animated-background';


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const manufacturingVideos = [
  {
    videoUrl: "https://www.shutterstock.com/shutterstock/videos/4036473961/preview/stock-footage-warehouse-worker-scanning-barcode-labels-on-parcels-for-inventory-update.mp4",
    thumbnail: "/banner1.png"
  },
  {
    videoUrl: "https://www.shutterstock.com/shutterstock/videos/4070126901/preview/stock-footage-person-hands-and-box-with-thank-you-label-for-small-business-logistics-or-delivery-closeup.mp4",
    thumbnail: "/banner2.png"
  },
  {
    videoUrl: "https://www.shutterstock.com/shutterstock/videos/3832780627/preview/stock-footage-seoul-korea-may-automated-labeling-machine-applies-printed-qr-code-stickers-onto-cards-on.mp4",
    thumbnail: "/banner1.png"
  },
  {
    videoUrl: "https://www.shutterstock.com/shutterstock/videos/1027216289/preview/stock-footage-the-factory-production-paper-moscow-factory.mp4",
    thumbnail: "/banner2.png"
  },
  {
    videoUrl: "https://www.shutterstock.com/shutterstock/videos/1090932471/preview/stock-footage-close-up-shot-of-newspaper-production-on-a-conveyor-belt-offset-printing-on-a-complex-technical.mp4",
    thumbnail: "/banner1.png"
  },
  {
    videoUrl: "https://www.shutterstock.com/shutterstock/videos/3835386161/preview/stock-footage-vertical-video-asian-employee-applying-shipping-labels-and-scanning-tracking-info-registering-the.mp4",
    thumbnail: "/banner2.png"
  },
];

const videoCarouselSlides = [
  ...manufacturingVideos,
  ...manufacturingVideos,
  ...manufacturingVideos,
];
const videoCardWidth = 500;
const videoLoopStartIndex = manufacturingVideos.length;
const videoLoopEndIndex = manufacturingVideos.length * 2;

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeVideoSlide, setActiveVideoSlide] = useState(videoLoopStartIndex);
  const [isVideoLoopResetting, setIsVideoLoopResetting] = useState(false);

  useEffect(() => {

    if (activeVideo || isVideoLoopResetting) return;

    const interval = setInterval(() => {
      setActiveVideoSlide((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeVideo, activeVideoSlide, isVideoLoopResetting]);

  useEffect(() => {
    if (!isVideoLoopResetting) return;

    const frameId = window.requestAnimationFrame(() => {
      setIsVideoLoopResetting(false);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [isVideoLoopResetting]);

  const goToVideoSlide = (index: number) => {
    setActiveVideoSlide(index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section / Main Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-20">
        {/* Decorative Icons for Light Space - Subtle & Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Gear in top-left */}
          <div className="absolute top-[15%] left-[10%] text-rose-600/15 animate-spin-slow" >
            <Settings size={100} />
          </div>
          {/* Zap in bottom-center */}
          <div
            className="absolute bottom-[10%] right-[6%] text-rose-600/15 animate-floatFast z-[0]">
            <Zap size={100} />
          </div>
          <div
            className="absolute top-[35%] left-[35%] text-rose-600/15 animate-floatFast">
            <Search size={80} />
          </div>

        </div>
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#e11d48_0%,transparent_50%)] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          {/* Animated Glows */}
          <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-[120px] animate-pulse animation-delay-800"></div>
          {/* Dynamic Interactive Canvas Particles & Glow Orbs */}
          <AnimatedBackground interactive={true} density={80} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Content Area with Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                <span className="text-gray-300 text-[10px] font-black tracking-[0.3em] uppercase">Premium Label Manufacturing</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-[1.05] tracking-tight mb-8"
              >
                Next-Gen{" "}
                <br />
                <TypeAnimation
                  sequence={[
                    "Barcode Labels",
                    1500,
                    "Labeling",
                    1500,
                    "Packaging Labels",
                    1500,
                    "Fragile Labels",
                    1500,
                    "Product Labels",
                    1500,
                  ]}
                  wrapper="span"
                  speed={10}
                  repeat={Infinity}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-orange-400"
                />
                <br />
                Precision
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm md:text-sm text-gray-400 mb-12 leading-relaxed max-w-xl font-medium"
              >
                Crafting high-performance labels for garments, pharmaceuticals, and industrial packaging. Where quality meets innovative printing technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="group relative px-6 py-3 bg-red-600 text-white text-base font-black rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(225,29,72,0.4)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <span className="relative flex items-center gap-2">
                    Get Free Quote
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </span>
                </Link>

                <Link
                  href="/portfolio"
                  className="px-6 py-3 text-base font-black text-white border-b-2 border-white/10 hover:border-red-500 transition-all"
                >
                  View Portfolio
                </Link>
              </motion.div>
              {/* Trust Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-16 pt-8 border-t border-white/5 flex items-center gap-10 opacity-60 hover:opacity-100 transition-opacity"
              >
                <div>
                  <div className="text-3xl font-black text-white">500+</div>
                  <div className="text-[10px] text-gray-300 uppercase font-black tracking-widest">Global Clients</div>
                </div>
                <div className="w-[1px] h-10 bg-white/10"></div>
                <div>
                  <div className="text-3xl font-black text-white">10+</div>
                  <div className="text-[10px] text-gray-300 uppercase font-black tracking-widest">Years Expertise</div>
                </div>
                <div className="w-[1px] h-10 bg-white/10"></div>
                <div>
                  <div className="text-3xl font-black text-white">ISO</div>
                  <div className="text-[10px] text-gray-300 uppercase font-black tracking-widest">Certified Quality</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Immersive Visuals */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Main Image Frame with 3D Tilt */}
              <ThreeDTilt maxTilt={8} scale={1.03} className="relative z-20 w-[90%] aspect-[4/5] ml-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] group">
                <img
                  src="/banner1.png"
                  alt="Industrial Machine"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>

                {/* Floating Tech Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[-10px] right-0"
                >
                  <div className="bg-white border border-white/20 p-6 rounded-[20px] shadow-2xl">
                    <Zap className="text-red-500 mb-2" size={32} />
                    <div className="text-black font-black text-lg leading-tight uppercase tracking-tighter">Ultra-Fast <br /> Production</div>
                  </div>
                </motion.div>
              </ThreeDTilt>

              {/* Overlapping Detail Image with 3D Tilt */}
              <div className="absolute -left-5 -bottom-10 z-30 w-[65%] aspect-square">
                <ThreeDTilt maxTilt={15} scale={1.06} className="w-full h-full rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl group">
                  <img
                    src="/banner.png"
                    alt="Label Detail"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent"></div>
                </ThreeDTilt>
              </div>

              <div className="absolute -top-10 -right-10 -bottom-10 -left-10 border-2 border-dashed border-white/5 rounded-[5rem] animate-spin-slow -z-10"></div>
            </motion.div>

          </div>
        </div>


      </section>

      {/* Welcome Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0">

          {/* Dynamic Interactive Canvas Particles & Glow Orbs */}
          <AnimatedBackground interactive={true} density={80} />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] text-red-600/10 animate-floatFast">
            <Tag size={80} />
          </div>
          <div className="absolute bottom-[5%] right-[10%] text-blue-600/10 animate-floatFast">
            <Package size={80} />
          </div>

          <div className="absolute top-[8%] right-[12%] w-40 h-32 bg-purple-200/40 rounded-[60%_40%_70%_30%/30%_60%_40%_70%] rotate-12 blur-sm animate-pulse" />
          {/* Sky Blue Capsule */}
          <div className="absolute bottom-[25%] left-[5%] w-22 h-10 bg-sky-200/50 rounded-[10px] -rotate-[18deg] animate-bounce" />


          {/* Peach Abstract Shape */}
          <div className="absolute top-1/2 right-[30%] w-22 h-22 bg-orange-200/30 rounded-[35%_65%_55%_45%/45%_35%_65%_55%] rotate-[25deg]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--btn-text-bg)]/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center justify-center h-full text-9xl">
                  <img
                    src="/about.png"
                    alt="Industrial Machine"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                  />
                </div>
                {/* Stats Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100 z-20"
                >
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[var(--btn-text-bg)]">10+</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[var(--btn-text-bg)]">500+</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Clients Worldwide</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-[var(--btn-text-bg)] tracking-[0.2em] uppercase mb-4">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to Raja’s <span className="text-[var(--btn-text-bg)]">Technology</span>
              </h3>
              <p className="text-sm md:text-md text-gray-600 mb-6 leading-relaxed">
                Raja’s Technology is a trusted manufacturer and supplier of high-quality printed labels for various industries. We specialize in custom label printing solutions designed to improve brand visibility, product presentation, and packaging standards.
              </p>
              <p className="text-sm md:text-md text-gray-600 mb-8 leading-relaxed">
                With advanced printing technology and experienced professionals, we deliver durable, attractive, and cost-effective labels according to customer requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Premium Materials",
                  "Advanced Printing Tech",
                  "Custom Shapes & Sizes",
                  "Industry Compliant"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-[var(--btn-text-bg)]" size={20} />
                    <span className="font-semibold text-gray-800">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="/about" className="btn-primary px-8 py-4 font-bold">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 relative font-['Inter'] overflow-hidden">
        {/* Live dynamic canvas particles & glowing orbs */}
        <AnimatedBackground interactive={true} density={45} />
        {/* Decorative Icons for White Space - Subtle & Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Sparkles scattered */}
          <div className="absolute top-50 left-[5%] text-yellow-600/10 animate-floatSlow" >
            <Sparkles size={80} />
          </div>
          <div className="absolute top-[8%] right-[35%] w-24 h-18 bg-cyan-200/30 rounded-[70%_30%_50%_50%/40%_80%_40%_60%] -rotate-[12deg] animate-pulse " />


          <div className="absolute bottom-[8%] right-[12%] w-24 h-18 bg-emerald-200/30 rounded-[70%_30%_50%_50%/40%_60%_40%_60%] -rotate-[12deg] animate-pulse" />



          <div
            className="absolute top-[10%] right-[1%] w-20 h-10 bg-purple-100/60 rounded-[20px]  animate-floatSlow"
          />

          <div
            className="absolute top-[50%] left-[47%] w-30 h-30 bg-blue-100/30 rounded-full  animate-floatSlow "
          />

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4  ">
              Why Choose Us
            </h2>
            <div className="w-20 h-1 bg-[var(--btn-text-bg)] mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >

            {[
              {
                title: "Premium Printing",
                icon: <Zap size={28} />,
                desc: "Sharp and vibrant multi-color labels with premium print quality."
              },

              {
                title: "Custom Designs",
                icon: <Palette size={28} />,
                desc: "Creative label designs tailored to your brand identity."
              },

              {
                title: "Fast Delivery",
                icon: <Truck size={28} />,
                desc: "Quick production and on-time delivery for every order."
              },


              {
                title: "Bulk Production",
                icon: <Layers size={28} />,
                desc: "Large-scale printing with consistent premium quality."
              },

              {
                title: "Waterproof Labels",
                icon: <Droplets size={28} />,
                desc: "Durable labels designed for harsh environments."
              },

              {
                title: "Low MOQ",
                icon: <PackageCheck size={28} />,
                desc: "Small quantity orders accepted with premium service."
              },

              {
                title: "Affordable Pricing",
                icon: <Tag size={28} />,
                desc: "High-quality labels at cost-effective market prices."
              },

              {
                title: "Expert Team",
                icon: <ShieldCheck size={28} />,
                desc: "Experienced professionals focused on customer satisfaction."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="h-full"
              >
                <ThreeDTilt maxTilt={15} scale={1.05} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-[var(--btn-text-bg)]/10 text-[var(--btn-text-bg)] rounded-xl flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </ThreeDTilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Product Categories */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Live dynamic canvas particles & glowing orbs */}
        <AnimatedBackground interactive={true} density={50} />
        {/* Background Decorative Icons for White Space - Subtle & Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Gear in top-left */}
          <div className="absolute top-[10%] left-[5%] text-rose-600/10 animate-spin-slow" >
            <Settings size={100} />
          </div>
          {/* Zap in bottom-center */}
          <div
            className="absolute bottom-[0%] left-[45%] text-rose-600/10 animate-floatFast z-[0]">
            <Zap size={100} />

          </div>
          {/* Checklist in top-right */}
          <div className="absolute top-[60%] left-[5%] w-10 h-20 bg-green-200/30 rounded-[10px]  text-rose-600/10 animate-floatSlow -rotate-[-25deg]" />



          <div
            className="absolute top-[10%] right-[45%] w-20 h-20 bg-pink-200/30 rounded-full  animate-floatSlow "
          />



          <div className="absolute top-[50%] right-[10%] w-18 h-18 bg-orange-200/40 clip-path-polygon rotate-45 animate-spin-slow" />

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center justify-center mb-16 gap-6 text-center"
          >
            <div>
              <h2 className="text-sm font-bold text-[var(--btn-text-bg)] tracking-[0.2em] uppercase mb-4">Portfolio</h2>
              <h3 className="text-4xl font-bold text-gray-900">Our Type of Products</h3>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                name: "Barcode Labels",
                icon: <Barcode size={24} />,
                image:
                  "https://www.quickbarcode.com/94-large_default/30mm-x-25mm-barcode-label-printed-set-of-1000-labels.jpg",
                desc: "High-precision barcode labels for inventory and tracking."
              },
              {
                name: "Product Labels",
                icon: <Tag size={24} />,
                image:
                  "https://s1-ecp.printrunner.com/1704/550x550/PR_Product-Labels-Square-Size.jpg",
                desc: "Custom labels to make your products stand out on shelves."
              },
              {
                name: "Garment Labels",
                icon: <Shirt size={24} />,
                image:
                  "https://images.jdmagicbox.com/quickquotes/images_main/printed-garment-label-2216069176-0wqhj4b2.jpg",
                desc: "Durable and soft labels for all types of apparel."
              },
              {
                name: "Packaging Labels",
                icon: <Package size={24} />,
                image:
                  "https://www.asp.com.au/wp-content/uploads/2022/02/Best-Warehouse-Labels-Labelling-Ideas-scaled.jpg",
                desc: "Secure and informative labeling for industrial packaging."
              },
              {
                name: "Pharmaceutical Labels",
                icon: <FlaskConical size={24} />,
                image:
                  "https://media.gettyimages.com/id/1419113216/photo/focus-on-prescription-pill-bottles-with-unrecognizable-pharmacist-in-background.jpg?s=612x612&w=0&k=20&c=sAtHdQn5ftQaYGXSqP7GNMphEfTt5DiRrDXZdOs8rX0=",
                desc: "Accurate and compliant labels for medical products."
              },
              {
                name: "Food & Beverage Labels",
                icon: <Coffee size={24} />,
                image:
                  "https://img.avery.com/f_auto,q_auto,c_scale,w_800/web/blank-labels/usage/blanklabels-pfp-hero-foodservice-mobile",
                desc: "High-quality labels for food packaging and bottles."
              },
              {
                name: "Cosmetic Labels",
                icon: <Sparkles size={24} />,
                image:
                  "https://5.imimg.com/data5/SELLER/Default/2023/4/301947215/FP/XQ/AG/60874301/waterproof-cosmetic-labels-1000x1000.jpg",
                desc: "Elegant labeling for beauty and skincare products."
              },
              {
                name: "QR Code Labels",
                icon: <QrCode size={24} />,
                image:
                  "https://5.imimg.com/data5/FI/EO/MY-33333269/qr-code-labels-1000x1000.jpg",
                desc: "Interactive labels with high-resolution QR scanning."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="h-full"
              >
                <ThreeDTilt maxTilt={10} scale={1.03} className="group bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex-grow">
                    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{item.name}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ThreeDTilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Video Section */}
      <section className="py-20 text-gray-900 relative overflow-hidden bg-gray-50">
        {/* Live dynamic canvas particles & glowing orbs */}
        <AnimatedBackground interactive={true} density={40} />
        <div className="absolute inset-0 pointer-events-none">
          {/* Soft Green Rectangle */}
          <div
            className="absolute bottom-[15%] left-[3%] w-20 h-10 bg-green-300/20 rounded-[15px] -rotate-[10deg] animate-floatFast  "
          />

          {/* Soft Pink Rectangle */}
          <div
            className="absolute top-[25%] left-[50%] w-24 h-12 bg-pink-200/30 rounded-[18px] rotate-[20deg] animate-floatFast"
          />

          {/* Soft Cyan Rectangle */}
          <div
            className="absolute bottom-[50%] right-[10%] w-16 h-20 bg-cyan-200/30 rounded-[14px] rotate-[-20deg] animate-floatFast"
          />

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-xs md:text-xs font-bold text-red-600 tracking-[0.2em] uppercase mb-5">Inside Raja’s Technology Manufacturing Unit</h2>
            <h3 className="text-4xl md:text-4xl font-black text-gray-900 mb-5 uppercase tracking-tight">Label Printing Videos</h3>
            <p className="text-sm md:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Watch our advanced printing process, product quality, barcode label production, packaging workflow, and industrial manufacturing capabilities.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute -left-4 top-1/2 z-20 hidden -translate-y-1/2 md:block">
              <button
                type="button"
                onClick={() => goToVideoSlide(activeVideoSlide - 1)}
                aria-label="Previous manufacturing video"
                className="h-12 w-12 rounded-full bg-white text-gray-900 shadow-xl border border-gray-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="absolute -right-4 top-1/2 z-20 hidden -translate-y-1/2 md:block">
              <button
                type="button"
                onClick={() => goToVideoSlide(activeVideoSlide + 1)}
                aria-label="Next manufacturing video"
                className="h-12 w-12 rounded-full bg-white text-gray-900 shadow-xl border border-gray-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>



            <div className="overflow-hidden rounded-[28px]">
              <motion.div
                className="flex"
                animate={{ x: -(activeVideoSlide * videoCardWidth) }}
                transition={
                  isVideoLoopResetting
                    ? { duration: 0 }
                    : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
                }
                onAnimationComplete={() => {
                  if (activeVideoSlide >= videoLoopEndIndex) {
                    setIsVideoLoopResetting(true);
                    setActiveVideoSlide(activeVideoSlide - manufacturingVideos.length);
                  }

                  if (activeVideoSlide < videoLoopStartIndex) {
                    setIsVideoLoopResetting(true);
                    setActiveVideoSlide(activeVideoSlide + manufacturingVideos.length);
                  }
                }}
              >
                {videoCarouselSlides.map((video, idx) => (
                  <div key={`${idx}-${video.videoUrl}`} className="w-[500px] shrink-0 px-1 md:px-3">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.7 }}
                      className="relative group border border-gray-100 rounded-[28px] overflow-hidden "
                    >
                      <div className="relative h-[450px] overflow-hidden">
                        <video
                          className="absolute inset-0 w-full h-full object-cover"
                          src={video.videoUrl}
                          poster={video.thumbnail}
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="mt-10 flex justify-center gap-3 md:hidden">
              <button
                type="button"
                onClick={() => goToVideoSlide(activeVideoSlide - 1)}
                aria-label="Previous manufacturing video"
                className="h-11 w-11 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-red-600 transition-all"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={() => goToVideoSlide(activeVideoSlide + 1)}
                aria-label="Next manufacturing video"
                className="h-11 w-11 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-red-600 transition-all"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>

        {activeVideo && (
          <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10">
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all z-[101]"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black shadow-[0_0_100px_rgba(0,0,0,0.5)]"
            >
              <video
                className="w-full h-full object-contain"
                src={activeVideo}
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </div>
        )}
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-[#111827] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">

          {/* Dynamic Interactive Canvas Particles & Glow Orbs */}
          <AnimatedBackground interactive={true} density={80} />
        </div>
        {/* Background Decorative Icons for Dark Space - Subtle & Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Rotating gear in top-left */}
          <div className="absolute top-[40%] left-[10%] text-white/5 animate-spin-slow z-0">
            <Settings size={100} />
          </div>

          {/* Large factory in bottom-right */}
          <div
            className="absolute bottom-[2%] right-[5%] text-white/5 animate-floatFast z-[0]">
            <Factory size={80} />
          </div>

          {/* Sparkles scattered */}
          <div className="absolute top-10 right-[5%] text-white/5 animate-floatSlow" >
            <Sparkles size={80} />
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Providing specialized labeling solutions across diverse sectors.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { name: "FMCG Industry", icon: <ShoppingCart size={32} color='red' /> },
              { name: "Garment Industry", icon: <Shirt size={32} color='red' /> },
              { name: "Food & Beverage", icon: <Utensils size={32} color='red' /> },
              { name: "Pharmaceutical", icon: <Activity size={32} color='red' /> },
              { name: "Logistics & Shipping", icon: <Truck size={32} color='red' /> },
              { name: "Cosmetics Industry", icon: <Sparkles size={32} color='red' /> },
              { name: "Retail Businesses", icon: <Store size={32} color='red' /> },
              { name: "Manufacturing", icon: <Factory size={32} color='red' /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="h-full"
              >
                <ThreeDTilt maxTilt={15} scale={1.06} className="group text-center p-8 rounded-3xl bg-white/5 border border-white/10 transition-all duration-300 h-full flex flex-col justify-center items-center">
                  <div className="w-16 h-16 mx-auto bg-white/5 text-gray-400 group-hover:text-red-500 group-hover:bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-lg text-gray-200 group-hover:text-white transition-colors">{item.name}</h4>
                </ThreeDTilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 relative overflow-hidden bg-gray-50">
        {/* Floating Decorative Icons for White Space - Subtle & Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div
            className="absolute top-[-5%] left-[10%] text-rose-600/10 animate-floatFast ">
            <Zap size={100} />
          </div>
          <div className="absolute top-[40%] right-[5%] text-rose-600/10 animate-floatSlow" >
            <CheckCircle2 size={80} />
          </div>
          <div
            className="absolute bottom-[15%] left-[3%] w-20 h-10 bg-green-300/20 rounded-[10px] -rotate-[10deg] animate-floatFast  "
          />

          {/* Small Peach Circle */}
          {/* <div
            className="absolute top-[20%] left-[35%] w-30 h-10 bg-pink-100/50 rounded-full  animate-floatSlow  z-[1]"
          /> */}
          <div
            className="absolute top-[10%] left-[45%] w-40 h-10 bg-yellow-100/50 rounded-full  animate-floatFast  z-[1]"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative  text-center ">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[3rem] p-12 sm:p-20 shadow-2xl border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
              <Package size={300} />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 uppercase tracking-wider "
            >
              Need Premium Printed Labels <br />
              <span className="text-[var(--btn-text-bg)]">for Your Business?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base text-gray-600 mb-10 max-w-xl mx-auto"
            >
              Contact us today for customized label printing solutions tailored to your specific requirements.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <Link
                href="/contact"
                className="btn-primary px-4 py-2 text-sm font-bold rounded-full"
              >
                Contact Us Today
              </Link>

              <Link
                href="tel:+1234567890"
                className="btn-secondary px-5 py-2 text-sm font-bold rounded-full"
              >
                Call Now
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Design */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gray-50/50 -z-10"></div>
      </section>
    </div>
  );
}
