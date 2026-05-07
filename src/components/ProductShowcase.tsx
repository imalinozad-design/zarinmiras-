'use client';

import { motion } from 'framer-motion';
import { Gem, Calendar, Weight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  era: string;
  weight: string;
  image: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'گردنبند طلا فیروزه‌دار',
    era: 'دوره قاجار',
    weight: '۴۵ گرم',
    image: '/images/product-necklace.png',
    price: 'تماس بگیرید',
  },
  {
    id: 2,
    name: 'سکه طلای پهلوی',
    era: 'دوره پهلوی',
    weight: '۸ گرم',
    image: '/images/product-coin.png',
    price: 'تماس بگیرید',
  },
  {
    id: 3,
    name: 'دستبند طلا نقش اسلیمی',
    era: 'دهه ۱۳۵۰',
    weight: '۳۲ گرم',
    image: '/images/product-bracelet.png',
    price: 'تماس بگیرید',
  },
  {
    id: 4,
    name: 'گوشواره طلا مرواریددار',
    era: 'دوره قاجار',
    weight: '۱۲ گرم',
    image: '/images/product-earring.png',
    price: 'تماس بگیرید',
  },
  {
    id: 5,
    name: 'انگشتر طلا یاقوت‌دار',
    era: 'عتیقه',
    weight: '۸ گرم',
    image: '/images/product-ring.png',
    price: 'تماس بگیرید',
  },
  {
    id: 6,
    name: 'سرویس طلا عروس',
    era: 'دوره زند',
    weight: '۱۲۰ گرم',
    image: '/images/product-tiara.png',
    price: 'تماس بگیرید',
  },
  {
    id: 7,
    name: 'بروش طلا میناکاری',
    era: 'دوره قاجار',
    weight: '۱۸ گرم',
    image: '/images/product-brooch.png',
    price: 'تماس بگیرید',
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="museum-frame rounded-xl overflow-hidden group cursor-pointer">
        {/* Image area */}
        <div className="relative aspect-square overflow-hidden bg-charcoal-light">
          <img
            src={product.image}
            alt={product.name}
            className="product-image w-full h-full object-cover transition-transform duration-700 ease-out"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Quick action button */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <button className="gold-button px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap">
              مشاهده جزئیات
            </button>
          </div>

          {/* Era badge */}
          <div className="absolute top-3 right-3 bg-charcoal/80 backdrop-blur-sm border border-gold/20 rounded-md px-3 py-1.5 flex items-center gap-1.5">
            <Calendar size={12} className="text-gold/70" />
            <span className="text-cream/80 text-[11px] font-medium">{product.era}</span>
          </div>
        </div>

        {/* Info area */}
        <div className="p-4 sm:p-5 border-t border-gold/10">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-cream font-bold text-sm sm:text-base mb-2 truncate">
                {product.name}
              </h3>
              <div className="flex items-center gap-1.5 text-cream/50 text-xs">
                <Weight size={12} />
                <span>{product.weight}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-gold/70">
              <Gem size={14} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="collection" className="py-16 sm:py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 gereh-pattern-dense" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Decorative line */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-gold/40" />
              <div className="w-2 h-2 rotate-45 border border-gold/40" />
              <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-gold/40" />
            </div>
          </div>

          <p className="text-gold/70 text-xs sm:text-sm tracking-[0.2em] mb-3">
            ویترین گالری
          </p>
          <h2 className="gold-text text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            مجموعه جواهرات
          </h2>
          <p className="text-cream/50 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            هر قطعه جواهر، نماینده‌ای از هنر و صناعت طلای ایران در ادوار مختلف تاریخی است
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-14"
        >
          <button className="px-8 sm:px-12 py-3.5 rounded-lg text-sm sm:text-base font-medium border border-gold/30 text-gold hover:border-gold/60 hover:bg-gold/5 transition-all duration-300">
            مشاهده همه محصولات
          </button>
        </motion.div>
      </div>

      {/* Bottom arabesque border */}
      <div className="arabesque-border mt-16 sm:mt-24" />
    </section>
  );
}
