
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 800], [0, 300]);
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.15]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#1A1A2E]">
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#1A1A2E] z-10" />
        <img
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000"
          alt="Ancient Pagoda in Kyoto"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      <motion.div style={{ y: textY, opacity }} className="relative z-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-hero leading-none text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex justify-center flex-wrap"
        >
          {Array.from('JAPAN').map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 60, opacity: 0, rotateX: 90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif italic text-sm sm:text-xl md:text-2xl lg:text-3xl text-[#D62839] mt-2 sm:mt-4 tracking-[0.15em] sm:tracking-widest px-2"
        >
          THE JOURNEY OF SILENCE AND MOTION
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center scroll-indicator"
      >
        <div className="w-[1px] h-12 sm:h-20 bg-gradient-to-b from-white/80 to-transparent" />
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-white/50 mt-3 sm:mt-4">
          Scroll to Begin
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
