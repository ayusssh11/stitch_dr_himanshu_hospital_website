import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "About Us | Dr. Himanshu Hospital - Dr. Himanshu Upadhyay's Face Hospital Etah",
  description:
    "Learn about Dr. Himanshu Hospital, directed by Dr. Himanshu Upadhyay (MDS, Oral and Maxillofacial Surgeon). Multispeciality care with 100+ beds, Modular OTs, Level-III ICU in Aruna Nagar, Etah.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="About The Institution"
        title="Compassionate Care Built On"
        highlightText="Clinical Precision & Trust"
        description="Dr. Himanshu Hospital (Dr. Himanshu Upadhyay's Face Hospital) is Western U.P.'s premier multispeciality medical and surgical hospital, offering state-of-the-art reconstructive and critical healthcare under one roof."
        breadcrumb={[{ label: "About Us" }]}
      />

      {/* Main Narrative & Hospital Story */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                  Our Mission &amp; Heritage
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight">
                  A Multispeciality Hospital Serving Etah &amp; Western Uttar Pradesh
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Founded with the vision to bring world-class surgical precision and tertiary-grade critical care to Western Uttar Pradesh, <strong>Dr. Himanshu Hospital</strong> (also widely known as <em>Dr. Himanshu Upadhyay&apos;s Face Hospital</em>) provides comprehensive multispeciality medical and surgical solutions under one roof.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Directed by <strong>Dr. Himanshu Upadhyay (MDS, Oral and Maxillofacial Surgeon)</strong>, the hospital serves as an apex center for complex facial bone fracture reconstruction, head &amp; neck trauma, orthognathic jaw realignment, and general multidisciplinary specialties including <strong>General Medicine, ENT, Neurosurgery, Surgical Oncology, and Gynaecology</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-brand-ice border border-brand-border/60 text-xs sm:text-sm text-brand-navy leading-relaxed font-medium">
                <span className="font-bold text-brand-deepteal block mb-1">
                  &ldquo;Multispeciality Care, Under One Roof&rdquo;
                </span>
                Our commitment is to eliminate the need for patients in Etah and nearby districts to travel to Agra or Delhi for critical surgeries, intensive ICU care, or reconstructive maxillofacial procedures.
              </div>

              {/* 4 Stats Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="border-l-2 border-brand-teal pl-3">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900">100+</span>
                  <span className="text-xs font-semibold text-slate-500">Inpatient Beds</span>
                </div>
                <div className="border-l-2 border-emerald-500 pl-3">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900">24/7</span>
                  <span className="text-xs font-semibold text-slate-500">Emergency &amp; Trauma</span>
                </div>
                <div className="border-l-2 border-cyan-500 pl-3">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900">11+</span>
                  <span className="text-xs font-semibold text-slate-500">Facilities</span>
                </div>
                <div className="border-l-2 border-blue-500 pl-3">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900">4+</span>
                  <span className="text-xs font-semibold text-slate-500">Modular OTs</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  alt="Modular Operation Theatre Dr. Himanshu Hospital"
                  className="w-full h-[440px] object-cover object-center"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf3kLZsLO9KBX9fHDbknTfsgfTcz-K7pnPmXoYjhiizmnGvwavjS00JciHKRsvG3-AK43X-ZJ2phxmmT4SXhc8zSVHYoKg__RSEnuWUznKgP4pmf3X3npfq0_JYCo7diiB8wLPM9cmETsWkwzANsND7AzihwyP9bb-EIY22SzfOQA6wf56NmfMdShsZo-hj9XjnjcHCf47i03Cgn6JXbrXv2wWhXoyMGDHCCUPizXv_xHCHSx86Pkyqg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                    Advanced Surgical Infrastructure
                  </span>
                  <p className="text-white text-sm font-semibold">
                    Class-100 Laminar Airflow Modular Operation Theatres with HEPA filtration
                  </p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-brand-deepteal text-white p-4 sm:p-5 rounded-2xl shadow-xl border-4 border-white max-w-[200px]">
                <span className="block text-3xl font-extrabold leading-none">15+</span>
                <span className="block text-xs font-semibold tracking-wide mt-1">
                  Years of Combined Clinical Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director & Lead Specialist Highlight */}
      <section className="py-16 bg-brand-ice border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-brand-teal shadow-xl bg-slate-100 relative mb-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ24fCOba-EZSROLPc74tfYOrQpFYpMWnGHtjx1-30_TKDxVAU0kVN_E_Owj7chll7zBo_xD1zyAmPq9nPW23ELhvZ1ZKOA3QumcFivr-YmqVY_1UPi1p12-y-MrkNfvYjBQhJ8fFh8JTkicGAROZQ8h_zrnGRM8ZsGMPhSoU-6TYdylkzYJWeghJDcNXuMHJQldgst6CakFRuMzw46luPTInxF6Ixul2AXQrXzMy1HqIlEoZRpie5aQ"
                  alt="Dr. Himanshu Upadhyay"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-extrabold text-brand-navy">Dr. Himanshu Upadhyay</h3>
              <p className="text-xs font-bold text-brand-teal mt-0.5">
                BDS, MDS (Oral &amp; Maxillofacial Surgery)
              </p>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Medical Director &amp; Chief Maxillofacial Surgeon
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightcyan text-brand-deepteal text-[11px] font-bold">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                AOMSI &amp; AO CMF Fellow
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                Director&apos;s Message
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                &ldquo;Every patient deserves tertiary-grade surgical precision and ethical bedside care.&rdquo;
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Welcome to Dr. Himanshu Hospital. When establishing this hospital in Etah, our goal was simple yet profound: to deliver surgical standards equivalent to metropolitan centers right here in our community. Facial trauma patients often face critical golden-hour emergencies where every minute counts. Having dedicated Modular OTs, high-definition surgical plating equipment, and an active Level-III ICU enables us to save lives and restore normal anatomical function without referral delays.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Along with our Maxillofacial center, our experienced consultants across General Medicine, ENT, Neurosurgery, Oncology, and Gynaecology ensure your family receives holistic, compassionate treatment 24 hours a day, 7 days a week.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/maxillofacial"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-deepteal text-white text-xs font-bold hover:bg-brand-navy transition-colors"
                >
                  <span>Explore Maxillofacial Wing</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-brand-border text-brand-deepteal text-xs font-bold hover:bg-brand-lightcyan transition-colors"
                >
                  <span>Book Consultation with Dr. Himanshu</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              Why Patients Choose Us
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
              Four Pillars of Our Clinical Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-brand-teal transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-teal flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">precision_manufacturing</span>
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">Class-100 Modular OTs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Positive pressure laminar airflow suites minimizing surgical infection rates to near zero for complex bone and tumor surgeries.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-brand-teal transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-teal flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">vital_signs</span>
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">Level-III ICU &amp; Ventilators</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                24x7 intensivist and anaesthetist coverage with continuous arterial blood pressure, capnography, and advanced mechanical ventilation.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-brand-teal transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-teal flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">verified_user</span>
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">100% Cashless Ayushman</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Empaneled under Ayushman Bharat PM-JAY and major private TPAs ensuring zero out-of-pocket financial burden for eligible patients.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-brand-teal transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-teal flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">timer</span>
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">Rapid Door-to-OT Protocol</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trauma casualties receive immediate triage within 3 minutes and emergency surgery entry within 20 minutes for severe injuries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Quick Contact CTA */}
      <section className="py-12 bg-gradient-to-r from-brand-darknavy to-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Need Medical Assistance or Have Questions?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              Our 24/7 reception desk and emergency triage bay in Aruna Nagar, Etah are always open.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/appointment"
              className="px-5 py-2.5 rounded-xl bg-brand-teal hover:bg-brand-deepteal text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Book OPD Token
            </Link>
            <a
              href="tel:+919759008704"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              Call Hotline: +91 97590 08704
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
