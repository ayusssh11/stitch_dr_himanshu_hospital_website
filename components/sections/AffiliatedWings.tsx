import React from "react";

export default function AffiliatedWings() {
  return (
    <section
      className="relative -mt-8 z-20 max-w-6xl mx-auto px-4 sm:px-6"
      data-purpose="associated-wings"
    >
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 md:p-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
          Affiliated Specialized Wings &amp; Partners
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border-2 border-brand-teal/40 bg-cyan-50/50 hover:bg-cyan-50 hover:border-brand-teal transition-all flex items-center justify-between gap-3 relative shadow-sm">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-brand-teal rounded-lg shadow-sm flex items-center justify-center text-white text-2xl flex-shrink-0">
                <i className="fa-solid fa-tooth"></i>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-slate-900">Dr. Himanshu MaxFax Center</h4>
                  <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-brand-teal text-white">
                    Flagship
                  </span>
                </div>
                <p className="text-xs text-slate-600">Premier Facial Trauma, Jaw &amp; Oral Surgery</p>
              </div>
            </div>
          </div>
          <div
            id="ayushman"
            className="scroll-mt-24 p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-emerald-50/50 hover:border-emerald-200 transition-all flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-emerald-600 text-2xl flex-shrink-0">
              <i className="fa-solid fa-id-card-clip"></i>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Ayushman Bharat PM-JAY</h4>
              <p className="text-xs text-slate-500">100% Cashless Government Empanelled</p>
            </div>
          </div>
          <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-blue-50/50 hover:border-blue-200 transition-all flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-blue-600 text-2xl flex-shrink-0">
              <i className="fa-solid fa-dna"></i>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">LifeCare Labs &amp; Trauma Unit</h4>
              <p className="text-xs text-slate-500">Round-the-clock Digital Diagnostics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
