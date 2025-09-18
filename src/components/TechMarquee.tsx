"use client";

import { useEffect } from "react";
import gsap from "gsap";

// Build image list from assets (exclude Ablogo), prefer AVIF/WebP
const modules = import.meta.glob("../assets/*.{avif,webp,jpg,jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

type MarqueeImage = {
  title: string;
  category: string;
  avif?: string;
  webp?: string;
  jpg?: string;
  png?: string;
  fallback: string;
};

function titleCase(s: string) {
  return s
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function buildImages(): MarqueeImage[] {
  const map = new Map<string, MarqueeImage>();
  for (const p in modules) {
    const file = p.split("/").pop() || "";
    if (/ablogo/i.test(file)) continue;
    const base = file.replace(/\.(avif|webp|jpe?g|png)$/i, "");
    const ext = (file.split(".").pop() || "").toLowerCase();
    const existing = map.get(base) || {
      title: titleCase(base),
      category: titleCase(base.split("-")[0] || "Gallery"),
      fallback: modules[p],
    };
    if (ext === "avif") existing.avif = modules[p];
    else if (ext === "webp") existing.webp = modules[p];
    else if (ext === "jpg" || ext === "jpeg") existing.jpg = modules[p];
    else if (ext === "png") existing.png = modules[p];
    map.set(base, existing);
  }
  return Array.from(map.values());
}

const whatsappImages = buildImages();

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
            className="marque flex flex-col items-center justify-center flex-shrink-0 px-8 group"
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <picture>
                {image.avif && <source srcSet={image.avif} type="image/avif" />}
                {image.webp && <source srcSet={image.webp} type="image/webp" />}
                <img 
                  src={image.jpg || image.png || image.webp || image.avif || image.fallback}
                  alt={image.title}
                  className="h-[500px] w-[600px] object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  style={{
                    aspectRatio: "4/3",
                    objectPosition: "center"
                  }}
                />
              </picture>
              
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