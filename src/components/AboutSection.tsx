import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Users, Building, TrendingUp, Star } from "lucide-react";
const ablogo = "/assets/Ablogo.png";
import { Button } from "./ui/button";
const whatsappImage48 = "/assets/bunglowView.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Content animation
    gsap.fromTo(
      contentRef.current,
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
          toggleActions: "play none none reverse",
        },
      }
    );

    // Image animation
    gsap.fromTo(
      imageRef.current,
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
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stats counter animation
    const stats = statsRef.current?.querySelectorAll(".stat-number");
    stats?.forEach((stat) => {
      const finalValue = parseInt(stat.getAttribute("data-value") || "0");
      gsap.fromTo(
        stat,
        { textContent: 0 },
        {
          textContent: finalValue,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const stats = [
    {
      icon: Building,
      value: 25,
      label: "Luxury Bungalows",
      suffix: "+",
      color: "luxury-gold",
    },
    {
      icon: Users,
      value: 2500,
      label: "Happy Families",
      suffix: "+",
      color: "luxury-amber",
    },
    {
      icon: Award,
      value: 15,
      label: "Years Excellence",
      suffix: "",
      color: "luxury-burgundy",
    },
    {
      icon: TrendingUp,
      value: 98,
      label: "Customer Satisfaction",
      suffix: "%",
      color: "luxury-gold",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="luxury-section bg-gradient-to-br from-luxury-cream/20 via-background to-luxury-cream/10"
    >
      <div className="luxury-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <div className="inline-flex items-center gap-2 bg-luxury-gold/10 text-luxury-gold px-4 py-2 rounded-full mb-6 border border-luxury-gold/20">
              <img src={ablogo} alt="Ablogo" className="w-5 h-5" />
              <span className="text-lg font-medium">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
              Pure Nature, Fresh Living
              <span className="block text-luxury-gold">
                Luxury 5 BHK Bungalows.
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Luxury real estate development, we've redefined urban living
              through innovative architecture, premium amenities, and
              uncompromising quality. Our 5 BHK bungalows represent the pinnacle
              of luxury living.
            </p>

            <div className="space-y-4 mb-8">
             
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-luxury-burgundy rounded-full mt-3" />
                <p className="text-muted-foreground">
                  Sustainable construction practices with premium materials and
                  finishes
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-luxury-burgundy rounded-full mt-3" />
                <p className="text-muted-foreground">
                  Strategic locations with excellent connectivity and growth
                  potential
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="card-luxury rounded-3xl p-8">
              <div className="aspect-square bg-luxury-cream rounded-2xl flex items-center justify-center mb-8 overflow-hidden border border-luxury-gold/20">
                <img
                  src={whatsappImage48}
                  alt="Luxury 5 BHK Bungalow Showcase"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Description */}
              <div className="relative mt-4">
                <div className="bg-gradient-to-r from-luxury-cream/50 to-white p-6 rounded-2xl border-l-4 border-luxury-gold shadow-md">
                  <p className="text-lg md:text-xl italic font-serif text-gray-700 leading-relaxed">
                    “Abhinandan Mountreea stands as a haven where nature and
                    luxury unite, with every crafted detail embraced by a lush
                    green cover. Blending elegance with tranquility, it offers
                    thoughtfully designed homes that let you experience the
                    harmony of both worlds — where nature preserves its purity,
                    originality, and freshness. Every corner of the home
                    reflects a renewed perspective, offering a refreshing
                    outlook on living.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
