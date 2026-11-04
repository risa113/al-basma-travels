import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageSquare, Phone, CheckCircle, Shield } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, defaultService = 'Hajj & Umrah 5-Star Package' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService,
    departureCity: 'Chennai',
    travelDate: '',
    travelers: '2',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `*Priority Reservation Inquiry - ALBASMA Tours & Travels*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Departure Hub:* ${encodeURIComponent(formData.departureCity)}%0A*Travel Window:* ${encodeURIComponent(formData.travelDate || 'Flexible')}%0A*Travelers:* ${encodeURIComponent(formData.travelers)}%0A*Special Notes:* ${encodeURIComponent(formData.notes || 'None')}%0A%0A_Dispatched via Albasma Luxury React Portal_`;

    window.open(`https://wa.me/919677312228?text=${message}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-xl bg-primary border border-gold/40 rounded-xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-[11px] font-sans uppercase tracking-widest text-gold font-semibold block mb-1">
                Direct Melapalayam Concierge
              </span>
              <h3 className="font-serif text-2xl font-normal text-white">
                Plan Your Bespoke Voyage
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Fill in your travel coordinates. Our dedicated officers will review availability and connect with you immediately via phone or WhatsApp.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-secondary/30 text-gold rounded-full flex items-center justify-center mx-auto border border-gold/40">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl text-white">Inquiry Forwarded via WhatsApp!</h4>
                <p className="text-xs text-gray-300 max-w-sm mx-auto">
                  Shukran. Our team in Melapalayam is preparing your customized itinerary and will respond swiftly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gold mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohammed Farooq"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-primary-container/80 border border-gold/30 rounded px-3.5 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gold mb-1.5 font-medium">
                      WhatsApp / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 96773 12228"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-primary-container/80 border border-gold/30 rounded px-3.5 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gold mb-1.5 font-medium">
                      Primary Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-primary-container/80 border border-gold/30 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors cursor-pointer"
                    >
                      <option value="Hajj & Umrah 5-Star Package">Hajj & Umrah 5-Star Package</option>
                      <option value="Turkey & Cappadocia Heritage">Turkey & Cappadocia Heritage</option>
                      <option value="Dubai & Emirates Luxury">Dubai & Emirates Luxury</option>
                      <option value="Malaysia & Singapore Twin">Malaysia & Singapore Twin</option>
                      <option value="Saudi Tourist / Umrah Visa">Saudi Tourist / Umrah Visa</option>
                      <option value="Certificate Attestation (MEA)">Certificate Attestation (MEA)</option>
                      <option value="Flight Tickets & Transfers">Flight Tickets & Transfers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gold mb-1.5 font-medium">
                      Departure Hub
                    </label>
                    <select
                      value={formData.departureCity}
                      onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                      className="w-full bg-primary-container/80 border border-gold/30 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors cursor-pointer"
                    >
                      <option value="Chennai (MAA)">Chennai (MAA) Direct</option>
                      <option value="Tiruchirappalli (TRZ)">Tiruchirappalli (TRZ)</option>
                      <option value="Madurai (IXM)">Madurai (IXM)</option>
                      <option value="Bengaluru (BLR)">Bengaluru (BLR)</option>
                      <option value="Kochi (COK)">Kochi (COK)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gold mb-1.5 font-medium">
                      Estimated Travel Date
                    </label>
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full bg-primary-container/80 border border-gold/30 rounded px-3.5 py-2 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gold mb-1.5 font-medium">
                      Number of Travelers
                    </label>
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full bg-primary-container/80 border border-gold/30 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors cursor-pointer"
                    >
                      <option value="1 Adult">1 Adult (Solo)</option>
                      <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                      <option value="Family (3 - 5 Persons)">Family (3 - 5 Persons)</option>
                      <option value="Group (6+ Persons)">Group (6+ Persons)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold mb-1.5 font-medium">
                    Specific Inquiries or Room Preferences
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Mention Haram proximity, wheelchair assistance, or specific airlines..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-primary-container/80 border border-gold/30 rounded px-3.5 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3.5 rounded text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 border border-gold/40 group mt-4"
                >
                  <MessageSquare className="w-4 h-4 text-gold-light group-hover:scale-110 transition-transform" />
                  <span>Submit Inquiry via WhatsApp</span>
                </button>

                <p className="text-center text-[11px] text-gray-400 flex items-center justify-center gap-1.5 pt-1">
                  <Shield className="w-3.5 h-3.5 text-gold" />
                  <span>Licensed agency. Direct proprietary stewardship by Mr. A. Abdul Rahman.</span>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
