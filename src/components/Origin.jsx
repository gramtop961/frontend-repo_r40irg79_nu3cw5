import React from 'react';
import { motion } from 'framer-motion';

const Origin = () => {
  const items = [
    { k: 'Roots', v: 'Blending art and code since day one' },
    { k: 'Style', v: 'Cyber‑aesthetic with human warmth' },
    { k: 'Focus', v: 'Immersive yet accessible experiences' },
  ];

  return (
    <section className="relative z-10 bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight"
        >
          Origin
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: idx * 0.06 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 shadow-inner backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-wide text-white/60">{it.k}</p>
              <p className="mt-2 text-lg font-medium">{it.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Origin;
