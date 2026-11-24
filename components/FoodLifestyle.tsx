
import React from 'react';
import { motion } from 'framer-motion';
import { FOOD_ITEMS } from '../constants';

const FoodLifestyle: React.FC = () => {
  return (
    <section className="py-24 md:py-48 px-6 md:px-12 bg-[#F9F6F1]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#E63946] font-bold block mb-4">Culinary Arts</span>
            <h2 className="font-serif text-5xl md:text-6xl text-[#2D3047] leading-tight mb-8">
              A Taste of <br /><span className="italic">Harmony</span>
            </h2>
            <p className="text-[#2D3047]/70 font-light leading-relaxed">
              Japanese cuisine (Washoku) is recognized by UNESCO for its cultural significance. It is a philosophy of respect for nature, sustainability, and sensory delight.
            </p>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-square bg-gray-100 relative overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1542362567-b04400281654?q=80&w=1200"
                alt="Japanese market"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-[10px] uppercase tracking-widest font-bold">The Market Life</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-square bg-gray-100 relative overflow-hidden group md:mt-12"
            >
              <img
                src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1200"
                alt="Teahouse"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-[10px] uppercase tracking-widest font-bold">Zen Spaces</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FOOD_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="space-y-6 group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2 group-hover:text-[#E63946] transition-colors">{item.name}</h3>
                <p className="text-sm text-[#2D3047]/60 font-light leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodLifestyle;
