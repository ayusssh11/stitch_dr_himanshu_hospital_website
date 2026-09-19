import React from "react";

export default function CriticalCareSection() {
  return (
    <section className="py-14 sm:py-20 bg-white" id="critical-icu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Visual: ICU Room Photo Embed (6 Cols) */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-brand-border relative bg-brand-navy">
              <img
                alt="State-of-the-art ICU room with advanced digital telemetry vital monitors and ventilator machine"
                className="w-full h-80 sm:h-96 lg:h-[400px] object-cover object-center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQpi0XXXFFzG9UrI6sLzxODivPz-QLslX9ARn3HiN9LjheAZ82T-HgGtMO6riUk5ZsCQcuX-FYMdMxL_m0ACUUTSZGxZmA7n81KT4ouKN-8nBFMzDlVHG5Hbc3QfQlTA1YIgqVm8F3-mm5I6iAD6Mic0knYj-CaLAU4e6zMuXbr3GayqXGQf4oicFXCeRVtNnvx-62rBZTkriIbwF0Ns2W22GiYD3OHxTMHvkOvnT6H61XPd55j3XIGA"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-darknavy/90 via-brand-darknavy/40 to-transparent p-4 sm:p-6 text-white">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand-cyan bg-brand-darknavy/80 px-2.5 py-0.5 rounded border border-brand-cyan/30 mb-1">
                  Level-III Advanced Telemetry
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Continuous Hemodynamic &amp; Arterial Monitoring
                </h4>
                <p className="text-xs text-white/80 mt-0.5">
                  High-precision medical ventilator and dedicated intensivist monitoring at every
                  bedside.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content: Critical Care Systems (6 Cols) */}
          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-deepteal">
                Life-Saving Critical Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight">
                Sterile Modular OT Suites &amp; 24x7 Ventilator ICU
              </h2>
              <p className="text-sm sm:text-base text-brand-navy/75 leading-relaxed">
                We bridge the critical gap in emergency medical infrastructure for Etah district,
                delivering tertiary-grade operating theatres and ventilator beds directly accessible
                to local families.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-brand-ice border border-brand-border">
                <div className="w-9 h-9 rounded-lg bg-brand-deepteal text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">air</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy">
                    Laminar Airflow &amp; Class-100 HEPA Filtration
                  </h4>
                  <p className="text-xs text-brand-navy/70 mt-0.5">
                    Vertical laminar airflow sweeps airborne microbes away from the surgical table,
                    enabling titanium maxillofacial plating with near-zero post-surgical sepsis risk.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-brand-ice border border-brand-border">
                <div className="w-9 h-9 rounded-lg bg-brand-deepteal text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">monitor_heart</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy">
                    Multichannel Vital Telemetry &amp; ABG Testing
                  </h4>
                  <p className="text-xs text-brand-navy/70 mt-0.5">
                    Real-time bedside measurement of arterial blood gas, cardiac rhythm, invasive
                    blood pressure, and carbon dioxide capnography.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-brand-ice border border-brand-border">
                <div className="w-9 h-9 rounded-lg bg-brand-deepteal text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">medication</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy">
                    Automated Syringe Pumps &amp; Defibrillators
                  </h4>
                  <p className="text-xs text-brand-navy/70 mt-0.5">
                    Precision micro-infusion for inotropic cardiovascular support and continuous
                    emergency resuscitation capability.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-deepteal text-white hover:bg-brand-navy text-xs font-bold transition-all shadow-xs"
                href="#consultation-form"
              >
                <span>Inquire About ICU &amp; OT Services</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
              <span className="text-xs text-brand-navy/60 font-semibold">
                Immediate bed reservation via casualty desk
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
