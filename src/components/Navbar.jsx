import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageSquare, Menu, X, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hajj & Umrah', path: '/hajj-umrah' },
    { name: 'International Tours', path: '/destinations' },
    { name: 'Our Services', path: '/services' },
    { name: 'About & Contact', path: '/contact' }
  ];

  return (
    <>
      {/* 1. Top Institutional Utility Bar */}
      <aside className="bg-primary text-secondary-fixed text-xs border-b border-secondary/25 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Contact Numbers Cluster */}
          <div className="flex flex-wrap items-center gap-4 text-surface-container-high">
            <div className="flex items-center gap-1.5 text-secondary-fixed">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span className="font-semibold text-gold tracking-wide">India:</span>
              <a href="tel:+919677312228" className="hover:text-gold transition-colors">+91 96773 12228</a>
              <span className="text-gray-400">/</span>
              <a href="tel:+919789752100" className="hover:text-gold transition-colors hidden sm:inline">+91 97897 52100</a>
            </div>
            <span className="hidden md:inline text-gray-500">|</span>
            <div className="hidden md:flex items-center gap-1.5 text-surface-container-high">
              <Compass className="w-3.5 h-3.5 text-gold" />
              <span className="font-semibold text-gold">Saudi KSA Desk:</span>
              <a href="tel:+966530952100" className="hover:text-gold transition-colors">+966 530952100</a>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-4 ml-auto">
            <a 
              href="mailto:albasmaatour@gmail.com" 
              className="hidden lg:flex items-center gap-1 text-gray-300 hover:text-gold transition-colors text-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>albasmaatour@gmail.com</span>
            </a>
            <a
              href="https://wa.me/919677312228?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20travel%20packages%20with%20ALBASMA."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/80 hover:bg-secondary text-white px-3 py-1 rounded text-xs flex items-center gap-1.5 border border-gold/30 transition-all font-medium shadow-sm"
            >
              <MessageSquare className="w-3 h-3 text-gold-light" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </aside>

      {/* 2. Glassmorphic Main Sticky Header */}
      <header className="sticky top-0 inset-x-0 z-40 bg-surface/90 dark:bg-primary/95 backdrop-blur-md border-b border-gold/20 shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Brand Insignia */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded bg-primary-container flex items-center justify-center border border-gold/40 text-gold shadow-inner group-hover:scale-105 transition-transform">
              <span className="font-arabic text-xl font-bold leading-none">بسمة</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-primary dark:text-white uppercase leading-none">
                  ALBASMA
                </span>
                <span className="text-[10px] tracking-widest text-gold font-bold px-1.5 py-0.5 rounded bg-primary/10 dark:bg-gold/10 border border-gold/30 uppercase">
                  Luxury
                </span>
              </div>
              <span className="block text-[11px] tracking-widest text-secondary font-medium uppercase mt-0.5">
                Tours & Travels · Melapalayam
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 font-sans text-xs tracking-wider uppercase font-semibold">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 transition-colors duration-200 ${
                    isActive
                      ? 'text-primary dark:text-gold font-bold'
                      : 'text-on-surface-variant dark:text-gray-300 hover:text-primary dark:hover:text-gold'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold via-secondary to-gold rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action Cluster */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919677312228"
              className="hidden sm:flex items-center gap-2 text-primary dark:text-gray-200 text-xs font-semibold hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>+91 96773 12228</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="bg-primary hover:bg-secondary text-gold border border-gold/50 px-5 py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm hover:shadow-gold/20 flex items-center gap-1.5 group"
            >
              <span>Plan Your Journey</span>
              <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-primary dark:text-white hover:text-gold focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-primary text-white border-t border-gold/20 shadow-2xl overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2.5 text-sm uppercase tracking-wider font-medium border-b border-gray-800 flex justify-between items-center ${
                      location.pathname === link.path ? 'text-gold font-bold' : 'text-gray-200 hover:text-gold'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-gold/60" />
                  </Link>
                ))}

                <div className="pt-3 space-y-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 rounded text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Plan Your Journey</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:+919677312228"
                    className="w-full border border-gold/40 text-gold py-2.5 rounded text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 hover:bg-primary-container transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Melapalayam Office</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
