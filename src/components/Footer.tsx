import React from 'react';
import { Sparkles, Phone, Mail, MapPin, ShieldCheck, Clock, MessageSquare, ArrowUp, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040E0B] text-[#CAD6D2] border-t border-[#D4AF37]/20 relative z-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-white/10 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl border border-[#D4AF37]/60 flex items-center justify-center rotate-45 bg-[#0B2019] shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <div className="-rotate-45 flex flex-col items-center leading-none">
                <span className="font-cinzel text-sm font-black tracking-widest text-[#D4AF37]">
                  DSK
                </span>
                <span className="text-[8px] font-bold text-[#F4F1EA] tracking-tighter">
                  GRN
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-cinzel text-2xl font-bold tracking-[0.2em] text-[#F4F1EA]">
                DSK GREEN
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                Chandrapur • Maharashtra
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919422336633"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D4AF37]/40 bg-[#0B2019] text-xs font-mono font-bold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#061611] transition-all shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>+91 94223 36633</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-white/15 bg-white/5 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/10 text-xs">
          {/* Col 1: About Township */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#F4F1EA]">
              The Township
            </h4>
            <p className="text-[#A3B8B0] leading-relaxed font-sans-luxury">
              DSK GREEN is a 15+ Acre premier gated residential township located in Datala, Chandrapur. Offering luxury villas, 3 BHK suites, and independent bungalows crafted to high-end architectural standards.
            </p>
            <div className="flex items-center gap-3 text-[#D4AF37]">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#D4AF37]/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#D4AF37]/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#D4AF37]/20 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#D4AF37]/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Enclave Portfolios */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#F4F1EA]">
              Residential Enclaves
            </h4>
            <ul className="space-y-2 text-[#CAD6D2]">
              <li>
                <a href="#properties" className="hover:text-[#D4AF37] transition-colors">
                  The Royal Sovereign 4 BHK Villas
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#D4AF37] transition-colors">
                  The Grand Boulevard 3 BHK Suites
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#D4AF37] transition-colors">
                  The Palm Vista Independent Bungalows
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#D4AF37] transition-colors">
                  Custom-Built Bespoke Estates
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#D4AF37] transition-colors">
                  NA Sanctioned Architectural Plots
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#F4F1EA]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-[#CAD6D2]">
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  Architectural Heritage & Vision
                </a>
              </li>
              <li>
                <a href="#masterplan" className="hover:text-[#D4AF37] transition-colors">
                  Interactive Master Plan & Zoning
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#D4AF37] transition-colors">
                  Botanical Gardens & Temple Plaza
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#D4AF37] transition-colors">
                  Datala Location & Commute Matrix
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#D4AF37] transition-colors">
                  Loan EMI & Stamp Duty Calculator
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">
                  Resident Family Reviews (4.1 ★)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Site Office Address */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#F4F1EA]">
              Site & Sales Office
            </h4>
            <div className="space-y-2.5 text-[#A3B8B0]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>DSK GREEN, Datala Road, Datala, Chandrapur, Maharashtra – 442401</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-mono text-[#D4AF37] font-bold">+91 94223 36633</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>09:00 AM – 07:30 PM (All 7 Days)</span>
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[10px] font-mono text-[#D4AF37] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" /> MAHARERA Sanctioned
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A938A] gap-4">
          <p>© {new Date().getFullYear()} DSK GREEN Chandrapur. All rights reserved. Ultra-luxury residential township.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Booking</a>
            <span>•</span>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">RERA Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
