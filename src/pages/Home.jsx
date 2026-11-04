import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Compass, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, 
  Building2, Plane, Car, BookOpen, Star, ShieldCheck, Sparkles, MapPin, 
  Phone, Users, Calendar, Award, ArrowUpRight
} from 'lucide-react';
import LiveTicker from '../components/LiveTicker';

export default function Home({ onOpenBooking }) {
  // Hero Carousel Data
  const slides = [
    {
      title: "DISCOVER THE SACRED.",
      highlight: "JOURNEY WITH REVERENCE.",
      subtitle: "Curated 5-Star VIP Hajj & Umrah passages with Haramain high-speed rail, clock tower frontages, and direct on-ground leadership from Melapalayam.",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvTO_ncvlDZuXjR5NOqQXTK6KPXUO08rWGAI_mIzWqcTMDuRi39wzEhF2uW6OwMWPMTKarfQ4UMVkWAhIFsJcBGY_j9RdpgzOuL03t9pmZhDOpRVjgmD96eDG3wtShVHtQlHvmMYGBgZ3SzGJfNhCoeEyeFpo_egehyYoc84jYgOEGSO9v-B1vvpSCimLovuhMp1MKxlasAvK_EYp6go7CWjFWXuBKjE_4pjqJB07RLxQwqiH2ukgTrrgw1onmlTqCEwP-hg4WRHQh",
      badge: "Licensed Pilgrimage Agency · Melapalayam",
      ctaText: "Explore Sacred Packages",
      ctaLink: "/hajj-umrah"
    },
    {
      title: "TIMELESS HERITAGE.",
      highlight: "CURATED EXPEDITIONS.",
      subtitle: "Exclusive private Ottoman heritage, Bosphorus luxury yachts, and bespoke cultural itineraries across Turkey, Cappadocia, and historic Anatolia.",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCp501km9OE2xPbu7Pm71akEsAUfRS95tGVhdVSLY4YuhRbNzwt7NgOWNi0iynw2Mk-GTk5PnWPlJHEy40slWsYerZNzDwx9Xwb-9xIse1ZIajWW3nd-aKqetARaHDIsaC9t4a7kGQ6E_7YLmVrOKktaoN0cDsis8rFYxsXQ46fzipWkJR26iFWpkojybovGksNXN2f1K0uqlZwXfrtRSBvmRy9m7yEKtne3pZhcZq8cv2XPnJUdql_Tl66nTAFiYYiran2_L0ph9bh",
      badge: "Imperial Cultural Expeditions",
      ctaText: "View Turkey Itinerary",
      ctaLink: "/destinations"
    },
    {
      title: "BESPOKE LUXURY.",
      highlight: "UNRIVALED HOSPITALITY.",
      subtitle: "Ultra-exclusive private desert camps, world-class five-star suites, and seamless chauffeur transfers across Dubai, Malaysia, Singapore and beyond.",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp7R16S8axc4BJ9JA356OjNOTYRch3LAZ1ffdwFtLBZ0to3W3Vhq3vg3Bi50WgsHDWa0AlVC8Ldl0a8nISkfHg1iQQQ2GGOwUkIvS_btghINbBV4I1_rk3u9clCzsoqyFaEbX_L_zf3yCu3nug4fXKFS8nF_DCeM9Qt5Z5ZgRQghaAQgbVvX1nfLjQEmCW4YXbG284Xc7fyRHci9A6KoW-S34UcQsSKNXKWIgqQm--OXPje2C_YlrfQycHzO1ToLIV-txivlUcTT-t",
      badge: "World Class Sovereign Retreats",
      ctaText: "Explore Global Destinations",
      ctaLink: "/destinations"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full">
      {/* 1. Live Continuous Marquee Ticker */}
      <LiveTicker />

      {/* 2. Animatic 3-Slide Hero Section */}
      <section className="relative w-full min-h-[660px] lg:h-[860px] bg-primary overflow-hidden flex items-center">
        {/* Carousel Background Images */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
              idx === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 pointer-events-none z-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
            <div className="absolute inset-0 bg-radial from-transparent via-primary/40 to-primary/80" />
          </div>
        ))}

        {/* Hero Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 flex flex-col justify-between h-full">
          {/* Top Pill Badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-6"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary-container/85 border border-gold/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
              <span className="text-gold font-sans text-xs uppercase tracking-widest font-semibold">
                {slides[currentSlide].badge}
              </span>
            </div>
          </motion.div>

          {/* Central Animated Typographic Showcase */}
          <div className="max-w-3xl my-auto py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight mb-4 drop-shadow-lg">
                  {slides[currentSlide].title} <br />
                  <span className="shimmer-gold italic font-serif">
                    {slides[currentSlide].highlight}
                  </span>
                </h1>

                <p className="font-sans text-sm sm:text-base md:text-lg text-gray-200 font-light mb-8 max-w-2xl leading-relaxed">
                  {slides[currentSlide].subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to={slides[currentSlide].ctaLink}
                    className="bg-primary hover:bg-secondary text-gold border border-gold/60 px-7 py-3.5 rounded text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-xl flex items-center gap-2 group"
                  >
                    <span>{slides[currentSlide].ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={onOpenBooking}
                    className="glass-dark text-white hover:text-gold px-7 py-3.5 rounded text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center gap-2 border border-gold/30 hover:border-gold"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowUpRight className="w-4 h-4 text-gold" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Slide Controls & Indicator */}
          <div className="flex items-center justify-between pt-6 border-t border-gold/25 text-white">
            <div className="flex items-center gap-6">
              {/* Counter */}
              <div className="font-sans text-xs tracking-widest text-gold flex items-center gap-2">
                <span className="text-xl font-bold font-serif">0{currentSlide + 1}</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-400">0{slides.length}</span>
              </div>

              {/* Indicator Lines */}
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1 rounded transition-all duration-500 ${
                      idx === currentSlide ? 'w-8 bg-gold' : 'w-3 bg-gray-600 hover:bg-gray-400'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Chevron Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="w-10 h-10 rounded border border-gold/30 bg-primary/70 backdrop-blur-md text-white hover:text-gold hover:border-gold flex items-center justify-center transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="w-10 h-10 rounded border border-gold/30 bg-primary/70 backdrop-blur-md text-white hover:text-gold hover:border-gold flex items-center justify-center transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Integrated Booking Console Bar */}
      <section className="relative -mt-6 md:-mt-10 z-30 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-dark rounded-xl p-6 md:p-8 shadow-2xl border border-gold/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gold mb-2 font-medium flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>Package Category</span>
              </label>
              <select className="w-full bg-primary-container/90 border border-gold/30 text-white text-xs rounded px-3.5 py-3 focus:outline-none focus:border-gold transition-colors cursor-pointer">
                <option>Hajj & Umrah Luxury Pilgrimage</option>
                <option>International Bespoke Holiday</option>
                <option>Saudi Tourist & Umrah Visas</option>
                <option>South India Flight Charters</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gold mb-2 font-medium flex items-center gap-1.5">
                <Plane className="w-3.5 h-3.5" />
                <span>Departure Hub</span>
              </label>
              <select className="w-full bg-primary-container/90 border border-gold/30 text-white text-xs rounded px-3.5 py-3 focus:outline-none focus:border-gold transition-colors cursor-pointer">
                <option>Chennai International (MAA)</option>
                <option>Tiruchirappalli (TRZ) Direct</option>
                <option>Madurai Airport (IXM)</option>
                <option>Bengaluru (BLR) / Kochi (COK)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gold mb-2 font-medium flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Travel Window</span>
              </label>
              <input 
                type="month" 
                defaultValue="2025-05" 
                className="w-full bg-primary-container/90 border border-gold/30 text-white text-xs rounded px-3.5 py-2.5 focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <div>
              <button 
                onClick={onOpenBooking}
                className="w-full bg-secondary hover:bg-secondary/90 text-white border border-gold/50 py-3 px-4 rounded text-xs uppercase tracking-wider font-semibold transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>Inquire Itinerary</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sacred Journeys Spotlight (Hajj & Umrah Luxury Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-secondary font-sans text-xs uppercase tracking-widest font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Government Registered & Authorized Pilgrimage Stewardship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal leading-tight">
            YOUR SACRED JOURNEY DESERVES <br />
            <span className="italic text-secondary font-serif">THE HIGHEST REVERENCE</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto my-5"></div>
          <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
            Every detail of your pilgrimage is curated for profound spiritual peace—from frontline luxury suites overlooking the holy sanctuaries to our native Tamil and Urdu speaking scholarly guides.
          </p>
        </div>

        {/* 4 Luxury Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Building2,
              title: "Haramain 5-Star Suites",
              desc: "Direct courtyard proximity at Makkah Clock Tower (Fairmont, Swissôtel, Pullman Zamzam) & Madinah Oberoi and Dar Al Taqwa.",
              tag: "Courtyard Facing"
            },
            {
              icon: Plane,
              title: "Direct Flight Charters",
              desc: "Seamless departures from Chennai, Tiruchirappalli & Madurai with pre-arranged baggage handling, meals, and group check-ins.",
              tag: "Saudi Airlines & Flynas"
            },
            {
              icon: Car,
              title: "Private GMC Transfers",
              desc: "VIP private air-conditioned GMC Yukon and Mercedes fleet for airport pickups, intercity transfers, and Haramain express rail tickets.",
              tag: "Chauffeured Comfort"
            },
            {
              icon: BookOpen,
              title: "24/7 Scholar Guidance",
              desc: "Experienced Aalims accompanying your family step-by-step through Umrah rituals, Badee Ziyarahs, and historical sacred landmarks.",
              tag: "Comprehensive Ziyarah"
            }
          ].map((pillar, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary-container text-gold flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg text-primary font-semibold mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">{pillar.desc}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-secondary font-semibold uppercase tracking-wider pt-3 border-t border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span>{pillar.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Saudi Ground Support Callout Banner */}
        <div className="mt-12 bg-primary rounded-xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-gold/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary text-gold flex items-center justify-center shrink-0 border border-gold/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-white mb-1">Direct Saudi Ground Concierge with Arabic & Tamil Team</h4>
              <p className="text-gray-300 text-xs sm:text-sm font-light">Dedicated leadership resident on-ground in Makkah & Madinah during your entire voyage.</p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="tel:+966530952100"
              className="bg-gold text-primary font-semibold px-5 py-2.5 rounded text-xs uppercase tracking-wider hover:bg-gold-light transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>+966 530952100</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Curated Destinations Bento Grid */}
      <section className="bg-surface-container-low py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="text-xs uppercase tracking-widest text-secondary font-semibold block mb-1">
                Imperial Horizons
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal">
                Curated Global Destinations
              </h2>
            </div>
            <Link
              to="/destinations"
              className="text-secondary hover:text-primary font-semibold text-xs uppercase tracking-wider flex items-center gap-1 mt-4 md:mt-0"
            >
              <span>View All 5 Curated Circuits</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
            {/* Makkah & Madinah */}
            <div className="md:col-span-2 lg:col-span-2 row-span-2 relative group rounded-xl overflow-hidden shadow-md">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAahACAg_dKnVG2UaBplC4q1t_-_dGbMF_W4jhAJRsK8utsrQXZCcwOxMQC3CoUTW66VFw83Hzofmnb1krBxOnJL9z5vmUnXPCE2qGlhJqybYfg1b6izG5Dza8TNKV6sK11kvo5bLlly3MURHVbo9HxUv8FKExa3dhr8GYeJlzp_OfGhjSIVZ66aZvh7jVWkKmCFyXRMLup4yVt-qLa38p6u2WtVe4Lk8eImRTqMAJrafUlKDwPLgYvco5n0KfPv4wFeWB3ig650Jjf')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary/85 backdrop-blur-md border border-gold/40 text-gold text-xs uppercase tracking-widest px-3 py-1 rounded font-semibold">
                  The Two Holy Harams
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-serif text-2xl font-normal mb-2">Makkah & Madinah Al-Munawwarah</h3>
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 mb-4 font-light">
                  Frontline 5-star hotel options facing the Haram, scheduled Haramain high-speed rail transfers, and private Ziyarah circuits.
                </p>
                <Link
                  to="/hajj-umrah"
                  className="inline-flex items-center gap-1.5 text-gold text-xs uppercase tracking-wider font-semibold hover:underline"
                >
                  <span>Explore Pilgrimage Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Turkey & Cappadocia */}
            <div className="relative group rounded-xl overflow-hidden shadow-md">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzRQKYTXgGR3ZH19jYVKTC1e1mbZmHK6ZluqbTKrNceaXDSGHJaEo4rtxA4Cd9VgYYYJs1PNxNt-JBGM7FrGk2BC-kgOSCJyAdoOmqnIspFLqf2bu65iSzqr7Df6-YIHMXTTyIdgnsHvVhwIzYUi8PbJq83iLD0DwpiLvSMqGiOIlTYDGAwVI0lydtrPgYXUX5HLu2us3nBAnSrFRrOxGQsOX1oTjKYH3bVep7xQVjMVEp2pfl-UYF_4VuIYCsf_wsI_xVRxRbL2Pg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary/85 backdrop-blur-md text-gold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded">
                  Ottoman Splendor
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif text-lg font-medium mb-1">Istanbul & Cappadocia</h3>
                <span className="text-xs text-gray-300 block font-light">Bosphorus Yacht & Balloon Flight</span>
              </div>
            </div>

            {/* Dubai & Emirates */}
            <div className="relative group rounded-xl overflow-hidden shadow-md">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBoUEzDV1qjpHuHLSGhkCmkfQWrsQ6jGb9oYfIeki0om9agAyToyl_qKgN2KMiA3FVfebbD4AI5k0WO4JDiHe3kmmgT0bZqWocRpuooIHWT_f-91z_PJ4gposSstOSEzbiNN0eqUjC7RBF0pBphHZ21F-FV-zJoeWeNBLkGcki21mCrJv7ptNxqOikMhabzkWGjcgp9Q5FAWilSEvWQFlrNz8r5wds2B2p66eYqQGV8MoSX0t0D02wE1ST5HPeW5R7A3cejpL2zEYXe')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary/85 backdrop-blur-md text-gold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded">
                  Emirates VIP
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif text-lg font-medium mb-1">Dubai & Abu Dhabi</h3>
                <span className="text-xs text-gray-300 block font-light">Private Desert Safari & Marina</span>
              </div>
            </div>

            {/* Malaysia & Singapore */}
            <div className="relative group rounded-xl overflow-hidden shadow-md">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuACgnQyJ9PMD_a1yjpUKNqvi5OVBeJjvU57NOq6Axb0WTbJhiGh16xVEg6xzXPP4V3ceAucurdl4bKfaHHla17Ygnt6VVmQn8afjNDHhyDF7FgufAM15Oo86RPCpndDGFIs-dK7dRfN1HlrxF9W0AlUVBSm3DoK48iTO6Mx_Ig-MjzdiSkqZsIbF7FDQDUedCNNlrdpg4tyJEh_LEnC4cOH5D6rG7LOxZ9yoDyt1Y29UtYEczbT83wTnXeuSYoXKHbE_ckfn1I2haE-')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary/85 backdrop-blur-md text-gold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded">
                  Southeast Asia
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif text-lg font-medium mb-1">Malaysia & Singapore</h3>
                <span className="text-xs text-gray-300 block font-light">Genting Highlands & Sentosa</span>
              </div>
            </div>

            {/* Al-Aqsa & Jerusalem */}
            <div className="relative group rounded-xl overflow-hidden shadow-md">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDq3Rl_UTITf2TO0bNEH5cDRM7lp7p0272CZxPGer8nIMD12caGrK95P8IkSENNt8ZGQVC6LU64eijWecNc7UYoBGAkbD2Wp17mzTHZfJsXGzZjr27ujEI358NcjUdGwMri_eumgPb4AIGts8KpAH1x-UY34ldlYpnK4msovB60K8seJYNg5FYkt2Tcwd3Wy_O5je9vz2SWZkTtqZNdL6cQyeqMVFdbIGBJJuins-Ro0WPdmpzBoUcAtm7by6VZMZeFN4PJVYTArH2-')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary/85 backdrop-blur-md text-gold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded">
                  Third Holy Shrine
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif text-lg font-medium mb-1">Al-Aqsa & Jerusalem</h3>
                <span className="text-xs text-gray-300 block font-light">Spiritual Group Itineraries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Signature Tour Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
            Transparent Pricing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal mt-2">
            Signature Travel Packages
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto my-4" />
          <p className="text-gray-600 text-sm font-light">
            Guaranteed 5-star hotel allotments, direct airline inventory, and verified ground logistics with zero hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "VIP Umrah Executive",
              days: "15 Days / 14 Nights",
              tier: "Premium Pilgrimage",
              price: "₹1,15,000",
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2cDEp6Z9Y-XkDjE6xUOi2Bi7sUl8MJykbK-sDeRysX__MH9u-vF2fD00AwSv3jgtasLiI41pe0GVig5Lhr60jqI6q8FWxpYwEPLJs7Vty9TLIHjbPkw_6HcEI6f23UFGMEGYc3ftRAWnvuznji4UkXaoAf7LtUTk1fEcmkQK_s-AJLdA-a8f4Evq8QHlyd0g66Owmgkw7PANvvg1CcsbNKLseROZbAAlANAyRxsnO1dJj-W0RaMBTQPTRyal2f2HNdEcFSPHnrhcu",
              features: ["Swissôtel Makkah (0 Meters)", "Dar Al Taqwa Madinah", "Direct Flights from South India", "Full Buffet Catering Included"]
            },
            {
              title: "Turkey Royal Heritage",
              days: "9 Days / 8 Nights",
              tier: "Cultural Imperial",
              price: "₹1,45,000",
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRjNsCXUexPXlbGz3PIqttaQKjRB_xEF7a303PkNLBnD1rryDo9cS0K39NBUhoB-DHlSFQtrq7vuguZp0pJ9Hc2veUetQHkA5k1__y1DISl5-9R95pwoXtlXTAuQdHXx8xUySoOFOGLzFK-lQoi5m0Y1xzv4BEa55s-meW_Z888hIFpZz7yluydHV0nKtjTpGRu3U5IZNUefJQxfE_GHklPQH7rHUUueCuGOK8cmbD6py-KpUwd38zlTluGcJvNGcxJIFvug3hWZ9L",
              features: ["Istanbul, Cappadocia & Pamukkale", "Private Bosphorus Yacht Lunch", "Hot Air Balloon Flight Access", "Certified English/Tamil Escort"]
            },
            {
              title: "Dubai Arabian Elegance",
              days: "6 Days / 5 Nights",
              tier: "Metropolitan Luxe",
              price: "₹68,500",
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOqCrSiMFRqzYVX5qw6ookPK-FrSJY3LYWBZKae3AXiggdxxscq3hA3Q9UOzGTPHUk6gFmND2KYJIQQ-9T6DyxPfTi80IAj4FrXb9HZ-y4SgtnuUYnuaFcAtiKd2xHYzDi4SAqsh5BFTds-DkJU0aC6Nuh-jaWHVtQUr6bvOimI3ySRlJfiLC6rzLtmyfqbAhMLcUGMWAaP1SaOPXoClwtHQx-W27sjqJv94QxdGcmKvMOzb2vt7YHTaByVwbsMp25p9Sz3Gp-uzkZ",
              features: ["5-Star Marina / Downtown Stay", "Private 4x4 Dune Safari & Dinner", "Burj Khalifa Top Level Access", "Express UAE Visa Processing"]
            },
            {
              title: "Malaysia & Singapore",
              days: "7 Days / 6 Nights",
              tier: "Tropical Twin",
              price: "₹79,000",
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcsxRGbDDDglzCg3qr0HVnrjwxfehkpxBXBYkhjEVNBkHNhYdtRx0pilzMK8C-A-gmFyu1LqHSQgIIfwy3BkuwTYhgwmGggNY4rz0l_MuxJTpoOlnZESVhr5U04rG1jCm5qZdS0bs0RkTXDJX63FJAXaSuUfAWStVA2U5XEVQ4yJHAhYXkLun3NUosfXZG94lGH1oPP9KK60GYNraBDmPRnNARjqL0J6q-YZlDQvE2Zpw7Y1toS3bVQuaNnMl19yGyEjUisBb7R3-Y",
              features: ["Kuala Lumpur & Genting Cable Car", "Universal Studios & Sentosa Suites", "Cross-Border Luxury Transit", "Both Visas Handled Smoothly"]
            }
          ].map((pkg, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${pkg.image}')` }}
                  />
                  <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-md text-gold px-2.5 py-1 rounded text-[11px] font-semibold border border-gold/30">
                    {pkg.days}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-semibold text-secondary uppercase tracking-widest block">
                    {pkg.tier}
                  </span>
                  <h3 className="font-serif text-lg text-primary font-semibold mt-1 mb-3">
                    {pkg.title}
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-600 mb-6">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 mt-auto">
                <div className="flex items-baseline justify-between mb-4 pt-4">
                  <span className="text-xs text-gray-400 uppercase">From</span>
                  <span className="text-xl font-serif text-primary font-bold">
                    {pkg.price} <span className="text-xs font-normal text-gray-500">/ person</span>
                  </span>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-primary hover:bg-secondary text-gold border border-gold/40 py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-colors block text-center shadow-sm"
                >
                  Enquire Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Institutional Integrity & Founder Spotlight */}
      <section className="bg-primary text-white py-24 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Profile (5 Col) */}
            <div className="lg:col-span-5 bg-tertiary-container/80 border border-gold/30 rounded-xl p-8 relative">
              <div className="absolute -top-3.5 right-6 bg-gold text-primary font-bold px-3 py-1 rounded text-[10px] uppercase tracking-wider">
                Founder & Proprietor
              </div>
              <div className="w-20 h-20 rounded-full bg-primary text-gold flex items-center justify-center text-3xl font-serif font-bold mb-6 border-2 border-gold shadow-lg">
                AR
              </div>
              <h3 className="font-serif text-2xl font-normal text-white">A. Abdul Rahman</h3>
              <p className="text-gold font-sans text-xs uppercase tracking-wider font-semibold mt-1 mb-4">
                Proprietor, ALBASMA Tours & Travels
              </p>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                “For over 15 years, our singular purpose has been to serve the pilgrims of Allah and voyagers with untainted honesty, uncompromising comfort, and familial warmth. From Melapalayam to the holy sanctuaries, your trust is our covenant.”
              </p>
              <div className="border-t border-gray-700 pt-4 space-y-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <span>Mayan Building, Melapalayam, Tirunelveli</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span>Licensed & Registered Pilgrimage Agency</span>
                </div>
              </div>
            </div>

            {/* Metrics & Authority (7 Col) */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
                Steadfast Stewardship
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight mb-6">
                Honest Hospitality Grounded in Integrity
              </h2>
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-8">
                Anchored in Melapalayam, ALBASMA has steered thousands of families across South India to blessed sanctuaries and memorable world voyages with complete transparent invoicing and on-ground Saudi escorts.
              </p>

              {/* Metric Counters */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-800">
                <div className="border-l-2 border-gold pl-4">
                  <div className="text-3xl font-serif text-gold font-bold">15+</div>
                  <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">Years Trust</div>
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <div className="text-3xl font-serif text-gold font-bold">100%</div>
                  <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">Transparent Billing</div>
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <div className="text-3xl font-serif text-gold font-bold">24/7</div>
                  <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">Saudi Escort</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
