import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative z-10 scroll-mt-24 bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-3xl text-lg text-white/80"
        >
          I design and build futuristic, performance‑focused web experiences with rich 3D, motion, and meticulous detail. My process blends creative direction with precise engineering for crisp, interactive interfaces that feel alive.
        </motion.p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Design Systems","3D & Motion","Performance"].map((title, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">Cohesive components, expressive motion, and production‑grade performance budgets.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
