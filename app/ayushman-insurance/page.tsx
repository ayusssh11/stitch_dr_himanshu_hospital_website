import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import AyushmanDesk from "@/components/sections/AyushmanDesk";

export const metadata: Metadata = {
  title: "Ayushman Bharat PM-JAY & Cashless Insurance | Dr. Himanshu Hospital Etah",
  description:
    "100% Cashless treatment under Ayushman Bharat PM-JAY and all major private TPA insurance networks at Dr. Himanshu Hospital, Aruna Nagar, Etah.",
};

const tpaPartners = [
  { name: "Star Health & Allied Insurance", type: "Private Health Insurance" },
  { name: "HDFC ERGO General Insurance", type: "Private Health Insurance" },
  { name: "ICICI Lombard Health Care", type: "Private Health Insurance" },
  { name: "Care Health Insurance", type: "Private Health Insurance" },
  { name: "Bajaj Allianz General Insurance", type: "Private Health Insurance" },
  { name: "Niva Bupa Health Insurance", type: "Private Health Insurance" },
  { name: "Medi Assist Insurance TPA", type: "Third Party Administrator" },
  { name: "Vidal Health TPA", type: "Third Party Administrator" },
  { name: "Paramount Health Services TPA", type: "Third Party Administrator" },
  { name: "Heritage Health Insurance TPA", type: "Third Party Administrator" },
  { name: "Raksha Health Insurance TPA", type: "Third Party Administrator" },
  { name: "MDIndia Health Insurance TPA", type: "Third Party Administrator" },
];

export default function AyushmanInsurancePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="Government & Private Cashless Empanelment"
        title="100% Cashless Treatment Under"
        highlightText="Ayushman Bharat (PM-JAY) & TPAs"
        description="Providing zero-cost surgical and critical hospitalization to eligible Ayushman cardholders and cashless policyholders across Western Uttar Pradesh."
        breadcrumb={[{ label: "Ayushman & Insurance" }]}
      />

      {/* Flagship AyushmanDesk Component */}
      <AyushmanDesk />

      {/* Step-by-Step Cashless Process */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
              Transparent Admission Flow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              How Cashless Admission Works at Dr. Himanshu Hospital
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Our dedicated on-site insurance desk ensures zero paperwork hassles for the patient and family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 relative">
              <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center mb-3">
                01
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Card Verification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Present your Ayushman Golden Card (or TPA Health Card) along with Aadhaar Card at our ground-floor Insurance Helpdesk.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cyan-50/60 border border-cyan-200/80 relative">
              <span className="w-8 h-8 rounded-full bg-brand-teal text-white font-extrabold text-xs flex items-center justify-center mb-3">
                02
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Clinical Evaluation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Senior specialist examines the patient, orders requisite diagnostics (X-ray, CT, blood work), and establishes the treatment package.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200/80 relative">
              <span className="w-8 h-8 rounded-full bg-brand-deepteal text-white font-extrabold text-xs flex items-center justify-center mb-3">
                03
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">E-Preauthorization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our Ayushman Mitra uploads clinical notes to the PM-JAY / TPA portal for instant cashless approval within 1-2 hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 relative">
              <span className="w-8 h-8 rounded-full bg-brand-navy text-white font-extrabold text-xs flex items-center justify-center mb-3">
                04
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Zero-Cash Hospitalization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Surgery, Modular OT, ICU stay, medications, nursing, and meals are covered 100% free with zero out-of-pocket billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empaneled Private TPA Insurance Networks Grid */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              Corporate &amp; Private Cashless Networks
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              Supported Health Insurance &amp; TPA Partners
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              We process cashless pre-approvals for all major corporate and private health insurance policies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {tpaPartners.map((partner, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-brand-teal transition-all flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                    check_circle
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {partner.type}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-brand-navy">
                  {partner.name}
                </h4>
                <div className="text-[11px] text-brand-teal font-semibold mt-2">
                  Cashless Desk Verified &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory Documents Checklist */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-ice rounded-3xl p-6 sm:p-10 border border-brand-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                Patient Checklist
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Documents Required For Cashless Admission
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Please ensure you bring the following original documents or clear copies to avoid any admission delays at our Ayushman &amp; TPA counter:
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-brand-navy font-semibold">
                  <span className="material-symbols-outlined text-emerald-700 text-[18px]">
                    task_alt
                  </span>
                  <span>Ayushman Bharat Golden Card (or PM-JAY Letter)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-brand-navy font-semibold">
                  <span className="material-symbols-outlined text-emerald-700 text-[18px]">
                    task_alt
                  </span>
                  <span>Patient&apos;s Original Aadhaar Card</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-brand-navy font-semibold">
                  <span className="material-symbols-outlined text-emerald-700 text-[18px]">
                    task_alt
                  </span>
                  <span>Ration Card (NFSA) / Family ID matching the Golden Card</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-brand-navy font-semibold">
                  <span className="material-symbols-outlined text-emerald-700 text-[18px]">
                    task_alt
                  </span>
                  <span>For Private TPA: Valid Insurance Policy Card &amp; Employee ID</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-brand-border shadow-md space-y-4">
              <h4 className="text-base font-extrabold text-brand-navy flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-teal text-[20px]">
                  support_agent
                </span>
                <span>Dedicated Ayushman Mitra Helpdesk</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Not sure if your family is eligible or how to make an Ayushman card? Our hospital insurance team can verify your eligibility online on the PM-JAY portal right at our reception.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Direct Insurance Desk Contact:
                </div>
                <div className="text-sm font-extrabold text-brand-deepteal">
                  +91 97590 08704
                </div>
                <div className="text-[11px] text-slate-500">
                  Email: drhimanshumaxfax@gmail.com
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <Link
                  href="/appointment"
                  className="px-4 py-2 rounded-xl bg-brand-deepteal text-white text-xs font-bold hover:bg-brand-navy transition-colors"
                >
                  Book with Ayushman
                </Link>
                <a
                  href="tel:+919759008704"
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors"
                >
                  Verify Coverage Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
