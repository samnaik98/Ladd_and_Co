import React from 'react';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

const clientTypes = [
  "Ultra-High-Net-Worth Individuals & Families",
  "Institutional & Sovereign Investors",
  "Single & Multi-Family Offices",
  "Private Equity & Venture Principals",
  "Private Holding Companies",
  "Family-Owned Enterprises"
];

export default function Clients() {
  return (
    <section id="clients" className="bg-primary pt-16 md:pt-24 lg:pt-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex gap-4 md:gap-8 lg:gap-16">
          
          {/* Left Axis */}
          <div className="w-4 md:w-8 shrink-0 relative flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-1.5 h-1.5 bg-accent-orange mb-3" 
            />
            <span className="font-mono text-[10px] text-dark/60">
              03
            </span>
            <span 
              className="font-mono text-[10px] uppercase tracking-widest text-dark/60 my-12"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Clients
            </span>
            {/* Continuous Dotted Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="flex-1 w-[2px] bg-[linear-gradient(to_bottom,#CD5C1C_50%,transparent_50%)] bg-[length:2px_8px]" 
            />
          </div>

          {/* Content */}
          <div className="flex-1 pb-16 md:pb-24 lg:pb-32">
            
            {/* Header Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mb-16 lg:mb-24">
              {/* Image Column */}
              <div className="lg:col-span-5">
                <FadeIn direction="right" fullWidth>
                  <div className="w-full aspect-square md:aspect-[4/5] bg-secondary overflow-hidden group">
                    <img 
                      src="https://images.dualite.app/230d1095-6650-454a-a5e9-af7242b4774c/asset-98ad581e-cdbe-45f9-9e56-59217e3007ec.webp" 
                      alt="Vertical Concrete Pillars Architecture" 
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                  </div>
                </FadeIn>
              </div>
              
              {/* Text Column */}
              <div className="lg:col-span-7 flex flex-col justify-center pt-6 lg:pt-0">
                <FadeIn delay={0.2}>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-dark/60 mb-6 md:mb-8 block">
                    Who We Serve
                  </span>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-[40px] leading-[1.3] lg:leading-[1.25] text-dark max-w-2xl">
                    Our clients are <span className="italic font-light">entrepreneurs, principals, and multi-generational families managing significant private wealth</span> across multiple jurisdictions.
                  </h2>
                </FadeIn>
              </div>
            </div>

            {/* Paragraphs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 mb-16 lg:mb-24">
              <div className="hidden lg:block lg:col-span-5"></div>
              <div className="lg:col-span-7 flex flex-col gap-4 md:gap-6">
                <FadeIn delay={0.4}>
                  <p className="font-sans text-[14px] text-dark/70 leading-relaxed max-w-xl">
                    Many have complex holding structures, diverse asset portfolios, and professional teams that require a senior point of coordination.
                  </p>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <p className="font-sans text-[14px] text-dark/70 leading-relaxed max-w-xl">
                    We also act for institutional investors, sovereign entities, and private offices requiring independent advisory on specific transactions or matters.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16">
              {clientTypes.map((type, idx) => (
                <FadeIn 
                  key={idx} 
                  delay={0.1 * idx}
                  className="flex items-center gap-4 md:gap-6 border-t border-dark/10 py-6 md:py-8 group hover:pl-2 transition-all duration-300"
                >
                  <div className="w-4 md:w-6 h-[1px] bg-accent-orange shrink-0 group-hover:w-6 md:group-hover:w-8 transition-all duration-300" />
                  <span className="font-serif text-[16px] md:text-[19px] text-dark group-hover:text-accent-orange transition-colors duration-300">{type}</span>
                </FadeIn>
              ))}
            </div>
            {/* Bottom border for the last row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16">
              <div className="border-t border-dark/10 h-1"></div>
              <div className="border-t border-dark/10 h-1 hidden md:block"></div>
            </div>

          </div>
        </div>
      </div>

      {/* Discretion Block */}
      <div className="bg-[#C5CAAA]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32">
          <div className="flex gap-4 md:gap-8 lg:gap-16">
            
            {/* Left Axis - Dotted Line Only */}
            <div className="w-4 md:w-8 shrink-0 relative flex justify-center">
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-[2px] bg-[linear-gradient(to_bottom,#CD5C1C_50%,transparent_50%)] bg-[length:2px_8px]" 
              />
            </div>

            {/* Content */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
              <div className="lg:col-span-6">
                <FadeIn delay={0.2}>
                  <h3 className="font-serif italic font-light text-3xl md:text-4xl lg:text-[52px] text-dark leading-[1.2] lg:leading-[1.15]">
                    Discretion is not a policy.<br/>It is the nature of the work.
                  </h3>
                </FadeIn>
              </div>
              <div className="lg:col-span-6 flex flex-col gap-8 lg:gap-12 justify-end">
                <FadeIn delay={0.4}>
                  <p className="font-sans text-[13px] text-dark/80 leading-relaxed max-w-lg">
                    Our clients engage us because the matters they face are too consequential for rigid institutional processes and too complex for any single advisor. We operate with a permanent obligation of confidentiality — not because it is expected, but because the work demands it. The details of our engagements, our client relationships, and the outcomes we achieve are never disclosed.
                  </p>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent-orange max-w-sm leading-relaxed">
                    This is not a feature of our service. It is the foundation of it.
                  </p>
                </FadeIn>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
