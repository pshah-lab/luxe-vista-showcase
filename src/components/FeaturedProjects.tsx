import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Star, Crown } from 'lucide-react';
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
      id: "luxury-bungalow-1",
      title: "Royal Heights Bungalow",
      location: "Premium Golf Course View",
      price: "₹8.5 Cr - ₹12.2 Cr",
      images: [property1, property2, property3],
      bedrooms: 5,
      bathrooms: 6,
      area: "4,500 sq ft",
      possession: "Dec 2024",
      featured: true,
      status: "Ready to Move" as const,
      rating: 4.9
    },
    {
      id: "luxury-bungalow-2",
      title: "Emerald Valley Villa",
      location: "Exclusive Gated Community",
      price: "₹6.8 Cr - ₹9.5 Cr",
      images: [property2, property3, property1],
      bedrooms: 5,
      bathrooms: 5,
      area: "3,800 sq ft",
      possession: "Mar 2025",
      featured: true,
      status: "Hot Property" as const,
      rating: 4.8
    },
    {
      id: "luxury-bungalow-3",
      title: "Golden Palms Estate",
      location: "Waterfront Premium Location",
      price: "₹10.2 Cr - ₹15.8 Cr",
      images: [property3, property1, property2],
      bedrooms: 5,
      bathrooms: 7,
      area: "5,200 sq ft",
      possession: "Aug 2025",
      featured: true,
      status: "Under Construction" as const,
      rating: 4.9
    }
  ];

  return (
    <section ref={sectionRef} className="luxury-section bg-gradient-to-br from-luxury-cream/20 via-background to-luxury-cream/10 py-20">
      <div className="luxury-container">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-luxury-gold/10 text-luxury-gold px-4 py-2 rounded-full mb-4 border border-luxury-gold/20">
            <Crown className="w-5 h-5" />
            <span className="text-sm font-medium">Premium Selection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            Featured <span className="text-luxury-gold">Luxury Bungalows</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium 5 BHK bungalows that define luxury living 
            and offer exceptional investment opportunities in the most prestigious locations.
          </p>
        </div>

        {/* Property Cards - Adjusted Grid for Larger Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mb-16">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="btn-luxury-outline text-lg px-10 py-5 group"
          >
            View All Luxury Bungalows
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;