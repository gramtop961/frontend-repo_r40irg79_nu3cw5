import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(true);
  const pos = useRef({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Disable on coarse pointers (most touch devices)
    const mq = window.matchMedia('(pointer: coarse)');
    setEnabled(!mq.matches);
    const onChange = () => setEnabled(!mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let rafId;
    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      setCursorPos((prev) => {
        const dx = pos.current.x - prev.x;
        const dy = pos.current.y - prev.y;
        const nx = prev.x + dx * 0.18;
        const ny = prev.y + dy * 0.18;
        return { x: nx, y: ny };
      });
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMove);
    rafId = requestAnimationFrame(tick);

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    document.querySelectorAll('[data-cursor="hover"]')?.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafId);
      document.querySelectorAll('[data-cursor="hover"]')?.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
        style={{ transform: `translate(${cursorPos.x - 10}px, ${cursorPos.y - 10}px)` }}
        initial={false}
        animate={{}}
      >
        <motion.div
          className="h-5 w-5 rounded-full border-2 border-white/70 bg-white/10 backdrop-blur-md"
          animate={{ scale: hovered ? 1.8 : 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 250, damping: 20 }}
        />
      </motion.div>
      {/* Mobile tap pulse */}
      <style>{`
        @media (pointer: coarse) {
          body { cursor: default; }
        }
        body { cursor: none; }
      `}</style>
    </>
  );
};

export default CustomCursor;
