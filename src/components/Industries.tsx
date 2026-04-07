import React from 'react';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

const industries = [
  "Technology & Software",
  "Real Estate & Development",
  "Energy & Natural Resources",
  "Financial Services",
  "Healthcare & Life Sciences",
  "Infrastructure & Logistics",
  "Consumer & Luxury Goods",
  "Private Equity & Venture Capital",
  "Industrials & Manufacturing",
  "Hospitality & Entertainment",
  "Defence & Aerospace",
  "Media & Telecommunications"
];

export default function Industries() {
  return (
    <section id="industries" className="bg-primary py-16 md:py-24 lg:py-32">
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
              04
            </span>
            <span 
              className="font-mono text-[10px] uppercase tracking-widest text-dark/60 my-12"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Industries
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
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
              {industries.map((ind, idx) => (
                <FadeIn 
                  key={idx} 
                  delay={0.05 * idx}
                  className="border-b border-dark/10 py-5 md:py-6 flex items-center group cursor-default"
                >
                  <span className="font-sans text-[14px] text-dark/80 group-hover:text-accent-orange group-hover:translate-x-2 transition-all duration-300">{ind}</span>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
