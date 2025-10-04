'use client'
import Image from 'next/image'
import ProductCard from './components/ProductCard'
import Link from "next/link";
import { ArrowRight } from "lucide-react"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[60vh] pb-10 pt-16">
        {/* Engine image (centered) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/engine.png"
            alt="Engine"
            width={580}
            height={380}
            className="opacity-20 md:opacity-25 object-contain mx-auto"
            style={{
              maxWidth: '68vw',
              minWidth: '260px',
              maxHeight: '50vh',
            }}
            priority
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center pt-12">
          <h1 className="font-extrabold text-4xl md:text-6xl text-white mb-4 leading-tight drop-shadow-lg">
            Premium Engine Oils<br />for Peak Performance
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Protect your engine. Enhance your drive.
          </p>

          {/* Jump to products */}
          <a
            href="/products"
            className="bg-peakyellow text-peakblue font-bold text-xl px-8 py-4 rounded-xl shadow hover:bg-yellow-400 transition"
          >
            See Products
          </a>
        </div>

        {/* Section indicator */}
        <div className="flex items-center justify-center gap-4 mt-12 mb-20">
          <span className="block w-8 h-1 rounded-full bg-white transition-all"></span>
          <span className="block w-8 h-1 rounded-full bg-white/30"></span>
          <span className="block w-8 h-1 rounded-full bg-white/30"></span>
        </div>
      </section>

      {/* --- SINGLE CURVE ONLY BEHIND ABOUT SECTION --- */}
      <div className="relative">
        {/* SVG curve - only behind About */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-[-80px] w-[120vw] h-[300px] z-0"
          viewBox="0 0 1440 300"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 140 Q450 80 800 140 Q1200 210 1440 100 L1440 300 L0 300 Z"
            fill="#001A39"
            opacity="0.5"
          />
        </svg>

        {/* ABOUT */}
   {/* ABOUT */}
<section
  id="about"
  className="max-w-4xl mx-auto w-full py-12 px-4 md:px-0 mb-16 relative z-10 -mt-32 scroll-mt-24"
>
  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-peakyellow">
    About Us
  </h2>
  <p className="text-white text-lg">
    KPoil is a leader in advanced engine oils, providing high-performance
    solutions for cars, trucks, and industry.
  </p>

  
  <Link
    href="/about"
    className="group mt-4 inline-flex items-center gap-2 text-peakyellow hover:text-yellow-300 transition"
    aria-label="Learn more about us"
  >
    <span>Learn More</span>
    <ArrowRight className="h-5 w-5 translate-x-0 transition-transform duration-200 group-hover:translate-x-1" />
  </Link>
  
</section>
      </div>

      {/* PRODUCTS */}
      <section id="products" className="px-4 md:px-6 scroll-mt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Product Highlights</h2>

            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-peakyellow hover:text-yellow-300 transition"
              aria-label="View all products"
            >
              <span className="hidden sm:inline">View All</span>
              <ArrowRight className="h-5 w-5 translate-x-0 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>


        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div id="xpro">
            <ProductCard
              imgSrc="/products/engine_oil/03.png"  
              title="K.P.A.A D17000"
              api="API CH-4 / SAE 20W-50"
              desc="Supercharged diesel engine oil for power and durability."
              liters='20L'
            />
          </div>

          <div id="maxglow">
            <ProductCard
              imgSrc="/products/engine_oil/02.png"
              title="Hydraulic Oil VG68"
              api="ISO VG 68"
              desc="High-performance hydraulic fluid for smooth and reliable system operation."
              liters='20L'
            />
          </div>

          <div id="turbomax" className="relative z-20">
            <ProductCard
              imgSrc="/products/engine_oil/05.png"
              title="Absolute VX 20000"
              api="API CI-4 / SAE 10W-40"
              desc="Reliable protection for turbocharged diesel engines."
              liters='20L'
            />
          </div>


          <div id="turbomax2" className = "relative z-50" >
            <ProductCard
              imgSrc="/products/engine_oil/12.png"
              title="Alamoot 85W-140"
              api="API GL-5"
              desc="Heavy-duty gear oil for transmissions and differentials."
              liters='20L'
            />
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold">
              Need bulk orders, OEM quotes, or MSDS sheets?
            </h3>
            <p className="text-slate-300 text-sm">
              Our team will help you choose the right grade and arrange delivery.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wa.me/+233500010666"
              className="rounded-xl bg-green-500 px-4 py-2 text-white font-medium hover:opacity-90 transition"
            >
              WhatsApp Us
            </a>
            <a
              href="/contact"
              className="rounded-xl border border-white/20 px-4 py-2 text-white font-medium hover:border-peakyellow/50 transition"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
