import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { MouseFollower } from './components/MouseFollower';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PropertiesSection } from './components/PropertiesSection';
import { MasterPlanSection } from './components/MasterPlanSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { LocationSection } from './components/LocationSection';
import { MortgageCalculator } from './components/MortgageCalculator';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { StatisticsSection } from './components/StatisticsSection';
import { ContactSection } from './components/ContactSection';
import { FloorPlanModal } from './components/FloorPlanModal';
import { VirtualTourModal } from './components/VirtualTourModal';
import { BrochureModal } from './components/BrochureModal';
import { Footer } from './components/Footer';
import { Property } from './types';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPropertyForFloorPlan, setSelectedPropertyForFloorPlan] = useState<Property | null>(null);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [virtualTourProperty, setVirtualTourProperty] = useState<Property | null>(null);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [selectedPropertyForBooking, setSelectedPropertyForBooking] = useState<Property | null>(null);

  const handleOpenScheduleModal = (property?: Property) => {
    if (property) setSelectedPropertyForBooking(property);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenVirtualTour = (property?: Property) => {
    setVirtualTourProperty(property || null);
    setIsVirtualTourOpen(true);
  };

  return (
    <div className="relative bg-[#061611] text-[#F4F1EA] min-h-screen selection:bg-[#D4AF37] selection:text-[#061611]">
      {/* Luxury Intro Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Luxury Mouse Follower & Ambient Spotlight */}
      <MouseFollower />

      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenScheduleModal={() => handleOpenScheduleModal()}
        onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* Full-screen Cinematic Hero */}
        <Hero
          onOpenScheduleModal={() => handleOpenScheduleModal()}
          onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
          onOpenVirtualTour={() => handleOpenVirtualTour()}
          onFilterProperties={() => {
            const el = document.getElementById('properties');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* About DSK GREEN Section */}
        <AboutSection
          onOpenScheduleModal={() => handleOpenScheduleModal()}
          onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
        />

        {/* Property Showcase (Villas, Apartments, Bungalows, Custom Homes) */}
        <PropertiesSection
          onSelectFloorPlan={(prop) => setSelectedPropertyForFloorPlan(prop)}
          onOpenVirtualTour={(prop) => handleOpenVirtualTour(prop)}
          onBookViewing={(prop) => handleOpenScheduleModal(prop)}
        />

        {/* Interactive Township Master Plan */}
        <MasterPlanSection
          onOpenScheduleModal={() => handleOpenScheduleModal()}
          onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
        />

        {/* 10+ Curated Luxury Amenities */}
        <AmenitiesSection onOpenScheduleModal={() => handleOpenScheduleModal()} />

        {/* Why Discerning Homebuyers Choose DSK GREEN */}
        <WhyChooseSection />

        {/* Strategic Datala, Chandrapur Location & Google Map Proximity */}
        <LocationSection />

        {/* Live Statistics & Trust Counters */}
        <StatisticsSection />

        {/* Luxury Home Loan EMI & Maharashtra Stamp Duty Estimator */}
        <MortgageCalculator onOpenScheduleModal={() => handleOpenScheduleModal()} />

        {/* Visual Odyssey / Gallery */}
        <GallerySection />

        {/* 4.1 Rating & Resident Testimonials */}
        <TestimonialsSection />

        {/* VIP Site Visit Booking Suite & Direct Hotline */}
        <ContactSection selectedProperty={selectedPropertyForBooking} />
      </main>

      {/* Luxury Dark Footer */}
      <Footer />

      {/* Modals */}
      <FloorPlanModal
        property={selectedPropertyForFloorPlan}
        onClose={() => setSelectedPropertyForFloorPlan(null)}
        onScheduleVisit={(prop) => handleOpenScheduleModal(prop)}
      />

      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        property={virtualTourProperty}
        onClose={() => setIsVirtualTourOpen(false)}
        onBookSiteVisit={() => {
          setIsVirtualTourOpen(false);
          handleOpenScheduleModal();
        }}
      />

      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />

      {/* Persistent Floating Quick Action Bar (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2.5">
        {/* WhatsApp VIP Float Button */}
        <a
          href="https://wa.me/919422336633?text=Hello%20DSK%20GREEN%20Chandrapur%2C%20I%20am%20interested%20in%20visiting%20the%20luxury%20township."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:scale-105 hover:shadow-[0_10px_30px_rgba(37,211,102,0.6)] transition-all"
          aria-label="WhatsApp VIP Concierge"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline text-xs font-bold font-sans-luxury">
            WhatsApp VIP (+91 94223 36633)
          </span>
        </a>

        {/* Schedule Tour Float Pill */}
        <button
          onClick={() => handleOpenScheduleModal()}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#F9F1D8] via-[#D4AF37] to-[#AA7C11] text-[#061611] font-bold text-xs uppercase tracking-wider shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:scale-105 transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Site Visit</span>
        </button>
      </div>
    </div>
  );
}
