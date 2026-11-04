import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, FileCheck, Award, FileText, Building2, Car, 
  Coins, ShieldAlert, CheckCircle2, ArrowRight, Phone, MessageSquare, Clock
} from 'lucide-react';

export default function Services({ onOpenBooking }) {
  const serviceItems = [
    {
      icon: Plane,
      title: "Air Ticket Booking",
      subtitle: "Domestic & International Flight Desk",
      desc: "Direct airline system integration with special Gulf group tariffs, seat reservations, senior citizen meal requests, extra baggage allowance, and quick date revalidations.",
      points: ["Direct South India Hubs (Chennai, Trichy, Madurai)", "Saudi Airlines, Emirates, Qatar, Air India", "Lowest Guaranteed Group Fares"]
    },
    {
      icon: FileCheck,
      title: "Saudi & Global Visa Assistance",
      subtitle: "Authorized Nusuk & Consular Desk",
      desc: "Instant electronic Umrah visas, 1-year multiple entry tourist visas, family visit endorsements, and expedited documentation handling under sanctioned channels.",
      points: ["24-48 Hours Express Saudi E-Visa", "UAE 30/60 Days Tourist Visas", "UK, Schengen, Singapore, Malaysia Filings"]
    },
    {
      icon: Award,
      title: "Certificate Attestation & Apostille",
      subtitle: "MEA & Gulf Embassy Endorsements",
      desc: "Authorized document stamping for degree certificates, birth records, marriage certificates, and commercial powers of attorney required for Gulf employment.",
      points: ["Ministry of External Affairs (MEA) Stamping", "Saudi Embassy & Culture Attestation", "UAE, Qatar, Kuwait & Oman Consular Stamping"]
    },
    {
      icon: FileText,
      title: "Passport Online Services",
      subtitle: "Fresh Filings & Tatkaal Expedited",
      desc: "End-to-end guidance for passport issuance: online appointment scheduling at PSK Tirunelveli and Madurai, document verification, renewal, and police verification guidance.",
      points: ["Tatkaal Urgency Appointments", "Name & Address Correction Advisory", "Lost / Damaged Passport Reissue"]
    },
    {
      icon: Building2,
      title: "Hajj & Umrah Full Management",
      subtitle: "VIP Sacred Concierge",
      desc: "Complete spiritual guidance, rawdah permits via Nusuk, hotel bookings right next to the haram gates, South Indian buffet catering, and scholar lectures.",
      points: ["Courtyard 0m Hotel Allotments", "Private Ziyarah Guided Tours", "24/7 Native On-Ground Saudi Escorts"]
    },
    {
      icon: Car,
      title: "Luxury Airport Chauffeur Fleet",
      subtitle: "Door-to-Door Transfers",
      desc: "Dedicated 24/7 air-conditioned private fleet (Innova Crysta, luxury sedans, tempo travellers) for seamless pickups and drops to all South Indian airports.",
      points: ["Madurai, Tuticorin & Trivandrum Pickups", "Chennai & Cochin Direct Transfers", "Professional Courteous Chauffeurs"]
    },
    {
      icon: Coins,
      title: "Foreign Currency Exchange (Forex)",
      subtitle: "Authorized Currency Services",
      desc: "Instant procurement of foreign currencies with transparent billing: Saudi Riyal (SAR), UAE Dirham (AED), US Dollar (USD), and multi-currency travel prepaid cards.",
      points: ["Competitive Spot Exchange Rates", "Doorstep Delivery in Melapalayam", "Authorized Transparent Receipts"]
    },
    {
      icon: ShieldAlert,
      title: "Overseas Travel Insurance",
      subtitle: "Comprehensive Medical & Flight Cover",
      desc: "Mandatory international health coverage protecting your family against emergency medical treatments, flight delays, trip cancellations, and loss of checked baggage.",
      points: ["Cashless Overseas Hospitalization", "Emergency Medical Evacuation", "Zero Deductible Options Available"]
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Services Header */}
      <section className="relative w-full py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-container to-primary opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-gold text-xs uppercase tracking-widest font-semibold mb-3 border border-gold/40 px-3 py-1 rounded-full">
            Full-Spectrum Travel Concierge
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-4">
            COMPREHENSIVE SERVICES PORTFOLIO
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Single-window convenience in Melapalayam for all international travel mandates, consular endorsements, documentation, visas, and luxury fleet logistics.
          </p>
          <button
            onClick={onOpenBooking}
            className="bg-secondary hover:bg-secondary/90 text-white border border-gold/50 px-8 py-3.5 rounded text-xs uppercase tracking-wider font-semibold transition-all shadow-xl inline-flex items-center gap-2"
          >
            <span>Inquire Any Service</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </button>
        </div>
      </section>

      {/* 2. 8 Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((svc, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary text-gold flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svc.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-semibold text-secondary uppercase tracking-widest block mb-1">
                  {svc.subtitle}
                </span>
                <h3 className="font-serif text-lg text-primary font-semibold mb-2">
                  {svc.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {svc.desc}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-gray-100 text-[11px] text-gray-700">
                  {svc.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <button
                  onClick={onOpenBooking}
                  className="w-full text-center bg-gray-50 hover:bg-primary hover:text-gold border border-gray-200 hover:border-gold py-2 rounded text-xs uppercase tracking-wider font-semibold transition-colors block"
                >
                  Request Service
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Document Attestation Roadmap Flow */}
      <section className="bg-surface-container-low py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
              Fast-Track Stamping
            </span>
            <h2 className="font-serif text-3xl text-primary font-normal mt-2">
              How Our Attestation Protocol Works
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Safe handling for university degrees, commercial documents, and birth/marriage certificates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Document Intake", desc: "Submit physical originals or verified scans at our Melapalayam office with secure tracking receipt." },
              { step: "02", title: "Notary & HRD", desc: "State level verification, home department authentication, and state HRD department clearance." },
              { step: "03", title: "MEA & Apostille", desc: "Official Ministry of External Affairs endorsement and Hague Apostille stamping in New Delhi." },
              { step: "04", title: "Embassy Endorsement", desc: "Final consular attestation at Saudi, UAE, Qatar, or Kuwait embassies with return courier." }
            ].map((flow, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative">
                <span className="text-3xl font-serif text-gold font-bold block mb-2">{flow.step}</span>
                <h4 className="font-serif text-base text-primary font-semibold mb-2">{flow.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{flow.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Quick Help Hotline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-primary text-white rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-gold/30">
          <div>
            <span className="text-gold text-xs uppercase tracking-widest font-semibold block mb-1">
              Urgent Tatkaal & Visa Queries
            </span>
            <h3 className="font-serif text-2xl text-white font-normal">
              Need immediate passport filing or Saudi visa stamping?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Connect with our Melapalayam operations officer for same-day filing assistance.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+919677312228"
              className="bg-gold hover:bg-gold-light text-primary font-semibold px-6 py-3 rounded text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 96773 12228</span>
            </a>
            <a
              href="https://wa.me/919677312228?text=Assalamu%20Alaikum,%20I%20need%20urgent%20visa%20or%20passport%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 rounded text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
