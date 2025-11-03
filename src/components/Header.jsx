import React from 'react';
import AnimatedButton from './AnimatedButton';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="text-lg font-bold tracking-tight text-white">Wish</a>
        <nav className="hidden items-center gap-3 md:flex">
          <a href="#work" className="text-sm text-white/80 hover:text-white" data-cursor="hover">Work</a>
          <a href="#about" className="text-sm text-white/80 hover:text-white" data-cursor="hover">About</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white" data-cursor="hover">Contact</a>
          <AnimatedButton variant="primary" onClick={() => {}}>
            Launch
          </AnimatedButton>
        </nav>
        <button
          aria-label="Toggle Menu"
          className="md:hidden"
          onClick={() => setOpen((s) => !s)}
          data-cursor="hover"
        >
          {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-white/10 bg-slate-950/80 backdrop-blur-md md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
            <a href="#work" className="text-white/90" onClick={() => setOpen(false)} data-cursor="hover">Work</a>
            <a href="#about" className="text-white/90" onClick={() => setOpen(false)} data-cursor="hover">About</a>
            <a href="#contact" className="text-white/90" onClick={() => setOpen(false)} data-cursor="hover">Contact</a>
            <AnimatedButton variant="ghost">Launch</AnimatedButton>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
