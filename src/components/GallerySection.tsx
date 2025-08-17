"use client";

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Eye, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Import all WhatsApp images
import whatsappImage48 from "../assets/WhatsApp Image 2025-08-13 at 10.12.48.jpeg";
import whatsappImage50 from "../assets/WhatsApp Image 2025-08-13 at 10.12.50.jpeg";
import whatsappImage501 from "../assets/WhatsApp Image 2025-08-13 at 10.12.50 (1).jpeg";
import whatsappImage51 from "../assets/WhatsApp Image 2025-08-13 at 10.12.51.jpeg";
import whatsappImage511 from "../assets/WhatsApp Image 2025-08-13 at 10.12.51 (1).jpeg";
import whatsappImage512 from "../assets/WhatsApp Image 2025-08-13 at 10.12.51 (2).jpeg";
import whatsappImage52 from "../assets/WhatsApp Image 2025-08-13 at 10.12.52.jpeg";
import whatsappImage521 from "../assets/WhatsApp Image 2025-08-13 at 10.12.52 (1).jpeg";
import whatsappImage522 from "../assets/WhatsApp Image 2025-08-13 at 10.12.52 (2).jpeg";
import whatsappImage53 from "../assets/WhatsApp Image 2025-08-13 at 10.12.53.jpeg";
import whatsappImage531 from "../assets/WhatsApp Image 2025-08-13 at 10.12.53 (1).jpeg";
import whatsappImage532 from "../assets/WhatsApp Image 2025-08-13 at 10.12.53 (2).jpeg";
import whatsappImage54 from "../assets/WhatsApp Image 2025-08-13 at 10.12.54.jpeg";
import whatsappImage541 from "../assets/WhatsApp Image 2025-08-13 at 10.12.54 (1).jpeg";
import whatsappImage55 from "../assets/WhatsApp Image 2025-08-13 at 10.12.55.jpeg";
import whatsappImage551 from "../assets/WhatsApp Image 2025-08-13 at 10.12.55 (1).jpeg";
import whatsappImage552 from "../assets/WhatsApp Image 2025-08-13 at 10.12.55 (2).jpeg";
import whatsappImage56 from "../assets/WhatsApp Image 2025-08-13 at 10.12.56.jpeg";

const galleryImages = [
  {
    id: 1,
    src: whatsappImage48,
    alt: "Luxury Property Showcase 1",
    title: "Building Exterior",
    category: "Exterior",
    description: "Modern architectural design with premium finishes"
  },
  {
    id: 2,
    src: whatsappImage50,
    alt: "Luxury Property Showcase 2",
    title: "Living Space",
    category: "Interior",
    description: "Spacious living area with contemporary design"
  },
  {
    id: 3,
    src: whatsappImage501,
    alt: "Luxury Property Showcase 3",
    title: "Kitchen Design",
    category: "Kitchen",
    description: "Modern kitchen with premium appliances"
  },
  {
    id: 4,
    src: whatsappImage51,
    alt: "Luxury Property Showcase 4",
    title: "Master Bedroom",
    category: "Bedroom",
    description: "Luxurious master suite with city views"
  },
  {
    id: 5,
    src: whatsappImage511,
    alt: "Luxury Property Showcase 5",
    title: "Balcony View",
    category: "Outdoor",
    description: "Private balcony with panoramic cityscape"
  },
  {
    id: 6,
    src: whatsappImage512,
    alt: "Luxury Property Showcase 6",
    title: "Building Amenities",
    category: "Amenities",
    description: "World-class facilities and recreational areas"
  },
  {
    id: 7,
    src: whatsappImage52,
    alt: "Luxury Property Showcase 7",
    title: "Garden Area",
    category: "Landscaping",
    description: "Beautifully landscaped outdoor spaces"
  },
  {
    id: 8,
    src: whatsappImage521,
    alt: "Luxury Property Showcase 8",
    title: "Dining Area",
    category: "Interior",
    description: "Elegant dining space for entertaining"
  },
  {
    id: 9,
    src: whatsappImage522,
    alt: "Luxury Property Showcase 9",
    title: "Swimming Pool",
    category: "Amenities",
    description: "Infinity pool with city skyline views"
  },
  {
    id: 10,
    src: whatsappImage53,
    alt: "Luxury Property Showcase 10",
    title: "Lobby Design",
    category: "Common Areas",
    description: "Grand lobby with luxury finishes"
  },
  {
    id: 11,
    src: whatsappImage531,
    alt: "Luxury Property Showcase 11",
    title: "Gym Facility",
    category: "Amenities",
    description: "State-of-the-art fitness center"
  },
  {
    id: 12,
    src: whatsappImage532,
    alt: "Luxury Property Showcase 12",
    title: "Conference Room",
    category: "Business",
    description: "Professional meeting and conference facilities"
  },
  {
    id: 13,
    src: whatsappImage54,
    alt: "Luxury Property Showcase 13",
    title: "Spa Area",
    category: "Wellness",
    description: "Relaxing spa and wellness facilities"
  },
  {
    id: 14,
    src: whatsappImage541,
    alt: "Luxury Property Showcase 14",
    title: "Rooftop Terrace",
    category: "Outdoor",
    description: "Exclusive rooftop entertainment area"
  },
  {
    id: 15,
    src: whatsappImage55,
    alt: "Luxury Property Showcase 15",
    title: "Wine Cellar",
    category: "Luxury",
    description: "Private wine storage and tasting room"
  },
  {
    id: 16,
    src: whatsappImage551,
    alt: "Luxury Property Showcase 16",
    title: "Library",
    category: "Common Areas",
    description: "Quiet reading and study spaces"
  },
  {
    id: 17,
    src: whatsappImage552,
    alt: "Luxury Property Showcase 17",
    title: "Kids Play Area",
    category: "Family",
    description: "Safe and fun children's play spaces"
  },
  {
    id: 18,
    src: whatsappImage56,
    alt: "Luxury Property Showcase 18",
    title: "Building Overview",
    category: "Exterior",
    description: "Complete building exterior and surroundings"
  }
];

