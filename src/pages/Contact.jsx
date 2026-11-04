import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, MessageSquare, Send, ShieldCheck, 
  Building2, Globe, CheckCircle2, User, HelpCircle 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Hajj & Umrah Packages',
    departure: 'Chennai',
    travelDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Contact Request - ALBASMA Tours & Travels*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A*Interested Service:* ${encodeURIComponent(formData.service)}%0A*Departure City:* ${encodeURIComponent(formData.departure)}%0A*Estimated Date:* ${encodeURIComponent(formData.travelDate || 'Flexible')}%0A*Message:* ${encodeURIComponent(formData.message || 'None')}%0A%0A_Sent via Albasma Contact Page_`;

    window.open(`https://wa.me/919677312228?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* 1. Header Section */}
      <section className="relative w-full py-24 bg-primary text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCe4iJHvL-l4eg6a7TkllA8jqmkmRG4Gwe3Cu6NCPYdLHbCafjGLGSOoAB7yhoXWfhovynt7DODZxZaulpMuWM1GLh_cSO96fxwOjueYFCQ1koHbMktsXtNBAwr9lxzFG9aBpeWTNm0Y71eSVDJ1b9cNHRUdEIerJyEfetWYj69ymsQw0WS3ZYmFRY82a1VpwD6wl8cNTlVCn-g4v97BV296EIR_zok2ORwYdUKdBId')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-gold text-xs uppercase tracking-widest font-semibold border border-gold/40 px-3 py-1 rounded-full inline-block mb-3">
            Principal Headquarters & Saudi Desk
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-4">
            ABOUT US & DIRECT CONTACT
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed mb-6">
            Located in Melapalayam, Tirunelveli with permanent operational escorts stationed in Makkah & Madinah. Connect directly with our leadership.
          </p>
        </div>
      </section>

      {/* 2. 3 Coordinates Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* HQ Melapalayam */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary text-gold flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-semibold text-secondary uppercase tracking-widest block mb-1">
                Principal Headquarters
              </span>
              <h3 className="font-serif text-xl text-primary font-semibold mb-3">
                Melapalayam, Tirunelveli
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Mayan Building, 17, Kottikulam Bazar Road, Puthumanai Mohalla, Melapalayam, Tirunelveli - 627 005, Tamil Nadu, India.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 text-xs text-primary font-semibold space-y-1">
              <p>Direct: +91 96773 12228</p>
              <p>Alt: +91 97897 52100 / 86101 08633</p>
            </div>
          </div>

          {/* Saudi KSA Desk */}
          <div className="bg-white border border-gold/40 rounded-xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gold text-primary text-[10px] uppercase font-bold px-3 py-1 rounded-bl">
              On-Ground Escort
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-secondary text-white flex items-center justify-center mb-5">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-semibold text-secondary uppercase tracking-widest block mb-1">
                Kingdom of Saudi Arabia
              </span>
              <h3 className="font-serif text-xl text-primary font-semibold mb-3">
                Saudi Operations Desk
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Permanent ground supervision for hotel check-ins, Haramain train arrivals, luggage logistics, and 24/7 emergency care in Makkah & Madinah.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 text-xs text-primary font-semibold space-y-1">
              <p className="text-secondary font-bold">KSA Hotline: +966 530952100</p>
              <p className="text-gray-500">Tamil & Arabic Speaking Ground Team</p>
            </div>
          </div>

          {/* Electronic Despatch */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary text-gold flex items-center justify-center mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-semibold text-secondary uppercase tracking-widest block mb-1">
                Inquiries & Visa Files
              </span>
              <h3 className="font-serif text-xl text-primary font-semibold mb-3">
                Electronic Despatch
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                For corporate group departures, certificate attestation tracking, and customized international itineraries.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 text-xs text-primary font-semibold space-y-1">
              <p>albasmaatour@gmail.com</p>
              <p className="text-gray-500">Turnaround time: &lt; 2 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Heritage & Founder Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200 aspect-[4/3]">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCe4iJHvL-l4eg6a7TkllA8jqmkmRG4Gwe3Cu6NCPYdLHbCafjGLGSOoAB7yhoXWfhovynt7DODZxZaulpMuWM1GLh_cSO96fxwOjueYFCQ1koHbMktsXtNBAwr9lxzFG9aBpeWTNm0Y71eSVDJ1b9cNHRUdEIerJyEfetWYj69ymsQw0WS3ZYmFRY82a1VpwD6wl8cNTlVCn-g4v97BV296EIR_zok2ORwYdUKdBId')` }}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-md p-4 rounded-lg border border-gold/30 text-white">
                <span className="text-gold text-[10px] uppercase tracking-wider font-semibold block">Office Landmark</span>
                <p className="font-serif text-sm font-medium">Mayan Building, Ambai Road, Melapalayam</p>
                <span className="text-[11px] text-gray-300">Tirunelveli District, Tamil Nadu</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold block mb-2">
              Our Core Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal leading-tight mb-6">
              Serving Voyagers with Spiritual Integrity & Modern Sophistication
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              <p>
                ALBASMA Tours & Travels was established with a singular conviction: that pilgrims fulfilling a once-in-a-lifetime sacred duty and families seeking world exploration deserve uncompromised dignity, total price clarity, and personalized attentiveness.
              </p>
              <p>
                Centrally stationed at <strong>Mayan Building, Melapalayam</strong>, we have earned the generational trust of thousands of families across South Tamil Nadu. Unlike brokers who resell quotas, our direct institutional agreements with certified Saudi companies guarantee legitimate hotel vouchers, Nusuk permits, and seamless movement.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span>Zero Hidden Tariffs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span>Permanent Saudi Ground Desk</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span>Licensed Pilgrimage Agency</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span>Direct Personal Oversight</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Inquiry Form */}
      <section className="bg-primary text-white py-20 border-t border-gold/25">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-xs uppercase tracking-widest font-semibold block mb-1">
              Priority Reservation Sheet
            </span>
            <h2 className="font-serif text-3xl text-white font-normal">
              Initiate Your Bespoke Reservation
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm max-w-lg mx-auto mt-2">
              Submit your inquiry below. Our senior counselor in Melapalayam will review hotel allotments and call you within 2 hours.
            </p>
          </div>

          <div className="glass-dark rounded-xl p-8 sm:p-10 border border-gold/30 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-14 h-14 bg-secondary/40 text-gold rounded-full flex items-center justify-center mx-auto border border-gold/40">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-white">Shukran! Inquiry Received</h3>
                <p className="text-xs text-gray-300">
                  Your message has been opened directly on WhatsApp with our Melapalayam team. We will attend to your request immediately.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gold mb-1 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohammed Farooq"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-primary-container/80 border border-gold/30 rounded px-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gold mb-1 font-medium">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 96773 12228"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-primary-container/80 border border-gold/30 rounded px-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gold mb-1 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-primary-container/80 border border-gold/30 rounded px-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gold mb-1 font-medium">
                      Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-primary-container/80 border border-gold/30 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold transition-colors cursor-pointer"
                    >
                      <option value="Hajj & Umrah Packages">Hajj & Umrah Packages</option>
                      <option value="International Holiday Tour">International Holiday Tour</option>
                      <option value="Flight Ticket Booking">Flight Ticket Booking</option>
                      <option value="Saudi Visa & Stamping">Saudi Visa & Stamping</option>
                      <option value="Certificate Attestation">Certificate Attestation</option>
                      <option value="Passport Online Services">Passport Online Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gold mb-1 font-medium">
                      Departure Hub
                    </label>
                    <select
                      value={formData.departure}
                      onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
                      className="w-full bg-primary-container/80 border border-gold/30 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold transition-colors cursor-pointer"
                    >
                      <option value="Chennai">Chennai (MAA)</option>
                      <option value="Trichy">Tiruchirappalli (TRZ)</option>
                      <option value="Madurai">Madurai (IXM)</option>
                      <option value="Bengaluru">Bengaluru (BLR)</option>
                      <option value="Kochi">Kochi (COK)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold mb-1 font-medium">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention preferred travel dates, family room requirements, senior citizen wheelchair care..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-primary-container/80 border border-gold/30 rounded px-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3.5 rounded text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 border border-gold/40 mt-2"
                >
                  <MessageSquare className="w-4 h-4 text-gold-light" />
                  <span>Submit Inquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
