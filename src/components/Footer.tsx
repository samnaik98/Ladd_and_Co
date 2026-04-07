import React from 'react';
import FadeIn from './FadeIn';
import Logo from './Logo';

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-dark text-primary">
      
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-[#D1D5C0] to-[#E4E6D9]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 h-[60px] flex items-center">
          <div className="flex gap-4 md:gap-8 lg:gap-16 w-full items-center group cursor-pointer">
            <div className="w-4 md:w-8 shrink-0 flex justify-center">
              <div className="w-1.5 h-1.5 bg-accent-orange group-hover:scale-150 transition-transform duration-500" />
            </div>
            <span className="font-serif text-[14px] md:text-[15px] text-dark group-hover:text-accent-orange transition-colors duration-300">
              Request an Introduction <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32">
        <div className="flex gap-4 md:gap-8 lg:gap-16">
          
          {/* Left Axis - Logo Mark */}
          <div className="w-4 md:w-8 shrink-0 flex justify-center pt-2">
            <Logo variant="footer" className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform duration-500 cursor-pointer" />
          </div>

          {/* Content Grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Brand & Social */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <FadeIn delay={0.1}>
                <span className="font-serif text-[24px] md:text-[28px] tracking-wide text-primary mb-8 md:mb-10 block">Ladd & Co.</span>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent-orange max-w-[280px] leading-[1.8] mb-10 md:mb-12">
                  Advisory and execution for families, principals, and private institutions with interests that demand discretion.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <button className="font-mono text-[11px] uppercase tracking-widest text-primary text-left hover:text-accent-orange transition-colors duration-300 mb-16 md:mb-24">
                  Client Login
                </button>
              </FadeIn>

              <FadeIn delay={0.4} className="mt-auto">
                <div className="flex gap-6">
                  <a href="#" className="text-primary hover:text-accent-green hover:-translate-y-1 transition-all duration-300"><TwitterIcon size={18} /></a>
                  <a href="#" className="text-primary hover:text-accent-green hover:-translate-y-1 transition-all duration-300"><LinkedinIcon size={18} /></a>
                </div>
              </FadeIn>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 pt-2">
              
              <FadeIn delay={0.2} className="flex flex-col gap-6 md:gap-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary/40">Firm</span>
                <div className="flex flex-col gap-3 md:gap-4">
                  {['About', 'Services', 'Clients', 'Industries', 'Presence'].map(link => (
                    <a key={link} href={`#${link.toLowerCase()}`} className="font-sans text-[13px] text-primary/70 hover:text-primary hover:translate-x-1 transition-all duration-300">{link}</a>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.3} className="flex flex-col gap-6 md:gap-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary/40">Contact</span>
                <a href="mailto:office@laddco.com" className="font-sans text-[13px] text-primary/70 hover:text-primary transition-colors duration-300 break-all">office@laddco.com</a>
              </FadeIn>

              <FadeIn delay={0.4} className="flex flex-col gap-6 md:gap-8 col-span-2 sm:col-span-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary/40">Offices</span>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 md:gap-4">
                  {['New York', 'Palm Beach', 'George Town', 'London', 'Zürich', 'Dubai', 'Singapore', 'Hong Kong', 'Sydney'].map(city => (
                    <span key={city} className="font-sans text-[13px] text-primary/70 hover:text-primary transition-colors duration-300 cursor-default">{city}</span>
                  ))}
                </div>
              </FadeIn>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex gap-4 md:gap-8 lg:gap-16 mt-20 md:mt-32">
          <div className="w-4 md:w-8 shrink-0"></div>
          <FadeIn delay={0.5} className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary/40">
              Copyright &copy; 2026 Ladd & Co.. All rights reserved.
            </span>
            <a href="#" className="font-mono text-[10px] uppercase tracking-widest text-primary/40 hover:text-primary transition-colors duration-300">
              Legal
            </a>
          </FadeIn>
        </div>

      </div>
    </footer>
  );
}
