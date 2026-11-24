
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CITIES = [
  { name: 'TOKYO', jp: '東京', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200', desc: 'The pulse of a neon tomorrow.' },
  { name: 'KYOTO', jp: '京都', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200', desc: 'The sanctuary of thousand-year traditions.' },
  { name: 'OSAKA', jp: '大阪', img: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1200', desc: 'The kitchen of Japan and heart of the soul.' },
  { name: 'NARA', jp: '奈良', img: 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1200', desc: 'Where the deer roam amongst ancient spirits.' },
  { name: 'HAKONE', jp: '箱根', img: 'https://images.unsplash.com/photo-1524413840049-1d372fe0447c?q=80&w=1200', desc: 'The misty gateway to Mount Fuji.' },
  { name: 'FUKUOKA', jp: '福岡', img: 'https://images.unsplash.com/photo-1605541604085-3e2842df08e4?q=80&w=1200', desc: 'A coastal gem of modern innovation.' },
];

const CityPanel: React.FC<{ city: typeof CITIES[0]; index: number; isMobile?: boolean }> = ({ city, index, isMobile }) => (
  <section
    className={`relative flex-shrink-0 flex items-center justify-center border-r border-white/5 overflow-hidden ${
      isMobile ? 'w-full min-h-[70vh] city-card-mobile' : 'w-screen h-screen'
    }`}
  >
    <div className="absolute inset-0">
      <img
        src={city.img}
        alt={city.name}
        className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E] via-transparent to-[#1A1A2E] opacity-60" />
    </div>

    <div className="relative z-10 text-center flex flex-col items-center px-4">
      <span className="font-jp text-[8rem] sm:text-[12vw] text-white/5 absolute -top-[5vw] select-none pointer-events-none">
        {city.jp}
      </span>
      <motion.h2
        className="font-display text-display-xl leading-none text-white tracking-tighter"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {city.name}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-serif italic text-base sm:text-xl md:text-2xl text-[#D62839] mt-3 sm:mt-4 opacity-90 max-w-xs sm:max-w-xl px-2"
      >
        {city.desc}
      </motion.p>
    </div>

    <div className="absolute bottom-8 sm:bottom-20 left-6 sm:left-20">
      <span className="font-display text-white/10 text-[4rem] sm:text-[8rem] md:text-[10rem] leading-none">
        0{index + 1}
      </span>
    </div>
  </section>
);

const HorizontalCities: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    // @ts-ignore
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // @ts-ignore
    gsap.registerPlugin(ScrollTrigger);

    // @ts-ignore
    const ctx = gsap.context(() => {
      // @ts-ignore
      gsap.to(containerRef.current, {
        x: () => -(containerRef.current!.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 0.8,
          start: 'top top',
          end: () => `+=${containerRef.current!.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="bg-[#1A1A2E]">
        <div className="py-16 px-6 text-center">
          <span className="font-display text-[#D62839] text-xs tracking-[0.8em] uppercase">Destinations</span>
          <h2 className="font-display text-5xl text-white mt-4">CITIES</h2>
        </div>
        <div className="flex flex-col">
          {CITIES.map((city, i) => (
            <CityPanel key={city.name} city={city} index={i} isMobile />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={triggerRef} className="overflow-hidden bg-[#1A1A2E]">
      <div ref={containerRef} className="flex w-fit h-screen will-change-transform">
        {CITIES.map((city, i) => (
          <CityPanel key={city.name} city={city} index={i} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalCities;
