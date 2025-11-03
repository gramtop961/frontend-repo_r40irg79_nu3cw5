import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import AnimatedButton from './AnimatedButton';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section ref={ref} className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 pt-24 text-white">
      {/* 3D Scene */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Gradient overlay does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl"
        >
          Futuristic Portfolio Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-white/80"
        >
          Explore interactive 3D, smooth motion, and playful micro‑interactions.
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div data-cursor="hover">
            <AnimatedButton variant="primary">Get Started</AnimatedButton>
          </div>
          <div data-cursor="hover">
            <AnimatedButton variant="ghost">View Work</AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
