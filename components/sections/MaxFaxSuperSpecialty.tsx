import React from "react";

export default function MaxFaxSuperSpecialty() {
  return (
    <section className="py-14 sm:py-20 bg-white" id="maxfax-wing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightcyan border border-brand-cyan/40 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-teal beacon-pulse"></span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-deepteal">
                Western UP&apos;s Apex Facial Trauma &amp; Craniofacial Reconstructive Wing
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-brand-navy tracking-tight leading-tight">
              Advanced Oral &amp; Maxillofacial{" "}
              <span className="text-brand-deepteal">Surgical Institute</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-navy/80 leading-relaxed">
              Western Uttar Pradesh’s dedicated center of clinical excellence for acute high-velocity
              facial bone fractures, orthognathic cranio-jaw corrections, TMJ ankylosis, and
              microvascular flap reconstructions. Zero transit delays to capital metros during
              critical golden hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-brand-border shadow-xs">
              <span className="material-symbols-outlined text-brand-teal text-[20px]">
                verified_user
              </span>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-brand-navy/60 leading-none">
                  Protocol Standard
                </div>
                <div className="text-xs font-bold text-brand-navy">NABH &amp; AO CMF Guided</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-brand-lightcyan px-3.5 py-2 rounded-xl border border-brand-cyan/30 shadow-xs">
              <span className="material-symbols-outlined text-brand-deepteal text-[20px]">
                biotech
              </span>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-brand-navy/60 leading-none">
                  Technology
                </div>
                <div className="text-xs font-bold text-brand-deepteal">
                  Piezosurgery® &amp; 3D C-Arm
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="bg-brand-ice/60 border border-brand-border/80 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-brand-deepteal text-white flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[24px]">hotel_class</span>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-brand-navy leading-none">
                15,000+
              </div>
              <div className="text-[11px] font-semibold text-brand-navy/70 mt-1">
                Facial &amp; Maxfax Cases
              </div>
            </div>
          </div>
          <div className="bg-brand-ice/60 border border-brand-border/80 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-brand-teal text-white flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[24px]">air</span>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-brand-teal leading-none">
                Class 100
              </div>
              <div className="text-[11px] font-semibold text-brand-navy/70 mt-1">
                Positive Pressure Laminar OT
              </div>
            </div>
          </div>
          <div className="bg-brand-ice/60 border border-brand-border/80 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-brand-navy text-white flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[24px] text-brand-cyan">timer</span>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-brand-navy leading-none">
                &lt; 20 Mins
              </div>
              <div className="text-[11px] font-semibold text-brand-navy/70 mt-1">
                Door-to-OT Trauma Response
              </div>
            </div>
          </div>
          <div className="bg-brand-ice/60 border border-brand-border/80 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[24px]">card_membership</span>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-emerald-800 leading-none">
                100% Free
              </div>
              <div className="text-[11px] font-semibold text-brand-navy/70 mt-1">
                PM-JAY Ayushman Cashless
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Breakdown (8 Cols) & Dr. Himanshu Profile (4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Specialty Cards (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Primary Highlight Card: Complex Fractures & Titanium Plating */}
            <div className="bg-gradient-to-br from-brand-ice via-white to-brand-ice/40 rounded-2xl p-6 sm:p-7 border-2 border-brand-deepteal/30 hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <div className="w-14 h-14 rounded-2xl bg-brand-deepteal text-white flex items-center justify-center shrink-0 shadow-md shadow-brand-deepteal/25 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[30px]">healing</span>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-brand-navy text-white tracking-wider">
                        Trauma Gold Standard
                      </span>
                      <span className="text-[10px] font-bold text-brand-deepteal bg-brand-lightcyan px-2 py-0.5 rounded">
                        AO CMF Protocol
                      </span>
                    </div>
                    <span className="text-xs font-bold text-brand-navy/60 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px] text-brand-teal">
                        schedule
                      </span>{" "}
                      24x7 Immediate Mobilization
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-brand-navy">
                    Complex Facial Fractures &amp; Rigid Titanium Micro-Plating
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy/75 leading-relaxed">
                    Definitive anatomical reduction, 3D anatomical alignment, and low-profile
                    titanium osteosynthesis for fractured mandibles (symphysis, parasymphysis,
                    angle, condyle), zygomatico-maxillary complex (ZMC), orbital blowout fractures,
                    and Le Fort I, II, III midface disruption.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                    <div className="bg-white px-3 py-1.5 rounded-lg border border-brand-border/80 flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-[16px]">
                        check_circle
                      </span>
                      <span className="text-brand-navy font-semibold text-[11px]">
                        Sub-ciliary &amp; Transoral Entry
                      </span>
                    </div>
                    <div className="bg-white px-3 py-1.5 rounded-lg border border-brand-border/80 flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-[16px]">
                        check_circle
                      </span>
                      <span className="text-brand-navy font-semibold text-[11px]">
                        Zero Visible Scarring Technique
                      </span>
                    </div>
                    <div className="bg-white px-3 py-1.5 rounded-lg border border-brand-border/80 flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-[16px]">
                        check_circle
                      </span>
                      <span className="text-brand-navy font-semibold text-[11px]">
                        Occlusion &amp; Chew Restoration
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-brand-border hover:border-brand-teal hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-lightcyan text-brand-deepteal flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">face</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-deepteal bg-brand-lightcyan px-2 py-0.5 rounded">
                      Aesthetic &amp; Functional
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-brand-navy">
                    Orthognathic &amp; Facial Symmetry Correction
                  </h4>
                  <p className="text-xs text-brand-navy/70 leading-relaxed">
                    Precision bilateral sagittal split osteotomies (BSSO), Le Fort I osteotomies,
                    and genioplasty for prognathic or retrognathic jaws, open bites, severe facial
                    asymmetries, and obstructive sleep apnea.
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-brand-teal">
                    Virtual Surgical Planning (VSP)
                  </span>
                  <span className="material-symbols-outlined text-brand-deepteal text-[16px]">
                    arrow_forward
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-brand-border hover:border-brand-teal hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-lightcyan text-brand-deepteal flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">architecture</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-navy/70 bg-brand-ice px-2 py-0.5 rounded">
                      Joint Restoration
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-brand-navy">
                    TMJ Arthroscopy &amp; Ankylosis Release
                  </h4>
                  <p className="text-xs text-brand-navy/70 leading-relaxed">
                    Gap arthroplasty with interpositional temporalis muscle flaps, lysis and lavage
                    for jaw locking, condylar reconstruction, and personalized physiotherapeutic
                    mobilization to regain 40mm+ mouth opening.
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-brand-teal">
                    Relief from Chronic Lockjaw
                  </span>
                  <span className="material-symbols-outlined text-brand-deepteal text-[16px]">
                    arrow_forward
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-brand-border hover:border-brand-teal hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-lightcyan text-brand-deepteal flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">vital_signs</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-deepteal bg-brand-lightcyan px-2 py-0.5 rounded">
                      Onco-Surgical Care
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-brand-navy">
                    Oral Oncology &amp; Microvascular Reconstruction
                  </h4>
                  <p className="text-xs text-brand-navy/70 leading-relaxed">
                    Radical en-bloc resections of oral malignancies, leukoplakia, ameloblastomas,
                    and odontogenic lesions, combined with primary vascularized reconstruction to
                    rebuild natural facial contours.
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-brand-teal">
                    Rapid Biopsy &amp; Tumor Board
                  </span>
                  <span className="material-symbols-outlined text-brand-deepteal text-[16px]">
                    arrow_forward
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-brand-border hover:border-brand-teal hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-lightcyan text-brand-deepteal flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">dentistry</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-deepteal bg-brand-lightcyan px-2 py-0.5 rounded">
                      Permanent Rehab
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-brand-navy">
                    Zygomatic &amp; Basal Complex Implants
                  </h4>
                  <p className="text-xs text-brand-navy/70 leading-relaxed">
                    Full-arch immediate functional loading, pterygoid and quad zygomatic implants
                    in atrophic maxilla where conventional bone grafting fails, restoring total
                    mastication within 72 hours.
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-brand-teal">
                    Permanent Teeth in Days
                  </span>
                  <span className="material-symbols-outlined text-brand-deepteal text-[16px]">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Dr. Himanshu Profile Card (4 cols) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-brand-ice via-white to-white rounded-3xl p-6 sm:p-7 border-2 border-brand-border shadow-lg flex flex-col justify-between relative">
            <div className="absolute -top-3 right-6 bg-brand-deepteal text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">verified</span> Master of
              Surgery (OMFS)
            </div>

            <div className="space-y-5 pt-2">
              <div className="relative rounded-2xl overflow-hidden border-2 border-brand-border shadow-md aspect-square max-w-[290px] mx-auto w-full bg-brand-navy group">
                <img
                  alt="Professional studio portrait of Dr. Himanshu, Chief Oral & Maxillofacial Surgeon"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  src="/dr%20himashu%20.png"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-brand-darknavy/85 backdrop-blur-md px-3 py-2 rounded-xl border border-brand-cyan/30 text-white flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cyan block">
                      Clinical Leadership
                    </span>
                    <span className="text-xs font-bold text-white">15+ Years Surgical Mastery</span>
                  </div>
                  <span className="material-symbols-outlined text-brand-cyan text-[20px]">
                    verified
                  </span>
                </div>
              </div>

              <div className="text-center sm:text-left space-y-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-deepteal block">
                  Chief Craniofacial &amp; Trauma Surgeon
                </span>
                <h3 className="text-2xl font-extrabold text-brand-navy">Dr. Himanshu</h3>
                <p className="text-xs sm:text-sm font-bold text-brand-teal">
                  BDS, MDS (Oral &amp; Maxillofacial Surgery)
                </p>
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="bg-white border border-brand-border text-brand-navy text-[10px] font-bold px-2 py-0.5 rounded">
                    AOMSI Fellow
                  </span>
                  <span className="bg-white border border-brand-border text-brand-navy text-[10px] font-bold px-2 py-0.5 rounded">
                    AO CMF Member
                  </span>
                  <span className="bg-brand-lightcyan text-brand-deepteal text-[10px] font-bold px-2 py-0.5 rounded">
                    Ex-PGIMS Faculty
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-brand-navy/80 bg-white p-4 rounded-xl border border-brand-border shadow-2xs">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-brand-deepteal text-[18px] shrink-0 mt-0.5">
                    workspace_premium
                  </span>
                  <span>
                    Western UP&apos;s leading pioneer in zero-transfer emergency craniofacial
                    osteosynthesis.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-brand-deepteal text-[18px] shrink-0 mt-0.5">
                    clinical_notes
                  </span>
                  <span>
                    15,000+ maxillofacial trauma reductions and corrective orthognathic interventions.
                  </span>
                </div>
              </div>

              <p className="text-xs italic text-brand-navy/80 leading-relaxed bg-brand-lightcyan/70 p-3.5 rounded-xl border-l-4 border-brand-deepteal">
                &ldquo;Every facial injury patient deserves immediate anatomical restoration and
                aesthetic dignity right here in Etah, without risking the hazards of transit to Agra
                or Delhi during crucial golden hours.&rdquo;
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-brand-navy/70 font-medium">Specialist OPD:</span>
                <span className="font-bold text-brand-navy">Mon – Sat (10:00 AM – 3:00 PM)</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-brand-navy/70 font-medium">Trauma Plating OT:</span>
                <span className="font-bold text-brand-deepteal">24x7 Immediate On-Call</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-deepteal text-white hover:bg-brand-navy transition-colors font-bold text-xs shadow-xs"
                  href="/appointment?doctor=Dr.%20Himanshu%20Upadhyay"
                >
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                  <span>Book Token</span>
                </a>
                <a
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-navy text-white hover:bg-brand-darknavy transition-colors font-bold text-xs shadow-xs"
                  href="tel:+919759008704"
                >
                  <span className="material-symbols-outlined text-[16px] text-brand-cyan">
                    call
                  </span>
                  <span>Direct Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Surgical Precision Equipment Suite Bar */}
        <div className="mt-12 bg-white rounded-2xl border border-brand-border/80 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-brand-border/60">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-deepteal block mb-1">
                SURGICAL PRECISION EQUIPMENT
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
                Cutting-Edge Maxillofacial &amp; Reconstructive Technology Suite
              </h4>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-brand-navy/70 self-start sm:self-center shrink-0">
              <span className="material-symbols-outlined text-brand-teal text-[18px]">
                verified
              </span>
              <span>Hospital In-House Infrastructure</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center pt-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-deepteal flex items-center justify-center shrink-0 border border-brand-border/60">
                <span className="material-symbols-outlined text-[24px]">radar</span>
              </div>
              <div>
                <div className="font-bold text-sm text-brand-navy">Digital OPG &amp; 3D C-Arm</div>
                <div className="text-xs text-brand-navy/70 mt-0.5">
                  Sub-millimeter fracture diagnostic scanning
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-deepteal flex items-center justify-center shrink-0 border border-brand-border/60">
                <span className="material-symbols-outlined text-[24px]">
                  precision_manufacturing
                </span>
              </div>
              <div>
                <div className="font-bold text-sm text-brand-navy">
                  Piezosurgery® Ultrasonic Saws
                </div>
                <div className="text-xs text-brand-navy/70 mt-0.5">
                  Selective bone cutting sparing soft-tissue nerves
                </div>
              </div>
            </div>

            <div className="bg-brand-ice/80 border-2 border-brand-cyan/40 rounded-2xl p-4 sm:px-5 flex items-center gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-brand-darknavy text-brand-cyan flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[26px]">timer</span>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-brand-navy leading-none">
                  &lt; 20 Mins
                </div>
                <div className="text-xs font-semibold text-brand-navy/75 mt-1">
                  Door-to-OT Trauma Response
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-deepteal flex items-center justify-center shrink-0 border border-brand-border/60">
                <span className="material-symbols-outlined text-[24px]">biotech</span>
              </div>
              <div>
                <div className="font-bold text-sm text-brand-navy">
                  Surgical Loupes &amp; Microvascular OT
                </div>
                <div className="text-xs text-brand-navy/70 mt-0.5">
                  High-magnification microsurgical anastomosis
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View Full Wing Link */}
        <div className="text-center pt-8">
          <a
            href="/maxillofacial"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-teal hover:bg-brand-deepteal text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
          >
            <span>Learn More About Western UP&apos;s Flagship Maxillofacial Center</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
