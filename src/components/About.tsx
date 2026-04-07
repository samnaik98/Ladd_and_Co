import React from 'react';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-primary">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32">
        <div className="flex gap-4 md:gap-8 lg:gap-16">
          
          {/* Left Axis */}
          <div className="w-4 md:w-8 shrink-0 relative flex flex-col items-start">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-1.5 h-1.5 bg-accent-orange mb-3" 
            />
            <span className="font-mono text-[10px] text-dark/60 mb-6">
              01
            </span>
            {/* Continuous Dotted Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-[2px] bg-[linear-gradient(to_bottom,#CD5C1C_50%,transparent_50%)] bg-[length:2px_8px]" 
            />
          </div>

          {/* Content Grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
            
            {/* Left Image */}
            <div className="lg:col-span-5">
              <FadeIn direction="right" fullWidth>
                <div className="w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[800px] bg-secondary overflow-hidden group">
                  <img 
                    src="https://images.dualite.app/230d1095-6650-454a-a5e9-af7242b4774c/asset-e684e3d5-a665-4ca4-84af-047351b85159.webp" 
                    alt="Cascading Architecture" 
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col pt-4">
              <FadeIn delay={0.2}>
                <span className="font-mono text-[11px] uppercase tracking-widest text-dark/60 mb-6 md:mb-8 block">
                  About the Firm
                </span>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[52px] leading-[1.2] lg:leading-[1.15] text-dark mb-12 lg:mb-24 max-w-2xl">
                  We advise where the stakes are highest and the margin for error is smallest.
                </h2>
              </FadeIn>
              
              {/* Indented Paragraphs */}
              <div className="flex flex-col gap-6 lg:gap-8 lg:w-[65%] lg:ml-auto">
                <FadeIn delay={0.4}>
                  <p className="font-sans text-[14px] text-dark/70 leading-relaxed">
                    Our clients are individuals and families with significant wealth, complex international structures, and affairs that span multiple jurisdictions, advisors, and asset classes.
                  </p>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <p className="font-sans text-[14px] text-dark/70 leading-relaxed">
                    We do not manage assets. We do not sell financial products. We provide independent counsel and hands-on execution across the full spectrum of our clients' private affairs — from capital deployment and M&A to international structuring and the resolution of distressed or disputed matters.
                  </p>
                </FadeIn>
                <FadeIn delay={0.6}>
                  <p className="font-sans text-[14px] text-dark/70 leading-relaxed">
                    We work alongside our clients' existing professional teams — their lawyers, accountants, bankers, and investment managers — ensuring alignment, identifying gaps, and resolving issues that fall between the cracks.
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
