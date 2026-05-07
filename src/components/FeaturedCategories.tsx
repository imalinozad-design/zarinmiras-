'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: string;
}

const categories: CategoryItem[] = [
  {
    id: 'section-coins',
    name: 'سکه‌های طلای قدیمی',
    subtitle: 'Old Gold Coins',
    description: 'سکه‌های نادر و ارزشمند از دوره‌های مختلف تاریخی ایران',
    image: '/images/product-coin.png',
    itemCount: '۱۸ قطعه',
  },
  {
    id: 'section-bracelets',
    name: 'دستبندهای کلاسیک',
    subtitle: 'Classic Bracelets',
    description: 'دستبندهای طلا با طرح‌های اسلیمی و ختایی',
    image: '/images/product-bracelet.png',
    itemCount: '۱۵ قطعه',
  },
  {
    id: 'section-rings',
    name: 'انگشترهای عتیقه',
    subtitle: 'Vintage Rings',
    description: 'انگشترهایی با سنگ‌های قیمتی و کار هنری بی‌نظیر',
    image: '/images/product-ring.png',
    itemCount: '۲۲ قطعه',
  },
];

function CategoryCard({ category, index }: { category: CategoryItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      viewport={{ once: true }}
    >
      <a href={category.id} className="group block">
        <div className="relative overflow-hidden rounded-lg border border-gold/15 hover:border-gold/35 transition-all duration-400 bg-charcoal-light/40 hover:bg-charcoal-light/70">
          {/* Image */}
          <div className="relative h-36 sm:h-44 overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

            {/* Badge */}
            <div className="absolute top-2.5 right-2.5 bg-charcoal/70 backdrop-blur-sm border border-gold/15 rounded-md px-2.5 py-1">
              <span className="text-cream/70 text-[10px] sm:text-[11px] font-medium">{category.itemCount}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-3.5 sm:p-4">
            <p className="text-cream/25 text-[10px] tracking-widest uppercase mb-1">{category.subtitle}</p>
            <h3 className="text-cream font-bold text-sm sm:text-base mb-1.5">{category.name}</h3>
            <p className="text-cream/40 text-[11px] sm:text-xs leading-relaxed mb-3 line-clamp-1">
              {category.description}
            </p>
            <div className="flex items-center gap-1.5 text-gold/60 group-hover:text-gold transition-colors duration-300">
              <span className="text-[11px] sm:text-xs font-medium">مشاهده</span>
              <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function FeaturedCategories() {
  return (
    <section className="py-12 sm:py-16 relative">
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
            دسته‌بندی‌های ویژه
          </h2>
          <p className="text-cream/40 text-xs sm:text-sm max-w-md mx-auto">
            مجموعه‌های دسته‌بندی شده از بهترین جواهرات عتیقه ایرانی
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
