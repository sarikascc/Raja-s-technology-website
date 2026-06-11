"use client";

import React from 'react';
import Link from 'next/link';
import { LogIn, Mail, Lock, ArrowRight, UserPlus, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-600/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-float animation-delay-800" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div

        className="relative z-10 w-full max-w-2xl px-6 py-12"
      >
        <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/50 overflow-hidden relative">
          {/* Subtle accent line at top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-transparent via-red-600/50 to-transparent" />

          <div className="text-center mb-10">
            <div

              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-600/10 border border-red-600/20 mb-6"
            >
              <ShieldCheck className="text-red-500 w-8 h-8" />
            </div>

            <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">Portal Access</h1>
            <p className="text-gray-400 text-sm leading-relaxed ">
              Securely sign in to your Raja's Tech account to manage <br /> your orders and inquiries.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-red-500 transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/10 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Password</label>
                <Link href="#" className="text-xs text-red-500 hover:text-red-400 transition-colors font-bold uppercase tracking-tighter">Forgot?</Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-red-500 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/10 transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 ml-1">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-lg border border-white/10 bg-slate-950/50 checked:bg-red-600 checked:border-red-600 transition-all"
                />
                <ShieldCheck className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
              </div>
              <label htmlFor="remember" className="text-sm text-gray-400 cursor-pointer select-none">Remember this session</label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-red-900/20 flex items-center justify-center gap-3 group transition-all duration-300 active:scale-95"
            >
              <LogIn size={20} />
              <span className="uppercase tracking-widest text-sm">Sign In Now</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5">
            <div className="bg-white/5 rounded-2xl p-4 flex items-center justify-between">
              <span className="text-gray-400 text-xs">New to Raja's Tech?</span>
              <Link href="/contact" className="text-white hover:text-red-500 text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1.5">
                <UserPlus size={14} />
                Register
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Link href="/" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
            <ArrowRight size={14} className="rotate-180" />
            Back to Home
          </Link>
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-medium">
            Authorized Personnel Only
          </p>
        </div>
      </div>
    </div>
  );
}
