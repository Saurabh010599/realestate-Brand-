import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trees, Smile, Droplets, ShieldCheck, Compass, Leaf, Zap, Car, Users, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { AMENITIES_DATA } from '../data/mockData';
import { Amenity } from '../types';

interface AmenitiesSectionProps {
  onOpenScheduleModal: () => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onOpenScheduleModal }) => {
  const [selectedAmenity, setSelectedAmenity] = useState<Amenity | null>(null);
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Wellness & Nature', 'Security & Roads', 'Leisure & Community', 'Spiritual & Family'];

  const filteredAmenities =
    activeTab === 'All'
      ? AMENITIES_DATA
      : AMENITIES_DATA.filter((a) => a.category === activeTab);

  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trees':
        return <Trees className="w-6 h-6" />;
      case 'Smile':
        return <Smile className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6" />;
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      case 'Car':
        return <Car className="w-6 h-6" />;
      case 'Users':
      default:
        return <Users className="w-6 h-6" />;
    }
  };

  return (
    <section id="amenities" className="py-24 relative bg-[#061611] text-[#F4F1EA] overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full border border-[#D4AF37]/10 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full border border-[#D4AF37]/10 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2019] border border-[#D4AF37]/30 backdrop-blur-md mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4AF37]">
                World-Class Township Amenities
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EA]">
              Indulgences of an Elevated Lifestyle
            </h2>
            <p className="text-[#A3B8B0] text-sm sm:text-base mt-2 font-sans-luxury max-w-xl">
              10+ Curated lifestyle experiences engineered for multigenerational wellness, spiritual serenity, and 24/7 peace of mind in Datala, Chandrapur.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-2 p-1.5 rounded-xl bg-[#0B2019] border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === cat
                    ? 'bg-[#D4AF37] text-[#061611] shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                    : 'text-[#CAD6D2] hover:text-[#D4AF37] hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredAmenities.map((amenity) => (
              <motion.div
                key={amenity.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedAmenity(amenity)}
                className="cursor-pointer group rounded-2xl p-5 bg-gradient-to-b from-[#0F2A21] to-[#081813] border border-[#D4AF37]/20 hover:border-[#D4AF37]/70 shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#102D24] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#061611] transition-all duration-300 shadow-md">
                      {getAmenityIcon(amenity.iconName)}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#A3B8B0] font-mono">
                      {amenity.category.split(' ')[0]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-cinzel text-base font-bold text-[#F4F1EA] group-hover:text-[#F3E5AB] transition-colors leading-snug">
                    {amenity.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#CAD6D2] mt-2.5 line-clamp-3 leading-relaxed font-sans-luxury">
                    {amenity.shortDesc}
                  </p>
                </div>

                {/* Card Action Hint */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#D4AF37] font-semibold group-hover:translate-x-1 transition-transform">
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Amenity Detail Modal */}
      <AnimatePresence>
        {selectedAmenity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-2xl bg-[#081813] border border-[#D4AF37]/50 shadow-2xl overflow-hidden text-[#F4F1EA]"
            >
              {/* Image Banner */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={selectedAmenity.image}
                  alt={selectedAmenity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081813] via-transparent to-black/40" />

                <button
                  onClick={() => setSelectedAmenity(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37] text-[#061611]">
                    {selectedAmenity.category}
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
                    {selectedAmenity.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-[#CAD6D2] leading-relaxed font-sans-luxury">
                  {selectedAmenity.fullDesc}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider">
                    Engineered Features & Highlights:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedAmenity.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#E5DCC5]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedAmenity(null)}
                    className="px-4 py-2 text-xs font-semibold text-[#A3B8B0] hover:text-white"
                  >
                    Close
                  </button>

                  <button
                    onClick={() => {
                      setSelectedAmenity(null);
                      onOpenScheduleModal();
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#DFBF74] to-[#C49836] text-xs font-bold uppercase tracking-wider text-[#061611] shadow-lg flex items-center gap-2"
                  >
                    <span>Inspect On-Site</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
