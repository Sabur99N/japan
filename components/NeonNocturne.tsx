
import React from 'react';
import { motion } from 'framer-motion';

const NeonNocturne: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 md:py-48 bg-black relative overflow-hidden">
      {/* Ambient Neon Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#E63946]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="font-jp text-2xl text-[#E63946] tracking-[0.5em] block mb-4">不夜城</span>
          <h2 className="font-display text-display-xl md:text-[12rem] text-white leading-none tracking-tighter">
            ELECTRIC<br/>
            <span className="text-[#E63946] drop-shadow-[0_0_20px_rgba(230,57,70,0.5)]">DREAMS</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/40 font-serif italic max-w-2xl mx-auto mt-12">
            When the sun sets, the city ignites. A labyrinth of light, sound, and technology that pulses with the rhythm of the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 w-full">
          {[
            { label: 'Cyberpunk Aesthetic', val: 'Neon' },
            { label: 'Nightlife District', val: 'Shinjuku' },
            { label: 'Digital Soul', val: 'Cyber' }
          ].map((item, i) => (
            <motion.div
              key={item.val}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 sm:p-12 border border-white/10 backdrop-blur-md bg-white/5 group hover:border-[#D62839]/50 transition-all duration-500"
            >
              <h4 className="font-display text-white/30 text-xs tracking-widest uppercase mb-4">{item.label}</h4>
              <span className="font-display text-3xl sm:text-5xl text-white group-hover:text-[#D62839] transition-colors duration-300">{item.val}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Speed lines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute h-[1px] bg-white w-full"
            style={{ 
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              animation: `neonScroll ${Math.random() * 3 + 2}s linear infinite`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes neonScroll {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default NeonNocturne;
