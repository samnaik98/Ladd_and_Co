import React from 'react';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-20">
      
      {/* Top Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-[#E4E6D9] border-b border-dark/5"
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 h-[50px] flex items-center">
          <div className="flex gap-4 md:gap-8 lg:gap-16 w-full items-center group cursor-pointer">
            <div className="w-4 md:w-8 shrink-0 flex items-center">
              <div className="w-1.5 h-1.5 bg-accent-orange group-hover:scale-150 transition-transform duration-500" />
            </div>
            <span className="font-serif text-[14px] md:text-[15px] text-dark group-hover:text-accent-orange transition-colors duration-300">
              Request an Introduction <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Hero Content */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:py-24">
        <div className="flex gap-4 md:gap-8 lg:gap-16">
          
          {/* Left Axis */}
          <div className="w-4 md:w-8 shrink-0 relative">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-1.5 h-1.5 bg-accent-orange absolute top-3 md:top-4 left-0" 
            />
          </div>

          {/* Content Grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
            
            {/* Text Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 pt-2">
              <FadeIn delay={0.2}>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-[68px] leading-[1.1] md:leading-[1.05] text-dark tracking-tight">
                  Advisory and execution for <span className="italic font-light">families, principals, and private institutions</span> with interests that demand discretion.
                </h1>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="font-sans text-[14px] md:text-[15px] text-dark/70 max-w-md leading-relaxed">
                  Ladd & Co. is a private advisory practice. We represent clients across transactions, capital strategy, structuring, and the management of sensitive matters across jurisdictions.
                </p>
              </FadeIn>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.6} direction="left" fullWidth>
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-secondary overflow-hidden group">
                  <img 
                    src="https://images.dualite.app/230d1095-6650-454a-a5e9-af7242b4774c/asset-0093d21d-56c6-4eac-aed8-db4f52db1d6a.webp" 
                    alt="Circular Sculpture Architecture" 
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Green Banner */}
      <div className="bg-[#D1D5C0]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-28">
          <div className="flex gap-4 md:gap-8 lg:gap-16">
            
            {/* Left Axis - Dotted Line */}
            <div className="w-4 md:w-8 shrink-0 relative flex justify-start">
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-[2px] bg-[linear-gradient(to_bottom,#CD5C1C_50%,transparent_50%)] bg-[length:2px_8px]" 
              />
            </div>

            {/* Content */}
            <div className="flex-1 max-w-4xl">
              <FadeIn delay={0.2}>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-[40px] leading-[1.3] text-dark mb-8 md:mb-10">
                  We operate as an extension of our clients' interests — advising, coordinating, and executing where the complexity demands a single, trusted point of contact.
                </h2>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="font-sans text-[14px] text-dark/70 max-w-lg leading-relaxed">
                  Whether the matter concerns a transaction, a restructure, a dispute, or an opportunity — our role is to ensure the outcome is resolved efficiently, discreetly, and in the client's favour.
                </p>
              </FadeIn>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
