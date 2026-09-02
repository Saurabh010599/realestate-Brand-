import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only enable on pointer-capable non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (
          target?.tagName === 'BUTTON' ||
          target?.tagName === 'A' ||
          target?.closest('button') ||
          target?.closest('a') ||
          target?.getAttribute('role') === 'button'
        ) {
          setIsHovered(true);
        } else {
          setIsHovered(false);
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', handleMouseOver);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseover', handleMouseOver);
      };
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient Large Spotlight */}
      <div
        className="fixed pointer-events-none z-30 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, rgba(11, 32, 25, 0) 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Tiny Gold Precise Ring Pointer */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full border border-[#D4AF37]/60"
        animate={{
          x: mousePosition.x - (isHovered ? 20 : 10),
          y: mousePosition.y - (isHovered ? 20 : 10),
          width: isHovered ? 40 : 20,
          height: isHovered ? 40 : 20,
          backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
          borderColor: isHovered ? 'rgba(212, 175, 55, 0.9)' : 'rgba(212, 175, 55, 0.5)',
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.5 }}
      />
    </>
  );
};
