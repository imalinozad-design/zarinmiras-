'use client';

import { motion } from 'framer-motion';

interface PriceItem {
  id: string;
  name: string;
  unit: string;
  price: string;
  change: string;
  up: boolean;
}

const prices: PriceItem[] = [
  { id: 'gold-18k', name: 'طلای ۱۸ عیار', unit: 'هر گرم', price: '۸,۷۵۰,۰۰۰', change: '+۰.۳۲', up: true },
  { id: 'gold-24k', name: 'طلای ۲۴ عیار', unit: 'هر گرم', price: '۱۱,۶۷۰,۰۰۰', change: '+۰.۱۸', up: true },
  { id: 'coin-pahlavi', name: 'سکه پهلوی', unit: 'هر عدد', price: '۳۸,۵۰۰,۰۰۰', change: '-۰.۱۲', up: false },
  { id: 'coin-emami', name: 'سکه امامی', unit: 'هر عدد', price: '۳۴,۵۰۰,۰۰۰', change: '+۰.۴۵', up: true },
  { id: 'coin-nim', name: 'نیم سکه', unit: 'هر عدد', price: '۱۹,۲۰۰,۰۰۰', change: '+۰.۲۱', up: true },
  { id: 'coin-quarter', name: 'ربع سکه', unit: 'هر عدد', price: '۱۲,۵۰۰,۰۰۰', change: '-۰.۰۸', up: false },
];

export default function LivePrices() {
  return (
    <section className="py-14 sm:py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 gereh-pattern opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="flex justify-center mb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-gold/40" />
              <div className="w-1.5 h-1.5 rotate-45 border border-gold/40" />
              <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-gold/40" />
            </div>
          </div>
          <h2 className="gold-text text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            قیمت‌ها
          </h2>
          <p className="text-cream/40 text-xs sm:text-sm max-w-md mx-auto">
            قیمت تقریبی طلا و سکه (نمایشی)
          </p>
        </motion.div>

        {/* Price grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {prices.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-charcoal-light/60 border border-gold/12 hover:border-gold/25 rounded-xl p-4 sm:p-5 transition-all duration-300">
                {/* Top row */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-cream font-bold text-sm sm:text-base">{item.name}</h3>
                    <p className="text-cream/30 text-[10px] sm:text-xs">{item.unit}</p>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-md text-[11px] sm:text-xs font-medium ${
                      item.up
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-red-500/10 text-red-400'
                    }`}
                  >
                    <span>{item.up ? '▲' : '▼'} {item.change}%</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1.5">
                  <span className="text-gold font-bold text-lg sm:text-xl tabular-nums" dir="ltr">
                    {item.price}
                  </span>
                  <span className="text-cream/30 text-[10px] sm:text-xs">تومان</span>
                </div>

                {/* Decorative line */}
                <div className="absolute top-0 right-3 w-6 h-px bg-gradient-to-l from-gold/30 to-transparent" />
                <div className="absolute top-0 left-3 w-6 h-px bg-gradient-to-r from-gold/30 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-cream/20 text-[10px] sm:text-[11px] mt-6 sm:mt-8">
          * قیمت‌ها به‌صورت نمونه و نمایشی هستند. برای قیمت‌های واقعی با ما تماس بگیرید.
        </p>
      </div>
    </section>
  );
}