const categories = ["All", "Exterior", "Interior", "Kitchen", "Bedroom", "Outdoor", "Amenities", "Landscaping", "Common Areas", "Business", "Wellness", "Luxury", "Family"];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [showAllImages, setShowAllImages] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Filter images based on category and search
    let filtered = galleryImages;
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(img => img.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(img => 
        img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredImages(filtered);
    setShowAllImages(false); // Reset to show limited images when filtering
  }, [selectedCategory, searchTerm]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Section animation
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Gallery grid animation
    const galleryItems = galleryRef.current?.querySelectorAll('.gallery-item');
    if (galleryItems) {
      gsap.fromTo(galleryItems,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, [filteredImages]);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    const nav = document.getElementById('site-navbar');
    if (nav) nav.style.display = 'none';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    const nav = document.getElementById('site-navbar');
    if (nav) nav.style.display = '';
  };

  // Add keyboard support for closing lightbox
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        closeLightbox();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset'; // Restore scrolling
    };
  }, [selectedImage]);

  // Removed download functionality per request

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
            Property Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our exclusive collection of premium properties through our comprehensive gallery. 
            From stunning exteriors to luxurious interiors, discover the perfect blend of design and comfort.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search properties, features, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-blue-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Wider Layout */}
        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredImages.slice(0, showAllImages ? filteredImages.length : 8).map((image) => (
            <div
              key={image.id}
              className="gallery-item group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 space-y-2">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    <p className="text-white/90 text-sm">{image.description}</p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => openLightbox(image)}
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-200"
                    title="View Full Size"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{image.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                  <button
                    onClick={() => openLightbox(image)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {filteredImages.length > 8 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllImages(!showAllImages)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {showAllImages ? 'Show Less' : 'View More'}
            </button>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Showing {showAllImages ? filteredImages.length : Math.min(8, filteredImages.length)} of {filteredImages.length} images
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 z-10"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Image Container */}
            <div className="flex items-center justify-center h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                style={{ maxWidth: '100%', maxHeight: '90vh' }}
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8 rounded-b-lg">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-white text-3xl font-bold mb-3">{selectedImage.title}</h3>
                <p className="text-white/90 text-xl mb-4 leading-relaxed">{selectedImage.description}</p>
                <div className="flex items-center gap-6">
                  <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                    {selectedImage.category}
                  </span>
                  {/* Download removed */}
                </div>
              </div>
            </div>

            {/* Navigation Hint */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white/60 text-sm">
              Click outside or press ESC to close
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
