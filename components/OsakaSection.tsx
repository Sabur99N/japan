
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OsakaSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#1A1A2E] text-white py-32 overflow-hidden">
      {/* Background Stylized "OSAKA" */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.03] pointer-events-none">
        <h2 className="font-display text-[45vw] select-none">OSAKA</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-jp text-2xl text-[#E63946] mb-4 block">大阪市</span>
            <h2 className="font-display text-8xl md:text-[10rem] leading-none tracking-tighter">OSAKA</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed font-light"
          >
            Osaka is a designated city in the Kansai region of Honshu, Japan. It is the capital of Osaka Prefecture and the heart of the Keihanshin Metropolitan Area, the second largest in Japan.
          </motion.p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-bold">Population</span>
              <span className="font-display text-5xl">2.7 M</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-bold">City Code</span>
              <span className="font-display text-5xl">06 JPN</span>
            </motion.div>
          </div>
        </div>

        {/* The Japan Map SVG Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <svg width="400" height="500" viewBox="0 0 400 600" fill="none" className="w-full h-auto max-w-lg">
            <motion.path
              d="M320 50 C340 80 360 120 340 160 C320 200 340 250 310 300 C280 350 240 400 200 450 C160 500 120 540 80 570"
              stroke="#E63946"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            <path d="M300 40 L340 70 L350 150 L310 280 L200 450 L100 550" stroke="white" strokeWidth="1" strokeDasharray="10 10" opacity="0.1" />
            
            {/* Osaka Pin */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2 }}
              viewport={{ once: true }}
            >
              <circle cx="280" cy="330" r="8" fill="#E63946" />
              <circle cx="280" cy="330" r="16" stroke="#E63946" strokeWidth="1">
                <animate attributeName="r" values="8;20;8" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
              </circle>
            </motion.g>
          </svg>

          {/* Golden Cloud Accents from Reference */}
          <div className="absolute top-20 right-0 opacity-20">
            <svg width="100" height="40" viewBox="0 0 100 40">
              <path d="M10 20 Q30 10 50 20 T90 20" stroke="#FFD700" fill="none" strokeWidth="2" />
              <path d="M20 30 Q40 20 60 30 T100 30" stroke="#FFD700" fill="none" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-40 left-0 opacity-20">
            <svg width="100" height="40" viewBox="0 0 100 40">
              <path d="M10 20 Q30 10 50 20 T90 20" stroke="#FFD700" fill="none" strokeWidth="2" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OsakaSection;
