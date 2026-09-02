import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="luxury-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#061611] text-[#F4F1EA]"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none" />

          {/* Luxury Monogram Crest */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex flex-col items-center mb-8"
          >
            {/* Outer Golden Geometric Crest */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border border-[#D4AF37]/50 flex items-center justify-center rotate-45 bg-[#0B2019]/80 shadow-[0_0_40px_rgba(212,175,55,0.25)] relative overflow-hidden backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#D4AF37]/20" />
              <div className="-rotate-45 flex flex-col items-center justify-center">
                <span className="font-cinzel text-2xl sm:text-3xl font-bold tracking-widest text-[#D4AF37]">
                  DSK
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#F3E5AB]/80 font-sans-luxury">
                  GREEN
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <h1 className="font-cinzel text-xl sm:text-2xl tracking-[0.2em] font-semibold uppercase text-[#F4F1EA]">
                DSK GREEN
              </h1>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] mt-1 font-sans-luxury flex items-center justify-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                Datala, Chandrapur Luxury Township
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              </p>
            </motion.div>
          </motion.div>

          {/* Progress Bar & Percentage */}
          <div className="w-64 sm:w-80 relative flex flex-col items-center gap-3">
            <div className="w-full h-1 bg-[#102D24] rounded-full overflow-hidden border border-[#D4AF37]/20">
              <motion.div
                className="h-full bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#F9F1D8] rounded-full shadow-[0_0_12px_#D4AF37]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <div className="flex items-center justify-between w-full text-xs font-mono text-[#D4AF37]">
              <span className="flex items-center gap-1 text-[11px] text-[#A3B8B0]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Verified Township
              </span>
              <span className="font-bold">{progress}%</span>
            </div>
          </div>

          <p className="absolute bottom-8 text-[11px] text-[#7A938A] tracking-wider uppercase font-sans-luxury">
            Sobha & Lodha Inspired Architecture • Chandrapur
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
