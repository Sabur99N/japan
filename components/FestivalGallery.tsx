
import React from 'react';
import { motion } from 'framer-motion';

const FESTIVALS = [
  { id: 1, name: 'Spring Blossom', img: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=400' },
  { id: 2, name: 'Gion Matsuri', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=400' },
  { id: 3, name: 'Snow Festival', img: 'https://images.unsplash.com/photo-1547941126-3d5323b218e0?q=80&w=400' }
];

const FestivalGallery: React.FC = () => {
  return (
    <section className="py-32 bg-[#FDF6E3] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.6em] text-[#E63946] font-bold block mb-6">JAPANESE</span>
            <h2 className="font-display text-display-lg md:text-9xl text-[#1A1A2E] leading-none mb-6 sm:mb-8 uppercase">FESTIVALS</h2>
            <p className="text-lg text-[#1A1A2E]/60 max-w-md leading-relaxed">
              The flag of Japan, officially called the Nisshōki, embodies the country's sobriquet: the Land of the Rising Sun. Our festivals celebrate this eternal light.
            </p>
          </div>

          <div className="lg:col-span-6 flex justify-end relative pt-12">
            {/* The Large Red Sun Motif from reference */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-[#D62839] absolute top-[-20px] sm:top-[-40px] right-0 sm:right-[40px] z-0"
            />
            {/* Pagoda Illustration */}
            <div className="relative z-10 w-full max-w-sm">
              <svg viewBox="0 0 200 300" className="w-full h-auto drop-shadow-2xl" fill="#1A1A2E">
                <path d="M40 280 L160 280 L150 250 L50 250 Z M50 250 L150 250 L140 210 L60 210 Z M60 210 L140 210 L130 180 L70 180 Z M55 180 L145 180 L135 140 L65 140 Z M100 140 L100 40 L95 40 L105 40 Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-[#1A1A2E]/5">
          {FESTIVALS.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 sm:mb-8 border-4 border-white editorial-shadow relative">
                <img 
                  src={f.img} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  alt={f.name}
                />
                <div className="absolute inset-0 bg-[#E63946]/10 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl mb-2 sm:mb-3">{f.name}</h3>
              <p className="text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#1A1A2E]/40 font-bold px-4">
                {f.id === 1 ? 'Cherry blossoms across the nation' : f.id === 2 ? 'Kyoto\'s grand summer celebration' : 'Sculptures of ice and light'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestivalGallery;
