'use client';

import { motion } from 'framer-motion';
import { Calendar, Weight, Filter, Diamond } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface RingProduct {
  id: number;
  name: string;
  era: string;
  weight: string;
  stone: string;
  price: string;
  image: string;
}

const rings: RingProduct[] = [
  { id: 1, name: 'انگشتر طلا یاقوت‌دار', era: 'عتیقه', weight: '۸ گرم', stone: 'یاقوت سرخ', price: 'تماس بگیرید', image: '/images/product-ring.png' },
  { id: 2, name: 'انگشتر طلا زمرد دار', era: 'دوره قاجار', weight: '۱۲ گرم', stone: 'زمرد', price: 'تماس بگیرید', image: '/images/product-ring.png' },
  { id: 3, name: 'انگشتر طلا عقیق‌دار', era: 'دهه ۱۳۳۰', weight: '۶ گرم', stone: 'عقیق یمنی', price: 'تماس بگیرید', image: '/images/product-ring.png' },
  { id: 4, name: 'انگشتر طلا فیروزه‌دار', era: 'دوره پهلوی', weight: '۹ گرم', stone: 'فیروزه نیشابور', price: 'تماس بگیرید', image: '/images/product-ring.png' },
  { id: 5, name: 'انگشتر طلا الماس‌دار', era: 'دوره قاجار', weight: '۷ گرم', stone: 'الماس', price: 'تماس بگیرید', image: '/images/product-ring.png' },
  { id: 6, name: 'انگشتر طلا لعل‌دار', era: 'دوره صفوی', weight: '۱۰ گرم', stone: 'لعل بدخشان', price: 'تماس بگیرید', image: '/images/product-ring.png' },
  { id: 7, name: 'انگشتر طلا زبرجد', era: 'دوره زند', weight: '۸.۵ گرم', stone: 'زبرجد', price: 'تماس بگیرید', image: '/images/product-ring.png' },
  { id: 8, name: 'انگشتر طلا عقیق سه‌لایه', era: 'دهه ۱۳۵۰', weight: '۱۱ گرم', stone: 'عقیق سه‌لایه', price: 'تماس بگیرید', image: '/images/product-ring.png' },
];

function RingCard({ ring, index }: { ring: RingProduct; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: '-30px' }}
    >
      <div className="museum-frame rounded-xl overflow-hidden group cursor-pointer">
        <div className="relative aspect-square overflow-hidden bg-charcoal-light">
          <img src={ring.image} alt={ring.name} className="product-image w-full h-full object-cover transition-transform duration-700 ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
            <button className="gold-button px-5 py-2 rounded-lg text-[11px] sm:text-xs font-bold whitespace-nowrap">مشاهده جزئیات</button>
          </div>
          {/* Stone badge */}
          <div className="absolute top-2.5 left-2.5 bg-emerald-rich/30 text-emerald-300 border border-emerald-500/20 rounded-md px-2 py-1 text-[10px] font-medium">
            {ring.stone}
          </div>
        </div>
        <div className="p-3.5 sm:p-4 border-t border-gold/10">
          <h3 className="text-cream font-bold text-xs sm:text-sm mb-1.5">{ring.name}</h3>
          <p className="text-cream/35 text-[10px] sm:text-xs mb-2 flex items-center gap-1.5">
            <Calendar size={11} className="text-gold/50" /> {ring.era}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-cream/35 text-[10px] sm:text-xs flex items-center gap-1.5">
              <Weight size={11} className="text-gold/50" /> {ring.weight}
            </span>
            <span className="text-gold/80 text-[11px] sm:text-xs font-bold">{ring.price}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function RingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page hero banner */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/product-ring.png" alt="" className="w-full h-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal" />
          </div>
          <div className="absolute inset-0 gereh-pattern opacity-15" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5">
                <Diamond size={26} className="text-gold" />
              </div>
              <p className="text-gold/60 text-xs tracking-widest uppercase mb-2">Vintage Rings</p>
              <h1 className="gold-text text-3xl sm:text-4xl md:text-5xl font-bold mb-4">انگشترهای عتیقه</h1>
              <p className="text-cream/40 text-sm sm:text-base max-w-lg mx-auto">انگشترهایی با سنگ‌های قیمتی و کار هنری بی‌نظیر، هر کدام یک شاهکار</p>
            </motion.div>
          </div>
        </section>

        {/* Filter bar */}
        <div className="border-b border-gold/10 bg-charcoal-light/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-cream/40 text-xs sm:text-sm">
              <Filter size={14} />
              <span>{rings.length} قطعه</span>
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
              {rings.map((ring, index) => (
                <RingCard key={ring.id} ring={ring} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
