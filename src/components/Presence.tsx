import React from 'react';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

const locations = [
  { city: "New York, New York", country: "United States" },
  { city: "Palm Beach, Florida", country: "United States" },
  { city: "George Town", country: "Cayman Islands" },
  { city: "London", country: "United Kingdom" },
  { city: "Zürich", country: "Switzerland" },
  { city: "Dubai", country: "United Arab Emirates" },
  { city: "Singapore", country: "Republic of Singapore" },
  { city: "Hong Kong", country: "SAR, China" },
  { city: "Sydney, New South Wales", country: "Australia" }
];

export default function Presence() {
  return (
    <section id="presence" className="bg-primary pb-16 md:pb-24 lg:pb-32">
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
              05
            </span>
            <span 
              className="font-mono text-[10px] uppercase tracking-widest text-dark/60 my-12"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Presence
            </span>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12">
              {locations.map((loc, idx) => (
                <FadeIn 
                  key={idx} 
                  delay={0.1 * idx}
                  className="border-b border-dark/10 py-6 md:py-8 flex flex-col gap-1 md:gap-2 group cursor-default"
                >
                  <span className="font-serif text-[20px] md:text-[22px] text-dark group-hover:text-accent-orange transition-colors duration-300">{loc.city}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-orange opacity-80 group-hover:opacity-100 transition-opacity duration-300">{loc.country}</span>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
