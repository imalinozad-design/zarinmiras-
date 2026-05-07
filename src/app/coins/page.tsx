'use client';

import { motion } from 'framer-motion';
import { Calendar, Weight, Filter, Coins } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CoinProduct {
  id: number;
  name: string;
  era: string;
  weight: string;
  purity: string;
  price: string;
  image: string;
  rarity: string;
}

const coins: CoinProduct[] = [
  { id: 1, name: 'سکه طلای پهلوی', era: 'دوره پهلوی (۱۳۰۴-۱۳۵۷)', weight: '۸.۱۳ گرم', purity: 'عیار ۲۱.۶', price: '۳۸,۵۰۰,۰۰۰ تومان', image: '/images/product-coin.png', rarity: 'رایج' },
  { id: 2, name: 'سکه طلای ناصرالدین‌شاه', era: 'دوره قاجار (۱۲۶۴-۱۳۱۳)', weight: '۱۰.۵ گرم', purity: 'عیار ۲۱.۶', price: 'تماس بگیرید', image: '/images/product-coin.png', rarity: 'نادر' },
  { id: 3, name: 'سکه طلای صفویه', era: 'دوره صفوی (۱۵۰۱-۱۷۳۶)', weight: '۷.۲ گرم', purity: 'عیار ۲۱.۶', price: 'تماس بگیرید', image: '/images/product-coin.png', rarity: 'بسیار نادر' },
  { id: 4, name: 'سکه طلای زندیه', era: 'دوره زند (۱۷۵۱-۱۷۹۴)', weight: '۹.۱ گرم', purity: 'عیار ۲۱.۶', price: 'تماس بگیرید', image: '/images/product-coin.png', rarity: 'نادر' },
  { id: 5, name: 'سکه طلای محمدرضاشاه', era: 'دوره پهلوی (۱۹۲۵-۱۹۴۱)', weight: '۸.۱ گرم', purity: 'عیار ۲۱.۶', price: '۴۲,۰۰۰,۰۰۰ تومان', image: '/images/product-coin.png', rarity: 'کمیاب' },
  { id: 6, name: 'سکه طلای مظفرالدین‌شاه', era: 'دوره قاجار (۱۸۹۶-۱۹۰۷)', weight: '۱۰.۴ گرم', purity: 'عیار ۲۱.۶', price: 'تماس بگیرید', image: '/images/product-coin.png', rarity: 'نادر' },
  { id: 7, name: 'سکه طلای نیم بهار آزادی', era: 'دوره معاصر', weight: '۴.۰۶ گرم', purity: 'عیار ۲۱.۶', price: '۲۰,۵۰۰,۰۰۰ تومان', image: '/images/product-coin.png', rarity: 'رایج' },
  { id: 8, name: 'سکه طلای سلطنتی عثمانی', era: 'دوره عثمانی', weight: '۷.۲ گرم', purity: 'عیار ۲۲', price: 'تماس بگیرید', image: '/images/product-coin.png', rarity: 'کمیاب' },
];

function CoinCard({ coin, index }: { coin: CoinProduct; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: '-30px' }}
    >
      <div className="museum-frame rounded-xl overflow-hidden group cursor-pointer">
        <div className="relative aspect-square overflow-hidden bg-charcoal-light">
          <img src={coin.image} alt={coin.name} className="product-image w-full h-full object-cover transition-transform duration-700 ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
            <button className="gold-button px-5 py-2 rounded-lg text-[11px] sm:text-xs font-bold whitespace-nowrap">مشاهده جزئیات</button>
          </div>
          {/* Rarity badge */}
          <div className={`absolute top-2.5 left-2.5 px-2 py-1 rounded-md text-[10px] font-medium ${
            coin.rarity === 'بسیار نادر' ? 'bg-red-500/20 text-red-400 border border-red-500/20' :
            coin.rarity === 'نادر' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/20' :
            coin.rarity === 'کمیاب' ? 'bg-gold/15 text-gold border border-gold/20' :
            'bg-cream/10 text-cream/60 border border-cream/10'
          }`}>
            {coin.rarity}
          </div>
        </div>
        <div className="p-3.5 sm:p-4 border-t border-gold/10">
          <h3 className="text-cream font-bold text-xs sm:text-sm mb-1.5">{coin.name}</h3>
          <p className="text-cream/35 text-[10px] sm:text-xs mb-2 flex items-center gap-1.5">
            <Calendar size={11} className="text-gold/50" /> {coin.era}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-cream/35 text-[10px] sm:text-xs flex items-center gap-1.5">
              <Weight size={11} className="text-gold/50" /> {coin.weight}
            </span>
            <span className="text-gold/80 text-[11px] sm:text-xs font-bold">{coin.price}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CoinsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page hero banner */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/product-coin.png" alt="" className="w-full h-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal" />
          </div>
          <div className="absolute inset-0 gereh-pattern opacity-15" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5">
                <Coins size={26} className="text-gold" />
              </div>
              <p className="text-gold/60 text-xs tracking-widest uppercase mb-2">Old Gold Coins</p>
              <h1 className="gold-text text-3xl sm:text-4xl md:text-5xl font-bold mb-4">سکه‌های طلای قدیمی</h1>
              <p className="text-cream/40 text-sm sm:text-base max-w-lg mx-auto">مجموعه‌ای نادر از سکه‌های طلای دوره‌های مختلف تاریخی ایران</p>
            </motion.div>
          </div>
        </section>

        {/* Filter bar */}
        <div className="border-b border-gold/10 bg-charcoal-light/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-cream/40 text-xs sm:text-sm">
              <Filter size={14} />
              <span>{coins.length} قطعه</span>
            </div>
            <select className="bg-charcoal-light border border-gold/15 rounded-md px-3 py-1.5 text-cream/60 text-xs focus:outline-none focus:border-gold/30">
              <option>مرتب‌سازی: جدیدترین</option>
              <option>مرتب‌سازی: ارزان‌ترین</option>
              <option>مرتب‌سازی: گران‌ترین</option>
            </select>
          </div>
        </div>

        {/* Products grid */}
        <section className="py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
              {coins.map((coin, index) => (
                <CoinCard key={coin.id} coin={coin} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
