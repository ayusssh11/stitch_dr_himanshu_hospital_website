import React from "react";

export default function WhyChooseSection() {
  return (
    <section
      className="py-20 bg-slate-50 border-t border-slate-200/60"
      data-purpose="hospital-pillars"
      id="why-choose"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Dr. Himanshu Hospital, Etah?
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            We offer an integrated range of services to ensure you get the safest surgical
            interventions and compassionate post-operative recovery.
          </p>
        </div>

        {/* 4 Horizontal Pillars matching reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all text-center group">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-cyan-50 group-hover:bg-brand-teal text-brand-teal group-hover:text-white flex items-center justify-center text-2xl transition-colors">
              <i className="fa-solid fa-certificate"></i>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">NABH Protocol Standards</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Strict sterilization compliance, patient safety checklists, and accredited surgical
              protocol monitoring.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all text-center group">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-cyan-50 group-hover:bg-brand-teal text-brand-teal group-hover:text-white flex items-center justify-center text-2xl transition-colors">
              <i className="fa-solid fa-x-ray"></i>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Advanced Diagnostics</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Digital X-Ray, advanced ultrasonography, comprehensive 24/7 biochemistry pathology, and
              rapid reporting.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all text-center group">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-cyan-50 group-hover:bg-brand-teal text-brand-teal group-hover:text-white flex items-center justify-center text-2xl transition-colors">
              <i className="fa-solid fa-hospital"></i>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Modern Infrastructure</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Laminar airflow modular OTs, multi-channel telemetry monitors, ventilator support, and
              sterile recovery cubicles.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all text-center group">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-cyan-50 group-hover:bg-brand-teal text-brand-teal group-hover:text-white flex items-center justify-center text-2xl transition-colors">
              <i className="fa-solid fa-truck-fast"></i>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">24/7 Emergency &amp; Trauma</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Always-on casualty doctors, fully equipped ambulance, blood bank tie-up, and emergency
              surgical readiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
