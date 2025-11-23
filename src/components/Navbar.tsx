import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown, Target } from "lucide-react";
import { Button } from "./ui/button";

const ablogo = "/assets/Ablogo.png";
const whatsappIcon = "/assets/whatsapp.png";

const Navbar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect if hero is visible (for transparent navbar)
  const [isHeroInView, setIsHeroInView] = useState(location.pathname === "/");

  const isGlass = location.pathname !== "/" || !isHeroInView;

  const navItems = [
    { name: "Home", target: "hero" },
    {name:"About", target:"about"},
    { name: "Gallery", target: "gallery" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navbar = document.getElementById("site-navbar");
    const navHeight = navbar ? navbar.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setContactOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hero intersection
  useEffect(() => {
    if (location.pathname !== "/") {
      setIsHeroInView(false);
      return;
    }

    const heroEl = document.getElementById("hero");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroInView(entry.isIntersecting),
      { rootMargin: "-80px 0px", threshold: 0.01 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <nav
      id="site-navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isGlass
          ? "bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="luxury-container">
        <div className="flex items-center justify-between h-20">
          {/* LEFT: Logo + Menu Icon */}
          <div className="flex items-center gap-4">
            <button
              className={`md:hidden p-2 ${
                isGlass ? "text-black" : "text-white"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>

            <Link to="/" className="flex items-center gap-2">
              <img src={ablogo} className="w-12 h-12 text-luxury-charcoal rounded-lg" />
              <span
                className={`font-semibold text-xl ${
                  isGlass ? "text-black" : "text-white"
                }`}
              >
                ABHINANDAN
              </span>
            </Link>
          </div>

          {/* CENTER: Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.target)}
                className={`text-sm font-medium ${
                  isGlass ? "text-black" : "text-white"
                } hover:text-luxury-gold transition-all`}
              >
                {item.name}
              </button>
            ))}

            {/* Desktop Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setContactOpen((p) => !p)}
                className={`flex items-center gap-1 text-sm font-medium ${
                  isGlass ? "text-black" : "text-white"
                } hover:text-luxury-gold transition-all`}
              >
                Connect
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    contactOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {contactOpen && (
                <div className="absolute right-0 mt-3 w-48 rounded-xl border border-gray-200 bg-white shadow-xl backdrop-blur-md p-3 space-y-3 animate-dropdown">
                  <a
                    href="tel:+919327744929"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-black transition"
                  >
                    <Phone className="w-4 h-4 text-luxury-gold" />
                    <span>Call</span>
                  </a>

                  <a
                    href="mailto:abhidevelopers981@gmail.com"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-black transition"
                  >
                    <Mail className="w-4 h-4 text-luxury-gold" />
                    <span>Email</span>
                  </a>

                  <a
                    href="https://wa.me/919327744929"
                    target="_blank"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-black transition"
                  >
                    <img src={whatsappIcon} className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: CTA */}
          <div className="hidden md:flex">
            <Button
              className="rounded-full px-6 bg-white text-black border border-gray-300 hover:bg-black hover:text-white"
              onClick={() =>
                window.open(import.meta.env.VITE_SCHEDULE_FORM_URL, "_blank")
              }
            >
              Enquire Now
            </Button>
          </div>
        </div>

        {/* ------------------ MOBILE MENU ------------------ */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-md border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollTo(item.target);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left text-gray-700 text-base py-2 hover:text-luxury-gold"
                >
                  {item.name}
                </button>
              ))}

              {/* MOBILE Dropdown */}
              <button
                onClick={() => setContactOpen((p) => !p)}
                className="flex items-center justify-between w-full text-gray-700 text-base py-2"
              >
                <span>Connect</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    contactOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {contactOpen && (
                <div className="ml-4 mt-2 space-y-3 border-l-2 border-gray-200 pl-4">
                  <a
                    href="tel:+919327744929"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-black"
                  >
                    <Phone className="w-4 h-4 text-luxury-gold" />
                    <span>Call</span>
                  </a>

                  <a
                    href="mailto:abhidevelopers981@gmail.com"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-black"
                  >
                    <Mail className="w-4 h-4 text-luxury-gold" />
                    <span>Email</span>
                  </a>

                  <a
                    href="https://wa.me/919327744929"
                    target="_blank"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-black"
                  >
                    <img src={whatsappIcon} className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              )}

              <Button
                className="w-full rounded-full mt-4 border border-black text-black hover:bg-black hover:text-white"
                onClick={() =>
                  window.open(import.meta.env.VITE_SCHEDULE_FORM_URL, "_blank")
                }
              >
                Enquire Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
