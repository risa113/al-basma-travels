import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

import Home from './pages/Home';
import HajjUmrah from './pages/HajjUmrah';
import Destinations from './pages/Destinations';
import Services from './pages/Services';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <ScrollToTop />
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenBooking={() => setBookingOpen(true)} />} />
          <Route path="/hajj-umrah" element={<HajjUmrah onOpenBooking={() => setBookingOpen(true)} />} />
          <Route path="/destinations" element={<Destinations onOpenBooking={() => setBookingOpen(true)} />} />
          <Route path="/services" element={<Services onOpenBooking={() => setBookingOpen(true)} />} />
          <Route path="/contact" element={<Contact onOpenBooking={() => setBookingOpen(true)} />} />
          <Route path="*" element={<Home onOpenBooking={() => setBookingOpen(true)} />} />
        </Routes>
      </main>

      <Footer />

      <BookingModal 
        isOpen={bookingOpen} 
        onClose={() => setBookingOpen(false)} 
      />
    </div>
  );
}
