import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  fullWidth?: boolean;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '',
  fullWidth = false 
}: FadeInProps) {
  const y = direction === 'up' ? 40 : direction === 'down' ? -40 : 0;
  const x = direction === 'left' ? 40 : direction === 'right' ? -40 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.22, 1, 0.36, 1] // Premium custom easing curve
      }}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
