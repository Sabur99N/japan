import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', () => {
      // @ts-ignore
      if (typeof ScrollTrigger !== 'undefined') {
        // @ts-ignore
        ScrollTrigger.update();
      }
    });

    // @ts-ignore
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      // @ts-ignore
      gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });
      // @ts-ignore
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    return () => {
      lenis.destroy();
    };
  }, [enabled]);
}
