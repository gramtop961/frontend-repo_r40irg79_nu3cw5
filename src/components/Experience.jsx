import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const timeline = [
  {
    role: 'Lead Frontend Engineer',
    org: 'NeonVerse Labs',
    period: '2023 — Present',
    summary:
      'Shipped immersive 3D onboarding and micro-interaction system. Built a design system with glass panels and holographic widgets.',
  },
  {
    role: 'Creative Developer',
    org: 'Orbit Studio',
    period: '2021 — 2023',
    summary:
      'Prototyped generative visuals, particle systems, and interactive landing pages for tech brands.',
  },
  {
    role: 'Freelance',
    org: 'Independent',
    period: '2019 — 2021',
    summary:
      'Delivered modern, animated websites with a focus on performance and accessibility.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full scroll-mt-20 bg-[#0b0614] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(168,85,247,0.08),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-md bg-indigo-600/20 p-2 ring-1 ring-indigo-500/30">
            <Briefcase className="h-5 w-5 text-indigo-300" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
        </div>

        <ol className="relative border-l border-white/10 pl-6">
          {timeline.map((item, i) => (
            <motion.li
              key={item.role}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="mb-10"
            >
              <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border border-white/20 bg-white/10" />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-xl font-semibold text-white">
                    {item.role} <span className="text-white/60">@ {item.org}</span>
                  </p>
                  <p className="text-sm text-white/60">{item.period}</p>
                </div>
                <p className="mt-3 text-white/75">{item.summary}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Micro 3D-ish cards as cool contents */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Code Art", "XR UI", "Shader Toys"].map((title, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-fuchsia-500/20 bg-[#110a1f]/80 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-600/10 via-purple-600/10 to-indigo-600/10" />
              <div className="pointer-events-none absolute -inset-24 z-0 rotate-12 bg-[radial-gradient(circle,rgba(168,85,247,0.25),transparent_60%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <p className="text-lg font-medium text-white">{title}</p>
                <p className="mt-2 text-sm text-white/70">A mini showcase of experimental interactive pieces.</p>
                <div className="mt-6 h-24 w-full rounded-xl bg-gradient-to-br from-white/10 to-white/5 shadow-inner ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
