'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 'faq-1',
    question: 'آیا محصولات شما اصل هستند؟',
    answer: 'بله، تمامی محصولات زرین میراث دارای گواهی اصالت و شناسنامه معتبر هستند. هر قطعه با دقت توسط کارشناسان ما بررسی و تأیید می‌شود.',
  },
  {
    id: 'faq-2',
    question: 'چگونه می‌توانم سفارش خود را پیگیری کنم؟',
    answer: 'پس از ثبت سفارش، کد پیگیری برای شما ارسال می‌شود. همچنین می‌توانید با تماس تلفنی وضعیت سفارش خود را از تیم پشتیبانی بپرسید.',
  },
  {
    id: 'faq-3',
    question: 'آیا امکان ارسال به شهرستان‌ها وجود دارد؟',
    answer: 'بله، ما به تمامی شهرهای ایران ارسال انجام می‌دهیم. ارسال تهران حداکثر ۲۴ ساعت و ارسال شهرستان‌ها ۲ تا ۳ روز کاری طول می‌کشد.',
  },
  {
    id: 'faq-4',
    question: 'شرایط مرجوع کردن کالا چگونه است؟',
    answer: 'در صورت مغایرت کالا با توضیحات سایت، تا ۷ روز پس از دریافت امکان مرجوعی وجود دارد. کالا باید در بسته‌بندی اصلی و بدون استفاده باشد.',
  },
  {
    id: 'faq-5',
    question: 'آیا قیمت‌ها قابل مذاکره هستند؟',
    answer: 'قیمت‌های سایت بر اساس وزن طلای خالص و ارزش سنگ‌های قیمتی محاسبه شده‌اند. برای خریدهای عمده یا سفارش‌های خاص، تخفیف ویژه در نظر گرفته می‌شود.',
  },
  {
    id: 'faq-6',
    question: 'نحوه نگهداری از طلا و جواهرات چگونه است؟',
    answer: 'از تماس مستقیم طلا با عطر، ادکلن و مواد شیمیایی خودداری کنید. جواهرات را در جعبه جداگانه نگهداری کنید و هر از گاهی با پارچه نرم تمیز نمایید.',
  },
  {
    id: 'faq-7',
    question: 'آیا خدمات تعمیر و بازسازی هم انجام می‌دهید؟',
    answer: 'بله، واحد تعمیرات ما آماده提供服务 در زمینه رینگ‌سازی، سنگ‌چسبانی، روکاری و بازسازی محصولات قدیمی است.',
  },
];

export default function FAQ() {
  return (
    <section className="py-14 sm:py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 gereh-pattern opacity-8" />

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
            سوالات متداول
          </h2>
          <p className="text-cream/40 text-xs sm:text-sm max-w-md mx-auto">
            پاسخ سوالات رایج شما درباره خرید و خدمات زرین میراث
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-gold/10 bg-charcoal-light/40 rounded-lg px-4 sm:px-5 mb-2 last:mb-0"
              >
                <AccordionTrigger className="text-cream/90 hover:text-gold text-sm sm:text-base font-medium py-4 no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-cream/50 text-xs sm:text-sm leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
