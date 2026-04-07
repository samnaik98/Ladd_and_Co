import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer';
}

export default function Logo({ className = "w-8 h-8", variant = 'header' }: LogoProps) {
  const isHeader = variant === 'header';
  
  const src = isHeader 
    ? "https://images.dualite.app/230d1095-6650-454a-a5e9-af7242b4774c/asset-ee320135-bfa1-461d-8d2a-36c8ae1214ab.webp"
    : "https://images.dualite.app/230d1095-6650-454a-a5e9-af7242b4774c/asset-925c4877-c8a5-4b04-bc14-a31c99ecf0db.webp";
    
  // Using mix-blend modes to ensure the solid backgrounds of the webp images 
  // blend seamlessly into the Navbar (light) and Footer (dark) backgrounds.
  const blendMode = isHeader ? 'mix-blend-multiply' : 'mix-blend-lighten';
  
  return (
    <img 
      src={src} 
      alt="Ladd & Co. Logo" 
      className={`${className} object-contain ${blendMode}`} 
    />
  );
}
