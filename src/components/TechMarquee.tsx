"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { galleryImages } from "./DataGallery";

function titleCase(s: string) {
  return s
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const whatsappImages = galleryImages.map((g) => ({
  title: titleCase(g.src.split("/").pop() || "Image"),
  category: g.category,
  src: g.src,
}));

export default function TechMarquee() {
  useEffect(() => {
    gsap.to(".marque", {
      xPercent: -600,
      repeat: -1,
      duration: 25,
      ease: "linear",
    });

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
    <div id="tech" className="overflow-hidden w-full bg-gradient-to-r from-slate-50 via-white to-slate-50 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Property Showcase</h2>
        <p className="text-gray-600 text-lg">Discover our exclusive collection of premium properties</p>
      </div>
      
      <div className="flex marquee-track cursor-pointer">
        {/* Duplicate list for seamless loop */}
        {[...whatsappImages, ...whatsappImages].map((image, index) => (
            <div 
              key={index} 
              className="marque flex-shrink-0 px-8 group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={image.src}
                  alt={image.title}
                  className="h-[500px] w-[600px] object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  style={{
                    aspectRatio: "4/3",
                    objectPosition: "center"
                  }}
                />
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