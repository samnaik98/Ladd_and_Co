import React from 'react';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'I',
    title: 'Capital Placement\n& Investment Advisory',
    description: 'Sourcing, structuring, and placing capital across private equity, real estate, venture, infrastructure, and direct investments. Full placement lifecycle from origination and due diligence through allocation and close.'
  },
  {
    id: 'II',
    title: 'Mergers, Acquisitions\n& Corporate Finance',
    description: 'Buy-side and sell-side advisory for privately held businesses, portfolio companies, and family enterprises. Transaction management, valuation, negotiation, and post-close coordination.'
  },
  {
    id: 'III',
    title: 'Co-Investment & Syndication',
    description: 'Origination and syndication of direct co-investment opportunities across our principal network. Deal structuring, capital formation, governance alignment, and investor relations.'
  },
  {
    id: 'IV',
    title: 'International Tax & Structuring',
    description: 'Cross-border entity architecture, tax-efficient holding structures, estate and succession planning, and multi-jurisdictional compliance coordination across all relevant territories.'
  }
];

const subServices = [
  { title: 'Debt Recovery & Asset Tracing', desc: 'Recovery of distressed receivables, disputed debts, and misappropriated assets across jurisdictions.' },
  { title: 'Dispute Advisory', desc: 'Strategic counsel on commercial disputes, stakeholder conflicts, and litigation coordination.' },
  { title: 'Family Governance', desc: 'Succession frameworks, governance structures, and next-generation preparation for family enterprises.' },
  { title: 'Real Estate & Asset Structuring', desc: 'Acquisition structuring for international property. Optimal jurisdiction, entity, and tax treatment.' },
  { title: 'Banking & Treasury', desc: 'Coordination of private banking relationships, treasury management, and lending facilities.' },
  { title: 'Regulatory & Compliance', desc: 'Licence management, AML/KYC coordination, and ongoing regulatory obligations across jurisdictions.' }
];

export default function Services() {
  return (
    <section id="services" className="bg-primary">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32">
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
              02
            </span>
            <span 
              className="font-mono text-[10px] uppercase tracking-widest text-dark/60 mt-16 md:mt-24 mb-6"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Services
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
            
            {/* Header Row */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 mb-16 lg:mb-24">
              <div className="flex-1 pt-4">
                <FadeIn delay={0.1}>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-dark/60 mb-6 md:mb-8 block">
                    Services
                  </span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-[72px] leading-[1.1] text-dark">
                    Advisory<br/>& Execution
                  </h2>
                </FadeIn>
              </div>
              <div className="flex-1">
                <FadeIn delay={0.3} direction="left" fullWidth>
                  <div className="w-full aspect-[4/3] md:aspect-[16/10] bg-secondary overflow-hidden group">
                    <img 
                      src="https://images.dualite.app/230d1095-6650-454a-a5e9-af7242b4774c/asset-33be0fef-528f-4ef3-8675-e17da9cca98f.webp" 
                      alt="Wide Plaza Architecture" 
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Main Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-dark/10">
              {services.map((service, idx) => (
                <FadeIn 
                  key={service.id} 
                  delay={0.1 * idx}
                  className="border-r border-b border-dark/10 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col gap-4 md:gap-6 hover:bg-dark/[0.02] transition-colors duration-500"
                >
                  <div className="flex gap-4 md:gap-6 items-start">
                    <span className="font-serif text-xl md:text-2xl text-accent-orange w-6 md:w-8 shrink-0 mt-0.5">{service.id}</span>
                    <h3 className="font-serif text-xl md:text-[26px] leading-[1.3] text-dark whitespace-pre-line">{service.title}</h3>
                  </div>
                  <p className="font-sans text-[13px] text-dark/70 leading-relaxed ml-10 md:ml-14">
                    {service.description}
                  </p>
                </FadeIn>
              ))}
            </div>

            {/* Sub Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-dark/10">
              {subServices.map((item, idx) => (
                <FadeIn 
                  key={idx} 
                  delay={0.05 * idx}
                  className="border-r border-b border-dark/10 p-6 sm:p-8 lg:p-10 flex flex-col gap-3 md:gap-4 hover:bg-dark/[0.02] transition-colors duration-500"
                >
                  <h4 className="font-sans font-medium text-[14px] text-dark">{item.title}</h4>
                  <p className="font-sans text-[13px] text-dark/70 leading-relaxed">{item.desc}</p>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
