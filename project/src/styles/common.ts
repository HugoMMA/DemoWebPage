// Common styles used across components
export const container = 'max-w-7xl mx-auto';

// Button styles with neon glow effect
export const buttonStyles = {
  primary: `
    bg-[#00FFFF] text-[#020202] px-6 py-2 font-semibold 
    hover:bg-[#80FFFF] transition-all duration-300
    shadow-[0_0_10px_rgba(0,255,255,0.3)]
    hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]
  `,
  outline: `
    border-2 border-[#00FFFF] text-[#00FFFF] px-6 py-2 font-semibold 
    hover:bg-[#00FFFF]/10 transition-all duration-300
    shadow-[0_0_10px_rgba(0,255,255,0.3)]
    hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]
  `
};

// Neon text effect for cyan text
export const neonText = `
  text-[#00FFFF]
  hover:text-[#80FFFF]
  transition-all duration-300
  hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]
`;