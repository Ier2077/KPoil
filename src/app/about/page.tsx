'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const companyImages = [
  { src: '/BC5A11900.jpg', alt: 'Our Factory' },
  { src: '/BC5A10833.jpg', alt: 'The Team' },
  { src: '/BC5A10699.jpg', alt: 'Research and Development' },
  { src: '/slideshow/3M4A94766.jpg', alt: 'Research and Development' },
  { src: '/slideshow/3M4A94944.jpg', alt: 'Research and Development' },

];

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? companyImages.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === companyImages.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400"
        >
          Heritage in Name. Innovation in Tech.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 max-w-3xl mx-auto"
        >
          At KPoil, we combine innovation, precision, and passion to craft
          high-performance lubricants trusted worldwide — from the race track to
          heavy industries.
        </motion.p>
      </section>

      {/* Company Story */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-300 text-center">
          KP Motor Oil – Heritage in Name, Innovation in Tech
        </h2>
        <div className="text-gray-300 leading-relaxed space-y-4 text-left">
          <p>
            KP Motor Oil is a distinguished premium lubricant brand rooted in the heart of the Middle East, proudly blending decades of regional expertise with state-of-the-art global innovation. Drawing from the finest Group II+ and Group III base oils produced in the region—recognized worldwide for their exceptional purity, stability, and performance—KP formulations deliver unparalleled engine protection and efficiency.
          </p>
          <p>
            Engineered with the most advanced additive packages and high-performance polymers sourced from leading global technology providers, KP Motor Oil incorporates cutting-edge chemistry that meets and exceeds the latest API, ACEA, and OEM specifications.
          </p>
          <p>
            By closely following in the footsteps of the world's most renowned lubricant manufacturers, KP ensures every product reflects rigorous R&D, superior viscosity stability, outstanding oxidation resistance, and enhanced fuel economy.
          </p>
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">The KP portfolio comprehensively covers:</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Fully synthetic, semi-synthetic, and mineral gasoline engine oils for passenger cars and high-performance vehicles</li>
              <li>Heavy-duty diesel engine oils designed for commercial fleets, construction, and agricultural machinery</li>
              <li>A complete range of industrial lubricants, including hydraulic fluids, gear oils, turbine oils, and specialty greases</li>
            </ul>
          </div>
          <p className="pt-4 text-center italic text-yellow-200">
            With its guiding principle — <strong>Heritage in Name, Innovation in Tech</strong> — KP Motor Oil stands as the trusted choice for discerning customers across the Middle East and beyond who demand proven legacy performance combined with tomorrow's technology today.
          </p>
          <p className="text-center font-bold text-yellow-400 text-xl pt-2">
            KP Motor Oil. Timeless Quality. Future-Ready Performance.
          </p>
        </div>
      </section>

      {/* Slideshow */}
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
        {companyImages.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ${currentIndex === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1000}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full"
        >
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {companyImages.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer ${currentIndex === i ? 'bg-yellow-400' : 'bg-gray-500'
              }`}
          ></span>
        ))}
      </div>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-8">
          Why Customers Choose KPoil
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Innovation',
              text: 'We constantly develop new lubricant technologies that outperform global standards.',
            },
            {
              title: 'Performance',
              text: 'Our oils are trusted by top-tier racing teams and industrial leaders worldwide.',
            },
            {
              title: 'Sustainability',
              text: 'We commit to reducing environmental impact through eco-friendly formulations.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-slate-800/50 p-6 rounded-xl shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2 text-yellow-400">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-slate-900/40 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-6">
          Our Journey
        </h2>
        <p className="max-w-4xl mx-auto text-gray-300">
          Since our founding, KPoil has grown from a small startup into a global
          player in lubrication solutions. With presence across multiple
          countries, a strong R&D foundation, and world-class partnerships, we
          continue to push the limits of what’s possible in performance and
          protection.
        </p>
      </section>

      {/* Contact Preview */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-300 mb-6">
          Have a question or need product recommendations? Our experts are ready
          to help.
        </p>
        <a
          href="tel:+233245643503"
          className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition w-fit"
        >
          <Phone size={20} /> Contact Us
        </a>

      </section>
    </main>
  );
}
