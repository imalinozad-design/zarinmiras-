'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LivePrices from '@/components/LivePrices';
import ProductShowcase from '@/components/ProductShowcase';
import HistorySection from '@/components/HistorySection';
import FAQ from '@/components/FAQ';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <LivePrices />
        <ProductShowcase />
        <HistorySection />
        <FAQ />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}
