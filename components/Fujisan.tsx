
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Fujisan: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const cloud1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const cloud2 = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const fujiScale = useTransform(scrollYProgress, [0.3, 0.7], [1, 1.15]);

  return (
    <section className="relative min-h-[100svh] sm:h-screen bg-[#1A1A2E] overflow-hidden flex items-center justify-center">
      {/* Background Fuji Image */}
      <motion.div style={{ scale: fujiScale }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1490806678282-461b4685f401?q=80&w=2000" 
          className="w-full h-full object-cover opacity-60 grayscale-[50%]"
          alt="Mount Fuji"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-transparent to-[#1A1A2E]" />
      </motion.div>

      {/* Parallax Cloud Layers */}
      <motion.div style={{ x: cloud1 }} className="absolute top-1/4 left-[-10%] w-full opacity-30 z-10 pointer-events-none">
        <svg viewBox="0 0 1000 200" className="w-full h-auto">
          <path d="M0,100 Q150,50 300,100 T600,100 T900,100" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </motion.div>
      <motion.div style={{ x: cloud2 }} className="absolute bottom-1/4 right-[-10%] w-full opacity-20 z-10 pointer-events-none">
        <svg viewBox="0 0 1000 200" className="w-full h-auto scale-x-[-1]">
          <path d="M0,100 Q150,50 300,100 T600,100 T900,100" stroke="#E63946" strokeWidth="0.5" fill="none" />
        </svg>
      </motion.div>

      <div className="relative z-20 text-center">
        <motion.span 
          initial={{ opacity: 0, letterSpacing: "2em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.8em" }}
          className="font-jp text-white/40 text-2xl md:text-4xl block mb-6"
        >
          富士山
        </motion.span>
        <h2 className="font-display text-display-xl leading-none text-white tracking-tighter drop-shadow-2xl">
          FUJISAN
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "200px" }}
          className="h-[2px] bg-[#D62839] mx-auto mt-8 sm:mt-12"
        />
        <p className="mt-12 text-white/50 font-serif italic text-lg max-w-lg mx-auto px-6">
          The immortal mountain, a mirror to the heavens and the silent witness to Japan's unfolding history.
        </p>
      </div>
    </section>
  );
};

export default Fujisan;
