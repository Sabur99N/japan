
import React from 'react';
import { motion } from 'framer-motion';

const ArtisanCraft: React.FC = () => {
  return (
    <section className="py-32 bg-[#FDF6E3] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 editorial-shadow"
          >
            <img 
              src="https://images.unsplash.com/photo-1594911773199-a9217f2ee0d6?q=80&w=1200" 
              alt="Pottery Artisan"
              className="w-full h-auto" 
            />
          </motion.div>
          
          {/* Abstract Ink Splatter SVG */}
          <div className="absolute -top-12 -left-12 w-64 h-64 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#1A1A2E" d="M44.7,-76.4C58.2,-69.3,70.1,-58,78.2,-44.2C86.3,-30.5,90.6,-15.2,88.7,-0.7C86.8,13.7,78.8,27.5,69.5,39.4C60.2,51.4,49.6,61.6,37,68.2C24.4,74.8,9.8,77.8,-4.6,85.8C-19,93.8,-33.2,106.8,-46.7,106C-60.2,105.1,-73,90.5,-81.8,74.6C-90.6,58.7,-95.4,41.4,-94.9,25.3C-94.4,9.2,-88.7,-5.7,-81.4,-19.1C-74.1,-32.5,-65.2,-44.4,-54.2,-52.7C-43.2,-61.1,-30.1,-65.9,-17.6,-71.4C-5.1,-77,6.8,-83.4,22.4,-83.4C38,-83.4,57.3,-77.1,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-display text-[#E63946] text-xs uppercase tracking-[0.8em] block mb-6">The Takumi Spirit</span>
            <h2 className="font-display text-7xl md:text-8xl leading-none text-[#1A1A2E] mb-8">ARTISAN<br/>MASTERY</h2>
            <p className="text-xl text-[#1A1A2E]/70 font-serif leading-relaxed italic max-w-lg">
              To be a Takumi is to dedicate one's life to the pursuit of perfection. It is a dialogue between the hand, the material, and the soul of Japan.
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-center space-x-6 border-b border-[#1A1A2E]/5 pb-6">
              <span className="font-display text-4xl text-[#1A1A2E]/20">01</span>
              <div>
                <h4 className="font-display text-2xl">KATANA FORGING</h4>
                <p className="text-xs text-[#1A1A2E]/40 tracking-widest uppercase">Steel, Fire, and Spirit</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 border-b border-[#1A1A2E]/5 pb-6">
              <span className="font-display text-4xl text-[#1A1A2E]/20">02</span>
              <div>
                <h4 className="font-display text-2xl">LACQUERWARE (URUSHI)</h4>
                <p className="text-xs text-[#1A1A2E]/40 tracking-widest uppercase">Eternal Luster from Nature</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <span className="font-display text-4xl text-[#1A1A2E]/20">03</span>
              <div>
                <h4 className="font-display text-2xl">TEXTILE WEAVING</h4>
                <p className="text-xs text-[#1A1A2E]/40 tracking-widest uppercase">The Thread of History</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical kanji */}
      <div className="absolute left-8 bottom-32 writing-vertical hidden lg:block">
        <span className="font-jp text-5xl text-[#1A1A2E]/5">匠の精神</span>
      </div>
    </section>
  );
};

export default ArtisanCraft;
