
import React from 'react';
import { motion } from 'framer-motion';

const FESTS = [
  { name: 'GION MATSURI', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=400', desc: 'The biggest festival in Kyoto featuring giant floats.' },
  { name: 'NEBUTA MATSURI', img: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=400', desc: 'Luminous lantern floats through Aomori streets.' },
  { name: 'YUKI MATSURI', img: 'https://images.unsplash.com/photo-1547941126-3d5323b218e0?q=80&w=400', desc: 'The world-famous snow festival in Sapporo.' },
];

const Festivals: React.FC = () => {
  return (
    <section id="festivals" className="py-24 bg-[#FDF6E3] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#E63946] font-bold block mb-4">CELEBRATIONS</span>
            <h2 className="font-stylized text-7xl md:text-8xl leading-none text-[#1A1A2E] mb-8">FESTIVALS</h2>
            <p className="text-[#1A1A2E]/60 max-w-sm leading-relaxed">
              From the quiet grace of a tea ceremony to the thunderous roar of festival drums, Japan's calendar is a vibrant tapestry of living heritage.
            </p>
          </div>
          
          <div className="lg:col-span-7 flex justify-end relative">
            {/* The Large Red Hinomaru Motif */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-80 h-80 rounded-full bg-[#E63946] absolute top-[-50px] right-[50px] z-0 opacity-100"
            />
            {/* Stylized Pagoda Vector Overlay */}
            <div className="relative z-10 w-full max-w-md">
               <svg viewBox="0 0 200 300" className="w-full h-auto opacity-80" fill="#2D142C">
                  <path d="M50 280 L150 280 L140 250 L60 250 Z M40 250 L160 250 L150 210 L50 210 Z M60 210 L140 210 L130 180 L70 180 Z M50 180 L150 180 L140 140 L60 140 Z M70 140 L130 140 L120 110 L80 110 Z M90 110 L110 110 L100 50 Z" />
               </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {FESTS.map((fest, i) => (
            <motion.div 
              key={fest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-2 border-[#1A1A2E]/10 p-2 group-hover:border-[#E63946] transition-colors duration-500">
                <img 
                  src={fest.img} 
                  alt={fest.name} 
                  className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                />
              </div>
              <h3 className="font-stylized text-2xl mb-2">{fest.name}</h3>
              <p className="text-xs uppercase tracking-widest text-[#1A1A2E]/50 font-medium">{fest.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Festivals;
