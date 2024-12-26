import React from 'react';

interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const GridBackground = ({ children, className = '' }: GridBackgroundProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #00FFFF 1px, transparent 1px),
              linear-gradient(to bottom, #00FFFF 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            opacity: '0.05',
          }}
        />
        
        {/* Neon Accent Lines */}
        <div className="absolute -left-20 top-1/4 w-60 h-60 bg-[#00FFFF] rounded-full blur-[128px] opacity-20" />
        <div className="absolute -right-20 bottom-1/4 w-60 h-60 bg-[#00FFFF] rounded-full blur-[128px] opacity-20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;