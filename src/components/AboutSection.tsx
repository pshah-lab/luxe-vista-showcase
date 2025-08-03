import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Building, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Content animation
    gsap.fromTo(contentRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Image animation
    gsap.fromTo(imageRef.current,
      { opacity: 0, x: 60, scale: 0.95 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stats counter animation
    const stats = statsRef.current?.querySelectorAll('.stat-number');
    stats?.forEach((stat) => {
      const finalValue = parseInt(stat.getAttribute('data-value') || '0');
      gsap.fromTo(stat,
        { textContent: 0 },
        {
          textContent: finalValue,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  const stats = [
    { icon: Building, value: 25, label: "Premium Projects", suffix: "+" },
    { icon: Users, value: 2500, label: "Happy Families", suffix: "+" },
    { icon: Award, value: 15, label: "Years Experience", suffix: "" },
    { icon: TrendingUp, value: 98, label: "Customer Satisfaction", suffix: "%" }
  ];

  return (
    <section ref={sectionRef} className="luxury-section bg-muted/30">
      <div className="luxury-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
              Crafting Dreams Into
              <span className="block text-primary">Reality Since 2009</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              With over a decade of excellence in luxury real estate development, 
              we've redefined urban living through innovative architecture, 
              premium amenities, and uncompromising quality.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                <p className="text-muted-foreground">
                  Award-winning architectural designs that blend modern aesthetics with functional excellence
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                <p className="text-muted-foreground">
                  Sustainable construction practices with premium materials and finishes
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                <p className="text-muted-foreground">
                  Strategic locations with excellent connectivity and growth potential
                </p>
              </div>
            </div>

            <Button size="lg" className="shadow-glow hover:shadow-luxury">
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="card-gradient rounded-3xl p-8 shadow-luxury">
              <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center mb-8">
                <Building className="w-24 h-24 text-primary" />
              </div>
              
              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3 mx-auto">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      <span 
                        className="stat-number" 
                        data-value={stat.value}
                      >
                        0
                      </span>
                      {stat.suffix}
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;