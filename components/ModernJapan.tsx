
import React from 'react';
import { motion } from 'framer-motion';

const ModernJapan: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] sm:h-screen bg-white overflow-hidden flex items-center justify-center py-20 sm:py-0">
      {/* Dynamic Speedlines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#E63946]/10 h-[2px]"
            initial={{ width: 0, x: -100, y: Math.random() * 100 + "%" }}
            animate={{ width: "100%", x: "120%" }}
            transition={{ 
              duration: 0.5 + Math.random(), 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 2 
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">
        <div>
          <span className="text-xs font-bold tracking-[0.8em] text-[#E63946] block mb-6 uppercase">Modernity</span>
          <h2 className="font-display text-display-lg md:text-9xl leading-none mb-6 sm:mb-10 text-[#1A1A2E]">SPEED</h2>
          <p className="text-xl text-[#1A1A2E]/60 font-serif leading-relaxed italic max-w-md">
            Efficiency as an art form. The Shinkansen isn't just a train; it's a testament to human precision, slicing through time at 320km/h.
          </p>
          <div className="mt-12 flex space-x-12">
            <div>
              <span className="block font-display text-4xl">320</span>
              <span className="text-[10px] uppercase tracking-widest opacity-40">Max KM/H</span>
            </div>
            <div>
              <span className="block font-display text-4xl">0.0</span>
              <span className="text-[10px] uppercase tracking-widest opacity-40">Delay Index</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10 editorial-shadow"
          >
            <img 
              src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1200" 
              className="w-full h-auto grayscale-[80%] hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#E63946] -z-10 rounded-full opacity-5" />
        </div>
      </div>
    </section>
  );
};

export default ModernJapan;
