'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="جواهرات طلا عتیقه"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/60" />
      </div>

      {/* Gereh pattern overlay */}
      <div className="absolute inset-0 gereh-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Decorative element */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-gold/60" />
              <Sparkles className="text-gold/60" size={16} />
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-gold/60" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-gold/80 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 sm:mb-6 font-light">
            مجموعه‌ای منحصربه‌فرد
          </p>

          {/* Main headline */}
          <h2 className="gold-text text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 sm:mb-8">
            میراث جاودانه
            <br />
            طلا
          </h2>

          {/* Description */}
          <p className="text-cream/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 font-light">
            سفری در زمان از دوران قاجار تا پهلوی. هر قطعه، روایتی از هنر و اصالت ایرانی
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#collection"
              className="gold-button px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg text-sm sm:text-base font-bold tracking-wide inline-flex items-center gap-2"
            >
              مشاهده مجموعه
              <ArrowLeft size={18} />
            </a>
            <a
              href="#trust"
              className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg text-sm sm:text-base font-medium border border-gold/30 text-gold hover:border-gold/60 hover:bg-gold/5 transition-all duration-300 inline-flex items-center gap-2"
            >
              درباره ما
            </a>
          </div>
        </motion.div>

      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#collection" className="flex flex-col items-center gap-2 group">
          <span className="text-cream/30 text-[10px] tracking-widest group-hover:text-gold/60 transition-colors duration-300">اسکرول کنید</span>
          <div className="w-6 h-10 rounded-full border-2 border-gold/30 group-hover:border-gold/60 transition-colors duration-300 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-gold/60"
            />
          </div>
        </a>
      </motion.div>

      {/* Bottom arabesque border */}
      <div className="absolute bottom-0 left-0 right-0 arabesque-border" />
    </section>
  );
}
