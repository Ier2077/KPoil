'use client'
import React from 'react'; // Added React for hooks
import Image from 'next/image'
import ProductCard from './components/ProductCard'
import Link from "next/link";
import { ArrowRight } from "lucide-react"; 

export default function Home() {
  // --- Slideshow State and Data ---
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const slideshowImages = [
    { src: '/slideshow/BC5A10699.jpg', alt: 'High-performance engine oil' },
    { src: '/slideshow/BC5A10833.jpg', alt: 'Industrial lubrication solutions' },
    { src: '/slideshow/BC5A11900.jpg', alt: 'Close-up of a modern engine' },
  ];

  // --- Slideshow Auto-Play Effect ---
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const isLastSlide = currentIndex === slideshowImages.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000); // Change slide every 5 seconds

    return () => clearTimeout(timer);
  }, [currentIndex, slideshowImages.length]);

  return (
    <div className="bg-slate-950">
      {/* --- HERO SECTION WITH BACKGROUND SLIDESHOW --- */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden">
        
        {/* Background Slideshow Container */}
        <div className="absolute inset-0 z-0">
          <div
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slideshowImages.map((image, index) => (
              <div key={index} className="relative flex-shrink-0 w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          {/* Dimming and Blur Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        {/* Foreground Hero Content */}
        <div className="relative z-10 flex flex-col items-center pt-12">
          <h1 className="font-extrabold text-4xl md:text-6xl text-white mb-4 leading-tight drop-shadow-lg">
            Premium Engine Oils<br />for Peak Performance
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Protect your engine. Enhance your drive.
          </p>
          <a
            href="/products"
            className="bg-peakyellow text-peakblue font-bold text-xl px-8 py-4 rounded-xl shadow hover:bg-yellow-400 transition"
          >
            See Products
          </a>
        </div>
      </section>

      {/* --- The rest of your page content remains below --- */}
      <div className="relative z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
        
        {/* ABOUT SECTION */}
        <div className="relative">
          <svg className="absolute left-1/2 -translate-x-1/2 top-[-80px] w-[120vw] h-[300px] z-0" viewBox="0 0 1440 300" fill="none" preserveAspectRatio="none">
            <path d="M0 140 Q450 80 800 140 Q1200 210 1440 100 L1440 300 L0 300 Z" fill="#001A39" opacity="0.5" />
          </svg>
          <section id="about" className="max-w-4xl mx-auto w-full py-12 px-4 md:px-0 mb-16 relative z-10 -mt-32 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-peakyellow">About Us</h2>
            <p className="text-white text-lg">
              KPoil is a leader in advanced engine oils, providing high-performance solutions for cars, trucks, and industry.
            </p>
            <Link href="/about" className="group mt-4 inline-flex items-center gap-2 text-peakyellow hover:text-yellow-300 transition" aria-label="Learn more about us">
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5 translate-x-0 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </section>
        </div>

        {/* PRODUCTS SECTION */}
        <section id="products" className="px-4 md:px-6 scroll-mt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Product Highlights</h2>
            <Link href="/products" className="group inline-flex items-center gap-2 text-peakyellow hover:text-yellow-300 transition" aria-label="View all products">
              <span className="hidden sm:inline">View All</span>
              <ArrowRight className="h-5 w-5 translate-x-0 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div id="xpro"><ProductCard imgSrc="/products/engine_oil/03.png" title="K.P.A.A D17000" api="API CH-4 / SAE 20W-50" desc="Supercharged diesel engine oil for power and durability." liters='20L'/></div>
            <div id="maxglow"><ProductCard imgSrc="/products/engine_oil/02.png" title="Hydraulic Oil VG68" api="ISO VG 68" desc="High-performance hydraulic fluid for smooth and reliable system operation." liters='20L'/></div>
            <div id="turbomax" className="relative z-20"><ProductCard imgSrc="/products/engine_oil/05.png" title="Absolute VX 20000" api="API CI-4 / SAE 10W-40" desc="Reliable protection for turbocharged diesel engines." liters='20L'/></div>
            <div id="turbomax2" className="relative z-50"><ProductCard imgSrc="/products/engine_oil/12.png" title="Alamoot 85W-140" api="API GL-5" desc="Heavy-duty gear oil for transmissions and differentials." liters='20L'/></div>
          </div>
        </section>
        
        {/* BOTTOM CTA SECTION */}
        <section className="border-t border-white/10 bg-white/5">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold">Need bulk orders, OEM quotes, or MSDS sheets?</h3>
              <p className="text-slate-300 text-sm">Our team will help you choose the right grade and arrange delivery.</p>
            </div>
            <div className="flex gap-3">
              <a href="https://wa.me/+233500010666" className="rounded-xl bg-green-500 px-4 py-2 text-white font-medium hover:opacity-90 transition">WhatsApp Us</a>
              <a href="/contact" className="rounded-xl border border-white/20 px-4 py-2 text-white font-medium hover:border-peakyellow/50 transition">Contact Sales</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}