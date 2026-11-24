
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ZenSpirituality: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.15, 0.25], [0, 1, 0]);

  return (
    <section className="relative h-[150vh] bg-[#FDF6E3] flex items-start justify-center pt-32 overflow-hidden">
      <div className="sticky top-32 w-full max-w-7xl px-6 flex flex-col items-center">
        <div className="relative mb-24">
          {/* Animated Enso Circle */}
          <svg viewBox="0 0 200 200" className="w-64 h-64 md:w-96 md:h-96">
            <motion.path
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              fill="transparent"
              strokeWidth="2"
              stroke="#1A1A2E"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>
          <motion.div 
            style={{ opacity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="font-jp text-4xl opacity-20">禅</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            className="space-y-8"
          >
            <span className="font-display text-[#E63946] text-xs tracking-[0.8em] uppercase">The Inner Void</span>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight">Finding Stillness in a <span className="italic">Moving World</span>.</h2>
            <p className="text-lg text-[#1A1A2E]/60 leading-relaxed font-serif max-w-md">
              Zen is not a religion, but a way of seeing. It is the realization that the observer and the observed are one. In the silence of a stone garden, the entire universe speaks.
            </p>
          </motion.div>

          <div className="space-y-12">
            {['Ma (Negative Space)', 'Wabi (Rustic Beauty)', 'Sabi (Patina of Time)'].map((concept, i) => (
              <motion.div
                key={concept}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center space-x-6 group"
              >
                <div className="w-12 h-[1px] bg-[#E63946] group-hover:w-20 transition-all" />
                <span className="font-display text-2xl tracking-widest">{concept}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZenSpirituality;
