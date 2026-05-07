import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const vazirmatn = localFont({
  src: "../fonts/Vazirmatn-Variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "زرین میراث | طلا و جواهرات عتیقه",
  description: "مجموعه‌ای بی‌نظیر از طلا و جواهرات عتیقه و کلاسیک ایرانی. گردنبندها، سکه‌ها، دستبندها و انگشترهایی با اصالت تاریخی.",
  keywords: ["طلا عتیقه", "جواهرات قدیمی", "سکه طلای قدیمی", "گردنبند قاجار", "طلا ایرانی"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazirmatn.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: "var(--font-vazirmatn), system-ui, sans-serif" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
