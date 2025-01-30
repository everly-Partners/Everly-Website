'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/wedding.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        </div>
        
        <div className="text-center">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
            Create your{' '}
            <span className="relative whitespace-nowrap text-pink-300">
              <span className="relative">wedding website</span>
            </span>{' '}
            unique and elegant
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-100">
            Customizable templates to immortalize your love story and share all the details of your big day with your loved ones.
          </p>

          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#templates"
              onClick={(e) => scrollToSection(e, 'templates')}
              className="rounded-full bg-pink-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 transition-all duration-300"
            >
              View our templates
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="rounded-full bg-white/10 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/20 hover:ring-white/30 transition-all duration-300"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 