
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useLenis } from './hooks/useLenis';
import Hero from './components/Hero';
import StoryIntro from './components/Introduction';
import ZenSpirituality from './components/ZenSpirituality';
import HistoryTimeline from './components/HistoryTimeline';
import Fujisan from './components/Fujisan';
import MapJourney from './components/MapJourney';
import HorizontalCities from './components/HorizontalCities';
import ArtisanCraft from './components/ArtisanCraft';
import ModernJapan from './components/ModernJapan';
import PopCulture from './components/PopCulture';
import NeonNocturne from './components/NeonNocturne';
import FestivalGallery from './components/FestivalGallery';
import HeritageSection from './components/HeritageSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const [isLoaded, setIsLoaded] = useState(false);
  useLenis(isLoaded);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FDF6E3] text-[#1A1A2E] overflow-x-hidden selection:bg-[#D62839] selection:text-white">
      {/* Editorial Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D62839] to-[#C9A962] z-[100] origin-left shadow-[0_2px_12px_rgba(214,40,57,0.35)]"
        style={{ scaleX }}
      />

      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] bg-[#1A1A2E] flex flex-col items-center justify-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl sm:text-8xl text-white mb-8"
            >
              日本
            </motion.h1>
            <div className="w-32 h-[1px] bg-white/20 relative overflow-hidden rounded-full">
              <motion.div
                animate={{ x: [-128, 128] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#D62839] to-transparent"
              />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-white/40 font-display text-[10px] sm:text-xs tracking-[0.6em] sm:tracking-[1em] uppercase"
            >
              Loading Narrative
            </motion.span>
          </motion.div>
        ) : (
          <motion.main
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Navbar />
            <Hero />
            <div id="philosophy">
              <StoryIntro />
              <ZenSpirituality />
            </div>
            <div id="history">
              <HistoryTimeline />
            </div>
            <Fujisan />
            <div id="map">
              <MapJourney />
            </div>
            <div id="cities">
              <HorizontalCities />
            </div>
            <ArtisanCraft />
            <ModernJapan />
            <PopCulture />
            <NeonNocturne />
            <div id="gallery">
              <FestivalGallery />
              <HeritageSection />
            </div>
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
