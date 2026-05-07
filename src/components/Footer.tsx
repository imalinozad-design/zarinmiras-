'use client';

import { MapPin, Phone, Mail, Clock, Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-gold/15">
      {/* Top accent */}
      <div className="h-px gold-shimmer w-full" />

      <div className="bg-charcoal/95 backdrop-blur-sm">
        {/* Newsletter section */}
        <div className="border-b border-gold/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="gold-text text-xl sm:text-2xl font-bold mb-3">عضویت در خبرنامه</h3>
              <p className="text-cream/50 text-sm mb-6">
                از جدیدترین محصولات و پیشنهادات ویژه باخبر شوید
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید..."
                  className="flex-1 bg-charcoal-light border border-gold/20 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all"
                />
                <button className="gold-button px-6 py-3 rounded-lg text-sm font-bold whitespace-nowrap">
                  عضویت
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center sm:items-start mb-5">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-3">
                  <circle cx="50" cy="50" r="48" stroke="url(#goldGrad2)" strokeWidth="2" fill="none" />
                  <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" stroke="url(#goldGrad2)" strokeWidth="1.5" fill="none" />
                  <polygon points="50,22 73,36 73,64 50,78 27,64 27,36" stroke="url(#goldGrad2)" strokeWidth="1" fill="none" opacity="0.7" />
                  <polygon points="50,35 62,50 50,65 38,50" stroke="url(#goldGrad2)" strokeWidth="1.5" fill="rgba(201,168,76,0.1)" />
                  <circle cx="50" cy="50" r="4" fill="url(#goldGrad2)" />
                  <defs>
                    <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e2cc7e" />
                      <stop offset="50%" stopColor="#c9a84c" />
                      <stop offset="100%" stopColor="#a07c28" />
                    </linearGradient>
                  </defs>
                </svg>
                <h4 className="gold-text text-lg font-bold">زرین میراث</h4>
              </div>
              <p className="text-cream/40 text-sm leading-relaxed text-center sm:text-right">
                مجموعه‌ای منحصربه‌فرد از طلا و جواهرات عتیقه ایرانی با تضمین اصالت و کیفیت
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-cream font-bold text-sm mb-5 flex items-center gap-2">
                <div className="w-1 h-4 bg-gold/50 rounded-full" />
                دسترسی سریع
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'گردنبندهای عتیقه', href: '/necklaces' },
                  { name: 'سکه‌های قدیمی', href: '/coins' },
                  { name: 'دستبندهای کلاسیک', href: '/bracelets' },
                  { name: 'انگشترها', href: '/rings' },
                  { name: 'تماس با ما', href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-cream/40 hover:text-gold text-sm transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer service */}
            <div>
              <h4 className="text-cream font-bold text-sm mb-5 flex items-center gap-2">
                <div className="w-1 h-4 bg-gold/50 rounded-full" />
                خدمات مشتریان
              </h4>
              <ul className="space-y-3">
                {['نحوه خرید', 'شرایط بازگشت', 'گارانتی اصالت', 'سوالات متداول', 'حریم خصوصی'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-cream/40 hover:text-gold text-sm transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-cream font-bold text-sm mb-5 flex items-center gap-2">
                <div className="w-1 h-4 bg-gold/50 rounded-full" />
                ارتباط با ما
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold/60 mt-1 shrink-0" />
                  <span className="text-cream/40 text-sm leading-relaxed">تهران، بازار بزرگ، راسته طلافروشان</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-gold/60 shrink-0" />
                  <span className="text-cream/40 text-sm" dir="ltr">021-55512345</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-gold/60 shrink-0" />
                  <span className="text-cream/40 text-sm" dir="ltr">info@zarrin-meras.ir</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} className="text-gold/60 mt-1 shrink-0" />
                  <span className="text-cream/40 text-sm leading-relaxed">شنبه تا پنج‌شنبه | ۹ صبح تا ۹ شب</span>
                </li>
              </ul>

              {/* Social icons */}
              <div className="flex items-center gap-3 mt-5">
                <a href="#" className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold/60 hover:bg-gold/20 hover:text-gold transition-all duration-300">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold/60 hover:bg-gold/20 hover:text-gold transition-all duration-300">
                  <Send size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-cream/30 text-xs">
              <p>© ۱۴۰۳ زرین میراث. تمامی حقوق محفوظ است.</p>
              <p className="flex items-center gap-2">
                طراحی شده توسط
                <span className="text-gold/60 font-medium">علی نوزاد</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
