import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import MaxFaxSuperSpecialty from "@/components/sections/MaxFaxSuperSpecialty";
import RecoveryJourneys from "@/components/sections/RecoveryJourneys";

export const metadata: Metadata = {
  title: "Maxillofacial Super-Specialty | Dr. Himanshu Upadhyay's Face Hospital Etah",
  description:
    "Western UP's apex center for Oral & Maxillofacial surgery, facial bone fractures, orthognathic jaw realignment, TMJ ankylosis, oral cancer, and dental implants in Etah.",
};

export default function MaxillofacialPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="Center of Excellence • Dr. Himanshu Upadhyay's Face Hospital"
        title="Oral & Maxillofacial Super-Specialty"
        highlightText="Reconstruction & Trauma"
        description="Pioneering advanced facial trauma reconstruction, titanium osteosynthesis, corrective orthognathic jaw surgeries, TMJ disorders, and dental implants with microscopic precision in Western U.P."
        breadcrumb={[{ label: "Maxillofacial Wing" }]}
      />

      {/* Flagship MaxFax SuperSpecialty Component */}
      <MaxFaxSuperSpecialty />

      {/* Detailed Clinical Capabilities Section */}
      <section className="py-16 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              Sub-Specialty Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              Surgical Focus Areas Under Dr. Himanshu Upadhyay
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
              Handling simple to hyper-complex cranio-maxillofacial cases that previously required long travel to metro centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-teal flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[26px]">medical_services</span>
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">
                Mandibular &amp; Maxillary Fractures
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Emergency anatomical reduction and mini-plate fixation using titanium screws under AO CMF principles. Restoring proper occlusion, biting force, and facial symmetry.
              </p>
              <div className="text-[11px] font-semibold text-brand-deepteal">
                Key Protocol: Immediate Door-to-OT stabilization within Golden Hour
              </div>
            </div>

            {/* Box 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-teal flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[26px]">face</span>
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">
                Orthognathic (Corrective Jaw) Surgery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Surgical correction of severe underbites, protruding jaws, facial asymmetry, and sleep apnea via BSSO (bilateral sagittal split osteotomy) and Le Fort I osteotomies.
              </p>
              <div className="text-[11px] font-semibold text-brand-deepteal">
                Key Protocol: Pre-surgical digital planning with aesthetic occlusion
              </div>
            </div>

            {/* Box 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-teal flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[26px]">handyman</span>
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">
                TMJ Ankylosis &amp; Jaw Lock Release
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Treating restricted mouth opening caused by trauma, arthritis, or pediatric fusion. Surgical interpositional arthroplasty to restore normal 35-40mm mouth opening.
              </p>
              <div className="text-[11px] font-semibold text-brand-deepteal">
                Key Protocol: Aggressive post-op physiotherapy and costochondral grafts
              </div>
            </div>

            {/* Box 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-teal flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[26px]">dentistry</span>
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">
                Basal &amp; Zygomatic Dental Implants
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Permanent fixed teeth even in severe bone resorption where conventional implants fail. Cortical bone anchoring without prolonged sinus lifts or painful bone grafts.
              </p>
              <div className="text-[11px] font-semibold text-brand-deepteal">
                Key Protocol: Immediate functional loading within 72 hours
              </div>
            </div>

            {/* Box 5 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-teal flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[26px]">coronavirus</span>
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">
                Oral Cancer &amp; Tumor Excision
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Early detection, incisional biopsy, wide surgical excision, and neck dissection for lesions of buccal mucosa, tongue, and palate, followed by reconstruction.
              </p>
              <div className="text-[11px] font-semibold text-brand-deepteal">
                Key Protocol: Clear oncological margins with functional restoration
              </div>
            </div>

            {/* Box 6 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-teal flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[26px]">healing</span>
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">
                Facial Soft Tissue &amp; Scar Revision
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Micro-suturing of acute facial lacerations, parotid duct repair, facial nerve branch protection, and cosmetic revision of post-traumatic facial scars.
              </p>
              <div className="text-[11px] font-semibold text-brand-deepteal">
                Key Protocol: Aesthetic suture lines aligned with natural tension planes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Recovery Stories */}
      <RecoveryJourneys />

      {/* Bottom CTA */}
      <section className="py-12 bg-gradient-to-r from-brand-navy to-brand-darknavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Consult With Dr. Himanshu Upadhyay
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              OPD Timings: Monday to Sunday (9:00 AM - 8:00 PM). Emergency trauma admissions 24x7.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/appointment?doctor=dr-himanshu"
              className="px-5 py-2.5 rounded-xl bg-brand-teal hover:bg-brand-deepteal text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Book MaxFax Consultation
            </Link>
            <a
              href="tel:+919759008704"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              24x7 Hotline: +91 97590 08704
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
