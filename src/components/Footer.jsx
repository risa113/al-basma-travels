import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, ShieldCheck, Clock } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-primary text-secondary-fixed border-t border-gold/25 relative z-10">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Heritage */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-primary-container text-gold flex items-center justify-center border border-gold/40 shadow-inner">
                <span className="font-arabic text-xl font-bold">بسمة</span>
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-wider text-white uppercase block leading-none">
                  ALBASMA
                </span>
                <span className="text-[10px] tracking-widest text-gold uppercase font-semibold">
                  Tours & Travels
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-xs font-light leading-relaxed mb-6">
              Ultra-luxury pilgrimage stewardship, bespoke international journeys, authorized Nusuk Saudi visas, and full-service attestation solutions based in Melapalayam.
            </p>
            <div className="space-y-1.5 text-xs text-gray-300 border-t border-gray-800 pt-4">
              <p><strong className="text-white">Proprietor:</strong> A. Abdul Rahman</p>
              <p><strong className="text-white">License:</strong> Govt. Registered Pilgrimage Agency</p>
            </div>
          </div>

          {/* Column 2: Head Office & Desks */}
          <div>
            <h4 className="font-serif text-base text-gold font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Offices & Coordinates</span>
            </h4>
            <div className="space-y-3 text-xs text-gray-300 font-light leading-relaxed">
              <div>
                <strong className="text-white block mb-0.5">Melapalayam Head Office:</strong>
                <p>Mayan Building, 17, Kottikulam Bazar Road, Puthumanai Mohalla, Melapalayam, Tirunelveli, Tamil Nadu - 627005.</p>
              </div>
              <div className="pt-2">
                <strong className="text-white block mb-0.5">Saudi Operations Desk:</strong>
                <p>Direct ground coordination stationed in Makkah Mukarramah & Madinah Munawwarah.</p>
              </div>
              <div className="pt-2 flex flex-col space-y-1 text-gold font-medium">
                <a href="tel:+919677312228" className="hover:underline flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> +91 96773 12228 / +91 97897 52100
                </a>
                <a href="tel:+966530952100" className="hover:underline flex items-center gap-1.5 text-secondary-fixed">
                  <Phone className="w-3.5 h-3.5" /> +966 530952100 (Saudi KSA Desk)
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-serif text-base text-gold font-semibold mb-4">
              Voyages & Portals
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-medium">
              <li>
                <Link to="/hajj-umrah" className="text-gray-300 hover:text-gold transition-colors block">
                  Hajj & Umrah Packages
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-gold transition-colors block">
                  International Holidays (Dubai & Turkey)
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors block">
                  Saudi Tourist & Umrah Visas
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors block">
                  Certificate Attestation & MEA
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors block">
                  Passport Online Tatkaal Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors block">
                  Melapalayam Consultation Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Concierge & Hours */}
          <div>
            <h4 className="font-serif text-base text-gold font-semibold mb-4">
              Direct Concierge
            </h4>
            <div className="p-4 bg-tertiary-container/90 rounded border border-gold/30 mb-4">
              <span className="text-[11px] uppercase tracking-wider text-gold block font-semibold mb-1">
                24/7 WhatsApp Concierge
              </span>
              <p className="text-xs text-gray-300 mb-3">
                Speak directly with our senior travel counselors for instant availability and custom quotes.
              </p>
              <a
                href="https://wa.me/919677312228?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20travel%20packages%20with%20ALBASMA."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs bg-secondary hover:bg-secondary/80 text-white px-3 py-2 rounded transition-all font-semibold shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Message Melapalayam Desk</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>Office: Mon – Sat: 9:30 AM – 9:00 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom Hairline Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} ALBASMA Tours & Travels. Proprietor A. Abdul Rahman. All Rights Reserved. Licensed Pilgrimage & Luxury Travel Agency.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-gold transition-colors">Terms of Service</Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="text-gold hover:underline flex items-center gap-1 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
