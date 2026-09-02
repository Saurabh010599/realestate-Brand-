import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, CheckCircle2, UserCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  const prevTestimonial = () =>
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative bg-[#071712] text-[#F4F1EA] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Overall Rating Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2019] border border-[#D4AF37]/30 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4AF37]">
              Voices of our Distinguished Community
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EA]">
            Resident Stories & Endorsements
          </h2>

          {/* Rating Summary Strip */}
          <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-2xl bg-[#0B2019] border border-[#D4AF37]/40 shadow-xl mt-5">
            <div className="flex items-center gap-1 text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#CAD6D2]">
              <span className="font-mono text-sm font-bold text-[#F4F1EA]">4.1 / 5.0 Rating</span>
              <span className="text-[#7A938A]">•</span>
              <span className="text-[#D4AF37]">111+ Verified Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonial Glass Slider Card */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#0F2A21] to-[#081813] border border-[#D4AF37]/35 shadow-[0_25px_60px_rgba(0,0,0,0.7)] relative flex flex-col justify-between"
            >
              {/* Giant Watermark Quote */}
              <Quote className="absolute top-6 right-8 w-20 h-20 text-[#D4AF37]/10 pointer-events-none" />

              {/* Stars */}
              <div className="flex items-center gap-1.5 mb-6 text-[#D4AF37]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="font-serif-luxury text-base sm:text-xl lg:text-2xl text-[#F4F1EA] italic leading-relaxed mb-8">
                “{current.quote}”
              </p>

              {/* Resident Profile Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-white/10 gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37] shadow-lg"
                  />
                  <div>
                    <div className="font-cinzel text-base sm:text-lg font-bold text-[#F4F1EA] flex items-center gap-2">
                      <span>{current.name}</span>
                      <UserCheck className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <div className="text-xs text-[#D4AF37] font-sans-luxury">{current.role}</div>
                    <div className="text-[11px] text-[#A3B8B0] mt-0.5">
                      {current.propertyOwned} • {current.residenceYear}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-[#0B2019] border border-white/20 flex items-center justify-center text-[#F4F1EA] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-[#0B2019] border border-white/20 flex items-center justify-center text-[#F4F1EA] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
