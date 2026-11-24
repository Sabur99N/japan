
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { REGIONS } from '../constants';

const RegionCard: React.FC<{ region: typeof REGIONS[0], index: number }> = ({ region, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative group ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-24'}`}
    >
      <div className="overflow-hidden aspect-[4/5] relative">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
          src={region.image}
          alt={region.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        <div className="absolute top-6 right-6 writing-vertical">
          <span className="font-jp text-3xl text-white/40 tracking-[0.5em]">{region.jpName}</span>
        </div>

        <div className="absolute bottom-10 left-10 right-10">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#FFB7C5] font-bold mb-2 block">Region {index + 1}</span>
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">{region.name}</h3>
          <p className="text-xs text-white/80 font-light leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
            {region.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Regions: React.FC = () => {
  return (
    <section id="regions" className="py-24 md:py-48 px-6 md:px-12 bg-[#F9F6F1]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.5em] text-[#E63946] font-bold block mb-4"
          >
            Regional Wonders
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl text-[#2D3047]"
          >
            Across the <span className="italic">Archipelago</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {REGIONS.map((region, index) => (
            <RegionCard key={region.id} region={region} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Regions;
