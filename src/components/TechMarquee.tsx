"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { galleryImages } from "./DataGallery";

function titleCase(s: string) {
  return s
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// Precompute outside component for better performance
const whatsappImages = galleryImages.map((g) => ({
  title: titleCase(g.src.split("/").pop() || "Image"),
  category: g.category,
  src: g.src,
}));

export default function TechMarquee() {
  const marqueeTrackRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    // Use GSAP context for cleanup safety
    const ctx = gsap.context(() => {
      tlRef.current = gsap.to(".marque", {
        xPercent: -600,
        repeat: -1,
        duration: 25,
        ease: "none", // slightly faster, no CPU easing calc
        force3D: true, // ensures GPU acceleration
      });
    });

    const marqueeTrack = marqueeTrackRef.current;
    if (marqueeTrack && tlRef.current) {
      const pause = () => tlRef.current?.pause();
      const play = () => tlRef.current?.play();

      marqueeTrack.addEventListener("mouseenter", pause);
      marqueeTrack.addEventListener("mouseleave", play);

      return () => {
        marqueeTrack.removeEventListener("mouseenter", pause);
        marqueeTrack.removeEventListener("mouseleave", play);
        ctx.revert(); // kills gsap context safely
      };
    }

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="tech"
      className="overflow-hidden w-full bg-gradient-to-r from-slate-50 via-white to-slate-50 py-12"
    >
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Our Property Showcase
        </h2>
        <p className="text-gray-600 text-lg">
          Discover our exclusive collection of premium properties
        </p>
      </header>

      {/* GPU-optimized marquee */}
      <div
        ref={marqueeTrackRef}
        className="flex marquee-track cursor-pointer will-change-transform"
      >
        {[...whatsappImages, ...whatsappImages].map((image, index) => (
          <div key={index} className="marque flex-shrink-0 px-8 group">
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
              <img
                src={image.src}
                alt={image.title}
                className="h-[500px] w-[600px] object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                style={{
                  aspectRatio: "4/3",
                  objectPosition: "center",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)", // ensures GPU compositing
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Decorative indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {[500, 400, 300].map((hue, i) => (
          <div
            key={i}
            className={`w-2 h-2 bg-blue-${hue} rounded-full animate-pulse`}
            style={{ animationDelay: `${i * 100}ms` }}
          ></div>
        ))}
      </div>
    </section>
  );
}