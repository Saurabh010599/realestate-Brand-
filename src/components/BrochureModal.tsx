import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsDownloaded(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F3E5AB', '#102D24'],
    });

    // Simulate instant download trigger
    setTimeout(() => {
      // In production, opens the PDF brochure
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg rounded-2xl bg-[#081813] border border-[#D4AF37]/50 shadow-2xl overflow-hidden text-[#F4F1EA] p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#A3B8B0] hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {!isDownloaded ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest font-mono">
                    Official Master Dossier
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-[#F4F1EA]">
                    Download DSK GREEN E-Brochure
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#CAD6D2] font-sans-luxury leading-relaxed">
                Includes high-resolution 2D/3D floor layouts, pricing schedule, township master plan, and specification catalogue for Datala, Chandrapur.
              </p>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A3B8B0] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sangeeta Deshmukh"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#061611] border border-white/15 focus:border-[#D4AF37] text-xs sm:text-sm text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A3B8B0] mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 94223 36633"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#061611] border border-white/15 focus:border-[#D4AF37] text-xs sm:text-sm text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A3B8B0] mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. sangeeta@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#061611] border border-white/15 focus:border-[#D4AF37] text-xs sm:text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#DFBF74] to-[#C49836] text-xs font-bold uppercase tracking-wider text-[#061611] shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Get Instant PDF Access</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#A3B8B0]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Zero Spam Guarantee • RERA Approved Documentation</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#061611] flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-cinzel text-xl font-bold text-[#F4F1EA]">
                Brochure Sent Successfully!
              </h3>
              <p className="text-xs text-[#CAD6D2] font-sans-luxury max-w-sm mx-auto">
                Thank you, <strong className="text-[#D4AF37]">{name}</strong>. The comprehensive DSK GREEN luxury dossier has been sent to your WhatsApp at <strong className="text-[#F4F1EA]">{phone}</strong>.
              </p>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-[#061611] text-xs font-bold uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
