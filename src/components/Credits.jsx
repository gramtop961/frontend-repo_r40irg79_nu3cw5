import React from 'react';
import { motion } from 'framer-motion';

const Credits = () => {
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
          Credits
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-3xl text-white/75"
        >
          3D scene powered by Spline; built with React, Tailwind, and Framer Motion.
        </motion.p>
      </div>
    </section>
  );
};

export default Credits;
