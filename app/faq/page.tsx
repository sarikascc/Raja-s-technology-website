"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import {
  Plus,
  Minus,
  Settings,
  Zap,

  Search,

  Package,
  Sparkle,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { AnimatedBackground } from '@/components/ui/animated-background';

const faqs = [
  {
    category: "General",
    q: "What types of labels do you manufacture?",
    a: "We manufacture premium printed labels, including barcode labels, QR code labels, product labels, garment labels, pharmaceutical labels, food and beverage labels, and cosmetic labels."
  },
  {
    category: "Customization",
    q: "Do you provide custom size labels?",
    a: "Yes, we manufacture labels in fully customized sizes, shapes, and materials according to your product requirements."
  },
  {
    category: "Durability",
    q: "Are your labels waterproof?",
    a: "Yes, we provide waterproof, oil-resistant, and durable label solutions suitable for industrial and retail usage."
  },
  {
    category: "Orders",
    q: "What is the minimum order quantity (MOQ)?",
    a: "The minimum order quantity depends on the label type and customization requirements. Please contact us for more details."
  },
  {
    category: "Logistics",
    q: "How long does delivery take?",
    a: "Generally, delivery is received within 3 to 7 days after the order is confirmed. We are always committed to providing fast service."
  },
  {
    category: "Design",
    q: "Do you help with design?",
    a: "Yes, our professional team can help you design attractive labels that suit your brand."
  }
];

const FAQItem = ({ faq, isOpen, toggle }: { faq: any; isOpen: boolean; toggle: () => void }) => (
  <motion.div
    layout
    className={`border rounded-2xl mb-4 overflow-hidden transition-all duration-300 ${isOpen ? 'border-red-500 bg-red-50/30' : 'border-gray-100 bg-white hover:border-gray-200 shadow-sm'}`}
  >
    <button
      onClick={toggle}
      className="w-full py-5 px-6 flex items-center justify-between text-left group"
    >
      <div className="flex items-center gap-4">
        <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-700 group-hover:text-red-600'}`}>
          {faq.q}
        </span>
      </div>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-red-600 text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-red-100 group-hover:text-red-600'}`}>
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
            {faq.a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">
              Your Questions, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-orange-400">Our Answers</span>
            </h1>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto relative group"
          >
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-500 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full py-3 pl-10 pr-4 bg-white/10 border border-white/10 rounded-[10px] text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 backdrop-blur-md transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ List Section */}
      <section className="py-20 bg-white relative overflow-hidden">
       <div className="absolute inset-0 z-0">

          {/* Dynamic Interactive Canvas Particles & Glow Orbs */}
          <AnimatedBackground interactive={true} density={80} />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-[10%] right-[5%] text-red-600/10 animate-floatFast">
            <Sparkles size={80} />
          </div>
        
          <div className="absolute bottom -[5%] right-[5%] w-10 h-26 bg-blue-100/80 rounded-[10px] -rotate-[50deg] " />

          {/* Soft Green Rectangle */}
          <div

            className="absolute bottom-[5%] left-[15%] w-12 h-28 bg-green-100/60 rounded-[10px] -rotate-[10deg] animate-spin-slow  "
          />

        
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          {filteredFaqs.length > 0 ? (
            <div className="bg-white">
              {filteredFaqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  faq={faq}
                  isOpen={openFaq === i}
                  toggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">No questions found. Please try again.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 px-4 relative overflow-hidden">
        {/* Dynamic floating particles */}
        <AnimatedBackground interactive={true} density={40} />
        {/* Floating Decorative Icons for White Space - Subtle & Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

        
          <div
            className="absolute bottom-[15%] left-[3%] w-20 h-10 bg-blue-300/20 rounded-[10px] -rotate-[10deg] animate-floatFast  "
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
            Still have questions?
          </h2>
          <p className="text-gray-600 text-sm mb-10 max-w-xl mx-auto relative z-10 font-medium leading-relaxed">
            If you didn't find the answer to your question here, you can contact us directly.
          </p>

          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link
              href="/contact"
              className="px-8 py-4 bg-red-600 text-white font-black rounded-xl hover:bg-red-700 hover:scale-105 transition-all shadow-xl uppercase tracking-wide text-sm"
            >
              Contact Us
            </Link>
            <Link
              href="tel:+919876543210"
              className="px-8 py-4 bg-gray-100 text-gray-900 font-black rounded-xl hover:bg-gray-200 hover:scale-105 transition-all uppercase tracking-wide text-sm"
            >
              Call Now
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
