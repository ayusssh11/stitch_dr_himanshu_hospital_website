"use client";

import React, { useState } from "react";

type TriageTab = "trauma" | "icu" | "opd" | "ayushman";

export default function TriageNavigator() {
  const [activeTab, setActiveTab] = useState<TriageTab>("trauma");

  return (
    <section className="bg-white py-10 border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-ice rounded-2xl p-6 sm:p-8 border border-brand-border shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-deepteal">
                Interactive Intake Console
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy">
                Rapid Care Navigator &amp; Clinical Protocols
              </h2>
              <p className="text-xs sm:text-sm text-brand-navy/70 mt-1">
                Instant specialty routing, on-duty specialist availability, and immediate hospital
                admission pathways:
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-brand-border text-xs font-bold text-brand-deepteal shadow-xs self-start lg:self-auto">
              <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
              Casualty Desk: 24 Hours Open • Aruna Nagar Gate
            </div>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6" role="tablist">
            <button
              className={`py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm text-center transition-all ${
                activeTab === "trauma"
                  ? "bg-brand-deepteal text-white shadow-xs"
                  : "bg-white text-brand-navy/80 hover:bg-brand-lightcyan border border-brand-border"
              }`}
              onClick={() => setActiveTab("trauma")}
              type="button"
            >
              Facial / Jaw Trauma
            </button>
            <button
              className={`py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm text-center transition-all ${
                activeTab === "icu"
                  ? "bg-brand-deepteal text-white shadow-xs"
                  : "bg-white text-brand-navy/80 hover:bg-brand-lightcyan border border-brand-border"
              }`}
              onClick={() => setActiveTab("icu")}
              type="button"
            >
              Critical Care &amp; ICU
            </button>
            <button
              className={`py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm text-center transition-all ${
                activeTab === "opd"
                  ? "bg-brand-deepteal text-white shadow-xs"
                  : "bg-white text-brand-navy/80 hover:bg-brand-lightcyan border border-brand-border"
              }`}
              onClick={() => setActiveTab("opd")}
              type="button"
            >
              Multispecialty OPD
            </button>
            <button
              className={`py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm text-center transition-all ${
                activeTab === "ayushman"
                  ? "bg-brand-deepteal text-white shadow-xs"
                  : "bg-white text-brand-navy/80 hover:bg-brand-lightcyan border border-brand-border"
              }`}
              onClick={() => setActiveTab("ayushman")}
              type="button"
            >
              Ayushman PM-JAY
            </button>
          </div>

          {/* Tab Panels */}
          {activeTab === "trauma" && (
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-brand-border shadow-xs animate-in fade-in duration-150">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-white bg-brand-navy px-2.5 py-0.5 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan beacon-pulse"></span>
                      Priority 1 Trauma Triage
                    </span>
                    <span className="text-xs text-brand-navy/60 font-medium">
                      Door-to-OT Window: Under 20 mins
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-navy">
                    Mandible, Zygomatic, Orbital &amp; Le Fort Craniofacial Fixation
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy/70 leading-relaxed">
                    24/7 dedicated Maxillofacial surgical crew on immediate call. Pre-anesthetic
                    assessment, airway protection, and titanium micro-plating deployed without waiting
                    delays.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <a
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-brand-navy text-white hover:bg-brand-darknavy font-bold text-xs transition-colors"
                    href="tel:+919759008704"
                  >
                    <span className="material-symbols-outlined text-[16px] text-brand-cyan">
                      call
                    </span>
                    Direct OT Dispatch
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "icu" && (
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-brand-border shadow-xs animate-in fade-in duration-150">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-deepteal bg-brand-lightcyan px-2.5 py-0.5 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Level-III
                      Intensive Care Unit
                    </span>
                    <span className="text-xs text-brand-navy/60 font-medium">
                      Intensivist on Duty 24/7
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-navy">
                    Invasive Mechanical Ventilation &amp; Continuous Hemodynamic Telemetry
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy/70 leading-relaxed">
                    Dedicated critical care beds featuring high-end invasive ventilators, automated
                    syringe pumps, multiparameter cardiac monitors, bedside blood-gas analysis, and
                    1:1 specialized ICU nursing.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <a
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-brand-deepteal text-white hover:bg-brand-navy font-bold text-xs transition-colors"
                    href="tel:+919759008704"
                  >
                    <span className="material-symbols-outlined text-[16px]">local_hospital</span>
                    ICU Admissions Desk
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "opd" && (
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-brand-border shadow-xs animate-in fade-in duration-150">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-teal bg-brand-lightcyan px-2.5 py-0.5 rounded">
                      OPD Consultation Wings
                    </span>
                    <span className="text-xs text-brand-navy/60 font-medium">
                      Mon – Sat: 9:00 AM to 8:00 PM
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-navy">
                    Same-Day Multispecialty Evaluations &amp; Diagnostic Workups
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy/70 leading-relaxed">
                    Fast token registration for Maxillofacial, General Medicine, ENT
                    micro-endoscopy, Gynaecology, Oncology, and Neuro-trauma consultation desks.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <a
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-brand-deepteal text-white hover:bg-brand-navy font-bold text-xs transition-colors"
                    href="#consultation-form"
                  >
                    <span className="material-symbols-outlined text-[16px]">event_available</span>
                    Select OPD Token
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ayushman" && (
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-brand-border shadow-xs animate-in fade-in duration-150">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded">
                      Govt Scheme Empaneled
                    </span>
                    <span className="text-xs text-brand-navy/60 font-medium">
                      Verification in ~15 mins
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-navy">
                    100% Cashless Inpatient &amp; Surgical Coverage under PM-JAY
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy/70 leading-relaxed">
                    Bring your Ayushman Golden Card along with Aadhaar card. Full surgery, modular
                    OT, bed charges, and recovery medicines are processed with zero out-of-pocket
                    costs.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <a
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 font-bold text-xs transition-colors"
                    href="#ayushman-desk"
                  >
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    Check Scheme Coverage
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
