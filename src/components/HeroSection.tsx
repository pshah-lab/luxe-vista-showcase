import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Play, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import heroImage from '@/assets/hero-property.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Hero entrance animations
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(buttonsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(searchRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.2"
    );

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
          alt="Luxury Real Estate"
          className="w-full h-full object-cover scale-110"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="luxury-container relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight"
          >
            Discover Your
            <span className="block text-primary-glow">Dream Home</span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Experience luxury living in meticulously crafted spaces designed for the discerning few.
          </p>

          {/* Action Buttons */}
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 shadow-glow hover:shadow-luxury group"
            >
              Explore Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground backdrop-blur-sm group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Tour
            </Button>
          </div>

          {/* Property Search */}
          <div 
            ref={searchRef}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4 text-white">Find Your Perfect Property</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    placeholder="Enter location, project name..."
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
                  />
                </div>
                <Button 
                  size="lg"
                  className="px-8 shadow-glow hover:shadow-luxury group"
                >
                  <Search className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;