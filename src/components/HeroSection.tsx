import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import heroImage from '@/assets/WhatsApp Image 2025-08-13 at 10.12.56.jpeg';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        gsap.set(heroRef.current, {
          transform: `translateY(${scrollY * 0.5}px)`
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        ref={heroRef}
        className="absolute inset-0 -z-10"
      >
        <img
          src={heroImage}
          alt="Luxury 5 BHK Bungalow"
          className="w-full h-full object-cover scale-110"
        />
        {/* Enhanced overlay with luxury gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-burgundy/40 via-luxury-charcoal/30 to-luxury-gold/20" />
      </div>

      {/* Content Container - Empty for now */}
      <div className="luxury-container relative z-10">
        {/* Content removed - keeping structure for future use */}
      </div>
    </section>
  );
};

export default HeroSection;