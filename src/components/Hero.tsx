import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Compass, ShieldCheck, Download, Play, ChevronRight, ChevronLeft, Building2, Trees, Award } from 'lucide-react';
import { ThreeCanvas } from './ThreeCanvas';

interface HeroProps {
  onOpenScheduleModal: () => void;
  onOpenBrochureModal: () => void;
  onOpenVirtualTour: () => void;
  onFilterProperties: (category: string) => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90',
    tag: 'Architectural Eminence',
    title: 'Experience Luxury Living in Chandrapur',
    subtitle: 'Premium Villas, Apartments & Custom Homes in Datala',
    badge: '15+ Acres Gated Township'
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90',
    tag: 'The Sovereign Villa Enclave',
    title: 'Bespoke 3 & 4 BHK Triplex Villas',
    subtitle: 'Private Landscaped Gardens, Double-Height Foyers & Rooftop Terraces',
    badge: 'Limited 18 Signature Villas'
  },
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=90',
    tag: 'Elevated High-Rise Suites',
    title: 'The Grand Boulevard Residences',
    subtitle: 'Panoramic 3 BHK Suites Overlooking The Central Musical Fountain',
    badge: 'Immediate Possession Ready'
  },
  {
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2000&q=90',
    tag: 'Pure Oxygen Micro-Climate',
    title: '65% Open Landscaped Greenery',
    subtitle: '1,200+ Native Trees, Lord Ganesha Temple & Botanical Walking Circuits',
    badge: 'Eco-Luxury Living'
  }
];

export const Hero: React.FC<HeroProps> = ({
  onOpenScheduleModal,
  onOpenBrochureModal,
  onOpenVirtualTour,
  onFilterProperties,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedType, setSelectedType] = useState('All');

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#061611]"
    >
      {/* Background Image Carousel with Ken-Burns Smooth Zoom */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
          />
        </AnimatePresence>

        {/* Sophisticated Luxury Multi-Layer Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061611]/95 via-[#061611]/75 to-[#061611]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061611] via-transparent to-[#061611]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(212,175,55,0.12)_0%,transparent_60%)]" />

        {/* Three.js Golden Particles Canvas */}
        <ThreeCanvas />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-3xl">
          {/* Tag / Badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2019]/80 border border-[#D4AF37]/40 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#F3E5AB]">
              {HERO_SLIDES[currentSlide].tag} • {HERO_SLIDES[currentSlide].badge}
            </span>
          </motion.div>

          {/* Main Animated Headings */}
          <motion.h1
            key={`heading-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F1EA] leading-[1.15]"
          >
            {HERO_SLIDES[currentSlide].title}
          </motion.h1>

          <motion.p
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif-luxury text-lg sm:text-2xl text-[#E5DCC5] mt-4 font-normal italic leading-relaxed"
          >
            {HERO_SLIDES[currentSlide].subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base text-[#A3B8B0] mt-3 max-w-2xl font-sans-luxury leading-relaxed"
          >
            Chandrapur’s most celebrated residential address in Datala. Combining architectural grandeur, international landscaping, RERA-approved infrastructure, and a gated sanctuary for 100+ distinguished families.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <button
              onClick={onOpenScheduleModal}
              id="hero-schedule-visit-btn"
              className="px-6 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#061611] bg-gradient-to-r from-[#F9F1D8] via-[#D4AF37] to-[#AA7C11] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Site Visit</span>
            </button>

            <a
              href="#properties"
              id="hero-explore-properties-btn"
              className="px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F4F1EA] border border-[#D4AF37]/50 bg-[#0B2019]/60 backdrop-blur-md hover:bg-[#D4AF37]/15 hover:border-[#D4AF37] transition-all flex items-center gap-2"
            >
              <Building2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Explore Properties</span>
            </a>

            <button
              onClick={onOpenVirtualTour}
              id="hero-virtual-tour-btn"
              className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D4AF37] border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
              <span>360° Virtual Tour</span>
            </button>
          </motion.div>

          {/* Slide Navigation Controls */}
          <div className="flex items-center gap-4 mt-10">
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#F4F1EA] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#F4F1EA] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Slide Progress Dots */}
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentSlide === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Statistics & Trust Bar at Bottom of Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#0B2019]/90 border border-[#D4AF37]/25 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
          {/* Stat 1 */}
          <div className="flex items-center gap-3.5 p-2 border-r border-white/10 last:border-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#102D24] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#F4F1EA] tracking-wide">
                100+
              </div>
              <div className="text-[11px] sm:text-xs text-[#A3B8B0] uppercase tracking-wider font-semibold">
                Happy Families Residing
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3.5 p-2 border-r border-white/10 last:border-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#102D24] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#F4F1EA] tracking-wide">
                Datala
              </div>
              <div className="text-[11px] sm:text-xs text-[#A3B8B0] uppercase tracking-wider font-semibold">
                Prime Growth Location
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3.5 p-2 border-r border-white/10 last:border-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#102D24] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#F4F1EA] tracking-wide">
                24x7
              </div>
              <div className="text-[11px] sm:text-xs text-[#A3B8B0] uppercase tracking-wider font-semibold">
                Secure Gated Township
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-3.5 p-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#102D24] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Trees className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#F4F1EA] tracking-wide">
                65% Green
              </div>
              <div className="text-[11px] sm:text-xs text-[#A3B8B0] uppercase tracking-wider font-semibold">
                Modern Eco Infrastructure
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
