import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, RotateCcw, Volume2, VolumeX, Maximize2, Compass, Sparkles, MapPin, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { VIRTUAL_TOUR_SCENES } from '../data/mockData';
import { Property } from '../types';

interface VirtualTourModalProps {
  isOpen: boolean;
  property?: Property | null;
  onClose: () => void;
  onBookSiteVisit: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  property,
  onClose,
  onBookSiteVisit,
}) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPanning, setIsPanning] = useState(false);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isAudioMuted, setIsAudioMuted] = useState(true);

  if (!isOpen) return null;

  const currentScene = VIRTUAL_TOUR_SCENES[activeSceneIndex];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsPanning(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPanning) return;
    setPanOffset({
      x: Math.max(-120, Math.min(120, e.clientX - dragStart.x)),
      y: Math.max(-40, Math.min(40, e.clientY - dragStart.y)),
    });
  };

  const handleMouseUp = () => setIsPanning(false);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-6xl h-[90vh] rounded-2xl bg-[#061611] border border-[#D4AF37]/50 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col text-[#F4F1EA]"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 bg-[#081813]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Play className="w-4 h-4 fill-[#D4AF37]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
                    Interactive 360° Walkthrough
                  </span>
                  <span className="text-[11px] text-[#A3B8B0]">
                    {property ? property.title : 'DSK Green Township'}
                  </span>
                </div>
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#F4F1EA]">
                  {currentScene.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAudioMuted(!isAudioMuted)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#D4AF37] transition-colors border border-white/10 flex items-center gap-1.5 text-xs"
                title="Toggle Ambient Audio"
              >
                {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span className="hidden sm:inline">{isAudioMuted ? 'Ambient Muted' : 'Serenity On'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#A3B8B0] hover:text-white transition-colors"
                aria-label="Close walkthrough"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 360 Viewing Canvas Area */}
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`relative flex-1 overflow-hidden cursor-${
              isPanning ? 'grabbing' : 'grab'
            } select-none bg-black`}
          >
            {/* 360 Panoramic Simulated Layer */}
            <motion.div
              key={currentScene.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
              style={{
                backgroundImage: `url(${currentScene.image})`,
                transform: `scale(1.15) translate(${panOffset.x * 0.4}px, ${panOffset.y * 0.4}px)`,
              }}
            />

            {/* Ambient vignette & gold tone */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(6,22,17,0.7)_100%)] pointer-events-none" />

            {/* Instruction Badge */}
            <div className="absolute top-4 left-4 pointer-events-none z-10 px-3.5 py-1.5 rounded-full bg-[#061611]/85 border border-white/15 backdrop-blur-md flex items-center gap-2 text-xs text-[#E5DCC5]">
              <Compass className="w-4 h-4 text-[#D4AF37] animate-spin-slow" />
              <span>Click & Drag to explore 360° panorama</span>
            </div>

            {/* Interactive Hotspot Marker 1 */}
            <div
              className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer group"
              style={{ transform: `translate(${panOffset.x * 0.3}px, ${panOffset.y * 0.3}px)` }}
            >
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/90 text-[#061611] flex items-center justify-center shadow-[0_0_20px_#D4AF37] animate-pulse">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 rounded-xl bg-[#061611]/95 border border-[#D4AF37]/40 text-xs text-[#F4F1EA] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                <div className="font-bold text-[#D4AF37] text-[11px] uppercase">Architectural Detail</div>
                <div className="text-[10px] text-[#CAD6D2] mt-0.5">High acoustic thermal insulation with European fittings.</div>
              </div>
            </div>

            {/* Interactive Hotspot Marker 2 */}
            <div
              className="absolute top-2/3 right-1/4 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer group"
              style={{ transform: `translate(${panOffset.x * 0.3}px, ${panOffset.y * 0.3}px)` }}
            >
              <div className="w-8 h-8 rounded-full bg-[#102D24] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <Eye className="w-4 h-4" />
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 p-2.5 rounded-xl bg-[#061611]/95 border border-[#D4AF37]/40 text-xs text-[#F4F1EA] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                <div className="font-bold text-[#D4AF37] text-[11px] uppercase">Italian Botticino Marble</div>
                <div className="text-[10px] text-[#CAD6D2] mt-0.5">Continuous seamless mirror finish living floors.</div>
              </div>
            </div>

            {/* Reset View Button */}
            <button
              onClick={() => setPanOffset({ x: 0, y: 0 })}
              className="absolute bottom-4 right-4 z-10 p-2.5 rounded-xl bg-[#061611]/85 border border-white/20 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#061611] transition-all backdrop-blur-md"
              title="Reset View Orientation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Scene Switcher Carousel */}
          <div className="p-4 bg-[#081813] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
            {/* Scene Thumbnails */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              {VIRTUAL_TOUR_SCENES.map((scene, idx) => (
                <button
                  key={scene.id}
                  onClick={() => {
                    setActiveSceneIndex(idx);
                    setPanOffset({ x: 0, y: 0 });
                  }}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border shrink-0 ${
                    activeSceneIndex === idx
                      ? 'bg-[#D4AF37] text-[#061611] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'bg-[#0B2019] text-[#A3B8B0] border-white/10 hover:border-[#D4AF37]/50 hover:text-[#F4F1EA]'
                  }`}
                >
                  <img
                    src={scene.image}
                    alt={scene.name}
                    className="w-7 h-7 rounded-lg object-cover border border-white/10"
                  />
                  <span>{scene.name}</span>
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                onClose();
                onBookSiteVisit();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#DFBF74] to-[#C49836] text-xs font-bold uppercase tracking-wider text-[#061611] shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <span>Schedule Real-Life Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
