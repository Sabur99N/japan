
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from './RevealText';

const StoryIntro: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  return (
    <section className="py-20 sm:py-32 md:py-48 px-4 sm:px-6 bg-[#FDF6E3]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 border-[1px] border-[#E63946]/20 hidden md:block" />
          <motion.div style={{ y: imageY }} className="relative overflow-hidden editorial-shadow">
            <img
              src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200"
              alt="Zen Garden"
              className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
          <div className="absolute -bottom-8 -right-8 writing-vertical bg-[#1A1A2E] text-white px-4 py-10 text-[10px] tracking-[0.4em] font-display z-10">
            WABI-SABI ESSENCE
          </div>
        </motion.div>

        <div className="lg:col-span-7 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.8em] text-[#E63946] font-bold block mb-6">PHILOSOPHY</span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-[#1A1A2E] leading-tight">
              Finding <span className="italic">Sublimity</span> in the Fleeting Moment.
            </h2>
          </motion.div>

          <RevealText
            delay={0.2}
            className="text-xl md:text-2xl text-[#1A1A2E]/80 leading-relaxed font-light max-w-2xl font-serif italic"
            text="Japan is not just a destination; it is a profound contrast. It is where neon pulses against ancient wood, and where the silence of a temple carries more weight than the roar of a metropolis."
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="pt-8 flex items-center space-x-8 group cursor-pointer"
          >
            <div className="w-16 h-[1px] bg-[#1A1A2E] group-hover:w-24 transition-all duration-500" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Read the Chronicles</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoryIntro;
