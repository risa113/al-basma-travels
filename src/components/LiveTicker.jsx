import React from 'react';

export default function LiveTicker() {
  const dispatches = [
    "✦ Direct Flights from Chennai, Trichy & Madurai",
    "✦ Frontline 5-Star Haram Facing Accommodations (Clock Tower & Oberoi)",
    "✦ Authorized Nusuk & Saudi Umrah Visa Desk",
    "✦ Dedicated Melapalayam Ground Leadership & Tamil Scholars",
    "✦ 24/7 Makkah & Madinah Concierge Desk",
    "✦ 100% Transparent Invoicing with Zero Hidden Tariffs",
    "✦ VIP GMC Yukon Intercity Haramain Transit"
  ];

  return (
    <div className="bg-tertiary border-b border-gold/20 overflow-hidden py-2 text-xs text-secondary-fixed">
      <div className="flex animate-marquee whitespace-nowrap font-sans tracking-wider">
        {[...dispatches, ...dispatches].map((text, idx) => (
          <span key={idx} className="inline-block px-5 text-gray-200 font-medium">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
