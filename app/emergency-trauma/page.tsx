import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import TraumaTimeline from "@/components/sections/TraumaTimeline";
import CriticalCareSection from "@/components/sections/CriticalCareSection";

export const metadata: Metadata = {
  title: "24x7 Emergency & Trauma Care | Dr. Himanshu Hospital Etah",
  description:
    "24/7 Casualty & Golden Hour Trauma Bay in Etah. Immediate response for road accidents, maxillofacial fractures, brain injury, and critical care emergencies at +91 97590 08704.",
};

export default function EmergencyTraumaPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="Open 24 Hours • 7 Days a Week"
        title="24x7 Emergency &amp; Golden Hour"
        highlightText="Trauma Resuscitation"
        description="Western UP's dedicated tertiary emergency trauma response center. Immediate airway management, Class-100 Modular OT standby, and Level-III ICU ventilator backup for severe road traffic accidents and acute medical crises."
        breadcrumb={[{ label: "24x7 Emergency & Trauma" }]}
      />

      {/* High Alert Emergency Banner */}
      <section className="bg-crimson text-white py-6 shadow-md border-b border-crimson-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl shrink-0">
              <span className="material-symbols-outlined text-[24px]">emergency</span>
            </span>
            <div>
              <div className="text-sm font-extrabold uppercase tracking-wider">
                Emergency &amp; Trauma Hotline (24 Hours Active)
              </div>
              <div className="text-xs text-white/80">
                Direct Stretcher Ramp • Zero Wait-Time Admission • Intensivist On-Duty
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919759008704"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-crimson hover:bg-slate-100 font-extrabold text-sm sm:text-base shadow-xl transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>CALL NOW: +91 97590 08704</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trauma Timeline Component */}
      <TraumaTimeline />

      {/* Critical Care & ICU Suite Showcase */}
      <CriticalCareSection />

      {/* Pre-Hospital First-Aid Guide for Emergencies */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              Life-Saving First Response
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              What To Do Before Reaching The Hospital
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Crucial steps you can take while transporting the patient to Dr. Himanshu Hospital:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-crimson flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[26px]">bloodtype</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Severe Facial Bleeding</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Apply direct firm pressure with clean cotton or gauze over the bleeding wound. If the patient is conscious, sit them slightly forward to prevent swallowing blood into the lungs.
              </p>
              <div className="text-[11px] font-semibold text-crimson">
                Do NOT pack deep into the airway. Call +91 97590 08704 to prepare OT.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-brand-deepteal flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[26px]">airline_seat_flat</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Head Injury &amp; Unconsciousness</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Keep the cervical spine (neck) strictly straight. Do not shake or twist the head. If vomiting occurs, gently roll the whole body together onto the side (recovery position) to prevent choking.
              </p>
              <div className="text-[11px] font-semibold text-brand-deepteal">
                Our CT/X-Ray and Neuro team will be alerted immediately.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-brand-teal flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[26px]">dentistry</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Knocked-Out (Avulsed) Teeth</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Do NOT touch the tooth root. Hold by the crown, gently rinse with clean water without scrubbing, and place it in cold milk or saliva. Bring the patient within 60 minutes for reimplantation.
              </p>
              <div className="text-[11px] font-semibold text-brand-teal">
                High success rate when reimplanted within the 1-hour window.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Casualty Bay Address & Coordinates */}
      <section className="py-12 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                Zero-Ramp Ambulance Entry
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                Casualty Entrance Location
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Our dedicated ambulance dock allows zero-level stretcher wheeling directly into the trauma resuscitation bay without stair obstacles:
              </p>
              <div className="p-4 bg-white/10 rounded-xl border border-white/15 text-xs text-white/90 space-y-1">
                <div className="font-bold text-brand-cyan">Address for Ambulance GPS:</div>
                <div>96, near Canara Bank, Aruna Nagar, Shanti Nagar, ETAH, U.P. (207001)</div>
                <div className="text-white/70">Phone: +91 97590 08704</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
              <a
                href="https://maps.google.com/?q=Dr.+Himanshu+Hospital+Aruna+Nagar+Etah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-brand-teal hover:bg-brand-deepteal text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                Open Google Maps Directions &rarr;
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-colors"
              >
                Campus Guide &amp; Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
