
import React from 'react';
import { motion } from 'framer-motion';

const CitySpotlight: React.FC = () => {
  return (
    /* Changed from section to div to resolve potential JSX identification issues in some environments */
    <div className="relative min-h-screen bg-[#1A1A2E] py-24 overflow-hidden text-white">
      {/* Background Text Accent */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.03] pointer-events-none">
        <h2 className="font-stylized text-[40vw] select-none">OSAKA</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#E63946] font-jp text-xl block mb-2">大阪市</span>
            <h2 className="font-stylized text-7xl md:text-9xl leading-none">OSAKA</h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/70 max-w-lg leading-relaxed font-light"
          >
            Osaka is a designated city in the Kansai region of Honshu in Japan, and one of the three major cities of Japan. It is the capital of and most populous city in Osaka Prefecture.
          </motion.p>

          <div className="grid grid-cols-2 gap-12 pt-8">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="border-l-2 border-[#E63946] pl-6"
            >
              <span className="text-xs uppercase tracking-widest text-white/50 block mb-1">Population</span>
              <span className="font-stylized text-4xl">2.7 M</span>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l-2 border-[#E63946] pl-6"
            >
              <span className="text-xs uppercase tracking-widest text-white/50 block mb-1">Region</span>
              <span className="font-stylized text-4xl">KANSAI</span>
            </motion.div>
          </div>
        </div>

        {/* The Japan Map Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <svg width="400" height="500" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-md">
            {/* Minimalist Japan Outline - Simplified for effect */}
            <path d="M300 50L320 80L310 120L340 180L320 250L250 350L200 450L150 500L80 550" stroke="white" strokeWidth="2" strokeDasharray="10 5" opacity="0.3" />
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M320 60 C330 80 350 100 340 130 C330 160 350 200 330 240 C310 280 280 320 250 360 C220 400 180 440 140 480 C100 520 80 540 60 560" 
              stroke="#E63946" strokeWidth="4" 
            />
            {/* Osaka Pin */}
            <motion.circle 
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.5, 1] }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              cx="250" cy="360" r="8" fill="#E63946" 
            />
            <circle cx="250" cy="360" r="15" stroke="#E63946" strokeWidth="1" opacity="0.5">
               <animate attributeName="r" values="8;20;8" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-[1px] h-[400px] bg-white/5 rotate-45" />
            <div className="w-[1px] h-[400px] bg-white/5 -rotate-45" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CitySpotlight;
