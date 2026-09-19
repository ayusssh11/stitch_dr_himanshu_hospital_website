import React from "react";

export default function TopBar() {
  return (
    <div className="bg-brand-darknavy text-white text-xs border-b border-brand-navy/60">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
        <div className="flex items-center flex-wrap gap-1.5 sm:gap-4 justify-center sm:justify-start text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 text-brand-cyan font-bold tracking-wide uppercase text-[10px] sm:text-[11px] whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-brand-cyan beacon-pulse shrink-0"></span>
            <span className="hidden xs:inline">24x7 Trauma &amp; Facial Injury Hotline:</span>
            <span className="xs:hidden">24x7 Trauma Hotline:</span>
          </span>
          <a
            className="font-bold text-white hover:text-brand-cyan transition-colors tracking-wider whitespace-nowrap text-[11px] sm:text-xs"
            href="tel:+919759008704"
          >
            +91 97590 08704
          </a>
          <span className="hidden md:inline text-white/30">•</span>
          <span className="hidden md:inline-flex items-center gap-1 text-white/80 text-[11px] whitespace-nowrap">
            <span className="material-symbols-outlined text-[14px] text-brand-cyan">
              location_on
            </span>
            96, Aruna Nagar, Etah (U.P)
          </span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px]">
          <span className="bg-brand-deepteal/40 border border-brand-cyan/40 text-brand-cyan font-semibold px-2 py-0.5 rounded text-[9px] sm:text-[10px] tracking-wide uppercase whitespace-nowrap">
            Ayushman Bharat PM-JAY Empaneled
          </span>
          <span className="hidden lg:inline text-white/80 whitespace-nowrap">100% Cashless Treatment</span>
        </div>
      </div>
    </div>
  );
}
