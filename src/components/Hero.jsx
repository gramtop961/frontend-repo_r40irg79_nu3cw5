import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0b0614] text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient & Glow Overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0614]/30 to-[#0b0614]" />
      <div className="pointer-events-none absolute -inset-32 opacity-40 blur-3xl" aria-hidden>
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-fuchsia-600/40" />
        <div className="absolute right-1/4 top-40 h-72 w-72 rounded-full bg-purple-700/40" />
        <div className="absolute left-1/2 bottom-10 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-700/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Rocket className="h-4 w-4 text-fuchsia-400" />
          <span className="text-sm text-white/80">Welcome to itzwish.lol</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-balance bg-gradient-to-b from-white to-white/60 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Wish — Futuristic Developer & Creator
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-5 max-w-2xl text-lg text-white/70"
        >
          Building interactive experiences across web, 3D, and emerging interfaces. Purple neon. Cyber vibes. High polish.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 px-6 py-3 text-white shadow-[0_0_25px_rgba(168,85,247,0.3)] transition hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]"
          >
            <span className="relative z-10">Explore Portfolio</span>
          </a>
          <div className="flex items-center gap-3">
            <a href="mailto:hello@itzwish.lol" aria-label="Email" className="rounded-lg border border-white/10 bg-white/5 p-3 text-white/80 transition hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg border border-white/10 bg-white/5 p-3 text-white/80 transition hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg border border-white/10 bg-white/5 p-3 text-white/80 transition hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
