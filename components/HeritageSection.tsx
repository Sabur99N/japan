
import React from 'react';
import { motion } from 'framer-motion';

const HeritageSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#FDF6E3] py-32 overflow-hidden flex flex-col items-center justify-center">
      {/* Cherry Blossom Branch Accents */}
      <div className="absolute top-0 left-0 w-80 h-80 opacity-40 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M10 10 Q50 80 120 100 T180 180" stroke="#4A3B28" fill="none" strokeWidth="1" />
          <circle cx="45" cy="75" r="4" fill="#E63946" opacity="0.6" />
          <circle cx="80" cy="90" r="3" fill="#E63946" opacity="0.5" />
          <circle cx="130" cy="110" r="5" fill="#E63946" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-40 pointer-events-none scale-x-[-1]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M10 10 Q50 80 120 100 T180 180" stroke="#4A3B28" fill="none" strokeWidth="1" />
          <circle cx="45" cy="75" r="4" fill="#E63946" opacity="0.6" />
          <circle cx="130" cy="110" r="5" fill="#E63946" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] uppercase tracking-[0.8em] text-[#E63946] font-bold block mb-4">TRADITIONAL</span>
          <h2 className="font-display text-display-xl md:text-[10rem] text-[#1A1A2E] leading-none uppercase">JAPAN</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-[#1A1A2E]/70 font-serif leading-relaxed italic max-w-2xl mx-auto"
        >
          Japan is an island country in East Asia, spanning an archipelago of 14,125 islands. Our journey is one of spirit, motion, and eternal beauty.
        </motion.p>

        {/* Big Torii Gate Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="pt-16"
        >
          <svg viewBox="0 0 400 200" className="w-full max-w-2xl mx-auto drop-shadow-[0_20px_40px_rgba(230,57,70,0.3)]">
            <path d="M20 30 L380 30 L370 50 L30 50 Z" fill="#E63946" />
            <path d="M50 60 L350 60 L340 75 L60 75 Z" fill="#E63946" />
            <rect x="100" y="50" width="20" height="150" fill="#E63946" />
            <rect x="280" y="50" width="20" height="150" fill="#E63946" />
            <rect x="90" y="190" width="40" height="10" fill="#1A1A2E" />
            <rect x="270" y="190" width="40" height="10" fill="#1A1A2E" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeritageSection;
