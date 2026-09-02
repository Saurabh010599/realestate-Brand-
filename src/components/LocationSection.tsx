import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Navigation, Train, Bus, GraduationCap, HeartPulse, ShoppingBag, Compass, ExternalLink, ArrowRight, Clock } from 'lucide-react';
import { LANDMARKS_DATA } from '../data/mockData';
import { Landmark } from '../types';

export const LocationSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(LANDMARKS_DATA[0]);

  const categories = ['All', 'Transit', 'Education', 'Healthcare', 'Commercial', 'Tourism'];

  const filteredLandmarks =
    activeCategory === 'All'
      ? LANDMARKS_DATA
      : LANDMARKS_DATA.filter((l) => l.category === activeCategory);

  const getLandmarkIcon = (iconName: string) => {
    switch (iconName) {
      case 'Train':
        return <Train className="w-5 h-5" />;
      case 'Bus':
        return <Bus className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'Compass':
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section id="location" className="py-24 relative bg-[#061611] text-[#F4F1EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2019] border border-[#D4AF37]/30 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4AF37]">
              Strategic Chandrapur Location
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EA]">
            Datala — Chandrapur’s Golden Growth Hub
          </h2>
          <p className="text-[#A3B8B0] text-sm sm:text-base mt-3 font-sans-luxury">
            Seamlessly connected to arterial highways, top CBSE schools, multispeciality hospitals, and the city core while preserving peaceful green tranquility.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
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

        {/* 2-Column Grid: Map Stage + Landmark Distance Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Luxury Map Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-[#081813] border border-[#D4AF37]/30 shadow-2xl p-4 flex flex-col justify-between">
            {/* Map Top Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-cinzel text-sm font-bold text-[#F4F1EA]">
                  Datala Road, Chandrapur, Maharashtra 442401
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Datala+Chandrapur+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#D4AF37] hover:underline flex items-center gap-1"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Custom Interactive Map / High-res satellite iframe simulation with dark luxury overlay */}
            <div className="relative w-full h-[380px] sm:h-[420px] rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="DSK Green Chandrapur Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.834079813295!2d79.29402547596003!3d19.961556881432167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d5b6e4e0821b%3A0x6b107c1b489d81d4!2sDatala%2C%20Chandrapur%2C%20Maharashtra%20442401!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[120%]"
                loading="lazy"
                allowFullScreen
              />

              {/* Floating Landmark Focus Badge */}
              {selectedLandmark && (
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#061611]/95 border border-[#D4AF37]/50 backdrop-blur-md shadow-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#102D24] text-[#D4AF37] flex items-center justify-center shrink-0">
                      {getLandmarkIcon(selectedLandmark.icon)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#F4F1EA] font-cinzel">
                        {selectedLandmark.name}
                      </div>
                      <div className="text-[11px] text-[#A3B8B0] font-sans-luxury">
                        {selectedLandmark.description}
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs font-mono font-bold text-[#D4AF37]">
                      {selectedLandmark.driveTime}
                    </div>
                    <div className="text-[10px] text-[#A3B8B0] font-mono">
                      {selectedLandmark.distance}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Directions Button */}
            <div className="mt-4 pt-3 flex items-center justify-between">
              <span className="text-xs text-[#A3B8B0]">
                Coordinates: 19.9615° N, 79.2961° E
              </span>
              <a
                href="https://maps.google.com/?q=Datala+Chandrapur+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-xs font-semibold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#061611] transition-all flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Turn-by-Turn Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Distance Landmark Cards Matrix */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Commute Times & Proximity Matrix
            </div>

            {filteredLandmarks.map((landmark, idx) => {
              const isSelected = selectedLandmark?.name === landmark.name;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedLandmark(landmark)}
                  className={`cursor-pointer rounded-xl p-4 transition-all duration-300 border flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#0B2019] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                      : 'bg-[#081813] border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#0B2019]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-[#D4AF37] text-[#061611]'
                          : 'bg-[#102D24] text-[#D4AF37] border border-[#D4AF37]/30'
                      }`}
                    >
                      {getLandmarkIcon(landmark.icon)}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#F4F1EA] font-cinzel">
                        {landmark.name}
                      </div>
                      <div className="text-[11px] text-[#A3B8B0] font-sans-luxury">
                        {landmark.category} • {landmark.description}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0 pl-2">
                    <div className="text-xs font-mono font-bold text-[#D4AF37]">
                      {landmark.driveTime}
                    </div>
                    <div className="text-[10px] text-[#A3B8B0] font-mono">
                      {landmark.distance}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
