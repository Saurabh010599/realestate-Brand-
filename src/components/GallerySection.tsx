import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Download, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Exterior & Architecture',
    'Luxury Interiors',
    'Township Landscapes',
    'Amenities & Community',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 relative bg-[#071712] text-[#F4F1EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2019] border border-[#D4AF37]/30 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4AF37]">
              Visual Grandeur
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EA]">
            The DSK GREEN Visual Odyssey
          </h2>
          <p className="text-[#A3B8B0] text-sm sm:text-base mt-3 font-sans-luxury">
            A glimpse into actual architectural elevations, double-height foyers, landscaped zen gardens, and the evening musical fountain in Datala, Chandrapur.
          </p>

          {/* Category Filters */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-[#D4AF37] text-[#061611] shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                    : 'bg-[#0B2019] text-[#CAD6D2] border border-white/10 hover:border-[#D4AF37]/40 hover:text-[#F4F1EA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#D4AF37]/25 shadow-xl ${
                  index % 3 === 0 ? 'sm:col-span-2 sm:row-span-2 h-[380px] sm:h-[480px]' : 'h-[230px]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061611] via-[#061611]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Hover Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#061611] flex items-center justify-center shadow-[0_0_20px_#D4AF37] transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 inset-x-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] font-mono">
                    {item.category}
                  </span>
                  <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#F4F1EA] mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev / Next Controls */}
            <button
              onClick={prevLightbox}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#D4AF37] hover:text-[#061611] transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextLightbox}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#D4AF37] hover:text-[#061611] transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center text-center"
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[68vh] w-auto object-contain rounded-xl border border-[#D4AF37]/40 shadow-2xl"
              />

              <div className="mt-4 max-w-xl">
                <span className="text-xs uppercase tracking-widest font-mono text-[#D4AF37]">
                  {filteredItems[lightboxIndex].category} ({lightboxIndex + 1}/{filteredItems.length})
                </span>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#F4F1EA] mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-[#A3B8B0] mt-1 font-sans-luxury">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
