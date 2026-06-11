"use client";

import { MapPin, Phone, Mail, Globe, Send, PhoneCall, Settings, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThreeDTilt } from '@/components/ui/three-d-tilt';
import { AnimatedBackground } from '@/components/ui/animated-background';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-[9%] pb-20 bg-[#020617] overflow-hidden relative text-center">
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
          <div className="absolute bottom-[15%] right-[6%] text-rose-600/20 animate-spin-slow" >
            <Settings size={100} />
          </div>
          {/* Zap in bottom-center */}
          <div
            className="absolute top-[15%] left-[10%] text-rose-600/20 animate-floatFast z-[0]">
            <Zap size={100} />
          </div>

        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#e11d48_0%,transparent_50%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6"
          >
            Get In <span className="text-red-500">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-base text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind? Let&apos;s discuss how our premium labeling solutions can elevate your brand.
          </motion.p>
        </div>


      </section>

      {/* Contact Content */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Dynamic floating particles */}
        <AnimatedBackground interactive={true} density={40} />
        {/* Floating Decorative Icons for White Space - Subtle & Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[10%] left-[5%] text-red-600/10 rotate-[-30deg] animate-floatFast "
          >
            <Mail size={80} />
          </div>
          <div
            className="absolute bottom-[10%] right-[5%] text-blue-600/10 rotate-[-10deg] animate-floatFast"
          >
            <PhoneCall size={80} />
          </div>
         
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Our Address</h4>
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                        Plat No 18, Basement, Anant Business Park, Kiran Chowk Rd, Shivshakti Society, Punagam, Varachha, Surat, Gujarat 395010, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Phone Number</h4>
                      <a href="tel:+919876543210" className="text-gray-600 text-sm mt-1 hover:text-red-600 transition-colors block">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Email Address</h4>
                      <a href="mailto:info@rajastechlabels.com" className="text-gray-600 text-sm mt-1 hover:text-red-600 transition-colors block">
                        info@rajastechlabels.com
                      </a>
                    </div>
                  </div>


                </div>
              </div>

              {/* Company Identity */}
              <ThreeDTilt maxTilt={10} scale={1.03} className="p-8 bg-gray-50 rounded-[10px] border border-gray-100">
                <div className="flex items-center font-black text-xl tracking-tighter uppercase mb-4">
                  <span className="text-red-600">Raja&apos;s</span>
                  <span className="text-gray-900 ml-1.5">Technology</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Leading printed label manufacturers dedicated to innovation and high-quality solutions.
                </p>
              </ThreeDTilt>
            </motion.div>

            {/* Contact Form Column */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <ThreeDTilt maxTilt={4} scale={1.01} className="bg-white p-8 sm:p-12  rounded-[10px]  border-none shadow-2xl">
                <h3 className="text-3xl font-black text-gray-900 mb-8">Send Us a Message</h3>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="field-label !text-gray-900">Full Name</label>
                    <input type="text" className="field-input !bg-white !text-gray-900 !border-gray-300 transition-shadow focus:shadow-md" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="field-label !text-gray-900">Company Name</label>
                    <input type="text" className="field-input !bg-white !text-gray-900 !border-gray-300 transition-shadow focus:shadow-md" placeholder="Your Business Ltd." />
                  </div>
                  <div className="space-y-2">
                    <label className="field-label !text-gray-900">
                      <a href="mailto:info@rajastechlabels.com" className="hover:text-red-600 transition-colors">
                        Email Address
                      </a>
                    </label>

                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="field-input !bg-white !text-gray-900 !border-gray-300 transition-all duration-300 focus:shadow-md focus:!border-red-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="field-label !text-gray-900">
                      <a href="tel:+919876543210" className="hover:text-red-600 transition-colors">
                        Mobile Number
                      </a>
                    </label>

                    <input
                      type="tel"
                      name="mobile"
                      autoComplete="tel"
                      className="field-input !bg-white !text-gray-900 !border-gray-300 transition-all duration-300 focus:shadow-md focus:!border-red-500"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="field-label !text-gray-900">Product Requirement</label>
                    <input type="text" className="field-input !bg-white !text-gray-900 !border-gray-300 transition-shadow focus:shadow-md" placeholder="Product Requirement" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="field-label !text-gray-900">Message</label>
                    <textarea rows={4} className="field-textarea !bg-white !text-gray-900 !border-gray-300 transition-shadow focus:shadow-md" placeholder="How can we help you?"></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button type="submit" className="w-full btn-primary py-5 text-base font-bold rounded-2xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                      Submit Requirement <Send size={20} />
                    </button>
                  </div>
                </form>
              </ThreeDTilt>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0">

          {/* Dynamic Interactive Canvas Particles & Glow Orbs */}
          <AnimatedBackground interactive={true} density={80} />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[12%] right-[35%] text-red-600/10 animate-floatSlow">
            <MapPin size={90} />
          </div>
          <div className="absolute bottom-[10%] left-[6%] w-18 h-18 bg-red-100/60 rounded-full animate-floatFast" />
        </div>

        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-center gap-5 mb-8">
              <div>
                <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-3 text-center ">Find Us</h2>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 text-center ">
                  Visit Our Location
                </h3>
                <p className="text-sm text-gray-600 mt-3 max-w-2xl leading-relaxed text-center">
                  Reach Raja&apos;s Technology for premium label printing solutions, custom requirements, and bulk manufacturing support.
                </p>
              </div>

            </div>


            <div className="relative overflow-hidden rounded-[10px] border border-gray-100 shadow-2xl bg-gray-100 ">
          
              <iframe
                title="Raja's Technology location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8577953378845!2d72.87469831341277!3d21.21082043241666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb287dd2941%3A0xf21b6aa67c76559a!2sRaja%27s%20Technology!5e0!3m2!1sen!2sin!4v1747324130202!5m2!1sen!2sin"
                className="w-full h-[360px] md:h-[560px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
