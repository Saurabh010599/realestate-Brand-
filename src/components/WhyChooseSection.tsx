import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Hammer, Shield, Sprout, Award, Navigation, TrendingUp, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/mockData';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'MapPin':
        return <MapPin className="w-5 h-5" />;
      case 'Hammer':
        return <Hammer className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      case 'Sprout':
        return <Sprout className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'Navigation':
        return <Navigation className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 relative bg-[#071712] text-[#F4F1EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2019] border border-[#D4AF37]/30 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4AF37]">
              Uncompromising Excellence
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EA]">
            Why Discerning Homebuyers Choose DSK GREEN
          </h2>
          <p className="text-[#A3B8B0] text-sm sm:text-base mt-3 font-sans-luxury">
            Combining legal transparency, architectural mastery, green open micro-climate, and Chandrapur’s most sought-after address in Datala.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl p-6 bg-gradient-to-b from-[#0F2A21] to-[#081813] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Metric Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#102D24] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#061611] transition-all duration-300">
                    {getIcon(item.icon)}
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#061611] text-[#D4AF37] border border-[#D4AF37]/30">
                    {item.stats}
                  </span>
                </div>

                <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#F4F1EA] group-hover:text-[#F3E5AB] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#CAD6D2] mt-2.5 leading-relaxed font-sans-luxury">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-semibold text-[#D4AF37]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Verified Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
