import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Plane, Car, BookOpen, CheckCircle2, ShieldCheck, 
  MapPin, Phone, Calendar, ArrowRight, Star, Clock, ChevronDown, Check, Sparkles
} from 'lucide-react';

export default function HajjUmrah({ onOpenBooking }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const packages = [
    {
      name: "VIP Executive Umrah",
      duration: "15 Days / 14 Nights",
      price: "₹1,15,000",
      badge: "Frontline Haram Luxury",
      hotels: "Fairmont / Swissôtel Clock Tower (0m) & Dar Al Taqwa Madinah",
      inclusions: [
        "Direct Saudi Airlines Ex-Chennai / Trichy",
        "Swissôtel Makkah Clock Tower Courtyard View",
        "Dar Al Taqwa Madinah (Steps to Prophet's Gate)",
        "Daily South Indian & Continental Buffet (3 Meals)",
        "VIP GMC Yukon Airport & Intercity Transit",
        "Haramain Bullet Train Fast Class Access",
        "Full Ziyarah (Jabal Hira, Thawr, Uhud, Quba, Khandaq)",
        "E-Umrah Visa & Approved Insurance"
      ]
    },
    {
      name: "Deluxe Pilgrim Umrah",
      duration: "21 Days / 20 Nights",
      price: "₹95,000",
      badge: "Popular Long Stay",
      hotels: "Pullman Zamzam Makkah & Millennium Madinah",
      inclusions: [
        "Direct Airline Flights Ex-South India Hubs",
        "10 Nights Makkah (Walking Distance 250m)",
        "10 Nights Madinah Al Munawwarah",
        "Daily 3-Time Authentic Indian Buffet Meals",
        "Air-Conditioned Luxury Coach Transport",
        "Comprehensive Guided Historical Ziyarah",
        "Authorized Scholar Accompanying Rites",
        "Complimentary 5L Zamzam Water Container"
      ]
    },
    {
      name: "Ramadan Last 10 Days Special",
      duration: "15 Days (21st Ramadan - Eid)",
      price: "₹1,65,000",
      badge: "Lailat-ul-Qadr Blessings",
      hotels: "Makkah Frontage Hotel & Madinah Oberoi",
      inclusions: [
        "Direct Group Flights (Chennai / Trichy / Madurai)",
        "Experience Khatm-ul-Quran & Tahajjud in Haram",
        "Suhoor (Sehri) & Grand Iftar Buffet Provided",
        "Eid-ul-Fitr Prayers in Masjid al-Haram",
        "Continuous 24/7 Saudi Ground Escort",
        "Private Ziyarah & Badar Battlefield Excursion",
        "Fast-Track Nusuk Rawdah Permit Allocation",
        "Express Visa & Luggage Handling"
      ]
    },
    {
      name: "Annual Holy Hajj Delegation",
      duration: "30 - 35 Days",
      price: "Custom Allocation",
      badge: "Limited Pilgrim Quota",
      hotels: "Air-Conditioned VIP Mina Tents & 5-Star Suites",
      inclusions: [
        "Full Ritual Stewardship under Senior Islamic Scholars",
        "Air-Conditioned Upgraded Mina Camp with Buffet",
        "Muzdalifah Carpeted Resting Zone & Provisions",
        "Haramain Bullet Train for Mina-Arafat-Muzdalifah",
        "Pre-Hajj Practical Training Sessions in Melapalayam",
        "24/7 Medical & Translation Care Across Haramain",
        "Qurbani (Sacrifice) Arranged through Official Islamic Bank",
        "Post-Hajj 8 Days Madinah Peaceful Ziyarah"
      ]
    }
  ];

  const faqs = [
    {
      q: "Are the Umrah visas and permits authorized directly through the Saudi Nusuk system?",
      a: "Yes. ALBASMA Tours & Travels is an authorized pilgrimage agency operating with direct Saudi Umrah endorsements. All electronic visas, health insurance, and Rawdah permits are verified through the official Nusuk portal."
    },
    {
      q: "Can senior citizens or pilgrims needing wheelchair assistance travel comfortably?",
      a: "Absolutely. We specialize in family and elderly pilgrim care. Our packages feature hotels situated directly in front of the Haram courtyards to minimize walking, with dedicated wheel-chair escorts and private GMC vehicle pick-ups available upon request."
    },
    {
      q: "What departure airports do you operate from in South India?",
      a: "We organize regular direct and convenient flight departures from Chennai (MAA), Tiruchirappalli (TRZ), Madurai (IXM), Bengaluru (BLR), and Cochin (COK)."
    },
    {
      q: "Is food catering suitable for South Indian taste?",
      a: "Yes! We provide authentic South Indian, Tamil, and Continental buffet breakfasts, lunches, and dinners prepared by experienced catering chefs, with daily tea and coffee."
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Header */}
      <section className="relative w-full py-24 bg-primary text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvTO_ncvlDZuXjR5NOqQXTK6KPXUO08rWGAI_mIzWqcTMDuRi39wzEhF2uW6OwMWPMTKarfQ4UMVkWAhIFsJcBGY_j9RdpgzOuL03t9pmZhDOpRVjgmD96eDG3wtShVHtQlHvmMYGBgZ3SzGJfNhCoeEyeFpo_egehyYoc84jYgOEGSO9v-B1vvpSCimLovuhMp1MKxlasAvK_EYp6go7CWjFWXuBKjE_4pjqJB07RLxQwqiH2ukgTrrgw1onmlTqCEwP-hg4WRHQh')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/90 border border-gold/40 text-gold text-xs uppercase tracking-widest font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Sacred Pilgrimage Concierge · Melapalayam Stewardship</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal mb-4">
            HAJJ & UMRAH <br />
            <span className="shimmer-gold italic font-serif">LUXURY PACKAGES</span>
          </h1>

          <p className="font-arabic text-xl sm:text-2xl text-gold mb-6">
            لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ
          </p>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Serving the honored guests of Allah with five-star hospitality directly facing Masjid al-Haram and Masjid an-Nabawi. Experience unmatched spiritual serenity with native Tamil scholar escorts.
          </p>

          <button
            onClick={onOpenBooking}
            className="bg-secondary hover:bg-secondary/90 text-white border border-gold/50 px-8 py-3.5 rounded text-xs uppercase tracking-wider font-semibold transition-all shadow-xl inline-flex items-center gap-2"
          >
            <span>Reserve Pilgrimage Seat</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </button>
        </div>
      </section>

      {/* 2. Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
            All-Inclusive Inclusions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal mt-2">
            Curated Sacred Packages
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto my-4" />
          <p className="text-gray-600 text-sm">
            Flights, 5-star hotel vouchers, buffet catering, bullet train transfers, and expert scholar escorts included in all reservations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-white border border-gold/30 rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gold/15 text-primary text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-lg border-b border-l border-gold/30">
                {pkg.badge}
              </div>

              <div>
                <span className="text-xs text-secondary font-semibold uppercase tracking-wider">
                  {pkg.duration}
                </span>
                <h3 className="font-serif text-2xl text-primary font-semibold mt-1 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-gray-500 mb-6 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>{pkg.hotels}</span>
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100 mb-8">
                  {pkg.inclusions.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] uppercase text-gray-400 block tracking-wider">All-Inclusive Rate</span>
                  <span className="font-serif text-2xl text-primary font-bold">{pkg.price}</span>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="bg-primary hover:bg-secondary text-gold border border-gold/50 px-6 py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
                >
                  Book Seat
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Detailed Ziyarah Milestone Circuit */}
      <section className="bg-surface-container-low py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
              Historical Narratives
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal mt-2">
              Guided Sacred Ziyarah Excursions
            </h2>
            <p className="text-gray-600 text-sm mt-3">
              Included in every package with scholar lectures on prophetic milestones and historical events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cave Hira & Jabal al-Noor",
                location: "Makkah Mukarramah",
                desc: "The sacred mount where Prophet Muhammad (PBUH) received the divine first revelation of the Holy Quran."
              },
              {
                title: "Jabal Thawr & Mina Camps",
                location: "Makkah Sacred Precincts",
                desc: "The sanctuary cave of Hijrah journey, followed by historical visits to Muzdalifah, Arafat, and Jamarat."
              },
              {
                title: "Masjid Quba & Mount Uhud",
                location: "Madinah Munawwarah",
                desc: "The first mosque in Islamic history with prayers equal to an Umrah, plus prayers for the martyrs of Uhud."
              },
              {
                title: "Masjid al-Qiblatayn & Seven Mosques",
                location: "Madinah Historical Boundary",
                desc: "The monumental site where the prayer direction was transformed towards the Holy Kaaba."
              }
            ].map((ziyarah, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded bg-primary-container text-gold flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-secondary tracking-widest block mb-1">
                    {ziyarah.location}
                  </span>
                  <h3 className="font-serif text-base text-primary font-semibold mb-2">
                    {ziyarah.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {ziyarah.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1 text-[11px] text-gold font-semibold uppercase">
                  <span>Tamil & English Scholarly Guide</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
            Clarity & Guidance
          </span>
          <h2 className="font-serif text-3xl text-primary font-normal mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between text-primary font-medium text-sm sm:text-base hover:text-secondary transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-gold transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
