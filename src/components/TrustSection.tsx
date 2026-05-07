'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Gem, Lock, Award, Clock, HeartHandshake } from 'lucide-react';

const trustItems = [
  { icon: ShieldCheck, title: 'ارزیابی معتبر', description: 'ارزش‌گذاری توسط کارشناسان رسمی' },
  { icon: Gem, title: 'طلا اصل', description: 'تضمین اصالت با گواهی‌نامه' },
  { icon: Lock, title: 'پرداخت امن', description: 'تراکنش با بالاترین امنیت' },
  { icon: Award, title: 'گواهی اصالت', description: 'سند تاریخی برای هر قطعه' },
  { icon: Clock, title: 'تاریخچه شفاف', description: 'اطلاعات کامل منشأ هر جواهر' },
  { icon: HeartHandshake, title: 'مشاوره رایگان', description: 'راهنمایی خرید و سرمایه‌گذاری' },
];

function TrustCard({ item }: { item: typeof trustItems[number] }) {
  return (
    <div className="shrink-0 w-[160px] sm:w-[180px]">
      <div className="bg-charcoal-light/50 border border-gold/10 rounded-xl p-3.5 sm:p-4 hover:border-gold/25 transition-all duration-300 h-full">
        <div className="w-9 h-9 rounded-lg bg-gold/8 border border-gold/15 flex items-center justify-center mb-3">
          <item.icon size={18} className="text-gold/60" />
        </div>
        <h3 className="text-cream font-bold text-xs sm:text-sm mb-1.5">{item.title}</h3>
        <p className="text-cream/40 text-[10px] sm:text-[11px] leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

export default function TrustSection() {
  // Duplicate for seamless loop
  const items = [...trustItems, ...trustItems, ...trustItems];

  return (
    <section id="trust" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-emerald-rich/8 to-charcoal" />
      <div className="absolute inset-0 gereh-pattern opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 sm:w-14 h-px bg-gradient-to-r from-transparent to-gold/40" />
              <div className="w-1.5 h-1.5 rotate-45 border border-gold/40" />
              <div className="w-10 sm:w-14 h-px bg-gradient-to-l from-transparent to-gold/40" />
            </div>
          </div>
          <h2 className="gold-text text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            اعتماد و اصالت
          </h2>
          <p className="text-cream/40 text-xs sm:text-sm max-w-md mx-auto">
            چرا زرین میراث؟
          </p>
        </motion.div>
      </div>

      {/* Auto-scroll marquee */}
      <div className="relative">
        <motion.div
          animate={{ x: ['0%', '50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35,
              ease: 'linear',
            },
          }}
          className="flex gap-3 sm:gap-4 w-max"
        >
          {items.map((item, index) => (
            <TrustCard key={`${item.title}-${index}`} item={item} />
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-transparent via-charcoal/60 to-charcoal pointer-events-none z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-transparent via-charcoal/60 to-charcoal pointer-events-none z-10" />
      </div>
    </section>
  );
}
