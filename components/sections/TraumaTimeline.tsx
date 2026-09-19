import React from "react";

export default function TraumaTimeline() {
  return (
    <section className="py-14 sm:py-20 bg-brand-ice border-y border-brand-border/60" id="trauma-protocol">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-deepteal">
              Immediate Golden-Hour Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight mt-1">
              Synchronized Emergency Trauma Resuscitation Flow
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-navy/70 max-w-md">
            Every minute matters in high-impact road traffic accidents and acute poly-trauma. Our
            zero-delay timeline coordinates care before the ambulance arrives:
          </p>
        </div>

        {/* 4 Steps Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs">
                  01
                </span>
                <span className="text-[10px] font-bold uppercase bg-brand-lightcyan text-brand-deepteal px-2 py-0.5 rounded">
                  &lt; 3 Minutes
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy">Arrival &amp; Immediate Triage</h3>
              <p className="text-xs text-brand-navy/70 leading-relaxed">
                Direct vehicle-to-casualty transit via ramp. Rapid ABCDE assessment, cervical collar
                immobilization, airway security, and hemorrhage control.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-brand-border/60 text-[11px] text-brand-deepteal font-semibold">
              ✓ Cervical Spine Protection
              <br />✓ Oxygenation &amp; Dual IV Access
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-brand-deepteal text-white flex items-center justify-center font-bold text-xs">
                  02
                </span>
                <span className="text-[10px] font-bold uppercase bg-brand-lightcyan text-brand-deepteal px-2 py-0.5 rounded">
                  STAT Tests
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy">Bedside Ultrasound &amp; Imaging</h3>
              <p className="text-xs text-brand-navy/70 leading-relaxed">
                Point-of-care eFAST ultrasound for internal bleeding, immediate maxillofacial
                digital radiographs, and rapid arterial blood analysis.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-brand-border/60 text-[11px] text-brand-deepteal font-semibold">
              ✓ Bone Fracture Mapping
              <br />✓ Emergency Blood Crossmatch
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-xs">
                  03
                </span>
                <span className="text-[10px] font-bold uppercase bg-brand-lightcyan text-brand-teal px-2 py-0.5 rounded">
                  Zero Delay
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                Direct Modular OT / ICU Access
              </h3>
              <p className="text-xs text-brand-navy/70 leading-relaxed">
                Direct sterile elevator corridor straight to laminar airflow OT for jaw
                reconstruction, or Level-III ventilator bay for neuro-trauma stabilization.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-brand-border/60 text-[11px] text-brand-deepteal font-semibold">
              ✓ Titanium Plating Ready
              <br />✓ Class-100 Sterile Field
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs">
                  04
                </span>
                <span className="text-[10px] font-bold uppercase bg-brand-ice text-brand-navy px-2 py-0.5 rounded">
                  24/7 Monitoring
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                Intensivist-Led Post-Op Recovery
              </h3>
              <p className="text-xs text-brand-navy/70 leading-relaxed">
                Continuous telemetry vital tracking, pain management, nutritional support, and
                monitored surgical wound debridement protocols.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-brand-border/60 text-[11px] text-brand-deepteal font-semibold">
              ✓ Zero-Infection Nursing Regimen
              <br />✓ Hourly Family Condition Updates
            </div>
          </div>
        </div>

        {/* Emergency Phone Banner Strip */}
        <div className="bg-gradient-to-r from-brand-darknavy to-brand-navy text-white rounded-2xl p-5 sm:p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 border border-brand-cyan/30">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-brand-deepteal/40 border border-brand-cyan/40 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px] text-brand-cyan">
                emergency
              </span>
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold text-white">
                24-Hour Trauma &amp; Ambulance Hotline: +91 97590 08704
              </div>
              <p className="text-xs text-white/90">
                Casualty dispatchers mobilize the surgical trauma team prior to your ambulance
                arrival at Aruna Nagar.
              </p>
            </div>
          </div>
          <a
            className="px-5 py-2.5 rounded-lg bg-brand-deepteal text-white hover:bg-white hover:text-brand-navy font-extrabold text-xs sm:text-sm transition-colors shrink-0 shadow-xs"
            href="tel:+919759008704"
          >
            Call Ambulance Bay
          </a>
        </div>
      </div>
    </section>
  );
}
