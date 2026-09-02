import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar, Download, Menu, X, Sparkles, MapPin, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenScheduleModal: () => void;
  onOpenBrochureModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenScheduleModal, onOpenBrochureModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['home', 'about', 'properties', 'masterplan', 'amenities', 'location', 'calculator', 'gallery', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Properties', href: '#properties', id: 'properties' },
    { label: 'Master Plan', href: '#masterplan', id: 'masterplan' },
    { label: 'Amenities', href: '#amenities', id: 'amenities' },
    { label: 'Location', href: '#location', id: 'location' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Reviews', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        id="main-luxury-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#061611]/90 backdrop-blur-xl border-b border-[#D4AF37]/20 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-[#061611]/80 via-[#061611]/30 to-transparent py-5 backdrop-blur-[2px]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            id="nav-brand-logo"
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg border border-[#D4AF37]/60 flex items-center justify-center rotate-45 bg-[#0B2019] shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:border-[#D4AF37] transition-colors">
              <div className="-rotate-45 flex flex-col items-center leading-none">
                <span className="font-cinzel text-xs sm:text-sm font-black tracking-widest text-[#D4AF37]">
                  DSK
                </span>
                <span className="text-[7px] font-bold text-[#F4F1EA] tracking-tighter">
                  GRN
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.18em] text-[#F4F1EA] group-hover:text-[#D4AF37] transition-colors">
                DSK GREEN
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5" /> Datala, Chandrapur
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-[#0B2019]/60 border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`px-3 py-1.5 text-[13px] font-medium tracking-wider uppercase transition-all duration-300 rounded-full relative ${
                    isActive
                      ? 'text-[#061611] font-semibold bg-gradient-to-r from-[#DFBF74] to-[#C49836] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'text-[#D3E0DC] hover:text-[#D4AF37] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Phone Call Hotline */}
            <a
              href="tel:+919422336633"
              id="nav-phone-cta"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/30 rounded-full hover:bg-[#D4AF37]/10 transition-all group"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
              <span className="font-mono tracking-wider">+91 94223 36633</span>
            </a>

            {/* Schedule Visit Primary Button */}
            <button
              onClick={onOpenScheduleModal}
              id="nav-schedule-btn"
              className="relative group overflow-hidden px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#061611] bg-gradient-to-r from-[#F9F1D8] via-[#D4AF37] to-[#AA7C11] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_28px_rgba(212,175,55,0.5)] transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Site Visit</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenScheduleModal}
              id="nav-mobile-quick-schedule"
              className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#061611] bg-[#D4AF37] rounded-full flex items-center gap-1"
            >
              <Calendar className="w-3 h-3" />
              <span>Visit</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-mobile-toggle-btn"
              className="p-2 text-[#F4F1EA] hover:text-[#D4AF37] rounded-lg bg-[#0B2019] border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-[#061611]/98 backdrop-blur-2xl border-b border-[#D4AF37]/30 p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-4 text-sm font-medium uppercase tracking-wider text-[#F4F1EA] hover:text-[#D4AF37] hover:bg-[#0B2019] rounded-lg transition-colors flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]/60" />
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:+919422336633"
                  className="w-full py-3 text-center text-sm font-semibold text-[#D4AF37] border border-[#D4AF37]/40 rounded-xl bg-[#0B2019] flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call: +91 94223 36633
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBrochureModal();
                    }}
                    className="py-3 text-xs font-semibold uppercase tracking-wider text-[#F4F1EA] border border-white/15 rounded-xl bg-white/5 flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-4 h-4 text-[#D4AF37]" /> Brochure
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenScheduleModal();
                    }}
                    className="py-3 text-xs font-semibold uppercase tracking-wider text-[#061611] bg-gradient-to-r from-[#DFBF74] to-[#C49836] rounded-xl flex items-center justify-center gap-1.5 shadow-lg"
                  >
                    <Sparkles className="w-4 h-4" /> Book Visit
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
