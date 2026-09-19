import React from "react";

export default function CtaBanner() {
  return (
    <section
      className="bg-gradient-to-r from-brand-tealDark via-brand-teal to-brand-cyan text-white py-14 text-center"
      data-purpose="ready-banner"
    >
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Ready to get the best care?
        </h2>
        <p className="text-slate-100 text-sm sm:text-base max-w-xl mx-auto">
          Schedule your consultation today and take the first step towards better health and recovery.
        </p>
        <div className="pt-2">
          <a
            className="inline-block bg-white text-brand-teal font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg hover:bg-slate-50 transition-transform transform hover:scale-105 active:scale-95"
            href="#book-appointment"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
