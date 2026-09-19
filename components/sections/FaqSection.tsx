import React from "react";

export default function FaqSection() {
  return (
    <section
      className="py-20 bg-slate-50 border-t border-slate-200/60"
      data-purpose="frequently-asked-questions"
      id="faq"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
            Questions &amp; Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Find answers to common queries regarding hospital visits, billing, and admissions.
          </p>
        </div>

        {/* FAQ Accordion List with semantic HTML details tags */}
        <div className="space-y-3">
          <details
            className="group bg-white rounded-xl border border-slate-200 p-4 transition-all duration-200"
            open
          >
            <summary className="flex justify-between items-center cursor-pointer font-bold text-sm text-slate-800 list-none select-none">
              <span>What are Dr. Himanshu Hospital&apos;s OPD and emergency hours?</span>
              <span className="text-brand-teal group-open:rotate-180 transition-transform ml-2">
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </span>
            </summary>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Our Outpatient Department (OPD) operates from <strong>9:00 AM to 8:00 PM</strong> Monday
              through Saturday. The Casualty, Emergency, Trauma care, and Intensive Care Units are open{" "}
              <strong>24 Hours a Day, 365 Days a Year</strong>.
            </p>
          </details>

          <details className="group bg-white rounded-xl border border-slate-200 p-4 transition-all duration-200">
            <summary className="flex justify-between items-center cursor-pointer font-bold text-sm text-slate-800 list-none select-none">
              <span>Do you accept Ayushman Bharat PM-JAY Golden Card?</span>
              <span className="text-brand-teal group-open:rotate-180 transition-transform ml-2">
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </span>
            </summary>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Yes, Dr. Himanshu Hospital is an active empanelled hospital under{" "}
              <strong>Ayushman Bharat PM-JAY</strong>. Eligible cardholders receive 100% cashless
              treatment across covered medical and surgical procedures. Please present your Ayushman
              Golden Card and Aadhaar card at our help desk.
            </p>
          </details>

          <details className="group bg-white rounded-xl border border-slate-200 p-4 transition-all duration-200">
            <summary className="flex justify-between items-center cursor-pointer font-bold text-sm text-slate-800 list-none select-none">
              <span>How can I book an appointment with Dr. Himanshu?</span>
              <span className="text-brand-teal group-open:rotate-180 transition-transform ml-2">
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </span>
            </summary>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
              You can book an appointment instantly using the booking form below, or by calling our
              direct registration desk at <strong>+91 97590 08704</strong>, or via our 24/7 WhatsApp
              concierge at <strong>+91 84452 34962</strong>.
            </p>
          </details>

          <details className="group bg-white rounded-xl border border-slate-200 p-4 transition-all duration-200">
            <summary className="flex justify-between items-center cursor-pointer font-bold text-sm text-slate-800 list-none select-none">
              <span>What facilities are available for trauma and fracture cases?</span>
              <span className="text-brand-teal group-open:rotate-180 transition-transform ml-2">
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </span>
            </summary>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
              We feature a dedicated trauma bay, high-resolution digital X-ray, specialized
              maxillofacial plating systems, orthopedic C-arm image intensifiers, and immediate blood
              cross-matching protocols.
            </p>
          </details>

          <details className="group bg-white rounded-xl border border-slate-200 p-4 transition-all duration-200">
            <summary className="flex justify-between items-center cursor-pointer font-bold text-sm text-slate-800 list-none select-none">
              <span>Are private and deluxe air-conditioned inpatient rooms available?</span>
              <span className="text-brand-teal group-open:rotate-180 transition-transform ml-2">
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </span>
            </summary>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Yes, we provide General Wards, Semi-Private Rooms, and Fully Furnished Deluxe AC Rooms
              with attendant sleeper facilities, television, and customized dietary meal plans.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
