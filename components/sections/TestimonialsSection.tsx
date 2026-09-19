import React from "react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white" data-purpose="patient-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Patients Say
          </h2>
        </div>

        {/* 3 Testimonial Cards mirroring layout in reference image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between relative shadow-sm">
            <div className="text-brand-teal/20 text-4xl font-serif absolute top-4 right-5">
              <i className="fa-solid fa-quote-right"></i>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              &quot;My brother had a severe facial bone fracture after a road accident. Dr. Himanshu
              performed reconstructive surgery with incredible precision. There are no scars, and
              the recovery was completely smooth. Best maxillofacial center in the entire
              region.&quot;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
              <div className="w-10 h-10 rounded-full bg-cyan-100 text-brand-teal font-bold flex items-center justify-center text-xs">
                GK
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Gaurav Kashyap</h4>
                <span className="text-[11px] text-slate-500">
                  <i className="fa-solid fa-location-dot text-xs text-rose-400"></i> Etah
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between relative shadow-sm">
            <div className="text-brand-teal/20 text-4xl font-serif absolute top-4 right-5">
              <i className="fa-solid fa-quote-right"></i>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              &quot;We were admitted under the Ayushman Bharat card for my mother&apos;s surgery. We
              were treated with absolute dignity and zero charges were asked. The nursing staff and
              doctor guidance were extraordinary. Truly a blessing for common citizens.&quot;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs">
                AS
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Anuj Shakya</h4>
                <span className="text-[11px] text-slate-500">
                  <i className="fa-solid fa-location-dot text-xs text-rose-400"></i> Etah
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between relative shadow-sm">
            <div className="text-brand-teal/20 text-4xl font-serif absolute top-4 right-5">
              <i className="fa-solid fa-quote-right"></i>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              &quot;I had a great experience in their ICU and inpatient wing. The medical hygiene is
              comparable to top metropolitan hospitals in Delhi or Agra. The staff is polite,
              available round the clock, and the overall process was prompt.&quot;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">
                CG
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Chitransh Gupta</h4>
                <span className="text-[11px] text-slate-500">
                  <i className="fa-solid fa-location-dot text-xs text-rose-400"></i> Etah
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
