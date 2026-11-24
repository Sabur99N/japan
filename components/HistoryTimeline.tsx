
import React, { useEffect, useRef } from 'react';

const PERIODS = [
  { era: 'JOMON', year: '14,000 BCE', desc: 'The dawn of ceramic culture and hunter-gatherer harmony.', kanji: '縄文' },
  { era: 'EDO', year: '1603 CE', desc: 'A golden age of peace, isolation, and the rise of Samurai culture.', kanji: '江戸' },
  { era: 'MEIJI', year: '1868 CE', desc: 'The rapid transformation into a modern global powerhouse.', kanji: '明治' },
  { era: 'REIWA', year: 'PRESENT', desc: 'The current era of beautiful harmony and technological grace.', kanji: '令和' }
];

const HistoryTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    const ctx = gsap.context(() => {
      // @ts-ignore
      gsap.utils.toArray('.era-card').forEach((card: any, i: number) => {
        // @ts-ignore
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-32 bg-[#FDF6E3] relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#1A1A2E]/10 -translate-x-1/2 hidden md:block" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <span className="font-display text-[#E63946] tracking-[1em] uppercase text-xs">Chronicles</span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-8xl mt-4">Echoes of <span className="italic">Time</span></h2>
        </div>

        <div className="space-y-32">
          {PERIODS.map((period, i) => (
            <div key={period.era} className={`era-card flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 relative z-10`}>
              <div className="flex-1 text-center md:text-left">
                <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                  <span className="font-display text-[#E63946] text-xl mb-2">{period.year}</span>
                  <h3 className="font-display text-4xl sm:text-6xl md:text-8xl leading-none text-[#1A1A2E] mb-4 sm:mb-6">{period.era}</h3>
                  <p className={`text-lg text-[#1A1A2E]/60 max-w-sm font-serif italic ${i % 2 === 0 ? '' : 'text-right'}`}>{period.desc}</p>
                </div>
              </div>
              
              <div className="flex-none w-32 h-32 md:w-48 md:h-48 rounded-full border border-[#1A1A2E]/10 flex items-center justify-center bg-white editorial-shadow overflow-hidden">
                <span className="font-jp text-5xl md:text-7xl text-[#1A1A2E]/20">{period.kanji}</span>
              </div>
              
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryTimeline;
