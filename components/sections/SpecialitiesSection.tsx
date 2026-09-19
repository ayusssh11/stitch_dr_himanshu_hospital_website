import React from "react";

export default function SpecialitiesSection() {
  return (
    <section
      className="py-20 bg-slate-50 border-t border-b border-slate-200/60"
      data-purpose="hospital-specialities"
      id="specialities"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 mb-12">
        <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
          Comprehensive Healthcare
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Our Specialities
        </h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
          Explore our wide range of surgical and medical services designed to provide precision
          diagnosis, gentle bedside care, and rapid rehabilitation.
        </p>
      </div>

      {/* 11 Specialty Cards Grid Matching Reference Structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-cyan-50 to-white rounded-xl p-5 text-center shadow-md border-2 border-brand-teal transition-all group relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-brand-teal text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider shadow-sm">
              <i className="fa-solid fa-award mr-1"></i> Flagship Super-Specialty
            </div>
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-brand-teal text-white flex items-center justify-center text-2xl shadow-sm transition-transform group-hover:scale-105">
              <i className="fa-solid fa-tooth"></i>
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-brand-navy group-hover:text-brand-teal leading-snug">
              1. Dental (Oral &amp; Maxillofacial)
            </h3>
            <p className="text-[11px] text-slate-600 mt-1 font-medium">
              Center of Excellence: Facial bone fractures, jaw alignment, TMJ, oral cancer screening &amp; advanced implants.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md border border-slate-100 hover:border-brand-teal transition-all group">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-cyan-50 group-hover:bg-brand-teal group-hover:text-white text-brand-teal flex items-center justify-center text-xl transition-colors">
              <i className="fa-solid fa-user-doctor"></i>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-brand-teal leading-snug">
              2. General Physician
            </h3>
            <p className="text-[10px] text-slate-400 mt-1">Internal medicine &amp; chronic care</p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md border border-slate-100 hover:border-brand-teal transition-all group">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-cyan-50 group-hover:bg-brand-teal group-hover:text-white text-brand-teal flex items-center justify-center text-xl transition-colors">
              <i className="fa-solid fa-head-side-mask"></i>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-brand-teal leading-snug">
              3. ENT Specialist
            </h3>
            <p className="text-[10px] text-slate-400 mt-1">Ear, nose, throat &amp; sinus</p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md border border-slate-100 hover:border-brand-teal transition-all group">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-cyan-50 group-hover:bg-brand-teal group-hover:text-white text-brand-teal flex items-center justify-center text-xl transition-colors">
              <i className="fa-solid fa-brain"></i>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-brand-teal leading-snug">
              4. Neuro Surgeon
            </h3>
            <p className="text-[10px] text-slate-400 mt-1">Brain &amp; spine trauma surgery</p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md border border-slate-100 hover:border-brand-teal transition-all group">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-cyan-50 group-hover:bg-brand-teal group-hover:text-white text-brand-teal flex items-center justify-center text-xl transition-colors">
              <i className="fa-solid fa-ribbon"></i>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-brand-teal leading-snug">
              5. Cancer Surgeon
            </h3>
            <p className="text-[10px] text-slate-400 mt-1">Surgical oncology &amp; tumors</p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md border border-slate-100 hover:border-brand-teal transition-all group">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-cyan-50 group-hover:bg-brand-teal group-hover:text-white text-brand-teal flex items-center justify-center text-xl transition-colors">
              <i className="fa-solid fa-person-pregnant"></i>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-brand-teal leading-snug">
              6. Gynaecologist
            </h3>
            <p className="text-[10px] text-slate-400 mt-1">Maternity, OBS &amp; laparoscopy</p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md border border-slate-100 hover:border-brand-teal transition-all group">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-cyan-50 group-hover:bg-brand-teal group-hover:text-white text-brand-teal flex items-center justify-center text-xl transition-colors">
              <i className="fa-solid fa-bed-pulse"></i>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-brand-teal leading-snug">
              7. Private Rooms
            </h3>
            <p className="text-[10px] text-slate-400 mt-1">Deluxe AC &amp; semi-private wards</p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md border border-slate-100 hover:border-brand-teal transition-all group">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-cyan-50 group-hover:bg-brand-teal group-hover:text-white text-brand-teal flex items-center justify-center text-xl transition-colors">
              <i className="fa-solid fa-laptop-medical"></i>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-brand-teal leading-snug">
              8. ICU (Intensive Care)
            </h3>
            <p className="text-[10px] text-slate-400 mt-1">Telemetry &amp; continuous monitoring</p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md border border-slate-100 hover:border-brand-teal transition-all group">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-cyan-50 group-hover:bg-brand-teal group-hover:text-white text-brand-teal flex items-center justify-center text-xl transition-colors">
              <i className="fa-solid fa-hospital"></i>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-brand-teal leading-snug">
              9. Modular OT
            </h3>
            <p className="text-[10px] text-slate-400 mt-1">Laminar airflow surgical suites</p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md border border-slate-100 hover:border-brand-teal transition-all group">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-cyan-50 group-hover:bg-brand-teal group-hover:text-white text-brand-teal flex items-center justify-center text-xl transition-colors">
              <i className="fa-solid fa-lungs"></i>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-brand-teal leading-snug">
              10. Ventilator Support
            </h3>
            <p className="text-[10px] text-slate-400 mt-1">Advanced respiratory life support</p>
          </div>

          <div className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-r from-emerald-50 to-white rounded-xl p-5 text-center shadow-sm hover:shadow-md border border-emerald-200 hover:border-emerald-500 transition-all group">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-emerald-100 group-hover:bg-emerald-600 group-hover:text-white text-emerald-700 flex items-center justify-center text-xl transition-colors">
              <i className="fa-solid fa-truck-medical"></i>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-emerald-700 leading-snug">
              11. 24x7 Emergency &amp; Trauma Care
            </h3>
            <p className="text-[11px] text-slate-500 mt-1">
              Immediate golden hour casualty, trauma surgeons &amp; Ayushman PM-JAY cashless wing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
