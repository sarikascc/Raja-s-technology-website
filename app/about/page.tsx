"use client";

import { AnimatedBackground } from '@/components/ui/animated-background';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Award,
  Clock,
  Settings,
  Users,
  CheckCircle2,
  ShieldCheck,
  Globe,
  Zap,
  TrendingUp,
  HeartHandshake,
  ChevronDown,
  Sparkles,
  Package,
  Tag
} from 'lucide-react';




export default function AboutPage() {
  return (
    < div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Gear in top-left */}
          <div className="absolute top-[20%] left-[10%] text-rose-600/20 animate-spin-slow" >
            <Settings size={100} />
          </div>
          {/* Zap in bottom-center */}
          <div
            className="absolute bottom-[15%] right-[5%] text-rose-600/20 animate-floatFast z-[0]">
            <Zap size={100} />
          </div>

        </div>
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#e11d48_0%,transparent_50%)] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          {/* Animated Glows */}
          <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-red-600/10 rounded-full blur-[100px] animate-pulse animation-delay-800"></div>
           <AnimatedBackground interactive={true} density={80} />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-white uppercase leading-tight tracking-tight"
          >
            About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-orange-400">
              Raja's Technology
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-md text-base text-gray-400 max-w-2xl mx-auto font-medium"
          >
            A leader in premium label manufacturing, dedicated to innovation, quality, <br /> and excellence.
          </motion.p>
        </div>

        {/* Bouncing Scroll Arrow Indicator */}

      </section>

      {/* Company Introduction Section */}
      <section className="relative py-20 bg-white overflow-hidden">
 <div className="absolute inset-0 z-0">

          {/* Dynamic Interactive Canvas Particles & Glow Orbs */}
          <AnimatedBackground interactive={true} density={80} />
        </div>
        {/* Sparkles scattered */}
        <div className="absolute top-10 left-[5%] text-yellow-600/15 animate-floatSlow" >
          <Sparkles size={70} />
        </div>

        <div className="absolute bottom-[40%] right-[30%] w-20 h-20 bg-blue-100/50 rounded-[10px] -rotate-[10deg] " />

        {/* Soft Green Rectangle */}
        <div
          className="absolute bottom-[15%] left-[3%] w-10 h-20 bg-green-300/20 rounded-[15px] -rotate-[10deg] animate-floatFast  "
        />
        <div
          className="absolute top-[2%] right-[1%] w-80 h-80 bg-pink-100/60 rounded-full  animate-floatSlow blur-2xl"
        />
        {/* Small Peach Circle */}
        <div
          className="absolute top-[10%] left-[35%] w-30 h-10 bg-pink-100/60 rounded-full  animate-floatSlow  "
        />
        {/* Decorative Soft Shapes for White Space */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[-5%] w-96 h-64 bg-pink-50/40 rounded-[4rem] rotate-[15deg] blur-3xl" />
          <div className="absolute bottom-[20%] right-[-5%] w-[30rem] h-80 bg-blue-50/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl relative group border border-gray-200">
                <img
                  src="/banner3.png"
                  alt="Manufacturing Technology"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#e11d48]/20 to-transparent"></div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-4 -right-3 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-black text-[#e11d48]">10+</div>
                    <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1">Years of <br /> Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-bold text-[#e11d48] tracking-[0.2em] uppercase mb-4">Our Background</h2>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">
                Innovation-Driven <br />
                <span className="text-[#e11d48] ">Label Solutions</span>
              </h3>
              <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                <p>
                  Raja’s Technology is one of the leading printed label manufacturers dedicated to providing innovative and high-quality label solutions for businesses across multiple industries.
                </p>
                <p>
                  We focus on precision printing, attractive design, durable materials, and customer satisfaction. Our labels are designed to enhance product branding and packaging quality.
                </p>
                <p>
                  Using modern printing machines and premium raw materials, we ensure every label meets international quality standards.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-red-50 rounded-lg text-[#e11d48]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Quality Assured</h4>
                    <p className="text-sm text-gray-500">International standards compliant</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-red-50 rounded-lg text-[#e11d48]">
                    <Settings size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Advanced Tech</h4>
                    <p className="text-sm text-gray-500">Precision printing technology</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-[#e11d48]/10 text-[#e11d48] rounded-[20px] flex items-center justify-center mb-6 group-hover:bg-[#e11d48] group-hover:text-white transition-all duration-500">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-5">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To provide reliable, affordable, and high-quality labeling solutions that help businesses improve product identity and brand value.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-[#e11d48]/10 text-[#e11d48] rounded-[20px] flex items-center justify-center mb-8 group-hover:bg-[#e11d48] group-hover:text-white transition-all duration-500">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-5">Our Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To become a trusted global leader in printed label manufacturing through innovation, quality, and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Decorative Soft Shapes for White Space */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div
            className="absolute top-[2%] right-[1%] w-40 h-40 bg-yellow-100/60 rounded-full  animate-floatSlow blur-3xl"
          />

          <div className="absolute top-[10%] right-[45%] w-20 h-20 bg-blue-100/60 rounded-[10px] -rotate-[10deg] " />

          {/* Soft Green Rectangle */}
          <div className="absolute bottom-[30%] left-[10%] w-20 h-20 bg-green-100/60 rounded-[10px] -rotate-[10deg] animate-floatFast" />

          {/* Small Peach Circle */}
          <div className="absolute top-[60%] right-[38%] w-22 h-22 bg-orange-100/50 rounded-full animate-floatSlow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2

              className="text-sm font-bold text-[#e11d48] tracking-[0.2em] uppercase mb-4"
            >
              Why We Lead
            </h2>
            <h3

              className="text-4xl md:text-4xl font-black text-gray-900"
            >
              Our Strengths
            </h3>
            <div


              className="w-20 h-1.5 bg-[#e11d48] mx-auto rounded-full mt-6"
            ></div>
          </div>

          <div


            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Modern Printing Technology",
                icon: <Zap size={28} />,
                desc: "Equipped with the latest high-speed industrial printing machinery."
              },
              {
                title: "Skilled Production Team",
                icon: <Users size={28} />,
                desc: "Expert professionals dedicated to meticulous quality control."
              },
              {
                title: "Customized Printing Solutions",
                icon: <Settings size={28} />,
                desc: "Tailored label designs and materials to meet specific needs."
              },
              {
                title: "Timely Delivery",
                icon: <Clock size={28} />,
                desc: "Efficient logistics ensuring your orders reach you on schedule."
              },
              {
                title: "Excellent Customer Support",
                icon: <HeartHandshake size={28} />,
                desc: "Dedicated support team for seamless communication and service."
              },
              {
                title: "Competitive Pricing",
                icon: <TrendingUp size={28} />,
                desc: "Premium quality at the most affordable market rates."
              }
            ].map((strength, i) => (
              <div
                key={i}

                className="group p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white text-[#e11d48] rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {strength.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#e11d48] transition-colors">{strength.title}</h4>
                <p className="text-gray-600 leading-relaxed">{strength.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        {/* Floating Decorative Icons for White Space - Subtle & Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden ">

          <div
            className="absolute top-[-5%] left-[10%] text-rose-600/10 animate-floatFast ">
            <Zap size={100} />
          </div>
          <div
            className="absolute bottom-[15%] right-[3%] w-20 h-10 bg-green-300/20 rounded-[10px] -rotate-[10deg] animate-floatFast  "
          />
          <div
            className="absolute top-[10%] left-[45%] w-40 h-10 bg-yellow-100/50 rounded-full  animate-floatFast  z-[1]"
          />
        </div>



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[3rem] p-12 lg:p-20 text-center  shadow-2xl shadow-white/10 relative overflow-hidden border border-white/10"

          >
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">
              Ready to Enhance Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
                Product Branding?
              </span>
            </h2>
            <p className="text-sm text-gray-400 mb-12">
              Join 500+ global brands who trust Raja's Technology for their <br /> packaging needs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/contact"
                className="group relative px-5 py-2.5 bg-[#e11d48] text-white text-sm font-black rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <span className="relative">Contact Us Now</span>
              </a>

              {/* <a
                href="/"
                className="px-5 py-2.5 text-sm font-black text-gray-900 border border-gray-400 hover:border-[#e11d48] rounded-xl transition-all"
              >
                View Products
              </a> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
