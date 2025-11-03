import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const About = () => {
  const items = [
    { title: '3D & Motion', desc: 'Spline, Three.js, and Framer Motion animations that feel alive.' },
    { title: 'Web Experiences', desc: 'Interfaces with neon gradients, glassmorphism, and micro-interactions.' },
    { title: 'Creative Coding', desc: 'Shaders, particles, and playful experiments that push the browser.' },
  ];

  return (
    <section id="about" className="relative w-full scroll-mt-20 bg-[#0b0614] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(192,38,211,0.08),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(109,40,217,0.08),transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="rounded-md bg-fuchsia-600/20 p-2 ring-1 ring-fuchsia-500/30">
            <User className="h-5 w-5 text-fuchsia-300" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight">About Wish</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-white/75"
          >
            Hey, I’m Wish. I craft futuristic digital worlds with a love for purple hues and cyber aesthetics. I design and engineer immersive web experiences — blending 3D, motion, and delightful micro-interactions.
          </motion.p>
          <div className="grid gap-6">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Inline "cool content" showcase */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Neon Glass Cards',
            'Particle Trails',
            'Iridescent Gradients',
            'Magnetic Buttons',
            'Parallax Grids',
            'Holographic Panels',
          ].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-600/20 via-purple-600/10 to-indigo-600/20 p-6 backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute -inset-20 bg-[conic-gradient(from_90deg_at_50%_50%,#a78bfa_0%,#f0abfc_25%,#818cf8_50%,#c084fc_75%,#a78bfa_100%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
              <div className="relative">
                <p className="text-lg font-medium text-white">{label}</p>
                <p className="mt-2 text-sm text-white/70">Interactive UI piece showcasing motion and depth.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
