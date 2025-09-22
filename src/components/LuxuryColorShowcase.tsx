import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Building, Award } from 'lucide-react';
const ablogo = '/assets/Ablogo.png';

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

  const colors = [
    {
      name: "Luxury Gold",
      class: "bg-luxury-gold",
      textClass: "text-luxury-charcoal",
      description: "Primary luxury accent for highlights and CTAs",
      icon: ablogo
    },
    {
      name: "Luxury Charcoal",
      class: "bg-luxury-charcoal",
      textClass: "text-white",
      description: "Deep text color for maximum readability",
      icon: ablogo
    },
    {
      name: "Luxury Burgundy",
      class: "bg-luxury-burgundy",
      textClass: "text-white",
      description: "Rich secondary accent for elegance and depth",
      icon: Award
    },
    {
      name: "Luxury Cream",
      class: "bg-luxury-cream",
      textClass: "text-luxury-charcoal",
      description: "Soft background for subtle sophistication",
      icon: Building
    },
    {
      name: "Luxury Amber",
      class: "bg-luxury-amber",
      textClass: "text-luxury-charcoal",
      description: "Warm accent for inviting elements and warmth",
      icon: Star
    }
  ];

  return (
    <section ref={sectionRef} className="luxury-section bg-gradient-to-br from-white via-luxury-cream/30 to-white py-20">
      <div className="luxury-container">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-luxury-gold/10 text-luxury-gold px-4 py-2 rounded-full mb-4 border border-luxury-gold/20">
            <img src={ablogo} alt="Ablogo" className="w-5 h-5" />
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
          {colors.map((color, index) => (
            <div key={index} className="card-luxury group">
              <div className={`${color.class} ${color.textClass} rounded-xl p-6 mb-4 flex items-center justify-center`}>
                {color.icon === ablogo ? (
                  <img src={color.icon} alt={color.name} className="w-12 h-12" />
                ) : (
                  <color.icon className="w-12 h-12" />
                )}
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
                <img src={ablogo} alt="Crown" className="w-8 h-8 text-luxury-gold mx-auto" />
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
