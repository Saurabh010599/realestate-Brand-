import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, Star, Trees, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const StatisticsSection: React.FC = () => {
  const stats = [
    {
      value: '100+',
      label: 'Happy Families',
      subtext: 'Thriving multigenerational community',
      icon: Users,
    },
    {
      value: '4.1 ★',
      label: 'Verified Rating',
      subtext: '111+ Google Reviews & Testimonials',
      icon: Star,
    },
    {
      value: '15+ Acres',
      label: 'Township Canvas',
      subtext: '65% Open Botanical Greenery',
      icon: Trees,
    },
    {
      value: '15+ Years',
      label: 'Construction Legacy',
      subtext: 'Uncompromising engineering standards',
      icon: Award,
    },
    {
      value: '100%',
      label: 'Clear Legal Titles',
      subtext: 'RERA & Town Planning Sanctioned',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 relative bg-[#061611] text-[#F4F1EA] overflow-hidden border-y border-[#D4AF37]/20">
      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#0B2019] to-[#081813] border border-[#D4AF37]/25 shadow-lg flex flex-col items-center text-center group hover:border-[#D4AF37] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#102D24] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="font-cinzel text-2xl sm:text-3xl font-black text-[#F4F1EA] tracking-wide">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#A3B8B0] mt-1 font-sans-luxury">
                  {stat.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
