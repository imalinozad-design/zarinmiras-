'use client';

import { motion } from 'framer-motion';

const timeline = [
  { era: 'صفویه', year: '۱۵۰۱', description: 'شروع طلاسازی حرفه‌ای در ایران. خاتم‌کاری و فیروزه‌کاری با نقوش اسلامی به اوج رسید.' },
  { era: 'زندیه', year: '۱۷۵۱', description: 'پیدایش سبک منحصربه‌فرد زند در طراحی جواهرات. استفاده از مروارید و یاقوت در تاج‌ها.' },
  { era: 'قاجار', year: '۱۷۸۹', description: 'دوره طلایی جواهرسازی ایرانی. ترکیب هنر ایرانی و اروپایی و خلق قطعات سلطنتی.' },
  { era: 'پهلوی', year: '۱۹۲۵', description: 'مدرن‌سازی طلا با حفظ اصالت ایرانی. تولید سکه‌های طلای معتبر و جواهرات مدرن.' },
];

export default function HistorySection() {
  return (
    <section className="py-14 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-emerald-rich/5 to-charcoal" />
      <div className="absolute inset-0 gereh-pattern opacity-8" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center mb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-gold/40" />
              <div className="w-1.5 h-1.5 rotate-45 border border-gold/40" />
              <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-gold/40" />
            </div>
          </div>
          <h2 className="gold-text text-2xl sm:text-3xl md:text-4xl font-bold mb-3">سفر هنر طلاسازی</h2>
          <p className="text-cream/40 text-xs sm:text-sm max-w-md mx-auto">چهار دوره درخشان هنر طلا و جواهرسازی ایران</p>
        </motion.div>
        <div className="max-w-xl mx-auto relative">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-px w-px bg-gradient-to-b from-gold/5 via-gold/25 to-gold/5" />
          <div className="space-y-6 sm:space-y-8">
            {timeline.map((item, index) => (
              <motion.div key={item.era} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="relative flex items-center">
                <div className={`w-[calc(50%-28px)] ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                  <div className="bg-charcoal-light/50 border border-gold/10 rounded-xl p-3.5 sm:p-4 hover:border-gold/25 transition-all duration-300">
                    <h3 className="text-cream font-bold text-xs sm:text-sm mb-1">دوره {item.era}</h3>
                    <p className="text-cream/45 text-[10px] sm:text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-charcoal border-2 border-gold/30 flex items-center justify-center">
                    <span className="text-gold font-bold text-[10px] sm:text-xs">{item.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}