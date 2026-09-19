import React from "react";
import Link from "next/link";
import { PhoneCall, CalendarCheck, Stethoscope, AlertTriangle } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-brand-border px-2 py-1.5 safe-pb shadow-[0_-4px_25px_rgba(0,0,0,0.08)]"
      aria-label="Mobile quick actions"
    >
      <div className="grid grid-cols-4 gap-1.5">
        <a
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-brand-lightcyan active:bg-brand-ice text-brand-deepteal transition-all text-center"
          href="tel:+919759008704"
        >
          <PhoneCall className="w-4 h-4 text-brand-teal mb-0.5" />
          <span className="text-[10px] font-extrabold tracking-tight">Call Desk</span>
        </a>

        <Link
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-red-50 active:bg-red-100 text-crimson transition-all text-center"
          href="/emergency-trauma"
        >
          <AlertTriangle className="w-4 h-4 text-crimson mb-0.5" />
          <span className="text-[10px] font-extrabold tracking-tight">24/7 Trauma</span>
        </Link>

        <Link
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-50 active:bg-slate-100 text-slate-800 transition-all text-center"
          href="/doctors"
        >
          <Stethoscope className="w-4 h-4 text-brand-teal mb-0.5" />
          <span className="text-[10px] font-extrabold tracking-tight">Doctors</span>
        </Link>

        <Link
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-brand-deepteal hover:bg-brand-navy text-white shadow-sm active:scale-95 transition-all text-center"
          href="/appointment"
        >
          <CalendarCheck className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-extrabold tracking-tight">Book OPD</span>
        </Link>
      </div>
    </nav>
  );
}
