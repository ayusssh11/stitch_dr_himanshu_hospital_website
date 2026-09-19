import React from "react";

export default function AyushmanDesk() {
  return (
    <section className="py-14 sm:py-20 bg-white" id="ayushman-desk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Scheme Details (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Government Empaneled Super-Specialty Hospital
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight">
              Zero Out-of-Pocket Hospitalization for PM-JAY Golden Card Holders
            </h2>
            <p className="text-sm sm:text-base text-brand-navy/75 leading-relaxed">
              Under Ayushman Bharat (PM-JAY), eligible families are entitled to free tertiary
              inpatient treatment, trauma surgeries, maxillofacial bone plating, and ICU critical
              care up to <strong className="text-brand-navy">₹5,00,000 per family per year</strong>{" "}
              completely cashless.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="bg-brand-ice p-3.5 rounded-xl border border-brand-border flex items-start gap-2.5">
                <span className="material-symbols-outlined text-emerald-700 text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="text-xs">
                  <strong className="text-brand-navy block font-bold text-[13px]">
                    100% Cashless Surgeries
                  </strong>
                  <span className="text-brand-navy/70">
                    Covers OT charges, surgeon fees, implants, and medicines.
                  </span>
                </div>
              </div>

              <div className="bg-brand-ice p-3.5 rounded-xl border border-brand-border flex items-start gap-2.5">
                <span className="material-symbols-outlined text-emerald-700 text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="text-xs">
                  <strong className="text-brand-navy block font-bold text-[13px]">
                    On-Site Ayushman Helpdesk
                  </strong>
                  <span className="text-brand-navy/70">
                    Instant biometric Aadhaar authorization and quick admissions.
                  </span>
                </div>
              </div>

              <div className="bg-brand-ice p-3.5 rounded-xl border border-brand-border flex items-start gap-2.5">
                <span className="material-symbols-outlined text-emerald-700 text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="text-xs">
                  <strong className="text-brand-navy block font-bold text-[13px]">
                    No Hidden Fees
                  </strong>
                  <span className="text-brand-navy/70">
                    Direct government portal approvals with complete billing transparency.
                  </span>
                </div>
              </div>

              <div className="bg-brand-ice p-3.5 rounded-xl border border-brand-border flex items-start gap-2.5">
                <span className="material-symbols-outlined text-emerald-700 text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="text-xs">
                  <strong className="text-brand-navy block font-bold text-[13px]">
                    Discharge Medications
                  </strong>
                  <span className="text-brand-navy/70">
                    Prescribed recovery medications included under the scheme package.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-brand-navy/80 font-medium">
              <span className="text-brand-navy font-bold">Documents Needed:</span>
              <span className="bg-white px-2.5 py-1 rounded border border-brand-border font-semibold">
                Ayushman Golden Card
              </span>
              <span className="bg-white px-2.5 py-1 rounded border border-brand-border font-semibold">
                Aadhaar Card
              </span>
              <span className="bg-white px-2.5 py-1 rounded border border-brand-border font-semibold">
                Ration Card / PM Letter
              </span>
            </div>
          </div>

          {/* Right TPA & Private Insurance Cards (5 Cols) */}
          <div className="lg:col-span-5 bg-brand-ice rounded-2xl p-6 border-2 border-brand-border shadow-sm space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-deepteal">
                Private Health Insurance
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy mt-0.5">
                Empaneled TPAs &amp; Corporate Networks
              </h3>
              <p className="text-xs text-brand-navy/70 mt-1">
                Pre-authorization clearance desk facilitates hassle-free claim settlements.
              </p>
            </div>

            {/* TPA Badges Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-brand-navy text-center">
              <div className="bg-white p-2.5 rounded-lg border border-brand-border shadow-2xs">
                Star Health
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-brand-border shadow-2xs">
                HDFC ERGO
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-brand-border shadow-2xs">
                ICICI Lombard
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-brand-border shadow-2xs">
                Care Health
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-brand-border shadow-2xs">
                Medi Assist TPA
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-brand-border shadow-2xs">
                Bajaj Allianz
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-brand-border shadow-2xs">
                Vidal Health
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-brand-border shadow-2xs">
                Paramount TPA
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-brand-border flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-brand-deepteal text-[22px]">
                  support_agent
                </span>
                <div>
                  <span className="block text-xs font-bold text-brand-navy">
                    Insurance Coordinator
                  </span>
                  <span className="text-[11px] text-brand-navy/70">+91 97590 08704 (Ext. 2)</span>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-brand-lightcyan text-brand-deepteal">
                24/7 Desk
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
