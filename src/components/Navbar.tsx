import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import ablogo from "../assets/Ablogo.png";
import { Button } from "./ui/button";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Default to true only if on "/" (transparent first render)
  const [isHeroInView, setIsHeroInView] = useState(location.pathname === "/");

  const handleScheduleClick = () => {
    const url = (import.meta as any)?.env?.VITE_SCHEDULE_FORM_URL;
    if (url && typeof url === "string") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("Schedule form link not set yet.");
    }
  };

  const isGlass = location.pathname !== "/" || !isHeroInView;

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsHeroInView(false); // always glass for non-home
      return;
    }

    const heroEl = document.getElementById("hero");
    if (!heroEl) {
      setIsHeroInView(true); // fallback: stay transparent if hero not found
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroInView(entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px", threshold: 0.01 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [location.pathname]);

  const navItems = [
    { name: "Home", target: "hero" },
    { name: "About", target: "about" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navbar = document.getElementById("site-navbar");
    const navHeight = navbar ? navbar.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      id="site-navbar"
      className={`fixed top-0 w-full z-50 transition-luxury ${
        isGlass
          ? "bg-background/95 backdrop-blur-md shadow-premium border-b border-luxury-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="luxury-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-15 h-15 bg-transparent rounded-lg flex items-center justify-center">
              <img
                src={ablogo}
                alt="ABHINANDAN MOUNTREEA Logo"
                className="w-12 h-12 text-luxury-charcoal rounded-lg"
              />
            </div>
            <span
              className={`font-display font-bold text-xl underline underline-offset-4 ${
                isGlass ? "text-black" : "text-white"
              }`}
            >
              ABHINANDAN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.target)}
                className={`text-sm font-medium transition-smooth relative ${
                  isGlass
                    ? "text-black hover:text-luxury-gold"
                    : "text-white hover:text-luxury-gold"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              size="sm"
              className={`${
                isGlass
                  ? "bg-black text-white hover:bg-transparent hover:text-black border border-black"
                  : "bg-white text-black hover:bg-transparent hover:text-white border border-white"
              }`}
              onClick={handleScheduleClick}
            >
              Schedule Visit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-smooth ${
              isGlass
                ? "text-black hover:text-luxury-gold"
                : "text-white hover:text-luxury-gold"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-luxury-gold/20 shadow-premium">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsOpen(false);
                    scrollTo(item.target);
                  }}
                  className={`block text-left w-full text-base font-medium transition-smooth ${
                    isGlass
                      ? "text-black hover:text-luxury-gold"
                      : "text-white hover:text-luxury-gold"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-luxury-gold/20 space-y-3">
                <div className="flex items-center space-x-2 text-sm text-luxury-burgundy">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-luxury-burgundy">
                  <Mail className="w-4 h-4" />
                  <span>info@abhinandanmountria.com</span>
                </div>
                <Button
                  className="w-full btn-luxury-primary"
                  onClick={() => {
                    setIsOpen(false);
                    handleScheduleClick();
                  }}
                >
                  Schedule Visit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;