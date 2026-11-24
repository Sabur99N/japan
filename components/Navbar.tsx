
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'PHILOSOPHY', href: '#philosophy' },
  { label: 'MAP', href: '#map' },
  { label: 'CITIES', href: '#cities' },
  { label: 'GALLERY', href: '#gallery' },
];

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setScrolled(latest > 50);
    if (latest > previous && latest > 150 && !menuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 sm:px-8 md:px-16 py-5 sm:py-8 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-[#1A1A2E]/95 backdrop-blur-md shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center space-x-2 sm:space-x-3 group"
        >
          <span className="font-display text-2xl sm:text-4xl text-white group-hover:text-[#D62839] transition-colors duration-300">
            NIHON
          </span>
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D62839]"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center space-x-10 xl:space-x-12">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className="text-[10px] uppercase tracking-[0.35em] font-bold text-white/80 hover:text-[#D62839] transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D62839] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <button
            onClick={() => handleNavClick('#cities')}
            className="px-6 xl:px-8 py-2.5 xl:py-3 bg-[#D62839] text-white font-display text-xs xl:text-sm tracking-widest hover:bg-[#E63946] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            EXPLORE
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 group"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-white group-hover:bg-[#D62839] transition-colors"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[2px] bg-white group-hover:bg-[#D62839] transition-colors"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-white group-hover:bg-[#D62839] transition-colors"
          />
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#1A1A2E]/98 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className="font-display text-3xl sm:text-4xl text-white hover:text-[#D62839] transition-colors tracking-widest"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavClick('#cities')}
                className="mt-4 px-10 py-4 bg-[#D62839] text-white font-display text-lg tracking-widest hover:bg-[#E63946] transition-colors"
              >
                EXPLORE
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
