import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import PropertyCard from './PropertyCard';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !cardsRef.current) return;

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

    // Cards stagger animation
    const cards = cardsRef.current.children;
    gsap.fromTo(cards,
      { opacity: 0, y: 80, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const featuredProperties = [
    {
      id: "azure-heights",
      title: "Azure Heights",
      location: "Downtown Metropolitan",
      price: "₹2.5 Cr - ₹4.2 Cr",
      images: [property1, property2, property3],
      bedrooms: 3,
      bathrooms: 3,
      area: "2,100 sq ft",
      possession: "Dec 2024",
      featured: true,
      status: "Ready to Move" as const,
      rating: 4.8
    },
    {
      id: "golden-residency",
      title: "Golden Residency",
      location: "Premium South City",
      price: "₹1.8 Cr - ₹3.1 Cr",
      images: [property2, property3, property1],
      bedrooms: 2,
      bathrooms: 2,
      area: "1,650 sq ft",
      possession: "Mar 2025",
      featured: true,
      status: "Hot Property" as const,
      rating: 4.9
    },
    {
      id: "emerald-towers",
      title: "Emerald Towers",
      location: "Green Valley Heights",
      price: "₹3.2 Cr - ₹5.8 Cr",
      images: [property3, property1, property2],
      bedrooms: 4,
      bathrooms: 4,
      area: "2,850 sq ft",
      possession: "Aug 2025",
      featured: true,
      status: "Under Construction" as const,
      rating: 4.7
    }
  ];

  return (
    <section ref={sectionRef} className="luxury-section bg-background">
      <div className="luxury-container">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium properties that define luxury living 
            and offer exceptional investment opportunities.
          </p>
        </div>

        {/* Property Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-4 hover:bg-primary hover:text-primary-foreground shadow-elegant hover:shadow-glow group"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;