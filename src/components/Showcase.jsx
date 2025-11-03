import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Simple motion blur based on scroll velocity
const useScrollVelocityBlur = () => {
  const [blur, setBlur] = useState(0);
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const raf = useRef();

  useEffect(() => {
    const loop = () => {
      const y = window.scrollY;
      const v = Math.min(1, Math.abs(y - lastY.current) / 50);
      lastY.current = y;
      // Map velocity to blur 0 -> 6px
      setBlur(v * 6);
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return blur;
};

const Card = ({ title, desc, i }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: -1 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg backdrop-blur-xl hover:border-white/20"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl transition-all duration-500 group-hover:translate-x-4 group-hover:translate-y-2" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-white/70">{desc}</p>
      <div className="mt-6 flex items-center gap-3">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        <span className="text-sm text-white/60">Live</span>
      </div>
    </motion.div>
  );
};

const Showcase = () => {
  const blur = useScrollVelocityBlur();
  const items = [
    { title: 'Neon Commerce', desc: 'A sleek cyber‑shopfront with immersive interactions.' },
    { title: 'XR Gallery', desc: '3D art curation with buttery parallax and depth.' },
    { title: 'AI Studio', desc: 'Smart tools with playful micro‑interactions.' },
    { title: 'Motion Lab', desc: 'Performance‑tuned animations and physics.' },
  ];

  return (
    <section id="work" className="relative z-10 bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-bold text-white">Showcase</h2>
          <p className="text-white/60">Curated experiments and builds</p>
        </div>
        <div
          style={{ filter: `blur(${blur.toFixed(2)}px)` }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((it, idx) => (
            <Card key={it.title} title={it.title} desc={it.desc} i={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
