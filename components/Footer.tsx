
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF3E0] pt-16 sm:pt-24 pb-10 sm:pb-12 px-5 sm:px-6 md:px-12 overflow-hidden border-t border-[#1A1A2E]/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 sm:mb-12"
          >
            <span className="font-jp text-5xl sm:text-6xl md:text-8xl text-[#1A1A2E]/5 select-none">一期一会</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-serif text-2xl sm:text-3xl md:text-5xl text-[#1A1A2E] mb-6 sm:mb-8 italic"
          >
            "Ichi-go Ichi-e"
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-[#1A1A2E]/60 font-light max-w-2xl leading-relaxed px-2"
          >
            Treasure every encounter, for it will never recur. Every moment is a unique miracle that should be honored with presence and gratitude.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pt-12 sm:pt-24 border-t border-[#1A1A2E]/10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6 sm:mb-8">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tighter text-[#1A1A2E]">NIHON</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D62839]" />
            </div>
            <p className="text-xs text-[#1A1A2E]/50 leading-relaxed font-light max-w-xs">
              Crafting immersive digital journeys through the cultural landscape of Japan.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A2E]">Explore</h4>
            <ul className="text-xs sm:text-sm space-y-2 text-[#1A1A2E]/70 font-light">
              {['Traditions', 'Geography', 'Artistry', 'Seasons'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#D62839] transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A2E]">Society</h4>
            <ul className="text-xs sm:text-sm space-y-2 text-[#1A1A2E]/70 font-light">
              {['Ethics', 'Etiquette', 'Language', 'Philosophy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#D62839] transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 space-y-3 sm:space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A2E]">Follow</h4>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-[#1A1A2E]/60">
              {['Instagram', 'Twitter', 'Vimeo'].map((item) => (
                <a key={item} href="#" className="hover:text-[#D62839] transition-colors duration-300 text-xs uppercase tracking-widest">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 pt-6 sm:pt-8 border-t border-[#1A1A2E]/5 flex flex-col md:flex-row justify-between items-center text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#1A1A2E]/40 gap-4">
          <span>&copy; 2026 Nihon Narrative. All Rights Reserved.</span>
          <div className="flex space-x-6 sm:space-x-8">
            <a href="#" className="hover:text-[#1A1A2E] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1A1A2E] transition-colors">Terms of Experience</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
