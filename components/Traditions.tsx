
import React from 'react';
import { motion } from 'framer-motion';
import { TRADITIONS } from '../constants';

const Traditions: React.FC = () => {
  return (
    <section id="tradition" className="py-24 bg-[#2D3047] text-[#F9F6F1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#FFB7C5] block mb-4">Centuries of Heritage</span>
            <h2 className="font-serif text-5xl md:text-7xl">The Silent <br /><span className="italic text-[#FFB7C5]">Wisdom</span></h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-sm font-light text-white/50 max-w-xs"
          >
            Japanese traditions are not just historical relics; they are living practices that continue to shape the character and soul of the nation today.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {TRADITIONS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-[#2D3047] group hover:bg-[#393C59] transition-all duration-500 cursor-default"
            >
              <div className="text-4xl mb-8 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="font-serif text-2xl mb-4 group-hover:text-[#FFB7C5] transition-colors">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                {item.description}
              </p>
              <motion.div
                className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <button className="text-[10px] uppercase tracking-widest border-b border-[#FFB7C5] pb-1">Learn more</button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Traditions;
