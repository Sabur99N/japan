
import React from 'react';
import { motion } from 'framer-motion';

const PopCulture: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative">
            {/* Manga Style Graphic Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ rotate: -5, y: 50, opacity: 0 }}
                whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                className="aspect-[3/4] overflow-hidden border-8 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]"
              >
                <img src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=800" className="w-full h-full object-cover grayscale" />
              </motion.div>
              <motion.div 
                initial={{ rotate: 5, y: -50, opacity: 0 }}
                whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="aspect-[4/5] overflow-hidden border-8 border-black shadow-[-15px_15px_0px_0px_rgba(230,57,70,1)] mt-12"
              >
                <img src="https://images.unsplash.com/photo-1526218626217-dc65a29bb444?q=80&w=800" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            
            {/* Floating Onomatopoeia */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-6 sm:-top-10 -right-4 sm:-right-10 font-jp text-5xl sm:text-8xl font-black text-black opacity-10 select-none"
            >
              ドーン
            </motion.div>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div className="bg-black text-white p-2 inline-block">
              <span className="font-display text-xs tracking-widest uppercase p-4">Culture Shock</span>
            </div>
            <h2 className="font-display text-display-lg leading-none text-black">MODERN<br/><span className="text-[#D62839]">MANIA</span></h2>
            <p className="text-xl text-black/60 font-serif leading-relaxed italic">
              From the quiet alleys of Akihabara to the global dominance of Anime, Japan's modern output is a relentless surge of creativity, blending high-tech precision with wild imagination.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-t-4 border-black pt-4">
                <span className="font-display text-2xl sm:text-4xl">ANIME</span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-black/40 mt-2">Global Influence</span>
              </div>
              <div className="border-t-4 border-black pt-4">
                <span className="font-display text-2xl sm:text-4xl">GAME</span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-black/40 mt-2">Digital Pioneer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopCulture;
