import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
const ablogo = "/assets/ABloading.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", target: "gallery" },
  ];

  return (
    <footer className="bg-[#f5f5f5] text-gray-700 border-t border-gray-300">
      <div className="luxury-container py-14 px-4">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* LOGO + ABOUT */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={ablogo} alt="Logo" className="w-12 h-12 rounded-lg" />
              <span className="font-display font-bold text-xl tracking-tight">
                ABHINANDAN MOUNTREEA
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-sm">
              Crafting premium living spaces with innovation, elegance, and
              enduring quality — curated for a refined living experience.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">
              Navigation
            </h3>

            <ul className="space-y-3">
              {navItems.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group relative text-gray-600 hover:text-luxury-gold transition-all"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-luxury-gold transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">
              Contact
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-luxury-gold shrink-0" />
                <span className="text-gray-600 leading-relaxed">
                  SR No: 318, Near Kamat Hotel, Opp. Swaminarayan Temple, Athal,
                  Silvassa – 396230
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <span className="text-gray-600">+91 9327744929</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <span className="text-gray-600">
                  abhidevelopers981@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">
              Socials
            </h3>

            <ul className="space-y-4 text-sm">
              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/abhinandangroup_?igsh=MW5sYzM4aWc2ZGdlaA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-luxury-gold transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-luxury-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm4.5 5.25a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm6.25-.75a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/919327744929"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-luxury-gold transition-all"
                >
                  <img
                    src="/assets/whatsapp.png"
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
          © {currentYear} ABHINANDAN MOUNTREEA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
