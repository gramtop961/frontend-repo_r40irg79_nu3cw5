import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Origin = () => {
  return (
    <section id="origin" className="relative w-full scroll-mt-20 bg-[#0b0614] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_10%_10%,rgba(147,51,234,0.12),transparent),radial-gradient(900px_400px_at_90%_20%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-md bg-purple-600/20 p-2 ring-1 ring-purple-500/30">
            <MapPin className="h-5 w-5 text-purple-300" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight">Origin</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <p className="text-white/80">
              Born from curiosity and arcade nostalgia, my journey began with modding visuals and building small tools. The purple cyber theme stuck — it’s now the signature across my work.
            </p>
            <p className="mt-4 text-white/70">
              Today I blend design and engineering to craft immersive stories on the web, drawing from sci‑fi, synthwave, and retro-future culture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/30 via-fuchsia-900/20 to-indigo-900/20 p-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(244,114,182,0.15),transparent_40%)]" />
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
                <div className="rounded-xl bg-white/5 p-4 backdrop-blur-md">
                  <p className="text-white">First Lines</p>
                  <p className="mt-1 text-white/70">Hobby projects and theme mods</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4 backdrop-blur-md">
                  <p className="text-white">Influences</p>
                  <p className="mt-1 text-white/70">Synthwave, arcade UI, space art</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4 backdrop-blur-md">
                  <p className="text-white">Focus</p>
                  <p className="mt-1 text-white/70">3D interactions & motion systems</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4 backdrop-blur-md">
                  <p className="text-white">Now</p>
                  <p className="mt-1 text-white/70">Building standout web experiences</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Origin;
