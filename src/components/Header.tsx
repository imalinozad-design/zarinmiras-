'use client';

import { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const productSubItems = [
  { name: 'گردنبندهای عتیقه', href: '/necklaces' },
  { name: 'سکه‌های قدیمی', href: '/coins' },
  { name: 'دستبندهای کلاسیک', href: '/bracelets' },
  { name: 'انگشترها', href: '/rings' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20">
      {/* Top accent bar */}
      <div className="h-1 gold-shimmer w-full" />

      <div className="bg-charcoal/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - Right side (first in DOM = right in RTL) */}
            <a href="/" className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-8 sm:h-8">
                <circle cx="50" cy="50" r="48" stroke="url(#goldGrad)" strokeWidth="2" fill="none" />
                <circle cx="50" cy="50" r="42" stroke="url(#goldGrad)" strokeWidth="1" fill="none" opacity="0.5" />
                <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" />
                <polygon points="50,22 73,36 73,64 50,78 27,64 27,36" stroke="url(#goldGrad)" strokeWidth="1" fill="none" opacity="0.7" />
                <polygon points="50,35 62,50 50,65 38,50" stroke="url(#goldGrad)" strokeWidth="1.5" fill="rgba(201,168,76,0.1)" />
                <circle cx="50" cy="50" r="4" fill="url(#goldGrad)" />
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e2cc7e" />
                    <stop offset="50%" stopColor="#c9a84c" />
                    <stop offset="100%" stopColor="#a07c28" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col leading-tight">
                <h1 className="gold-text text-sm sm:text-[15px] font-bold">زرین میراث</h1>
                <span className="text-[9px] text-cream/40 hidden sm:block">طلا و جواهرات عتیقه</span>
              </div>
            </a>

            {/* Navigation - Center (Desktop) */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Home */}
              <a
                href="/"
                className="px-3 xl:px-4 py-2 text-cream/80 hover:text-gold text-sm font-medium transition-colors duration-300 relative"
              >
                خانه
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </a>

              {/* Products dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button className="px-3 xl:px-4 py-2 text-cream/80 hover:text-gold text-sm font-medium transition-colors duration-300 relative flex items-center gap-1">
                  <span>محصولات</span>
                  <ChevronDown
                    size={14}
                    className={`text-cream/50 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`}
                  />
                  <span className="absolute bottom-0 right-0 w-full h-0.5 bg-gold transition-all duration-300" style={{ opacity: productsOpen ? 1 : 0 }} />
                </button>

                {/* Dropdown menu */}
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full right-0 mt-1 w-48 bg-charcoal border border-gold/20 rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
                    >
                      <div className="h-0.5 gold-shimmer" />
                      <div className="py-2">
                        {productSubItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2.5 text-cream/70 hover:text-gold hover:bg-gold/5 transition-all duration-200 text-sm font-medium"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact */}
              <a
                href="#contact"
                className="px-3 xl:px-4 py-2 text-cream/80 hover:text-gold text-sm font-medium transition-colors duration-300 relative group"
              >
                تماس با ما
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            </nav>

            {/* Left side: mobile menu + actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                className="lg:hidden text-cream/80 hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="منوی اصلی"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-cream/70 hover:text-gold transition-colors duration-300"
                aria-label="جستجو"
              >
                <Search size={18} />
              </button>
              <button className="p-2 text-cream/70 hover:text-gold transition-colors duration-300 relative" aria-label="سبد خرید">
                <ShoppingCart size={18} />
                <span className="absolute -top-0.5 -left-0.5 w-3.5 h-3.5 bg-gold text-charcoal text-[9px] font-bold rounded-full flex items-center justify-center">
                  ۰
                </span>
              </button>
              <button className="p-2 text-cream/70 hover:text-gold transition-colors duration-300" aria-label="حساب کاربری">
                <User size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-gold/10"
            >
              <div className="max-w-2xl mx-auto px-4 py-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="جستجوی جواهرات عتیقه..."
                    className="w-full bg-charcoal-light border border-gold/20 rounded-lg px-4 py-3 pr-12 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                    autoFocus
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/40" size={18} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-charcoal border-t border-gold/10"
          >
            <nav className="flex flex-col py-4 px-4">
              {/* Home */}
              <a
                href="/"
                className="py-3 px-4 text-cream/80 hover:text-gold hover:bg-gold/5 rounded-lg text-sm font-medium transition-all duration-300 border-b border-gold/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                خانه
              </a>

              {/* Products submenu */}
              <div>
                <button
                  className="w-full py-3 px-4 text-cream/80 hover:text-gold hover:bg-gold/5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-between border-b border-gold/5"
                  onClick={() => setProductsOpen(!productsOpen)}
                >
                  <span>محصولات</span>
                  <ChevronDown
                    size={14}
                    className={`text-cream/40 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pr-4 pb-2">
                        {productSubItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block py-2.5 px-4 text-cream/60 hover:text-gold hover:bg-gold/5 rounded-lg text-[13px] font-medium transition-all duration-200"
                            onClick={() => {
                              setProductsOpen(false);
                              setMobileMenuOpen(false);
                            }}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact */}
              <a
                href="#contact"
                className="py-3 px-4 text-cream/80 hover:text-gold hover:bg-gold/5 rounded-lg text-sm font-medium transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                تماس با ما
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
