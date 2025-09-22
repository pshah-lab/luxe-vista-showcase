"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search } from "lucide-react";
import Lightbox from "./Lightbox";
import { galleryImages, categories } from "./DataGallery.ts"; // 👈 import your manual data

gsap.registerPlugin(ScrollTrigger);

type GallerySectionProps = {
  fullPage?: boolean;
};

const GallerySection = ({ fullPage = false }: GallerySectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [showAllImages, setShowAllImages] = useState(fullPage);

  // Lightbox state
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let filtered = galleryImages;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((img) => img.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (img) =>
          img.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredImages(filtered);
    if (!fullPage) {
      setShowAllImages(false);
    } else {
      setShowAllImages(true);
    }
  }, [selectedCategory, searchTerm, fullPage]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
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
          toggleActions: "play none none reverse",
        },
      }
    );

    const galleryItems = galleryRef.current?.querySelectorAll(".gallery-item");
    if (galleryItems) {
      gsap.fromTo(
        galleryItems,
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
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [filteredImages]);

  // Lightbox handlers
  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const prevImage = () => setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const nextImage = () => setSelectedIndex((i) => (i !== null && i < filteredImages.length - 1 ? i + 1 : i));

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50"
    >
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
            Property Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our exclusive collection of premium properties through our
            comprehensive gallery. From stunning exteriors to luxurious
            interiors, discover the perfect blend of design and comfort.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="mb-12 space-y-6">
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

        {/* Gallery Grid */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredImages
            .slice(0, showAllImages ? filteredImages.length : 8)
            .map((image, index) => (
              <div
                key={index}
                className="gallery-item group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                    loading="lazy"
                    decoding="async"
                    onClick={() => openLightbox(index)}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
                    {/* Title & description */}
                    <div className="absolute bottom-4 left-4 right-4 space-y-2">
                      <h3 className="text-white font-semibold text-lg">
                        {image.category}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {image.category} View
                      </p>
                    </div>

                    {/* Eye/Search icon */}
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={() => openLightbox(index)}
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-200"
                        title="View Full Size"
                      >
                        <Search className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* View More Button */}
        {!fullPage && filteredImages.length > 8 && (
          <div className="text-center mt-12">
            <button
              onClick={() => window.open("/gallery", "_blank")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Open Full Gallery
            </button>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Showing{" "}
            {showAllImages
              ? filteredImages.length
              : Math.min(8, filteredImages.length)}{" "}
            of {filteredImages.length} images
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <Lightbox
          images={filteredImages}
          selectedIndex={selectedIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
};

export default GallerySection;