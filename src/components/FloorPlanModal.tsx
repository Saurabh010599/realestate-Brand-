import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Download, Layers, CheckCircle2, Shield, Sparkles, Building2, Bed, Bath, Compass } from 'lucide-react';
import { Property } from '../types';

interface FloorPlanModalProps {
  property: Property | null;
  onClose: () => void;
  onScheduleVisit: (property: Property) => void;
}

export const FloorPlanModal: React.FC<FloorPlanModalProps> = ({ property, onClose, onScheduleVisit }) => {
  const [viewMode, setViewMode] = useState<'2D' | '3D' | 'specs'>('2D');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!property) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl rounded-2xl bg-[#081813] border border-[#D4AF37]/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden text-[#F4F1EA] flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-white/10 bg-[#0B2019] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#102D24] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] px-2 py-0.5 rounded bg-[#D4AF37]/10">
                    {property.category} Blueprint
                  </span>
                  <span className="text-xs text-[#A3B8B0]">{property.carpetArea}</span>
                </div>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#F4F1EA]">
                  {property.title} — Architectural Layout
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#A3B8B0] hover:text-[#F4F1EA] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sub-Nav Controls */}
          <div className="px-6 py-3 bg-[#061611] border-b border-white/5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('2D')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  viewMode === '2D'
                    ? 'bg-[#D4AF37] text-[#061611] shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                    : 'text-[#A3B8B0] hover:text-[#F4F1EA] hover:bg-white/5'
                }`}
              >
                2D Schematic Plan
              </button>
              <button
                onClick={() => setViewMode('3D')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  viewMode === '3D'
                    ? 'bg-[#D4AF37] text-[#061611] shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                    : 'text-[#A3B8B0] hover:text-[#F4F1EA] hover:bg-white/5'
                }`}
              >
                3D Isometric Render
              </button>
              <button
                onClick={() => setViewMode('specs')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  viewMode === 'specs'
                    ? 'bg-[#D4AF37] text-[#061611] shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                    : 'text-[#A3B8B0] hover:text-[#F4F1EA] hover:bg-white/5'
                }`}
              >
                Material Specs & Finishes
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadSuccess ? 'Brochure PDF Saved ✓' : 'Download High-Res Plan'}</span>
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto flex-1 bg-[#081813]">
            {viewMode === '2D' && (
              <div className="space-y-6">
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#061611] p-4 flex items-center justify-center">
                  <img
                    src={property.floorPlan2D}
                    alt={`${property.title} 2D Floor Plan`}
                    className="max-h-[380px] w-auto object-contain rounded-lg filter contrast-125"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-[#D4AF37]">
                    100% Vastu Sanctioned Layout
                  </div>
                </div>

                {/* Dimension Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-[#0B2019] border border-white/5">
                    <div className="text-[10px] uppercase text-[#A3B8B0] font-mono">Master Bedroom</div>
                    <div className="text-xs sm:text-sm font-bold text-[#F4F1EA] font-mono mt-1">16’0” × 14’6”</div>
                    <div className="text-[10px] text-[#D4AF37]">En-suite + Walk-in Dress</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0B2019] border border-white/5">
                    <div className="text-[10px] uppercase text-[#A3B8B0] font-mono">Living & Foyer</div>
                    <div className="text-xs sm:text-sm font-bold text-[#F4F1EA] font-mono mt-1">22’6” × 15’0”</div>
                    <div className="text-[10px] text-[#D4AF37]">Double-Height Ceiling</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0B2019] border border-white/5">
                    <div className="text-[10px] uppercase text-[#A3B8B0] font-mono">Gourmet Kitchen</div>
                    <div className="text-xs sm:text-sm font-bold text-[#F4F1EA] font-mono mt-1">12’0” × 10’6”</div>
                    <div className="text-[10px] text-[#D4AF37]">With Utility Deck</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0B2019] border border-white/5">
                    <div className="text-[10px] uppercase text-[#A3B8B0] font-mono">Sun Deck Balcony</div>
                    <div className="text-xs sm:text-sm font-bold text-[#F4F1EA] font-mono mt-1">18’0” × 6’6”</div>
                    <div className="text-[10px] text-[#D4AF37]">Garden & Fountain View</div>
                  </div>
                </div>
              </div>
            )}

            {viewMode === '3D' && (
              <div className="space-y-6">
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#061611] p-4 flex items-center justify-center">
                  <img
                    src={property.floorPlan3D}
                    alt={`${property.title} 3D Isometric View`}
                    className="max-h-[380px] w-auto object-contain rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-[#F4F1EA]">
                    Isometric Spatial Elevation
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0B2019] border border-[#D4AF37]/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-xs sm:text-sm text-[#E5DCC5]">
                      Optimized for natural cross-ventilation and zero space wastage.
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#D4AF37] font-bold">{property.carpetArea} Carpet</span>
                </div>
              </div>
            )}

            {viewMode === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0B2019] border border-white/5 space-y-2">
                  <div className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider">Flooring & Finishes</div>
                  <p className="text-xs text-[#CAD6D2] leading-relaxed">{property.specifications.flooring}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B2019] border border-white/5 space-y-2">
                  <div className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider">Doors & Windows</div>
                  <p className="text-xs text-[#CAD6D2] leading-relaxed">{property.specifications.doorsWindows}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B2019] border border-white/5 space-y-2">
                  <div className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider">Kitchen & Dining</div>
                  <p className="text-xs text-[#CAD6D2] leading-relaxed">{property.specifications.kitchen}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B2019] border border-white/5 space-y-2">
                  <div className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider">Sanitary & CP Fittings</div>
                  <p className="text-xs text-[#CAD6D2] leading-relaxed">{property.specifications.sanitary}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B2019] border border-white/5 space-y-2">
                  <div className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider">Electrical & Smart Home</div>
                  <p className="text-xs text-[#CAD6D2] leading-relaxed">{property.specifications.electrical}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B2019] border border-white/5 space-y-2">
                  <div className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider">RCC Structure & Masonry</div>
                  <p className="text-xs text-[#CAD6D2] leading-relaxed">{property.specifications.structure}</p>
                </div>
              </div>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0B2019] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#A3B8B0]">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span>RERA Registered & Bank Approved (SBI, HDFC, ICICI)</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#A3B8B0] hover:text-[#F4F1EA]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onScheduleVisit(property);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#DFBF74] to-[#C49836] text-xs font-bold uppercase tracking-wider text-[#061611] shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all"
              >
                Schedule Private Site Inspection
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
