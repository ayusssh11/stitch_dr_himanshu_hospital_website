import React from "react";
import { Phone, MessageSquare } from "lucide-react";

export default function FloatingDock() {
  return (
    <aside
      className="hidden md:flex fixed left-3 bottom-8 z-50 flex-col gap-3"
      data-purpose="floating-contact-dock"
    >
      <a
        className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
        href="https://wa.me/918445234962"
        rel="noopener noreferrer"
        target="_blank"
        title="Chat on WhatsApp (+91 84452 34962)"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
      <a
        className="w-12 h-12 bg-brand-cyan hover:bg-brand-teal text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
        href="tel:+919759008704"
        title="Emergency Hotline"
      >
        <Phone className="w-5 h-5" />
      </a>
    </aside>
  );
}
