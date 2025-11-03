import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Origin from './components/Origin';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0614] text-white selection:bg-fuchsia-600/30 selection:text-white">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
        <a href="#home" className="text-sm font-semibold tracking-wide text-white">
          itzwish.lol
        </a>
        <nav className="hidden gap-4 text-sm text-white/80 sm:flex">
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#origin">Origin</a>
          <a className="hover:text-white" href="#experience">Experience</a>
        </nav>
        <a
          href="mailto:hello@itzwish.lol"
          className="rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.35)]"
        >
          Contact
        </a>
      </header>

      <main className="w-full">
        <Hero />
        <About />
        <Origin />
        <Experience />
      </main>

      <footer className="border-t border-white/10 bg-[#0b0614] py-10 text-center text-white/60">
        <p>
          © {new Date().getFullYear()} Wish — Built with love in purple neon. <span className="text-white/80">itzwish.lol</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
