"use client";

import { useEffect } from "react";
import gsap from "gsap";

// Import WhatsApp images directly from assets
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

const whatsappImages = [
  {
    src: whatsappImage48,
    alt: "Property Showcase 1",
    title: "Luxury Living",
    category: "Residential"
  },
  {
    src: whatsappImage50,
    alt: "Property Showcase 2",
    title: "Modern Design",
    category: "Contemporary"
  },
  {
    src: whatsappImage501,
    alt: "Property Showcase 3",
    title: "Premium Quality",
    category: "Luxury"
  },
  {
    src: whatsappImage51,
    alt: "Property Showcase 4",
    title: "Exclusive Views",
    category: "Penthouse"
  },
  {
    src: whatsappImage511,
    alt: "Property Showcase 5",
    title: "Urban Living",
    category: "City Center"
  },
  {
    src: whatsappImage512,
    alt: "Property Showcase 6",
    title: "Architectural Excellence",
    category: "Design"
  },
  {
    src: whatsappImage52,
    alt: "Property Showcase 7",
    title: "Garden Views",
    category: "Nature"
  },
  {
    src: whatsappImage521,
    alt: "Property Showcase 8",
    title: "Interior Elegance",
    category: "Interior"
  },
  {
    src: whatsappImage522,
    alt: "Property Showcase 9",
    title: "Outdoor Spaces",
    category: "Amenities"
  },
  {
    src: whatsappImage53,
    alt: "Property Showcase 10",
    title: "Building Exterior",
    category: "Architecture"
  },
  {
    src: whatsappImage531,
    alt: "Property Showcase 11",
    title: "Landscape Design",
    category: "Landscaping"
  },
  {
    src: whatsappImage532,
    alt: "Property Showcase 12",
    title: "Modern Amenities",
    category: "Facilities"
  },
  {
    src: whatsappImage54,
    alt: "Property Showcase 13",
    title: "Kitchen Design",
    category: "Kitchen"
  },
  {
    src: whatsappImage541,
    alt: "Property Showcase 14",
    title: "Balcony Views",
    category: "Outdoor"
  },
  {
    src: whatsappImage55,
    alt: "Property Showcase 15",
    title: "Living Spaces",
    category: "Living"
  },
  {
    src: whatsappImage551,
    alt: "Property Showcase 16",
    title: "Bedroom Design",
    category: "Bedroom"
  },
  {
    src: whatsappImage552,
    alt: "Property Showcase 17",
    title: "Master Suite",
    category: "Master"
  },
  {
    src: whatsappImage56,
    alt: "Property Showcase 18",
    title: "Building Overview",
    category: "Overview"
  }
];

export default function TechMarquee() {
  useEffect(() => {
    // Continuous infinite marquee effect with smooth animation
    gsap.to(".marque", {
      xPercent: -600, // Move further distance for faster perceived movement
      repeat: -1,
      duration: 25, // Same duration but faster movement
      ease: "linear",
    });

    // Add hover pause effect
    const marqueeTrack = document.querySelector(".marquee-track");
    if (marqueeTrack) {
      marqueeTrack.addEventListener("mouseenter", () => {
        gsap.to(".marque", { timeScale: 0 });
      });
      
      marqueeTrack.addEventListener("mouseleave", () => {
        gsap.to(".marque", { timeScale: 1 });
      });
    }
  }, []);

  return (
    <div className="overflow-hidden w-full bg-gradient-to-r from-slate-50 via-white to-slate-50 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Property Showcase</h2>
        <p className="text-gray-600 text-lg">Discover our exclusive collection of premium properties</p>
      </div>
      
      <div className="flex marquee-track cursor-pointer">
        {/* Duplicate list for seamless loop */}
        {[...whatsappImages, ...whatsappImages].map((image, index) => (
          <div 
            key={index} 
            className="marque flex flex-col items-center justify-center flex-shrink-0 px-8 group"
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="h-[500px] w-[600px] object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                style={{
                  aspectRatio: "4/3",
                  objectPosition: "center"
                }}
              />
              
              {/* Overlay with category */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
              
              {/* Title on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold text-center px-4">
                  {image.title}
                </h3>
              </div>
            </div>
            
            {/* Image info below */}
            <div className="mt-3 text-center">
              <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {image.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                {image.category}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Decorative elements */}
      <div className="flex justify-center mt-8 space-x-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
        <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-200"></div>
      </div>
    </div>
  );
}