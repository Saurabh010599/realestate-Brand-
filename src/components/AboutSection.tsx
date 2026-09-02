import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Shield, CheckCircle2, Trees, Building, Award, Compass, Layers, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenScheduleModal: () => void;
  onOpenBrochureModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenScheduleModal, onOpenBrochureModal }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'sustainability' | 'community'>('architecture');

  return (
    <section id="about" className="py-24 relative bg-[#071712] overflow-hidden text-[#F4F1EA]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-[#164334]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2019] border border-[#D4AF37]/30 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4AF37]">
              The Crown Jewel of Datala, Chandrapur
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EA]">
            Architectural Eminence Meets Nature’s Sanctuary
          </h2>
          <p className="text-[#A3B8B0] text-sm sm:text-base mt-4 font-sans-luxury leading-relaxed">
            Conceived as Chandrapur’s quintessential luxury residential enclave, DSK GREEN redefines modern living in Datala with manicured greenery, earthquake-resilient engineering, and a curated neighborhood of visionary homeowners.
          </p>
        </div>

        {/* 2-Column Grid: Visual Story + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Visual Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="DSK Green Luxury Township Architecture"
                className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061611] via-transparent to-transparent opacity-80" />

              {/* Floating Quality Badge */}
              <div className="absolute top-4 left-4 px-4 py-2.5 rounded-xl bg-[#061611]/90 border border-[#D4AF37]/40 backdrop-blur-md flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#F4F1EA] tracking-wide font-cinzel">M25 Grade RCC</div>
                  <div className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">Engineered Longevity</div>
                </div>
              </div>

              {/* Floating Bottom Township Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0B2019]/95 border border-white/10 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Trees className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-xs font-semibold text-[#F4F1EA]">65% Dedicated Open Spaces</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#D4AF37] font-bold">1,200+ Trees</span>
                </div>
              </div>
            </div>

            {/* Small Overlapping Secondary Image */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-56 h-40 rounded-xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl z-10">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
                alt="Luxury Double-Height Foyer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061611]/80 to-transparent flex items-end p-2.5">
                <span className="text-[10px] font-bold tracking-wider text-[#F3E5AB] font-cinzel uppercase">
                  Double-Height Foyers
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Storytelling & Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Tab Selector */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#0B2019] border border-white/10 w-fit">
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === 'architecture'
                    ? 'bg-[#D4AF37] text-[#061611] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'text-[#A3B8B0] hover:text-[#F4F1EA]'
                }`}
              >
                Modern Architecture
              </button>
              <button
                onClick={() => setActiveTab('sustainability')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === 'sustainability'
                    ? 'bg-[#D4AF37] text-[#061611] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'text-[#A3B8B0] hover:text-[#F4F1EA]'
                }`}
              >
                Green Micro-Climate
              </button>
              <button
                onClick={() => setActiveTab('community')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === 'community'
                    ? 'bg-[#D4AF37] text-[#061611] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'text-[#A3B8B0] hover:text-[#F4F1EA]'
                }`}
              >
                Gated Trust
              </button>
            </div>

            {/* Tab Content Display */}
            {activeTab === 'architecture' && (
              <div className="space-y-4">
                <h3 className="font-cinzel text-2xl font-bold text-[#F4F1EA]">
                  Contemporary Grandeur Inspired by India’s Premier Builders
                </h3>
                <p className="text-sm text-[#A3B8B0] leading-relaxed">
                  Every home at DSK GREEN is built upon architectural principles seen in DLF and Sobha developments. High ceiling clearances, maximum natural cross-ventilation, double glazed acoustic insulation, and 100% Vastu-compliant orientations ensure harmony and peace.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-[#E5DCC5]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Double-height living rooms with Italian Botticino marble</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#E5DCC5]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Teakwood main door frames with brass digital biometrics</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#E5DCC5]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Private terrace decks with pergola lounge provisions</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#E5DCC5]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Zero dead space floor plans with optimal storage</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sustainability' && (
              <div className="space-y-4">
                <h3 className="font-cinzel text-2xl font-bold text-[#F4F1EA]">
                  A Green Oasis Shielded from Industrial Dust
                </h3>
                <p className="text-sm text-[#A3B8B0] leading-relaxed">
                  Datala is strategically positioned in Chandrapur to capture fresh morning breezes. DSK GREEN amplifies this with 1,200+ native oxygen-rich trees, rainwater percolation recharge pits, solar powered common lighting, and an automated eco-irrigation grid.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-[#E5DCC5]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>2-3°C cooler micro-climate through dense foliage</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#E5DCC5]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>100% Rainwater harvesting with 6 underground recharge wells</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#E5DCC5]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Organic waste composting producing in-house manure</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#E5DCC5]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Solar illuminated avenues and internal street lights</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'community' && (
              <div className="space-y-4">
                <h3 className="font-cinzel text-2xl font-bold text-[#F4F1EA]">
                  A Distinguished Neighborhood of 100+ Families
                </h3>
                <p className="text-sm text-[#A3B8B0] leading-relaxed">
                  Join doctors, industrialists, engineers, and leading business families of Chandrapur who call DSK GREEN home. With multi-tier biometric security, dedicated security patrol, and active festival celebrations at the temple and clubhouse.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-[#E5DCC5]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>100+ High-definition night-vision CCTV coverage</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#E5DCC5]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>RFID boom barriers with automated license recognition</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#E5DCC5]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Vibrant festival celebrations (Ganesh Utsav, Diwali)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#E5DCC5]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Safe vehicle-free internal children play circuits</span>
                  </div>
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={onOpenScheduleModal}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#061611] bg-gradient-to-r from-[#F9F1D8] via-[#D4AF37] to-[#AA7C11] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2"
              >
                <span>Experience the Township</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenBrochureModal}
                className="px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#F4F1EA] border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
              >
                Download Project Dossier
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
