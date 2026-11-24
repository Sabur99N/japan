
import React from 'react';
import { motion } from 'framer-motion';

const MapJourney: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#1A1A2E] text-white py-20 sm:py-32 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <svg viewBox="0 0 400 600" className="w-full h-auto">
              {/* Dynamic Map Path */}
              <motion.path
                d="M320 50 C340 100 360 150 340 200 C320 250 340 300 300 350 C260 400 220 450 180 500 C140 550 100 580 60 590"
                stroke="#E63946"
                strokeWidth="5"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <path d="M320 50 L340 200 L300 350 L180 500 L60 590" stroke="white" strokeWidth="1" strokeDasharray="10 10" opacity="0.1" />
              
              {/* Hotspots */}
              <motion.circle 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                cx="340" cy="200" r="8" fill="#E63946" 
              />
              <motion.circle 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.0 }}
                cx="300" cy="350" r="10" fill="white" 
              />
              
              {/* Reference Golden Clouds */}
              <g opacity="0.2">
                <path d="M100 100 Q130 80 160 100 T220 100" stroke="#FFD700" strokeWidth="2" fill="none" />
                <path d="M50 450 Q80 430 110 450 T170 450" stroke="#FFD700" strokeWidth="2" fill="none" />
              </g>
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-[1px] border-white/5 rounded-full pointer-events-none" />
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-jp text-3xl text-[#E63946] mb-4 block">列島</span>
            <h2 className="font-display text-display-lg leading-none mb-6">THE ARCHIPELAGO</h2>
            <p className="text-xl text-white/60 font-light leading-relaxed max-w-lg">
              A string of pearls in the Pacific. From the volcanic peaks of Hokkaido to the coral shores of Okinawa, the landscape is a shifting canvas of fire and water.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-12 pt-10 border-t border-white/10">
            <div>
              <span className="font-display text-3xl sm:text-5xl">14,125</span>
              <span className="block text-[10px] uppercase tracking-widest text-white/30">Total Islands</span>
            </div>
            <div>
              <span className="font-display text-3xl sm:text-5xl">3,776</span>
              <span className="block text-[10px] uppercase tracking-widest text-white/30">Peak Elevation (m)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapJourney;
