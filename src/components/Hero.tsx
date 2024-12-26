import React from 'react';
import { Dumbbell, Zap, Trophy } from 'lucide-react';
import Stats from './Stats';
import { container, buttonStyles, neonText } from '../styles/common';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/90 to-transparent"></div>
      </div>

      {/* Content */}
      <div className={`relative ${container} px-4 sm:px-6 lg:px-8 pt-32`}>
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-[#E0FFFF] leading-tight">
              Transform Your Body,<br />
              <span className={`${neonText} text-[#00FFFF] drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]`}>
                Master Your Mind
              </span>
            </h1>
            
            <p className="text-xl text-[#E0FFFF]/80 max-w-lg">
              Professional kickboxing training tailored to your goals. Whether you're a beginner or advanced fighter, we'll help you reach your full potential.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className={`${buttonStyles.primary} rounded-md`}>
                Start Training
              </button>
              <button className={`${buttonStyles.outline} rounded-md`}>
                View Programs
              </button>
            </div>

            <Stats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;