import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Bed, Bath, Maximize2, Compass, CheckCircle2, Play, Eye, ArrowRight, ShieldCheck, ChevronRight, ChevronLeft } from 'lucide-react';
import { Property } from '../types';
import { PROPERTIES_DATA } from '../data/mockData';

interface PropertiesSectionProps {
  onSelectFloorPlan: (property: Property) => void;
  onOpenVirtualTour: (property?: Property) => void;
  onBookViewing: (property: Property) => void;
}

export const PropertiesSection: React.FC<PropertiesSectionProps> = ({
  onSelectFloorPlan,
  onOpenVirtualTour,
  onBookViewing,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeImageIndexes, setActiveImageIndexes] = useState<Record<string, number>>({});

  const categories = ['All', 'Villas', 'Apartments', 'Bungalows', 'Custom Homes'];

  const filteredProperties =
    activeCategory === 'All'
      ? PROPERTIES_DATA
      : PROPERTIES_DATA.filter((p) => p.category === activeCategory);

  const nextPropertyImage = (id: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % total,
    }));
  };

  const prevPropertyImage = (id: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) - 1 + total) % total,
    }));
  };

  return (
    <section id="properties" className="py-24 relative bg-[#061611] text-[#F4F1EA] overflow-hidden">
      {/* Background Subtle Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2019] border border-[#D4AF37]/30 backdrop-blur-md mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4AF37]">
                Curated Residential Enclaves
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EA]">
              Luxury Property Showcase
            </h2>
            <p className="text-sm sm:text-base text-[#A3B8B0] mt-2 font-sans-luxury max-w-xl">
              Select from bespoke triplex villas, panoramic sunrise apartments, classic independent bungalows, and customizable architectural estates.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center flex-wrap gap-2 p-1.5 rounded-xl bg-[#0B2019] border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-[#D4AF37] text-[#061611] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'text-[#D3E0DC] hover:text-[#D4AF37] hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property) => {
              const currentImgIdx = activeImageIndexes[property.id] || 0;
              const currentImage = property.gallery[currentImgIdx] || property.featuredImage;

              return (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#0F2A21] to-[#081813] border border-[#D4AF37]/25 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:border-[#D4AF37]/70 transition-all duration-500 group flex flex-col justify-between"
                >
                  {/* Card Image Area with Carousel */}
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <img
                      src={currentImage}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081813] via-transparent to-black/40" />

                    {/* Tags & Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#061611]/85 text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-md">
                        {property.tag}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#102D24]/80 text-[#F4F1EA] border border-white/10 backdrop-blur-md flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#D4AF37]" /> {property.status}
                      </span>
                    </div>

                    {/* Price Ribbon */}
                    <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-xl bg-[#061611]/90 border border-[#D4AF37]/60 text-right backdrop-blur-md shadow-lg">
                      <div className="text-xs sm:text-sm font-bold font-mono text-[#F3E5AB]">
                        {property.price}
                      </div>
                      {property.pricePerSqFt && (
                        <div className="text-[9px] text-[#A3B8B0] font-mono">
                          {property.pricePerSqFt}
                        </div>
                      )}
                    </div>

                    {/* Image Carousel Controls */}
                    {property.gallery.length > 1 && (
                      <div className="absolute bottom-4 right-4 flex items-center gap-2">
                        <button
                          onClick={(e) => prevPropertyImage(property.id, property.gallery.length, e)}
                          className="w-7 h-7 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#061611] transition-colors"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-[11px] font-mono text-[#D4AF37] px-2 py-0.5 rounded bg-black/70">
                          {currentImgIdx + 1}/{property.gallery.length}
                        </span>
                        <button
                          onClick={(e) => nextPropertyImage(property.id, property.gallery.length, e)}
                          className="w-7 h-7 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#061611] transition-colors"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    {/* Quick Virtual Tour Button on image */}
                    <button
                      onClick={() => onOpenVirtualTour(property)}
                      className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-[#061611]/85 border border-[#D4AF37]/40 text-xs text-[#D4AF37] font-semibold flex items-center gap-1.5 hover:bg-[#D4AF37] hover:text-[#061611] transition-colors backdrop-blur-md"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>360° Tour</span>
                    </button>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                          {property.category} • Datala
                        </span>
                        <span className="text-xs text-[#A3B8B0] flex items-center gap-1">
                          <Compass className="w-3.5 h-3.5 text-[#D4AF37]" /> {property.facing}
                        </span>
                      </div>

                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F4F1EA] mt-1 group-hover:text-[#F3E5AB] transition-colors">
                        {property.title}
                      </h3>
                      <p className="text-xs text-[#A3B8B0] font-serif-luxury italic mt-1">
                        {property.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-[#CAD6D2] mt-3 line-clamp-2 leading-relaxed font-sans-luxury">
                        {property.description}
                      </p>

                      {/* Specs Row */}
                      <div className="grid grid-cols-3 gap-2 py-3.5 my-3 border-y border-white/10 bg-[#0B2019]/40 rounded-xl px-3">
                        <div className="flex items-center gap-2">
                          <Bed className="w-4 h-4 text-[#D4AF37] shrink-0" />
                          <div>
                            <div className="text-xs font-bold text-[#F4F1EA]">{property.bedrooms} Beds</div>
                            <div className="text-[10px] text-[#8EA39B]">Bedrooms</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Bath className="w-4 h-4 text-[#D4AF37] shrink-0" />
                          <div>
                            <div className="text-xs font-bold text-[#F4F1EA]">{property.bathrooms} Baths</div>
                            <div className="text-[10px] text-[#8EA39B]">Bathrooms</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Maximize2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                          <div>
                            <div className="text-xs font-bold text-[#F4F1EA]">{property.carpetArea}</div>
                            <div className="text-[10px] text-[#8EA39B]">Carpet Area</div>
                          </div>
                        </div>
                      </div>

                      {/* Key Highlight Bullets */}
                      <div className="space-y-1.5 mb-2">
                        {property.features.slice(0, 2).map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#E5DCC5]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Row */}
                    <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                      <button
                        onClick={() => onSelectFloorPlan(property)}
                        className="flex-1 py-2.5 px-3 rounded-xl border border-white/20 bg-white/5 hover:bg-[#D4AF37]/15 hover:border-[#D4AF37] text-xs font-semibold text-[#F4F1EA] transition-all flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Floor Plans</span>
                      </button>

                      <button
                        onClick={() => onBookViewing(property)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#DFBF74] to-[#C49836] text-xs font-bold uppercase tracking-wider text-[#061611] shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_22px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>Book Viewing</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
