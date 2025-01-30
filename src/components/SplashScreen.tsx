'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      document.body.style.overflow = 'unset';
      onFinish();
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-white to-pink-50 flex items-center justify-center z-50 h-screen w-screen overflow-hidden">
      <div className="animate-logo max-w-[90vw] flex items-center justify-center">
        <div className="w-[300px] sm:w-[400px] md:w-[500px]">
          <Image
            src="/everly.png"
            alt="Everly Logo"
            width={800}
            height={800}
            priority
            className="drop-shadow-2xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
} 