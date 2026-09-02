import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Layers, Compass, ZoomIn, ZoomOut, RotateCcw, CheckCircle2, ShieldCheck, ArrowRight, Eye } from 'lucide-react';
import { MASTER_PLAN_ZONES } from '../data/mockData';
import { MasterPlanZone } from '../types';

interface MasterPlanSectionProps {
  onOpenScheduleModal: () => void;
  onOpenBrochureModal: () => void;
}

export const MasterPlanSection: React.FC<MasterPlanSectionProps> = ({
  onOpenScheduleModal,
  onOpenBrochureModal,
}) => {
  const [selectedZone, setSelectedZone] = useState<MasterPlanZone>(MASTER_PLAN_ZONES[0]);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Residential', 'Green Space', 'Spiritual', 'Recreation', 'Infrastructure'];

  const filteredZones =
    activeFilter === 'All'
      ? MASTER_PLAN_ZONES
      : MASTER_PLAN_ZONES.filter((z) => z.category === activeFilter);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <section id="masterplan" className="py-24 relative bg-[#071712] text-[#F4F1EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2019] border border-[#D4AF37]/30 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4AF37]">
              Township Blueprint & Zoning
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EA]">
            Interactive Township Master Plan
          </h2>
          <p className="text-[#A3B8B0] text-sm sm:text-base mt-3 font-sans-luxury">
            15+ Acres of master-planned harmony in Datala, Chandrapur. Explore residential enclaves, dedicated botanical green zones, temple courtyards, and 40-ft wide concrete boulevards.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeFilter === cat
                    ? 'bg-[#D4AF37] text-[#061611] shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                    : 'bg-[#0B2019] text-[#A3B8B0] border border-white/10 hover:border-[#D4AF37]/40 hover:text-[#F4F1EA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Master Plan Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Viewer Canvas */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden bg-[#061611] border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-4">
            {/* Map Controls */}
            <div className="absolute top-6 right-6 z-20 flex flex-col gap-2 bg-[#0B2019]/90 border border-white/10 p-1.5 rounded-xl backdrop-blur-md">
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-lg text-[#A3B8B0] hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-lg text-[#A3B8B0] hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-2 rounded-lg text-[#A3B8B0] hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Compass Rose */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-[#0B2019]/90 border border-white/10 px-3 py-1.5 rounded-xl backdrop-blur-md">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[11px] font-mono text-[#D4AF37] font-bold">North-East Alignment</span>
            </div>

            {/* Map Canvas with Architectural Schematic Overlay */}
            <div className="relative w-full h-[450px] sm:h-[520px] rounded-xl overflow-hidden bg-[#0a2219] flex items-center justify-center border border-[#D4AF37]/20">
              <div
                className="relative w-full h-full transition-transform duration-300 ease-out flex items-center justify-center"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                {/* Master Plan Schematic Vector Background */}
                <svg
                  viewBox="0 0 1000 700"
                  className="w-full h-full object-cover opacity-90"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <radialGradient id="gradGreen" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#143c2f" />
                      <stop offset="100%" stopColor="#081b14" />
                    </radialGradient>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="1" />
                    </pattern>
                  </defs>

                  {/* Township Perimeter boundary */}
                  <rect width="1000" height="700" fill="url(#gradGreen)" />
                  <rect width="1000" height="700" fill="url(#grid)" />

                  {/* 40ft Main Boulevard Avenue */}
                  <path
                    d="M 500 700 L 500 350 Q 500 200 400 100 L 350 0"
                    stroke="#D4AF37"
                    strokeWidth="28"
                    strokeOpacity="0.3"
                    fill="none"
                  />
                  <path
                    d="M 500 700 L 500 350 Q 500 200 400 100 L 350 0"
                    stroke="#F3E5AB"
                    strokeWidth="2"
                    strokeDasharray="8,8"
                    fill="none"
                  />

                  {/* Cross Internal Arterial Roads */}
                  <path
                    d="M 100 350 L 900 350"
                    stroke="#D4AF37"
                    strokeWidth="18"
                    strokeOpacity="0.25"
                    fill="none"
                  />
                  <path
                    d="M 220 150 L 220 550"
                    stroke="#D4AF37"
                    strokeWidth="14"
                    strokeOpacity="0.2"
                    fill="none"
                  />
                  <path
                    d="M 750 150 L 750 550"
                    stroke="#D4AF37"
                    strokeWidth="14"
                    strokeOpacity="0.2"
                    fill="none"
                  />

                  {/* Central Botanical Garden Polygon */}
                  <ellipse cx="480" cy="350" rx="140" ry="100" fill="#1b523f" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.5" />
                  <circle cx="480" cy="350" r="30" fill="#2d7a60" stroke="#F3E5AB" strokeWidth="1.5" />

                  {/* Villa Plots Enclave Grid (Zone A) */}
                  <rect x="120" y="180" width="200" height="280" rx="12" fill="#113328" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4,4" />
                  <text x="220" y="320" fill="#D4AF37" fontSize="14" fontFamily="Cinzel" textAnchor="middle" opacity="0.8">
                    VILLA ENCLAVE
                  </text>

                  {/* Tower Enclave (Zone B) */}
                  <rect x="640" y="160" width="220" height="240" rx="12" fill="#113328" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4,4" />
                  <text x="750" y="280" fill="#D4AF37" fontSize="14" fontFamily="Cinzel" textAnchor="middle" opacity="0.8">
                    TOWER ENCLAVE
                  </text>

                  {/* Temple Zone (Zone D) */}
                  <circle cx="380" cy="540" r="60" fill="#1a4537" stroke="#D4AF37" strokeWidth="1.5" />

                  {/* Club House (Zone E) */}
                  <rect x="680" y="470" width="180" height="130" rx="10" fill="#184033" stroke="#D4AF37" strokeWidth="1.5" />

                  {/* Grand Entrance (Zone F) */}
                  <rect x="420" y="630" width="160" height="50" rx="6" fill="#235c49" stroke="#F3E5AB" strokeWidth="2" />
                </svg>

                {/* Animated Interactive Hotspot Pins */}
                {filteredZones.map((zone) => {
                  const isSelected = selectedZone.id === zone.id;
                  return (
                    <button
                      key={zone.id}
                      onClick={() => setSelectedZone(zone)}
                      className="absolute group z-10 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                      style={{ left: `${zone.coordinates.x}%`, top: `${zone.coordinates.y}%` }}
                      aria-label={`Select ${zone.name}`}
                    >
                      {/* Pulse Ring */}
                      <span
                        className={`absolute inset-0 rounded-full animate-ping opacity-75 ${
                          isSelected ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/50'
                        }`}
                      />

                      {/* Center Pin */}
                      <div
                        className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border-2 transition-all shadow-xl ${
                          isSelected
                            ? 'bg-[#D4AF37] text-[#061611] border-white scale-110 shadow-[0_0_20px_#D4AF37]'
                            : 'bg-[#061611] text-[#D4AF37] border-[#D4AF37] hover:scale-105'
                        }`}
                      >
                        <span className="font-cinzel text-[10px] sm:text-xs font-black">
                          {zone.code.split('-')[1]}
                        </span>
                      </div>

                      {/* Tooltip on Hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-[#061611]/95 border border-[#D4AF37]/50 text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl z-30 font-sans-luxury">
                        {zone.name} ({zone.code})
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Map Legend */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#A3B8B0]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#D4AF37]" /> Click Pin to Inspect Zone
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-[#1b523f] border border-[#D4AF37]" /> Botanical Green
                </span>
              </div>
              <span className="font-mono text-[#D4AF37]">RERA Plan Sanctioned</span>
            </div>
          </div>

          {/* Right Column: Selected Zone Deep Dive Card */}
          <div className="lg:col-span-4">
            <motion.div
              key={selectedZone.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-[#0B2019] border border-[#D4AF37]/40 shadow-2xl overflow-hidden p-6 flex flex-col justify-between"
            >
              <div>
                {/* Zone Category & Code Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                    {selectedZone.category} • {selectedZone.code}
                  </span>
                  <span className="text-xs font-mono text-[#A3B8B0]">{selectedZone.area}</span>
                </div>

                {/* Zone Title */}
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F4F1EA]">
                  {selectedZone.name}
                </h3>
                <div className="text-xs font-semibold text-[#D4AF37] mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Status: {selectedZone.status}
                </div>

                {/* Zone Photo Preview */}
                <div className="relative h-44 rounded-xl overflow-hidden my-4 border border-white/10">
                  <img
                    src={selectedZone.image}
                    alt={selectedZone.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061611]/80 to-transparent" />
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#CAD6D2] leading-relaxed font-sans-luxury">
                  {selectedZone.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 space-y-2">
                  <div className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider">
                    Zone Key Highlights:
                  </div>
                  {selectedZone.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#E5DCC5]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  onClick={onOpenScheduleModal}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#DFBF74] to-[#C49836] text-xs font-bold uppercase tracking-wider text-[#061611] shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Site Visit for {selectedZone.code}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenBrochureModal}
                  className="w-full py-2.5 rounded-xl border border-white/15 bg-white/5 hover:border-[#D4AF37] text-xs font-semibold text-[#F4F1EA] transition-all"
                >
                  Download Full Master Plan PDF
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
