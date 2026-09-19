import React from "react";

export default function FacilitiesSection() {
  return (
    <section className="py-14 sm:py-20 bg-brand-ice border-y border-brand-border/60" id="facilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-deepteal">
            Multidisciplinary Hospital Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight mt-1">
            11 Accredited Specialty &amp; Critical Care Facilities
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/75 mt-2">
            Fully integrated infrastructure designed for continuous treatment from outpatient
            consultations to surgical intensive care under one hospital campus.
          </p>
        </div>

        {/* 11 Facilities Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* 1. Dental (Maxillofacial) */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-xs hover:border-brand-teal transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-brand-lightcyan text-brand-deepteal flex items-center justify-center font-bold text-xs">
                  01
                </span>
                <span className="text-[10px] uppercase font-bold text-brand-teal bg-brand-lightcyan px-2 py-0.5 rounded">
                  Super-Specialty
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                Dental &amp; Maxillofacial Surgery
              </h3>
              <p className="text-xs text-brand-navy/75 leading-relaxed">
                Oral trauma, facial fractures, orthognathic alignment, root canal treatments, smile
                restorations, impacted wisdom molars, and immediate dental implants.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-brand-border/60 text-[11px] font-semibold text-brand-deepteal flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">check_circle</span> Led by
              Dr. Himanshu (MDS)
            </div>
          </div>

          {/* 2. General Physician */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-xs hover:border-brand-teal transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-brand-lightcyan text-brand-deepteal flex items-center justify-center font-bold text-xs">
                  02
                </span>
                <span className="text-[10px] uppercase font-bold text-brand-navy/70 bg-gray-100 px-2 py-0.5 rounded">
                  Daily OPD
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                General Physician &amp; Internal Medicine
              </h3>
              <p className="text-xs text-brand-navy/75 leading-relaxed">
                Comprehensive treatment for hypertension, diabetes, viral fevers, sepsis, chronic
                metabolic disorders, cardiovascular management, and preventative health.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-brand-border/60 text-[11px] font-semibold text-brand-deepteal flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">check_circle</span> Complete
              Pathology Supported
            </div>
          </div>

          {/* 3. ENT */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-xs hover:border-brand-teal transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-brand-lightcyan text-brand-deepteal flex items-center justify-center font-bold text-xs">
                  03
                </span>
                <span className="text-[10px] uppercase font-bold text-brand-navy/70 bg-gray-100 px-2 py-0.5 rounded">
                  Specialist OPD
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy">ENT (Ear, Nose &amp; Throat)</h3>
              <p className="text-xs text-brand-navy/75 leading-relaxed">
                Diagnostic micro-endoscopy, tympanoplasty, sinusitis workups, nasal polyp removal,
                foreign body extraction, and hearing evaluation services.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-brand-border/60 text-[11px] font-semibold text-brand-deepteal flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">check_circle</span> Endoscopic
              Treatment Suites
            </div>
          </div>

          {/* 4. Neuro Surgeon */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-xs hover:border-brand-teal transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-brand-lightcyan text-brand-deepteal flex items-center justify-center font-bold text-xs">
                  04
                </span>
                <span className="text-[10px] uppercase font-bold text-white bg-brand-navy px-2 py-0.5 rounded">
                  Emergency Call
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy">Neuro Surgeon &amp; Spine Care</h3>
              <p className="text-xs text-brand-navy/75 leading-relaxed">
                Critical head injury triage, skull fractures, epidural/subdural hematoma screening,
                spinal trauma management, and rapid neurological rehabilitation.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-brand-border/60 text-[11px] font-semibold text-brand-deepteal flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">check_circle</span> 24/7
              Cranial Trauma Triage
            </div>
          </div>

          {/* 5. Cancer Surgeon */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-xs hover:border-brand-teal transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-brand-lightcyan text-brand-deepteal flex items-center justify-center font-bold text-xs">
                  05
                </span>
                <span className="text-[10px] uppercase font-bold text-brand-navy/70 bg-gray-100 px-2 py-0.5 rounded">
                  Surgical Unit
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                Cancer Surgeon (Surgical Oncology)
              </h3>
              <p className="text-xs text-brand-navy/75 leading-relaxed">
                Surgical oncology interventions for oral cancers, head and neck tumors, suspicious
                tissue growths, biopsies, and planned oncological staging.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-brand-border/60 text-[11px] font-semibold text-brand-deepteal flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">check_circle</span> Biopsy
              &amp; Histopathology Desk
            </div>
          </div>

          {/* 6. Gynaecologist */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-xs hover:border-brand-teal transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-brand-lightcyan text-brand-deepteal flex items-center justify-center font-bold text-xs">
                  06
                </span>
                <span className="text-[10px] uppercase font-bold text-brand-navy/70 bg-gray-100 px-2 py-0.5 rounded">
                  Maternal Health
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy">Gynaecologist &amp; Obstetrics</h3>
              <p className="text-xs text-brand-navy/75 leading-relaxed">
                Antenatal care, high-risk pregnancy monitoring, painless deliveries, emergency
                Caesarean sections, laparoscopic surgery, and infertility consultations.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-brand-border/60 text-[11px] font-semibold text-brand-deepteal flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">check_circle</span> Modern
              Labor &amp; Recovery Units
            </div>
          </div>

          {/* 7. Private Rooms */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-xs hover:border-brand-teal transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-brand-lightcyan text-brand-deepteal flex items-center justify-center font-bold text-xs">
                  07
                </span>
                <span className="text-[10px] uppercase font-bold text-brand-navy/70 bg-gray-100 px-2 py-0.5 rounded">
                  Inpatient
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy">Private &amp; Deluxe AC Rooms</h3>
              <p className="text-xs text-brand-navy/75 leading-relaxed">
                Spacious, sanitized recovery suites with dedicated caregiver seating, patient
                nurse-call button, attached bathrooms, and calm healing atmosphere.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-brand-border/60 text-[11px] font-semibold text-brand-deepteal flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">check_circle</span>{" "}
              Patient-Centered Amenities
            </div>
          </div>

          {/* 8. Intensive Care Unit (ICU) */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-xs hover:border-brand-teal transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-brand-lightcyan text-brand-deepteal flex items-center justify-center font-bold text-xs">
                  08
                </span>
                <span className="text-[10px] uppercase font-bold text-brand-deepteal bg-brand-lightcyan px-2 py-0.5 rounded">
                  Level-III Care
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy">Intensive Care Unit (ICU)</h3>
              <p className="text-xs text-brand-navy/75 leading-relaxed">
                High-dependency critical care with multi-channel vital monitors, centralized oxygen
                pipeline, defibrillators, and 24-hour doctor coverage.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-brand-border/60 text-[11px] font-semibold text-brand-deepteal flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">check_circle</span> 1:1
              Critical Care Nursing
            </div>
          </div>

          {/* 9. Modular OT */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-xs hover:border-brand-teal transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-brand-lightcyan text-brand-deepteal flex items-center justify-center font-bold text-xs">
                  09
                </span>
                <span className="text-[10px] uppercase font-bold text-brand-teal bg-brand-lightcyan px-2 py-0.5 rounded">
                  Class 100
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                Modular Operation Theatres (OT)
              </h3>
              <p className="text-xs text-brand-navy/75 leading-relaxed">
                Zero-infection laminar airflow HEPA filtered operating suites customized for
                microsurgical maxillofacial, orthognathic, and emergency procedures.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-brand-border/60 text-[11px] font-semibold text-brand-deepteal flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">check_circle</span> Sterile
              Surgical Air Filtration
            </div>
          </div>

          {/* 10. Ventilator Support */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-xs hover:border-brand-teal transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-brand-lightcyan text-brand-deepteal flex items-center justify-center font-bold text-xs">
                  10
                </span>
                <span className="text-[10px] uppercase font-bold text-brand-deepteal bg-brand-lightcyan px-2 py-0.5 rounded">
                  Life Support
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy">Advanced Ventilator Facilities</h3>
              <p className="text-xs text-brand-navy/75 leading-relaxed">
                Invasive and non-invasive positive pressure mechanical ventilators for acute
                respiratory distress, severe trauma shock, and post-operative recovery.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-brand-border/60 text-[11px] font-semibold text-brand-deepteal flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">check_circle</span>{" "}
              Multi-Mode Respiratory Drives
            </div>
          </div>

          {/* 11. 24x7 Emergency & Trauma Bay */}
          <div className="sm:col-span-2 lg:col-span-2 bg-gradient-to-r from-brand-darknavy to-brand-navy text-white rounded-xl p-5 shadow-md flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-brand-teal text-white flex items-center justify-center font-bold text-xs">
                  11
                </span>
                <span className="text-[10px] uppercase font-bold text-brand-cyan bg-brand-deepteal px-2.5 py-0.5 rounded">
                  Casualty Gate
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                24x7 Emergency &amp; Trauma Care Bay
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Immediate zero-delay resuscitation with direct drive-in ambulance ramp at 96, Aruna
                Nagar. Emergency blood typing, trauma sutures, facial stabilization, and emergency
                surgical mobilization.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-white/20 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-brand-cyan font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-cyan beacon-pulse"></span> Rapid
                Trauma Team Active
              </span>
              <a
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-brand-deepteal hover:bg-brand-navy px-3.5 py-1.5 rounded transition-colors"
                href="tel:+919759008704"
              >
                <span className="material-symbols-outlined text-[15px]">call</span> +91 97590
                08704
              </a>
            </div>
          </div>
        </div>

        {/* View All Departments Link */}
        <div className="text-center pt-10">
          <a
            href="/departments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-deepteal text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
          >
            <span>Explore Complete Specifications For All 11 Facilities</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
