
import React from 'react';
import { motion } from 'framer-motion';

const Transportation: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto border-[1px] border-[#2D3047]/10 p-12 md:p-24 relative overflow-hidden">
        {/* Japanese Motif */}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border-[1px] border-[#E63946]/5 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#E63946] font-bold block mb-4">Precision & Motion</span>
            <h2 className="font-serif text-5xl md:text-6xl text-[#2D3047] leading-tight mb-8">
              The Art of <br /><span className="italic">Efficiency</span>
            </h2>
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#F9F6F1] rounded-full text-2xl">🚄</div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Shinkansen</h4>
                  <p className="text-sm text-[#2D3047]/60 font-light leading-relaxed">Pioneering high-speed rail travel since 1964, combining unmatched speed with absolute precision.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#F9F6F1] rounded-full text-2xl">🏙️</div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Urban Networks</h4>
                  <p className="text-sm text-[#2D3047]/60 font-light leading-relaxed">The world's most sophisticated transit systems, connecting every corner of the metropolis effortlessly.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#F9F6F1] rounded-full text-2xl">🛤️</div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Local Lines</h4>
                  <p className="text-sm text-[#2D3047]/60 font-light leading-relaxed">Picturesque rural routes that offer a slower pace and stunning glimpses into hidden Japan.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 border-[1px] border-[#2D3047]/10 translate-x-4 translate-y-4 -z-10" />
            <img
              src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1200"
              alt="Shinkansen"
              className="w-full shadow-2xl grayscale-[50%] hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Transportation;
