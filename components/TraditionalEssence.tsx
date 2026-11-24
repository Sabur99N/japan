
import React from 'react';
import { motion } from 'framer-motion';

const TraditionalEssence: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#FDF6E3] py-24 flex items-center justify-center overflow-hidden">
      {/* Cherry Blossom Accents (Mocked with SVGs) */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-20">
        <svg viewBox="0 0 100 100" fill="#E63946">
          <circle cx="20" cy="20" r="2" /><circle cx="35" cy="15" r="3" /><circle cx="50" cy="25" r="2" />
          <path d="M10 10 Q30 40 60 50" stroke="#2D142C" fill="none" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.6em] text-[#E63946] font-bold block mb-4">TRADITIONAL</span>
          <h2 className="font-stylized text-7xl md:text-9xl text-[#1A1A2E]">JAPAN</h2>
        </motion.div>

        <motion.p
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="text-lg md:text-xl text-[#1A1A2E]/70 font-serif leading-relaxed italic"
        >
          Japan is an island country in East Asia. It is in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea.
        </motion.p>

        {/* Torii Gate Stylized Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full max-w-lg mx-auto pt-12"
        >
          <svg viewBox="0 0 200 120" className="w-full h-auto drop-shadow-2xl">
            {/* Top Bar */}
            <path d="M10 20 L190 20 L185 35 L15 35 Z" fill="#E63946" />
            <path d="M25 40 L175 40 L170 50 L30 50 Z" fill="#E63946" />
            {/* Pillars */}
            <rect x="50" y="35" width="12" height="85" fill="#E63946" />
            <rect x="138" y="35" width="12" height="85" fill="#E63946" />
            {/* Base */}
            <rect x="45" y="115" width="22" height="5" fill="#2D142C" />
            <rect x="133" y="115" width="22" height="5" fill="#2D142C" />
          </svg>
        </motion.div>
      </div>
      
      {/* Decorative vertical text */}
      <div className="absolute right-12 bottom-24 writing-vertical">
        <span className="font-jp text-4xl text-[#1A1A2E]/10 select-none">伝統的な日本</span>
      </div>
    </section>
  );
};

export default TraditionalEssence;
