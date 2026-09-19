import React from "react";

export default function AboutSection() {
  return (
    <>
      <section className="py-20 bg-white" data-purpose="about-section" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hospital Narrative & Metrics */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                  About Dr. Himanshu Hospital
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Compassionate Care Built On Clinical Precision &amp; Trust
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                <strong>Dr. Himanshu Hospital</strong> is a multispeciality medical center offering
                comprehensive healthcare under one roof. Our team of experienced specialists provides
                patient-focused care across <strong>Dental &amp; Oral Healthcare, Oral &amp; Maxillofacial Surgery, ENT, Neurosurgery, Onco Surgery, and General Medicine</strong>. We provide expert consultations, diagnosis, preventive care and advanced surgical treatments with a strong focus on patient safety, clinical excellence and compassionate service.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our aim is to deliver reliable, accessible and personalized healthcare for individuals
                and families in a comfortable and professional environment. <strong>Dr. Himanshu Hospital – Multispeciality Care, Under One Roof.</strong>
              </p>

              {/* 4 Stats Counters Matching reference snapshot */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
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
                  <span className="text-xs font-semibold text-slate-500">Departments</span>
                </div>
                <div className="border-l-2 border-blue-500 pl-3">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900">4+</span>
                  <span className="text-xs font-semibold text-slate-500">Modular OTs</span>
                </div>
              </div>

              <div>
                <a
                  className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-deepteal text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded-xl transition-all active:scale-95 shadow-md"
                  href="/about"
                >
                  <span>Learn More About Hospital &amp; Vision</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Right Column: Medical Infrastructure Visual + Experience Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  alt="Modular Operation Theatre Dr. Himanshu Hospital"
                  className="w-full h-[420px] object-cover object-center"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf3kLZsLO9KBX9fHDbknTfsgfTcz-K7pnPmXoYjhiizmnGvwavjS00JciHKRsvG3-AK43X-ZJ2phxmmT4SXhc8zSVHYoKg__RSEnuWUznKgP4pmf3X3npfq0_JYCo7diiB8wLPM9cmETsWkwzANsND7AzihwyP9bb-EIY22SzfOQA6wf56NmfMdShsZo-hj9XjnjcHCf47i03Cgn6JXbrXv2wWhXoyMGDHCCUPizXv_xHCHSx86Pkyqg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-brand-teal text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl max-w-[180px] sm:max-w-[220px] border-4 border-white">
                <span className="block text-4xl font-extrabold leading-none">15+</span>
                <span className="block text-sm font-semibold tracking-wide mt-1">
                  Years of Clinical &amp; Surgical Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MaxFax Center of Excellence Section */}
      <section
        className="bg-brand-navy text-white py-10 border-y border-slate-800"
        data-purpose="maxfax-center-of-excellence"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/30 text-cyan-300 border border-brand-teal/40 text-[11px] font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">award_star</span> Center of Excellence
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Dr. Himanshu Upadhyay&apos;s Face Hospital
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-3xl">
                Directed by <strong>Dr. Himanshu Upadhyay (MDS, Oral &amp; Maxillofacial Surgeon)</strong>. Offering painless treatments with advanced technologies and ethical practices. Round-the-clock emergency management for mandibular fractures, zygomatic bone fixation, jaw realignment, oral pathology, TMJ disorders, and modern dental implants.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <a
                className="px-5 py-2.5 rounded-xl bg-brand-teal hover:bg-brand-deepteal text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center gap-1.5"
                href="/appointment?doctor=Dr.%20Himanshu%20Upadhyay"
              >
                <span className="material-symbols-outlined text-[16px]">calendar_month</span> Consult MaxFax Surgeon
              </a>
              <a
                className="px-5 py-2.5 rounded-xl border border-slate-600 hover:bg-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 flex items-center gap-1.5"
                href="tel:+919759008704"
              >
                <span className="material-symbols-outlined text-[16px] text-brand-cyan">call</span> 24x7 Trauma Line
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
