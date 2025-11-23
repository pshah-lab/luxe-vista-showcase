import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";

const heroVideo =
  "https://res.cloudinary.com/dawqqqyj7/video/upload/v1763910747/AbVideo_it22sr.mp4";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Required for autoplay on all browsers
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }

    const handleScroll = () => {
      if (heroRef.current) {
        gsap.set(heroRef.current, {
          transform: `translateY(${window.scrollY * 0.5}px)`,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newState = !isMuted;
    videoRef.current.muted = newState;
    setIsMuted(newState);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div ref={heroRef} className="absolute inset-0 -z-10 overflow-hidden">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-luxury-burgundy/40 via-luxury-charcoal/30 to-luxury-gold/20" />
      </div>

      {/* Mute / Unmute Button */}
      <button
        onClick={toggleMute}
        className="
          absolute bottom-10 right-10 z-20
          bg-white/30 hover:bg-white/50
          backdrop-blur-lg
          border border-white/40
          shadow-lg
          rounded-full p-3
          transition-all
        "
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-white" />
        ) : (
          <Volume2 className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 
             flex flex-col items-center space-y-1 
             text-white/70 hover:text-white transition-colors z-20"
      >
        <span className="text-sm font-medium tracking-wide">Scroll Down</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
