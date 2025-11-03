import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const roles = [
    { role: 'Senior Frontend Engineer', org: 'Motion Lab', year: '2024', desc: 'Led immersive UI builds with 3D and micro‑interactions.' },
    { role: 'Creative Developer', org: 'XR Studio', year: '2022', desc: 'Crafted interactive canvases and real‑time visuals.' },
    { role: 'UI Engineer', org: 'Neon Apps', year: '2020', desc: 'Scaled design systems and performance workflows.' },
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
          Experience
        </motion.h2>

        <div className="mt-10 space-y-6">
          {roles.map((r, i) => (
            <motion.div
              key={r.role}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <p className="text-lg font-semibold">{r.role}</p>
                  <p className="text-white/70">{r.org}</p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/70">{r.year}</span>
              </div>
              <p className="mt-3 text-white/70">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
