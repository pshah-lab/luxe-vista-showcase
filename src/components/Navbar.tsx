import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Crown } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Luxury Bungalows", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav id="site-navbar"
      className={`fixed top-0 w-full z-50 transition-luxury ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-premium border-b border-luxury-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="luxury-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-luxury-gold rounded-lg flex items-center justify-center shadow-glow">
              <Crown className="w-6 h-6 text-luxury-charcoal" />
            </div>
            <span className="font-display font-bold text-xl text-luxury-charcoal">
              ABHINANDAN MOUNTREEA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-smooth relative ${
                  isActive(item.path)
                    ? "text-luxury-gold"
                    : "text-luxury-charcoal hover:text-luxury-gold"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-luxury-gold rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-luxury-burgundy">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <Button size="sm" className="btn-luxury-primary">
              Schedule Visit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-luxury-charcoal hover:text-luxury-gold transition-smooth"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-luxury-gold/20 shadow-premium">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium transition-smooth ${
                    isActive(item.path)
                      ? "text-luxury-gold"
                      : "text-luxury-charcoal hover:text-luxury-gold"
                  }`}
                >
                  {item.name}
                </Link>
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
                <Button className="w-full btn-luxury-primary">Schedule Visit</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
