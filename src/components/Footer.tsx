import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import ablogo from "../assets/ABloading.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-luxury-gold/20">
      <div className="luxury-container py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Logo & About */}
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src={ablogo} alt="Logo" className="w-10 h-10 rounded-lg" />
              <span className="font-display font-bold text-xl">
                ABHINANDAN MOUNTREEA
              </span>
            </div>
            <p className="text-secondary-foreground/70 leading-relaxed max-w-sm">
              Crafting premium living spaces with innovation, elegance, and
              enduring quality.
            </p>
          </div>

          {/* Navigation (like Navbar) */}
          <div className="flex-1">
            <h3 className="font-semibold mb-4 text-base">Navigation</h3>
            <ul className="flex flex-col space-y-3">
              {navItems.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="relative text-secondary-foreground/70 hover:text-luxury-gold transition-colors after:content-[''] after:absolute after:w-0 after:h-[1px] after:left-0 after:-bottom-0.5 after:bg-luxury-gold after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="font-semibold mb-4 text-base">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-secondary-foreground/70">
                  SR No: 318, Near Kamat hotel, Opp: Swaminarayan Temple,
                  Athal, Silvassa - 396230
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-secondary-foreground/70">
                  +91 9327744929
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-secondary-foreground/70">
                  abhidevelopers981@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 mt-10 pt-6 text-center text-sm text-secondary-foreground/60">
          © {currentYear} ABHINANDAN MOUNTREEA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;