import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, Plane, Clock, CheckCircle2, ArrowRight, Star, 
  MapPin, Utensils, Shield, HeartHandshake, Sparkles 
} from 'lucide-react';

export default function Destinations({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const destinationList = [
    {
      id: 'turkey',
      category: 'europe',
      title: "Turkey & Ottoman Heritage Grand Tour",
      duration: "9 Days / 8 Nights",
      price: "₹1,45,000",
      cities: "Istanbul · Cappadocia · Pamukkale",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRjNsCXUexPXlbGz3PIqttaQKjRB_xEF7a303PkNLBnD1rryDo9cS0K39NBUhoB-DHlSFQtrq7vuguZp0pJ9Hc2veUetQHkA5k1__y1DISl5-9R95pwoXtlXTAuQdHXx8xUySoOFOGLzFK-lQoi5m0Y1xzv4BEa55s-meW_Z888hIFpZz7yluydHV0nKtjTpGRu3U5IZNUefJQxfE_GHklPQH7rHUUueCuGOK8cmbD6py-KpUwd38zlTluGcJvNGcxJIFvug3hWZ9L",
      highlights: [
        "Private sunset yacht charter along the Bosphorus Strait",
        "Cappadocia hot air balloon sunrise flight arrangement",
        "Topkapi Palace, Blue Mosque & Hagia Sophia guided tour",
        "Pamukkale thermal white travertine terraces & Hierapolis",
        "2 Domestic internal flights in Turkey included"
      ]
    },
    {
      id: 'dubai',
      category: 'middle-east',
      title: "Dubai & Emirates Royal Explorer",
      duration: "6 Days / 5 Nights",
      price: "₹68,500",
      cities: "Dubai Downtown · Palm Jumeirah · Desert Dunes",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOqCrSiMFRqzYVX5qw6ookPK-FrSJY3LYWBZKae3AXiggdxxscq3hA3Q9UOzGTPHUk6gFmND2KYJIQQ-9T6DyxPfTi80IAj4FrXb9HZ-y4SgtnuUYnuaFcAtiKd2xHYzDi4SAqsh5BFTds-DkJU0aC6Nuh-jaWHVtQUr6bvOimI3ySRlJfiLC6rzLtmyfqbAhMLcUGMWAaP1SaOPXoClwtHQx-W27sjqJv94QxdGcmKvMOzb2vt7YHTaByVwbsMp25p9Sz3Gp-uzkZ",
      highlights: [
        "Burj Khalifa 124th & 125th floor observation deck",
        "Red Dunes 4x4 desert safari with VIP bedouin BBQ dinner",
        "Marina luxury dhow cruise with international dinner buffet",
        "Dubai Miracle Garden, Global Village & gold souk excursion",
        "Express UAE tourist eVisa processing included"
      ]
    },
    {
      id: 'malaysia-singapore',
      category: 'asia',
      title: "Malaysia & Singapore Twin Escapade",
      duration: "7 Days / 6 Nights",
      price: "₹79,000",
      cities: "Kuala Lumpur · Genting · Singapore Sentosa",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcsxRGbDDDglzCg3qr0HVnrjwxfehkpxBXBYkhjEVNBkHNhYdtRx0pilzMK8C-A-gmFyu1LqHSQgIIfwy3BkuwTYhgwmGggNY4rz0l_MuxJTpoOlnZESVhr5U04rG1jCm5qZdS0bs0RkTXDJX63FJAXaSuUfAWStVA2U5XEVQ4yJHAhYXkLun3NUosfXZG94lGH1oPP9KK60GYNraBDmPRnNARjqL0J6q-YZlDQvE2Zpw7Y1toS3bVQuaNnMl19yGyEjUisBb7R3-Y",
      highlights: [
        "Petronas Twin Towers & Batu Caves guided visit",
        "Genting Highlands two-way cable car journey",
        "Universal Studios Singapore one-day full access pass",
        "Gardens by the Bay & Marina Bay Sands sky deck",
        "Luxury AC coach cross-border transfer with visa handling"
      ]
    },
    {
      id: 'alaqsa',
      category: 'middle-east',
      title: "Al-Aqsa & Islamic Heritage of Jordan",
      duration: "8 Days / 7 Nights",
      price: "₹1,28,000",
      cities: "Jerusalem · Amman · Petra · Dead Sea",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq3Rl_UTITf2TO0bNEH5cDRM7lp7p0272CZxPGer8nIMD12caGrK95P8IkSENNt8ZGQVC6LU64eijWecNc7UYoBGAkbD2Wp17mzTHZfJsXGzZjr27ujEI358NcjUdGwMri_eumgPb4AIGts8KpAH1x-UY34ldlYpnK4msovB60K8seJYNg5FYkt2Tcwd3Wy_O5je9vz2SWZkTtqZNdL6cQyeqMVFdbIGBJJuins-Ro0WPdmpzBoUcAtm7by6VZMZeFN4PJVYTArH2-",
      highlights: [
        "Friday Jumu'ah prayer in sacred Masjid al-Aqsa",
        "Dome of the Rock and Old City holy gates walking tour",
        "Ancient stone city of Petra (Wonder of the World)",
        "Mount Nebo & Maqamat of revered Sahabah in Jordan",
        "Experienced Islamic historian scholar guide throughout"
      ]
    },
    {
      id: 'kashmir',
      category: 'domestic',
      title: "Kashmir Paradise & Valley Serenity",
      duration: "6 Days / 5 Nights",
      price: "₹34,500",
      cities: "Srinagar · Gulmarg · Pahalgam · Sonamarg",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAMSOn4QZk4sFVcuDq37F7kaLEI8BaYO1QPB-FqPdJ4dzBuA2qBA2n1y-7P4_uklH3lZccp4v9yI34gS8YJzBW2L0yjw0_wgMTsVxZYAr9x_7vV3kmIr9CJe73tvTncyZJgHqLSQ8T-tZaMr6lUW-A0KmfPHoPGJAtmPYBo27nrRj8iceJeurr0-Uh3GeQVuqbBnFC9DJbEmKsvlYio2sequzkxObyQfGsNsx5B-FQ",
      highlights: [
        "Luxury wooden houseboat stay on Dal Lake with Shikara ride",
        "Gulmarg Gondola cable car ride (Phase 1 & Phase 2)",
        "Pahalgam Betaab Valley & Aru Valley excursion",
        "Mughal Gardens (Shalimar & Nishat Bagh)",
        "Dedicated private Innova chauffeur from Srinagar airport"
      ]
    },
    {
      id: 'kerala',
      category: 'domestic',
      title: "Kerala Backwaters & Mist Highlands",
      duration: "5 Days / 4 Nights",
      price: "₹24,900",
      cities: "Munnar · Thekkady · Alleppey Backwaters",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBai6ZLqru6HheOOt0DBdego6BT2kKkB90mVf1q6lskM3WgbKESxyy59cM9RiwjxKOnA5ZEfks2l6GJMKbZLtI96GTfYeUt67cmMeGOubHzldZI2Scbd9HrKUVrUjOQmS8lOcCSwJDeqAtZ2gx03OW_59NpFUMZhEfJGhGrfVjexdVwD8wJ_eWcKNXno3sz3pILIJxj3tiXXOehMn-hXoDv00J2kRYdQ_6dfWFfJcBr",
      highlights: [
        "Private AC deluxe kettuvallam houseboat cruise in Alleppey",
        "Munnar sprawling tea plantations and Mattupetty Dam",
        "Thekkady wildlife spice plantation guided walk",
        "Traditional South Indian and Kerala banquet dining",
        "Door-to-door pickup from Madurai or Cochin airport"
      ]
    }
  ];

  const filtered = activeCategory === 'all' 
    ? destinationList 
    : destinationList.filter(d => d.category === activeCategory);

  return (
    <div className="w-full">
      {/* 1. Header Banner */}
      <section className="relative w-full py-24 bg-primary text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCp501km9OE2xPbu7Pm71akEsAUfRS95tGVhdVSLY4YuhRbNzwt7NgOWNi0iynw2Mk-GTk5PnWPlJHEy40slWsYerZNzDwx9Xwb-9xIse1ZIajWW3nd-aKqetARaHDIsaC9t4a7kGQ6E_7YLmVrOKktaoN0cDsis8rFYxsXQ46fzipWkJR26iFWpkojybovGksNXN2f1K0uqlZwXfrtRSBvmRy9m7yEKtne3pZhcZq8cv2XPnJUdql_Tl66nTAFiYYiran2_L0ph9bh')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/90 border border-gold/40 text-gold text-xs uppercase tracking-widest font-semibold mb-6">
            <Compass className="w-4 h-4 text-gold" />
            <span>Curated Sovereign Escapes & World Expeditions</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal mb-4">
            INTERNATIONAL TOURS & <br />
            <span className="shimmer-gold italic font-serif">LUXURY ESCAPES</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Experience world-class wonders with 100% verified halal dining, prime centrally located five-star accommodations, private chauffeurs, and dedicated visa facilitation.
          </p>

          <button
            onClick={onOpenBooking}
            className="bg-secondary hover:bg-secondary/90 text-white border border-gold/50 px-8 py-3.5 rounded text-xs uppercase tracking-wider font-semibold transition-all shadow-xl inline-flex items-center gap-2"
          >
            <span>Custom Itinerary Planning</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </button>
        </div>
      </section>

      {/* 2. Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-200 pb-4">
          {[
            { id: 'all', label: 'All Destinations' },
            { id: 'middle-east', label: 'Middle East & Gulf' },
            { id: 'europe', label: 'Turkey & Europe' },
            { id: 'asia', label: 'Southeast Asia' },
            { id: 'domestic', label: 'Domestic Exclusive' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-gold border border-gold shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:text-primary hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Destination Showcase Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((dest) => (
              <motion.div
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${dest.image}')` }}
                    />
                    <div className="absolute top-3 right-3 bg-primary/90 text-gold px-3 py-1 rounded text-[11px] font-semibold border border-gold/30">
                      {dest.duration}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                      {dest.cities}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl text-primary font-semibold mb-3">
                      {dest.title}
                    </h3>
                    <ul className="space-y-2 text-xs text-gray-600 mb-6">
                      {dest.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-100 mt-auto">
                  <div className="flex items-baseline justify-between mb-4 pt-4">
                    <span className="text-xs text-gray-400 uppercase">Pricing From</span>
                    <span className="text-2xl font-serif text-primary font-bold">
                      {dest.price} <span className="text-xs font-normal text-gray-500">/ person</span>
                    </span>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-primary hover:bg-secondary text-gold border border-gold/40 py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Inquire Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Halal Friendly Assurance */}
      <section className="bg-surface-container-low py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-4 shadow-sm">
              <div className="p-3 bg-primary-container text-gold rounded-lg shrink-0">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-base text-primary font-semibold mb-1">100% Halal Dining Guarantee</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Every tour program includes vetted certified halal meals and dining recommendations suited for Muslim families.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-4 shadow-sm">
              <div className="p-3 bg-primary-container text-gold rounded-lg shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-base text-primary font-semibold mb-1">Prayer Time Accommodations</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Itineraries are paced thoughtfully to ensure stopovers at iconic mosques for daily prayers without rush.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-4 shadow-sm">
              <div className="p-3 bg-primary-container text-gold rounded-lg shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-base text-primary font-semibold mb-1">Bespoke Family Customization</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Traveling with elders or children? We craft personalized pacing, private cars, and flexible hotel adjustments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
