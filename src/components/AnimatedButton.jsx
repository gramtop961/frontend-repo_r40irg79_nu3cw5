import { motion } from 'framer-motion';
import { Rocket, Star } from 'lucide-react';
import React from 'react';

const AnimatedButton = ({ children, variant = 'primary', onClick }) => {
  const base =
    'relative inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const styles = {
    primary:
      'bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-400 ring-offset-slate-900',
    ghost:
      'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20 focus:ring-white/40 ring-offset-slate-900',
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
      initial={{ filter: 'saturate(1)', boxShadow: '0 0 0px rgba(99,102,241,0.0)' }}
      whileHover={{
        boxShadow: '0 10px 30px rgba(99,102,241,0.35)',
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Rocket icon that jets forward on hover */}
      <motion.span
        className="relative flex items-center"
        initial={false}
        animate={{}}
      >
        <motion.span
          className="relative"
          whileHover={{ x: 4, rotate: 8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <Rocket className="h-5 w-5" />
          {/* Exhaust flame trail */}
          <motion.span
            className="pointer-events-none absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-gradient-to-r from-rose-400 via-amber-300 to-indigo-400 blur-sm"
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ opacity: 1, scale: 1.2, x: -6, y: 6 }}
            transition={{ duration: 0.25 }}
          />
        </motion.span>
      </motion.span>

      <span>{children}</span>

      {/* Sparkle burst on hover */}
      <motion.span
        className="pointer-events-none absolute inset-0"
        initial={false}
        whileHover={{}}
      >
        <motion.span
          className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-300"
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          whileHover={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        >
          <Star className="h-4 w-4" />
        </motion.span>
      </motion.span>

      {/* Underlay animated gradient */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-indigo-500/0 via-fuchsia-500/0 to-emerald-500/0"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          background:
            'linear-gradient(90deg, rgba(99,102,241,0.15), rgba(217,70,239,0.15), rgba(16,185,129,0.15))',
        }}
        transition={{ duration: 0.35 }}
      />
    </motion.button>
  );
};

export default AnimatedButton;
