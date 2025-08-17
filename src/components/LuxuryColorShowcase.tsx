import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Crown, Star, Building, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LuxuryColorShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const colorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !colorsRef.current) return;

    // Title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Colors stagger animation
    const colorItems = colorsRef.current.children;
    gsap.fromTo(colorItems,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: colorsRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const luxuryColors = [
    {
      name: "Luxury Gold",
      class: "bg-luxury-gold",
      textClass: "text-luxury-charcoal",
      description: "Primary luxury accent for highlights and CTAs",
      icon: Crown
    },
    {
      name: "Luxury Burgundy",
      class: "bg-luxury-burgundy",
      textClass: "text-white",
      description: "Rich secondary color for premium elements",
      icon: Star
    },
    {
      name: "Luxury Amber",
      class: "bg-luxury-amber",
      textClass: "text-luxury-charcoal",
      description: "Warm accent for interactive elements",
      icon: Award
    },
    {
      name: "Luxury Cream",
      class: "bg-luxury-cream",
      textClass: "text-luxury-charcoal",
      description: "Soft background for content areas",
      icon: Building
    },
    {
      name: "Luxury Charcoal",
      class: "bg-luxury-charcoal",
      textClass: "text-white",
      description: "Deep text color for maximum readability",
      icon: Crown
    },
    {
      name: "Luxury Bronze",
      class: "bg-luxury-bronze",
      textClass: "text-white",
      description: "Earthy tone for natural elements",
      icon: Star
    },
    {
      name: "Luxury Silver",
      class: "bg-luxury-silver",
      textClass: "text-luxury-charcoal",
      description: "Metallic accent for premium touches",
      icon: Award
    }
  ];

  return (
    <section ref={sectionRef} className="luxury-section bg-gradient-to-br from-luxury-cream/30 via-background to-luxury-cream/20">
      <div className="luxury-container">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-luxury-gold/10 text-luxury-gold px-4 py-2 rounded-full mb-4 border border-luxury-gold/20">
            <Crown className="w-5 h-5" />
            <span className="text-sm font-medium">Design System</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            Luxury <span className="text-luxury-gold">Color Palette</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our carefully curated luxury color scheme reflects the sophistication and elegance 
            of our 5 BHK bungalows, creating a premium visual experience.
          </p>
        </div>

        {/* Color Showcase */}
        <div ref={colorsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {luxuryColors.map((color, index) => (
            <div key={index} className="card-luxury group">
              <div className={`${color.class} ${color.textClass} rounded-xl p-6 mb-4 flex items-center justify-center`}>
                <color.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-luxury-charcoal mb-2">{color.name}</h3>
              <p className="text-luxury-burgundy text-sm leading-relaxed">{color.description}</p>
              
              {/* Color Classes */}
              <div className="mt-4 p-3 bg-luxury-cream/50 rounded-lg">
                <p className="text-xs font-mono text-luxury-charcoal">
                  {color.class}
                </p>
                <p className="text-xs font-mono text-luxury-burgundy mt-1">
                  {color.textClass}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Usage Examples */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-luxury-charcoal mb-6">Color Usage Examples</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-luxury-gold/20 rounded-xl p-4 mb-3 border border-luxury-gold/30">
                <Crown className="w-8 h-8 text-luxury-gold mx-auto" />
              </div>
              <p className="text-sm text-luxury-charcoal">Primary Buttons & CTAs</p>
            </div>
            <div className="text-center">
              <div className="bg-luxury-burgundy/20 rounded-xl p-4 mb-3 border border-luxury-burgundy/30">
                <Star className="w-8 h-8 text-luxury-burgundy mx-auto" />
              </div>
              <p className="text-sm text-luxury-charcoal">Secondary Elements</p>
            </div>
            <div className="text-center">
              <div className="bg-luxury-amber/20 rounded-xl p-4 mb-3 border border-luxury-amber/30">
                <Award className="w-8 h-8 text-luxury-amber mx-auto" />
              </div>
              <p className="text-sm text-luxury-charcoal">Accent Highlights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryColorShowcase;
