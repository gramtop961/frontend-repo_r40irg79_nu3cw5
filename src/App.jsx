import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import CustomCursor from './components/CustomCursor';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Showcase />
        {/* Footer */}
        <footer id="contact" className="border-t border-white/10 bg-slate-950/80 py-10 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-white/60">© {new Date().getFullYear()} Wish — All rights reserved.</p>
              <div className="flex items-center gap-6 text-white/70">
                <a href="#" className="hover:text-white" data-cursor="hover">Twitter</a>
                <a href="#" className="hover:text-white" data-cursor="hover">Instagram</a>
                <a href="#" className="hover:text-white" data-cursor="hover">Dribbble</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
