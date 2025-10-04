// Location: app/about/page.tsx
'use client'; // This is a client component because it uses state and effects

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// Notice the CSS module import is now removed

// --- Add your company images here ---
const companyImages = [
    { src: 'https://via.placeholder.com/800x500?text=Our+Modern+Factory', alt: 'Our Factory' },
    { src: 'https://via.placeholder.com/800x500?text=The+KPoil+Team', alt: 'The Team' },
    { src: 'https://via.placeholder.com/800x500?text=Research+&+Development', alt: 'Research and Development' },
];
// ------------------------------------

export default function AboutPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? companyImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === companyImages.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Optional: For automatic slideshow
    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        // Cleanup the timer when the component unmounts or index changes
        return () => clearTimeout(timer);
    }, [currentIndex, nextSlide]); // Added nextSlide to dependency array


    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">

                <section className="aboutSection">
                    <h1>About Our Company</h1>
                    <p>
                        KPoil was founded with a single mission: to engineer the most advanced engine oils for those who demand peak performance. From our state-of-the-art laboratories to the race track, we are dedicated to pushing the boundaries of lubrication technology. Our products are trusted by professional racing teams, industrial leaders, and everyday drivers who want to protect their investment and enhance their drive.
                    </p>
                </section>

            <div className="slideshowContainer">
                {/* Image Slide */}
                {companyImages.map((image, index) => (
                    <div
                        key={index}
                        className={`slide fade ${currentIndex === index ? 'active' : ''}`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={800}
                            height={500}
                            style={{ width: '100%', height: 'auto' }} // Makes image responsive
                        />
                    </div>
                ))}

                {/* Navigation Arrows */}
                <a className="prev" onClick={prevSlide}>&#10094;</a>
                <a className="next" onClick={nextSlide}>&#10095;</a>
            </div>

            {/* Dot Indicators */}
            <div className="dotsContainer">
                {companyImages.map((_, slideIndex) => (
                    <span
                        key={slideIndex}
                        className={`dot ${currentIndex === slideIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(slideIndex)}
                    ></span>
                ))}
            </div>
        </main>
    );
}