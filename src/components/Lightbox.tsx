// components/Lightbox.tsx
"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxImageLike {
  src: string;
  category: string;
}

interface LightboxProps {
  images: LightboxImageLike[];
  selectedIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ images, selectedIndex, onClose, onPrev, onNext }: LightboxProps) => {
  const image = images[selectedIndex];
  const resolvedSrc = image.src;
  const resolvedAlt = image.category;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onPrev, onNext]);

  return createPortal(
    <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 animate-fadeIn">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev */}
      {selectedIndex > 0 && (
        <button
          onClick={onPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      )}

      {/* Image */}
      <div className="max-w-6xl max-h-[85vh] w-full flex flex-col items-center">
        <img
          src={resolvedSrc}
          alt={resolvedAlt}
          className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl transition-transform duration-500 animate-zoomIn"
        />
        <div className="mt-6 text-center text-white space-y-2">
          <h3 className="text-2xl font-bold">{image.category}</h3>
          <p className="text-white/80">{image.category} View</p>
          <span className="inline-block bg-blue-600 px-3 py-1 text-xs rounded-full">
            {image.category}
          </span>
        </div>
      </div>

      {/* Next */}
      {selectedIndex < images.length - 1 && (
        <button
          onClick={onNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      )}
    </div>,
    document.body
  );
};

export default Lightbox;