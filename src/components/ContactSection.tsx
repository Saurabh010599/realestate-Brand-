import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Sparkles, Phone, Mail, MapPin, Calendar, Clock, Car, MessageSquare, CheckCircle2, ShieldCheck, ArrowRight, Download, Check } from 'lucide-react';
import { Property } from '../types';

interface ContactSectionProps {
  selectedProperty?: Property | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedProperty }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '11:00 AM - 01:00 PM (Morning Slot)',
    propertyType: selectedProperty?.category || 'Villas',
    cabPickup: false,
    pickupLocation: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRefId, setBookingRefId] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `DSK-VIP-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRefId(generatedId);
      setBookingConfirmed(true);

      // Trigger Luxury Gold Confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F3E5AB', '#0B2019', '#F9F1D8'],
      });
    }, 1200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919422336633');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const timeSlots = [
    '10:00 AM - 12:00 PM (Morning Serenity)',
    '12:00 PM - 02:00 PM (Midday Inspection)',
    '03:00 PM - 05:00 PM (Afternoon Tour)',
    '05:00 PM - 07:00 PM (Sunset Fountain Show)',
  ];

  return (
    <section id="contact" className="py-24 relative bg-[#061611] text-[#F4F1EA] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2019] border border-[#D4AF37]/30 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4AF37]">
              VIP Site Visit & Inquiries
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EA]">
            Schedule Your Private Township Tour
          </h2>
          <p className="text-[#A3B8B0] text-sm sm:text-base mt-3 font-sans-luxury">
            Experience Chandrapur’s crown jewel in Datala in person. Our Senior Relationship Executives will guide you through show villas, the landscaped garden park, and the Lord Ganesha temple.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Direct Hotline + VIP Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contacts & Township Office */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-gradient-to-b from-[#0F2A21] to-[#081813] border border-[#D4AF37]/30 p-6 sm:p-8 shadow-2xl space-y-6">
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F4F1EA]">
                Township Experience Center
              </h3>
              <p className="text-xs sm:text-sm text-[#CAD6D2] leading-relaxed font-sans-luxury">
                Open 7 days a week for prospective buyers. Refreshments and chauffeured electric buggy site rides provided.
              </p>

              {/* Direct Phone Call Card */}
              <div className="p-4 rounded-xl bg-[#0B2019] border border-[#D4AF37]/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#A3B8B0]">Direct Sales Hotline</div>
                    <a
                      href="tel:+919422336633"
                      className="text-base sm:text-lg font-mono font-bold text-[#D4AF37] hover:underline"
                    >
                      +91 94223 36633
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 text-[11px] rounded bg-white/10 hover:bg-[#D4AF37] hover:text-[#061611] text-[#CAD6D2] transition-colors"
                >
                  {copiedPhone ? 'Copied ✓' : 'Copy'}
                </button>
              </div>

              {/* WhatsApp VIP Concierge Action */}
              <a
                href="https://wa.me/919422336633?text=Hello%20DSK%20GREEN%20Chandrapur%2C%20I%20would%20like%20to%20schedule%20a%20VIP%20site%20visit%20and%20receive%20the%20property%20pricing%20dossier."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 text-xs sm:text-sm font-semibold text-[#8bf7b2] flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Instant WhatsApp Concierge (+91 94223 36633)</span>
              </a>

              {/* Address & Timings */}
              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-[#CAD6D2]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#F4F1EA]">Township Site Address:</div>
                    <div>DSK GREEN, Datala Road, Datala, Chandrapur, Maharashtra – 442401</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#F4F1EA]">Visiting Hours:</div>
                    <div>Monday to Sunday: 09:00 AM – 07:30 PM (All 7 Days Open)</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#F4F1EA]">Legal Status:</div>
                    <div>Clear Title NA Sanctioned • RERA Compliant • Bank Approved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive VIP Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0B2019] border border-[#D4AF37]/40 p-6 sm:p-8 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!bookingConfirmed ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#F4F1EA]">
                        Book Private Viewing Experience
                      </h3>
                      <span className="text-[10px] uppercase font-bold text-[#D4AF37] px-2 py-0.5 rounded bg-[#D4AF37]/15">
                        Complimentary AC Cab
                      </span>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#A3B8B0] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. Rajesh Deshmukh"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#061611] border border-white/15 focus:border-[#D4AF37] text-xs sm:text-sm text-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#A3B8B0] mb-1.5">
                          Contact Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98220 00000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#061611] border border-white/15 focus:border-[#D4AF37] text-xs sm:text-sm text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Email & Property Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#A3B8B0] mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="rajesh@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#061611] border border-white/15 focus:border-[#D4AF37] text-xs sm:text-sm text-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#A3B8B0] mb-1.5">
                          Property of Interest
                        </label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#061611] border border-white/15 focus:border-[#D4AF37] text-xs sm:text-sm text-white focus:outline-none"
                        >
                          <option value="Villas">The Sovereign Villas (3 & 4 BHK)</option>
                          <option value="Apartments">Grand Boulevard Apartments (2 & 3 BHK)</option>
                          <option value="Bungalows">The Palm Vista Independent Bungalows</option>
                          <option value="Custom Homes">Custom-Built Bespoke Estates</option>
                        </select>
                      </div>
                    </div>

                    {/* Date & Time Slot */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#A3B8B0] mb-1.5">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#061611] border border-white/15 focus:border-[#D4AF37] text-xs sm:text-sm text-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#A3B8B0] mb-1.5">
                          Preferred Time Slot
                        </label>
                        <select
                          value={formData.timeSlot}
                          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#061611] border border-white/15 focus:border-[#D4AF37] text-xs sm:text-sm text-white focus:outline-none"
                        >
                          {timeSlots.map((slot, i) => (
                            <option key={i} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Complimentary AC Cab Pickup Toggle */}
                    <div className="p-3.5 rounded-xl bg-[#061611] border border-white/10 space-y-2.5">
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="flex items-center gap-2 text-xs font-semibold text-[#F4F1EA]">
                          <Car className="w-4 h-4 text-[#D4AF37]" />
                          <span>Request Complimentary Pick & Drop Cab (Chandrapur City)</span>
                        </span>
                        <input
                          type="checkbox"
                          checked={formData.cabPickup}
                          onChange={(e) => setFormData({ ...formData, cabPickup: e.target.checked })}
                          className="w-4 h-4 accent-[#D4AF37] rounded cursor-pointer"
                        />
                      </label>

                      {formData.cabPickup && (
                        <input
                          type="text"
                          placeholder="Enter your pickup location / landmark in Chandrapur"
                          value={formData.pickupLocation}
                          onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-lg bg-[#0B2019] border border-[#D4AF37]/40 text-xs text-white placeholder-[#7A938A] focus:outline-none"
                        />
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F9F1D8] via-[#D4AF37] to-[#AA7C11] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#061611] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all flex items-center justify-center gap-2 mt-2"
                    >
                      {isSubmitting ? (
                        <span>Securing VIP Slot...</span>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Confirm VIP Site Visit Pass</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Confirmed VIP Pass Ticket Card */
                  <motion.div
                    key="confirmed"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-[#102D24] to-[#061611] border-2 border-[#D4AF37] text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#D4AF37] text-[#061611] flex items-center justify-center mx-auto shadow-[0_0_25px_#D4AF37]">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold font-mono">
                        VIP PASS REFERENCE: {bookingRefId}
                      </span>
                      <h3 className="font-cinzel text-2xl font-bold text-[#F4F1EA] mt-1">
                        Site Visit Confirmed, {formData.fullName}!
                      </h3>
                      <p className="text-xs text-[#CAD6D2] mt-1 max-w-md mx-auto font-sans-luxury">
                        Our Senior Executive has reserved your private tour for{' '}
                        <strong className="text-[#D4AF37]">{formData.date}</strong> ({formData.timeSlot}).
                        A confirmation SMS and WhatsApp invitation have been dispatched to{' '}
                        <strong className="text-[#F4F1EA]">{formData.phone}</strong>.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0B2019] border border-white/10 max-w-md mx-auto text-left text-xs space-y-1.5 font-mono">
                      <div className="text-[#D4AF37] font-bold">Property Focus: {formData.propertyType}</div>
                      <div className="text-[#A3B8B0]">Location: Datala Road, Chandrapur</div>
                      {formData.cabPickup && (
                        <div className="text-[#8bf7b2]">
                          ✓ Chauffeur Cab: Dispatched to {formData.pickupLocation || 'Chandrapur Residence'}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-2">
                      <button
                        onClick={() => setBookingConfirmed(false)}
                        className="px-5 py-2 rounded-xl text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10"
                      >
                        Book Another Slot
                      </button>
                      <a
                        href="tel:+919422336633"
                        className="px-6 py-2 rounded-xl bg-[#D4AF37] text-[#061611] font-bold text-xs flex items-center gap-1.5 shadow-lg"
                      >
                        <Phone className="w-3.5 h-3.5" /> Call Manager Now
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
